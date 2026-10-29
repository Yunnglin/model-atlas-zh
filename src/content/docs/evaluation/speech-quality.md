---
title: 语音评测：内容、音色、自然度与延迟
atlas:
  id: speech-quality
  kind: metric
  modality: audio
  purpose: 把听对、说对、好听和及时分开测
  summary: 组合转写错误率、说话人相似性、盲听和系统延迟分析。
  question: 识别器能听懂，就说明生成语音好吗？
  sources:
    - encodec-paper
    - valle-paper
    - f5-paper
    - whisper-paper
  aliases:
    - MOS
    - 说话人相似度
    - RTF
    - 首包延迟
    - TTS评测
  facets:
    - evaluation
    - application
---

## 用大白话理解

一段语音可以字念对了，却很机械；也可以音色很像参考人，却漏了词。内容、音色、自然度和速度是不同维度，需要分别测。

## 怎样组织一次测试

内容可用人工转写，或用识别器的 WER／CER 作辅助；音色可用说话人表示的相似性，但要看模型和录音条件；自然度可做盲听、成对偏好或明确量表的 MOS。不同识别器、听者与评分安排会影响结果。

例如数字“二〇二六”念成“二零二六”是否计错，要按目标应用和规范化约定。识别器本身的错误也需要抽听核对。

### 盲听分数怎样理解

假设请五位听者按 1 到 5 分评价同一段语音的自然度，分别给出 5、4、4、3、4，平均意见分数 MOS 为 20 ÷ 5 = 4。一次正式评测通常会使用多段文本和多个听者，并写明量表、样本安排、听者数量和统计方式；一段样音的平均分只能说明这段材料的听感。

比较两个系统时，可让同一位听者在不知道系统名称的情况下听相同文本，并随机安排播放顺序。除了自然度，还可以单独提问音色是否相似、数字是否听清；把不同问题合成一个分数，会掩盖系统的长处与短处。

## 速度要拆开

实时率 RTF 通常比较生成计算时间与音频时长，需明确硬件、并发和统计范围。首段可播放声音的等待时间与整句完成时间，又回答不同问题。RTF 小不代表首响应一定短。

假设一次请求从开始到整句生成完成用了 2 秒，得到 4 秒长的音频，按这一计时范围计算的 RTF 是 $2/4=0.5$；如果第 0.8 秒就收到第一段可播放声音，首段等待就是 0.8 秒。RTF 反映整体生成耗时与音频长度的比例，首段等待反映用户多久能开始听，两个数字需要一起看。

![语音延迟示意：首段在零点八秒可播放，全部生成耗时两秒、音频长四秒，RTF 为零点五。](/figures/evaluation/speech-latency.svg)

记录结果时，还应说明是否包含模型加载、网络传输和音频编码，以及请求并发和硬件。比如两个系统生成总耗时相同，如果其中一个先缓存整句再返回，用户可能更晚听到声音。

## 排错与数据改进

先比较原始录音、编解码器重建和完整生成，定位失真在哪一步。按专名、数字、长句、口音、参考音质、噪声分别建切片。补训练或开发样例后，用新文本和独立说话人验证。

可参考 [VALL-E](/audio/vall-e/)、[F5-TTS](/audio/f5-tts/)和[语音生成案例](/cases/tts/)。

## 面试追问

**MOS 能跨论文直接排名吗？** 通常不能，材料、听者、量表和实验安排需一致或有可靠对照。

**说话人相似度高，能证明说的内容对吗？** 不能，它主要提供音色相关的信号。

## 参考资料

- [High Fidelity Neural Audio Compression](https://arxiv.org/abs/2210.13438)
- [Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers](https://arxiv.org/abs/2301.02111)
- [F5-TTS: A Fairytaler that Fakes Fluent and Faithful Speech with Flow Matching](https://arxiv.org/abs/2410.06885)
- [Robust Speech Recognition via Large-Scale Weak Supervision](https://arxiv.org/abs/2212.04356)

资料核对：2026-10-28。
