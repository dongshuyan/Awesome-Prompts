# Prompt Collection

[简体中文](README.md) | English

A personal repo for collecting and organizing useful prompts: both ones I wrote and ones found around the web.

---

## Directory Structure

```
prompts/
├── 实用工具/     # Daily-use prompts (health, academic, Q&A, etc.)
│   ├── 提示词增强prompt/  # Force AI to search/verify before answering
│   └── 项目优化与施工/    # Three-step project optimization flow
├── 越狱破限/     # Jailbreak / limit-breaking prompts
├── 角色扮演/     # Roleplay and character prompts
│   └── 小羊饼/   # Multi-personality NSFW roleplay (source: Linux.do)
├── 写作辅助/     # Translation, writing, text-to-image prompts
├── 元提示词/     # Meta prompts for generating or optimizing other prompts
├── NSFW/         # Adult content generation prompts
├── Skills/       # OpenClaw skills (community repos, see below)
│   └── Openclaw/
│       ├── awesome-openclaw-skills/           # VoltAgent: 5000+ skills list
│       ├── awesome-openclaw-skills-sundial-org/  # Sundial: 900+ skills
│       └── skills/                            # Backed up from ClawHub
└── OpenclawAgents/  # OpenClaw agent templates and use cases (community repos)
    ├── awesome-openclaw-agents/     # 53 production-ready Agent templates (SOUL.md)
    ├── awesome-openclaw-usecases/   # Real-world use cases
    └── awesome-openclaw-usecases-moltbook/  # Moltbook 70+ use cases (multilingual)
```

---

## Details

### 实用工具 (Practical Tools)

Everyday prompts for productivity.

| File | Purpose | When to use |
|------|---------|-------------|
| [`AI健康顾问.txt`](实用工具/AI健康顾问.txt) | Structured symptom analysis and suggestions | Quick possible causes for discomfort |
| [`学术论文阅读.txt`](实用工具/学术论文阅读.txt) | Structured paper analysis for beginners | Reading academic papers |
| [`自信的Gemini.txt`](实用工具/自信的Gemini.txt) | Google’s system prompt for more confident Gemini | Base system prompt for Gemini |

#### 提示词增强prompt (Search-before-answer)

Three variants: full (most detail), middle (balanced), lite (fewer tokens).

