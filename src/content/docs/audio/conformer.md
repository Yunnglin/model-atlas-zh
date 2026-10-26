---
title: Conformer
atlas:
  id: conformer
  modality: audio
  year: 2020
  purpose: 结合卷积与注意力识别声音
  summary: Conformer 用卷积处理局部声音变化，用注意力整合较长范围的上下文。
  question: 声音模型为什么既要卷积，又要注意力？
  aliases:
    - 卷积增强 Transformer
    - ASR encoder
  sources:
    - conformer-paper
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

识别一句话既要听清短时间的发音变化，也要联系整句话。Conformer 把擅长处理局部模式的卷积与能联系远处位置的注意力结合起来，主要用于学习声音表示。

## 结构与数据流

输入声音特征经过下采样和多层 Conformer 模块。模块组合前馈网络、注意力、卷积与残差等处理：局部发音线索和跨时间上下文都能进入输出表示。

Conformer 主要说明编码器怎样组织，不自动规定最后用什么方式生成文字。识别系统还可接 [CTC](/audio/ctc/)或其他输出组件；整套系统是否流式，要看上下文限制和解码配置。

## 数据与训练

监督识别训练使用音频与转写，损失由具体识别系统决定。训练时能看全句，部署时只能看已到达音频，这两种条件不同；不能把离线模型直接按小块调用就当成等价的流式系统。

如果任务要求实时，训练和评测都应说明可见的未来上下文、分块策略及端点检测设置。

## 评测怎么看

[WER／CER](/evaluation/wer/)衡量识别内容；延迟还要区分声音输入等待、模型计算、解码和端点等待。准确率与实时率都不错，也不一定代表用户能及时看到最终文字。

## 应用与错例

句尾最后一个字经常消失，先检查端点检测是不是提早结束；分块边缘错误集中，则检查上下文拼接与缓存。对照完整录音和实际送入模型的片段，确定输入是否一致，再决定补句尾样例或改训练配置。

## 比较与面试追问

[wav2vec 2.0](/audio/wav2vec2/)与 [HuBERT](/audio/hubert/)更适合学习自监督目标；Conformer 适合看声音骨干的局部与全局设计。[Whisper](/audio/whisper/)则给出编码器与文字解码器的完整路线。

**有卷积就不能用 Transformer 了吗？** 可以组合，模块负责不同的信息处理。

**为什么不能只报模型推理耗时？** 用户等待还包含音频积累和结果确认等环节。

## 参考资料

- [Conformer: Convolution-augmented Transformer for Speech Recognition](https://arxiv.org/abs/2005.08100)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
