# Qwen3-VL-Embedding 专项审校

审校日期：2026-10-29。完整通读 [Qwen3-VL-Embedding 正文](../../src/content/docs/omni/qwen3-vl-embedding-model.md)，范围为 2B、8B 向量模型及配套重排用途；未运行权重、重建索引或复现评测。安全手册与向量计算为教学构造。

- **结构**：对照[报告第 2 节和表 1](https://arxiv.org/html/2601.04720v1)及 [2B 模型卡](https://huggingface.co/Qwen/Qwen3-VL-Embedding-2B)，核对图文视频混合输入、32K、2B/8B 的 28/36 层与 2048/4096 维、末尾 `<|endoftext|>` 对应隐藏状态、同一权重独立编码查询和候选。Embedding 与 Reranker 分属不同权重，候选漏召不能由重排补回。
- **训练**：报告第 3–5 节核对多模态对比预训练、监督训练、重排模型评分蒸馏与检查点合并；从 Qwen3-VL-Instruct 初始化并采用 LoRA，训练预处理图片最多 1280 token、视频 1 fps、最多 64 帧及总 4500 token。补充 MRL 对完整向量及不同前缀同时训练、向量量化感知训练对全精度及模拟低精度表示计算目标；分别说明缩短维度、向量低精度和模型权重量化。
- **评测**：报告第 6.1、6.4 节及表 2、5 核对 MMEB-v2 2B/8B 总分 73.2/77.8、16384 上下文及图像/视频 token 预算，区分 2B 向量 top-100 重排实验 73.4/79.2 与全部任务总分。Hit@5、空间及独立手册实验为教学构造，未运行模型。
- **配图**：核对[图示登记](../../src/content/data/figures.yaml)、[召回重排图](../../public/figures/qwen3-vl-embedding/overview.svg)、[编码器图](../../public/figures/qwen3-vl-embedding/encoder.svg)，图分别展示两套权重的管线和末尾隐藏状态，均为 CC BY 4.0 教学简图；为正文内联编码器图补充[素材登记](../assets.md)来源、署名与哈希。Chromium 打开本地正文后两图解码成功，替代文本存在，截图检查中文与箭头。
- **社区**：沿用 [2026-10-28 实读记录](qwen3-vl-reranker-community-20261028.md)，算法大作手的[架构及训练导读](https://zhuanlan.zhihu.com/p/1992993215704475229)当时 25 赞、37 收藏，讨论 Embedding 粗筛、Reranker 联合评分和教师蒸馏；对照报告明确 Embedding 和 Reranker 训练阶段及分数不等于经过校准的正确率。文章并非独立基准实验，本次未重读或更新互动量。

## 本轮评测数字复核

- 对照[报告 v1 第 6.1、6.4 节及表 2、5](https://arxiv.org/html/2601.04720v1)：MMEB-v2 包含 78 个数据集，Embedding 2B/8B 汇总为 73.2/77.8；评测上下文 16384 token、图片最多 1800 token，视频最多 15000 token 和 64 帧。表 5 以 2B 召回前 100 项，MMEB-v2 检索汇总从 73.4 到 8B 重排 79.2；这与表 2 全任务汇总是不同实验。本轮未运行评测。
- 同一报告最新版与 v1 的表 5 中 2B 重排细分值不同；正文未引用这些细分值。相关重排页面的细分数采用最新版，避免混用版本。
