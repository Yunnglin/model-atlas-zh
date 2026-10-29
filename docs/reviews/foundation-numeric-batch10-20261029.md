# 基础模型评测数字定向复核（2026-10-29）

本次核对五篇正文中下列指定数字及关键协议；没有复现评测，也不代表逐项核查了正文所有数字。

- **Transformer**：[论文表 2 和第 6.1 节](https://arxiv.org/html/1706.03762)报告 big 模型 WMT 2014 英德 28.4 BLEU；big 模型取最后 20 个检查点的参数平均，束宽 4、长度惩罚 0.6。正文没有将 BLEU 当作正确句子百分比，算例另注明教学构造。
- **GPT 初代**：[官方论文表 2–4](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)和[发布页](https://openai.com/index/language-unsupervised/)的 MultiNLI matched 82.1 对 80.6、RACE 59.0 对 53.3、RTE 56.0 对 61.7、MRPC 82.3 对 86.0 与正文一致；MRPC 是 F1，RACE 的 53.3 是九模型集成，正文已分别标明。这里是任务微调结果，不是统一零样本评测。
- **InstructGPT**：[原论文第 1 节与图 1](https://arxiv.org/html/2203.02155)报告同为 175B 时相对 GPT-3 的人工偏好 85% ± 3%，相对 few-shot GPT-3 为 71% ± 4%；图 1 说明全文误差线为 95% 置信区间。正文也区分了图中 SFT 参照与文字中的直接模型比较。
- **Claude**：[Chain-of-Thought Hub 论文 v1 表 1](https://arxiv.org/html/2305.17306v1)的 GSM8K 列标注 claude-v1.3 81.8、claude-instant-v1.0 70.8，星号说明由论文作者测试脚本所得。两者是第三方针对具体版本的研究，正文没有将其称为 Anthropic 官方初代产品成绩。
- **Llama 3.1**：[Llama 3 技术报告表 2 与第 5.2.1 节](https://arxiv.org/html/2407.21783)中的指令模型 MMLU 五样本分别为 8B 69.4、70B 83.6、405B 87.3；报告说明这是各子任务准确率的宏平均，采用生成任务格式。正文说明了版本、提示数量和统计方式。

所查数字未发现错误；没有修改正文。本记录仅是指定数字与协议的补充核对，配图和社区资料沿用已有审校记录。
