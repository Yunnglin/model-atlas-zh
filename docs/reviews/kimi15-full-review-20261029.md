# Kimi k1.5 专项审校

审校日期：2026-10-29。通读 [k1.5 正文](../../src/content/docs/nlp/kimi.md)，重点核对技术报告公开的训练和评测；未运行模型或复现结果。

- **结构**：对照[技术报告第 2.5 节](https://arxiv.org/html/2501.12599)，核对文本与视觉联合输入、Transformer decoder 变体及输出，报告没有提供完整层数或参数；不把 K2 的 MoE 参数套用于 k1.5。图表推理案例为教学构造。
- **训练**：对照报告第 2.2–2.6 节核对长 CoT SFT 的 32K、128K 各一个 epoch、答案验证和策略更新、128K RL 上下文、partial rollout 分段续写及旧段可排除损失；long2short 的模型合并、短解拒绝采样、DPO、长度惩罚 RL 为不同实验方法。1,000+600 token 是说明性调度算例。
- **评测**：对照报告表 2 和第 3.4 节核对 long-CoT AIME 2024 77.5、MATH 500 96.2、MathVista 74.9，及 short-CoT RL 的 AIME 60.8。补充短模型 8 次运行 Pass@1 平均与平均 3272 token；训练设置、基准、预算与业务样本不能混用。
- **配图**：对照[图示登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/kimi15/overview.svg)，模型生成、训练时验证及策略更新的方向与简化范围一致，图内注明训练与推理区别，来源及 CC BY 4.0 已登记。Chromium 本地页面滚动加载后确认图片解码、替代文本存在，截图检查中文和箭头。
- **社区**：沿用[2026-10-28 实读记录](remaining-community-3.md)，tomsheep 的 [k1.5 论文解读](https://zhuanlan.zhihu.com/p/19612718816)当时 91 赞、105 收藏；文章讨论长上下文与 long2short，其把 partial rollout 每段独立计奖的说法与报告第 2.6.2 节不一致，正文按原报告解释跨迭代续写与损失。本次未重读或更新互动量。

## 评测数字复核（2026-10-29）

- 对照 [Kimi k1.5 报告表 2 与 §3.4](https://arxiv.org/html/2501.12599)：long-CoT 的 AIME 2024 Pass@1 77.5、MATH-500 96.2、MathVista-Test 74.9，分别对应数学和视觉评测；Codeforces 94 是百分位。
- short-CoT RL 版本的 AIME 2024 Pass@1 60.8 是 8 次平均，平均生成 3,272 token。正文区分长短推理及指标；以上数值未发现需改动。
