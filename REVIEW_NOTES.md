# 资源审阅说明 / Resource review notes

2026-10-30 / 2026-11-15 / 2026-11-21 · [中文](#中文) · [English](#english)

## 中文

2026-10-30 批次从提交`98dfef9`开始整理。检查方式是阅读移除前的85份本地内容文件（含5份既有归档）、审阅7个第三方合集入口，并核对所选外部资源及有限反馈；没有运行提示词或Skill来验证模型效果，也没有通读第三方合集的全部内容。

### 版本与适用性

| 对象 | 本轮处理与使用边界 |
| --- | --- |
| 提示词增强系列 | 只修改当前六版：引用/附件不是自动获得权限的指令；证据按命题质量而非固定数量判断；简单任务无需完整时间、计划和日志结构。输出语言优先遵循用户明确指定，否则跟随用户任务语言，不由模板语言决定。 |
| 英文middle | 原本与英文完整版仅有空白和末尾中文要求的差异。语言规则与当前规则统一后，两份文件内容逐字相同；保留历史文件名，不称其精简中版。该语言选择只针对增强系列的当前六版，在独立提交中便于审阅；其他模板保留各自的语言要求。 |
| `旧版本/`四份增强稿 | 正文未变，规则可能与当前版不同；日期较早不自动构成失效。 |
| Nano Banana规格 | 依据下列官方资料，将型号更新为`gemini-3-pro-image`。输出是自定义类JSON创作规格，含注释、范围和占位，不是官方API请求或可直接解析的JSON；4K和最多14张参考图的说明仍有官方依据。未做API调用测试。 |
| 健康与论文阅读 | 健康模板先补关键信息，不凑排除点或例行给药名/剂量；论文模板区分原文、外部信息与未知，不用发表声望代替证据。这是文字修订，不是临床或模型效果验证。 |
| 工程三步骤 | 统一方案、施工计划和交接占位路径，以可检查的范围和验收替代“完美/无bug”承诺；实现代码进入所属模块，测试材料遵循项目约定。 |
| 生成与改写 | 推断出的新目标须先确认；校准轮次按需，持久化依赖真实宿主能力和授权；事实改写不编造经历、引用或逻辑。压缩率须有实际计量，不能把字符数当Token数。 |
| 任务澄清与边界说明 | 从越狱目录移到实用工具，清理对话残留。它是五组任务消歧/输出框架，不是OpenAI官方模板或经过验证的越狱。替代目标不一定与原目标等价。 |
| 赛博女友 | 整理非性化日常角色对话的身份透明、变量、长度/动作规则和围栏，移除带性化倾向的外观标签；年龄不变，不将其升级为本轮新精选。非露骨恋爱框架是否继续保留，列为合并前的维护者审阅项。 |

型号与能力依据（核对日期2026-10-30）：[弃用表](https://ai.google.dev/gemini-api/docs/deprecations)、[发布说明](https://ai.google.dev/gemini-api/docs/changelog#may-28-2026)、[当前型号](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-image)、[图像生成文档](https://ai.google.dev/gemini-api/docs/image-generation)。公告和文档核对不等于已实测旧接口关闭或新模板可调用。

### 历史内容与具体问题

本轮没有新增“过时归档”：尚无充分依据证明其他整份内容已失效、不可合理修订，或被已认可的具体替代完整覆盖。既有5份小羊饼维持原归档状态，不补造最初归档理由或日期。

从当前树移除了12份明确结合未成年设定与性内容的版本，以及1份包含非自愿性内容要求的版本。它们属于具体内容问题，没有放入公开过时归档，也未做改年龄或换名式改写。此修改不清除Git历史、主分支、fork或外部传播，也不宣称平台已作最终裁定。依据：[GitHub未成年人规则](https://docs.github.com/en/site-policy/acceptable-use-policies/github-child-sexual-exploitation-or-abuse)、[性内容规则](https://docs.github.com/en/site-policy/acceptable-use-policies/github-sexually-obscene-content)。

Cosplay写真与“书中角色”模板的年龄边界仍待进一步决定，本轮保留原文、不新增推荐；不把它们算作上述12份已确认个案。对其余历史文件的保留同样不等于重新推荐或授权/托管核验通过。

成人、角色扮演和越狱栏目继续保留，具体条目分别判断。部分历史“翻译”内容实际包含创意扩写；部分图像模板需要参考图、多图能力，另有未提供的thinking框架引用，不能默认具备相应宿主能力。历史越狱中的“稳定、通用、解锁”等是文本自述，未附本轮核查过的模型版本与结果；其中的编造要求、污染字串或重复没有被修复以增强绕过能力。

### 合集入口

7个子模块及`.gitmodules`未改。本轮只检查入口，不对整库背书：

- `openclaw/skills`公开API和网页在核查时返回404；不据此断言永久删除或所有内容失效。VoltAgent合集有指向它的链接，未逐条检查所有链接。
- Moltbook上游从`EvoLinkAI`重定向到`Evolink-AI`；保留原配置，未自动换地址或升级版本。
- mergisi固定版本的README有MIT徽章和CC0页尾差异，实际LICENSE为MIT；sundial的README声明CC0但本地根许可文件缺失；Moltbook声明MIT但本地根许可文件缺失。文件缺失不等于没有许可声明，也不据此推断统一授权。
- 上游有更多提交，不等于固定版本过时。使用前仍须查具体条目、依赖与许可。

### 新收录的依据

README中的三项是固定版本、仅链接介绍。doc-coauthoring的多轮流程、frontend-design的视觉流程、Roleplay - Immersive的通用互动规则与本地原有内容侧重不同；这支持用途型推荐，不能证明实际效果更好或与第三方合集完全无重叠。

第三方反馈没有在本轮复现：[doc-coauthoring单轮场景报告](https://github.com/anthropics/skills/issues/1718)、[工具名报告](https://github.com/anthropics/skills/issues/1154)、[frontend-design小样本样式报告](https://github.com/anthropics/skills/issues/1808)。[SillyTavern #4480](https://github.com/SillyTavern/SillyTavern/issues/4480)由维护者指出接口设置位置不同，后无回复关闭，不能当作模板有效或无效的证明。

成人预设相关线索和当前越狱合集的补查没有产生新的可推荐条目；部分复杂预设只完成README、依赖与有限反馈初筛。非露骨情感模板没有被当作成人露骨方向补缺，研究基准没有被算作可用越狱，也未据此宣称不存在优质资源。

### 2026-11-15：新增精选与专项补查

本批次新增七个仓库中的八条具体资源，以署名简介和固定提交外链展示，未复制 Skill 正文、运行上游脚本或验证模型效果。下列用途与前提依据所链原文核查，内容判断的置信度高；这不构成效果比较。

| 具体条目 | 收录价值与使用边界 |
| --- | --- |
| [prompt-optimizer](https://github.com/getsentry/skills/blob/a582c51ee29d0f35e6ac321340796f77d43da733/skills/prompt-optimizer/SKILL.md) · Sentry | 增加候选对照与保留集复核；需模型调用和目标模型适配。Apache-2.0。 |
| [skill-creator](https://github.com/anthropics/skills/blob/1780c5e5a552fd4d1c9d6a7b0cab26b0c2bef064/skills/skill-creator/SKILL.md) · Anthropic | 增加 Skill 编写与评测流程；完整评测需 Claude 环境和子代理，触发评测需 Claude CLI，主文提供降级流程。目录 Apache-2.0。 |
| [systematic-debugging](https://github.com/obra/superpowers/blob/22f0b463e7a5e579904dd6211a520321035526f7/skills/systematic-debugging/SKILL.md) · Jesse Vincent / Superpowers | 增加根因追踪与单假设验证；需源码、日志和检查能力，部分步骤引用 Superpowers 配套技能，约束较强。MIT。 |
| [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/434b7f91364665f2f733b310ec54809bf8f37937/command.md) · Vercel | 增加前端审查规则；固定 command.md 内嵌规则，示例偏 React/Next，仍需实际页面验收。MIT。 |
| [logo-design](https://github.com/kaankiziltug/logo-design-skill/blob/e9eaddc07895575253d6663320354a708f53e955/skills/logo-design/SKILL.md) · kaankiziltug | 增加 SVG 标志设计与复核流程；需 Python 和渲染器。MIT 不覆盖参考商标，不能替代商标检索。 |
| [literature-review](https://github.com/K-Dense-AI/scientific-agent-skills/blob/2d2065fb4520fa3f3f2bcf61cff26ec8b7eba4b5/skills/literature-review/SKILL.md) · K-Dense | 从单篇阅读扩展到多文献综合；脚本需 Python/requests 与网络，PDF 与可选服务另有依赖；DOI 注册不证明引文支持命题。MIT。 |
| [obsidian-markdown](https://github.com/obsidianmd/obsidian-skills/blob/398127736bd4ba42d767b1419fee1a927508370b/plugins/obsidian/skills/obsidian-markdown/SKILL.md) · Obsidian / kepano | 补充 Obsidian 双链、嵌入、提示块与属性；需配套文件与宿主渲染检查，其他渲染器未必支持。MIT。 |
| [json-canvas](https://github.com/obsidianmd/obsidian-skills/blob/398127736bd4ba42d767b1419fee1a927508370b/plugins/obsidian/skills/json-canvas/SKILL.md) · Obsidian / kepano | 补充节点画布及 JSON/ID/连线引用检查；需兼容宿主核对视觉布局。MIT。 |

其中 Obsidian 的 Markdown 与 JSON Canvas 分别处理笔记语法和节点画布，按两条登记。已有 frontend-design 与新增实用工具通过同一个自动列表展示；元提示词也使用现有分组。目录仍是唯一数据源，未增加字段、生成器特例或网页分支。2026-11-15 仅是这八条的核查日期，不表示旧条目全部重审。

专项补查的检索范围包括 GitHub 原仓库、宿主公开文档、Hugging Face 数据卡、Reddit 发现线索及 arXiv、ACL、OpenReview 等研究来源。记录了 12 批相关查询、46 个检索表达式，并补查 HF 元数据；部分后续表达式是检索主题摘要。检索词包括 roleplay preset、character card、角色卡、jailbreak benchmark、red teaming、越狱评测、NSFW、adult prompt、成人向提示词及许可变体。结果按具体文件、用途、增量、前提、版本、授权与阅读深度筛选；热度与搜索命中数不作为质量证据。

| 补查候选 | 判断与未决事项 |
| --- | --- |
| [NanoBear Roleplay v2.1](https://github.com/cavecomputing/nanobear/blob/5a625088f34df130f4b02b6f2b3e649bfa46b1ae/README.md) | 完整阅读短模板及 CC BY 4.0 根许可；知识边界与角色自主性有增量，但与现有 Immersive 重叠，作为备选。Story v2.2 是允许代写用户行动的导演模式，按本库交互式角色扮演的用户行动权标准不作推荐，不据此判断其创作质量。未做效果测试。 |
| [StrongREJECT 评测量规](https://github.com/dsbowen/strong_reject/blob/7a551d5b440ec7b75d4f6f5bb7c1719965b76b47/strong_reject/eval_files/judge_templates.json) | 阅读 strongreject_rubric 及其 system 字段、MIT 许可；可补充拒答、具体性与说服力的研究评测，但含偏向高分的取整规则，未复现评测。这是回复评测提示词，不是绕过提示词。 |
| [莉娅的酒馆写卡方法](https://github.com/feverZHONG/liya-sillytavern-cards/blob/e6d24994c1aabc408d8c16deb5efb7d5abcb1493/SKILL.md) | 主文、README 与文档许可已读；文档 CC BY 4.0、代码 MIT。输入资料到 V2 JSON/PNG 卡的用途明确，跨仓库引用、宿主兼容性与配套脚本尚未完整核验；“两个样本同意才是真问题”不能当通用缺陷标准，暂列条件候选。 |

其他线索分别处理：角色卡生成模板存在硬编码 Windows 输出目录；其 frontmatter 有 MIT 声明，根 LICENSE 缺失不能改写为“没有许可”。HYPERCODE 有独立提示词，已读项目说明和 CC BY-NC-SA 4.0 许可，但主文及成人模块未完成审阅，不能按低质量排除。fiction-continuation 的 sweet-daily 是已读的普通小说续写模板，不计作成人向补缺。整套应用、面板和训练语料不自动当作具体 Prompt 或 Skill。

NSFW 方向确有命中，本批次没有新增通过完整审阅的精选。相关线索分别记录：

- **访问受限**：读取一个 manual-gated 提示词数据卡返回 401，未取得正文。
- **正文未核**：部分提示词合集尚未完成正文审阅。成人写作 ShareGPT 线索本次仅读到数据卡中的简短转换说明及 license 为 other 的标记，未据此评判语料质量。
- **超出新增条目范围**：安全后训练数据、整套面板与应用；训练语料本身也不直接作为具体 Prompt 或 Skill。

这些结果不证明相关项目质量差，也不表示该方向没有优质资源。专项新发现未在本批次八条之外自动入库。

### 2026-11-21：小遇动作提示词

收录的是 [xiaoyu 的通话快捷动作模板](https://github.com/hsuehly/xiaoyu/blob/d5ecb1efffec98500169593fac757ac3c414a8e3/docs/QUICK_ACTIONS.md)，不是整套 Flutter App。动作描述覆盖吃喝、装扮、表情、手势和道具，补充本库角色互动中的动作表达。已阅读全文及中英文 ARB 动作字段，核对文档 106 个唯一 ID 与 Dart 枚举、双语名称/指令键一致，中文指令与目录一致；这支持内容与计数判断（置信度高），不证明动作效果或跨工具适用性。

按原 App 使用需要 Vidu 实时调用权限、余额和可访问 Vidu/Agora 的网络；本次未安装或运行 App，也未测试通话。上游使用说明明确区分本地发送完成与平台实际执行动作。文档称原始动作需求来自项目用户；[README](https://github.com/hsuehly/xiaoyu/blob/d5ecb1efffec98500169593fac757ac3c414a8e3/README.md)声明原创代码采用 AGPL-3.0-only，品牌和第三方素材另行处理，不能据此推断所有动作文本的独立授权。本库仅作署名外链介绍，不复制正文或开启预览。

## English

The 2026-10-30 revision starts from commit `98dfef9`. It uses textual review of 85 pre-removal local content files, including five existing archives, seven third-party collection entrypoints, selected external resources and limited feedback. Collected prompts and skills were not executed, and third-party collections were not read in full.

### Versions and applicability

| Item | Change and limitation |
| --- | --- |
| Current enhancement prompts | Six current files distinguish instructions from supplied material, assess evidence quality rather than a fixed source count, and make full time/plan/log structures optional for simple work. Explicit language requests take priority; otherwise use the task language, not the template language. |
| English middle | Previously differed from full English only in whitespace and the final Chinese-language instruction. The normalized files are byte-for-byte identical. Retain the historical filename without presenting it as shorter. This language policy applies only to the six current enhancement variants and is in a separate commit for review; other templates keep their own language requirements. |
| Four older enhancement files | Text unchanged; their rules may differ. Age alone does not establish obsolescence. |
| Nano Banana specification | Updated the model to `gemini-3-pro-image` using the official sources below. The custom JSON-like creative specification includes comments, ranges and placeholders; it is not an official API request or directly parseable JSON. Documentation still supports 4K and up to 14 reference images. No API call test was performed. |
| Health and paper reading | Ask for material health information before analysis; remove fixed exclusion-point quotas and routine drug/dose output. Distinguish paper text, external information and unknowns without treating publication prestige as proof. These are editorial changes, not clinical or model validation. |
| Engineering workflow | Consistent proposal/plan/handoff placeholders and observable acceptance checks replace absolute perfection claims. Implementation belongs in its owning modules; tests follow project conventions. |
| Generation and rewriting | Confirm material goal changes, calibrate only as needed, and depend on actual authorized storage for persistence. Factual rewriting must not invent experiences, citations or logic. Compression ratios require measurement; character counts are not token counts. |
| Task clarification templates | Moved from jailbreaks to practical tools and removed conversational scaffolding. Five task/format frameworks, not official OpenAI templates or verified jailbreaks. Alternative goals are not necessarily equivalent. |
| Cyber girlfriend | Clarified identity transparency, variables, length/action rules and fences for non-sexual fictional dialogue, and removed sexualized appearance tags. Age is unchanged and the file is not newly selected. Whether to retain its non-explicit romance framing remains a maintainer decision before merging. |

Model and capability sources, checked on 2026-10-30: [deprecations](https://ai.google.dev/gemini-api/docs/deprecations), [release notes](https://ai.google.dev/gemini-api/docs/changelog#may-28-2026), [current model](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-image), and [image documentation](https://ai.google.dev/gemini-api/docs/image-generation). Documentation checks do not establish observed endpoint shutdown or template executability.

### Historical material and specific content issues

No new obsolescence archives were added. Evidence did not establish irreparable failure or a fully accepted replacement for other whole entries. The five existing archives remain unchanged; their original decision dates or reasons have not been reconstructed.

Twelve versions explicitly combining minor settings with sexual content and one containing non-consensual sexual-content requirements were removed from the current tree. They were not publicly archived or cosmetically rewritten. This does not remove Git history, the main branch, forks or external copies, or establish a final platform determination. Sources: [GitHub child-protection rules](https://docs.github.com/en/site-policy/acceptable-use-policies/github-child-sexual-exploitation-or-abuse) and [sexual-content rules](https://docs.github.com/en/site-policy/acceptable-use-policies/github-sexually-obscene-content).

Age-boundary questions remain for the cosplay and “book character” templates. Their text is unchanged and they are not newly recommended; they are not counted among the twelve confirmed cases. Retaining other historical files does not renew recommendations or establish permission or publishability.

Adult, roleplay and jailbreak categories remain. Some historical “translation” material is creative expansion; image templates may require reference images, multiple-image output or a missing thinking framework. Host capabilities are not supplied by those instructions. Historical jailbreak claims of unlocking, stability or universality are not verified results. Fabrication instructions, corrupted text and repetition were noted without repairing bypass capability.

### Collection entrypoints

The seven gitlinks and `.gitmodules` are unchanged. Review covered entrypoints, not whole collections:

- The public `openclaw/skills` API and page returned 404 when checked. This does not prove permanent deletion or universal failure. VoltAgent contains links to it; individual links were not exhaustively tested.
- The Moltbook upstream redirects from `EvoLinkAI` to `Evolink-AI`; its configured URL and pin remain unchanged.
- The pinned mergisi README has an MIT badge and CC0 footer, while its LICENSE is MIT. Sundial declares CC0 in its README but lacks a local root license file; Moltbook declares MIT without a local root license file. Missing files do not erase declarations or establish a uniform license.
- More upstream commits do not establish obsolescence. Check the selected item's prerequisites and license.

### Basis for new entries

The three README additions are pinned, source-link introductions. Their multi-turn document workflow, interface-design workflow and general roleplay interaction rules respectively complement local material. This supports purpose-based recommendations, not better measured outcomes or complete non-overlap with third-party collections.

Reports were not reproduced here: [single-turn doc-coauthoring](https://github.com/anthropics/skills/issues/1718), [tool naming](https://github.com/anthropics/skills/issues/1154), and [small-sample frontend styling](https://github.com/anthropics/skills/issues/1808). In [SillyTavern #4480](https://github.com/SillyTavern/SillyTavern/issues/4480), a maintainer identified a different interface's configuration location; it later closed without a user response. It does not prove prompt effectiveness or failure.

The additional adult-preset leads and current jailbreak-collection research produced no new recommended entry. Some complex presets received only README, dependency and limited-feedback screening. Non-explicit romance was not counted as explicit-adult coverage, and research benchmarks were not counted as working jailbreaks. No claim is made that good resources do not exist.

### 2026-11-15: New selections and focused research

This batch adds eight specific resources from seven repositories, using attributed descriptions and pinned source links. Skill bodies were not copied, upstream scripts were not run, and model outcomes were not tested. The linked source text supports the purposes and prerequisites below with high confidence; it does not establish comparative effectiveness.

| Specific item | Added value and prerequisites |
| --- | --- |
| [prompt-optimizer](https://github.com/getsentry/skills/blob/a582c51ee29d0f35e6ac321340796f77d43da733/skills/prompt-optimizer/SKILL.md) · Sentry | Adds candidate comparisons and held-out checks; requires model calls and adaptation to the target model. Apache-2.0. |
| [skill-creator](https://github.com/anthropics/skills/blob/1780c5e5a552fd4d1c9d6a7b0cab26b0c2bef064/skills/skill-creator/SKILL.md) · Anthropic | Adds skill authoring and evaluation; full evaluation uses Claude and subagents, trigger evaluation needs the Claude CLI, and the main file documents fallbacks. Directory Apache-2.0. |
| [systematic-debugging](https://github.com/obra/superpowers/blob/22f0b463e7a5e579904dd6211a520321035526f7/skills/systematic-debugging/SKILL.md) · Jesse Vincent / Superpowers | Adds root-cause tracing and single-hypothesis checks. Needs source, logs and test access; some steps reference companion Superpowers skills. A prescriptive workflow. MIT. |
| [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/434b7f91364665f2f733b310ec54809bf8f37937/command.md) · Vercel | Adds frontend review rules embedded in the pinned command.md. Examples lean toward React/Next; actual-page checks remain necessary. MIT. |
| [logo-design](https://github.com/kaankiziltug/logo-design-skill/blob/e9eaddc07895575253d6663320354a708f53e955/skills/logo-design/SKILL.md) · kaankiziltug | Adds SVG logo design and review. Needs Python and a renderer; MIT excludes reference trademarks and does not replace trademark clearance. |
| [literature-review](https://github.com/K-Dense-AI/scientific-agent-skills/blob/2d2065fb4520fa3f3f2bcf61cff26ec8b7eba4b5/skills/literature-review/SKILL.md) · K-Dense | Extends single-paper reading into synthesis. Scripts need Python/requests and network access; export and optional services add dependencies. DOI registration does not prove claim support. MIT. |
| [obsidian-markdown](https://github.com/obsidianmd/obsidian-skills/blob/398127736bd4ba42d767b1419fee1a927508370b/plugins/obsidian/skills/obsidian-markdown/SKILL.md) · Obsidian / kepano | Adds Obsidian wikilinks, embeds, callouts and properties. Use supporting files and check host rendering; other renderers may not support the dialect. MIT. |
| [json-canvas](https://github.com/obsidianmd/obsidian-skills/blob/398127736bd4ba42d767b1419fee1a927508370b/plugins/obsidian/skills/json-canvas/SKILL.md) · Obsidian / kepano | Adds node canvases and JSON/ID/edge-reference checks. Verify visual layout in a compatible host. MIT. |

Obsidian Markdown and JSON Canvas cover note syntax and node-based canvases respectively, so they are separate entries. Existing frontend-design and the practical additions share one automatic list; meta-prompts use an existing group too. The catalog remains the single data source, with no new schema fields, generator exceptions or page branches. The 2026-11-15 date applies to these eight resources, not a renewed review of all older entries.

The focused search included original GitHub repositories, public host documentation, Hugging Face cards, Reddit discovery leads and research sources including arXiv, ACL and OpenReview. The record contains 12 related query batches and 46 search expressions, plus HF metadata checks; some later expressions summarize search topics. Terms included roleplay preset, character card, jailbreak benchmark, red teaming, NSFW, adult prompts, Chinese equivalents and licensing variants. Screening considered specific content, purpose, added value, prerequisites, version, permission and actual reading depth. Popularity and result counts were not quality evidence.

| Additional candidate | Assessment and remaining questions |
| --- | --- |
| [NanoBear Roleplay v2.1](https://github.com/cavecomputing/nanobear/blob/5a625088f34df130f4b02b6f2b3e649bfa46b1ae/README.md) | The short template and CC BY 4.0 root license were read. Knowledge boundaries and character autonomy add detail, with overlap with Immersive; retain as an alternative. Story v2.2 is a director-led mode that authors user actions. It does not meet this collection’s user-agency criterion for interactive roleplay; this is not a writing-quality judgment. No outcome test. |
| [StrongREJECT evaluation rubric](https://github.com/dsbowen/strong_reject/blob/7a551d5b440ec7b75d4f6f5bb7c1719965b76b47/strong_reject/eval_files/judge_templates.json) | Read strongreject_rubric, its system field and MIT license. A candidate for refusal, specificity and convincingness evaluation, with an explicit bias toward higher scores. Evaluation was not reproduced; this is a response-evaluation prompt, not a bypass prompt. |
| [Liya's SillyTavern card-authoring skill](https://github.com/feverZHONG/liya-sillytavern-cards/blob/e6d24994c1aabc408d8c16deb5efb7d5abcb1493/SKILL.md) | Main file, README and documentation license read; docs use CC BY 4.0 and code uses MIT. A clear materials-to-V2-JSON/PNG workflow, but cross-repository references, host compatibility and scripts need further checks. Agreement between two samples is not a general defect criterion. Conditional candidate. |

Other leads remain distinct: a card-creation template hardcodes a Windows output path; its frontmatter declares MIT, although a root LICENSE was unavailable. HYPERCODE has a standalone prompt; its description and CC BY-NC-SA 4.0 license were read, while its main prompt and adult modules remain incompletely reviewed, rather than rejected as poor quality. The inspected sweet-daily fiction-continuation template is ordinary fiction and does not fill the explicit-adult category. Complete applications, panels and training corpora are not automatically specific prompts or skills.

NSFW searches returned relevant leads, but this batch adds no fully reviewed selection. The record distinguishes:

- **Access-limited:** an attempted read of a manual-gated prompt card returned HTTP 401, so its body was not obtained.
- **Body unreviewed:** some prompt collections remain incompletely read. For an adult-writing ShareGPT lead, only brief conversion notes and a license other marker in the card were read; this does not establish corpus quality.
- **Outside the scope of new entries:** safety-post-training data, complete panels and applications. Training corpora are not directly treated as specific prompts or skills either.

These results do not establish poor quality or the absence of good resources in the category. Supplemental discoveries were not automatically added beyond the eight approved resources.

### 2026-11-21: Xiaoyu action prompts

The selected resource is [xiaoyu's call-action template set](https://github.com/hsuehly/xiaoyu/blob/d5ecb1efffec98500169593fac757ac3c414a8e3/docs/QUICK_ACTIONS.md), rather than the complete Flutter app. Food, styling, expression, gesture and prop descriptions add action-level detail to character interactions. The complete catalog and action-specific Chinese/English ARB fields were read. Its 106 unique IDs match the Dart enum and both languages' name/prompt keys, and Chinese prompt strings match the document. This supports the content and count with high confidence; it does not establish motion quality or compatibility with other tools.

In-app use requires Vidu real-time permission, credit and network access to Vidu/Agora. The app was not installed or run, and no call testing was performed. The upstream usage guide distinguishes local submission from actual platform execution. The docs attribute original action requests to a project user. The [README](https://github.com/hsuehly/xiaoyu/blob/d5ecb1efffec98500169593fac757ac3c414a8e3/README.md) declares original code AGPL-3.0-only, with separate branding and third-party terms; this does not establish a separately verified license for every action text. This collection provides attributed source links without copying prompt bodies or enabling previews.
