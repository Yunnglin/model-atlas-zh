---
title: 资料问答：回答如何带上证据
atlas:
  id: document-qa
  kind: case
  modality: nlp
  purpose: 从问答错例区分检索与生成问题
  question: 助手答错制度时，先改检索还是先训练？
  summary: 从问答错例区分检索与生成问题，按六个阶段记录复现条件与改进依据。
  sources:
    - rag-paper
    - ml-rules
    - llama-paper
  caseStages:
    - stage: 数据
      description: 按来源和生效版本整理文档，保留原段落。
      artifact: document-manifest.json
      nodes:
        - rag
        - data-quality
    - stage: 训练
      description: 先建立冻结基线，只有证据支持时再进行检索或生成适配。
      artifact: adaptation-plan.md
      nodes:
        - sft
        - lora
    - stage: 评测
      description: 分开评估召回、引用与回答正确性。
      artifact: per-question-results.jsonl
      nodes:
        - llm-benchmarks
        - evaluation-protocol
    - stage: 应用
      description: 记录每次请求真正送入的证据与配置。
      artifact: request-evidence.jsonl
      nodes:
        - llama
        - qwen3
    - stage: 错例分析
      description: 区分解析丢失、检索遗漏、上下文截断和生成失真。
      artifact: error-categories.csv
      nodes:
        - failure-analysis
    - stage: 数据改进
      description: 从开发错例产生改进，独立文档继续用于回归。
      artifact: regression-manifest.json
      nodes:
        - data-quality
  aliases: []
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 场景与范围

用户问“新版差旅制度允许怎样报销”，助手却引用了旧规定。这个案例提供复现实验设计，本站没有运行模型或训练。工具入口是 [RAG](/applications/rag/)、对应模型官方实现，以及固定协议的评测脚本；下面的文件名表示应保留的产物，不是本站已有运行结果。

## 数据

收集文档、发布日期、生效范围和原段落；整理可回答、无答案、歧义与版本冲突的问题。按文档或来源划分训练/开发与独立测试，避免同段落改写后泄漏。产物：文档清单、划分和人工证据。

## 训练

先跑固定检索与模型的未适配基线。检索没找到正确段落，考虑解析、切分、重排或检索适配；证据已给足但回答格式持续错误，再比较 SFT/LoRA。记录所改配置、数据和模型版本。

## 评测

逐题保留召回段落、答案、引用和评分。分别算证据召回、回答正确性、引用支持度与结构有效性；“找不到答案”也要测是否恰当处理。开发集选择配置后再运行独立测试。

## 应用

保存真正进入模型的段落与顺序，而不只保存检索库里有什么。记录文档版本、提示、模板、采样和答案上限。可从 [Llama 3.1](/nlp/llama/)或 [Qwen3](/nlp/qwen3/)官方模型卡选择固定版本。

## 错例分析

旧制度回答先排除元数据过滤错误，再检查新文档是否被解析、召回与保留。若新证据已在输入里，核对时间推理和生成。不同原因分别进入 error-categories.csv。

## 数据改进

只从开发池增加版本冲突、否定与跨段证据样例。用独立文档检查改进，同时确认普通问题、无答案问题与延迟有没有退化。记录前后逐题差异，不用一条成功回答宣布完成。

## 参考资料

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [Rules of Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml)
- [The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
