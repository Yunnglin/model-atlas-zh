# Llama 4 独立核查

核查范围为 Scout 和 Maverick 的官方模型卡、发布说明、权重许可、模型结构、训练披露与评测口径；案例和工程方案没有实际运行。

- [官方模型卡](https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md)：确认 2025-04-05 发布；Scout 17B 激活/109B 总参数、16 专家、10M 上下文、约 40T 预训练 token；Maverick 17B 激活/400B 总参数、128 专家、1M 上下文、约 22T 预训练 token。中文不在列出的 12 种受支持语言中；图像测试最多 5 张并非硬性接口上限。
- [Meta 发布说明](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)：确认 MoE、原生多模态与后训练公开方向。Behemoth 在发布说明中是研发中的更大模型，不把预告当成可下载权重。
- 模型卡中图文问答 0-shot 指令版 ChartQA relaxed accuracy 为 Scout 88.8、Maverick 90.0；DocVQA test 的 ANLS 都为 94.4。模型卡明确所报告测试使用 BF16；数值未视为本文复现或量化权重成绩。
- [Llama 4 社区许可](https://github.com/meta-llama/llama-models/blob/main/models/llama4/LICENSE)：开放权重受自有社区许可与使用政策约束，不能称 Apache 或无条件开源。模型卡说明 Scout 单 H100 须运行时 INT4；Maverick FP8 放在 H100 DGX 主机，不等于 BF16 单卡。
- 原创教学图是输入、专家路由及输出后核验的高层示意，不推断各层细节或专家路由数量。
- 知乎：在已登录 Chrome 搜索 `Llama 4 Scout Maverick`，本次页面未返回可读取的具体文章，因此未取得可核实作者、赞同及收藏数据，也未采用未经核实的社区技术陈述。
