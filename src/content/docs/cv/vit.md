---
title: ViT
atlas:
  id: vit
  kind: model
  modality: cv
  aliases:
    - 视觉Transformer
    - 图像块
  summary: 把图像切成小块，像处理序列一样处理这些图像块。
  question: 图像没有单词，Transformer 怎么读？
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
  sources:
    - vit-paper
  year: 2020
  featured: true
---

## 先看一个问题

图像没有单词，Transformer 怎么读？

## 用大白话理解

把图片切成很多小方块，再把每块的内容转换成一串数字，像排列文字片段一样送进 Transformer。还要告诉模型每块原来在哪里，否则会丢掉位置线索。模型通过注意力交换各块的信息。原始 ViT 主要研究的是图片分类。

## 跟着例子走一遍

一张图片中的车轮和车身可能相隔较远。注意力让不同图像块的表示交换信息，最终用于分类。

## 和相近概念比一比

ViT 是处理图像的结构；CLIP 是把图像与文字放在一起学习的方案，图像部分可以采用 ViT，也可以采用其他结构。

## 什么时候要小心

把图像切成块不会自动得到视觉问答能力。视觉理解任务、训练数据规模与输出头仍需分别设计。

## 学习与面试

先不看正文，用自己的话回答开头的问题，并举一个例子。

**继续追问：** 如果打乱图像块却不给位置信息，模型会缺少什么？

## 参考资料

- [An Image is Worth 16x16 Words](https://arxiv.org/abs/2010.11929)

资料核对：2026-10-26。模型版本与官方说明可能更新；本文保留已说明的适用范围。
