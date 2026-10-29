# DeepSeek-Coder、Coder-V2 和 DeepSeekMath 审校

核对日期：2026-10-28。检查三篇模型卡与正文的架构、数据、FIM、后训练和引用的评测结果，以及原创示意 SVG。审阅者此前审阅过 GRPO 等训练知识，并曾核对 DeepSeekMath 论文相关算法；因此涉及 GRPO 的部分不是完全独立的复核。无法据此断言此前从未参与过各模型正文的其他工作。

## 发现与修正

- [Coder-V2 论文 §3.1、§3.5](https://arxiv.org/html/2406.11931)明确：16B 在继续预训练中结合下一 token 预测和 50% PSM FIM，236B 的预训练只使用下一 token 预测；16B 的指令微调也加入 FIM。原文只笼统说 16B 有 FIM，已补足阶段和大模型的差别，避免将两者配方混同。

## 逐篇核对

- [DeepSeek-Coder](https://arxiv.org/html/2401.14196)：从头训练 2T token，87% 源代码、10% 代码相关英文、3% 中文；PSM 训练把前缀与后缀排在要补的中间片段之前，最终选择 50% FIM。多语言 HumanEval 表中 33B Base 与 Instruct 的 Python 成绩分别为 56.1% 和 79.3%；跨文件补全表 6.7B 的 Python 精确匹配为无检索 9.53%、BM25 检索 16.14%，上下文和评测条件应随数值一起阅读。图展示 FIM 推理及可选外部测试，并非论文原架构图。
- [DeepSeek-Coder-V2](https://arxiv.org/html/2406.11931)：从已训练 4.2T token 的 V2 中间检查点继续训练 6T，继续训练数据比例为代码 60%、数学 10%、自然语言 30%；236B／21B 激活与 16B／2.4B 激活分别对应大模型与 Lite，最长 128K。代码偏好利用编译器和测试反馈构造，论文后续 GRPO 用训练出的奖励模型，而非一概直接使用测试信号。论文多语言 HumanEval 的 Python 列 236B Instruct 为 90.2%、Lite Instruct 为 81.1%。图将执行和测试标为可选外部流程。
- [DeepSeekMath](https://arxiv.org/html/2402.03300)：Base 从 Coder-Base-v1.5 7B 继续训练 500B token，其中 56% 为 120B-token 规模的数学语料；数据集规模与训练用量不是同一个数。Instruct 再经 GRPO 形成 RL，原实验每题采样 64 条并使用奖励模型。无工具思维链评测中 Instruct 的 GSM8K／MATH 为 82.9%／46.8%，RL 为 88.2%／51.7%；GSM8K 与 MATH 对 RL 阶段属于论文定义的同领域任务。图展示的训练阶段与正文一致，省略奖励模型训练等细节。

本轮未运行模型或复现评测，未逐条验证全部论文结果与所有许可证、第三方材料；图示为教学简化，并不代表完整计算图。
