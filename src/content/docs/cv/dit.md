---
title: DiT
atlas:
  id: dit
  kind: model
  modality: cv
  aliases: []
  purpose: 用 Transformer 学习图像去噪
  summary: 在扩散生成过程中，用 Transformer 预测如何逐步去掉噪声。
  question: 图像生成中的 Transformer 和语言模型有什么不同？
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
  sources:
    - dit-paper
  year: 2022
  featured: true
---

## 要解决什么问题

图像生成里，能否把常见的 U-Net 去噪骨干换成 Transformer，并研究扩大模型怎样影响效果？原始 DiT 在压缩后的图像空间里做这件事，主要实验是类别条件图像生成。

## 结构与数据流

图片先经自动编码器压缩为 latent，也就是潜在表示；给它加噪，再把带噪表示分成小块。Transformer 接收这些块、噪声时间步与类别条件，预测用于逐步去噪的信息，最后再解码回图片。

例如想生成某一类别的狗，采样从随机噪声开始，多次调用去噪网络，再还原为可见图像。一次去噪会处理整组位置，不是像 GPT 那样新接一个词。详见[扩散与流匹配](/training/diffusion-flow/)。

## 数据与训练

原始 DiT 在带类别标注的图像数据上训练，学习不同噪声程度下的去噪任务。训练时可以随机抽时间步，并不需要为每张图完整跑一遍生成过程。

DiT 是骨干设计，扩散是训练与生成路线；把其中一个名字听懂，还不足以推断所有条件编码器、采样器和解码器。

## 评测怎么看

论文比较 FID 与计算规模。FID 衡量生成图片与参考集在特征统计上的差异；它不能单独保证每张图都符合要求。还需记录分辨率、采样步数和条件设置，具体见[视觉指标](/evaluation/vision-metrics/)。

## 应用与错例

某类别总混入错误背景，可以分开检查数据偏差、条件标签、采样配置和解码器。结构相同但采样步数不同的两次运行，不宜只按速度宣布模型更优。对属性、构图与细节分别构建保留集，再验证改进。

## 比较与面试追问

[Stable Diffusion v1](/cv/stable-diffusion/)也在潜空间生成，但去噪骨干是 U-Net。[F5-TTS](/audio/f5-tts/)借用 Diffusion Transformer 思路生成语音，其目标、条件与输出都不同；不能把图像模型权重当成语音模型。

**DiT 是大语言模型吗？** 不是；共享 Transformer 组件，不代表做同一种任务。

**去噪步数与网络层数有什么区别？** 层数是一次网络调用内部的深度；采样步数决定反复调用网络多少次。

## 参考资料

- [Scalable Diffusion Models with Transformers](https://arxiv.org/abs/2212.09748)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
