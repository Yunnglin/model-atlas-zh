# 语音模型讲解与算例复核

核查日期：2026-10-28。对 wav2vec 2.0、HuBERT、Conformer 和 EnCodec 的结构及训练段落做定向阅读，补充解释机制的教学算例；本轮未运行模型或逐句核对四篇全文。

- [wav2vec 2.0](../../src/content/docs/audio/wav2vec2.md)：用正确目标与干扰项的相似度说明对比学习不是文字识别准确率；[原论文](https://arxiv.org/abs/2006.11477)实验使用 100 个干扰项，示例为教学构造。
- [HuBERT](../../src/content/docs/audio/hubert.md)：解释重新聚类后的编号属于新的标签体系，不能直接跨轮混用；[原论文](https://arxiv.org/abs/2106.07447)描述前一轮表示的聚类与后续训练。
- [Conformer](../../src/content/docs/audio/conformer.md)：以 10 毫秒帧移、四倍下采样和论文的 32 个卷积位置解释时间尺度；区分单层局部位置间隔、整个模型可见范围和流式延迟，依据[原论文](https://arxiv.org/abs/2005.08100)。
- [EnCodec](../../src/content/docs/audio/encodec.md)：比较 24 kHz 模型使用两本与八本码本时的索引数据量；这是不含头信息和熵编码的算术例子，帧率和码本规格依据[原论文](https://arxiv.org/abs/2210.13438)。
