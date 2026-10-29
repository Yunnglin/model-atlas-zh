# Llama 3 初版全维度审阅

审阅日期：2026-10-29。时间线 ID `llama3`，通读 `src/content/docs/nlp/llama3-model.md`，对照 Meta 初版发布介绍、官方模型卡、配置、配图及既有知乎实读记录；没有运行权重或复现评测。

## 结构与模型卡

- [Meta 2024 年 4 月发布介绍](https://ai.meta.com/blog/meta-llama-3/)：初版是 8B 与 70B 的文本模型，decoder-only、约 128K 词表，两个规模均采用 GQA，训练序列长度 8192；405B 与 128K 上下文属于后续 3.1，不混入初版。
- [8B 模型卡](https://huggingface.co/meta-llama/Meta-Llama-3-8B)列出文本输入、文本／代码输出与 Llama 3 Community License；授权范围和相关使用条件与 Apache 许可不同。面向英语的定位与非英语数据占比也分别说明。
- [官方配置](https://github.com/meta-llama/llama-models/blob/main/models/sku_list.py)的 8B 结构为 32 层、32 查询头、8 KV 头、隐藏维度 4096，头维度 128。单序列 8192 token、BF16、K 与 V 两份缓存合计 1 GiB；同配置 32 个 KV 头是 4 GiB。本次补充两条各占满上下文且不共享前缀时约 2 GiB 的教学估算，不包含权重与工作区。

## 训练

- 发布介绍说明超过 15 万亿 token、超过 5% 非英语数据、跨文档自注意力遮罩；过滤、语义去重与文本质量分类器均有对应描述，Llama 2 用于生成分类器训练数据。
- 指令后训练包含 SFT、拒绝采样、PPO 和 DPO；会议纪要示例是应用教学，不伪称官方训练样本或具体阶段超参数。

## 评测与应用

- 官方模型卡列 MMLU 5-shot：Base 8B／70B 为 66.6／79.5，Instruct 为 68.4／82.0；HumanEval 0-shot Instruct 为 62.2／81.7。正文限定版本和任务，不把代码得分当作真实项目验收。
- Meta 发布介绍列出 1800 个提示、12 类用例的人工评价集，偏好与自动基准测量不同。会议摘要忠实性、负责人核实和独立回归均为教学建议。

## 配图

- `src/content/data/figures.yaml` 登记 `llama3-teaching` 为原创 CC BY 4.0 GQA 教学图，注明官方资料依据、非完整架构图与替代文本；图中四个查询头仅为示意，不与 8B 的实际 32 个查询头混同。
- Chromium 打开本机 `/nlp/llama3-model/`，图片解码为 1200×430，替代文本存在；截图检查箭头、示例与版面。页面为正文新例子修改前的静态构建，图片和替代文本未改动。

## 社区

- [真真锋：llama1–3 模型结构详解](https://zhuanlan.zhihu.com/p/625775403) 于 2026-10-28 已登录实读时 172 赞同、290 收藏，见 [初版核验](llama3-independent.md)。文章可辅助认识词表、GQA 及初版与 3.1 的差别；模型配置与评测以官方资料为准，未复制社区图文。
