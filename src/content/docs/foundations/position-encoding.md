---
title: 位置编码与 RoPE
atlas:
  id: position-encoding
  kind: method
  modality: shared
  purpose: 告诉模型内容出现在哪里
  summary: 区分绝对位置、相对位置、旋转位置编码与多模态时空位置。
  question: 模型怎样区分“我追你”和“你追我”？
  sources:
    - transformer-paper
    - rope-paper
    - qwen-vl-paper
  aliases:
    - 位置编码
    - RoPE
    - 旋转位置编码
    - mRoPE
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

只知道一堆词出现过，不够理解先后关系。位置编码把位置信息带入模型，让内容相同、顺序不同的序列产生不同的处理结果。

原始 Transformer 使用正弦余弦位置表示；也有可学习的绝对位置表示。RoPE 把位置相关的旋转作用到注意力中的查询和键，使它们的匹配能够体现相对位置。不同方案不能只按名字互换。

## 跟着例子走

“我追你”和“你追我”用词相同，谁先出现却改变了主客体。图像还需要表达上下、左右；视频还包含时间。多模态位置设计要与实际输入布局对应，不能简单把所有视觉块当成一列无空间关系的词。

## 长上下文要注意什么

训练时见过多长、推理时扩展多长、怎样缩放或调整位置机制，都可能影响结果。有 RoPE 不代表任意外推长度都可靠。长文检索与跨段推理仍应在不同证据位置上单独测试。

## 排错与面试

长文答错先排除截断和输入组织错误，再比较位置相关配置。把文档原样调换位置，观察正确率是否变化，比直接归因于某一种位置编码更有证据。

**RoPE 是一套词向量吗？** 不是，它主要向注意力匹配引入位置关系，内容表示仍由其他部分学习。

## 参考资料

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [RoFormer: Enhanced Transformer with Rotary Position Embedding](https://arxiv.org/abs/2104.09864)
- [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923v1)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
