---
title: CLIP
atlas:
  id: clip
  kind: model
  modality: cv
  aliases:
    - 图文对齐
    - 对比学习
  purpose: 比较图片和文字
  summary: 让描述同一内容的图像和文字在表示空间里更接近。
  question: 图片和句子怎样能直接比较？
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
  sources:
    - clip-paper
  year: 2021
  featured: true
---

## 要解决什么问题

给一张图片，能否比较“猫”“狗”“汽车”哪段文字更匹配，而不用为每个新标签重训分类头？CLIP 学的是图片与文字的对应关系，常用于检索和开放词汇分类。

## 结构与数据流

图片编码器和文字编码器分别输出向量，投到可比较的空间，再计算相似度。原始 CLIP 比较过 ResNet 和 ViT 图像编码器，所以不能说所有 CLIP 都是纯 ViT。

例如把猫图片与“a photo of a cat”“a photo of a dog”比较，得分最高的描述作为候选。这个流程是在给定描述里匹配，没有逐个生成答案文字。

## 数据与训练

训练使用图文配对。在同一批数据里，正确配对要更接近，其他配对作为负例拉开，这就是[对比学习](/training/contrastive-learning/)。文字描述很宽泛、对应错误或重复数据过多，都会影响学到的关联。

同一张图可能对应多种正确说法；把语义相近的配对强行当负例，是理解对比学习局限的好例子。

## 评测怎么看

图文检索看正确目标在前几名，也就是 Recall@K；零样本分类还要固定标签描述模板和候选类别。向量相似度不是校准后的事实概率，不能说相似度 0.8 就有 80% 把握。详见[概率校准](/evaluation/calibration/)。

## 应用与错例

搜“红色杯子”却返回红色桌布时，检查对象与背景、颜色、否定词和多个物体的组合。补充构图接近但关键属性不同的难例，并把检索召回、重排和最终展示分开测。视觉问答案例见[看图问答](/cases/visual-qa/)。

## 比较与面试追问

[ViT](/cv/vit/)描述图像骨干，CLIP 描述图文表示与训练路线。[LLaVA](/omni/llava/)还连接语言模型来生成回答；使用 CLIP 视觉特征，不表示整个系统只做对比学习。

**CLIP 能直接讲解图片吗？** 原始匹配模型不能凭一个相似度模块生成完整解释。

**为什么只改提示模板也会影响分类成绩？** 候选文字的表达会改变文本向量与图像向量的匹配。

## 参考资料

- [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
