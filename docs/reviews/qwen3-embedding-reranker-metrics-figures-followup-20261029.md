# Qwen3 Embedding / Reranker 指标与图示核查（2026-10-29）

核对两篇正文的模型卡、训练、评测与配图：范围为文本 0.6B、4B 和 8B 检查点，未运行模型或复现基准。本轮没有重读知乎；现有实读与对照分别见 [Embedding 审校](qwen3-embedding-full-review-20261029.md)与 [Reranker 审校](qwen3-reranker-full-review-20261029.md)。

- [官方论文第 2 节及表 1](https://arxiv.org/html/2506.05176v1)与[模型卡](https://huggingface.co/Qwen/Qwen3-Reranker-0.6B)确认模型尺寸、层数、最大输入长度以及末位置表示和二分类 logit 的区别；重排按问题和候选逐对打分。
- 论文第 3.1–3.2 节核对两种模型的训练目标与阶段，Embedding 的假负例屏蔽、Reranker 的监督标签预测和模型融合没有相互套用。
- 论文表 4、表 9 对照 MTEB-Code 的 nDCG@10 结果，固定 0.6B Embedding 召回前 100 项；正文补充唯一相关结果在第 1、2、5 和前十之外的教学算例，分别为 1、约 0.63、约 0.39、0，并明确不是模型实测。
- 两张原创教学图的箭头分别接到召回与重排模块的边框，核对 SVG 坐标、替代文本及来源登记；修改后同步更新 Embedding 图在 `docs/assets.md` 的哈希。此轮未重新进行浏览器目视验收。
