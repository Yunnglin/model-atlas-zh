# Qwen 配图交叉核查（2026-10-29）

本次检查 Qwen2.5-VL、Qwen3-VL 的教学图，以及 Qwen3-Next 和 Qwen3-Coder-Next 共用的混合层教学图；不代表逐张检查所有 Qwen 配图。

- **Qwen2.5-VL**：对照[技术报告 2.1 和表 1](https://arxiv.org/html/2502.13923v1#S2)，确认尺寸为 28 的倍数、14×14 图像块、视觉编码后相邻四块拼接并经 MLP 映射的路径；840×560 对应 2,400 块和 600 个视觉 token。图中为教学构造，未运行发票识别。
- **Qwen3-VL**：对照[技术报告 2.2](https://arxiv.org/html/2511.21631v1#S2)，确认视觉编码的三个层级经专用融合器后加到语言模型前三层。简图虚线表示这一跨层路径，图注明省略各融合器，不是逐层结构图。
- **Qwen3-Next / Qwen3-Coder-Next**：核对两份[Next 配置](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct/raw/main/config.json)与 [Coder-Next 配置](https://huggingface.co/Qwen/Qwen3-Coder-Next/raw/main/config.json)：均为 48 层、全注意力间隔 4、每层 MoE。示意图此前在四个块之间缺少箭头，读者难以看出先后关系；本次补上箭头，未改变技术结构。复用说明明确层布局相同不代表配置或权重完全一致；例如两份配置的 `rope_theta` 不同。

本次通过 Chromium 打开 SVG 检查箭头位置和文字；并运行图片连线及内容一致性测试。没有实际执行模型或验证推理速度。
