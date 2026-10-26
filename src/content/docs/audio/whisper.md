---
title: Whisper
atlas:
  id: whisper
  kind: model
  modality: audio
  aliases:
    - ASR
    - 语音识别
  summary: 把声音转换为文字，也能按指定任务处理语言识别等输出。
  question: 声音怎样一步步变成文字？
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
  sources:
    - whisper-paper
  year: 2022
  featured: true
---

## 先看一个问题

声音怎样一步步变成文字？

## 用大白话理解

先把声音随时间、频率变化的情况转换成一张可计算的“声音图”，也就是 log-Mel 频谱。编码器读这张图，解码器一边参考声音，一边接着已写出的内容生成下一个文字小片段。模型还使用一些特殊片段表示任务等信息。原论文利用大规模、质量不完全一致的音频与文本配对来训练，这叫弱监督。

## 跟着例子走一遍

同一段声音，可以指定任务做原语言转写；语音翻译能力要按模型支持的方向和版本核对，不能假设任意语言互译。

## 和相近概念比一比

Whisper 是语音识别等任务的模型；完整语音助手还需要对话、语音合成和交互控制。把录音分段调用 Whisper，也不自动等于模型原生支持实时双向对话。

## 什么时候要小心

Whisper 不是原生的全双工对话系统。实时产品通常还需分段、活动检测、增量结果处理和延迟控制；不能把分段调用直接等同于原生流式模型。

## 学习与面试

先不看正文，用自己的话回答开头的问题，并举一个例子。

**继续追问：** 一个词刚好落在两段录音的边界，识别漏字后你会先检查模型还是切段？

## 参考资料

- [Robust Speech Recognition via Large-Scale Weak Supervision](https://arxiv.org/abs/2212.04356)

资料核对：2026-10-26。模型版本与官方说明可能更新；本文保留已说明的适用范围。
