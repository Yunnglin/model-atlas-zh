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

## 从字符到编号

用一个很小的例子理解子词合并：假设开始时把 `abab` 切成 `a · b · a · b`，分词器的规则允许把相邻的 `a` 和 `b` 合并为 `ab`，于是得到 `ab · ab`。再假设词表给 `ab` 分配编号 42，输入模型的就是 `42, 42`。图中的切分和编号只是为了说明过程；真实分词器有自己的词表、合并规则和文本预处理。

![分词示意：abab 切成两个 ab，词表分别映射为编号 42，再由模型读取对应向量。](/figures/foundations/tokenization.svg)

以 BPE 为例，训练分词器时会根据语料中常见的相邻片段，逐步建立合并规则与词表。训练好的 tokenizer 遇到新文字时按既定规则切分，再把片段映射为编号；这与训练语言模型预测下一个 token 是两个不同过程。真实流水线还可能包含文本规范化和预切分，具体行为取决于所用 tokenizer。[Hugging Face 文档](https://huggingface.co/docs/tokenizers/components)介绍了这些组件。

## 为什么聊天模板也占长度

假设用户输入只有“你好”，实际送入模型的内容还可能包含系统提示、角色分隔标记和对话历史。长度预算需要计算整个模板化输入，以及给模型回答预留的 token。用同一段对话比较两个模型时，各自词表和模板可能不同，得到的 token 数和成本也可能不同。

例如一个服务限制输入与输出合计 8,000 token；模板化输入占 6,000 token 时，理论上还剩 2,000 token 供输出。具体服务可能分别设定输入、输出上限，长对话通常还需要截断或整理历史。

## 与模型怎样关联

[GPT-2](/nlp/gpt/)、[Llama](/nlp/llama/)与 [Qwen3](/nlp/qwen3/)都有自己的词表和模板。相同句子在不同模型里长度不同，词表编号也不能直接互换。声音码本和图像 patch 也常叫 token，但表示的内容与生成方式不同。

## 排错与面试

输出出现乱码、重复角色或从用户问题开始续写，检查 tokenizer、模型权重、特殊符号与模板是否配套，再看数据清洗。比较困惑度时，分词粒度不同会影响数值，不能直接按每 token 损失排名。

**为什么新增词表后不一定立即认识新词？** 新编号对应的表示和使用方式还需要训练；加入词表与学到含义是两件事。

## 参考资料

- [Hugging Face Tokenizers: Components](https://huggingface.co/docs/tokenizers/components)
- [OpenAI GPT-2 官方实现](https://github.com/openai/gpt-2)

资料核对：2026-10-28。
