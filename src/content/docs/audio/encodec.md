---
title: EnCodec
atlas:
  id: encodec
  kind: model
  modality: audio
  aliases:
    - 音频token
    - 神经音频编解码器
  purpose: 把声音压缩成离散编码
  summary: 把连续声音压缩成较紧凑的表示，再重建为声音。
  question: 语音生成为什么常提到“音频 token”？
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
  sources:
    - encodec-paper
  year: 2022
---

## 先看一个问题

语音生成为什么常提到“音频 token”？

## 用大白话理解

可以把 EnCodec 想成一个学习出来的声音压缩器：先把声音浓缩成一组数字，再从有限的“编码字典”里挑选接近的条目，最后根据这些条目的编号重建声音。挑条目的过程叫量化，字典叫码本。后续生成模型可以学习这些编号组成的序列；EnCodec 本身还不是完整语音助手。

## 跟着例子走一遍

一段录音不必一直用每秒数万次采样的原始波形表示，也可以转换成更低速率的离散编码序列。

## 和相近概念比一比

音频 token 记录声音的压缩编码；文字 token 记录文字片段。声音里还有音色、语调等信息，所以不能把两者直接当作同一种内容。

## 什么时候要小心

压缩比、音质和延迟存在取舍。EnCodec 的编码器并不能因为出现在这张地图上，就被当成 Transformer 编码器。

## 学习与面试

先不看正文，用自己的话回答开头的问题，并举一个例子。

**继续追问：** 如果声音已经变成编码编号，为什么仍然需要解码器才能听到？

## 参考资料

- [High Fidelity Neural Audio Compression](https://arxiv.org/abs/2210.13438)

资料核对：2026-10-26。模型版本与官方说明可能更新；本文保留已说明的适用范围。