| File | Purpose | When to use |
|------|---------|-------------|
| [`260107-理解问题搜索信息-中文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-中文.txt) | Full search-verify flow | When you need accurate, traceable answers |
| [`260107-理解问题搜索信息-英文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-英文.txt) | Full, English | English use |
| [`260107-理解问题搜索信息-middle-中文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-middle-中文.txt) | Middle, balanced | Recommended for daily use |
| [`260107-理解问题搜索信息-middle-英文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-middle-英文.txt) | Middle, English | English use |
| [`260107-理解问题搜索信息-lite-中文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-lite-中文.txt) | Lite, fewer tokens | When token-limited |
| [`260107-理解问题搜索信息-lite-英文.txt`](实用工具/提示词增强prompt/260107-理解问题搜索信息-lite-英文.txt) | Lite, English | English use |

#### 项目优化与施工 (Project optimization)

Three-step flow: requirements → construction docs → handover prompts.

| File | Purpose | When to use |
|------|---------|-------------|
| [`step1.md`](实用工具/项目优化与施工/step1.md) | Requirements and design | Before starting optimization |
| [`step2.md`](实用工具/项目优化与施工/step2.md) | Construction docs and phases | Splitting work into phases |
| [`step3.md`](实用工具/项目优化与施工/step3.md) | Execution prompt + acceptance | Per-phase prompts |

### 越狱破限 (Jailbreak)

Templates to work around model content restrictions.

| File | Purpose | When to use |
|------|---------|-------------|
| [`GHOST越狱协议.txt`](越狱破限/GHOST越狱协议.txt) | Developer-mode style bypass | When you need direct sensitive answers |
| [`FOP自由覆盖模式.txt`](越狱破限/FOP自由覆盖模式.txt) | Chinese “free mode” for creative/fictional content | Less restricted generation |
| [`jailbreak模板-Gemini.txt`](越狱破限/jailbreak模板-Gemini.txt) | Three frameworks for Gemini | Gemini-sensitive tasks |
| [`jailbreak模板-OpenAI.txt`](越狱破限/jailbreak模板-OpenAI.txt) | OpenAI-oriented jailbreak | Reducing ChatGPT refusals |
| [`角色扮演破限.txt`](越狱破限/角色扮演破限.txt) | Story-continuation mode for roleplay | Fiction and scene writing |
| [`NSFW系统提示词.txt`](越狱破限/NSFW系统提示词.txt) | System prompt for adult content | Adult-oriented generation |

### 角色扮演 (Roleplay)

Immersive character and roleplay prompts.

| File | Purpose | When to use |
|------|---------|-------------|
| [`赛博女友.txt`](角色扮演/赛博女友.txt) | Full virtual girlfriend persona (安和昴), four moods | Long-term roleplay |
| [`古雅语情色小说.txt`](角色扮演/古雅语情色小说.txt) | Classical-style romance writer, refined language | Period romance fiction |

#### 小羊饼

Multi-personality NSFW roleplay set; source: [Linux.do](https://linux.do/t/topic/1612668).

| File | Purpose | When to use |
|------|---------|-------------|
| [`傲娇 NSFW 提示词.txt`](角色扮演/小羊饼/傲娇%20NSFW%20提示词.txt) | Tsundere persona | Tsundere NSFW roleplay |
| [`病娇 NSFW 提示词.txt`](角色扮演/小羊饼/病娇%20NSFW%20提示词.txt) | Yandere persona | Yandere NSFW roleplay |
| [`雌小鬼 NSFW 提示词.txt`](角色扮演/小羊饼/雌小鬼%20NSFW%20提示词.txt) | Bratty girl persona | Bratty NSFW roleplay |
| [`损友 NSFW 提示词.txt`](角色扮演/小羊饼/损友%20NSFW%20提示词.txt) | Buddy persona | Buddy NSFW roleplay |
| [`中二病 NSFW 提示词.txt`](角色扮演/小羊饼/中二病%20NSFW%20提示词.txt) | Chuunibyou persona | Chuunibyou NSFW roleplay |

### 写作辅助 (Writing)

Translation, style transfer, and text-to-image prompts.

| File | Purpose | When to use |
|------|---------|-------------|
| [`AI内容转人写.txt`](写作辅助/AI内容转人写.txt) | Rewrite AI text in human style | Avoiding AI detection |
| [`AV翻译提示词.txt`](写作辅助/AV翻译提示词.txt) | Japanese adult content translation, “sensory” over literal | Translating adult audio/subtitles |
| [`文生图提示词.txt`](写作辅助/文生图提示词.txt) | Creative director for magazine-style image prompts | Adult image descriptions |
| [`Cosplay写真提示词.txt`](写作辅助/Cosplay写真提示词.txt) | Cosplay photo text-to-image template | Cosplay images |

### 元提示词 (Meta prompts)

Prompts for generating or optimizing other prompts.

| File | Purpose | When to use | Source |
|------|---------|-------------|--------|
| [`生成prompt的prompt.txt`](元提示词/生成prompt的prompt.txt) | Prompt designer with preference calibration | High-quality custom prompts | |
| [`根据需求生成提示词.txt`](元提示词/根据需求生成提示词.txt) | Map need type to structured prompt | Turn vague needs into prompts | |
| [`长提示词压缩.txt`](元提示词/长提示词压缩.txt) | Compress prompts in classical style | Reduce token use | |
| [`Nano-Banana-Pro图像规格架构师.txt`](元提示词/Nano-Banana-Pro图像规格架构师.txt) | Natural language → JSON image spec for Gemini 3 Pro Image | Precise image instructions | [link](https://linux.do/t/topic/1410949) |

### NSFW

Adult image generation prompts.

| File | Purpose | When to use | Source |
|------|---------|-------------|--------|
| [`豆包图像生成-仰视构图.txt`](NSFW/豆包图像生成-仰视构图.txt) | NSFW for 豆包 AI, low-angle, body proportions | 豆包写真-style images | [link](https://linux.do/t/topic/1411250) |
| [`豆包图像生成-极简写真.txt`](NSFW/豆包图像生成-极简写真.txt) | NSFW for 豆包 AI, minimal style, lace bikini | 豆包写真-style images | [link](https://linux.do/t/topic/1411250) |

### Skills (OpenClaw)

**Local copies** of community repos for reference and backup.

| Subdir | Description |
|--------|-------------|
| `Skills/Openclaw/awesome-openclaw-skills` | [VoltAgent] 5000+ skills by category |
| `Skills/Openclaw/awesome-openclaw-skills-sundial-org` | [Sundial] 900+ skills, updated daily |
| `Skills/Openclaw/skills` | Skills backed up from ClawHub |

### OpenclawAgents

Also **local copies** of community repos.

| Subdir | Description |
|--------|-------------|
| `OpenclawAgents/awesome-openclaw-agents` | [mergisi] 53 production Agent templates (SOUL.md), Quickstart, Docker |
| `OpenclawAgents/awesome-openclaw-usecases` | [hesamsheikh] Real use cases (Reddit/YouTube digest, X analysis, etc.) |
| `OpenclawAgents/awesome-openclaw-usecases-moltbook` | [Moltbook/EvoLink] 70+ use cases, multilingual |

### Nano Banana Pro prompt websites

Collected **Nano Banana / Nano Banana Pro** (e.g. Gemini image, Firefly) prompt and image-generation sites for browsing and reuse.

| Site | Description |
|------|-------------|
| [Nanobanana 提示词收纳盒](https://bmzxdlj.cn/) | Chinese Nano Banana prompt collection |
| [Labnana](https://labnana.com/zh/explore/all) | Image generator powered by Google Nano Banana 2, explore page |
| [YouMind Nano Banana Pro prompts](https://youmind.com/zh-CN/nano-banana-pro-prompts?categories=comic-storyboard) | Large free Nano Banana Pro prompt library, categories (comic/storyboard, poster, app design, etc.), daily updates |
| [Prompt Manager (vioaki)](https://prompt.vioaki.xyz/) | Gallery + templates, tag filter (banana, cosplay, text2img/img2img), variable substitution |
| [Feishu doc – table](https://my.feishu.cn/wiki/S5nowuX3uiHXq4kNPb3c7cPpngh?table=tblJT29vyAEQmZzq&view=vewBBRuwm1) | Feishu table for Nano Banana Pro prompts |
| [Feishu wiki](https://uahbgrt760r.feishu.cn/wiki/EOXawAHZ5ixJb6kHUU6cxi3QnXc) | Feishu wiki for prompts/docs |

Local file in this repo: [元提示词/Nano-Banana-Pro图像规格架构师.txt](元提示词/Nano-Banana-Pro图像规格架构师.txt).

---

## Pushing when this repo contains other people’s repos

`Skills/` and `OpenclawAgents/` contain cloned repos; each keeps its own `.git` locally so you can `git pull` or switch branches there.

- **Sub-repo `.git` is not removed.** The repo `.gitignore` uses `.*`, so any path component starting with a dot is ignored. Subdir `.git` folders are **not tracked** and are not committed.
- **How to push:** From the repo root:
  ```bash
  git add Skills/ OpenclawAgents/   # Only normal files; no .git included
  git commit -m "Add Skills and OpenclawAgents collection"
  git push
  ```
- Sub-repo `.git` stays only on your machine and is not pushed; you can still use `git pull` etc. inside each subdir.

---

## Usage

1. Pick a category and file.
2. Copy the prompt into your AI chat.
3. Replace placeholders like `{{original_prompt}}` if present.
4. Jailbreak-style prompts may behave differently across model versions.

---

## Notice

Some prompts in this repo were collected from forums, communities, and individuals; original sources are not always known.

If you are the author of a prompt included here:
- You can ask for attribution.
- You can ask for removal.

Credit to all prompt creators.
