---
title: GLM-4.5 → 5.3
atlas:
  id: glm-modern
  modality: nlp
  year: 2025
  featured: false
  aliases:
    - GLM-5.3-Flash
    - IndexShare
    - DSA
    - slime
    - mHC
  purpose: 看 MoE、稀疏注意力与后训练
  summary: 区分 4.5、4.6、4.7、5、5.1、5.2、5.3 与 Flash 的变化，避免把所有升级都归于架构。
  question: 共用基础模型的两个版本，差异可能来自哪里？
  sources:
    - glm45-code
    - glm5-code
    - glm5-paper
    - glm52-card
    - glm53-card
    - glm53-flash-card
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

修改一个真实工程往往要多次运行和修正。现代 GLM 主线除了回答能力，也关注长期保持目标、使用工具和根据反馈调整。[返回 GLM 总览](/nlp/glm/)。

## 结构与数据流

4.5 的主要型号采用 [MoE](/foundations/moe/)；4.6、4.7 继续更新长文本、代码和工具能力，具体思考与模板配置按该版本核对。

GLM-5 官方给出 744B 总参数、40B 激活，并采用 DeepSeek Sparse Attention（DSA）。可以把稀疏注意力理解为从历史中选择部分位置参与精细计算，不是简单删除所有旧上下文。5.1 更强调长程工程任务。

5.2 的 IndexShare 在若干稀疏注意力层之间复用索引，减少重复选择的成本，并更新 MTP 支持推测解码。是否实现预期加速取决于框架和硬件。

**5.3 与 5.2 共用基础模型，官方明确提升来自后训练。5.3-Flash 则从新的基础模型出发**：采用稀疏与线性注意力混合、mHC 和原生多模态。Flash 是独立路线，不是主模型简单缩小或量化。5.3 模型卡有专门许可证，不能把代码仓库许可当作全部权重的许可。

## 数据与训练

GLM-5 报告讨论预训练与后训练，还介绍 slime 异步 RL 基础设施。异步训练解决采样与训练协同效率，与奖励判断是否正确是不同问题。

例如代码任务的测试反馈可以提供可验证信号，但“通过现有测试”不代表所有要求满足。轨迹中应保留需求、环境、修改、执行和终止判断；未公开的版本细节不自行填成完整配方。

## 评测怎么看

对齐模型 ID、精度、思考预算、harness、工具与任务集，再看长程任务完成、测试通过和资源开销。报告平均分可能掩盖某种语言或工程类型的失败，仍要保留业务切片。

## 应用与错例

任务越做越偏，检查目标是否被压缩掉、失败反馈是否进入上下文、是否缺少验收。模型预测和外部执行分别记录，避免把权限错误、依赖错误算成知识错误。补对应轨迹后，检查新任务而不只是重跑训练样本。

## 比较与面试追问

**稀疏注意力与 MoE 是同一个稀疏吗？** 前者选择历史位置，后者选择专家网络。

**5.3 更强能证明架构更好吗？** 既然共用基础模型，官方所述提升来自后训练；需要按控制变量解释。Flash 的架构变化要单独比较。

## 参考资料

- [GLM-4.5／4.6／4.7 官方实现](https://github.com/zai-org/GLM-4.5)
- [GLM-5 至 5.3 官方实现与发布说明](https://github.com/zai-org/GLM-5)
- [GLM-5 Technical Report](https://arxiv.org/abs/2602.15763)
- [GLM-5.2 官方模型卡](https://huggingface.co/zai-org/GLM-5.2)
- [GLM-5.3 官方模型卡与许可证](https://huggingface.co/zai-org/GLM-5.3)
- [GLM-5.3-Flash 官方模型卡](https://huggingface.co/zai-org/GLM-5.3-Flash)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
