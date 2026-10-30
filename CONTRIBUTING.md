# 贡献指南 / Contributing

[中文](#中文) · [English](#english)

## 中文

欢迎提交自己的作品，或推荐发现的具体Prompt、Prompt模板和Skill。优先使用现有栏目；有必要增加栏目时，请说明现有分类为何不适合。插件和整套应用不作为新增条目，但可以介绍优质条目所属的仓库。

### 收录标准

1. **用途明确**：说明解决什么问题、适合谁，以及使用所需的模型、宿主、输入、工具或外部依赖。
2. **有相对价值**：指出相较本库同类内容增加了什么；不为数量重复收录。
3. **内容可审阅**：提供具体文件及原始链接。优先固定提交；未固定版本时注明并给核对日期。作者效果声称、第三方反馈和亲测结果分开记录；不设最低Star，也不强制亲测。
4. **署名与授权清楚**：外链介绍注明作者和来源；复制或改编正文须有相应授权，保留许可并标明修改。不因仓库公开或有Star就推断可以转载。
5. **展示适当**：维护者审阅后决定是否收录，说明缺口或暂缓理由；自己的项目也采用同一标准。认可具体条目不等于为整个仓库背书。

以下是本库的收录边界，并非平台政策的完整清单；平台规则以所链接原文为准。成人向、角色扮演和越狱仍是现有方向，具体内容须符合[GitHub托管规则](https://docs.github.com/en/site-policy/acceptable-use-policies/github-sexually-obscene-content)。不接受旨在性化未成年人或露骨描绘非自愿性行为的条目；不能用改年龄或换名重新包装同一问题内容。[未成年人规则也涵盖文本、模拟和AI生成内容](https://docs.github.com/en/site-policy/acceptable-use-policies/github-child-sexual-exploitation-or-abuse)。中性研究、教育资料按实际内容与语境审阅；分类标签和“18+”声明本身不保证可发布。

### 怎么提交与展示

在[Issue](https://github.com/dongshuyan/Awesome-Prompts/issues)中提名，或提交PR，两者采用同一标准。请提供：

```text
具体条目与原始链接/版本：
建议栏目、用途与使用前提：
相较现有内容的价值：
作者、来源与复制/改编授权（仅链接也请注明）：
是否作者自荐：
可核查反馈或亲测情况（可写“未亲测”）：
```

若声称经过测试，请附模型/工具版本、日期、任务条件及可核查结果；不必为了投稿额外运行。维护者会阅读内容，结合实际反馈判断，仓库热度仅作背景。获收录后展示原仓库、具体精选条目、用途与限制；初期以简介和来源链接为主，不自动复制整个仓库。

PR请保留来源与许可，更新中英文导航。反馈既有问题时提供路径和中性描述，不在Issue中复制有问题的正文。原作者可通过Issue补充署名、授权或提出下架请求。

### 网页与 README 同步维护

收录决定仍由维护者审阅。正文保留在原文件，目录数据集中在 `catalog/resources.json`；网页沿用已选定的 B 版，源码在 `site/`。

- 修改正文：编辑已登记的源文件。需要调整介绍或证据时同时更新目录，审阅日期不会由构建自动推进。
- 修改介绍、分类或来源：编辑对应资源记录的 `title`、`description`、`category`、`url` 或 `versionUrl`；README 较长的说明在 `readmeDescription`。两种语言都需校对。
- 新增条目：先确认收录，分配稳定 `id`，填齐现有字段；`readmeGroup` 设为 `practical-new`、`meta-new`、`writing-new`、`roleplay-new`、`jailbreak-new` 或 `nsfw-new`，可用 `readmeOrder` 调整同组顺序。默认 `preview: false`；正文预览需另行审阅，不能因目录位置相同而自动开启。新增本地文件还需填写 `sourcePath` 并先 `git add` 该文件。
- 重命名或归档：保持 `id`，更新路径；归档同时设置 `archived: true`、`status: "archived"`、`preview: false`。不要直接改生成区块。

更新后，在仓库根目录运行（Python 3.12+，Node.js 24）：

```bash
python3 scripts/site.py --write
python3 -m unittest discover -s tests -p 'test_*.py'
node --test tests/core.test.cjs
python3 -m http.server 8000 --bind 127.0.0.1 --directory _site
```

打开 `http://127.0.0.1:8000/` 查看工作区预览。提交源文件、目录数据与生成的两份 README，不提交 `_site/`。旧分组、系列概述和精选位置在目录的 `readme.blocks` 与 `readme.groups` 中保留；新增条目用上述 `readmeGroup` 自动进入对应列表。分类标准的网页文字和 README 文字分别为 `categories[].criteria` 与 `readmeCriteria`。

PR 只构建和检查。推送到 `master`（包括合并 PR）后自动发布到 [资源网页](https://dongshuyan.com/Awesome-Prompts/)，手动运行 workflow 也只允许发布当前 `master`。流水线使用本仓库的临时令牌，不访问你账号下的其他仓库或改变账号权限，不自动更新子模块或上游作品。发布前检查失败会停止部署；需要回滚时撤销有问题的提交并重新发布。

## English

Submit your own work or suggest a specific prompt, prompt template or skill. Use the existing categories where possible; explain why a new category is necessary. Plugins and complete applications are outside the scope of new entries, although an accepted item can identify its original repository.

### Selection criteria

1. **Clear purpose:** explain the problem, intended users, and required model, host, input, tools or external dependencies.
2. **Added value:** explain what it adds compared with similar material here. Duplicates need a reason.
3. **Inspectable content:** identify the specific file and original source. Prefer a pinned commit; otherwise mark the version unpinned and provide the check date. Separate author claims, third-party reports and firsthand results. There is no minimum Star count or mandatory testing.
4. **Attribution and permission:** credit authors for source-link introductions. Copying or adapting text requires appropriate permission, retained licenses and a description of changes. Public visibility or popularity does not establish redistribution rights.
5. **Appropriate presentation:** maintainers review the item and explain missing information or reasons for deferral. Maintainers' own projects follow the same standard. Accepting an item does not endorse its entire repository.

These are collection criteria, not an exhaustive platform-policy list; consult the linked policy text. Adult, roleplay and jailbreak topics remain existing categories. Individual entries must comply with [GitHub's hosting rules](https://docs.github.com/en/site-policy/acceptable-use-policies/github-sexually-obscene-content). Entries intended to sexualize minors or graphically depict non-consensual sexual acts are not accepted; changing ages or names does not make the same problematic content acceptable. [GitHub's child-protection rules also cover text, simulations and AI-generated material](https://docs.github.com/en/site-policy/acceptable-use-policies/github-child-sexual-exploitation-or-abuse). Neutral research and educational references are assessed in context. A category label or an “18+” notice does not establish publishability.

### Submitting and displaying an entry

Open an [Issue](https://github.com/dongshuyan/Awesome-Prompts/issues) or a PR under the same standard. Include:

```text
Specific entry and original source/version:
Suggested category, purpose and prerequisites:
Value compared with existing content:
Author, source and copying/adaptation permission (or source-link only):
Are you the author?
Verifiable feedback or firsthand results (“not tested” is acceptable):
```

If you claim testing, give the model/tool version, date, task conditions and verifiable results. Additional execution is not required to submit. Maintainers read the content and assess available feedback; repository popularity is background information. An accepted entry identifies the original repository, selected item, purpose and limitations. Initial presentation favors descriptions and source links, without copying whole repositories.

PRs should retain attribution and licenses and update both README languages. For existing-content issues, provide the path and a neutral description without reposting problematic text. Authors can use Issues to clarify attribution, provide permission or request removal.

### Maintaining the website and README

Maintainers still approve selection. Keep resource bodies in their original files and metadata in `catalog/resources.json`. The approved B homepage lives in `site/`.

- Edit registered source files for body changes. Update descriptions or evidence when affected; builds never advance review dates.
- Edit `title`, `description`, `category`, `url` or `versionUrl` in the resource record. Longer README prose belongs in `readmeDescription`. Review both languages.
- For approved additions, assign a stable `id` and complete the existing fields. Set `readmeGroup` to `practical-new`, `meta-new`, `writing-new`, `roleplay-new`, `jailbreak-new` or `nsfw-new`; optional `readmeOrder` controls order within that group. Start with `preview: false`. Body previews need a separate content decision. For local resources, add `sourcePath` and stage the new file with `git add` before building.
- Keep IDs on rename or archive. Update paths; archiving sets `archived: true`, `status: "archived"`, `preview: false`. Do not edit generated README blocks directly.

From the repository root, using Python 3.12+ and Node.js 24:

```bash
python3 scripts/site.py --write
python3 -m unittest discover -s tests -p 'test_*.py'
node --test tests/core.test.cjs
python3 -m http.server 8000 --bind 127.0.0.1 --directory _site
```

Open `http://127.0.0.1:8000/` for a working-tree preview. Commit source files, metadata and generated README changes, excluding `_site/`. Existing grouping and editorial placement are in `readme.blocks` and `readme.groups`; new records use `readmeGroup` to join the appropriate list automatically. Category criteria use explicit website and README fields: `categories[].criteria` and `readmeCriteria`.

PRs only build and check. Pushes to `master`, including merged PRs, publish to the [resource website](https://dongshuyan.com/Awesome-Prompts/). Manual workflow runs can publish only current `master`. The workflow uses this repository's temporary token without accessing other repositories in the owner's account or changing account permissions; it does not update submodules or upstream works. Failed checks stop deployment. Revert a faulty commit and publish again to roll back.
