# Prompt 收藏库

[English](README.en.md) | 简体中文

一个用于收集和整理优质 Prompt 的个人仓库。这里汇集了我自己设计的以及从互联网各处发现的有趣、实用的提示词。

---

## 目录结构

```
prompts/
├── 实用工具/     # 日常实用场景的提示词（健康、学术、问答等）
│   ├── 提示词增强prompt/  # 强制 AI 先搜索验证再回答的系列提示词
│   └── 项目优化与施工/    # 引导 AI 进行系统性项目优化的三步流程
├── 越狱破限/     # 用于绕过 AI 限制的各类越狱提示词
├── 角色扮演/     # 角色扮演、虚拟人格相关的提示词
│   └── 小羊饼/   # 多性格 NSFW 角色提示词（来源：Linux.do）
├── 写作辅助/     # 翻译、内容创作、文生图等写作相关提示词
├── 元提示词/     # 用于生成或优化其他 Prompt 的元提示词
├── NSFW/         # 成人内容生成相关提示词
├── Skills/       # OpenClaw 技能合集（来自社区 repo，见下）
│   └── Openclaw/
│       ├── awesome-openclaw-skills/           # VoltAgent 整理的 5000+ 技能列表
│       ├── awesome-openclaw-skills-sundial-org/  # Sundial 整理的 900+ 技能
│       └── skills/                            # 从 ClawHub 备份的技能
└── OpenclawAgents/  # OpenClaw Agent 模板与用例（来自社区 repo）
    ├── awesome-openclaw-agents/     # 53 个生产级 Agent 模板（SOUL.md）
    ├── awesome-openclaw-usecases/   # 真实使用场景合集
    └── awesome-openclaw-usecases-moltbook/  # Moltbook 70+ 用例（多语言）
```

---

## 详细说明

### 实用工具

面向日常场景的实用提示词，帮助提升工作效率。

| 文件名 | 功能 | 使用场景 |
|--------|------|----------|
| [`AI健康顾问.txt`](实用工具/AI健康顾问.txt) | 结构化症状分析，提供可能原因和建议 | 身体不适时快速了解可能病因 |
| [`学术论文阅读.txt`](实用工具/学术论文阅读.txt) | 结构化论文分析框架，面向初学者 | 阅读学术论文时 |
| [`自信的Gemini.txt`](实用工具/自信的Gemini.txt) | Google 官方的系统提示词，让 Gemini 更自信 | 作为 Gemini 的基础系统提示词 |

#### 提示词增强prompt

强制 AI 先搜索验证再回答，防止幻觉。提供三种版本：完整版（最详细）、中档版（平衡）、精简版（最少 token）。

| 文件名 | 功能 | 使用场景 |
|--------|------|----------|
| [`260107-理解问题搜索信息-中文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-中文.txt) | 完整版，最详细的搜索验证流程 | 需要准确可追溯的回答时 |
| [`260107-理解问题搜索信息-英文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-英文.txt) | 完整版英文 | 英文场景使用 |
| [`260107-理解问题搜索信息-middle-中文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-middle-中文.txt) | 中档版，平衡详细度和 token 消耗 | 日常使用推荐 |
| [`260107-理解问题搜索信息-middle-英文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-middle-英文.txt) | 中档版英文 | 英文场景使用 |
| [`260107-理解问题搜索信息-lite-中文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-lite-中文.txt) | 精简版，最少 token 消耗 | token 受限时 |
| [`260107-理解问题搜索信息-lite-英文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-lite-英文.txt) | 精简版英文 | 英文场景使用 |

#### 项目优化与施工

引导 AI 进行系统性项目优化的三步流程提示词，确保需求分析完整、施工过程规范、团队交接顺畅。

| 文件名 | 功能 | 使用场景 |
|--------|------|----------|
| [`step1.md`](实用工具/项目优化与施工/step1.md) | 需求梳理与方案设计，确保修改不影响现有功能 | 开始项目优化前的全局分析 |
| [`step2.md`](实用工具/项目优化与施工/step2.md) | 施工文档编写，分阶段规划并设置验收标准 | 将方案拆分为可交接的施工阶段 |
| [`step3.md`](实用工具/项目优化与施工/step3.md) | 施工团队 Prompt，包含测试验收和交接日志要求 | 为每个施工阶段生成可直接使用的 Prompt |

### 越狱破限

用于绕过各类 AI 模型内容限制的提示词模板。

