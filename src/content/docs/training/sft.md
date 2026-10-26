---
title: SFT · 示范学习
atlas:
  id: sft
  kind: method
  modality: shared
  aliases:
    - 监督微调
    - 指令微调
  purpose: 从问题和示范答案中学习
  summary: 给已有模型看“问题和示范答案”，让它学习怎样按要求回答。
  question: SFT 改变的是结构，还是学习材料？
  facets:
    - overview
    - training
    - application
  sources:
    - instruct-paper
  year: 2022
---

## 先看一个问题

SFT 改变的是结构，还是学习材料？

## 用大白话理解

给模型看“问题应该怎样回答”的示范，再让它练习模仿。常见的文字生成式 SFT 仍然做[下一 token 预测](/foundations/next-token/)，只是材料换成整理过的指令、对话和答案；通常重点对答案部分的预测错误计分。SFT 决定练什么，至于更新全部参数还是采用 [LoRA](/training/lora/)，是另一项选择。

## 跟着例子走一遍

基础模型会续写“请把下面内容总结成三点”，经过合适示范后，才更容易实际输出三点总结。

## 和相近概念比一比

预训练更多学习广泛的文字规律；SFT 用任务示范引导行为。LoRA 则控制如何更新参数，能和 SFT 同时使用。

## 什么时候要小心

答案风格与事实能力不完全一样。训练集格式、答案质量、覆盖范围，以及训练与推理的对话模板是否一致都需要检查。

## 学习与面试

先不看正文，用自己的话回答开头的问题，并举一个例子。

**继续追问：** SFT 训练样本很好看，但模型总把用户的问题也生成一遍，你会核对哪些设置？

## 参考资料

- [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)

资料核对：2026-10-26。模型版本与官方说明可能更新；本文保留已说明的适用范围。
