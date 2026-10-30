"""Exercise the real source-to-catalog and README synchronization boundaries."""
import copy
import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location("site_pipeline", Path(__file__).parents[1] / "scripts/site.py")
pipeline = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(pipeline)


class SitePipelineTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.source = self.root / "实用工具/example.txt"
        self.source.parent.mkdir()
        self.source.write_text("Original text\n第二行\n", encoding="utf-8")
        self.entry = dict(id="stable-example", category="practical", kind="prompt", status="local",
                          archived=False, adult=False, featured=False, author="Example",
                          title={"zh": "示例", "en": "Example"}, description={"zh": "说明", "en": "Description"},
                          sourcePath="实用工具/example.txt", preview=True)
        self.data = {"repository": "https://github.com/example/collection", "categories": [
            {"id": key, "name": {"zh": key, "en": key}, "criteria": {"zh": "标准", "en": "Criteria"}}
            for key in ("practical", "meta", "writing", "roleplay", "jailbreak", "nsfw")],
            "resources": [self.entry], "readme": {"groups": {}, "blocks": {
                lang: {"practical": "[{{@stable-example.title}}]({{@stable-example.url}}) {{@stable-example.description}}\n"}
                for lang in ("zh", "en")}}}
        for name in ("README.md", "README.en.md"):
            (self.root / name).write_text("Manual introduction\n<!-- catalog:begin practical -->\nold\n<!-- catalog:end practical -->\nManual ending\n", encoding="utf-8")
        for name in ("index.html", "styles.css", "header-additions.css", "header-additions.js", "favicon.svg",
                     "shared/base.css", "shared/core.js", "shared/copy.js", "shared/app.js"):
            path = self.root / "site" / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text("" if name != "index.html" else "<link href='styles.css'><script src='catalog.js'></script>", encoding="utf-8")
        self.git("init", "-q")
        self.git("add", ".")

    def git(self, *args):
        return subprocess.check_output(["git", *args], cwd=self.root, text=True).strip()

    def test_body_changes_flow_to_preview_and_source_links_without_changing_metadata(self):
        pipeline.validate(self.root, self.data)
        self.source.write_text("Edited verbatim\n", encoding="utf-8")
        out = self.root / "_site"
        catalog = pipeline.build(self.root, self.data, out, "a" * 40, "2026-10-31T00:00:00Z")
        self.assertEqual(catalog["resources"][0]["preview"], "Edited verbatim\n")
        self.assertEqual(catalog["resources"][0]["id"], "stable-example")
        self.assertIn("/blob/" + "a" * 40 + "/", catalog["resources"][0]["url"])
        self.assertIn("styles.css?v=" + "a" * 40, (out / "index.html").read_text())
        self.assertFalse((out / "README.md").exists())
        self.assertEqual(self.data["resources"][0]["preview"], True)

    def test_new_tracked_source_requires_an_explicit_record(self):
        path = self.source.with_name("unregistered.txt")
        path.write_text("Do not auto-publish", encoding="utf-8")
        self.git("add", str(path.relative_to(self.root)))
        with self.assertRaisesRegex(pipeline.CatalogError, "unregistered"):
            pipeline.validate(self.root, self.data)

    def test_restricted_category_cannot_gain_a_preview_by_setting_a_flag(self):
        target = self.root / "角色扮演/example.txt"
        target.parent.mkdir()
        self.git("mv", self.entry["sourcePath"], str(target.relative_to(self.root)))
        self.entry["sourcePath"] = "角色扮演/example.txt"
        self.entry["category"] = "roleplay"
        with self.assertRaisesRegex(pipeline.CatalogError, "preview"):
            pipeline.validate(self.root, self.data)

    def test_rename_preserves_id_and_updates_both_readmes(self):
        renamed = self.source.with_name("renamed file.txt")
        self.git("mv", str(self.source.relative_to(self.root)), str(renamed.relative_to(self.root)))
        self.entry["sourcePath"] = "实用工具/renamed file.txt"
        pipeline.validate(self.root, self.data)
        pipeline.render_readmes(self.root, self.data, write=True)
        self.assertIn("实用工具/renamed%20file.txt", (self.root / "README.md").read_text())
        self.assertIn("[Example](实用工具/renamed%20file.txt)", (self.root / "README.en.md").read_text())
        self.assertTrue((self.root / "README.md").read_text().startswith("Manual introduction\n"))

    def test_stale_readme_fails_without_modifying_it(self):
        before = (self.root / "README.md").read_bytes()
        with self.assertRaisesRegex(pipeline.CatalogError, "README"):
            pipeline.render_readmes(self.root, self.data, write=False)
        self.assertEqual((self.root / "README.md").read_bytes(), before)

    def test_external_url_change_propagates_to_generated_readmes(self):
        self.data["resources"] = [dict(self.entry, id="external", preview=False,
                                      url="https://example.org/new", sourcePath=None)]
        for lang in ("zh", "en"):
            self.data["readme"]["blocks"][lang]["practical"] = "[{{@external.title}}]({{@external.url}})\n"
        pipeline.render_readmes(self.root, self.data, write=True)
        for name in ("README.md", "README.en.md"):
            self.assertIn("https://example.org/new", (self.root / name).read_text())

    def test_new_record_can_join_readme_group_without_editing_the_readme_template(self):
        self.data["readme"]["groups"]["practical-new"] = {"autoEntries": True}
        self.entry["readmeGroup"] = "practical-new"
        for lang in ("zh", "en"):
            self.data["readme"]["blocks"][lang]["practical"] = "{{#practical-new.entries}}"
        pipeline.render_readmes(self.root, self.data, write=True)
        self.assertIn("[示例](实用工具/example.txt)", (self.root / "README.md").read_text())
        self.assertIn("[Example](实用工具/example.txt)", (self.root / "README.en.md").read_text())

    def test_neutral_adult_metadata_can_be_listed_without_a_body_preview(self):
        self.entry.update(adult=True, preview=False, readmeGroup="practical-new")
        self.data["readme"]["groups"]["practical-new"] = {"autoEntries": True}
        for lang in ("zh", "en"):
            self.data["readme"]["blocks"][lang]["practical"] = "{{#practical-new.entries}}"
        pipeline.validate(self.root, self.data)
        pipeline.render_readmes(self.root, self.data, write=True)
        self.assertIn("[示例]", (self.root / "README.md").read_text())

    def test_duplicate_ids_and_status_archive_mismatch_are_errors(self):
        self.data["resources"].append(copy.deepcopy(self.entry))
        with self.assertRaisesRegex(pipeline.CatalogError, "duplicate"):
            pipeline.validate(self.root, self.data)
        self.data["resources"].pop()
        self.entry["archived"] = True
        with self.assertRaisesRegex(pipeline.CatalogError, "archived"):
            pipeline.validate(self.root, self.data)


if __name__ == "__main__":
    unittest.main()
