---
title: Qwen 一代至 2.5
atlas:
  id: qwen-early
  modality: nlp
  year: 2023
  featured: false
  aliases:
    - Qwen1
    - Qwen1.5
    - Qwen2
    - Qwen2.5
  purpose: 看清文本模型的早期演进
  summary: 比较一代、1.5、2、2.5 的结构、数据与指令能力变化。
  question: 哪些变化来自结构，哪些来自训练？
  sources:
    - qwen1-paper
    - qwen15-blog
    - qwen2-paper
    - qwen25-paper
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

做中文合同助手，既要理解条款，也要按固定字段输出。能接着写文本不代表能遵守格式。早期几代 Qwen 适合用来学习基础语言能力、网络结构与对话后训练各自负责什么。[返回系列](/nlp/qwen/)。

## 结构与数据流

**第一代 Qwen**是 Transformer 因果语言模型；Base 面向续写，Chat 经过对话对齐。先看[分词](/foundations/tokenization/)：同一段中文切成多少 token，会影响长度、成本和学习效率。

**Qwen1.5**扩展规格、多语言与框架支持。不同规模与后来发布的 MoE 需要分别查卡，不能把“1.5”理解为固定的注意力配置。

**Qwen2**提供 Dense 和 MoE，系列采用分组查询注意力等设计，加强多语言与长文本。[KV Cache](/foundations/kv-cache/)解释共享部分 K/V 为什么影响推理显存。长窗口允许放更多材料，但不保证能定位正确条款。

**Qwen2.5**加强训练数据、代码数学与结构化输出。Coder、Math 的训练目标和任务需要分别介绍，不是聊天版换个提示词。

## 数据与训练

共同底座是自回归预训练；Chat／Instruct 再加入[示范学习](/training/sft/)与偏好、强化学习等后训练。2.5 报告强调数据规模与质量。报告公开研究过程，不代表原始数据和训练环境已全部开放。

训练合同字段提取时，样本应包括字段缺失、同名主体和跨页信息。只收集标准合同，会高估泛化能力。

## 评测怎么看

区分 Base 的续写测试和 Instruct 的聊天模板测试。控制规模、窗口与采样配置，再比较代际。实际任务还看格式合法率、证据正确率和缺失字段处理，不能只看选择题得分。

## 应用与错例

字段抽错先检查条款定位，再看主体是否混淆。证据没进入上下文，优先调整检索；证据给出仍答错，再补对照样本。按文档划分独立测试集，避免相同模板泄漏到训练和评测两边。

## 比较与面试追问

**Base 与 Instruct 只差提示词吗？** 还有训练和权重差异，推理模板也要匹配。

**提升能全归于参数量吗？** 数据和训练同样改变，需要受控对照。继续读 [Qwen3](/nlp/qwen3/)，看思考模式怎样加入主线。

## 参考资料

- [Qwen Technical Report（第一代）](https://arxiv.org/abs/2309.16609)
- [Qwen1.5 官方发布说明](https://qwenlm.github.io/blog/qwen1.5/)
- [Qwen2 Technical Report](https://arxiv.org/abs/2407.10671)
- [Qwen2.5 Technical Report](https://arxiv.org/abs/2412.15115)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
