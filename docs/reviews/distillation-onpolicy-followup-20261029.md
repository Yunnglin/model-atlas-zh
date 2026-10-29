# 知识蒸馏训练信号与算例复核（2026-10-29）

- 范围：核对 [知识蒸馏正文](../../src/content/docs/training/distillation.md)中软标签、序列蒸馏、GKD、MiniLLM、DeepSeek-R1 与 Qwen3 案例；未执行训练或复现评测。本次未重新实读知乎材料，沿用已有社区审校记录。
- 对照 [GKD 第 3 节](https://arxiv.org/html/2306.13649)：学生生成或固定数据可混合，比较 token 级分布时不对离散采样过程反向传播；多种分布差异均可选。对照 [MiniLLM 第 2 节](https://arxiv.org/html/2306.08543)：其目标是序列级反向 KL，通过策略梯度处理采样，并使用教师混合采样和长度归一化。正文增加两者训练过程的区分。
- 复算教师分布 `(0.9, 0.1)` 和学生分布 `(0.6, 0.4)`：自然对数下正向 KL 为 0.226289，反向 KL 为 0.311239，与正文四舍五入值一致。
- 对照 [DeepSeek-R1 初版第 2.4 节及表 5](https://arxiv.org/html/2501.12948v1)：7B 学生基座为 Qwen2.5-Math-7B；AIME 2024 pass@1 为 55.5，cons@64 为 83.3，MATH-500 pass@1 为 92.8。对照 [Qwen3 报告第 4.5 节及表 21](https://arxiv.org/html/2505.09388)：两阶段的信号来源、8B 对比的 AIME 2024 结果及 GPU 小时与正文一致，成本不包含前置教师和离线蒸馏准备。
- 验证：正文和记录经过 Prettier；`tests/unit/content.test.ts` 七项通过；`git diff --check` 通过。
