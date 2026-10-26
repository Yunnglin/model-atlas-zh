---
title: Kimi 系列
atlas:
  id: kimi
  modality: nlp
  year: 2025
  featured: true
  aliases:
    - 月之暗面
    - Moonshot
    - Kimi K1.5
    - Kimi K2
    - Kimi K2.5
    - Kimi K2.6
    - Kimi K2.7
    - Kimi K3
  purpose: 串起推理、多模态与长程任务
  summary: 从 K1.5 的 RL 研究到 K2、K3 开放权重，结合 Linear、VL 与 Audio 理解技术路线。
  question: 推理训练、MoE、线性注意力与 Agent 分别解决什么？
  sources:
    - kimi15-paper
    - kimi-k2-code
    - kimi-k25-code
    - kimi-k26-card
    - kimi-k27-card
    - kimi-k3-code
    - kimi-linear-card
    - kimi-vl-card
    - kimi-audio-card
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

Kimi 产品早期以长文本对话为人熟知，后来的开放模型则覆盖推理、代码、多模态与长程任务。学习时要分清产品入口、论文里的方法和真正可下载的权重，不能把“公开报告”当成“完整开源训练”。

## 结构与数据流

| 主线                       | 重点变化                                       | 公开范围与阅读入口                                   |
| -------------------------- | ---------------------------------------------- | ---------------------------------------------------- |
| Moonshot／早期 Kimi 服务   | 长文本聊天产品背景                             | 闭源服务，内部配置不作推测                           |
| Kimi K1.5（2025）          | RL 扩展、长推理与长到短迁移                    | 公开报告；本页不把它当作开放权重                     |
| Kimi K2（2025）            | 1T 总参数、32B 激活的 MoE，MuonClip 与工具任务 | Base、Instruct 开放，[K2 详解](/nlp/kimi-k2/)        |
| K2 Thinking／Instruct-0905 | 推理与工具使用的后续版本                       | 开放权重；固定完整型号                               |
| Kimi K2.5（2026）          | 在 K2 基础上持续预训练，原生视觉与任务协作     | 开放权重，[多模态分支](/omni/kimi-multimodal/)       |
| Kimi K2.6（2026）          | 加强长程代码、视觉设计与任务协作               | 开放权重；服务能力与模型能力分开                     |
| Kimi K2.7 Code（2026）     | 基于 K2.6 的代码任务专用更新                   | 开放权重，不是纯参数规模升级                         |
| Kimi K3（2026）            | KDA、Attention Residuals、稀疏 MoE 与原生视觉  | 开放权重，[K3 详解](/nlp/kimi-k3/)；按 K3 许可证使用 |
| Kimi Linear／VL／Audio     | 高效注意力、视觉语言、音频各自分支             | 均有开放权重，[分支比较](/omni/kimi-multimodal/)     |

这里没有为每个量化格式建立新节点。MoE 是专家计算选择，KDA 是历史记忆更新，Attention Residuals 是不同深度之间的信息融合；它们可以同时出现在模型中，不是三个互斥流派。

## 数据与训练

K1.5 报告适合学 RL 与推理预算扩展，但报告的方法不能自动套给所有 K2、K3 型号。K2 强调大规模预训练稳定性和工具相关训练；K2.5 加入视觉文本持续预训练。涉及某代具体奖励或样本比例，只写报告已公开内容。

工程任务的训练数据不只是问题与最终代码，还包括环境反馈和恢复过程。长推理也不天然等于正确，必须能检查结果或过程中的关键约束。

## 评测怎么看

将数学推理、代码测试、多模态理解和 Agent 任务完成分开。固定思考模式、工具、时间预算、上下文与采样次数。模型排行榜里的 harness 差异可能影响分数，不能从一个总榜推导所有场景优势。

## 应用与错例

长任务失败，保留完整轨迹：什么时候遗漏要求、哪个工具报错、错误反馈是否被读到。把输入缺失、决策错误、工具执行和验证不足分开，补充相应样本，再在未见任务上回归。可结合[训练全流程](/training/pipeline/)与[RLVR](/training/rlvr/)学习。

## 比较与面试追问

**K2.5 的视觉能力等同于把 Kimi-VL 接上 K2 吗？** 官方描述是原生多模态持续训练，不能凭名称推断简单拼接。

**Agent Swarm 是一个模型内部长出很多独立权重吗？** 它涉及模型与外部协作系统，子任务数量与效果必须连同系统设置看。

与 [Qwen](/nlp/qwen/)和 [GLM](/nlp/glm/)比较时，先对齐任务与公开程度，再比较结构和训练路线。

## 参考资料

- [Kimi k1.5: Scaling Reinforcement Learning with LLMs](https://arxiv.org/abs/2501.12599)
- [Kimi K2 官方实现](https://github.com/MoonshotAI/Kimi-K2)
- [Kimi K2.5 官方实现](https://github.com/MoonshotAI/Kimi-K2.5)
- [Kimi K2.6 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)
- [Kimi K2.7 Code 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
- [Kimi K3 官方结构与权重说明](https://github.com/MoonshotAI/Kimi-K3)
- [Kimi Linear 官方模型卡](https://huggingface.co/moonshotai/Kimi-Linear-48B-A3B-Instruct)
- [Kimi-VL 官方模型卡](https://huggingface.co/moonshotai/Kimi-VL-A3B-Instruct)
- [Kimi-Audio 官方模型卡](https://huggingface.co/moonshotai/Kimi-Audio-7B-Instruct)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
