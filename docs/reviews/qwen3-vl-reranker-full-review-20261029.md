# Qwen3-VL-Reranker 专项审校

审校日期：2026-10-29。完整通读 [Qwen3-VL-Reranker 正文](../../src/content/docs/omni/qwen3-vl-reranker-model.md)，区分 2B/8B 重排权重与 Embedding；未运行模型或复现评测。

- **结构**：对照[技术报告第 2 节及表 1](https://arxiv.org/html/2601.04720)和 [8B 模型卡](https://huggingface.co/Qwen/Qwen3-VL-Reranker-8B)，核对 2B/8B、28/36 层、32K 输入、因果 Qwen3-VL、指令/查询/候选联合输入及 yes/no 评分。明确交叉编码不代表输入位置双向互相注意；新增假设 logit 差值的 sigmoid 算例，不将分数当作校准后的正确率。
- **训练**：报告第 3–5 节核对数据合成、正样本筛选、难负例、LoRA 和三阶段分工；Reranker 在第二阶段独立训练，并在第三阶段作为教师蒸馏 Embedding，不将全部阶段误写为重排模型依次训练。
- **评测**：报告表 5 使用 Qwen3-VL-Embedding-2B 召回 top 100，MMEB-v2 汇总 73.4 到 8B 重排 79.2、ViDoRe v3 52.9 到 66.7。新增 2B 重排图片/视频分项 74.0/53.2 与基线 74.8/53.6 的对照，提醒总分提高不等于各分项均提高；不同来源细分值不混用，未自行跑实验。
- **配图**：核对[图示登记](../../src/content/data/figures.yaml)及[原创教学图](../../public/figures/qwen3-vl-reranker/overview.svg)，输入、候选召回、逐对评分与排序的流向一致，明确非网络逐层图、标注来源和 CC BY 4.0。Chromium 本地正文滚动后图片解码成功、替代文本存在，截图检查中文与箭头。
- **社区**：沿用[2026-10-28 知乎实读记录](qwen3-vl-reranker-community-20261028.md)，算法大作手的[架构与训练导读](https://zhuanlan.zhihu.com/p/1992993215704475229)当时 25 赞、37 收藏，讨论 Embedding 粗筛、Reranker yes/no 及蒸馏；将“相关性概率”的使用与报告对照，正文注明未经校准不能作为实际正确率。文章没有具体基准分析，性能仍以报告为准。本次未重读或更新互动量。

## 本轮评测版本核对

- [报告最新版表 5](https://arxiv.org/html/2601.04720)中，2B Reranker 的 MMEB-v2 检索汇总／图片／视频分别为 75.2／74.0／53.2；2B Embedding 基线为 73.4／74.8／53.6，8B Reranker 汇总为 79.2，ViDoRe v3 基线／8B 为 52.9／66.7。均使用 2B Embedding 召回的前 100 项作为重排候选。
- [报告 v1 表 5](https://arxiv.org/html/2601.04720v1)的 2B Reranker 汇总／图片／视频为 75.1／73.8／52.1，与最新版不同；正文细分数采用最新版并明确版本。本轮未运行评测。
