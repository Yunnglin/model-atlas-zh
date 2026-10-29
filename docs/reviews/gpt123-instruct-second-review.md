# GPT 初代、GPT-3 与 InstructGPT 独立审校

本文作者未参与上述三篇文章初稿。核查范围为论文结构、训练、评测数字及原创示意图；未运行模型、复现评测或做实际渲染验收。

- **GPT 初代**：[原始论文](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)第 4 节确认 12 层、768 隐藏维度、12 头、3072 前馈维度，以及 512 token、64 序列批次和 100 个 epoch；论文摘要与[官方发布表](https://openai.com/index/language-unsupervised/)核对 12 项中 9 项优于当时对照、MNLI 82.1 对 80.6、RACE 59.0 对 53.3、RTE 56.0 对 61.7、MRPC F1 82.3 对 86.0。示意图区分预训练和任务监督微调，没有把推理时 few-shot 当作微调。
- **GPT-3**：[原论文](https://arxiv.org/abs/2005.14165)表 2.1、2.2 确认 175B 结构、每个规模 300B 训练 token、语料采样权重与上下文；表 3.3 和附录 H.1 显示 TriviaQA 64.3/68.0/71.2 的开发集行，正文另标注 few-shot 测试服务器 71.2；表 3.6/附录 H.1 核对 ARC Challenge 测试 51.4/53.2/51.5。第 4 节确有污染去重失误及后续分析。原创图明确示例不更新参数。
- **InstructGPT**：[原论文](https://arxiv.org/abs/2203.02155)第 3 节和附录 C.3 确认约 13k/33k/31k 分别为 SFT、RM、PPO 训练提示数量；第三阶段 31k 不等于训练 episode 数。附录 C.3 还说明用于初始化 PPO 的 SFT 微调混入 10% 预训练数据，现已补充正文并明确与 PPO-ptx 的混入发生在不同阶段。原论文 85±3%、71±4% 比较和图 1 的 175B SFT 参照在正文准确区分；论文的英文比例对应整个论文数据集，已修正文案不将其限定为训练子集。
- **图和展示**：三张 SVG 的标题、阶段及数据作用与原论文的高层流程相符；属于教学示意，省略训练细节。InstructGPT 图已在共享图示元数据和该模型指南登记，独立正文与交互阅读器均使用登记的数据；已删除正文中重复的绝对路径 Markdown 图，以避免独立页面重复。项目的 remark 链接转换会给 Markdown 本地资源补充部署子路径，因此不能将原 Markdown 图片判定为子路径失效。未修改共享台账。
