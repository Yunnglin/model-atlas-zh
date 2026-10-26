---
title: Whisper
atlas:
  id: whisper
  kind: model
  modality: audio
  aliases:
    - ASR
    - 语音识别
  purpose: 把声音转换成文字
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

先把声音随时间、频率变化的情况转换成一张可计算的“声音图”，也就是 log-Mel 频谱。[编码器与解码器](/foundations/encoder-decoder/)配合工作：编码器读这张图，解码器一边参考声音，一边接着已写出的内容[预测下一个文字片段](/foundations/next-token/)。模型还使用一些特殊片段表示任务等信息。原论文利用大规模、质量不完全一致的音频与文本配对来训练，这叫弱监督。

## 跟着例子走一遍

录音里说“打开客厅灯”，模型根据声音和已有输出，逐步写出对应文字。这里展示的是原语言转写；语音翻译能力要按模型支持的方向和版本核对。

## 里面怎么工作

> 声音图 → [编码器](/foundations/encoder-decoder/) → [解码器](/foundations/encoder-decoder/) → 文字

解码器在写出每一步时，既参考编码后的声音，也参考已经写出的内容。

## 怎样训练和评测

训练使用音频与文本配对，学习根据声音和已有文字预测下一片段。检查效果时，先固定文本处理规则，再用 [WER／CER](/evaluation/wer/) 等指标对照人工转写，并分别看噪声、专名等条件下的表现。

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
