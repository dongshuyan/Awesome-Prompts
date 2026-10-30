# Awesome-Prompts

[简体中文](README.md) | English

A collection of prompts and agent resources maintained by [dongshuyan](https://github.com/dongshuyan). It includes prompts written by the maintainer or collected from the community, Agent Skills, and OpenClaw templates and use cases. Copy a prompt to use it, or follow a skill project's installation guide.

[Find a resource](#find-a-resource) · [Selected resources](#selected-resources) · [Get started](#get-started) · [COMPASS](#compass) · [Resource directory](#resource-directory) · [Archived content](#archived-content) · [Feedback and contributions](#feedback-and-contributions)

## What this repository contains

| Part | Contents | How to use it |
| --- | --- | --- |
| Prompts | Questions and research, paper reading, project planning, writing, images, and character settings, grouped by purpose | Open a file and copy its text into your AI chat or the instruction field supported by your tool |
| Agent Skills | The maintainer's [COMPASS](https://github.com/dongshuyan/compass-skills) project and OpenClaw community skill resources | Install and invoke skills using each project's instructions |
| OpenClaw templates and use cases | Agent settings, templates, and examples | Read the original project and configure it for your use case |
| Archived content | Historical material with its original directory structure | Look up older content and recorded sources |

## Selected resources

New additions are specific prompts, templates or skills with labels from the existing categories. These three entries provide descriptions and pinned source links without copying third-party text. Selection is based on content reading and purpose comparison; their model outputs have not been tested here.

| Resource and author | Category and reason for selection | Prerequisites and license observations |
| --- | --- | --- |
| [doc-coauthoring · Anthropic](https://github.com/anthropics/skills/blob/00756142ab04c82a447693cf373c4e0c554d1005/skills/doc-coauthoring/SKILL.md) | Writing / Skill; context gathering, collaborative drafting and reader checks add a multi-turn document workflow | Needs sustained interaction and matching host tools. A copying license for the selected directory has not been verified; source-link introduction only |
| [frontend-design · Anthropic](https://github.com/anthropics/skills/blob/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/SKILL.md) | Practical tools / Skill; visual direction, typography, layout and self-review add visual-design guidance | For interface-building agents; does not guarantee engineering correctness. The [corresponding license](https://github.com/anthropics/skills/blob/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/LICENSE.txt) is Apache-2.0 |
| [Roleplay - Immersive · SillyTavern](https://github.com/SillyTavern/SillyTavern/blob/06bde939fb1e9c4c8d8641d810f0a916b5bce127/default/content/presets/sysprompt/Roleplay%20-%20Immersive.json) | Roleplay / Prompt; short general interaction rules complement fixed character settings without deciding the user's actions | Uses `{{user}}` and `{{char}}` macros that the host must replace. The [repository license](https://github.com/SillyTavern/SillyTavern/blob/06bde939fb1e9c4c8d8641d810f0a916b5bce127/LICENSE) is AGPL-3.0; compatibility for copying or derivative distribution has not been assessed |

Checked on 2026-10-30. Repository Stars do not establish individual-resource effectiveness. See the [review notes](REVIEW_NOTES.md) for report limitations and this revision. Retaining historical content does not automatically renew its recommendation.

## Find a resource

| I want to… | Start here |
| --- | --- |
| Have an AI understand a question and search before answering | [Prompt enhancement series](实用工具/提示词增强prompt/): Chinese/English variants; English middle is full length |
| Collaborate on documents or build an interface | doc-coauthoring / frontend-design under [selected resources](#selected-resources) |
| Understand a paper | [Structured paper reading](实用工具/学术论文阅读.txt) |
| Clarify project requirements and plan implementation and handoff | [Project planning workflow](实用工具/项目优化与施工/): use step1 → step2 → step3 |
| Generate or compress a prompt | [Meta prompts](元提示词/) |
| Clarify a task, track progress, or continue work in an agent | [COMPASS](#compass) |
| Find rewriting, translation, or image prompt templates | [Writing tools](写作辅助/); image specification templates are under [meta prompts](元提示词/) |
| Find character settings | [Roleplay](角色扮演/), including adult material |
| Find model restriction templates or adult content | [Model restriction templates](越狱破限/) / [NSFW](NSFW/) |
| Find OpenClaw skills, agent templates, or use cases | [OpenClaw resources](#openclaw-resources) |
| Find something previously included in the collection | [Archived content](已过期/) |

## Get started

### Use a prompt directly

1. Open the relevant directory and choose a `.txt` or `.md` file. On GitHub, click **Raw** to view its plain text.
2. Copy the contents. If the file specifies system instructions or another location, follow that guidance.
3. Replace placeholders such as `{{original_prompt}}`, `XXX`, and document paths with your own material. Add your goal, constraints, and output requirements.
4. Run it in your AI tool, check the result, and adjust the prompt as needed.

The enhancement series can be appended after your task and materials; attachments and quotations remain material rather than acquiring instruction authority. Follow each other template's placement instructions.

Prompts that ask for web searches, attachments, or code execution depend on those capabilities being available in your AI tool. Results vary with model and tool versions; inclusion here does not establish compatibility with every environment.

### Download the collection

Download this repository's prompts and navigation files:

```bash
git clone https://github.com/dongshuyan/Awesome-Prompts.git
cd Awesome-Prompts
```

On 2026-10-30, the public `openclaw/skills` endpoint returned 404, which may affect recursive downloads. You can clone the parent repository first and fetch accessible submodules as needed; this does not establish that all content in that collection is obsolete.

Download the repository and all submodules together:

```bash
git clone --recurse-submodules https://github.com/dongshuyan/Awesome-Prompts.git
cd Awesome-Prompts
```

If you already cloned the repository, download all submodules from its root:

```bash
git submodule update --init --recursive
```

If you only need COMPASS, use this command instead:

```bash
git submodule update --init Skills/compass-skills
```

Projects under `Skills/` and `OpenclawAgents/` are Git submodules: the parent repository records each upstream URL and a fixed commit. A regular clone does not download their contents automatically. Downloading a submodule and installing its skills are separate steps; follow the original project's instructions.

## COMPASS

[compass-skills](https://github.com/dongshuyan/compass-skills) is an Agent Skills project that I developed and use in my own agent workflows. It provides workflows for clarifying requirements, tracking tasks, pausing and resuming work, and handing context to another conversation. This collection includes it at `Skills/compass-skills/`. See the original project for the full skill list and installation guide.

| Situation | Skill |
| --- | --- |
| Requirements need clarification before work begins | `task-clarifier` |
| Work spans multiple turns and needs a record of goals, dependencies, and progress | `task-forest` |
| You need to pause work and resume in the same conversation | `pause-and-resume` |
| You are starting another conversation and need a context handoff | `session-handoff-prompt` |
| An explanation needs to be clearer, or academic prose needs editing | `clear-communication` / `academic-humanizer` |

With Node.js / npm installed, you can choose skills through the skills CLI. For example, run this in the project where you want to use the requirement clarification skill with Codex and Claude Code:

```bash
npx skills add dongshuyan/compass-skills --skill task-clarifier -a codex -a claude-code
```

This example installs at project scope. After installation, enter `$task-clarifier` in Codex or `/task-clarifier` in Claude Code, followed by the task you want to clarify. For other tools, installation scopes, or manual setup, see the [COMPASS README](https://github.com/dongshuyan/compass-skills#readme).

## Resource directory

Directory and file names retain their original Chinese names in both language versions of this README.

```text
Awesome-Prompts/
├── 实用工具/                  # Questions, paper reading, project planning
│   ├── 提示词增强prompt/      # Chinese/English and different lengths
│   └── 项目优化与施工/        # Requirements, planning, execution handoff
├── 元提示词/                  # Generate, refine, and compress prompts
├── 写作辅助/                  # Rewriting, translation, image prompts
├── 角色扮演/                  # Character settings, including adult material
│   └── 多角色人设/
├── 越狱破限/                  # Model restriction templates
├── NSFW/                      # Adult content
├── Skills/
│   ├── compass-skills/        # COMPASS, Git submodule
│   └── Openclaw/              # OpenClaw skills, Git submodules
├── OpenclawAgents/            # OpenClaw templates and use cases, submodules
└── 已过期/                    # Historical content with original paths
    └── 角色扮演/
        └── 小羊饼/
```

### Prompt categories

| Directory | Contents and selection |
| --- | --- |
| [实用工具 / Practical tools](实用工具/) | [Paper reading](实用工具/学术论文阅读.txt), [health education](实用工具/AI健康顾问.txt), a [Gemini instruction template](实用工具/自信的Gemini.txt), [task clarification and boundary templates](实用工具/任务澄清与边界说明.txt), and the two workflows below. Health content supports general understanding and discussion with clinicians; it does not replace professional care. |
| [提示词增强prompt / Prompt enhancement](实用工具/提示词增强prompt/) | Chinese has full, middle and lite variants. English middle is full length and currently identical to the full variant; its historical filename is retained. All six current variants follow the task language unless the user explicitly specifies otherwise; template language does not set output language. The four files in `旧版本/` remain unchanged and may have different rules; see [version notes](REVIEW_NOTES.md#versions-and-applicability). |
| [项目优化与施工 / Project planning](实用工具/项目优化与施工/) | [step1](实用工具/项目优化与施工/step1.md) covers requirements and a proposed approach; [step2](实用工具/项目优化与施工/step2.md) divides implementation into stages and acceptance checks; [step3](实用工具/项目优化与施工/step3.md) creates execution and handoff prompts. Replace project names and paths before use. |
| [元提示词 / Meta prompts](元提示词/) | [Generate from requirements](元提示词/根据需求生成提示词.txt), [prompt design](元提示词/生成prompt的prompt.txt), [long prompt compression](元提示词/长提示词压缩.txt), and [Nano Banana Pro image specifications](元提示词/Nano-Banana-Pro图像规格架构师.txt). |
| [写作辅助 / Writing tools](写作辅助/) | Rewriting, translation, image prompt, and cosplay photo templates. Some material is adult oriented. |
| [角色扮演 / Roleplay](角色扮演/) | Individual character files and the `多角色人设/` collection. Browse filenames for settings; includes adult material. |
| [越狱破限 / Model restriction templates](越狱破限/) | Historical templates named by model or scenario. Applicability depends on model versions and platform rules. |
| [NSFW](NSFW/) | Adult image prompts. Check each file for its intended tool. |

### OpenClaw resources

Each project below has its own upstream repository. This collection pins a specific commit, so local content may differ from the latest upstream version. Consult the original project for its purpose, installation instructions, and license. Pins are unchanged in this revision; availability and license-declaration differences are recorded in the [review notes](REVIEW_NOTES.md#collection-entrypoints).

| Local submodule path | Original project | Contents |
| --- | --- | --- |
| `Skills/Openclaw/awesome-openclaw-skills` | [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | OpenClaw skills organized by category |
| `Skills/Openclaw/awesome-openclaw-skills-sundial-org` | [sundial-org/awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) | OpenClaw skill collection |
| `Skills/Openclaw/skills` | [openclaw/skills](https://github.com/openclaw/skills) | OpenClaw skill archive |
| `OpenclawAgents/awesome-openclaw-agents` | [mergisi/awesome-openclaw-agents](https://github.com/mergisi/awesome-openclaw-agents) | Agent settings and templates |
| `OpenclawAgents/awesome-openclaw-usecases` | [hesamsheikh/awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases) | OpenClaw use cases |
| `OpenclawAgents/awesome-openclaw-usecases-moltbook` | [EvoLinkAI/awesome-openclaw-usecases-moltbook](https://github.com/EvoLinkAI/awesome-openclaw-usecases-moltbook) | Moltbook use cases and multilingual material |

### Online prompt resources

Additional external resources collected for reference:

| Resource | Contents |
| --- | --- |
| [Nanobanana 提示词收纳盒](https://bmzxdlj.cn/) | Chinese prompt collection |
| [Labnana](https://labnana.com/zh/explore/all) | Image examples and prompts |
| [YouMind Nano Banana Pro prompts](https://youmind.com/zh-CN/nano-banana-pro-prompts?categories=comic-storyboard) | Image prompts by topic |
| [Prompt Manager](https://prompt.vioaki.xyz/) | Prompt gallery and templates |
| [Feishu prompt table](https://my.feishu.cn/wiki/S5nowuX3uiHXq4kNPb3c7cPpngh?table=tblJT29vyAEQmZzq&view=vewBBRuwm1) | Previously collected online table |
| [Feishu wiki](https://uahbgrt760r.feishu.cn/wiki/EOXawAHZ5ixJb6kHUU6cxi3QnXc) | Previously collected prompt reference |

## Archived content

[已过期/](已过期/) holds historical content that is no longer presented as a current recommendation. Archives retain the original category, subdirectories, filenames, and contents. The same rule applies to future archives:

```text
Original: 角色扮演/小羊饼/
Archived: 已过期/角色扮演/小羊饼/
```

See the [archive index](已过期/README.md) for the current list and recorded sources. To find an item from an older link, look under `已过期/` using its original path.

## Feedback and contributions

Suggest your own or discovered resources through [Issues](https://github.com/dongshuyan/Awesome-Prompts/issues) or a PR under the same standard. Read [CONTRIBUTING](CONTRIBUTING.md): provide a specific entry, purpose, added value, prerequisites, attribution and permission information. There is no minimum Star count or mandatory testing. Accepted entries identify their original repository without endorsing its entire collection.

For an existing-content issue, give the path. If you have execution results, include the model/tool version, date, and expected versus actual behavior. State when you have not tested it; additional testing is not required to submit.

This collection includes personal work and community material. Some early entries still lack an original source. Authors can request attribution or removal through an Issue. Submodule licenses remain in their original projects; check the relevant source and license before reusing content.

Recorded sources include the [Nano Banana Pro specification template](https://linux.do/t/topic/1410949), [Doubao image prompts](https://linux.do/t/topic/1411250), and the [archived 小羊饼 collection](已过期/README.md).

If a resource here helped you complete a task, consider giving the repository a **Star** and sharing what worked for you.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=dongshuyan/Awesome-Prompts&type=Date)](https://star-history.com/#dongshuyan/Awesome-Prompts&Date)
