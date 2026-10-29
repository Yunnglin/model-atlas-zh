# 初代 GPT 专项审校

审校日期：2026-10-29。完整通读 [初代 GPT 正文](../../src/content/docs/nlp/gpt1-model.md)，范围为 2018 年论文；未训练模型或复现评测，客服及多选例子为教学构造。

- **结构**：对照 [OpenAI 原论文](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)第 3、4 节，核对 12 层、768 维、12 头、3072 前馈维、可学习位置嵌入及因果 Transformer；分类时以最后位置表示接线性输出层，任务微调更新主体参数，不将其说成今天的聊天模型。
- **训练**：论文第 3–4 节核对 BooksCorpus 连续文本、每批 64×512 token、100 epoch、BPE、Adam，以及有监督任务微调和可选的辅助语言建模目标；辅助目标并非所有任务和后续 SFT 的必要条件。约 117M 参数按 [OpenAI GPT 模型卡](https://huggingface.co/openai-community/openai-gpt)的常用统计解释，不套用到不同任务头。
- **评测**：论文表 2–4 核对 MultiNLI matched 82.1/80.6、RACE 59.0/53.3、RTE 56.0/61.7、MRPC 82.3/86.0。本次补充 MRPC 使用 F1、MultiNLI/RTE 使用准确率，且 RACE 对照为 9 模型集成；区分预训练、监督微调和论文另行分析的零样本行为。
- **配图**：对照[图片登记](../../src/content/data/figures.yaml)及[原创教学图](../../public/figures/gpt1/overview.svg)，无标注文本自回归预训练、各任务有监督微调及未见样本评测的流程与论文简化范围一致；图注明来源、非官方图和 CC BY 4.0。Chromium 本地正文滚动加载并成功解码，图片宽 1200、有替代文本，截图核对中文及箭头。
- **社区**：沿用 [2026-10-28 实读记录](gpt1-independent.md)，中森的 [GPT 系列论文笔记](https://zhuanlan.zhihu.com/p/412351920)当时 247 赞、385 收藏，讨论预训练、微调与任务输入；两阶段及输入转换与原论文第 3 节交叉核对，历史影响方面的个人观点不作为论文实验结论。本次未重读或更新互动量。
