# Qwen2-Math 专项审校

审校日期：2026-10-29。完整通读 [Qwen2-Math 正文](../../src/content/docs/nlp/qwen2-math-model.md)，范围为 2024 年初代系列；未运行模型或复现评测。

- **结构**：对照[官方发布说明](https://qwenlm.github.io/blog/qwen2-math/)及 [7B Instruct 配置](https://huggingface.co/Qwen/Qwen2-Math-7B-Instruct/blob/main/config.json)，核对 Qwen2 底座、28 层、28 查询头与 4 KV 头、Base 和 Instruct 区别。折扣与奇偶性反例为教学说明，反例只否定中间论断。
- **训练**：官方说明核对数学语料继续预训练、基于 72B 的数学奖励模型、与二元正确性信号结合进行拒绝采样和 GRPO。补充其针对 GSM8K、MATH 等基准的去污染措施及局限；不把材料审查建议当成公开配方。
- **评测**：核对 Base 少样本思维链、Instruct 大多数零样本和多选 5-shot，以及 greedy、Maj@8、RM@8 的计算成本和角色；2026-10-29 对照[官方 Instruct 原表](https://qianwen-res.oss-cn-beijing.aliyuncs.com/assets/blog/qwen2-math/Instruct-Table1.png)核对 7B Instruct 的 GSM8K／MATH：greedy 89.9／75.1，Maj@8 93.1／80.2，RM@8 95.1／83.3；核实 72B 的 MATH 上 RM@8 86.7 低于 Maj@8 86.8，避免写成逐列必然胜出；讨论答案等价、抽取和独立测试时不声称模型实测。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/qwen2-math/training.svg)，以箭头区分 Qwen2、数学继续预训练、Base、SFT/GRPO 与奖励信号；非官方图、依据和 CC BY 4.0 已登记。Chromium 打开本地正文，滚动加载并解码图片，替代文本存在，截图检查中文和箭头。
- **社区交叉核对**：2026-10-29 由主审通过已登录 Chrome 实读团队成员[林俊旸的介绍](https://www.zhihu.com/question/663792331/answer/3588528474)，当时有 230 赞同、102 收藏。回答介绍从 Qwen2 出发继续预训练、数学数据、利用奖励模型筛选数据后进行 SFT 和 GRPO，以及首版主要支持英语、提供 1.5B、7B 和 72B 三种规模；这些观点与官方发布说明一致。答主是项目相关方，不能把其介绍当成独立评估；具体评测数字以官方表格为准。赞同和收藏数是阅读时快照。
