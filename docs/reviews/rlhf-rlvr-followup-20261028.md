# RLHF 与 RLVR 补充核查

核对日期：2026-10-28。范围是两篇方法页的本轮新增示例与两张现有教学图；未训练模型、复现论文指标，也未重新阅读知乎文章。

- **RLHF 数据与评测**：对照 [InstructGPT 论文 §3.2](https://arxiv.org/html/2203.02155) 核实 SFT、奖励模型、PPO 分别使用约 1.3 万、3.3 万、3.1 万条训练提示，API 提示按用户 ID 划分；§4.1 报告 175B InstructGPT 与 GPT-3 的偏好比较为 85% ± 3%，相对 few-shot GPT-3 为 71% ± 4%。这些数字是论文所用提示和评审条件下的偏好结果，不是事实准确率。方法页已链接对应 InstructGPT 模型页。
- **RLVR 案例**：对照 [DeepSeek-R1 v1 §2.2、§3](https://arxiv.org/html/2501.12948v1) 核实 R1-Zero 使用规则正确性与格式奖励、GRPO，以及 AIME 2024 的 15.6% → 71.0% 估计 pass@1 与 86.7% 的 cons@64。论文用温度 0.6、top-p 0.95 和多次采样估计 pass@1，不能把 64 次多数投票写成一次作答成功率。
- **教学算例**：`1、0、1、0` 的均值为 0.5，与均值之差分别是正负 0.5；正文不把这个差值直接当作经过标准差归一化的完整优势，也未宣称同分组的其他损失项必然为零。
- **图示**：使用 Chromium 渲染检查 `public/figures/training/rlhf-pipeline.svg` 与 `public/figures/training/feedback-grpo.svg`；前者标明 InstructGPT 的 PPO 路线，后者区分奖励来源与 GRPO 更新。
- **社区参考**：此前 [训练方法知乎参考](training-community.md) 对 GRPO 中文资料有实读和赞藏快照，可辅助理解组内比较；该记录不是对 RLHF 或 RLVR 全部事实的独立验证。本轮新增的实验信息以原论文为依据。
