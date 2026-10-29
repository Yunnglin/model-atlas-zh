# Kimi K2 与 K2.5 内容和图示核查

核查日期：2026-10-28。只核对下述具体项目，未运行模型、重新实读知乎文章，也没有逐句核对两篇文章。

- [K2 官方技术报告](https://arxiv.org/html/2507.20534)第 2.1–2.2、4.1 节：核对 MuonClip、训练 token、知识改写实验及 SWE-bench 三种设置。对照 [Instruct 配置](https://huggingface.co/moonshotai/Kimi-K2-Instruct/raw/main/config.json)和 [Thinking 配置](https://huggingface.co/moonshotai/Kimi-K2-Thinking/raw/main/config.json)，核对层数、路由专家与上下文，补充注意力头和低秩维度的解释。
- [K2.5 技术报告](https://arxiv.org/html/2602.02276)第 4.2–4.4、5.2 及附录 E：核对视觉编码器、时间聚合、三阶段训练、冻结子智能体、BrowseComp 比较和视频输入帧数；对照 [K2.5 配置](https://huggingface.co/moonshotai/Kimi-K2.5/raw/main/config.json)核对文本主干。正文补充各阶段数据量和系统对照。
- 两张本地教学 SVG 用 Chromium 渲染查看。K2 图是模型与外部执行器的信息流简图，K2.5 图展示视觉输入、语言主干和可选外部编排；两图省略层内详细计算，并非官方架构全图。本轮未修改图及共享登记。
- 官方报告没有公开全部训练样本或后训练参数；测试、奖励与算力相关结果按论文设置解释。知乎参考仍沿用页面已登记资料，未在本轮重新读取或核验互动数。
