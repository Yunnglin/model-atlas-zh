---
title: CLIP
atlas:
  id: clip
  kind: model
  modality: cv
  aliases:
    - 图文对齐
    - 对比学习
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

## 先看一个问题

图片和句子怎样能直接比较？

## 用大白话理解

给图片和文字各安排一个处理器，把它们分别变成可比较的一串数字。训练时，同一对图片和说明应该更接近，不配对的应该更远。这种“拉近正确搭配、区分错误搭配”的做法叫对比学习。原始 CLIP 比较过 ResNet、ViT 等不同图像处理结构。

## 跟着例子走一遍

要识别猫和狗，可以把图片与“猫的照片”“狗的照片”两段文字比较，而不是重新训练一个专用分类输出层。

## 和相近概念比一比

CLIP 的原始任务重点是图文匹配，不会像聊天模型那样直接写长回答；LLaVA 等系统还需要把视觉信息接给能生成文字的语言模型。

## 什么时候要小心

相似度不是经过校准的正确概率，也不等于细粒度关系理解。两个对象出现但关系相反时，仍需要专门评测。

## 学习与面试

先不看正文，用自己的话回答开头的问题，并举一个例子。

**继续追问：** 为什么把“猫的照片”和“狗的照片”写出来，就能尝试给图片分类？

## 参考资料

- [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020)

资料核对：2026-10-26。模型版本与官方说明可能更新；本文保留已说明的适用范围。
