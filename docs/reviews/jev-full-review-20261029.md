# TypeSafe Jev 专项审校

审校日期：2026-10-29。完整通读 [Jev 正文](../../src/content/docs/nlp/jev.md)，范围为 TypeSafe 的 Jev 服务，与 OmniJev 分别表达；未调用服务、训练模型或复现评测。

- **结构与接口**：对照 [System One 文档](https://docs.typesafe.ai/concepts/system-one)核对文本、JSON 与文本数组输入，Choice、Score、Noul 类型判断及不支持音视频图片；内部骨干与参数未公开，不从返回格式推测。新增 [confidence 文档](https://docs.typesafe.ai/confidence)中 Choice/Score 基于概率分布的统计及 Noul 无独立 confidence 字段；三选项 0.6/0.3/0.1 对应 0.4 的计算为教学算例。
- **训练**：对照[官方机器学习说明](https://docs.typesafe.ai/introduction/machine-learning-primer)核对 RLCD 与概率校准的公开定位，不将 RLHF、RLVR 或教学工单当作 Jev 已公开的完整训练配方。
- **评测**：核对校准是跨预测集合的关系，Choice/Score 概率与集中程度指标分别解释；Brier、可靠性图、阈值与覆盖率是构造的评测方法，0.175 为教学计算，非 Jev 测量。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)及[原创流程图](../../public/figures/jev/overview.svg)，state 和问题、Jev 返回判断、应用规则及复核顺序与官方接口一致；图明确不表示内部架构，标注来源与 CC BY 4.0。Chromium 本地页面滚动解码成功、宽 1060、有替代文本，截图检查中文和箭头。
- **社区**：沿用[历史实读记录](zhihu-reading.md)，腾讯技术工程发布、leon jia 署名的[《从 BERT、GPT 到 Jev》](https://zhuanlan.zhihu.com/p/2095524421255557442)当时 57 赞、150 收藏，按输入、输出及任务组织模型演进；对其 Jev 内部结构的推测以官方 System One 文档交叉核对，未作为已证实实现。正文补入该链接；本次未重读或更新互动量。
