# Qwen3-ASR 流式设置与实现补充复核

2026-10-29 定向对照 [Qwen3-ASR 技术报告第 4.5 节、表 8](https://arxiv.org/html/2601.21337)与[官方推理实现的固定版本](https://github.com/QwenLM/Qwen3-ASR/blob/7c6daf77a2421100f5fb066495372c00129d39ff/qwen_asr/inference/qwen3_asr.py)，检查流式数字、代码处理流程与正文一致性。未运行模型，也未重新检查正文其他部分。

- 论文比较使用 2 秒分块、5 token fallback 和最后四块不固定；1.7B 的 Fleurs-en 离线／流式数值为 3.35／4.02，Fleurs-zh 为 2.41／2.84，正文所报数值与表 8 一致。
- 代码 `streaming_transcribe` 在收到每一完整分块后，把全部累计音频重新传入模型；它根据已有文本生成前缀，并处理输出回退。`init_streaming_state` 默认 `unfixed_chunk_num=2`、`unfixed_token_num=5`、`chunk_size_sec=2.0`；代码中前者用于控制初始块不带旧文本前缀，并非必然等同于论文最后四块的表述。正文将重复解释改为实现流程及计算代价说明，没有将当前代码默认值当作论文评测配置。
- 模型卡中的 AuT 约 300M／180M 规模、采样特征和 20 分钟条件仍按报告描述；本次未重新验证所有训练及其他评测数字、知乎资料或配图。
