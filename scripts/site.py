"""Build the approved static homepage and synchronize catalog-owned README blocks."""
import argparse
import copy
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path, PurePosixPath
import re
import shutil
import subprocess
from urllib.parse import quote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
CATEGORIES = {"practical", "meta", "writing", "roleplay", "jailbreak", "nsfw"}
KINDS = {"prompt", "template", "skill", "collection"}
STATUSES = {"selected", "local", "legacy", "maintainer", "reference", "collection", "archived"}
SOURCE_ROOTS = {"实用工具", "元提示词", "写作辅助", "角色扮演", "越狱破限", "NSFW", "已过期"}
ROOT_CATEGORY = dict(zip(("实用工具", "元提示词", "写作辅助", "角色扮演", "越狱破限", "NSFW"),
                         ("practical", "meta", "writing", "roleplay", "jailbreak", "nsfw")))
ASSETS = ("index.html", "styles.css", "header-additions.css", "header-additions.js", "favicon.svg",
          "shared/base.css", "shared/core.js", "shared/copy.js", "shared/app.js")
OUTPUT_FILES = set(ASSETS) | {"catalog.json", "catalog.js", "build-info.json"}
PUBLIC_FIELDS = {"id", "category", "title", "description", "kind", "status", "archived", "adult", "author",
                 "sourceNote", "sourcePath", "url", "versionUrl", "preview", "featured"}
TOKEN = re.compile(r"\{\{([@#$])([\w-]+)\.([\w.]+)\}\}")


class CatalogError(ValueError):
    pass


def git(root, *args):
    return subprocess.check_output(["git", *args], cwd=root, encoding="utf-8").strip()


def tracked_files(root):
    return set(filter(None, git(root, "ls-files", "-z").split("\0")))


def source_files(paths):
    return {p for p in paths if PurePosixPath(p).parts[0] in SOURCE_ROOTS
            and PurePosixPath(p).suffix in {".txt", ".md"} and PurePosixPath(p).name != "README.md"}


def http_url(value):
    if not isinstance(value, str):
        return False
    parsed = urlsplit(value)
    return parsed.scheme in {"https", "http"} and bool(parsed.netloc) and not parsed.username and not parsed.password


def read_catalog(root):
    return json.loads((root / "catalog/resources.json").read_text(encoding="utf-8"))


def validate(root, data):
    if {c["id"] for c in data["categories"]} != CATEGORIES or len(data["categories"]) != len(CATEGORIES):
        raise CatalogError("categories must contain the six approved categories exactly once")
    if not http_url(data["repository"]):
        raise CatalogError("repository URL must be HTTP(S)")
    tracked = tracked_files(root)
    seen, registered = set(), set()
    for r in data["resources"]:
        rid = r.get("id")
        if not isinstance(rid, str) or not re.fullmatch(r"[\w-]+", rid):
            raise CatalogError("resource ID must be a stable nonempty identifier")
        if rid in seen:
            raise CatalogError(f"duplicate resource ID: {rid}")
        seen.add(rid)
        if r.get("category") not in CATEGORIES or r.get("kind") not in KINDS or r.get("status") not in STATUSES:
            raise CatalogError(f"unknown category/kind/status: {rid}")
        for field in ("archived", "adult", "featured", "preview"):
            if type(r.get(field)) is not bool:
                raise CatalogError(f"{field} must be boolean: {rid}")
        if (r["status"] == "archived") != r["archived"]:
            raise CatalogError(f"status/archived mismatch: {rid}")
        for field in ("title", "description"):
            if not isinstance(r.get(field), dict) or any(not isinstance(r[field].get(lang), str) or not r[field][lang] for lang in ("zh", "en")):
                raise CatalogError(f"missing bilingual {field}: {rid}")
        path = r.get("sourcePath")
        if path:
            parts = PurePosixPath(path)
            actual = root / path
            if parts.is_absolute() or ".." in parts.parts or path not in source_files(tracked):
                raise CatalogError(f"sourcePath must be a tracked resource: {rid}")
            if not actual.resolve().is_relative_to(root.resolve()) or actual.is_symlink() or not actual.is_file():
                raise CatalogError(f"sourcePath must be a regular file inside the repository: {rid}")
            if path in registered:
                raise CatalogError(f"duplicate sourcePath: {rid}")
            archived_path = parts.parts[0] == "已过期"
            category_root = parts.parts[1] if archived_path and len(parts.parts) > 1 else parts.parts[0]
            if archived_path != r["archived"] or ROOT_CATEGORY.get(category_root) != r["category"]:
                raise CatalogError(f"source category/archived location mismatch: {rid}")
            registered.add(path)
        elif not http_url(r.get("url")):
            raise CatalogError(f"external URL must be HTTP(S): {rid}")
        if r.get("versionUrl") and not http_url(r["versionUrl"]):
            raise CatalogError(f"versionUrl must be HTTP(S): {rid}")
        if r["preview"] and (not path or r["adult"] or r["archived"]
                             or r["category"] not in {"practical", "meta", "writing"}
                             or PurePosixPath(path).parts[0] not in {"实用工具", "元提示词", "写作辅助"}):
            raise CatalogError(f"preview is not allowed for this record: {rid}")
        group = r.get("readmeGroup")
        if group and not data["readme"]["groups"].get(group, {}).get("autoEntries"):
            raise CatalogError(f"unknown README entry group: {rid}")
        if group and any("{{#" + group + ".entries}}" not in "\n".join(data["readme"]["blocks"][lang].values()) for lang in ("zh", "en")):
            raise CatalogError(f"README group must appear in both languages: {rid}")
    unregistered = source_files(tracked) - registered
    if unregistered:
        raise CatalogError(f"unregistered tracked resource files: {len(unregistered)}; add explicit catalog records")


