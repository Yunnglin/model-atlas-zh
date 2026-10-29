# Swin 与 SAM 重点核查（2026-10-28）

## Swin

对照 [Swin 原论文](https://arxiv.org/html/2103.14030)：第 3 节与附录 A1 核对了 Swin-T 的 patch 大小、四阶段块数、窗口与合并过程；第 4.1 节核对 ImageNet-1K 的 300 轮训练设置，以及 ImageNet-22K 预训练的 Swin-L 在 384 输入上的 87.3% top-1。文章新增了实际配置和两个注意力位置对数量的算例。教学图已在 Chromium 渲染检查，绿色窗口边界和合并流程与文字描述一致，边缘掩码在图注说明未展开。

## SAM

对照 [SAM 论文](https://arxiv.org/html/2304.02643)附录 B：1024 输入、64 × 64 × 256 图像表示、密集掩码提示的逐元素相加及交互式点采样流程。文章补充了这些过程，并区分点、框与前一轮掩码的作用。

本地图 `public/figures/sam/model_diagram.png` 与 [官方仓库原图](https://raw.githubusercontent.com/facebookresearch/segment-anything/main/assets/model_diagram.png)逐字节一致，SHA-256 为 `80f88ccc64fdefc08b28682661b41832e25e4c1612e7e430dc30ed551ee51d86`。原图的文字提示属于论文讨论分支，常用公开预测接口仍需按实际能力理解。

本次覆盖以上指定段落、图示与原图一致性，未逐句审查全部两篇内容，未重新实读知乎、运行模型或复现评测。
