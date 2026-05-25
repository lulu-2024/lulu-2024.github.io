# CLAUDE.md — Portfolio Website Project

## Project Context
Building a personal portfolio website for GitHub user **lulu-2024** (Data Science / AI).
Deployed on GitHub Pages. Pure HTML/CSS/JS, zero dependencies.

## Key Paths

| Path | Purpose |
|------|---------|
| `docs/requirements.md` | User requirements & scope |
| `docs/design-spec.md` | Colors, fonts, spacing, component design |
| `docs/tech-spec.md` | Architecture, browser support, deployment |
| `docs/execution-steps.md` | Phased execution checklist (mark done here) |
| `devlog/` | Daily development logs |
| `index.html` | Main site (single page, 9 sections) |
| `css/style.css` | All styles |
| `js/main.js` | All interactivity |

## Work Instructions

1. **No frameworks** — vanilla HTML/CSS/JS only
2. **Test after changes** — open `index.html` in browser, verify
3. **Commit and push** — after each session, push to deploy

## Deployed Site

- **Live URL:** https://lulu-2024.github.io/
- **Repo:** https://github.com/lulu-2024/lulu-2024.github.io
- **Push = deploy:** any `git push` automatically updates the live site in 1-2 minutes

## How to Add a New Project

### Step 1 — Add card in `index.html`

In the Projects section, find the right category tag and add a card:

```html
<div class="project-card" data-project="keyname" data-category="分类">
  <div class="project-card-img" style="background: linear-gradient(135deg, #颜色1, #颜色2);">
    <img src="" alt="" style="display:none;height:64px;object-fit:contain" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
    <span>卡片上显示的名称</span>
  </div>
  <div class="project-card-body">
    <h3>项目标题</h3>
    <p>一句话简介</p>
    <span class="project-card-link">View Project &rarr;</span>
  </div>
</div>
```

### Step 2 — Add data in `js/main.js`

Find `var projects = {` and add an entry:

```js
keyname: {
  title: '弹窗标题',
  img: '',                              // 留空用渐变色，填图片路径则显示图片
  desc: '弹窗里的详细描述文字',
  tags: ['标签1', '标签2', '标签3'],
  link: 'https://github.com/lulu-2024/仓库名',
  gradient: 'linear-gradient(135deg, #颜色1, #颜色2)'
},
```

Optional fields:
- `pdf: 'assets/file.pdf'` — clicking card opens PDF in new tab instead of modal
- `html: 'pages/page.html'` — clicking card opens a custom HTML page

### Step 3 — Classify

| `data-category` | 对应分类 |
|------|------|
| `analytics` | Data Analytics & Visualization |
| `financial` | Financial & Risk Analytics |
| `engineering` | Data Engineering & Systems |
| `ai` | AI-Assisted Data Projects |
| `other` | Others |

### Step 4 — Deploy

```bash
git add -A
git commit -m "新增 XX 项目"
git push
```

## Current Phase
Live — ongoing content updates

## Reference
- Friend's portfolio: https://arsalan-ahmed17.github.io/my-portfolio/
- User's GitHub: https://github.com/lulu-2024
