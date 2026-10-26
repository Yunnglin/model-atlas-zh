---
title: BERT
atlas:
  id: bert
  kind: model
  modality: nlp
  aliases: []
  purpose: 结合两边的上下文理解文字
  summary: 用双向上下文为文字生成表示，适合分类、抽取和匹配等任务。
  question: 为什么 BERT 常用于理解任务？
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
  sources:
    - bert-paper
  year: 2018
  featured: true
---

## 先看一个问题

为什么 BERT 常用于理解任务？

## 用大白话理解

可以把 BERT 看成一个“先通读，再理解”的文字处理器。它用 Transformer 编码器，让一句话中每个位置都能参考两边的内容。预训练先学出通用的数字表示；做分类、抽取等具体任务时，再接任务输出层并用标注样本微调。

## 跟着例子走一遍

判断“这家店服务不错”是正面还是负面，可以把整句表示交给分类层。做实体抽取则对每个位置进行判断。

## 和相近概念比一比

原始 BERT 重点学习双向的输入表示；GPT-2 通过限制可见范围学习续写。它们共享不少组件，但训练目标和信息可见范围不同。

## 什么时候要小心

BERT 不是 GPT 和 T5 的共同祖先。它们共享 Transformer 思想，但结构和预训练目标不同；图中应分别说明采用和对比关系。

## 学习与面试

先不看正文，用自己的话回答开头的问题，并举一个例子。

**继续追问：** 情感分类和人名抽取分别需要对整句话还是每个位置做判断？

## 参考资料

- [BERT](https://arxiv.org/abs/1810.04805)

资料核对：2026-10-26。模型版本与官方说明可能更新；本文保留已说明的适用范围。
