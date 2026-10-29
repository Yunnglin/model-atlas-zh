# 视觉生成模型配图核查（2026-10-29）

范围为 DiT、Stable Diffusion v1、Qwen-Image 初代、Qwen-Image-Edit 初代和 Qwen-Image-Layered 的教学配图；对照各自正文与一手资料核对主要流程，不代表逐层结构或其他版本已经核查。

- **DiT**：依据[论文第 3 节](https://arxiv.org/html/2212.09748)，原始图画类别条件下的潜空间生成：分块、时间和类别条件、采样更新、循环及最后解码；图区分了推理与训练时的真实图片编码。
- **Stable Diffusion v1**：依据 [v1-4 模型卡](https://huggingface.co/CompVis/stable-diffusion-v1-4)，图示 CLIP 文本条件、潜噪声、U-Net 迭代及 VAE 解码；只对应 v1 文生图，不作为所有后续版本的完整架构图。
- **Qwen-Image 初代**：依据[技术报告第 2、4 节](https://arxiv.org/html/2508.02324)，图中的 Qwen2.5-VL 条件编码、MMDiT、流匹配与 VAE 解码对应文本生成路径。原图虽写“反复更新”，却未画返回生成器的连线，易误读成只调用一次；现补上采样器返回 MMDiT 的箭头，并注明完成采样后才解码。图仍省略时间步、层内结构和调度器细节。
- **Qwen-Image-Edit 初代**：依据[官方博客](https://qwenlm.github.io/blog/qwen-image-edit/)，核对原图送入 Qwen2.5-VL 与 VAE 编码器的两条路径；文本和噪声也被示意。图片没有保证未编辑区域像素不变。
- **Qwen-Image-Layered**：依据[论文第 3 节和图 4](https://arxiv.org/html/2512.15603)，核对 RGB 和 RGBA 共享编码空间、VLD-MMDiT 及 RGBA 图层解码；图是推理过程简化，不将训练时的目标图层当成推理输入。

本次用浏览器从当前工作区的本地开发服务检查 Qwen-Image 修改后的图：反馈箭头、标签与下方说明可辨。没有运行模型或复现采样结果。
