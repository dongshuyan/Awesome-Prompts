# Awesome-Prompts

简体中文 | [English](README.en.md)

由 [dongshuyan](https://github.com/dongshuyan) 维护的提示词与 Agent 资源收藏库，收录个人编写和社区分享的 Prompt、Agent Skills、OpenClaw 模板与用例。你可以直接复制提示词，也可以按原项目说明安装技能。

[按需求查找](#按需求查找) · [开始使用](#开始使用) · [COMPASS](#compass) · [资源目录](#资源目录) · [已过期归档](#已过期归档) · [反馈与收录](#反馈与收录)

## 仓库包括什么

| 部分 | 内容 | 使用方式 |
| --- | --- | --- |
| 提示词 | 问答、论文阅读、项目规划、写作、生图及角色设定，按用途分类 | 打开文件，复制到 AI 对话或工具支持的指令位置 |
| Agent Skills | 本人开发的 [COMPASS（司南）](https://github.com/dongshuyan/compass-skills)，以及 OpenClaw 社区技能资源 | 按各项目说明安装并调用技能 |
| OpenClaw 模板与用例 | Agent 设定、模板和使用场景 | 查阅原项目，按所需场景配置 |
| 已过期归档 | 保留原目录层级的历史内容 | 查阅历史版本与来源记录 |

## 按需求查找

| 我想做什么 | 从这里开始 |
| --- | --- |
| 让 AI 先理解问题、搜索信息再回答 | [提示词增强系列](实用工具/提示词增强prompt/)：完整版、中档版、精简版，均有中英文 |
| 读懂一篇论文 | [学术论文阅读](实用工具/学术论文阅读.txt) |
| 梳理项目需求、制定施工与交接计划 | [项目优化与施工](实用工具/项目优化与施工/)：按 step1 → step2 → step3 使用 |
| 根据需求生成或压缩 Prompt | [元提示词](元提示词/) |
| 在 Agent 中澄清需求、跟踪任务或接续工作 | [COMPASS（司南）](#compass) |
| 查找改写、翻译或图像提示词模板 | [写作辅助](写作辅助/)；图像规格模板见[元提示词](元提示词/) |
| 查找角色设定 | [角色扮演](角色扮演/)，含成人向条目 |
| 查找模型限制相关模板或成人向内容 | [越狱破限](越狱破限/) / [NSFW](NSFW/) |
| 查找 OpenClaw 技能、Agent 模板或用例 | [OpenClaw 资源](#openclaw-资源) |
| 找不到之前收录的内容 | [已过期](已过期/) |

## 开始使用

### 直接使用提示词

1. 从上表进入对应目录，打开需要的 `.txt` 或 `.md` 文件。在 GitHub 上可点击 **Raw** 查看原始文本。
2. 复制文件内容。文件若指定了系统指令或其他放置位置，按其说明使用。
3. 将 `{{original_prompt}}`、`XXX`、文档路径等占位内容替换成自己的材料，并补充目标、约束和输出要求。
4. 在所用 AI 工具中运行，检查输出是否满足需求，再调整提示词。

需要搜索、读取附件或执行代码的提示词，依赖 AI 工具实际提供相应能力。模型和工具版本会影响效果；收录本身不代表已在所有环境验证。

### 下载到本地

只下载本库的提示词和导航文件：

```bash
git clone https://github.com/dongshuyan/Awesome-Prompts.git
cd Awesome-Prompts
```

同时下载全部子模块：

```bash
git clone --recurse-submodules https://github.com/dongshuyan/Awesome-Prompts.git
cd Awesome-Prompts
```

已克隆过仓库，可在仓库根目录补齐全部子模块：

```bash
git submodule update --init --recursive
```

只需要 COMPASS 时，使用这一条：

```bash
git submodule update --init Skills/compass-skills
```

`Skills/` 与 `OpenclawAgents/` 中收录的项目采用 Git 子模块：主仓库记录上游地址和一个固定提交。普通克隆不会自动下载子模块内容；下载后是否安装、如何配置，仍以原项目说明为准。

<a id="compass"></a>

## COMPASS（司南）

[compass-skills](https://github.com/dongshuyan/compass-skills) 是我开发并长期使用的 Agent Skills 项目，提供需求澄清、任务跟踪、暂停续接和跨会话交接等工作流。本库通过 `Skills/compass-skills/` 收录，完整技能清单和安装说明见原项目。

| 遇到的问题 | 对应技能 |
| --- | --- |
| 需求还不够明确，需要先对齐目标与约束 | `task-clarifier` |
| 任务跨多轮推进，需要记录目标、依赖和进展 | `task-forest` |
| 暂时停下，稍后在同一会话继续 | `pause-and-resume` |
| 准备开启新会话，需要整理交接上下文 | `session-handoff-prompt` |
| 希望表达更清楚，或调整学术文字 | `clear-communication` / `academic-humanizer` |

如果已安装 Node.js / npm，可在准备使用技能的项目目录中，通过 skills CLI 选择安装。例如，为 Codex 和 Claude Code 安装需求澄清技能：

```bash
npx skills add dongshuyan/compass-skills --skill task-clarifier -a codex -a claude-code
```

此示例使用项目级安装。安装后，在 Codex 中输入 `$task-clarifier` 或在 Claude Code 中输入 `/task-clarifier`，再描述需要澄清的任务。其他工具、安装范围及手动安装方式见 [COMPASS README](https://github.com/dongshuyan/compass-skills#readme)。

## 资源目录

```text
Awesome-Prompts/
├── 实用工具/                  # 搜索问答、论文阅读、项目规划等
│   ├── 提示词增强prompt/      # 中英文及不同长度版本
│   └── 项目优化与施工/        # 需求分析、施工规划、执行交接
├── 元提示词/                  # 生成、优化、压缩提示词
├── 写作辅助/                  # 改写、翻译和图像提示词
├── 角色扮演/                  # 角色设定与对话风格，含成人向条目
│   └── 多角色人设/
├── 越狱破限/                  # 模型限制相关模板
├── NSFW/                      # 成人向内容
├── Skills/
│   ├── compass-skills/        # COMPASS（司南），Git 子模块
│   └── Openclaw/              # OpenClaw 社区技能，Git 子模块
├── OpenclawAgents/            # OpenClaw 模板与用例，Git 子模块
└── 已过期/                    # 历史归档，内部保留原目录层级
    └── 角色扮演/
        └── 小羊饼/
```

### 提示词分类与入口

| 目录 | 内容与选用方式 |
| --- | --- |
| [实用工具](实用工具/) | [论文阅读](实用工具/学术论文阅读.txt)、[健康科普](实用工具/AI健康顾问.txt)、[Gemini 指令模板](实用工具/自信的Gemini.txt)，以及下方两组工作流。健康类内容用于知识了解和就医沟通，不能替代专业诊疗。 |
| [提示词增强prompt](实用工具/提示词增强prompt/) | 完整版说明更详细，`middle` 版居中，`lite` 版更简短；按任务复杂度和上下文预算选择，中英文文件分别提供。`旧版本/` 保存该系列的较早版本。 |
| [项目优化与施工](实用工具/项目优化与施工/) | [step1](实用工具/项目优化与施工/step1.md) 梳理需求与方案；[step2](实用工具/项目优化与施工/step2.md) 拆分施工阶段及验收方法；[step3](实用工具/项目优化与施工/step3.md) 生成执行与交接提示词。使用前替换项目名称和文件路径。 |
| [元提示词](元提示词/) | [按需求生成](元提示词/根据需求生成提示词.txt)、[Prompt 设计](元提示词/生成prompt的prompt.txt)、[长提示词压缩](元提示词/长提示词压缩.txt)、[Nano Banana Pro 图像规格](元提示词/Nano-Banana-Pro图像规格架构师.txt)。 |
| [写作辅助](写作辅助/) | 内容改写、翻译、文生图和 Cosplay 写真模板，部分内容为成人向。 |
| [角色扮演](角色扮演/) | 单独角色文件与 `多角色人设/`，按文件名查找设定，含成人向条目。 |
| [越狱破限](越狱破限/) | 按模型或场景命名的历史模板，适用性取决于模型版本和平台规则。 |
| [NSFW](NSFW/) | 成人向图像提示词，按文件中标注的目标工具选用。 |

### OpenClaw 资源

以下项目均保留独立的上游仓库。本库固定收录其某个提交，目录中的内容和上游最新版本可能不同；用途、安装方法和许可证请查阅对应原项目。

| 本地子模块路径 | 原项目 | 内容 |
| --- | --- | --- |
| `Skills/Openclaw/awesome-openclaw-skills` | [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 按类别整理的 OpenClaw 技能列表 |
| `Skills/Openclaw/awesome-openclaw-skills-sundial-org` | [sundial-org/awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills) | OpenClaw 技能合集 |
| `Skills/Openclaw/skills` | [openclaw/skills](https://github.com/openclaw/skills) | OpenClaw 技能归档 |
| `OpenclawAgents/awesome-openclaw-agents` | [mergisi/awesome-openclaw-agents](https://github.com/mergisi/awesome-openclaw-agents) | Agent 角色设定与模板 |
| `OpenclawAgents/awesome-openclaw-usecases` | [hesamsheikh/awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases) | OpenClaw 使用场景 |
| `OpenclawAgents/awesome-openclaw-usecases-moltbook` | [EvoLinkAI/awesome-openclaw-usecases-moltbook](https://github.com/EvoLinkAI/awesome-openclaw-usecases-moltbook) | Moltbook 相关用例与多语言资料 |

### 在线提示词资源

以下是额外收藏的外部入口：

| 资源 | 内容 |
| --- | --- |
| [Nanobanana 提示词收纳盒](https://bmzxdlj.cn/) | 中文提示词收藏 |
| [Labnana](https://labnana.com/zh/explore/all) | 图像生成作品与提示词浏览 |
| [YouMind Nano Banana Pro 提示词库](https://youmind.com/zh-CN/nano-banana-pro-prompts?categories=comic-storyboard) | 按主题浏览图像提示词 |
| [Prompt Manager](https://prompt.vioaki.xyz/) | 提示词画廊与模板 |
| [飞书提示词表格](https://my.feishu.cn/wiki/S5nowuX3uiHXq4kNPb3c7cPpngh?table=tblJT29vyAEQmZzq&view=vewBBRuwm1) | 原收录的在线表格入口 |
| [飞书知识库](https://uahbgrt760r.feishu.cn/wiki/EOXawAHZ5ixJb6kHUU6cxi3QnXc) | 原收录的提示词资料入口 |

## 已过期归档

[已过期/](已过期/) 保存不再作为当前推荐入口的历史内容。归档时保留原分类、子目录、文件名和内容，后续按同一规则整理：

```text
原路径：角色扮演/小羊饼/
归档后：已过期/角色扮演/小羊饼/
```

当前归档清单及已知来源见[归档说明](已过期/README.md)。需要查找旧链接中的条目时，可先在“已过期”下按原路径查找。

## 反馈与收录

发现失效内容、缺失来源或使用问题，欢迎提交 [Issue](https://github.com/dongshuyan/Awesome-Prompts/issues)。描述问题时，请附条目路径、所用模型或工具版本，以及预期与实际表现；提交 PR 时请保留来源信息，并同步更新中英文导航。

本库包含个人创作和社区收集内容，部分早期条目的原始出处尚未补全。原作者可通过 Issue 补充署名或提出下架请求。各子模块的许可见原项目；复用内容前请核对对应来源和许可。

已有来源记录：[Nano Banana Pro 图像规格模板](https://linux.do/t/topic/1410949)、[豆包图像提示词](https://linux.do/t/topic/1411250)，以及[小羊饼归档说明](已过期/README.md)。

如果这里的内容帮你完成了实际任务，欢迎点一个 **Star**，也欢迎分享具体的使用反馈。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=dongshuyan/Awesome-Prompts&type=Date)](https://star-history.com/#dongshuyan/Awesome-Prompts&Date)
