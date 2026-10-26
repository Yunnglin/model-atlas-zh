---
title: KV Cache 与注意力开销
atlas:
  id: kv-cache
  kind: method
  modality: shared
  purpose: 生成时重用历史注意力信息
  summary: 理解缓存、长上下文显存、GQA 和 MLA 各自改变什么。
  question: 为什么回答越长，缓存通常越大？
  sources:
    - kv-docs
    - llama-card
    - v3-paper
  aliases:
    - KV Cache
    - GQA
    - MLA
    - 缓存
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

模型每接着写一个 token，都需要参考前面的内容。KV Cache 保存历史位置在注意力里用到的键和值，下次生成时重用，减少重复计算。它保存的是中间表示，不是把旧答案原文复制一份就结束。

## 跟着例子走

模型已写出“今天会议”，下一步处理新 token 时，会用新的查询去匹配历史键，汇总历史值。旧位置的键和值通常可以复用；随着序列变长，需要保留的位置也会增加。

## 相关技术怎样区分

GQA 让多个查询头共享部分键值头，[Llama 3.1](/nlp/llama/)模型卡说明采用了这一设计。MLA 在 [DeepSeek-V3](/nlp/deepseek-v3/)里用更紧凑的潜在表示组织部分注意力缓存。量化改变数值精度；滑动窗口限制保留或可见范围。它们不是同一个开关。

## 评测和排错

分别记录读入提示的 prefill 和逐步生成的 decode；比较提示长度、批量、缓存精度、硬件和运行框架。服务显存不足时，权重之外还要检查并发请求的缓存总量。

**想深入：看常规缓存的粗略估算**

常规多层注意力中，缓存量与“层数 × 批量 × 序列长度 × KV 头数 × 每头维度 × 每元素字节”相关，还需同时保存 K 和 V。具体模型可能压缩、分页、共享或限制缓存，不能把这个估算当成所有架构的精确公式。

**开缓存会让答案本身更正确吗？** 缓存首先解决重复计算；正确性变化应核对实现、精度和位置处理。

## 参考资料

- [Hugging Face: How caching works](https://huggingface.co/docs/transformers/main/en/cache_explanation)
- [Llama 3.1 官方模型卡](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md)
- [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437v2)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
