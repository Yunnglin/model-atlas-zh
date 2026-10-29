# Whisper 长音频解码核查

2026-10-28 对照 [Whisper 官方转写实现](https://github.com/openai/whisper/blob/main/whisper/transcribe.py)的参数说明与 `decode_with_fallback`：`condition_on_previous_text` 为后续窗口提供先前输出；注释说明关闭可能降低重复循环，但窗口间连贯性也可能受影响。默认实现使用压缩比例和平均对数概率触发温度回退，并结合 no-speech 概率判断静音。代码还在部分高温解码后重置前文提示，不能描述为所有历史文字必然一直传递。

[论文](https://arxiv.org/html/2212.04356)附录表 9 的 large-v2 在 LibriSpeech test-clean 和 CHiME-6 的 2.5%、24.9% 对应 beam search 与 temperature fallback；两者是不同数据集，不作为单独噪声变量对照。本次未运行长音频，中文参考的既有阅读见 [语音补充审校](speech-followup.md)。
