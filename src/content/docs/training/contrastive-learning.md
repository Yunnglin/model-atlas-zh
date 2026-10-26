---
title: 对比学习
atlas:
  id: contrastive-learning
  kind: method
  modality: shared
  purpose: 学习哪些表示应接近或远离
  summary: 理解正负配对、批内负例及其在图文和语音中的不同用法。
  question: 不给每张图片一个固定类别，还能学什么？
  sources:
    - clip-paper
    - wav2vec-paper
  aliases:
    - contrastive learning
    - InfoNCE
    - 正负样本
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

给模型两类信息：哪些表示应该对应，哪些不应该轻易混在一起。训练提高正确配对的相似程度，相对降低其他候选的得分。它关注的是一组候选之间的区分。

## 跟着例子走

[CLIP](/cv/clip/)的一批图文里，猫图与它的描述是正配对，其他描述可成为负配对。模型需要同时辨别“猫”“黑猫”“红色杯子”等内容，而不是只把每个向量随意拉得更长。

一张图也可能对应多种正确描述。语义相同的样本若被当成负例，会产生不合理的训练压力，因此配对质量、重复数据和负例构造很重要。

## 与其他目标比较

图文对比学习不直接教模型生成完整回答。[LLaVA](/omni/llava/)还要连接语言生成与指令训练。[wav2vec 2.0](/audio/wav2vec2/)把对比目标用在声音的量化表示上，候选与监督含义又不同。

## 排错与面试

检索结果只匹配背景颜色时，构造对象相同颜色不同、颜色相同对象不同的对照。训练损失下降而检索无改善，要检查重复配对、负例和测试分布，而非只调学习率。

**相似度是正确概率吗？** 通常不能直接当作校准概率，候选集和分数归一化方式都会影响解释。

## 参考资料

- [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020)
- [wav2vec 2.0](https://arxiv.org/abs/2006.11477)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
