# Whisper、Conformer、wav2vec 2.0 复核

本次在已有正文和配图上复核。本审校者此前参与过三篇模型卡的审校（见 `audio-model-cards-final.md`），所以这不是完全独立于此前工作的一次审查。未运行模型或复现论文实验。

- [Whisper 论文](https://arxiv.org/html/2212.04356)与[官方实现](https://github.com/openai/whisper)：核对 encoder–decoder、30 秒片段、68 万小时弱监督数据、11.7 万小时非英语音频及 12.5 万小时语音翻译数据；正文已提示统计口径及英语翻译、`.en` 和 turbo 的区别。查看官方架构原图，图示频谱、编码器、交叉注意力与多任务 token，文件附有许可证。不同版本、解码和标准化需要分别报告。
- [Conformer 论文](https://arxiv.org/html/2005.08100)：核对 FFN 半残差、自注意力、卷积、FFN 次序，原论文 Transducer 系统和 LibriSpeech 大模型 WER；2.1/4.3 为不使用外部语言模型、1.9/3.9 为使用外部语言模型。原创图明确编码器外的识别系统，图中文字说明 1/2 是残差缩放。
- [wav2vec 2.0 论文](https://arxiv.org/html/2006.11477)与 [fairseq 实现](https://github.com/facebookresearch/fairseq/tree/main/examples/wav2vec)：核对遮盖连续表示、量化目标和同句负样本的对比任务、CTC 微调及卷积编码器冻结。论文 10 分钟标注 / LV-60k 预训练 / Transformer 语言模型下的 test-clean/test-other 为 4.8/8.2，不用语言模型对应 40.2/38.7；两组不能不带解码条件比较。原创图区分预训练分支与微调阶段。
- 本轮未发现需要改动三篇正文或图的可证实错误；复核是对所列关键事实和图示的核查，不能等同证明全部描述无误。
