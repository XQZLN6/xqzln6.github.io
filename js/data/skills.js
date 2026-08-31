/* ==========================================================
   技能数据文件 —— 按分类列，加一行 = 加一条技能
   ========================================================== */

const SKILLS = [
  {
    category: "编程语言",
    items: [
      "C 语言（指针、结构体、中断、寄存器操作）",
      "Python",
      "PyQt 上位机开发",
    ],
  },
  {
    category: "单片机与嵌入式",
    items: [
      "C51 / STM32 / ESP32",
      "定时器中断、ADC 采样、PWM、编码器",
      "RMT 红外收发、蓝牙无线控制",
      "FreeRTOS（任务/调度/消息队列/信号量/任务通知）",
      "PID 控制、MPU6050 姿态解算",
    ],
  },
  {
    category: "通信与接口",
    items: [
      "I2C / SPI / UART / CAN",
      "WiFi（热点 / Station）",
      "TCP / UDP",
    ],
  },
  {
    category: "工具",
    items: [
      "VS Code（AI 辅助编程）/ Keil / STM32CubeMX / Proteus",
      "QtDesigner",
      "嘉立创 EDA（PCB 绘制）",
      "Git / GitHub",
      "逻辑分析仪 / 万用表（硬件调试）",
    ],
  },
];
