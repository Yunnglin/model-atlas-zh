---
title: Dense 与 MoE
atlas:
  id: moe
  kind: method
  modality: shared
  purpose: 区分全部参数与每步激活参数
  summary: 理解专家路由、容量、负载和部署成本。
  question: 激活参数少，为什么不代表模型很小？
  sources:
    - moe-paper
    - v3-paper
    - qwen3-paper
  aliases:
    - MoE
    - 混合专家
    - Dense
    - 专家路由
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

Dense 网络在相关层对每个 token 使用同一套稠密计算。稀疏 MoE 放入多组专家，路由器为当前 token 选择其中一部分。这样可以增加总容量，而不让每个 token 都经过所有专家。

专家常是网络中的前馈子模块，不是把几台完整聊天机器人投票拼在一起。它们的分工通过训练形成，不能未经验证就贴上“数学专家”“中文专家”的标签。

## 跟着例子走

假设一层有多个专家，每步只选择少数参与。计算量减少不代表其他权重消失：部署仍要存放或调入它们，还可能跨设备通信。这个教学例子不指定任何实际模型的专家数量。

## 训练与部署

路由若总选同几个专家，可能造成训练负载与设备利用率问题。不同方法用不同均衡策略。[DeepSeek-V3](/nlp/deepseek-v3/)和 [Qwen3](/nlp/qwen3/)都可作为具体报告阅读，但不能互相套配方。

## 评测与面试

能力与速度分开测，同时报告总参数、激活参数、硬件和并发条件。小批量、设备间带宽不足或专家分布不均，都可能让稀疏模型没有预想的快。

**MoE 是否每层都稀疏？** 不一定，要查看具体架构；某些层或模块仍然是稠密计算。

**激活参数等于推理显存需求吗？** 不等于，模型权重、缓存、运行时与通信缓冲都要计入。

## 参考资料

- [Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer](https://arxiv.org/abs/1701.06538)
- [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437v2)
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
