/* ==========================================================
   项目数据文件 —— 加新项目 = 复制下面一个对象，改内容即可
   每个字段都有注释，照着填就行，不用懂 HTML
   ========================================================== */

const PROJECTS = [
  {
    // 卡片左上角角标（不想要就留空字符串 ""）
    badge: "主打项目",

    // 演示图路径（把图片放进 assets/projects/ 后写文件名）
    // 还没有图就留空字符串 ""，页面会显示"演示图片待添加"
    image: "assets/projects/placeholder-demo.png",

    // 项目名称
    title: "ESP32-S3 光强闪烁检测仪（flash-test-1）",

    // 一句话简介
    intro: "基于 ESP32-S3 + OPT101 的低成本 LED 频闪检测设备，传感器采集 → FFT 分析 → 网页实时波形，软硬件全程自研。",

    // 技术栈标签（面试官一眼看会什么）
    tags: ["ESP32-S3", "OPT101", "ADC", "C/C++", "WiFi", "UDP", "WebSocket", "Canvas", "FFT"],

    // 背景 / 方案 / 成果 三段（成果一定要写数字）
    details: [
      { label: "背景", text: "市售频闪检测仪价格高、不便携，自制一款低成本手持设备。" },
      { label: "方案", text: "OPT101 采集光强 → ESP32 高精度 ADC 采样 → FFT 分析闪烁频率 → WiFi 网页（WebSocket + Canvas）实时显示波形与频谱。" },
      { label: "成果", text: "（替换成量化数据，如）采样率 20kHz，可检测 50Hz~10kHz 频闪，网页 30fps 实时刷新。" },
    ],

    // 源码 / 演示 链接（GitHub 仓库名不同就改这里）
    repoUrl: "https://github.com/XQZLN6/flash-test-1",
    repoText: "源码 ↗",
    demoUrl: "https://github.com/XQZLN6/flash-test-1",
    demoText: "演示视频（替换成链接）",
  },

  // ======================================================
  // ★ 加新项目：复制上面 {} 里的全部内容，粘贴到下面，
  //   末尾加英文逗号，然后改标题/简介/标签/详情/链接即可
  // ======================================================
  {
    badge: "",
    image: "",
    title: "项目名称 2",
    intro: "一句话介绍这个项目解决了什么问题、你做了什么。",
    tags: ["标签1", "标签2", "标签3"],
    details: [
      { label: "背景", text: "……" },
      { label: "方案", text: "……" },
      { label: "成果", text: "……" },
    ],
    repoUrl: "#",
    repoText: "源码 ↗",
    demoUrl: "#",
    demoText: "演示",
  },
];
