---
title: 分词与 Token
atlas:
  id: tokenization
  kind: method
  modality: shared
  purpose: 把文字变成可计算的片段
  summary: 理解 token、词表、训练与推理模板，以及长度预算。
  question: 一个汉字一定等于一个 token 吗？
  sources:
    - tokenizer-docs
    - gpt-code
  aliases:
    - tokenizer
    - BPE
    - SentencePiece
    - 词表
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

模型不直接读取屏幕上的字形，而是读取编号序列。Tokenizer 把文字切成片段，再查词表转换成编号。片段可能是词、子词、汉字的一部分或其他编码单元，所以不能把字数直接当 token 数。

## 跟着例子走

“研究 Transformer”经过不同分词器，可能得到不同数量的片段。程序还会加入角色、结束标记等特殊 token；聊天模板也是实际输入的一部分。估算上下文和费用时，应使用对应模型的分词器。

## 与模型怎样关联

[GPT-2](/nlp/gpt/)、[Llama](/nlp/llama/)与 [Qwen3](/nlp/qwen3/)都有自己的词表和模板。相同句子在不同模型里长度不同，词表编号也不能直接互换。声音码本和图像 patch 也常叫 token，但表示的内容与生成方式不同。

## 排错与面试

输出出现乱码、重复角色或从用户问题开始续写，检查 tokenizer、模型权重、特殊符号与模板是否配套，再看数据清洗。比较困惑度时，分词粒度不同会影响数值，不能直接按每 token 损失排名。

**为什么新增词表后不一定立即认识新词？** 新编号对应的表示和使用方式还需要训练；加入词表与学到含义是两件事。

## 参考资料

- [Hugging Face Tokenizers: Components](https://huggingface.co/docs/tokenizers/components)
- [OpenAI GPT-2 官方实现](https://github.com/openai/gpt-2)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
