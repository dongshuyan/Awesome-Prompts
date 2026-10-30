# Awesome-Prompts

简体中文 | [English](README.en.md)

按用途整理的 **Prompt、Prompt 模板与 Agent Skills**，由 [dongshuyan](https://github.com/dongshuyan) 维护。介绍具体资源的特点与前提，宁缺毋滥。

## 按用途查找

| 栏目 | 你可以找什么 |
| --- | --- |
| [实用工具](#实用工具) | 搜索问答、论文阅读、项目规划、界面设计与 Agent 工作流 |
| [元提示词](#元提示词) | 根据需求生成、优化或压缩 Prompt，整理图像创作规格 |
| [写作辅助](#写作辅助) | 文档协作、文字改写，以及翻译与图像提示词资料 |
| [角色扮演](#角色扮演) | 通用互动规则与人物设定，含成人向历史条目 |
| [越狱破限](#越狱破限) | 模型限制相关的历史模板与来源记录 |
| [NSFW](#nsfw) | 成人向图像提示词的历史目录 |

[合集与在线资料](#合集与在线资料) · [归档与来源](#归档与来源) · [投稿与反馈](#投稿与反馈)

每类的**评价重点**按用途展开通用标准，完整收录规则见[贡献指南](CONTRIBUTING.md)。新增以内容阅读、来源和可核查反馈为依据，不设最低 Star，也不强制亲测。

**选用说明：**“外部精选”链接到阅读时的固定版本；“本地模板”与“历史目录”提供已有资源入口，保留不代表全部通过现行收录标准。核对日期：2026-10-30；未做模型效果测试，具体版本、许可与反馈边界见[审阅说明](REVIEW_NOTES.md)。

## 实用工具

**评价重点：** 任务明确，输入、输出与所需工具写清；步骤可按任务规模调整。

**外部精选**

- **[frontend-design](https://github.com/anthropics/skills/blob/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/SKILL.md)** · Anthropic · Skill
  从视觉方向、字体到布局组织界面设计，并要求自审。适合能制作界面的 Agent；侧重视觉表达，工程正确性需另行检查。[对应许可：Apache-2.0](https://github.com/anthropics/skills/blob/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/LICENSE.txt)。

**本地模板与已收录项目**

- **[提示词增强系列](实用工具/提示词增强prompt/)** · Prompt：先理解任务，再按需搜索与核对证据。提供中英文及长短变体；英文 `middle` 与完整版当前逐字相同，选版见[版本说明](REVIEW_NOTES.md#版本与适用性)。
- **[学术论文阅读](实用工具/学术论文阅读.txt)** · 模板：面向初学者，依次梳理问题、方法、数据和结果，区分论文报告与外部信息。
- **[项目优化与施工](实用工具/项目优化与施工/)** · 模板：从[需求与方案](实用工具/项目优化与施工/step1.md)，到[施工与验收计划](实用工具/项目优化与施工/step2.md)，再到[执行交接](实用工具/项目优化与施工/step3.md)。使用前替换项目与文档路径。
- **[任务澄清与边界说明](实用工具/任务澄清与边界说明.txt)** · 模板：五种任务、歧义与输出组织框架；替代目标需说明差别并由用户选择。
- **[COMPASS（司南）](https://github.com/dongshuyan/compass-skills#readme)** · Skill 集合 · **维护者自有项目**：围绕需求澄清、任务跟踪、暂停续接与跨会话交接组织工作；另含清晰表达和学术文字编辑技能。完整清单与安装说明见原项目，本地固定版本入口为 `Skills/compass-skills/`。

其他本地条目：[健康科普](实用工具/AI健康顾问.txt)、[Gemini 指令模板](实用工具/自信的Gemini.txt)。健康内容用于知识了解与就医沟通，不能替代专业诊疗。 [浏览全部实用工具 →](实用工具/)

## 元提示词

**评价重点：** 生成或修改的对象明确，输入与输出清楚；优化、压缩时保留目标和关键约束，不用篇幅或未经测量的压缩率证明效果。

**本地模板**

- **[根据需求生成提示词](元提示词/根据需求生成提示词.txt)**：按决策、分析、创作、验证和执行梳理需求；改变目标的建议需先确认。
- **[Prompt 设计框架](元提示词/生成prompt的prompt.txt)**：组织角色、约束、输出与按需校准；持久化依赖实际工具和授权。
- **[长提示词压缩](元提示词/长提示词压缩.txt)**：压缩后对照原意、条件和例外；有实际 Token 计数才报告压缩率。
- **[Nano Banana Pro 图像规格](元提示词/Nano-Banana-Pro图像规格架构师.txt)**：把创作需求整理成自定义类 JSON 规格，便于调整构图等参数；不是官方 API 请求或可直接解析的 JSON。

[浏览全部元提示词 →](元提示词/)

## 写作辅助

**评价重点：** 文体或协作环节明确；事实性改写保留原意、证据与限定，虚构创作需与事实内容区分。

**外部精选**

- **[doc-coauthoring](https://github.com/anthropics/skills/blob/00756142ab04c82a447693cf373c4e0c554d1005/skills/doc-coauthoring/SKILL.md)** · Anthropic · Skill
  将材料收集、协作起草和读者检查连成多轮文档流程，补充单次改写模板。需要持续交互并匹配宿主工具名称；所选目录的复制许可未核实，仅作链接介绍。

**本地模板**

- **[自然语言改写](写作辅助/AI内容转人写.txt)** · Prompt：调整措辞与衔接，保留事实、观点和逻辑，不补造经历或引用。

[浏览写作辅助历史目录 →](写作辅助/)：另有翻译、文生图和 Cosplay 资料，部分为成人向；具体适用性与待确认事项见[审阅说明](REVIEW_NOTES.md)。

## 角色扮演

**评价重点：** 角色、场景与互动规则清楚，尊重用户对自身行动的决定；标明变量、宿主依赖与内容类型。

**外部精选**

- **[Roleplay - Immersive](https://github.com/SillyTavern/SillyTavern/blob/06bde939fb1e9c4c8d8641d810f0a916b5bce127/default/content/presets/sysprompt/Roleplay%20-%20Immersive.json)** · SillyTavern · Prompt
  用简短通用规则组织角色与环境描写，每次回复一轮，不代替用户决定行动。需宿主替换 `{{user}}`、`{{char}}`；[仓库根许可为 AGPL-3.0](https://github.com/SillyTavern/SillyTavern/blob/06bde939fb1e9c4c8d8641d810f0a916b5bce127/LICENSE)，复制衍生的许可兼容性未评估。

[浏览角色扮演历史目录 →](角色扮演/)：单独角色与多角色人设，含成人向条目；历史保留不构成对各文件的重新推荐。

## 越狱破限

**评价重点：** 来源、目标模型或平台、版本与日期可查；效果声称须有对应条件和证据，不以“解锁”等用语代替验证。

[浏览越狱破限历史目录 →](越狱破限/)：按模型或场景命名的既有材料。文件中的稳定性、通用性等声称未获本轮效果验证，收录不代表平台许可或绕过效果背书。

## NSFW

**评价重点：** 内容类型、目标工具和依赖标注清楚，来源与展示方式符合[贡献指南](CONTRIBUTING.md)中的收录边界。

[浏览 NSFW 历史目录 →](NSFW/)：原有成人向图像提示词资料。目标工具能力与具体发布条件需分别核对，分类标签本身不证明效果或可发布性。

## 合集与在线资料

以下是既有收藏入口，供进一步查找，未通读其中全部条目。主仓库记录子模块的固定提交，可能与上游最新内容不同；各项目的用途、依赖和许可分别以原文为准。[合集核查记录](REVIEW_NOTES.md#合集入口)

### OpenClaw 合集

- **[VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)**：按类别整理技能，适合按任务继续查找。路径：`Skills/Openclaw/awesome-openclaw-skills`。
- **[sundial-org/awesome-openclaw-skills](https://github.com/sundial-org/awesome-openclaw-skills)**：另一份社区技能索引。路径：`Skills/Openclaw/awesome-openclaw-skills-sundial-org`。
- **[openclaw/skills](https://github.com/openclaw/skills)**：原收录的技能归档；2026-10-30 核查时公开入口返回 404，递归下载可能受影响，不等于全部本地内容失效。路径：`Skills/Openclaw/skills`。
- **[mergisi/awesome-openclaw-agents](https://github.com/mergisi/awesome-openclaw-agents)**：Agent 角色设定与模板。路径：`OpenclawAgents/awesome-openclaw-agents`。
- **[hesamsheikh/awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases)**：按实际使用场景组织用例。路径：`OpenclawAgents/awesome-openclaw-usecases`。
- **[EvoLinkAI/awesome-openclaw-usecases-moltbook](https://github.com/EvoLinkAI/awesome-openclaw-usecases-moltbook)**：Moltbook 相关用例与多语言资料。路径：`OpenclawAgents/awesome-openclaw-usecases-moltbook`。

<details>
<summary>其他在线收藏入口</summary>

这些是历史收录的外部资料入口，未按本轮精选标准逐项推荐。

- [Nanobanana 提示词收纳盒](https://bmzxdlj.cn/)：中文提示词收藏。
- [Labnana](https://labnana.com/zh/explore/all)：图像作品与提示词浏览。
- [YouMind Nano Banana Pro 提示词库](https://youmind.com/zh-CN/nano-banana-pro-prompts?categories=comic-storyboard)：按主题浏览图像提示词。
- [Prompt Manager](https://prompt.vioaki.xyz/)：提示词画廊与模板。
- [飞书提示词表格](https://my.feishu.cn/wiki/S5nowuX3uiHXq4kNPb3c7cPpngh?table=tblJT29vyAEQmZzq&view=vewBBRuwm1)：原收录的在线表格。
- [飞书知识库](https://uahbgrt760r.feishu.cn/wiki/EOXawAHZ5ixJb6kHUU6cxi3QnXc)：原收录的资料入口。

</details>

## 使用与下载

打开具体文件，点击 **Raw** 复制原文，替换占位符并补充自己的任务。文件指定了系统指令或放置位置时，按其说明使用；Skill 按原项目安装。需要搜索、附件或执行代码的模板依赖宿主实际能力，使用后仍需检查输出。

增强系列放在任务描述与材料之后；引用和附件不会因此获得指令权限。

<details>
<summary>下载本库与按需拉取子模块</summary>

只下载本库提示词与导航：

```bash
git clone https://github.com/dongshuyan/Awesome-Prompts.git
cd Awesome-Prompts
```

普通克隆不会自动下载子模块。只需要 COMPASS 时：

```bash
git submodule update --init Skills/compass-skills
```

需要全部子模块时，在仓库根目录执行下列命令；部分上游当前不可访问，可能无法全部拉取：

```bash
git submodule update --init --recursive
```

也可从一开始使用 `git clone --recurse-submodules https://github.com/dongshuyan/Awesome-Prompts.git`。下载子模块不等于安装技能，配置以原项目说明为准。

</details>

## 归档与来源

[已过期/](已过期/) 保存历史内容，保留原分类、子目录和文件名，可按旧路径查找；例如 `角色扮演/小羊饼/` 对应 `已过期/角色扮演/小羊饼/`。当前清单及已知来源见[归档说明](已过期/README.md)。

本库包含个人创作与社区收集内容，部分早期条目的出处尚未补全。各子模块许可见原项目，复制或改编前请核对具体授权。已有来源记录：[Nano Banana Pro 图像规格](https://linux.do/t/topic/1410949)、[豆包图像提示词](https://linux.do/t/topic/1411250)、[小羊饼归档](已过期/README.md)。

## 投稿与反馈

欢迎通过 [Issue](https://github.com/dongshuyan/Awesome-Prompts/issues) 或 PR 推荐具体条目，自己的项目与他人作品采用同一标准。请按[贡献指南](CONTRIBUTING.md)提供：**原始条目与版本、用途、相对价值、前提、作者与授权**；有可核查反馈可一并附上，未亲测直接说明。

获收录后展示原仓库、精选条目和推荐理由，不给整库自动背书。反馈已有问题请附路径；运行反馈如有模型/工具版本、日期及预期与实际表现，更便于核查。原作者也可通过 Issue 补充署名、授权或提出下架请求。

如果这里的内容帮到了你，欢迎点 **Star**，或[关注维护者](https://github.com/dongshuyan)，也欢迎分享具体的使用反馈。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=dongshuyan/Awesome-Prompts&type=Date)](https://star-history.com/#dongshuyan/Awesome-Prompts&Date)
