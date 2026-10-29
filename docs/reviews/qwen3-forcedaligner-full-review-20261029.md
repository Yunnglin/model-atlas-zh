# Qwen3-ForcedAligner 专项审校

审校日期：2026-10-29。完整通读 [ForcedAligner 正文](../../src/content/docs/audio/qwen3-forcedaligner-model.md)，以技术报告 v1 为准；未运行模型或复现对齐评测。

- **结构**：对照[技术报告第 3 节](https://arxiv.org/html/2601.21337v1)和[模型卡](https://huggingface.co/Qwen/Qwen3-ForcedAligner-0.6B)，核对 AuT 音频编码器、Qwen3-0.6B、时间槽分类、80 ms 时间编号、报告所述 3750 类与 300 秒；公开配置列出 5000 个分类输出，见[后续对照](forcedaligner-community-config-check-20261029.md)；并行预测槽位不意味着双向注意力或先识别文字。
- **训练**：报告第 3.3 节核对 MFA 伪时间戳、因果训练且输出标签不右移、仅对槽位计算交叉熵、随机插入槽位；人工边界和机器伪标签的评测分别解释，不推断未公开训练数据配比。
- **评测**：报告第 4.6 节表 9 核对人工标注 Raw、Raw-Noisy 与 Concat-300s 的模型对照；核对人工标注 Concat-300s 的 AAS：ForcedAligner 24.8 毫秒、Monotonic-Aligner 410.8 毫秒、NFA 140.0 毫秒；这是按报告协议拼接的长音频测试。按报告指标口径给出的加权算例为教学构造，AAS 不等于识别正确率或最大偏差。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)、[原创教学图](../../public/figures/qwen3-forcedaligner/overview.svg)和[官方论文图 3](../../public/figures/qwen-asr/alignment.png)，音频、已知文字、时间槽、分类与训练损失方向一致；两图来源、替代文本与 CC BY 4.0 已登记。Chromium 本地页面滚动后两图解码成功，截图检查中文及官方图布局。
- **社区**：沿用[2026-10-28 实读记录](qwen3-forcedaligner-community-20261028.md)，千问大模型的[开源介绍](https://zhuanlan.zhihu.com/p/2000326281414333812)当时 51 赞、80 收藏，讨论 11 种语言、5 分钟与非自回归预测；它是发布方资料而非独立评测，具体结构和实验对照报告。另有 [2个ppw 代码阅读](qwen-aligner-aas-community-20261028.md)重点在 ASR，采样数换算有笔误，不用于断言对齐器指标。本次未重读或更新互动量。
