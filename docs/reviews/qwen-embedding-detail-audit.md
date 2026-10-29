# Qwen3 Embedding 与 Reranker 核对

核对日期：2026-10-28。对照[官方发布](https://qwenlm.github.io/blog/qwen3-embedding/)、[技术报告](https://arxiv.org/abs/2506.05176)及 [8B 模型卡](https://huggingface.co/Qwen/Qwen3-Embedding-8B)，核查模型卡、向量与重排的使用区别、训练阶段和代表性评测条件；没有运行模型或复现榜单。

正文保留查询与文档分别编码、重排逐对比较的区别，也明确论文重排对比使用固定的召回候选。新增向量储存量的算术示例，说明不同浮点精度、向量维度与模型参数是不同概念。实际索引开销和精度影响仍需按使用场景测量。
