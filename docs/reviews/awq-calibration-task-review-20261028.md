# AWQ 任务与校准对照复核（2026-10-28）

核对 [AWQ 论文表 5、表 8 和第 5.3 节](https://arxiv.org/html/2306.00978)：Mixtral WikiText-2 困惑度、CodeLlama-7B-Instruct MBPP pass@1 数值及 INT4 g128 设置与正文一致。论文的 OPT-6.7B INT3 校准实验区分 PubMed 和 Enron，校准与评估无样本重合；正文将其作为设计对照的例子，未推断所有领域的结果。

本次未运行量化、代码生成或基准，也未重新核查知乎互动量。
