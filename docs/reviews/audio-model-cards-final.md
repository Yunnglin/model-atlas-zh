# Whisper、wav2vec 2.0 与 Conformer 模型卡复核

核对日期：2026-10-28。本轮对照各篇模型卡、结构、训练与所列主要评测数字；不是逐项复现训练或独立运行模型，也不证明所有场景表现。

- **Whisper**：依据[论文](https://arxiv.org/html/2212.04356)第 2 节和[官方仓库](https://github.com/openai/whisper)，核对编码器—解码器、16 kHz、30 秒窗口和 68 万小时弱监督数据，并保留 11.7 万小时非英语与 12.5 万小时翻译数据的统计范围。补充官方仓库对 **turbo 未针对翻译任务训练**的说明；不能把原多语言 Whisper 的翻译能力直接套给 turbo。论文修订版 large-v2 与原始型号要分别标注。
- **wav2vec 2.0**：依据[论文](https://arxiv.org/html/2006.11477)第 4 节和表 1、附录表 9，补入 Base 12 层、8 头、约 95M 与 Large 24 层、16 头、约 317M；检查卷积、遮盖对比训练和 CTC 微调。10 分钟标签加 LV-60k 与 Transformer 语言模型时 test-clean / test-other 为 4.8% / 8.2%，不用语言模型则为 40.2% / 38.7%；这些数不能脱离额外无标注音频和解码设置比较。[base-960h 官方模型卡](https://huggingface.co/facebook/wav2vec2-base-960h)标注 Apache 2.0，仅代表所指权重。
- **Conformer**：依据[原论文](https://arxiv.org/html/2005.08100)表 1–2 和第 2–3 节，补入 S/M/L 编码器分别为 16、16、17 层；10.3M、30.7M、118.8M 是论文 Transducer 系统对应规格。前馈—注意力—卷积—前馈的顺序与 Transducer 训练描述吻合。Large 在 LibriSpeech test-clean / test-other 的 WER 无额外 LM 为 2.1% / 4.3%，外接 LM 为 1.9% / 3.9%，不推广为中文或流式识别表现。

各篇以原始论文或指定模型卡为基准；不同检查点、后续模型、许可、数据划分和解码配置均需分别核查。本轮内容完整性测试通过，不将通过自动检查等同全文无误。
