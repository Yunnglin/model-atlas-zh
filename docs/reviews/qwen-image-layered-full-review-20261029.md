# Qwen-Image-Layered 专项审校

审校日期：2026-10-29。通读[正文](../../src/content/docs/cv/qwen-image-layered-model.md)，范围为 2025 年公开的图像分层模型；未运行生成或复现训练评测。海报和颜色计算是教学示例。

- **结构**：对照[论文第 3.1–3.2 节和图 4](https://arxiv.org/html/2512.15603v1)，核对共享 RGBA-VAE、VLD-MMDiT 的多图层联合注意力、Layer3D RoPE 的参考图 −1 和生成层 0 起始、从噪声生成及外部图层编辑。本次补充 VAE 将首末卷积通道从三扩到四、RGB 图片补全不透明 Alpha 与联合训练；没有声称恢复隐藏区域的真实内容。[模型卡](https://huggingface.co/Qwen/Qwen-Image-Layered)许可为 Apache-2.0。
- **训练**：论文第 3.3、4.1–4.2 节核对 PSD 提取、清洗与不相交层合并、生成文字描述、RGB/RGBA 到多层再到输入图分解的三阶段，分别 500K/400K/400K 步、Adam 1e-5、最多 20 层。具体输入和输出以及文本控制边界参照[官方仓库](https://github.com/QwenLM/Qwen-Image-Layered)。
- **评测**：论文第 4.3.1 节和表 1 核对无合并时 RGB L1 0.0594/0.0709、Alpha soft IoU 0.8705/0.7520，以及真实 Alpha 加权、按顺序对齐与合并相邻层。补充对齐案例和实际编辑能力的区别；论文在 Crello 训练集上微调，不能把表中数字作为公开权重的零样本指标。AIM-500 重建指标只评价 RGBA-VAE。
- **配图**：核对[图示登记](../../src/content/data/figures.yaml)、[原创流程图](../../public/figures/qwen-image-layered/overview.svg)和[论文图 4](../../public/figures/qwen-image-layered/official-figure4.png)，分别标明教学简化/官方原图、出处和 CC BY 4.0；解读区别训练目标与推理噪声。Chromium 本地页面滚动加载两张图片，分别为 1200×430 和 1987×945，替代文本存在；截图检查流程与原图位置。
- **社区**：2026-10-29 主审通过已登录 Chrome 实读[千问大模型官方介绍](https://zhuanlan.zhihu.com/p/1986442570289682014)，当时 74 赞同、110 收藏。文章介绍 RGB 图拆为 RGBA 图层、共享潜空间的 RGBA-VAE、可变层数与移动、修改和递归分解示例；对照论文第 3 节与官方仓库说明，相关结构和用途一致。该介绍来自项目方，示例不能证明所有遮挡场景都能准确拆分；赞藏是阅读时快照。
- **补充核对**：对照论文第 3.1 节，正文补充新 Alpha 通道的编码器、解码器权重初始化和解码器偏置，解释如何保留 RGB 初始化行为。没有运行权重或复现结果。
