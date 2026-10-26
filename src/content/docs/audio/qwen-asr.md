---
title: Qwen Audio / ASR
atlas:
  id: qwen-asr
  modality: audio
  year: 2023
  featured: true
  aliases:
    - Qwen-Audio
    - Qwen2-Audio
    - Qwen3-ASR
    - Qwen3-ForcedAligner
  purpose: 从听懂声音到专门识别文字
  summary: 串起 Audio、Audio2、Qwen3-ASR 与强制对齐，区分语音识别和音频理解。
  question: 能回答声音问题的模型，和专门转写的 ASR 有什么区别？
  sources:
    - qwen-audio-code
    - qwen-asr-code
    - qwen-asr-paper
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

录音里有一句“明天下午三点开会”，还夹着背景音乐。转写模型要写对文字，音频理解模型还可能回答“有没有音乐、说话人是什么情绪”。任务不同，训练标签和评测就不同。[返回 Qwen 总览](/nlp/qwen/)。

## 结构与数据流

| 主线                        | 输入 → 输出                               | 已公开的学习入口                           |
| --------------------------- | ----------------------------------------- | ------------------------------------------ |
| Qwen-Audio（2023）          | 音频与文本 → 文本，覆盖多种音频任务       | 开放权重；早期音频编码器接语言模型         |
| Qwen2-Audio（2024）         | 音频／文字指令 → 文本，增强音频理解与交互 | 7B Base、Instruct；不是语音波形生成模型    |
| Qwen3-ASR（2026）           | 音频 → 语言标识与转写文本                 | 0.6B、1.7B；由 Qwen3-Omni 音频能力发展而来 |
| Qwen3-ForcedAligner（2026） | 已知音频与文字 → 时间位置                 | 0.6B，非自回归强制对齐；不是重新猜转写内容 |

Qwen3-ASR 使用音频编码器与语言解码路径，将声音信息转为可生成文字的表示。官方提供流式与离线推理支持；“支持流式”不表示任意切块都一样好，要用相应接口与上下文策略。`-hf` 是框架适配格式，不是新一代模型。

强制对齐可以理解为：文字已经有了，现在给每段文字找时间。转写错了再做对齐，时间可能看起来合理，但文字并不会自动变正确。

## 数据与训练

Audio／Audio2 学多种音频任务；ASR 专注识别，训练样本更关注声音与文字对应。Qwen3-ASR 报告介绍从基础能力到识别训练的过程，具体数据与目标按报告核对，不能把普通语言 SFT 直接当作完整语音训练。

本地适配先固定采样率、音频长度、文本规范和提示词。公司名、口音、数字是不同切片；补充样本时保留真实发音与文字对应，不要只在文本里替换品牌名。[数据质量](/training/data-quality/)和[CTC](/audio/ctc/)帮助比较其他识别训练路线。

## 评测怎么看

用 [WER／CER](/evaluation/wer/)，公布分词、标点、数字和繁简转换规则。单独测方言、噪声、远场、长音频、静音幻觉和音乐。时间戳另测边界误差与对齐失败率。吞吐、首字延迟和完整识别延迟分别报告，不能混用。

## 应用与错例

“下午三点”识别成“下午四点”，先听音频、核对标签，再看切块是否截掉上下文；整句正确但时间偏移，检查重采样与对齐。按原因补充样本，保留独立说话人和设备测试集。可跟着[语音助手案例](/cases/speech-assistant/)完成一轮错误归因。

## 比较与面试追问

[Whisper](/audio/whisper/)是成熟的识别／翻译学习对照；[Omni](/omni/qwen-omni-family/)处理更多输入并可生成语音。

**ASR 与 ForcedAligner 能互换吗？** 一个识别“说了什么”，一个在给定文字后定位“何时说”。

**为什么不能按一代到 3.8 给 ASR 补齐版本？** ASR 有自己的发布序列，文本主线的版本号不是每条分支都必须拥有。

## 参考资料

- [Qwen-Audio 与 Qwen2-Audio 官方发布记录](https://github.com/QwenLM/Qwen2-Audio)
- [Qwen3-ASR 官方实现与模型清单](https://github.com/QwenLM/Qwen3-ASR)
- [Qwen3-ASR Technical Report](https://arxiv.org/abs/2601.21337)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