def render_template(template, data, lang):
    records = {r["id"]: r for r in data["resources"]}
    categories = {c["id"]: c for c in data["categories"]}
    visiting = set()

    def replace(match):
        kind, key, field = match.groups()
        token = match.group(0)
        if token in visiting:
            raise CatalogError(f"cyclic README token: {token}")
        owners = {"@": records, "#": data["readme"]["groups"], "$": categories}
        try:
            item = owners[kind][key]
            if kind == "#" and field == "entries" and item.get("autoEntries"):
                selected = sorted((r for r in data["resources"] if r.get("readmeGroup") == key and not r["archived"]),
                                  key=lambda r: r.get("readmeOrder", 0))
                value = ""
                for r in selected:
                    rid = r["id"]
                    desc = "readmeDescription" if lang in r.get("readmeDescription", {}) else "description"
                    value += "- **[{{@" + rid + ".title}}]({{@" + rid + ".url}})** · {{@" + rid + ".author}}\n  {{@" + rid + "." + desc + "}}\n\n"
            elif kind == "@" and field == "url":
                value = item.get("sourcePath") or item["url"]
            else:
                value = item
                for part in field.split("."):
                    value = value[part]
            if isinstance(value, dict):
                value = value[lang]
            if not isinstance(value, str):
                raise KeyError(field)
            if field.lower().endswith("url"):
                if kind == "@" and field == "url" and item.get("sourcePath"):
                    value = value.replace("%", "%25")
                value = value.replace(" ", "%20").replace("(", "%28").replace(")", "%29")
                if kind == "@" and field == "url" and item.get("sourcePath"):
                    value = value.replace("[", "%5B").replace("]", "%5D").replace("#", "%23").replace("?", "%3F")
            visiting.add(token)
            try:
                return TOKEN.sub(replace, value)
            finally:
                visiting.remove(token)
        except KeyError as error:
            raise CatalogError(f"unknown README token: {match.group(0)}") from error

    return TOKEN.sub(replace, template)


def render_readmes(root, data, write=False):
    stale = []
    for lang, filename in (("zh", "README.md"), ("en", "README.en.md")):
        path = root / filename
        before = path.read_text(encoding="utf-8")
        text = before
        blocks = data["readme"]["blocks"][lang]
        actual_keys = re.findall(r"<!-- catalog:begin ([\w-]+) -->", text)
        if len(actual_keys) != len(blocks) or set(actual_keys) != set(blocks):
            raise CatalogError(f"README managed block set mismatch: {filename}")
        for key, template in blocks.items():
            start, end = f"<!-- catalog:begin {key} -->", f"<!-- catalog:end {key} -->"
            if text.count(start) != 1 or text.count(end) != 1:
                raise CatalogError(f"README block must occur once: {filename}/{key}")
            left = text.index(start) + len(start)
            right = text.index(end, left)
            text = text[:left] + "\n" + render_template(template, data, lang).strip("\n") + "\n" + text[right:]
        if text != before:
            stale.append(filename)
            if write:
                path.write_text(text, encoding="utf-8")
    if stale and not write:
        raise CatalogError("README generated blocks are stale: " + ", ".join(stale) + "; run python3 scripts/site.py --write")


