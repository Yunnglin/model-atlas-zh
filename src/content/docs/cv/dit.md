---
title: DiT
atlas:
  id: dit
  kind: model
  modality: cv
  aliases: []
  summary: 在扩散生成过程中，用 Transformer 预测如何逐步去掉噪声。
  question: 图像生成中的 Transformer 和语言模型有什么不同？
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
  sources:
    - dit-paper
  year: 2022
---

## 先看一个问题

图像生成中的 Transformer 和语言模型有什么不同？

## 用大白话理解

生成图片可以练习“从一团噪声逐渐找回图像”。DiT 先在压缩后的图像表示上工作，把它分成小块，用 Transformer 根据当前噪声程度和给定条件估计如何去噪。这个压缩表示叫潜空间；它不是逐个猜文字片段。

## 跟着例子走一遍

从带噪图像表示开始，模型反复估计去噪方向，逐渐得到符合条件的图像。这里的每一步不等于生成一个文字 token。

## 和相近概念比一比

DiT 和 GPT 都可以用 Transformer，但 DiT 学去噪，GPT 学后续文字的概率。结构相近不代表训练目标或生成步骤相同。

## 什么时候要小心

原始 DiT 的主要实验是类别条件图像生成。不要把后来所有文生图系统的组件和成绩归到这篇论文上。

## 学习与面试

先不看正文，用自己的话回答开头的问题，并举一个例子。

**继续追问：** 为什么不能把 DiT 的一次去噪步骤理解为 GPT 生成一个词？

## 参考资料

- [Scalable Diffusion Models with Transformers](https://arxiv.org/abs/2212.09748)

资料核对：2026-10-26。模型版本与官方说明可能更新；本文保留已说明的适用范围。
