# 训练技术细节审校

核对日期：2026-10-28。以文章中涉及的论文原文为依据，检查公式、适用前提和教学算例；这不是对训练效果的独立复现，也不代表对所有训练技术逐句完成审校。

- [DAPO](../../src/content/docs/training/dapo.md)：对照[论文](https://arxiv.org/html/2503.14476)第 2.3–3.4 节，明确论文目标是在同一题组内按 token 总数归一化，再对题组取期望；区分教学用的 1／0 与论文基础正确性奖励的 +1／−1，补充非对称裁剪算例。
- [DPO](../../src/content/docs/training/dpo.md)、[RLHF](../../src/content/docs/training/rlhf.md)：对照 [DPO](https://arxiv.org/abs/2305.18290) 与 [InstructGPT](https://arxiv.org/abs/2203.02155)，补充概率比算例，明确单样本对数比与平均 KL 的区别。
- [蒸馏](../../src/content/docs/training/distillation.md)、[量化](../../src/content/docs/training/quantization.md)：对照 [MiniLLM](https://arxiv.org/abs/2306.08543)、[GPTQ](https://arxiv.org/abs/2210.17323)、[AWQ](https://arxiv.org/abs/2306.00978) 和 [QLoRA](https://arxiv.org/abs/2305.14314)，补充温度、KL、舍入和裁剪算例，区分 4 位存储与计算精度。
- [PPO](../../src/content/docs/training/ppo.md)、[GRPO](../../src/content/docs/training/grpo.md)、[RLOO](../../src/content/docs/training/rloo.md)、[LoRA](../../src/content/docs/training/lora.md) 和 [SFT](../../src/content/docs/training/sft.md)：对照相关论文检查关键公式和条件，本轮未发现需要修正的确定性公式错误。
- [训练全流程](../../src/content/docs/training/pipeline.md)：补充同一题目在 SFT、可验证奖励和 LoRA 中分别扮演的角色；例子为教学构造。
