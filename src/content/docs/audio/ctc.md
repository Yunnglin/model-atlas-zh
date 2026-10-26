---
title: CTC：声音与文字怎样对齐
atlas:
  id: ctc
  kind: method
  modality: audio
  purpose: 从未逐帧对齐的序列学习文字
  summary: 用空白符和路径合并理解识别训练的对齐问题。
  question: 一秒声音有很多帧，但文字只有几个字，怎么对应？
  sources:
    - ctc-paper
    - wav2vec-paper
  aliases:
    - CTC
    - Connectionist Temporal Classification
    - blank
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

声音帧数与文字长度不同，也没有逐帧告诉模型每个字何时开始。CTC 允许许多帧级输出路径都对应同一句文字，训练时把这些路径的概率汇总起来。

## 跟着例子走

帧级结果可能是“空白、开、开、空白、灯”。CTC 先合并连续重复标签，再移除空白，得到“开灯”。空白不等于文本中的空格；它允许某些时间帧不输出新文字。

真正的连续重复字需要能在路径中区分，所以合并重复与移除空白的顺序很重要。训练的目标是正确文字序列的总概率，而不只是指定某一条人工帧路径。

## 与模型怎样关联

[wav2vec 2.0](/audio/wav2vec2/)可以在表示预训练后用 CTC 适配识别；[Conformer](/audio/conformer/)可用作编码骨干。CTC 是输出目标与对齐机制，不是一种只能配某个骨干的模型。

[Whisper](/audio/whisper/)使用文字解码器逐步生成，不能把它的原始训练直接写成 CTC。

## 评测与排错

用 WER／CER 评估最终文本，并注明贪心或束搜索、是否有外部语言模型。连续重复字、静音和切段边缘错误，是检查输出路径、后处理与输入组织的好切片。

**CTC 自身保证理解整句意思吗？** 不保证，实际上下文能力还依赖编码器、训练与解码方式。

## 参考资料

- [Connectionist Temporal Classification: Labelling Unsegmented Sequence Data with Recurrent Neural Networks](https://www.cs.toronto.edu/~graves/icml_2006.pdf)
- [wav2vec 2.0](https://arxiv.org/abs/2006.11477)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
