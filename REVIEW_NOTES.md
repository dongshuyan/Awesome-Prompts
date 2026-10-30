# 第一阶段审阅说明 / Phase 1 review notes

2026-10-30 · [中文](#中文) · [English](#english)

## 中文

本轮从提交`98dfef9`开始整理。检查方式是阅读移除前的85份本地内容文件（含5份既有归档）、审阅7个第三方合集入口，并核对所选外部资源及有限反馈；没有运行提示词或Skill来验证模型效果，也没有通读第三方合集的全部内容。

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
| 赛博女友 | 仅整理非性化日常角色对话的身份透明、变量、长度/动作规则和围栏；不修改年龄，不将其升级为本轮新精选。 |

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

## English

This revision starts from commit `98dfef9`. It uses textual review of 85 pre-removal local content files, including five existing archives, seven third-party collection entrypoints, selected external resources and limited feedback. Collected prompts and skills were not executed, and third-party collections were not read in full.

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
| Cyber girlfriend | Clarified identity transparency, variables, length/action rules and fences for non-sexual fictional dialogue. Age is unchanged; the file is not promoted as a newly selected resource. |

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
