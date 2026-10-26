---
title: 知识蒸馏
atlas:
  id: distillation
  kind: method
  modality: shared
  purpose: 让较小模型学习较强模型的信号
  summary: 区分教师概率、生成答案、学生基座与真实能力验证。
  question: 小模型怎么借助大模型学到解题方式？
  sources:
    - distillation-paper
    - r1-code
  aliases:
    - 蒸馏
    - teacher
    - student
    - distill
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

让较强的教师模型提供学习信号，再训练较小的学生模型。信号可以是类别概率，也可以是生成的答案与推导。学生仍然需要训练，不是把教师权重简单裁掉一部分。

## 跟着例子走

教师为数学题生成候选解法，筛掉明显错误，再给学生做监督训练。学生学到的是材料中的模式，教师答错或验证器漏检也可能传播进去。

原始知识蒸馏研究讨论软概率分布；[R1 蒸馏模型](/nlp/deepseek-r1/)的公开说明包含用生成推理数据适配 Qwen、Llama 基座。不同蒸馏方法提供的信号并不相同。

## 训练与评测

记录教师版本、提示、采样、筛选规则和学生基座。测试题不应进入蒸馏训练材料；同题改个说法的近重复，也可能高估泛化。

比较学生与教师时控制答案预算和评测协议，并检查新题型、目标语言和长文本，不只测教师擅长的少量题。

## 面试追问

**蒸馏等于量化吗？** 不等于，蒸馏训练学生去学习教师信号，量化主要改变数值表示。

**教师只要强，学生就一定变强吗？** 不保证；信号质量、任务匹配、学生容量与训练配置都会影响结果。

## 参考资料

- [Distilling the Knowledge in a Neural Network](https://arxiv.org/abs/1503.02531)
- [DeepSeek-R1 官方说明与蒸馏模型](https://github.com/deepseek-ai/DeepSeek-R1)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
