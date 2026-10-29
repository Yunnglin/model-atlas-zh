# Qwen3-Next 长上下文预算与扩展配置复核（2026-10-29）

对象为 Qwen3-Next-80B-A3B-Instruct。对照[官方模型卡的长文本说明](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct#processing-ultra-long-texts)：原生上下文 262,144 token；官方示例以 `original_max_position_embeddings=262144` 和 YaRN `factor=4`，在支持的推理框架设置最大长度 1,010,000。上下文预算包含输入和输出，正文举 250,000 输入时剩余 12,144 的算术例子，并提醒模板也占位置。

对照同卡的模型结构：48 层按 12 组各含 3 个 Gated DeltaNet 层和 1 个 Gated Attention 层，后者保留 KV 缓存。YaRN 是位置编码扩展配置，不会自动消除缓存或压缩提示。正文新增的预算为教学算术，不是模型实测；未运行服务，也未重新检查知乎文章和图示。
