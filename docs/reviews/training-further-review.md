# 训练技术补充与模型事实复核

核对日期：2026-10-28。本文记录本轮的阅读与修改范围，不代表重新训练模型或完整复现论文。

- [训练全流程](../../src/content/docs/training/pipeline.md)：补充按学习信号、策略优化、参数更新和压缩目的组织的比较表，区分可以组合的方法，并链接到各自文章。
- [量化](../../src/content/docs/training/quantization.md)：依据 [PyTorch QAT 说明](https://pytorch.org/blog/quantization-aware-training/)与[量化实践](https://pytorch.org/blog/quantization-in-practice/)，补充假量化、直通估计和部署格式的条件；区分 QAT 与 QLoRA。
- [蒸馏](../../src/content/docs/training/distillation.md)：依据[经典蒸馏论文](https://arxiv.org/abs/1503.02531)，补充软硬目标、温度和梯度尺度；不能把该写法推广为所有蒸馏方法的统一公式。
- [GRPO](../../src/content/docs/training/grpo.md)、[GSPO](../../src/content/docs/training/gspo.md)、[RLOO](../../src/content/docs/training/rloo.md)：分别对照 [DeepSeekMath](https://arxiv.org/abs/2402.03300)、[GSPO](https://arxiv.org/abs/2507.18071) 和 [RLOO](https://arxiv.org/abs/2402.14740)，补充稀疏奖励、序列比率与留一基线的教学算例；实现和评测条件可能不同。
- [Qwen3-ForcedAligner](../../src/content/docs/audio/qwen3-forcedaligner-model.md)：[技术报告表 9](https://arxiv.org/html/2601.21337v1#S4.T9)的人工标注部分没有列出 MFA 自身结果，删去无法由该表证明的比较推断。Qwen3 文本和多模态重排文章的主要评测数值及三篇配图已与论文和模型卡核对。

知乎参考及互动数据的查看时间、适用范围和错误提示分别见[训练社区参考](training-community.md)和[用户推荐文章记录](zhihu-reading.md)。用户推荐文章由机构账号发布，署名 leon jia；同账号其他作者的文章不能视为他的作品。
