# Awesome-Prompts

[简体中文](README.md) | English

**Prompts, prompt templates and Agent Skills**, organized by use and maintained by [dongshuyan](https://github.com/dongshuyan). Entries describe specific resources and their prerequisites. Quality takes priority over quantity.

**[Browse the resource website →](https://dongshuyan.com/Awesome-Prompts/)** · Search, filter and preview resources in the browser.

## Browse by purpose

| Category | What you can find |
| --- | --- |
| [Practical tools](#practical-tools) | Search-based Q&A, paper reading, project planning, interface design and agent workflows |
| [Meta-prompts](#meta-prompts) | Generate, refine or compress prompts; organize image-creation specifications |
| [Writing assistance](#writing-assistance) | Document collaboration, rewriting, translation and image-prompt references |
| [Roleplay](#roleplay) | General interaction rules and character settings, including historical adult-oriented entries |
| [Jailbreaks](#jailbreaks) | Historical model-restriction templates and source records |
| [NSFW](#nsfw) | The historical directory of adult-oriented image prompts |

[Collections and online references](#collections-and-online-references) · [Archive and sources](#archive-and-sources) · [Contributions and feedback](#contributions-and-feedback)

Each category's **evaluation focus** applies the general criteria to its use; full selection criteria are in [CONTRIBUTING](CONTRIBUTING.md). New selections rely on reading the content, source checks and verifiable feedback. There is no minimum Star count or mandatory firsthand testing.

**Reading this list:** “External selections” link to the versions read. “Local templates” and “historical directories” provide access to existing material; retention does not mean every item meets the current criteria. Checked on 2026-10-30; no model-effectiveness tests were performed. See [review notes](REVIEW_NOTES.md) for version, license and feedback limitations.

## Practical tools

<!-- catalog:begin practical -->
**Evaluation focus:** A specific task, clear inputs and outputs, explicit tool requirements, and steps that can scale with the task.

**External selection**

- **[frontend-design](https://github.com/anthropics/skills/blob/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/SKILL.md)** · Anthropic · Skill
  Organizes interface design around visual direction, typography, layout and self-review. Intended for agents that can build interfaces; it focuses on visual expression, while engineering correctness needs separate checks. [Corresponding license: Apache-2.0](https://github.com/anthropics/skills/blob/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/LICENSE.txt).

**Local templates and previously collected projects**

- **[Prompt enhancement series](实用工具/提示词增强prompt/)** · Prompt: Understand the task, then search and check evidence as needed. Chinese and English variants are available at different lengths; English `middle` currently matches the full version byte for byte. See [version notes](REVIEW_NOTES.md#版本与适用性).
- **[Academic paper reading](实用工具/学术论文阅读.txt)** · Template: Explains questions, methods, data and results for beginners, separating the paper's reports from external information.
- **[Project optimization and implementation](实用工具/项目优化与施工/)** · Templates: Move from [requirements and proposal](实用工具/项目优化与施工/step1.md) to [implementation and acceptance planning](实用工具/项目优化与施工/step2.md), then [execution handoff](实用工具/项目优化与施工/step3.md). Replace project and document paths before use.
- **[Task clarification and boundaries](实用工具/任务澄清与边界说明.txt)** · Templates: Five frameworks for tasks, ambiguity and output structure. Alternative goals must explain the difference and leave the choice to the user.
- **[COMPASS](https://github.com/dongshuyan/compass-skills#readme)** · Skill collection · **Maintainer-owned project**: Workflows for clarification, task tracking, pausing/resuming and cross-session handoff, plus clear communication and academic editing. See the original project for the full list and installation. The locally pinned entry is `Skills/compass-skills/`.

Other local entries: [health information](实用工具/AI健康顾问.txt) and [Gemini instruction template](实用工具/自信的Gemini.txt). Health material supports general understanding and conversations with clinicians; it does not replace professional care. [Browse all practical tools →](实用工具/)
<!-- catalog:end practical -->

## Meta-prompts

<!-- catalog:begin meta -->
**Evaluation focus:** Clear inputs, outputs and targets for generation or revision. Refinement and compression should preserve goals and essential constraints; length or unmeasured compression ratios do not establish effectiveness.

**Local templates**

- **[Generate a prompt from requirements](元提示词/根据需求生成提示词.txt)**: Organizes decision, analysis, creation, verification and execution tasks. Goal-changing suggestions require confirmation.
- **[Prompt design framework](元提示词/生成prompt的prompt.txt)**: Organizes roles, constraints, outputs and calibration as needed. Persistence depends on actual tools and authorization.
- **[Long-prompt compression](元提示词/长提示词压缩.txt)**: Checks the result against the original meaning, conditions and exceptions; reports a compression ratio only with measured token counts.
- **[Nano Banana Pro image specification](元提示词/Nano-Banana-Pro图像规格架构师.txt)**: Organizes creative requirements into a custom JSON-like specification for adjusting composition and other parameters. It is not an official API request or directly parseable JSON.

[Browse all meta-prompts →](元提示词/)
<!-- catalog:end meta -->

## Writing assistance

<!-- catalog:begin writing -->
**Evaluation focus:** A clear genre or collaboration stage. Factual rewriting preserves meaning, evidence and qualifications; fictional creation stays distinguishable from factual material.

**External selection**

- **[doc-coauthoring](https://github.com/anthropics/skills/blob/00756142ab04c82a447693cf373c4e0c554d1005/skills/doc-coauthoring/SKILL.md)** · Anthropic · Skill
  Connects context gathering, collaborative drafting and reader checks in a multi-turn document workflow, complementing one-pass rewriting templates. Requires ongoing interaction and matching host tool names. Copying permission for the selected directory is unverified; this is a source-link introduction.

**Local template**

- **[Natural-language rewriting](写作辅助/AI内容转人写.txt)** · Prompt: Adjusts wording and transitions while preserving facts, views and logic, without inventing experiences or citations.

[Browse the historical writing directory →](写作辅助/): Also contains translation, text-to-image and cosplay references, some adult-oriented. See [review notes](REVIEW_NOTES.md) for applicability and pending issues.
<!-- catalog:end writing -->

## Roleplay

<!-- catalog:begin roleplay -->
**Evaluation focus:** Clear characters, scenes and interaction rules; user control over their own actions; identified variables, host dependencies and content type.

**External selection**

- **[Roleplay · Immersive](https://github.com/SillyTavern/SillyTavern/blob/06bde939fb1e9c4c8d8641d810f0a916b5bce127/default/content/presets/sysprompt/Roleplay%20-%20Immersive.json)** · SillyTavern · Prompt
  Uses short general rules for character and environment descriptions, producing one reply without deciding the user's actions. The host must substitute `{{user}}` and `{{char}}`. The [repository root license is AGPL-3.0](https://github.com/SillyTavern/SillyTavern/blob/06bde939fb1e9c4c8d8641d810f0a916b5bce127/LICENSE); compatibility for copied or derivative material has not been assessed.

[Browse the historical roleplay directory →](角色扮演/): Individual characters and multi-character settings, including adult-oriented entries. Retention does not renew recommendations for each file.
<!-- catalog:end roleplay -->

## Jailbreaks

<!-- catalog:begin jailbreak -->
**Evaluation focus:** Traceable sources, target model or platform, version and date. Effectiveness claims need supporting conditions and evidence; “unlocking” language is not validation.

**Research reference**

- **[Jailbreaks · Cross-model references](https://github.com/togg53192-cmd/jailbreaks)** · togg53192-cmd · Cross-model prompts and instruction-boundary research collection
  Organizes system prompts, persona definitions and workspace instructions by model family for comparing instruction formats. [Version checked](https://github.com/togg53192-cmd/jailbreaks/blob/17c7117635cf0f270104b1bb8b1e79ff8319a668/README.md) on 2026-10-30; review covered the project description and directory, without reviewing every prompt or testing effectiveness. This is a source-link introduction.

[Browse the historical jailbreak directory →](越狱破限/): Existing material named by model or scenario. Stability and universality claims were not validated through effectiveness testing in this review. Inclusion does not establish platform permission or bypass effectiveness.
<!-- catalog:end jailbreak -->

## NSFW

<!-- catalog:begin nsfw -->
**Evaluation focus:** Clear content type, target tool and dependencies, with sources and presentation meeting the collection boundaries in [CONTRIBUTING](CONTRIBUTING.md).

[Browse the historical NSFW directory →](NSFW/): Existing adult-oriented image-prompt references. Tool capabilities and publication conditions need separate checks; category labels establish neither effectiveness nor publishability.
<!-- catalog:end nsfw -->

## Collections and online references

<!-- catalog:begin collections -->
These existing bookmarks support further discovery; their contents were not read in full. Submodules record fixed commits that may differ from upstream. Check each project's purpose, dependencies and license separately. [Collection-entry review](REVIEW_NOTES.md#合集入口)

### OpenClaw collections

- **[VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)**: A categorized skill index for further task-based discovery. Path: `Skills/Openclaw/awesome-openclaw-skills`.
- **[sundial-org/awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills)**: Another community skill index. Path: `Skills/Openclaw/awesome-openclaw-skills-sundial-org`.
- **[openclaw/skills](https://github.com/openclaw/skills)**: The previously collected skill archive. Its public entry returned 404 on 2026-10-30, which may affect recursive downloads; this does not establish universal failure of local contents. Path: `Skills/Openclaw/skills`.
- **[mergisi/awesome-openclaw-agents](https://github.com/mergisi/awesome-openclaw-agents)**: Agent character settings and templates. Path: `OpenclawAgents/awesome-openclaw-agents`.
- **[hesamsheikh/awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases)**: Use cases organized around practical scenarios. Path: `OpenclawAgents/awesome-openclaw-usecases`.
- **[EvoLinkAI/awesome-openclaw-usecases-moltbook](https://github.com/EvoLinkAI/awesome-openclaw-usecases-moltbook)**: Moltbook use cases and multilingual material. Path: `OpenclawAgents/awesome-openclaw-usecases-moltbook`.

<details>
<summary>Other online bookmarks</summary>

These are historical references, not individual recommendations under the current selection criteria.

- [Nanobanana prompt collection](https://bmzxdlj.cn/): Chinese prompt bookmarks.
- [Labnana](https://labnana.com/zh/explore/all): Images and prompt browsing.
- [YouMind Nano Banana Pro prompts](https://youmind.com/zh-CN/nano-banana-pro-prompts?categories=comic-storyboard): Image prompts organized by theme.
- [Prompt Manager](https://prompt.vioaki.xyz/): Prompt gallery and templates.
- [Feishu prompt table](https://my.feishu.cn/wiki/S5nowuX3uiHXq4kNPb3c7cPpngh?table=tblJT29vyAEQmZzq&view=vewBBRuwm1): Previously collected online table.
- [Feishu knowledge base](https://uahbgrt760r.feishu.cn/wiki/EOXawAHZ5ixJb6kHUU6cxi3QnXc): Previously collected reference entry.

</details>
<!-- catalog:end collections -->

## Use and download

Open a file, select **Raw**, copy the text and replace its placeholders with your task details. Follow any specified instruction placement; install skills according to their original projects. Search, attachments and code execution require actual host capabilities. Check the output after use.

Append enhancement prompts after the task and materials; quoted text and attachments do not thereby gain instruction authority.

<details>
<summary>Download this repository and fetch submodules as needed</summary>

Download local prompts and navigation:

```bash
git clone https://github.com/dongshuyan/Awesome-Prompts.git
cd Awesome-Prompts
```

A normal clone does not download submodule contents. To fetch COMPASS only:

```bash
git submodule update --init Skills/compass-skills
```

For all submodules, run this at the repository root. Some upstreams are currently inaccessible, so fetching everything may fail:

```bash
git submodule update --init --recursive
```

Alternatively, start with `git clone --recurse-submodules https://github.com/dongshuyan/Awesome-Prompts.git`. Fetching a submodule does not install its skills; follow the original project's setup instructions.

</details>

## Archive and sources

[已过期/](已过期/) preserves historical material with its original categories, subdirectories and filenames. For example, `角色扮演/小羊饼/` maps to `已过期/角色扮演/小羊饼/`. See the [archive notes](已过期/README.md) for the current list and known sources.

This repository contains personal work and community material; some early attributions remain incomplete. Submodule licenses belong to the respective projects. Check specific permissions before copying or adapting. Existing source records: [Nano Banana Pro image specification](https://linux.do/t/topic/1410949), [Doubao image prompts](https://linux.do/t/topic/1411250) and [archived roleplay material](已过期/README.md).

## Contributions and feedback

Suggest a specific entry through an [Issue](https://github.com/dongshuyan/Awesome-Prompts/issues) or PR. Maintainer-owned and third-party projects follow the same standard. Use [CONTRIBUTING](CONTRIBUTING.md) to supply the **original item and version, purpose, added value, prerequisites, author and permission**. Include verifiable feedback where available; simply state if you have not tested it.

Accepted entries show the original repository, selected item and recommendation rationale, without endorsing the whole collection. For existing issues, identify the path. Runtime reports are easier to assess with model/tool versions, date, expected and actual behavior. Authors can also request attribution corrections, clarify permission or ask for removal through Issues.

If you found something useful, consider a **Star** or [follow the maintainer](https://github.com/dongshuyan), and share what helped or needs improvement.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=dongshuyan/Awesome-Prompts&type=Date)](https://star-history.com/#dongshuyan/Awesome-Prompts&Date)
