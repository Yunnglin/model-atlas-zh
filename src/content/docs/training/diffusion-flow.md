---
title: 扩散与流匹配
atlas:
  id: diffusion-flow
  kind: method
  modality: shared
  purpose: 学习从噪声生成连续数据
  summary: 把生成表示、学习目标、网络骨干与采样步骤分开理解。
  question: 为什么一次处理整段数据，还要反复调用模型？
  sources:
    - ldm-paper
    - dit-paper
    - flow-paper
    - f5-paper
  aliases:
    - Diffusion
    - Flow Matching
    - 去噪
    - 流匹配
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 用大白话理解

图像或声音可以从噪声逐步变成有结构的数据。扩散模型的一种常见表述是学习不同噪声程度下怎样去噪；流匹配学习的是沿某条概率路径移动的方向。两条路线有关联，但目标、路径和采样配置要具体核对。

## 跟着例子走

[Stable Diffusion](/cv/stable-diffusion/)在压缩后的图像表示上生成；[F5-TTS](/audio/f5-tts/)在连续声学表示上生成。训练时可抽一个时间点构造学习题；采样时则沿时间多次更新状态。

“非自回归”说明位置之间的生成组织，不等于只做一次网络调用。模型可以一次预测全体位置的更新方向，再反复执行多个时间步。

## 四个问题分开问

数据在哪里表示，是像素、latent 还是声学特征？网络用 U-Net 还是 Transformer？损失预测噪声、数据还是向量场？采样器按什么规则更新、走多少步？只听到“DiT”无法回答全部问题。

<details>
<summary>想深入：直线路径的流匹配例子</summary>

设 $x_0$ 是噪声、$x_1$ 是数据，$t$ 从 0 走到 1。一条教学用直线路径是：

$$
x_t=(1-t)x_0+t x_1
$$

这条条件路径的速度是 $x_1-x_0$。训练让网络根据 $x_t$、时间和条件预测方向。实际方法还会选择配对、概率路径与噪声设置；这个式子不是所有流模型的完整配方。

</details>

## 评测与面试

固定采样步数、随机种子、条件、解码器和硬件再比较。图像用生成质量和条件满足率，语音还要看内容与听感。

**少采几步是否相当于模型少几层？** 不是，采样步数决定调用次数，层数决定每次调用内部的深度。

## 参考资料

- [High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2112.10752)
- [Scalable Diffusion Models with Transformers](https://arxiv.org/abs/2212.09748)
- [Flow Matching for Generative Modeling](https://arxiv.org/abs/2210.02747)
- [F5-TTS: A Fairytaler that Fakes Fluent and Faithful Speech with Flow Matching](https://arxiv.org/abs/2410.06885)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
