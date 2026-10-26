---
title: Kimi K3
atlas:
  id: kimi-k3
  modality: omni
  year: 2026
  featured: false
  aliases:
    - KDA
    - Attention Residuals
    - AttnRes
    - Stable LatentMoE
  purpose: 看高效记忆与层间信息融合
  summary: 解释 K3 的 KDA、Attention Residuals、稀疏专家与原生视觉，按官方公开信息说明。
  question: 混合记忆、层间连接与专家稀疏分别省什么？
  sources:
    - kimi-k3-code
    - kimi-linear-card
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

长工程任务既要记住大量上下文，又要在很多步骤后继续执行。K3 将高效历史处理、层间信息融合、稀疏专家与视觉能力放进同一模型。[返回 Kimi](/nlp/kimi/)。

## 结构与数据流

官方模型表给出 2.8T 总参数、104B 激活参数与百万 token 上下文。理解时不要只背规模，先拆出三个部分：

- **Kimi Delta Attention（KDA）**用门控机制更新有限状态记忆，可以先理解成有选择地保留和遗忘历史；不是逐字保存整段上下文。
- **Attention Residuals（AttnRes）**改变不同网络深度的信息融合方式；粗略说，不再只依靠固定的残差相加路径。
- **Stable LatentMoE**围绕专家稀疏计算与训练稳定性设计；官方说明每步选择部分专家，激活规模仍不同于总存储规模。

原生视觉让模型能处理图片、视频与文本，但不自动意味着具备语音波形输出。上面是教学概括，部署配置与具体层路径应查官方模型配置，不能拿示意图替代实际实现。

## 数据与训练

多模态预训练建立共同表示，面向代码、研究和长程任务的训练进一步改善执行。公开 README 并不等于完整数据配方；未公开的奖励函数、混合比例和训练阶段不补写。

理解 KDA 可以先对比 [Kimi Linear](/omni/kimi-multimodal/)与 [Qwen3-Next](/nlp/qwen-next/)，再看它们各自怎样处理长历史。结构相似不证明训练和权重相同。

## 评测怎么看

同时观察长上下文定位、跨段推理、视觉任务与工具任务完成，记录资源、延迟和预算。官方报告的任务表现不等于所有使用环境都相同，尤其要核对 harness 与工具配置。

## 应用与错例

长任务中丢失要求，先检查截断、工具输出压缩和记忆管理，再看模型是否在证据存在时忽略约束。用不同距离和干扰条件构造测试，避免把系统丢数据误认为模型必然遗忘。

## 比较与面试追问

**AttnRes 是给 token 做普通自注意力吗？** 它关注深度之间的信息聚合，不能与序列历史读取混为一谈。

**百万上下文意味着能稳定完成百万 token 的所有推理吗？** 不是，上限、定位与复杂理解是不同能力。

## 参考资料

- [Kimi K3 官方结构与权重说明](https://github.com/MoonshotAI/Kimi-K3)
- [Kimi Linear 官方模型卡](https://huggingface.co/moonshotai/Kimi-Linear-48B-A3B-Instruct)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
