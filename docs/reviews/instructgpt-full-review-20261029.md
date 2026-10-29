# InstructGPT 专项审校

审校日期：2026-10-29。完整通读 [InstructGPT 正文](../../src/content/docs/nlp/instructgpt-model.md)，范围为 2022 年论文及其 API 提示评估；未运行模型或复现评测。会议待办及答案排序均为教学构造。

- **结构**：对照[论文第 3.1、3.5 节](https://arxiv.org/html/2203.02155)，核对 GPT-3 自回归架构和 1.3B、6B、175B 策略，区分模型与后续 ChatGPT 产品；PPO 采用单轮提示与回答的 bandit 设置，外部工具并非论文环境的一部分。
- **训练**：论文第 3 节和附录 C 核对 SFT 约 13K、奖励模型约 33K、PPO 约 31K 训练提示，英文比例、10% 预训练数据混入 SFT 初始化和 PPO-ptx 梯度、参考策略 KL 惩罚及 PPO 更新。补充每个提示 4–9 个候选、并列比较丢弃、成对比较的示例；论文的统一 6B 奖励和价值模型职责及初始化不等同策略模型大小。
- **评测**：论文图 1、第 4 节核对 175B InstructGPT 相对 GPT-3 和 few-shot GPT-3 的 85±3%、71±4% 人类偏好以及 95% 置信区间；1.3B 偏好结果不推广为所有任务，PPO-ptx 仍有公开任务退化，偏见基准未显著改善。
- **配图**：检查[图片登记](../../src/content/data/figures.yaml)与[原创教学图](../../public/figures/instructgpt/overview.svg)：示范 SFT、排序训练奖励模型、PPO 使用奖励与参考模型 KL 的流程符合论文简化范围；图注明非官方与 CC BY 4.0。Chromium 本地正文滚动加载、图片解码成功且有替代文本，截图检查中文和箭头。
- **社区**：沿用[2026-10-28 实读记录](instructgpt-independent.md)，小神弟弟的 [RLHF 场景下的 PPO 算法](https://zhuanlan.zhihu.com/p/631338315)当时 445 赞、980 收藏，讨论优势估计、PPO 及预训练混合；具体 PPO-ptx 与 KL 设定对照论文第 3.5 节及附录 C，文章个人代码实现不能直接当成论文实现。本次未重读或更新互动量。
