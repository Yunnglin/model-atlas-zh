---
title: Qwen3-Next
atlas:
  id: qwen-next
  modality: nlp
  year: 2025
  featured: false
  aliases:
    - Gated DeltaNet
    - 混合注意力
  purpose: 理解混合注意力与稀疏专家
  summary: 区分 Gated DeltaNet、门控注意力、MoE 与 MTP 的职责。
  question: 长文本成本为何不只取决于参数量？
  sources:
    - qwen-next-card
    - qwen38-code
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

历史越来越长，每生成一个 token 都查全部历史会越来越贵。Qwen3-Next 研究怎样兼顾成本和信息读取。80B-A3B 分别描述总参数与每步激活参数，不是只有 3B 权重要存储。[系列位置](/nlp/qwen/)。

## 结构与数据流

核心是**混合注意力**：组合 Gated DeltaNet 与 Gated Attention。前者可以粗略理解为持续更新压缩记忆，后者保留直接查阅历史的能力。压缩怎样影响细节保留，需要具体任务验证。

[MoE](/foundations/moe/)让每个 token 只调用部分专家，与处理历史的注意力不同。多 token 预测 MTP 增加预测后续位置的训练目标，也能支持推理加速，但依赖框架实现，不是所有运行方式都会自动启用。

## 数据与训练

Base 学习基础知识与生成；后训练版本影响指令和思考行为。复现应用要固定模型 ID、模板与框架。模型卡指出部分实现不普遍支持 MTP，不同运行方式的速度差不能全算在架构上。

例如总结长手册，先定位章节，再基于证据回答，能帮助区分“没找到”与“找到但推错”。

## 评测怎么看

同时测长文定位、跨段推理、首 token 延迟、生成速度与显存。控制输入长度、批量、精度和硬件。短问答速度不证明长上下文能力，单个检索题也不证明能理解整本书。

## 应用与错例

远处信息丢失，先排除截断与位置配置，再改变证据距离和干扰数量测试。局部正确、跨段组合错误时，补关系推理样本，而不只是继续拉长输入。保留旧错例，并用未见过的同类样本回归。

## 比较与面试追问

**线性注意力与 MoE 能互相替代吗？** 前者处理历史，后者分配专家计算，不是同一层问题。

**Next 与 3.5 是同一个模型吗？** [3.5 → 3.8](/omni/qwen38/)还涉及原生多模态及后续训练，结构相关不能证明权重、数据相同。

## 参考资料

- [Qwen3-Next-80B-A3B-Instruct 官方模型卡](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct)
- [Qwen3.5、3.6、3.8 官方发布记录](https://github.com/QwenLM/Qwen3.8)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
