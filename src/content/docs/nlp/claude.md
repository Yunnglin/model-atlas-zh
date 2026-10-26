---
title: Claude
atlas:
  id: claude
  modality: nlp
  year: 2023
  purpose: 理解助手对齐与 AI 反馈
  summary: 以 Claude 及 Anthropic 公开的 Constitutional AI 方法理解有帮助、诚实与无害的对齐问题。
  question: 训练一个好助手，怎样定义“回答得好”？
  aliases:
    - Anthropic
    - Constitutional AI
    - RLAIF
  sources:
    - claude-intro
    - constitutional-paper
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

Claude 是 Anthropic 的闭源助手模型系列。这里用它理解助手对齐，保留公开研究入口；不推测具体在售版本的层数、参数与完整训练配方。

## 值得理解的思路

Anthropic 的 Constitutional AI 研究讨论用一组原则引导批评、修改与 AI 反馈。比如答案看似有帮助却包含编造，需要同时约束有用性和可靠性。这项公开研究不能当成所有 Claude 版本完全相同的训练流程。

## 如何比较

看指令遵从、事实证据、合理拒答与实际任务完成，同时固定模型版本和推理预算。和开放权重模型比较时，API 产品还涉及工具与系统配置。相关方法读 [RLHF](/training/rlhf/)，开放模型主线读 [Qwen](/nlp/qwen/)、[Kimi](/nlp/kimi/)和 [GLM](/nlp/glm/)。

## 参考资料

- [Introducing Claude](https://www.anthropic.com/news/introducing-claude)
- [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
