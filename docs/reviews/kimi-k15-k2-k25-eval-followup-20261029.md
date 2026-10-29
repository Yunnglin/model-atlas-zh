# Kimi K1.5、K2、K2.5 训练与评测专项复核（2026-10-29）

- K1.5：对照[论文 2、3.4 节](https://arxiv.org/html/2501.12599)，核对 partial rollout、long2short 及 short-CoT RL 的 AIME 2024 60.8、八次运行平均和约 3272 token。它们对应报告中的特定设置，不代表所有 Kimi 版本。
- K2：对照[论文表 1、3](https://arxiv.org/html/2507.20534)，核对三种知识重写实验的 SimpleQA 23.76/27.39/28.94，Instruct 的 AIME 2025 Avg@64 49.5，以及 SWE-bench Verified 的三种任务预算；单次补丁、单次智能体尝试和多次尝试不可等同。
- K2.5：对照[论文 3 节与表 4](https://arxiv.org/html/2602.02276)，核对 PARL 的结果与两种辅助奖励、BrowseComp 不同配置及 MMMU-Pro；原“关键步骤”说明未明确主智能体动作也计入每个阶段，正文补足该项并增加 7 步的教学算例。该算例并非论文测量数据，步骤不等于实际秒数。

本次仅覆盖上述内容；未运行模型、复现评测或重新实读知乎，社区交叉核查沿用既有专项记录。
