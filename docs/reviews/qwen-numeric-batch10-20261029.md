# Qwen 实时翻译与 Flash-Next 指定数字核查（第十批）

日期：2026-10-29。针对以下四篇正文列明的官方指标、模型版本和条件做定向核对；教学示例仅核算，不代表实际运行或复现。

- **Qwen3-LiveTranslate**：[初代官方发布文章](https://qwen.ai/blog?from=res&id=4266edf7f3718f2d3fda098b3f4c48f3573215d0)称实时翻译延迟最低约 3 秒，实时翻译准确度保留非实时翻译的 94% 以上；文章对精确的统计方式和输入条件描述有限。正文将后者按相对比较解释，并未写成 94% 的绝对准确率。假设离线得分 80、按 94% 保留，得到 75.2，算术正确；该算例不是官方实测。
- **Qwen3.5-LiveTranslate**：[官方发布文章](https://qwen.ai/blog?id=qwen3.5-livetranslate)称相较初代首字延迟减少 3.45 秒、字均延迟减少 1.88 秒，语音到语音平均字均延迟 2.8 秒；公开发布文字未给出足以复算汇总值的完整协议。FLEURS、CoVoST2 是离线翻译基准，与流式延迟比较不是同一测试。正文没有引用具体翻译基准分数。本轮通过搜索引擎收录的官方文章内容核对，网页提取工具直接打开正文为空。
- **Qwen3.8-LiveTranslate**：[官方发布文章](https://qwen.ai/blog?id=qwen3.8-livetranslate)称 Omnilingua-MSpeaker 覆盖 14 个语言方向，比较忠实度、流畅度、简洁度及 DER；FLEURS 音频测试覆盖 70 个语言方向。官方将平均滞后 LAAL 报告为前代 2.8 秒、本代 2.3 秒。正文区分语言方向、时延口径和构造的逐句准确率。本轮通过搜索引擎收录的官方文章内容核对，网页提取工具直接打开正文为空；[QwenCloud 发布说明](https://docs.qwencloud.com/changelog/models?model=qwen3.7-max)亦列该版本约 2.3 秒，但将其概括为端到端延迟，不能据此补造更具体的计算协议。
- **Qwen3.8-Flash-Next**：[技术报告 v1 图 6、2.1.2 节](https://arxiv.org/html/2608.30320v1)报告百万 token 上下文时，包含索引与稀疏核心注意力的模块级 prefill、decode 相对稠密注意力分别约 7.6、4.9 倍；prefill 采用 16K 分块、批量 1，decode 批量 4，`next_n=4` 包含 3 个额外 MTP 预测步骤。[官方模型卡](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)的 SWE-bench Pro 为 62.5，采用 Claude Code、256K、温度 1.0、top-p 0.95，并修正了部分题目后重新评测对照模型。正文对加速范围和评测条件的描述与上述资料一致。

本次未重新审阅上述模型的完整结构、训练、配图或知乎材料，也未运行模型。搜索索引提供的官方页面文本和直接读取模型卡、技术报告是不同证据路径，以上分别注明。
