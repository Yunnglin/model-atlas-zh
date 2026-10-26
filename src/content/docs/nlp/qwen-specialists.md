---
title: Qwen 数学、检索与安全分支
atlas:
  id: qwen-specialists
  modality: nlp
  year: 2024
  featured: false
  aliases:
    - Qwen2-Math
    - Qwen2.5-Math
    - QwQ
    - QwQ-32B
    - Qwen3-Embedding
    - Qwen3-Reranker
    - Qwen3Guard
    - Qwen3-VL-Embedding
  purpose: 分清生成、检索和判别模型
  summary: 将 Math、QwQ、Embedding、Reranker 与 Guard 放回各自任务与训练目标。
  question: 为什么同属 Qwen，却不能都当成聊天模型调用？
  sources:
    - qwen-math-code
    - qwen-qwq-card
    - qwen-embed-code
    - qwen-vl-embed-code
    - qwen-guard-code
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

知识库问答不只要会回答，还要先找对材料；安全检查则要判断输入输出是否符合规则。同属 Qwen，不表示输出形式或训练目标相同。[返回主线](/nlp/qwen/)。

## 结构与数据流

| 分支                         | 做什么                                   | 典型输出与学习重点                   |
| ---------------------------- | ---------------------------------------- | ------------------------------------ |
| Qwen2-Math／Qwen2.5-Math     | 数学专用模型，2.5 包括推理与工具辅助路线 | 解题文本；看数学数据、推理与结果验证 |
| QwQ-32B-Preview → QwQ-32B    | 早于统一 Qwen3 主线的推理探索            | 较长思考；不是所有 Qwen3 的别名      |
| Qwen3-Embedding              | 将文本变成检索用向量                     | 向量；不是直接给答案                 |
| Qwen3-Reranker               | 进一步比较问题与候选材料的相关性         | 排序分数；开销与一次向量检索不同     |
| Qwen3-VL-Embedding／Reranker | 对文字、图片等多模态材料检索与排序       | 多模态表示／相关性判断               |
| Qwen3Guard Gen／Stream       | 生成式内容判断与流式检测                 | 安全类别等判别信息，按具体型号接口   |

Embedding 先从很多材料里召回，Reranker 再精排小批候选。Guard 检查风险，生成模型组织答案，它们可以在同一系统中合作，但各自需要独立评测。

## 数据与训练

数学分支关注解题与验证信号；检索需要问题、正例和难负例等相关性数据；安全模型需要明确规则和分类标注。某个分支的训练方法不能直接套给另外一条分支。开放程度、许可证和规格按各官方仓库与权重卡查看。

## 评测怎么看

数学看答案正确与工具预算；召回看 Recall@K，排序看 nDCG、MRR 等排序指标；安全检测分别统计漏报与误报，并检查语言、场景和规则切片。只报综合准确率会隐藏代价很高的错误。

## 应用与错例

[RAG](/applications/rag/)没找到材料，先看召回；找到了但排序低，检查难负例；引用正确却回答错，才进入生成分析。安全误杀正常问题，则补贴近边界的正反例，不能简单把阈值改松后只看漏报下降。

## 比较与面试追问

**Embedding 和 Reranker 为什么常一起用？** 前者快速覆盖大量候选，后者更细地比较少量候选，交换速度与精度。

**Guard 判了安全就一定没有风险吗？** 判别能力受规则、训练与场景分布限制，需要独立切片验证。

## 参考资料

- [Qwen2.5-Math 官方实现](https://github.com/QwenLM/Qwen2.5-Math)
- [QwQ-32B 官方模型卡](https://huggingface.co/Qwen/QwQ-32B)
- [Qwen3 Embedding 与 Reranker 官方实现](https://github.com/QwenLM/Qwen3-Embedding)
- [Qwen3-VL-Embedding 与 Reranker 官方实现](https://github.com/QwenLM/Qwen3-VL-Embedding)
- [Qwen3Guard 官方实现](https://github.com/QwenLM/Qwen3Guard)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
