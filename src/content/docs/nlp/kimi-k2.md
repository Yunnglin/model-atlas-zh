---
title: Kimi K2 与 Thinking
atlas:
  id: kimi-k2
  modality: nlp
  year: 2025
  featured: false
  aliases:
    - MuonClip
    - Kimi-K2-Instruct-0905
  purpose: 理解 MoE 预训练与工具推理
  summary: 结合 Base、Instruct、Thinking 解释预训练稳定性与任务后训练。
  question: 同一基础系列为何会有不同推理与对话版本？
  sources:
    - kimi-k2-code
    - kimi-thinking-card
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

一个代码助手既要具备基础知识，也要在工具报错后继续推进。K2 适合分别学习大型 MoE 的预训练，以及面向指令、推理和工具的后训练。[系列总览](/nlp/kimi/)。

## 结构与数据流

K2 是 1T 总参数、每 token 约 32B 激活的 [MoE](/foundations/moe/)模型。语言路径使用 MLA 等设计；MLA 关注注意力缓存，MoE 关注专家计算，减少激活计算不等于无需存放其余专家。

Base 面向基础能力与继续训练，Instruct 面向对话和工具；Thinking 是后续推理版本，不应混用模型卡配置。Instruct-0905 也是具体版本标识，比较时要记录完整名字。

## 数据与训练

MuonClip 是 K2 报告中的训练稳定性设计，与推理时让模型“多想一会儿”不同。后训练需要示范、反馈与工具任务，Thinking 还关注推理过程与多步工具使用。公开权重不代表原始训练数据全部公开。

例如模型写出了不存在的库函数，可能是知识或工具检查不足；给它可运行环境并训练读取报错，与只补充正确答案会产生不同学习信号。

## 评测怎么看

控制完整权重版本、聊天模板、工具、思考预算和重试次数，分别测代码生成、实际执行与最终验收。不能把多次尝试成功率当作单次成功率，也不能只报测试通过而不检查需求。

## 应用与错例

不调用工具先查模板和工具描述；调用参数错误查轨迹格式；工具结果正确但最终结论错，检查结果如何进入上下文。建立按失败步骤切片的数据，再做独立回归。

## 比较与面试追问

**MuonClip、MLA、MoE 各在哪一层？** 分别涉及优化稳定性、注意力表示和专家计算。

**Thinking 一定更适合简单问答吗？** 需要比较正确率、延迟与成本。视觉与后续代际见 [K2.5 等分支](/omni/kimi-multimodal/)和 [K3](/nlp/kimi-k3/)。

## 参考资料

- [Kimi K2 官方实现](https://github.com/MoonshotAI/Kimi-K2)
- [Kimi K2 Thinking 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
