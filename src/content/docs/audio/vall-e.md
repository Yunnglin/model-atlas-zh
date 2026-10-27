---
title: VALL-E
atlas:
  id: vall-e
  modality: audio
  year: 2023
  purpose: 按文字和参考声音生成音频 token
  summary: 原始 VALL-E 把语音合成组织为条件音频编码序列建模。
  question: 语音能否像文字一样，通过预测 token 生成？
  aliases:
    - VALL-E
    - Vall-E
    - 神经编解码语言模型
    - 零样本TTS
  sources:
    - valle-paper
    - encodec-paper
  featured: true
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

给一段参考声音，再给一句新文字，能否生成相近说话人风格的语音？原始 VALL-E 用神经音频编解码器把声音变成编号，再学习根据条件生成这些编号。

**本页介绍论文原理，没有提供已核实的官方预训练权重下载入口，因此不作为可直接下载部署的开放模型推荐。** 第三方复现、官方论文和官方权重的公开范围要分开。

## 结构与数据流

参考录音经 [EnCodec](/audio/encodec/)产生声学 token，目标文字提供内容条件。模型先自回归预测一部分声学编码，再用非自回归部分补全其余码本，最后由编解码器还原波形。

这与 [Whisper](/audio/whisper/)的方向不同：Whisper 读声音写文字，VALL-E 参考文字和声音写出声音编码。文字内容、说话人风格与声学环境在条件里承担不同角色。

## 数据与训练

训练使用语音及对应文字，让模型学习文字与声学编码的条件关系。参考声音影响的不只有音色，也可能带入录音环境。零样本指不为该新说话人单独做参数微调，不意味着完全没有参考条件。

数据需要覆盖发音、说话方式和录音条件。模型代码、预训练权重与论文演示的公开范围要分别确认，不能把第三方复现当成官方同一套结果。

## 评测怎么看

内容可用转写错误率作辅助，音色可看说话人相似性，听感需盲听或人工评分。每个指标都有局限：识别器听得懂，不等于声音自然；音色相似也不等于文字念对。详见[语音质量](/evaluation/speech-quality/)。

## 应用与错例

生成语音复述了参考文本、漏念目标词或带入背景噪声时，保存参考音频、文本和生成配置，先检查条件拼接与音频编解码。按内容、音色、韵律、噪声分类，再用独立句子和说话人验证改进；案例见[语音生成](/cases/tts/)。

## 比较与面试追问

[F5-TTS](/audio/f5-tts/)采用连续声学表示上的流匹配路线，与离散编码序列建模不同。[EnCodec](/audio/encodec/)负责压缩重建，单独存在时并不会按一句文字生成新语音。

**非自回归部分能否证明整套系统没有生成依赖？** 不能，要区分各码本和各阶段。

**一段参考音色好，是否保证所有句子都好？** 不保证，文本长度、发音覆盖和录音条件都可能影响结果。

## 参考资料

- [Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers](https://arxiv.org/abs/2301.02111)
- [High Fidelity Neural Audio Compression](https://arxiv.org/abs/2210.13438)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