def build(root, data, out, source_sha, source_date):
    if out.is_symlink():
        raise CatalogError("output cannot be a symbolic link")
    root, out = root.resolve(), out.resolve()
    if not re.fullmatch(r"[0-9a-f]{40}", source_sha):
        raise CatalogError("source SHA must be a full commit ID")
    if not out.is_relative_to(root) or out == root or out.parts[len(root.parts)] in {".git", "site", "catalog", "scripts", "tests"}:
        raise CatalogError("output must be a separate generated directory inside the repository")
    prefix = str(out.relative_to(root)) + "/"
    if any(path.startswith(prefix) for path in tracked_files(root)):
        raise CatalogError("output contains tracked sources")
    if out.exists():
        existing = {f.relative_to(out).as_posix() for f in out.rglob("*") if f.is_file()}
        if existing - OUTPUT_FILES or any(f.is_symlink() for f in out.rglob("*")):
            raise CatalogError("output contains unexpected files; choose an empty generated directory")
        shutil.rmtree(out)
    out.mkdir(parents=True)
    for name in ASSETS:
        source = root / "site" / name
        if source.is_symlink() or not source.resolve().is_relative_to(root / "site"):
            raise CatalogError(f"site asset must be a regular local file: {name}")
        dest = out / name
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, dest)
    index = (out / "index.html").read_text(encoding="utf-8")

    def version_asset(match):
        path = match.group(2)
        if path.startswith("/") or path.startswith("../"):
            raise CatalogError("local homepage assets must use project-relative paths")
        local = path[2:] if path.startswith("./") else path
        if not urlsplit(path).scheme and local.split("?")[0] in OUTPUT_FILES:
            path = local.split("?")[0] + "?v=" + source_sha
        return match.group(1) + path + match.group(3)

    index = re.sub(r"((?:src|href)=['\"])([^'\"]+)(['\"])", version_asset, index)
    (out / "index.html").write_text(index, encoding="utf-8")
    categories = [{k: copy.deepcopy(v) for k, v in c.items() if k != "readmeCriteria"} for c in data["categories"]]
    records = []
    for entry in data["resources"]:
        record = {k: copy.deepcopy(v) for k, v in entry.items() if k in PUBLIC_FIELDS}
        record["preview"] = (root / entry["sourcePath"]).read_text(encoding="utf-8") if entry["preview"] else None
        if entry.get("sourcePath"):
            record["url"] = data["repository"] + "/blob/" + source_sha + "/" + quote(entry["sourcePath"], safe="/")
        records.append(record)
    catalog = dict(version=source_date[:10], commit=source_sha, repository=data["repository"], categories=categories, resources=records)
    content = json.dumps(catalog, ensure_ascii=False, indent=2)
    (out / "catalog.json").write_text(content + "\n", encoding="utf-8")
    (out / "catalog.js").write_text("window.RESOURCE_CATALOG = " + content + ";\n", encoding="utf-8")
    class AssetReferences(HTMLParser):
        def handle_starttag(self, tag, attrs):
            for name, url in attrs:
                if name not in {"src", "href"} or not url or url.startswith("#") or urlsplit(url).scheme:
                    continue
                path = urlsplit(url).path
                if path.startswith("/") or ".." in PurePosixPath(path).parts or not (out / path).is_file():
                    raise CatalogError(f"missing or non-project-relative homepage asset: {path}")
    AssetReferences().feed(index)
    info = dict(sourceSha=source_sha, sourceCommitDate=source_date, builtAtUtc=datetime.now(timezone.utc).isoformat(),
                workingTreeDirty=bool(git(root, "status", "--porcelain", "--untracked-files=no")))
    (out / "build-info.json").write_text(json.dumps(info, indent=2) + "\n", encoding="utf-8")
    return catalog


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--write", action="store_true", help="update generated README blocks before building")
    mode.add_argument("--check", action="store_true", help="require README blocks to be current (default)")
    parser.add_argument("--out", default="_site", help="generated output directory inside the repository")
    parser.add_argument("--base-ref", help="commit to compare for a neutral source-change summary")
    args = parser.parse_args()
    try:
        data = read_catalog(ROOT)
        validate(ROOT, data)
        render_readmes(ROOT, data, write=args.write)
        catalog = build(ROOT, data, ROOT / args.out, git(ROOT, "rev-parse", "HEAD"), git(ROOT, "show", "-s", "--format=%cI", "HEAD"))
        rows = catalog["resources"]
        print(json.dumps(dict(current=sum(not r["archived"] for r in rows), archived=sum(r["archived"] for r in rows),
                              previewable=sum(r["preview"] is not None for r in rows), sourceSha=catalog["commit"])))
        if args.base_ref:
            try:
                changed = set(filter(None, git(ROOT, "diff", "-z", "--name-only", args.base_ref, "HEAD", "--").split("\0")))
                ids = [r["id"] for r in rows if r.get("sourcePath") in changed]
                print(json.dumps({"changedSourceIds": ids, "review": "Check whether descriptions, preview permissions or evidence need updates; review dates are never advanced by this build."}))
            except subprocess.CalledProcessError:
                print("Source-change summary unavailable for the requested base; catalog, README and build checks passed.")
    except (ValueError, TypeError, AttributeError, KeyError, OSError, subprocess.CalledProcessError) as error:
        parser.exit(1, f"Site build failed: {error}\n")


if __name__ == "__main__":
    main()
