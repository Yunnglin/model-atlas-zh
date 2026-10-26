---
title: 训练全流程：预训练到后训练
atlas:
  id: training-pipeline
  kind: method
  modality: shared
  purpose: 分清结构、学习目标与数据来源
  summary: 把下一 token 预测、SFT、偏好学习、可验证奖励及评测连起来。
  question: 下一 token 预测、SFT 和 RLHF 为什么能同时出现？
  sources:
    - gpt-code
    - instruct-paper
    - dpo-paper
    - r1-paper
  aliases:
    - pretraining
    - post-training
    - 预训练
    - 后训练
    - 训练流程
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

同一个模型可以先大量阅读，再看回答示范，接着根据反馈调整行为。模型结构说明信息怎样处理；学习目标说明怎样计算错误；数据说明模型练什么。把这三个层次分开，很多术语就能放对位置。

## 每一阶段在学什么

| 环节          | 主要材料               | 学习信号                    | 需要检查什么                   |
| ------------- | ---------------------- | --------------------------- | ------------------------------ |
| 生成式预训练  | 广泛文本或相应模态序列 | 常见为下一 token 预测       | 覆盖、去重、泄漏、能力迁移     |
| SFT           | 指令与示范答案         | 预测示范输出，按掩码计分    | 模板、答案质量、任务完成       |
| 偏好学习      | 同题候选与偏好         | 奖励模型＋RL，或 DPO 等目标 | 评审质量、长度偏差、泛化       |
| 可验证奖励 RL | 可采样题目与验证器     | 答案或测试等可检查反馈      | 验证器漏洞、采样预算、隐藏测试 |

这不是所有模型必须依次完成的固定流水线。具体模型可以采用其中部分步骤，或组合其他目标。

## 跟着例子走

模型会续写数学题，但不会按格式答题，先用 [SFT](/training/sft/)示范；能给多种解法后，可以用偏好区分帮助程度，也可用 [RLVR](/training/rlvr/)检查结果。算法如 [GRPO](/training/grpo/)决定怎样利用反馈更新参数。

SFT 仍常用[下一 token 预测](/foundations/next-token/)，变化在训练材料、对话模板和计分位置。[LoRA](/training/lora/)控制参数如何更新，与这些目标可以组合。

## 训练以外的系统

[RAG](/applications/rag/)通过检索把证据放进上下文，工具调用让程序完成某些操作。它们是应用组织方式，不等于每次请求都重新训练模型。

## 排错与面试

知识更新问题先查资料来源，格式问题先查示范与模板，数学奖励失真先查验证器。不要把所有失败都送去加一轮 SFT。改数据后保留独立测试，分别报告目标任务进步和其他能力是否退化。

## 参考资料

- [OpenAI GPT-2 官方实现](https://github.com/openai/gpt-2)
- [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290)
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
