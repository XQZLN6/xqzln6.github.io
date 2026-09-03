/* ==========================================================
   项目数据文件 —— 加新项目 = 复制下面一个对象，改内容即可
   每个字段都有注释，照着填就行，不用懂 HTML
   ========================================================== */

const PROJECTS = [
  // ============ 项目 1：智能眼镜红外模块（1_红外遥控） ============
  {
    badge: "",
    title: "智能眼镜红外遥控模块",
    intro: "基于 ESP32-S3 的 RMT 库编写红外接收/发射模块，经透镜、滤光片与 3D 打印外壳改良，室内遥控距离达 10 米以上。",
    tags: ["ESP32-S3", "RMT", "红外通信", "C/C++", "光学改良", "3D 打印"],
    details: [
      { label: "背景", text: "为智能眼镜配套红外遥控功能，需在室内实现远距离稳定遥控。" },
      { label: "方案", text: "基于 ESP32-S3 的 RMT 库编写红外接收/发射模块；后经透镜、滤光片等改良光路，并用 3D 打印外壳进行拼装与固定。" },
      { label: "成果", text: "室内实现 5 米范围红外遥控，改良后发送距离达到 10 米以上。" },
    ],
    // 演示视频（点击播放，不预加载，不影响页面速度）
    video: "assets/projects/p1-remote.mp4",
    poster: "assets/projects/p1-board.jpg",
    // 附加展示图（可选，小图缩略显示）
    images: ["assets/projects/p1-improved.jpg"],
    repoUrl: "https://github.com/XQZLN6",
    repoText: "GitHub ↗",
  },

  // ============ 项目 2：光强闪烁检测仪（2_检测光频率闪烁） ============
  {
    badge: "",
    title: "脑机接口视觉刺激器光强闪烁检测仪",
    intro: "基于 ESP32-S3 + OPT101 的光强闪烁检测仪器：定时器中断 + ADC 高速采样，网页实时绘制采样曲线、FFT 频谱与时频图，用于脑机接口设备闪烁频率的高精度误差诊断。",
    tags: ["ESP32-S3", "OPT101", "ADC", "定时器中断", "WiFi", "WebSocket", "Canvas", "FFT", "时频图"],
    details: [
      { label: "背景", text: "脑机接口视觉刺激器需精确检测设备闪烁频率，作为误差诊断仪器之一。" },
      { label: "方案", text: "ESP32-S3 搭建 WiFi 热点，支持网页端配置连接外部 WiFi；OPT101 光电传感器 + 定时器中断 + ADC 采集数据；网页绘制 ADC 采样曲线、FFT 频谱图与时频图；支持反向发送命令，实现采样率与 FFT 绘制点数动态调节。" },
      { label: "成果", text: "实现高精度检测相关设备闪烁频率，作为误差诊断仪器投入使用。" },
    ],
    video: "assets/projects/p2-demo.mp4",
    poster: "assets/projects/p2-board.jpg",
    images: ["assets/projects/p2-fft.png"],
    repoUrl: "https://github.com/XQZLN6",
    repoText: "GitHub ↗",
  },

  // ============ 项目 3：数字电桥上位机（3_数字电桥上位机） ============
  {
    badge: "",
    title: "数字电桥上位机",
    intro: "基于 QtDesigner + VS Code 开发的数字电桥上位机，实时控制电桥参数与功能，支持波形显示与数据导出，提升工厂电极检测效率。",
    tags: ["Qt", "QtDesigner", "Python", "上位机", "波形显示", "数据导出"],
    details: [
      { label: "背景", text: "工厂检测相关电极时，需要更高效的参数控制与数据记录方式。" },
      { label: "方案", text: "通过 QtDesigner 绘制基础 UI 界面，在 VS Code 生成代码并完成相关槽函数代码编写，实现上位机实时控制数字电桥相关参数和功能。" },
      { label: "成果", text: "支持波形显示和数据导出，提升了工厂检测相关电极的效率。" },
    ],
    video: "assets/projects/p3-demo.mp4",
    poster: "",
    images: [],
    repoUrl: "https://github.com/XQZLN6",
    repoText: "GitHub ↗",
  },
];
