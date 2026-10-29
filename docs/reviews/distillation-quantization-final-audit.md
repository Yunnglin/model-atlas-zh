# 蒸馏与量化内容复核

核对日期：2026-10-28。复核两篇文章中所列的方法分工、主要公式、算例、实践对照与部署边界；没有训练模型、转换权重或复现实验。

- [知识蒸馏](../../src/content/docs/training/distillation.md)：对照[经典蒸馏论文](https://arxiv.org/abs/1503.02531)核查温度与软硬标签；对照 [GKD](https://arxiv.org/html/2306.13649) 的学生采样／混合数据和 [MiniLLM](https://arxiv.org/html/2306.08543) 的反向 KL 及优化技巧。两个 KL 数字按自然对数分别约为 0.226 和 0.311。补充反向 KL 可能遗漏教师其他合理答案、直接优化可能生成重复或过短内容，以及论文提出的稳定化方法。收紧测试集污染表述：教师数据未公开时不能保证已经排除所有潜在泄漏。
- [量化](../../src/content/docs/training/quantization.md)：对照 [GPTQ](https://arxiv.org/abs/2210.17323)、[AWQ](https://arxiv.org/html/2306.00978)、[QLoRA](https://arxiv.org/abs/2305.14314)、[SmoothQuant](https://arxiv.org/abs/2211.10438)、[LLM.int8()](https://arxiv.org/abs/2208.07339) 和 [PyTorch QAT 说明](https://pytorch.org/blog/quantization-aware-training/)核查不同方法、STE、NF4 和权重／激活精度。整数范围和缩放算例中 0.31 映射为 0.30、0.76 被裁至 0.70；这些例子不指代某种实际格式。修正 QAT 的选择流程：用开发集选择，独立测试集只在方案选定后验收；反复使用测试结果调参会使测试集失去独立性。
- 两篇社区参考既有审查记录见[训练社区资料](training-community.md)；本次未重访知乎正文或互动数量。两篇插图属于原创教学示意，算例与正文对应，并非官方结构图。
