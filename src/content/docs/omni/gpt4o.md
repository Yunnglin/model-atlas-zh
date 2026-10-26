---
title: GPT-4o
atlas:
  id: gpt4o
  modality: omni
  year: 2024
  purpose: 理解端到端语音视觉交互路线
  summary: 以 2024 年公开说明为例，比较端到端多模态与语音识别、语言模型、语音合成串联的路线。
  question: 直接处理声音，和先把声音转成文字有何区别？
  aliases:
    - GPT4o
    - GPT-4o
    - 原生多模态
  sources:
    - gpt4o-release
  featured: false
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 定位与公开范围

GPT-4o 是 OpenAI 在 2024 年介绍的端到端多模态模型，公开说明涉及文字、视觉与音频。它是闭源模型；本页介绍当代公开路线，不代表今天任一 API 都提供同样输入输出。

## 值得理解的思路

传统语音助手可用 ASR → 语言模型 → TTS 串联，语调等信息可能在转文字时丢失。端到端路线直接联合处理更多信号。公开说明并没有给出完整网络与训练数据，不能自行画成“已知参数的三模块架构”。

## 如何比较

把听懂、回答正确、声音自然和端到端延迟分别测；演示效果不等于业务保证。开放方案可对照 [Qwen-Omni](/omni/qwen-omni-family/)，识别和语音生成分别读 [ASR](/audio/qwen-asr/)与 [TTS](/audio/qwen-tts/)。

## 参考资料

- [Hello GPT-4o](https://openai.com/index/hello-gpt-4o/)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
