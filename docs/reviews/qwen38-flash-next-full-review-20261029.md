# Qwen3.8-Flash-Next 专项审校

审校日期：2026-10-29。通读 [Flash-Next 正文](../../src/content/docs/omni/qwen38-flash-next-model.md)，范围为开放检查点和技术报告 v1；未运行模型、训练或复现评测，合同案例为教学构造。

- **结构**：对照[技术报告 v1](https://arxiv.org/html/2608.30320v1)与[模型卡](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)核对 48 层、三层 Gated DeltaNet 加一层 QSA、MoE、四路 Gated Residual，以及主模型 125B/激活 6B 与额外 51B N-gram、4B MTP 的统计口径；图像/视频输入与音频能力区分。
- **训练**：报告核对 Muon、AdamW 与关闭权重衰减的 Adam 对不同参数的使用、稀疏索引与骨干适配；补充第 2.3.1 节在固定参数预算下不同 N-gram 放置位置的实验及选择第 2 层以重叠预取的说明，不将架构消融视为正式模型全部数据或配方。
- **评测**：报告第 2.1 节核对 1M 下 QSA 注意力模块 prefill/decode 7.6/4.9 倍及批量和分块，模型卡核对 SWE-bench Pro 62.5、工具框架和预算；不将模块加速当端到端速度，也不把带工具分数当单次文本回答。
- **配图**：检查[图片登记](../../src/content/data/figures.yaml)与[原创教学图](../../public/figures/qwen38-flash-next/overview.svg)，输入、混合注意力、专家、N-gram 和输出的简化方向与报告一致，图注标记范围和 CC BY 4.0。Chromium 本地正文滚动后图片解码成功、宽 1200、有替代文本，截图检查中文和箭头；论文原图以链接提供。
- **社区**：沿用[2026-10-28 实读记录](qwen38-flash-next-community.md)，千问大模型的[系列介绍](https://zhuanlan.zhihu.com/p/2076052218705461635)当时 91 赞、68 收藏，讨论 QSA、门控残差、N-gram 和 Muon；与报告和模型卡核对，区分 Flash 服务和 Flash-Next 开放权重。文章是发布方资料，不作为独立评测；本次未重读或更新互动量。
