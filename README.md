# 个人作品集网站（秋招用）

联网后输入网址即可访问的个人主页，用于秋招投递时展示项目。

## 网站结构

```
e:\web\
├── index.html          # 页面骨架（结构，一般不用改）
├── css\style.css       # 样式（改颜色看文件顶部的 CSS 变量）
├── js\
│   ├── data\           # ★ 内容都在这：改这里 = 改页面
│   │   ├── profile.js      # 个人信息（名字/邮箱/电话/GitHub）
│   │   ├── projects.js     # 项目数据（加项目：复制一个对象）
│   │   ├── skills.js       # 技能分类
│   │   └── experience.js   # 教育/经历
│   ├── render.js       # 渲染层：把数据变成页面（一般不用改）
│   └── main.js         # 交互（导航高亮、菜单、动画）
├── assets\             # 素材文件夹
│   ├── avatar.jpg      # 你的头像照片（可选）
│   └── projects\       # 项目演示图 / GIF / 截图放这里
└── README.md           # 本说明
```

## 你需要替换的内容

| 文件 | 改什么 |
|------|--------|
| `js/data/profile.js` | 名字、邮箱、电话（GitHub 已填好：XQZLN6） |
| `js/data/projects.js` | 项目卡片内容；加项目 = 复制一个对象 |
| `js/data/skills.js` | 技能列表 |
| `js/data/experience.js` | 教育 / 经历 |
| `assets\projects\` | 放项目演示图，再回 projects.js 改图片路径 |

## 怎么在本地预览

1. 用 VS Code 打开本文件夹
2. 安装扩展 **Live Server**（或 Python 用户运行 `python -m http.server`）
3. 右键 `index.html` → "Open with Live Server"，浏览器会自动打开

## 怎么部署上线（让别人通过网址访问）

### 方案 A：GitHub Pages（免费，推荐，首选）

1. 注册 GitHub 账号：https://github.com（你的用户名是 XQZLN6）
2. 新建仓库，名字必须是 `xqzln6.github.io`，选 Public
3. 把本文件夹所有内容上传到仓库（VS Code 里点左侧「源代码管理」→ 推上去）
4. 仓库页面 → Settings → Pages → Source 选 `main` 分支 / root 目录 → Save
5. 等 1~2 分钟，访问 `https://xqzln6.github.io` 即可

### 方案 B：Gitee Pages（国内访问快，备选）

1. 在 gitee.com 注册并实名认证
2. 新建仓库，上传本文件夹内容
3. 仓库 → 服务 → Gitee Pages → 启动，得到 `https://你的用户名.gitee.io`
4. 注意：Gitee Pages 更新后可能需要手动重新部署

### 建议

- 两个都部署，简历上只写一个主链接
- 想更专业可买一个便宜域名（如 `.top` 域名），做跳转或 CNAME 指向

## 秋招加分建议

- 每个项目写「背景 → 方案 → 成果」，成果要**有数字**（采样率、帧率、成本等）
- 演示图/GIF 比文字更有说服力，几秒的实拍视频最好
- 保持诚实，写上去的每一条技能面试官都可能追问
