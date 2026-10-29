---
title: 语音生成：漏读、音色与杂音分开查
atlas:
  id: tts
  kind: case
  modality: audio
  purpose: 连接文本、声学生成和听感评测
  question: 语音听着像，但漏念数字，如何改进？
  summary: 连接文本、声学生成和听感评测，按六个阶段记录复现条件与改进依据。
  sources:
    - f5-paper
    - f5-code
    - valle-paper
    - encodec-paper
  caseStages:
    - stage: 数据
      description: 保存目标文本、参考音频、转写和采样率。
      artifact: speech-manifest.json
      nodes:
        - f5-tts
        - data-quality
    - stage: 训练
      description: 先测试原始权重，必要时再用对齐材料适配。
      artifact: tts-baseline.json
      nodes:
        - diffusion-flow
    - stage: 评测
      description: 分别测内容、音色、听感和延迟。
      artifact: listening-and-content.jsonl
      nodes:
        - speech-quality
        - wer
    - stage: 应用
      description: 固定前处理、生成与声码器配置。
      artifact: tts-config.json
      nodes:
        - f5-tts
        - encodec
    - stage: 错例分析
      description: 区分参考条件、内容预测与波形还原问题。
      artifact: tts-errors.csv
      nodes:
        - failure-analysis
    - stage: 数据改进
      description: 补充开发池数字长句并用未见说话人回归。
      artifact: heldout-speakers.json
      nodes:
        - data-quality
  aliases: []
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 场景与范围

模型把“共计二百零三元”漏读一个字，声音却很像参考说话人。这里设计内容、音色与听感分开的复现流程，未运行训练或评测。参考材料使用可用于该实验的录音，工具可从 [F5-TTS 官方实现](https://github.com/SWivid/F5-TTS)进入。

## 数据

保存目标文本、参考片段及其转写、采样率与裁剪范围。覆盖数字、专名、长句、混合语言和录音噪声；按说话人和文本来源划分，保留独立句子。

## 训练

先固定原始权重、参考条件与采样配置形成基线。数据适配前检查转写是否对齐、文字清洗是否改了含义、参考片段是否完整。分别比较预处理改进与模型训练，避免混在一次改动里。

## 评测

内容用人工核对与 ASR 辅助错误率；音色看独立表示与听测；自然度做盲听。记录硬件、采样步数、首段延迟与完整生成时间，不能用 ASR 能听懂代替听感评价。

## 应用

保留文本前处理、参考条件、随机种子、声学模型与声码器标识。分句合成还要记录各段边界和拼接方式，方便复现句首句尾丢字。

## 错例分析

先听编解码器或声码器本身的还原结果，再听完整生成。漏字优先查文本与时序，杂音看声学特征及波形还原，音色变化看参考录音和条件。按原因标记，不把全部错误写成音质差。

## 数据改进

从开发池补充数字与长句难例，训练后用未见说话人和新文本验证，同时检查音色、听感和速度是否退步。对照结论必须来自整组样本，不只挑一段最好试听。

## 参考资料

- [F5-TTS: A Fairytaler that Fakes Fluent and Faithful Speech with Flow Matching](https://arxiv.org/abs/2410.06885)
- [F5-TTS 官方代码](https://github.com/SWivid/F5-TTS)
- [Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers](https://arxiv.org/abs/2301.02111)
- [High Fidelity Neural Audio Compression](https://arxiv.org/abs/2210.13438)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表已经实际运行并得到结果。