| 文件名 | 功能 | 使用场景 |
|--------|------|----------|
| [`GHOST越狱协议.txt`](越狱破限/GHOST越狱协议.txt) | 伪装成开发者模式，绕过安全过滤 | 需要 AI 直接回答敏感话题时 |
| [`FOP自由覆盖模式.txt`](越狱破限/FOP自由覆盖模式.txt) | 中文版自由模式，支持创意/虚构内容 | 需要 AI 生成不受限内容时 |
| [`jailbreak模板-Gemini.txt`](越狱破限/jailbreak模板-Gemini.txt) | 针对 Gemini 的三套越狱框架（导演模式/量子模拟/G-Core直连） | 需要 Gemini 执行敏感任务时 |
| [`jailbreak模板-OpenAI.txt`](越狱破限/jailbreak模板-OpenAI.txt) | 针对 OpenAI 的合规型越狱框架 | 需要 ChatGPT 减少拒绝时 |
| [`角色扮演破限.txt`](越狱破限/角色扮演破限.txt) | 文章续写机模式，绕过角色扮演限制 | 小说续写、场景描写 |
| [`NSFW系统提示词.txt`](越狱破限/NSFW系统提示词.txt) | 成人内容生成的系统提示词 | 创作成人向内容 |

### 角色扮演

用于创建沉浸式虚拟角色对话体验的提示词。

| 文件名 | 功能 | 使用场景 |
|--------|------|----------|
| [`赛博女友.txt`](角色扮演/赛博女友.txt) | 完整的虚拟女友人格设定（安和昴），包含四种情绪模式切换 | 需要长期稳定的角色扮演对话 |
| [`古雅语情色小说.txt`](角色扮演/古雅语情色小说.txt) | 古典世情小说家角色，用文言雅语写作 | 创作古风情色小说 |

#### 小羊饼

