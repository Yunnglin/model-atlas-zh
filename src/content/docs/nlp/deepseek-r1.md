---
title: DeepSeek-R1
atlas:
  id: deepseek-r1
  modality: nlp
  year: 2025
  purpose: 理解可验证奖励怎样训练推理
  summary: 区分 R1-Zero、原始 R1 的多阶段训练，以及基于 Qwen/Llama 的蒸馏模型。
  question: 会推理是换了结构，还是改变了训练方法？
  aliases:
    - R1
    - R1-Zero
    - 推理模型
    - DeepSeek-R1-Distill
  sources:
    - r1-paper
    - r1-code
    - v3-paper
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

数学题答案有时可以直接检查，程序也能运行测试。能否让模型通过这些反馈学会更可靠地解题？R1 适合连接[下一 token 预测](/foundations/next-token/)、[RLVR](/training/rlvr/)与[GRPO](/training/grpo/)。它的推理输出仍是逐步生成的 token。

## 结构与数据流

原始 R1 从 DeepSeek-V3-Base 继续训练，重点变化在后训练流程。不要把 R1 说成一种与 Transformer 无关的新结构，也不要把最终助手 V3 当成报告中的 Base 检查点。

题目进来，模型生成若干候选解法；验证器检查答案或程序测试，训练算法再提高表现较好序列的概率。这是学习过程的简化说明，网站不执行这些训练。

## 数据与训练

R1-Zero 研究不先做 SFT、直接用大规模强化学习的路线；它出现可读性差和语言混杂等问题。原始 R1 使用冷启动示范数据，再结合推理强化学习、拒绝采样与进一步监督/强化学习步骤。两者不能合并成“R1 完全没做 SFT”。

GRPO 是参数更新算法；RLVR 描述奖励来自可验证信号。公开的 Distill-Qwen、Distill-Llama 使用 R1 生成的推理数据适配对应较小基座，不能把它们的结构写成原始 R1 的 MoE。

## 评测怎么看

最终答案正确率、代码测试通过率和采样预算应一起报。pass@1 与多次采样后选中答案不是同一协议；只看思考文字长短也不能证明推理质量。验证器能检查的题型，与开放式问答的可靠性，需要分开评价。

## 应用与错例

程序通过已知测试却在新输入上失败，要检查测试是否覆盖边界、奖励是否可被投机利用。数学格式提取错误也可能把正确解法计错。修复验证器与开发样例后，保留新的隐藏测试，避免只教会模型迎合旧测试。

## 比较与面试追问

[SFT](/training/sft/)主要模仿示范，强化学习利用结果反馈。[DPO](/training/dpo/)是偏好优化方法，和带在线采样、验证器的 R1 流程不能直接画等号。

**为什么验证奖励比人工偏好容易扩展到数学题？** 一些题有明确答案或测试，但奖励覆盖范围仍有限。

**蒸馏模型是否也跑过与原始 R1 相同的强化学习？** 不能从名称推断，必须核对具体模型的训练说明。

## 参考资料

- [DeepSeek-R1](https://arxiv.org/abs/2501.12948v1)
- [DeepSeek-R1 官方说明与蒸馏模型](https://github.com/deepseek-ai/DeepSeek-R1)
- [DeepSeek-V3 Technical Report](https://arxiv.org/abs/2412.19437v2)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
