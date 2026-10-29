# Qwen-Image 与 Image-Edit 局部核查

核查日期：2026-10-28。本轮对照[初代技术报告](https://arxiv.org/html/2508.02324)第 2 节、表 1、第 4.3 节、表 11，以及[官方 Image-Edit 介绍](https://qwenlm.github.io/blog/qwen-image-edit/)和模型卡；这是对新增与涉及段落的核查，不代表两篇全文逐句审完。

- 文生图：表 1 给出 VAE 8× 空间压缩、16 通道和 MMDiT patch size 2；结合 [Diffusers 的打包实现](https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/qwenimage/pipeline_qwenimage.py)，新增 1024×1024 图像对应 128×128 潜网格、64×64 图像 token 的算例。报告第 2.4 节描述 MSRoPE 将文本位置沿对角线安排的目的。
- 编辑：报告第 4.3 节描述原图视觉语义与 VAE 潜表示两路条件、潜表示沿序列维拼接，以及额外的帧位置维度；官方博客也说明原图分别经过 Qwen2.5-VL 和 VAE。正文补充数据流。
- GEdit：报告表 11 注明 GPT-4.1 评分，综合分对每个样本的语义一致性与感知质量取几何平均后再取平均；正文新增计算示例。论文所列是多任务模型的报告成绩，本轮未运行或证明下载权重与该实验完全相同。
- 使用 Chromium 渲染查看 `public/figures/qwen-image/overview.svg` 与 `public/figures/qwen-image-edit/overview.svg`；两张图的主要输入和输出路径与上述资料相符，属于简化教学图，本轮未修改图片或注册。

本轮未重新阅读知乎文章、运行模型、对其他版本训练细节做独立核验，也未逐项审核原论文的全部实验。
