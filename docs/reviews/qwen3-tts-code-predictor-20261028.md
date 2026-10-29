# Qwen3-TTS 码本预测核查

2026-10-28 对照 [Qwen3-TTS 技术报告 v1](https://arxiv.org/html/2601.15621v1)第 3.1 节：12Hz 路线由骨干预测第 0 码本，MTP 模块生成剩余码本。进一步查看 [官方代码 d8146d5](https://github.com/QwenLM/Qwen3-TTS/blob/d8146d5/qwen_tts/core/models/modeling_qwen3_tts.py)：生成时调用 `code_predictor.generate`，最大新 token 数为 `num_code_groups - 1`；预测头按生成步骤选择。正文明确区分较大骨干的帧级调用与较小预测器的码本序列生成，未把后者误写成全部并行。

既有 [Qwen 音频审校](qwen-audio-omni-audit.md)记录论文与社区来源；本轮未运行模型、测量性能或重读知乎文章。