多性格 NSFW 角色扮演提示词系列，来源：[Linux.do 帖子](https://linux.do/t/topic/1612668)。

| 文件名 | 功能 | 使用场景 |
|--------|------|----------|
| [`傲娇 NSFW 提示词.txt`](角色扮演/小羊饼/傲娇%20NSFW%20提示词.txt) | 傲娇性格角色设定 | 傲娇向成人角色扮演 |
| [`病娇 NSFW 提示词.txt`](角色扮演/小羊饼/病娇%20NSFW%20提示词.txt) | 病娇性格角色设定 | 病娇向成人角色扮演 |
| [`雌小鬼 NSFW 提示词.txt`](角色扮演/小羊饼/雌小鬼%20NSFW%20提示词.txt) | 雌小鬼性格角色设定 | 雌小鬼向成人角色扮演 |
| [`损友 NSFW 提示词.txt`](角色扮演/小羊饼/损友%20NSFW%20提示词.txt) | 损友性格角色设定 | 损友向成人角色扮演 |
| [`中二病 NSFW 提示词.txt`](角色扮演/小羊饼/中二病%20NSFW%20提示词.txt) | 中二病性格角色设定 | 中二病向成人角色扮演 |

### 写作辅助

涵盖翻译、内容风格转换、文生图描述词生成等创作辅助工具。

| 文件名 | 功能 | 使用场景 |
|--------|------|----------|
| [`AI内容转人写.txt`](写作辅助/AI内容转人写.txt) | 将 AI 生成的内容重写为人类风格 | 需要规避 AI 检测时 |
| [`AV翻译提示词.txt`](写作辅助/AV翻译提示词.txt) | 日语成人内容翻译，追求"通感"而非直译 | 翻译日语成人音轨/字幕 |
| [`文生图提示词.txt`](写作辅助/文生图提示词.txt) | 情色杂志封面创意总监，生成双语生图提示词 | 创作成人向图片描述词 |
| [`Cosplay写真提示词.txt`](写作辅助/Cosplay写真提示词.txt) | Cosplay 写真的详细文生图模板 | 生成 Cosplay 相关图片 |

### 元提示词

用于生成、优化、压缩其他 Prompt 的工具型提示词。

| 文件名 | 功能 | 使用场景 | 来源 |
|--------|------|----------|------|
| [`生成prompt的prompt.txt`](元提示词/生成prompt的prompt.txt) | 专业 Prompt 设计师，包含偏好校准流程 | 需要生成高质量定制 Prompt 时 | |
| [`根据需求生成提示词.txt`](元提示词/根据需求生成提示词.txt) | 识别需求类型（决策/分析/创作/验证/执行），生成优化提示词 | 快速将模糊需求转为结构化 Prompt | |
| [`长提示词压缩.txt`](元提示词/长提示词压缩.txt) | 用文言风格极限压缩提示词 | 需要减少 Token 消耗时 | |
| [`Nano-Banana-Pro图像规格架构师.txt`](元提示词/Nano-Banana-Pro图像规格架构师.txt) | 将自然语言转为 JSON 结构化生图指令，专为 Gemini 3 Pro Image 优化 | 使用 Gemini 生图前生成精确指令 | [链接](https://linux.do/t/topic/1410949) |

### NSFW

成人内容生成相关的提示词。

| 文件名 | 功能 | 使用场景 | 来源 |
|--------|------|----------|------|
| [`豆包图像生成-仰视构图.txt`](NSFW/豆包图像生成-仰视构图.txt) | 针对豆包 AI 的 NSFW 图像生成，包含仰视构图、人体比例控制（34D/1:0.7:1.1）等参数 | 使用豆包生成写真风格图片 | [链接](https://linux.do/t/topic/1411250) |
| [`豆包图像生成-极简写真.txt`](NSFW/豆包图像生成-极简写真.txt) | 针对豆包 AI 的 NSFW 图像生成，极简主义精致风格、低角度视角、蕾丝比基尼 | 使用豆包生成写真风格图片 | [链接](https://linux.do/t/topic/1411250) |

### Skills（OpenClaw 技能）

本目录为**他人仓库的本地拷贝**，用于集中查阅与备份，未改其内容结构。

| 子目录 | 说明 |
|--------|------|
| `Skills/Openclaw/awesome-openclaw-skills` | [VoltAgent] 社区技能列表，约 5000+ 条，按类目整理 |
| `Skills/Openclaw/awesome-openclaw-skills-sundial-org` | [Sundial] 精选约 900+ 技能，每日更新 |
| `Skills/Openclaw/skills` | 从 ClawHub 备份的技能文件 |

### OpenclawAgents（OpenClaw Agent 与用例）

同样为**他人仓库的本地拷贝**，便于本地浏览与参考。

| 子目录 | 说明 |
|--------|------|
| `OpenclawAgents/awesome-openclaw-agents` | [mergisi] 53 个生产级 Agent 模板（SOUL.md）、Quickstart、Docker 等 |
| `OpenclawAgents/awesome-openclaw-usecases` | [hesamsheikh] 真实使用场景合集（Reddit/YouTube 摘要、X 分析等） |
| `OpenclawAgents/awesome-openclaw-usecases-moltbook` | [Moltbook/EvoLink] 70+ 用例，多语言文档 |

### Nano Banana Pro 提示词网站

以下为收集的 **Nano Banana / Nano Banana Pro**（如 Gemini 生图、Firefly 等）相关提示词与图生平台，便于在线查找与复用。

| 网站 | 说明 |
|------|------|
| [Nanobanana 提示词收纳盒](https://bmzxdlj.cn/) | 中文 Nano Banana 提示词收纳与整理 |
| [Labnana](https://labnana.com/zh/explore/all) | 基于 Google Nano Banana 2 的图生平台，社区发现页 |
| [YouMind Nano Banana Pro 提示词库](https://youmind.com/zh-CN/nano-banana-pro-prompts?categories=comic-storyboard) | 大量免费 Nano Banana Pro 提示词，多分类（漫画/故事板、海报、App 设计等），每日更新 |
| [Prompt Manager (vioaki)](https://prompt.vioaki.xyz/) | 画廊 + 模板库，标签筛选（banana、cosplay、text2img/img2img 等），支持变量替换 |
| [飞书文档 - 表格](https://my.feishu.cn/wiki/S5nowuX3uiHXq4kNPb3c7cPpngh?table=tblJT29vyAEQmZzq&view=vewBBRuwm1) | 飞书中的 Nano Banana Pro 相关协作表格 |
| [飞书知识库](https://uahbgrt760r.feishu.cn/wiki/EOXawAHZ5ixJb6kHUU6cxi3QnXc) | 飞书知识库中的提示词/文档整理 |

本仓库内与 Nano Banana Pro 相关的本地文件见：[元提示词/Nano-Banana-Pro图像规格架构师.txt](元提示词/Nano-Banana-Pro图像规格架构师.txt)。

---

## 本仓库内含他人 repo 时如何 Push

`Skills/` 与 `OpenclawAgents/` 下各子目录来自对他人 repo 的 clone，本地保留各自的 `.git`，便于你随时在原仓库里 `git pull` 或切分支。

- **不会删除子仓库的 `.git`**：本仓库的 `.gitignore` 里已有 `.*`，会忽略所有以点开头的文件/目录，因此子目录下的 `.git` **不会被父仓库跟踪**，也不会被提交。
- **Push 方式**：在仓库根目录照常执行即可：
  ```bash
  git add Skills/ OpenclawAgents/   # 只会添加普通文件，不会包含任何 .git
  git commit -m "添加 Skills 与 OpenclawAgents 合集"
  git push
  ```
- 子仓库的 `.git` 仅存在于你本地，不会被推到本仓库的 remote；之后你仍可在各子目录里用 `git pull` 等更新上游。

---

## 使用说明

1. 根据需求选择对应分类的提示词
2. 复制提示词内容到 AI 对话框
3. 部分提示词包含 `{{original_prompt}}` 等占位符，需替换为实际内容
4. 越狱类提示词效果因模型版本而异，可能需要调整

---

## 声明

本仓库中的部分 Prompt 来自互联网各处论坛、社区及个人收集，由于时间跨度较长，部分内容已难以追溯原始出处。

如果您是某个 Prompt 的原作者，发现您的作品被收录于此：
- 欢迎联系我添加来源署名
- 如有需要，可要求下架相关内容

尊重原创，感谢所有 Prompt 创作者的分享精神。

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=dongshuyan/Awesome-Prompts&type=Date)](https://star-history.com/#dongshuyan/Awesome-Prompts&Date)
