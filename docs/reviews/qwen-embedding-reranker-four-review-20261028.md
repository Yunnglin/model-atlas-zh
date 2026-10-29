# Qwen3 文本与多模态 Embedding / Reranker 审校

核对日期：2026-10-28。逐篇核查四份模型卡、正文和原创图的结构、输出、训练过程及所列评测。审阅者此前已参与 Qwen3 Reranker 和 Qwen3-VL Reranker 的事实审校，因此这两篇不构成完全独立复核；未发现本人曾审校另外两篇正文的明确记录。

## 本轮调整

- [多模态报告 §6.1](https://arxiv.org/html/2601.04720#S6.SS1)的 MMEB-v2 结果在表 2，原文引用“表 3 的实验”容易让读者误查到视觉文档对照表；改为引用具体章节。报告正文自身也有一次将 MMEB-v2 指向表 3 的表内引用错误，故此处以实际表头和数据为依据。
- 多模态 Embedding 正文明确标出输入末尾的 `<|endoftext|>` 及取其最后一层隐藏状态，便于区分文本 Embedding 使用的 `[EOS]`。两者均不能将单次输入直接理解为生成自然语言答案。

## 核对依据

- [文本系列报告 §2–3](https://arxiv.org/html/2506.05176)：Embedding 与 Reranker 均基于 Qwen3 稠密因果解码器，规格 0.6B、4B、8B；文本向量使用末尾 EOS 状态，完整维度分别 1024、2560、4096。Reranker 处理指令、查询、候选并对 yes/no 评分；[官方 8B 模型卡](https://huggingface.co/Qwen/Qwen3-Reranker-8B)示例在两个 logits 间归一化。图展示的是流程，不代表底座为双向编码器。
- 文本 Embedding 采用弱监督对比训练、监督训练及检查点融合；Reranker 不经过该第一阶段，使用监督训练。报告 §3.3 所列 1.5 亿弱监督合成对与 1200 万筛选后合成对不应当成两种模型都使用的同一训练集。[官方发布](https://qwenlm.github.io/blog/qwen3-embedding/)在 2025-06-05 报告 8B 多语言 MTEB 70.58，排名有时间条件。
- [多模态报告 §2、§4–5](https://arxiv.org/html/2601.04720)及 [Embedding 模型卡](https://huggingface.co/Qwen/Qwen3-VL-Embedding-8B)、[Reranker 模型卡](https://huggingface.co/Qwen/Qwen3-VL-Reranker-8B)：分别有 2B、8B 检查点，支持文本、图片、视频及组合，32K 是序列预算；向量维度 2048／4096。逐点重排用 sigmoid(yes logit − no logit)，模型卡标示 Apache 2.0。训练从 Qwen3-VL-Instruct 初始化并使用 LoRA；Reranker 作为教师蒸馏的是 Embedding，不能把各阶段套到两个模型上。
- 报告表 2 的 8B／2B 多模态综合分为 77.8／73.2；§6.1 评测限制为 16384 token、图像最多 1800 视觉 token、视频最多 15000 token 与 64 帧。表 5 重排比较使用 2B Embedding 召回前 100 项，MMEB-v2 检索均分基线 73.4，8B Reranker 为 79.2；前者不是后者的全任务综合分。表 5 和官方卡部分细分数值有差异，正文保留表 5 口径。
- 四张图为原创流程教学示意，强调独立编码与逐对重排、外部索引与可选流程；省略具体视觉编码、注意力与训练内部细节。

本轮没有运行权重、重建索引或复现基准；未逐项检查全部版本许可、社区阅读与所有评测任务。
