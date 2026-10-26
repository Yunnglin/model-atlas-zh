---
title: Qwen-Coder 系列
atlas:
  id: qwen-coder
  modality: nlp
  year: 2024
  featured: true
  aliases:
    - CodeQwen1.5
    - Qwen2.5-Coder
    - Qwen3-Coder
    - Qwen3-Coder-Next
  purpose: 从补代码到完成工程任务
  summary: 比较代码补全、仓库任务和 Agent 训练，重点讲开放权重 Coder 与 Coder-Next。
  question: 函数会写，为什么真实仓库任务仍会失败？
  sources:
    - codeqwen15-card
    - qwen25-coder-paper
    - qwen-coder-code
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

写一个排序函数，与修改真实项目里的登录逻辑不是同一难度。后者要找文件、读依赖、运行测试、处理反馈。Qwen-Coder 的演进适合学习从代码生成到工程任务完成的变化。[返回系列](/nlp/qwen/)。

## 结构与数据流

| 主线             | 学习重点                                            | 公开入口                         |
| ---------------- | --------------------------------------------------- | -------------------------------- |
| CodeQwen1.5      | 早期代码专用分支，代码补全与指令                    | 官方 1.5 发布与模型卡            |
| Qwen2.5-Coder    | 代码预训练、补全与指令，多规格开放                  | 2.5-Coder 报告                   |
| Qwen3-Coder      | MoE 型号，包括 480B-A35B、30B-A3B；更关注代码 Agent | 官方仓库与权重清单               |
| Qwen3-Coder-Next | 基于 Qwen3-Next-80B-A3B-Base，混合注意力与 MoE      | 开放权重；执行环境交互与强化学习 |

模型输出文本形式的代码或工具调用；真正执行的是外部工具。MoE 解释计算分配，Agent 解释模型如何与环境循环交互。两者既不等价，也不是互斥选项。

## 数据与训练

代码预训练学习语法、库使用和项目模式。中间补全任务会重新组织代码，让模型根据前后文补中间一段。指令训练学习修改要求；Agent 训练还要包含可执行任务、工具返回和失败恢复。Coder-Next 官方说明明确包含任务合成、环境交互与强化学习，不应简化成“多看了 GitHub”。

例如修复日期解析，样本应包含报错、文件修改和验证过程；只给正确函数，教不到如何定位原因。训练轨迹还要控制测试泄漏与重复仓库。

## 评测怎么看

函数级测试看正确率；仓库任务看补丁能否通过测试、是否完成要求、有没有引入新问题。同时记录工具权限、环境镜像、时间与 token 预算。相同模型换不同 harness 可能结果不同，[大模型基准](/evaluation/llm-benchmarks/)解释为什么榜单不能直接等同业务表现。

## 应用与错例

代码编译失败，先查依赖与 API 版本；测试通过却没满足需求，补充行为验收；反复改错文件，检查检索与工具轨迹。把错例拆成定位、修改、执行、验证四段，补对应样本，再回归独立仓库任务。

## 比较与面试追问

[Qwen3-Next](/nlp/qwen-next/)讲底座结构，[RLVR](/training/rlvr/)讲怎样用可验证结果给奖励。测试通过是信号，但不覆盖所有正确性，需要防止只迎合测试。

**会生成代码就算 Agent 吗？** 还需要基于环境反馈持续选择动作和判断完成。

**Coder-Next 为什么不直接叫更大的 Coder？** 它有特定基础结构与训练路线，比较时需同时看资源和任务完成，不只看总参数。

## 参考资料

- [CodeQwen1.5-7B-Chat 官方模型卡](https://huggingface.co/Qwen/CodeQwen1.5-7B-Chat)
- [Qwen2.5-Coder Technical Report](https://arxiv.org/abs/2409.12186)
- [Qwen3-Coder 与 Coder-Next 官方实现](https://github.com/QwenLM/Qwen3-Coder)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
