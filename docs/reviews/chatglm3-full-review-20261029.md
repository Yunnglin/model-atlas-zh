# ChatGLM3-6B 专项审校

审校日期：2026-10-29。完整通读 [ChatGLM3 正文](../../src/content/docs/nlp/chatglm3-model.md)，以 8K 对话检查点为主，并区分 Base、32K 和 128K；未运行模型或复现评测，天气和缓存例子为教学构造。

- **结构**：对照[官方配置](https://huggingface.co/zai-org/chatglm3-6b/blob/main/config.json)核对 28 层、4096 维、32 查询头、2 组 KV 与 8192 配置长度；单请求 8192 token BF16 KV 缓存算式为 234,881,024 字节，即 224 MiB，不包含其他内存。对照[官方提示说明](https://github.com/zai-org/ChatGLM3/blob/main/PROMPT_en.md)，工具名随 assistant 消息、外部返回为 observation；本次补充交接单类比，工具由外部程序执行。
- **训练**：对照[技术报告第 1 节](https://arxiv.org/html/2406.12793)，补充二代与三代均从头预训练，避免将技术路线的延续误当作从二代权重继续训练；官方仓库说明数据、步数和策略改善，但未公开足以完整复现配方的语料或样本比例，正文没有填造。
- **评测**：对照[官方仓库评测表](https://github.com/zai-org/ChatGLM3#评测结果)，核对 Base 的 MMLU 61.4、C-Eval 69.0 和选择题 zero-shot、数学 zero-shot CoT、BBH 3-shot；LongBench 的 41.5/50.2 与单文档 37.6/45.8、多文档 34.7/46.1 均对应 32K 检查点，不能当作默认 8K 的结果。工具场景评测为建议方案而非实测。
- **配图**：对照[图片登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/chatglm23/backbone.svg)，图中输入、模型、下一 token 和三代按需工具返回的流程与配置、提示说明一致；明确非完整结构并注明来源、CC BY 4.0。Chromium 打开本地正文后滚动并确认图片解码成功、替代文本存在，截图检查中文与连线。
- **社区**：沿用[2026-10-28 阅读记录](chatglm23-source-review-20261028.md)，元图的[《ChatGLM、ChatGLM2、ChatGLM3 模型架构对比》](https://zhuanlan.zhihu.com/p/665531989)当时 100 赞同、248 收藏。其 4608 维 QKV 投影对应 32×128 + 2×128×2，与官方配置一致；不将其对结构一致的概括扩大为训练、权重与行为一致。本次未重新读取或核对互动量。

- **评测数字补充复核（2026-10-29）**：[官方仓库评测结果](https://github.com/zai-org/ChatGLM3#评测结果)列 ChatGLM3-6B-Base 的 MMLU 61.4、C-Eval 69.0，说明选择题采用 0-shot、GSM8K/MATH 采用 0-shot CoT、BBH 为 3-shot。LongBench 表的 ChatGLM2-6B-32K／ChatGLM3-6B-32K 平均分别为 41.5／50.2，单文档 QA 为 37.6／45.8，多文档 QA 为 34.7／46.1。模型版本、数据集及数字均与正文一致；该仓库未在表中详细给出全部长文本评测参数。
