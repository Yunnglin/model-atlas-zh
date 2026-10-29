# Qwen3.5-Omni 专项审校

审校日期：2026-10-29。完整通读 [Qwen3.5-Omni 正文](../../src/content/docs/omni/qwen35-omni-model.md)，以技术报告 v1 的 Flash/Plus 为范围；未调用服务、训练模型或复现评测，会议和延迟例子为教学构造。

- **结构**：对照[技术报告 v1 第 2 节、表 1](https://arxiv.org/html/2604.15804v1)核对 16 kHz/128 通道 Mel、AuT 16 倍下采样和 6.25 Hz、混合注意力 Thinker/Talker、MTP 与流式卷积解码、ARIA 单序列交错及显式时间戳。正文保留报告图表中视觉编码器名称与正文来源描述的差异，不推断码本数量或未公开的 Flash/Plus 参数。
- **训练**：报告第 2.2、3、4 节核对 4000 万小时 Qwen3-ASR 生成的音频文本对、三阶段预训练、第二阶段约 4T token 及 32K 到 256K、Thinker 专家和在策略蒸馏及多轮优化、Talker 的多语言语音预训练、长上下文、DPO/GSPO 和说话人微调。区别各阶段和模态的统计口径，不将具体训练方案与教学建议混同。
- **评测**：报告表 2、7 核对 WorldSense 的 Flash/Plus 57.9/62.8、音频单并发理论首包 235/435 ms 与不同部署资源条件。补充相同 Flash 配置中 1 到 8 并发的音频 235→352 ms、视频 426→1625 ms，标明内部 vLLM 理论关键路径及不含网络和播放。模型生成内容、声音质量及延迟分别评估。
- **配图**：对照[图示登记](../../src/content/data/figures.yaml)、[原创教学图](../../public/figures/qwen35-omni/overview.svg)和[技术报告原图 2](../../public/figures/qwen35-omni/official-model.jpg)；文本、音视频、Thinker、Talker、MTP 与流式解码流程与报告简化范围一致，官方图与教学图来源和 CC BY 4.0 分别登记。Chromium 本地正文滚动加载两图，宽 1240/3238，替代文本存在；截图检查中文、结构与箭头。
- **社区**：沿用[2026-10-28 已登录实读记录](qwen35-omni-community.md)，模型之声的[语音架构解读](https://zhuanlan.zhihu.com/p/2047357911563776046)当时 14 赞、18 收藏，讨论 Thinker/Talker、AuT 和 ARIA。文章将码本规格及 ARIA 全局比例取得方式标为推测，技术报告未充分说明时不当作官方配置。本次未重读或更新互动量。
