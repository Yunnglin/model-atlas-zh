---
title: Llama 3.1
atlas:
  id: llama
  modality: nlp
  year: 2024
  purpose: 学习开放权重语言模型的完整流程
  summary: 以 Llama 3.1 的公开资料理解因果语言模型、后训练和部署取舍。
  question: 结构相近的模型，为什么回答体验差很多？
  aliases:
    - Llama
    - Llama 3
    - Llama 3.1
    - 开放权重
  sources:
    - llama-paper
    - llama-card
  featured: true
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

一个能在自己环境里部署的通用语言模型，如何从续写器变成助手？Llama 3.1 适合把预训练、后训练、上下文和推理开销连起来学习。本页限定 3.1 文本模型，不把后续家族版本的结构并进来。

## 结构与数据流

它沿用因果 Transformer 语言建模路线，逐步生成 token。官方模型卡说明 3.1 使用 GQA，也就是多个查询头共享部分键和值。直观地说，不必给每个查询头各存一套完整历史，从而减轻生成时的缓存开销。

长上下文仍有代价：[KV Cache](/foundations/kv-cache/)占显存，读入长提示也要计算。模型能接收长材料，并不保证材料每个位置都能被同样准确地利用。

## 数据与训练

先用大量文本做下一 token 预训练，再用指令示范和偏好等后训练步骤调整行为。Base 与 Instruct 是不同交付：前者方便研究或继续适配，后者更适合直接用对话模板提问。应按具体模型卡确认训练与许可条件。

[LoRA](/training/lora/)是适配参数的方法，不是 Llama 独有的训练目标；采用它也不能跳过数据去重、标签核对和独立验证。

## 评测怎么看

分别测知识、推理、代码、指令遵循和目标语言。部署还要记录精度、量化方式、提示长度、首 token 延迟与吞吐。公开基准的能力变化和自己服务的速度变化，来自不同实验。

## 应用与错例

本地助手反复续写用户的话，先检查是不是拿 Base 当 Instruct 用、对话模板是否匹配、停止符是否正确。量化后专名错误增加，应在固定样本上对照原精度结果，再决定是否适配。任务案例见[资料问答](/cases/document-qa/)。

## 比较与面试追问

[GPT-2](/nlp/gpt/)适合理解因果生成的基本机制；Llama 3.1 还能学习现代数据与后训练工程。[Qwen3](/nlp/qwen3/)则可进一步比较 Dense、MoE 与思考模式。

**开放权重意味着完整训练数据和配方都公开吗？** 不意味着；权重、训练代码、数据与使用许可要分别核对。

**为什么不能只按总参数估计显存？** 权重精度、缓存长度、批量与运行时中间量也要计入。

## 参考资料

- [The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783)
- [Llama 3.1 官方模型卡](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
