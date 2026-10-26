---
title: F5-TTS
atlas:
  id: f5-tts
  modality: audio
  year: 2024
  purpose: 用流匹配生成连续语音特征
  summary: F5-TTS 用 Diffusion Transformer 与流匹配，结合文字和参考声音合成语音。
  question: 不逐个猜音频 token，还能怎样生成语音？
  aliases:
    - F5
    - Flow Matching TTS
    - 语音合成
  sources:
    - f5-paper
    - f5-code
    - flow-paper
  featured: true
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

除了逐个预测音频编号，还能从噪声出发，一起更新整段语音特征。F5-TTS 用流匹配学习这种生成过程，结合参考声音和目标文字，合成新的语音。

## 结构与数据流

文字表示、参考声学特征、带噪的待生成声学表示与时间信息送入模型。ConvNeXt 帮助整理文字表示，Diffusion Transformer 负责预测更新方向，经过多步采样后得到声学特征，再由声码器还原波形。

这里使用连续声学表示，不等于 [VALL-E](/audio/vall-e/)的离散码本预测。DiT 在此表示一种骨干设计思路，不表示直接复用了图像 DiT 的预训练权重。

## 数据与训练

[流匹配](/training/diffusion-flow/)学习从噪声走向数据的方向。原始 F5-TTS 不依赖单独的显式时长模型和音素对齐模块，但文字与语音的对齐仍需通过训练学到，不能说不存在对齐问题。

文字、录音、采样率、音频裁剪和参考文本应一致。项目代码与不同权重的许可分别查看官方仓库，不能一概按同一种许可理解。

## 评测怎么看

同时检查内容错误、音色相似、自然度、实时率与生成时长。采样步数、声码器和硬件会影响速度；参考音频长度、语言和音质会影响质量。两个实验若条件不同，只比一个实时率不公平。

## 应用与错例

长句后半段漏读或重复，先核对文本清洗、时长估计、分句和参考片段，再比较采样设置。若声学特征正常但波形有杂音，还要检查声码器。补充开发样本后，用未见文本与说话人做回归。

完整的记录与回归步骤见[语音生成案例](/cases/tts/)。

## 比较与面试追问

[DiT](/cv/dit/)让我们理解用 Transformer 处理带噪特征的骨干思路；[扩散与流匹配](/training/diffusion-flow/)解释学习目标。骨干、训练路径和采样器必须分别描述。

**一次网络调用就生成整句，是否意味着只调用一次模型？** 不是，非自回归描述位置依赖，流采样仍可能多次调用网络。

**减少采样步数会怎样？** 通常改变速度与质量取舍，应在固定测试集上验证，不能只凭一段试听判断。

## 参考资料

- [F5-TTS: A Fairytaler that Fakes Fluent and Faithful Speech with Flow Matching](https://arxiv.org/abs/2410.06885)
- [F5-TTS 官方代码](https://github.com/SWivid/F5-TTS)
- [Flow Matching for Generative Modeling](https://arxiv.org/abs/2210.02747)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
