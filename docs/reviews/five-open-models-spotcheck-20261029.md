# 五个开源模型的结构、训练与评测抽查（2026-10-29）

本次按各家选一篇，检查下述具体事实，不代表重新逐句审阅整篇，也没有训练模型或复现实验。

- [Qwen3](../../src/content/docs/nlp/qwen3.md)：[初版报告](https://arxiv.org/html/2505.09388v1)确认 36T、119 种语言与方言、三阶段预训练；表 22 中 32B 推理 RL 到通用 RL 的 IFEval strict prompt 73.0→85.0 和 AIME 2024 83.8→81.4，正文正确指出中间还有思考模式融合阶段。
- [Kimi K2](../../src/content/docs/nlp/kimi-k2.md)：[初版报告](https://arxiv.org/html/2507.20534v1)表 2 确认 1.04T／32.6B、384 个专家选 8，表 1 的 SimpleQA 重写实验与正文一致。报告第 2.5 节区分主要预训练的 15.5T 与后续 400B 的 4K 序列、60B 的 32K 序列及 YaRN 扩展；正文原本没有解释后续阶段，现已补充，并注明上下文长度不保证检索正确。
- [GLM-4.5](../../src/content/docs/nlp/glm45-model.md)：[初版报告](https://arxiv.org/html/2508.06471v1)表 1 与摘要确认主模型 160 路由专家选 8、一个共享专家、96 个查询头与 8 个 KV 头，23T 多阶段训练及 SWE-bench Verified 64.2%。正文保留模型、脚手架和预算的区别。
- [DeepSeek-V3](../../src/content/docs/nlp/deepseek-v3.md)：[初版报告](https://arxiv.org/html/2412.19437v1)表 3 的 Base MMLU 5-shot EM 87.1／V2 78.4 与正文一致；正式训练总计 278.8 万 H800 GPU 小时不含先前研究或消融，正文已说明范围。
- [MiniMax-M1](../../src/content/docs/nlp/minimax-m1-model.md)：[初版报告](https://arxiv.org/html/2506.13585v1)2.1 节与表 2 核对继续预训练 7.5T、2.5T 恒定学习率后 5T 衰减；40K／80K 的 SWE-bench Verified 55.6／56.0 与 AIME 2024 83.3／86.0 均符合表格及评测条件。

本轮没有重新实读知乎文章；社区资料沿用各自专项审校记录。
