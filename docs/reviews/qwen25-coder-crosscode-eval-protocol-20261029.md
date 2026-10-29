# Qwen2.5-Coder 跨文件补全评测补充核查

2026-10-29 对照 [Qwen2.5-Coder 技术报告 v3 第 6.2 节与表 8](https://arxiv.org/html/2409.12186v3#S6.SS2)：CrossCodeEval 使用评测集提供的 BM25 检索结果，跨文件上下文限制为 2048 token，输入序列上限 8192 token，输出上限 50 token。Qwen2.5-Coder-7B Base 的四语言平均 Exact Match 为 49.3、Edit Similarity 为 83.1。正文增加检索与补全的分工，避免将该成绩理解为模型独立检索仓库的效果。

另对照同一报告表 5、7 和第 3.2 节核查已有 HumanEval、HumanEval-FIM 数字，以及 5.2T 文件级、约 300B 仓库级材料和训练长度；指定项目一致。本次没有运行模型或复现评测，也未重读知乎或检查配图。
