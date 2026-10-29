# DeepSeek-VL 初代独立复审（2026-10-29）

复读[正文](../../src/content/docs/omni/deepseek-vl-first-model.md)，核对 [DeepSeek-VL 论文 v2](https://arxiv.org/html/2403.05525v2)、[官方仓库](https://github.com/deepseek-ai/DeepSeek-VL)、图示登记及知乎文章。范围是初代 1.3B/7B，未实际运行模型或复现结果。

- **结构与模型卡**：论文 3.1 节与表 4 确认 7B 同时使用 SigLIP-L 的 384×384 输入及 SAM-B 的 1024×1024 输入，SAM 特征先经插值与两层 stride=2 卷积变为 24×24×1024，与 576×1024 的 SigLIP 特征沿通道拼接，得到 576×2048；1.3B 的视觉编码器是 SigLIP。语言骨干为 DeepSeek-LLM 中间检查点，项目仓库列出 1.3B、7B 的 Base/Chat 权重及 4096 序列长度。正文的示例与两个版本区分一致。
- **训练**：论文 3.2 节与图 3 核对三阶段：先冻结两侧只训适配器，再冻结视觉编码器训练适配器和语言模型，最后 SFT 中训练 SigLIP、适配器与语言模型，7B 的 SAM-B 冻结；第 1 阶段为 125 万图文描述与 250 万文档 OCR 配对。论文消融中的模态预热从纯文本逐步引入图文，目标语言比例 0.7，本轮在正文补充了这个过程；实验观察限定于论文设置。
- **评测**：逐项核对论文表 5、6、7 的 MMBench 开发集（7B 73.2、1.3B 64.6）、MMBench-CN 7B 72.8、OCRBench 7B 456/1.3B 409、7B Chat 的 HellaSwag 68.4 与 GSM8K 55.0，比较的 DeepSeek-LLM 7B Chat 分别为 68.5 和 63.0。论文第 4.1、4.2 节明确多模态评测为贪心生成解析，HellaSwag 与 MMLU 按候选困惑度评测。正文构造例子不冒充实测。
- **配图**：核读 [图集登记](../../src/content/data/figures.yaml)及 [SVG](../../public/figures/deepseek-vl-first/overview.svg)，图标明 7B、显示输入分叉、空间对齐与特征拼接、适配器及语言模型；1.3B 区别、尺寸、来源、CC BY 4.0 和替代文字均有登记。沿用[此前桌面正文页实际渲染检查](deepseek-vl-first-new-review-20261029.md)，该记录同时说明未单独做手机目视；本次检查 SVG 坐标与文字。
- **社区**：2026-10-29 使用已登录 Chrome 复读[深度眸文章](https://zhuanlan.zhihu.com/p/686852476)，显示 50 赞同、62 收藏。其对双路特征沿通道拼接和三阶段训练的概述与论文一致；其将第一阶段 ShareGPT4V 图文对写为 1.25 亿、称不损坏语言能力，论文分别为 125 万和 GSM8K 下降，正文采用原文数字与对照。

本轮使用已登录浏览器复读知乎正文；未重跑训练、模型推理或评测。
