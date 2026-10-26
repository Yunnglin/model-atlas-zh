---
title: 语言模型评测：知识、推理与代码
atlas:
  id: llm-benchmarks
  kind: metric
  modality: nlp
  purpose: 根据任务选择指标与实验协议
  summary: 理解 MMLU、代码测试、pass@k、指令遵循和模型裁判的不同含义。
  question: 一个模型分数高，具体是在哪种题上更好？
  sources:
    - mmlu-paper
    - humaneval-paper
    - judge-paper
  aliases:
    - MMLU
    - HumanEval
    - pass@k
    - LLM-as-a-judge
  facets:
    - evaluation
    - application
---

## 先确定你要测什么

知识选择题、数学结果、可执行程序、格式遵循和开放式回答，正确性的定义不同。MMLU 主要提供多学科知识题；HumanEval 用函数编程题与测试检查代码。不能因为它们都有百分比分数就直接比较大小。

## 一次作答与多次尝试

pass@1 关注一次候选通过的情况；pass@k 关注多个候选中至少有一个通过的情况。比较时要写采样数量、温度、执行环境、测试和答案提取规则。允许多次尝试并不代表用户第一次就能拿到正确答案。

例如生成排序函数，样例能过但重复元素处理错误，说明测试覆盖还不够。隐藏测试应包含边界情况，不能只看代码看起来像不像标准答案。

## 模型当裁判

开放式回答可以用评分标准加人工或模型评审，但评审可能偏爱长答案、特定文风或先出现的候选。交换顺序、盲化模型名称、抽样人工复核，并检查评审与人类判断的一致性。

## 可复现的最小记录

模型与版本、提示、模板、数据划分、采样、输出上限、评测实现和逐题结果都应保留。再按语言、题型、长度与错误原因切片；平均分无法解释是知识不足、推导错误还是解析失败。

## 面试追问

**为什么测试集不能拿来调提示？** 反复按测试结果选择配置，会把测试变成开发过程的一部分。

**回答越长就越会推理吗？** 不一定，应检查最终正确性、证据与同等计算预算下的表现。

## 参考资料

- [Measuring Massive Multitask Language Understanding](https://arxiv.org/abs/2009.03300)
- [Evaluating Large Language Models Trained on Code](https://arxiv.org/abs/2107.03374)
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
