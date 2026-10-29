# Kimi 与视觉模型：正文和审校证据抽查（2026-10-29）

本次抽查 Kimi-Audio、Kimi K2、Kimi K2.7 Code、ViT 与 LLaVA 的当前正文及其台账证据。检查的是这些具体点是否有对应证据，不代表再次逐项核对所有 Kimi、MiniMax、音频和视觉模型的全部事实。

- **Kimi-Audio**：正文引用 AmphionASR 的中文 wEar 与英文 WTIMIT 耳语结果，原完整审校记录没有写出这两项数值。本次读取第三方报告 PDF 表 15，核对模型、数据集、CER／WER 与 1.48／10.95；已把来源、PDF 哈希和未复现边界补入 [Kimi-Audio 审校](kimi-audio-full-review-20261029.md)。
- **Kimi K2**：正文的三种知识改写 SimpleQA 结果及 SWE-bench 三种工具预算，对应 [Kimi K2 完整复核](kimi-k2-full-review-20261029.md)和[后续复核](kimi-k15-k2-k25-eval-followup-20261029.md)，记录区分原始 Instruct 与 Thinking。记录用斜线列数字，未逐个重复百分号；不能机械地把百分号缺失当作缺少证据。
- **Kimi K2.7 Code**：正文的 62.0 对 50.9 换算为 11.1 个百分点、约 21.8% 相对增长；17 个场景及 610 个检查点在 [专项审校](kimi-k27-full-review-20261029.md)列出，报告范围是官方内部基准，未复现实验。
- **ViT**：正文 77.91、83.97、84.15 的训练数据和分辨率条件，以及 90/100 的构造示例，在 [ViT 审校](vit-full-review-20261029.md)中分别有来源和说明。
- **LLaVA**：正文的 COCO 85.1 是相对评分、15/20 是教学算例，在 [初版复核](llava-full-review-20261029.md)中明确区别；没有将其当作事实准确率。

本次只对 AmphionASR 的新增证据重新阅读原报告，其余为正文和既有审校记录的一致性抽查；未重新实读所有社区文章、逐张目视配图或运行模型。
