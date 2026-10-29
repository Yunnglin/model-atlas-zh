---
title: MiniMax M 系列
atlas:
  id: minimax-family
  kind: model
  modality: nlp
  year: 2025
  featured: false
  aliases: []
  purpose: 梳理 MiniMax 开放模型演进
  summary: 从 M2 到 M3.1 Flash 查看模型与官方资料。
  question: 从代码模型到视觉语言模型，版本与模态怎样对应？
  sources:
    - minimax-m2-release
    - minimax-m21-release
    - minimax-m25-release
    - minimax-m27-card
    - minimax-m3-release
    - minimax-m31-release
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 先看主要版本

MiniMax M 系列涵盖面向代码与工具的语言模型，也包含支持图像和视频输入的后续模型。每个版本的开放权重、输入输出和上下文能力要以具体模型卡为准；能理解图片不等于能输出图片或音频。

| 版本       | 官方资料                                                 |
| ---------- | -------------------------------------------------------- |
| M2         | [发布说明](https://www.minimax.io/news/minimax-m2)       |
| M2.1       | [发布说明](https://www.minimax.io/blog/minimax-m21)      |
| M2.5       | [发布说明](https://www.minimax.io/blog/minimax-m25)      |
| M2.7       | [模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)  |
| M3         | [发布说明](https://www.minimax.io/blog/minimax-m3)       |
| M3.1 Flash | [官方研究博客](https://www.minimax.io/blog/minimax-m31f) |

阅读报告时，要区分模型权重、API 服务和产品应用。工具调用由外部系统执行，模型声称测试通过与真实工具返回结果不同。比较代码或多模态成绩时，应固定数据集版本、提示、工具和计算预算。

目前这一页提供系列资料入口，各型号独立结构图、训练细节与评测正在继续补充。

## 参考资料

- [MiniMax M2 官方发布](https://www.minimax.io/news/minimax-m2)
- [MiniMax M2.1 官方发布](https://www.minimax.io/blog/minimax-m21)
- [MiniMax M2.5 官方发布](https://www.minimax.io/blog/minimax-m25)
- [MiniMax M2.7 官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)
- [MiniMax M3 官方发布](https://www.minimax.io/blog/minimax-m3)
- [MiniMax 官方研究博客](https://www.minimax.io/blog/minimax-m31f)
