# Qwen3-Coder 专项审校

审校日期：2026-10-29。完整通读 [Qwen3-Coder 正文](../../src/content/docs/nlp/qwen3-coder-model.md)，范围为 480B-A35B-Instruct 首发检查点；未运行模型或复现评测，代码修复案例为教学构造。

- **结构**：对照[模型卡](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)核对约 480B 总参数、35B 激活、62 层、160 个专家选 8、96 查询头和 8 KV 头；区分专家前馈、注意力和外部工具执行，非思考模式不是不能多步完成任务。
- **训练**：对照[官方发布](https://qwenlm.github.io/blog/qwen3-coder/)核对 7.5T token、70% 代码、Qwen2.5-Coder 清理改写、代码 RL、长程 Agent RL 和可并行 20000 环境。本次增加约 5.25T/2.25T 的比例算例，说明处理 token 不等于去重代码库，也不推断未公开语言分布及奖励配方。
- **评测**：沿用[2026-10-28 官方发布图核对](qwen-coder-source-review-20261028.md)的 OpenHands SWE-bench Verified 100/500 轮 67.0%/69.6%，区分工具框架、交互预算与实际成本；YaRN 扩展、原生配置与实际服务分别说明，教学测试不当成模型实测。
- **配图**：核查[图片登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/qwen3-coder/overview.svg)，输入、因果模型、工具请求、外部执行与反馈方向一致，图注明简化和 CC BY 4.0。Chromium 本地正文滚动后图像解码成功、宽 1060、有替代文本，截图检查中文和箭头。
- **社区**：沿用[2026-10-27 实读记录](qwen-code-community.md)，千问大模型的[Qwen3-Coder 发布文](https://zhuanlan.zhihu.com/p/1931228503849833767)当时 401 赞、420 收藏，讨论训练、规格与上下文；对照官方博客的代码比例、Agent RL 和窗口设置。该文是发布方资料而非独立评测，工具演示与其他价格不推广；本次未重读或更新互动量。
