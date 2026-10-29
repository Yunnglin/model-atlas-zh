# Qwen2.5-Math-PRM 与 Qwen2.5-1M 定向证据复核

2026-10-29 对两篇正文的指定训练和评测表述及既有完整审校记录交叉阅读；本次不等于逐句重审，也未运行训练或评测。

- [Qwen2.5-Math-PRM 正文](../../src/content/docs/nlp/qwen25-math-prm-model.md)：对照[论文 4.1–4.3 节和表 13](https://arxiv.org/html/2501.07301)，确认八次续写硬标签、72B critic 共识筛选、Best-of-8 生成器和七项平均 66.2／67.6／74.7，以及 ProcessBench GSM8K 的 72.0／96.4／82.4。补充末步／乘积／最小值三种排序的人工算例；论文表 13 的 7B PRM 平均分别为 66.1／67.6／67.1，说明选择规则会影响评测。既有[完整审校](qwen25-math-prm-full-review-20261029.md)覆盖的其他维度本轮未重新复核。
- [Qwen2.5-1M 正文](../../src/content/docs/nlp/qwen25-1m-model.md)：对照[技术报告 v1](https://arxiv.org/html/2501.15383v1)第 3、6.3 节，确认后三个预训练阶段当前最大长度序列占 75%，及 14B、H20、8 路张量并行、batch 1 的首 token 时间 12.2 分钟对 109 秒；后者是稀疏注意力与引擎优化共同作用。既有[完整审校](qwen25-1m-full-review-20261029.md)与此次范围一致，未修改正文。
