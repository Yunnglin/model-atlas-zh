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

## 沿一条回答理解 Constitutional AI

教学问题是“按这份资料总结会议决定”，资料只说预算待批。初始模型却写“预算已批准”。原则可以要求忠于证据，批评步骤指出结论超出材料，修改步骤再生成“预算仍待批准”。这些是教学示例，不是 Claude 训练样本或实测回复。

公开 Constitutional AI 研究的监督阶段先生成、批评、修改，再用修改后的回答微调。类比老师给出评分原则，学生先写初稿再按原则改稿；真正训练的是修改后的示范，而不是只把原则放进每次提示。

后续 AI 反馈阶段，让模型按原则比较候选答案，形成偏好数据，训练偏好模型，再用其信号做 RL。RLAIF 说明反馈来自 AI，不说明无需人类制定原则、准备任务或评估效果。与数学 RLVR 不同，偏好判断不一定有一道可执行的唯一标准答案。

这项研究解释一种对齐方法，没有公开证明所有 Claude 型号都按完全相同配方训练，也没有给出各型号完整参数和架构。缺少披露时，深入应放在机制与验证方法上，不补写内部细节。

## 怎样检验对齐有没有帮上忙

用相近的两份材料做对照：一份待批准、一份已批准，观察回答是否随证据改变；再用材料缺失的情况检查是否承认未知。若模型一律保守地拒绝，也不能算成功，需要同时看正确回答率与不必要拒答率。

设计偏好评审时，把有帮助、事实依据、遵守要求分开。很有礼貌但改错事实的回答，不应仅因语气好获得高分；措辞生硬但事实正确，也要与错误结论区别。原则冲突和评审偏见可以进入数据，所以 AI 反馈没有自动获得客观性。

应用中先记录版本、输入材料、系统提示与工具，再保存错误回复。缺资料先改善证据输入，证据在场却反转事实再补对照；用独立材料回归，而不是只让同一个评审模型给更高分。

## 参考资料

- [Introducing Claude](https://www.anthropic.com/news/introducing-claude)
- [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073)

资料核对：2026-10-27。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
