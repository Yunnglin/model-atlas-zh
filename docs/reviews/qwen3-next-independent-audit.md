# Qwen3 与 Qwen3-Next 独立复核

核对日期：2026-10-28。本轮对照官方公开论文、权重配置和模型卡检查下述模型卡、核心结构、训练阶段、具体评测及两张教学图；没有运行模型或复现实验，不宣称逐句审完其所有公开资料。

- [Qwen3](../../src/content/docs/nlp/qwen3.md)：对照[技术报告 v1](https://arxiv.org/html/2505.09388v1) §2–4、[Qwen3-8B 模型卡](https://huggingface.co/Qwen/Qwen3-8B)和[官方仓库](https://github.com/QwenLM/Qwen3)核对初版 Dense／MoE、128 选 8 无共享专家、四段后训练和 2507 的版本边界。补充 2025-04-29 发布时间、约 36T token／119 种语言和方言的报告口径、三个预训练阶段；表 22 以 32B 思考模式举例说明 IFEval 与 AIME24 随阶段变化方向不同。报告表格的 128K 与模型卡列出的原生 32K、YaRN 扩展和配置值各有口径，正文按模型卡说明，不把默认配置当作原生长度。原创教学图区分 Dense／MoE 型号选择，不声称是官方完整层图。
- [Qwen3-Next](../../src/content/docs/nlp/qwen-next.md)：对照 [80B-A3B-Instruct 官方模型卡](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct)核查 15T 预训练、12 组 3 Gated DeltaNet 加 1 Gated Attention、512 选 10 加共享专家、262,144 原生及扩展长度；MMLU-Pro 80.6、BFCL-v3 70.3 是不同基准，不能横向相减。补充 15T 与 Qwen3 的 36T 分别对应不同记录且不能单凭数据量判断质量；扩展长度依赖框架配置。教学图简化 48 层排列，并注明省略组件。
- 社区资料、作者及互动快照沿用 [知乎阅读记录](zhihu-reading.md)，本轮未重新核验互动数。原始报告和模型卡是本次事实依据，教学示意图由项目贡献者绘制。
