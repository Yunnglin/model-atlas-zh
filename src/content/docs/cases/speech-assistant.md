---
title: 语音助手：从错例回到数据
atlas:
  id: speech-assistant
  kind: case
  modality: audio
  aliases: []
  purpose: 把识别错例变成可检查的改进方案
  summary: 沿着一个“噪声下漏字”的教学案例，走完数据、训练、评测和改进闭环。
  question: 怎样把一个错例变成可验证的改进方案？
  facets:
    - overview
    - evaluation
    - application
  sources:
    - whisper-code
    - wer-docs
    - ml-rules
  caseStages:
    - stage: 数据
      description: 从目标场景采集开发样本；按说话人或会话分组，保留独立回归集。
      artifact: 版本化音频与人工核验转写清单
      nodes:
        - data-quality
    - stage: 训练
      description: 先复现基础模型，再决定是否值得微调；记录数据版本和配置。
      artifact: 基础模型与候选训练配置（本案例未运行训练）
      nodes:
        - sft
        - lora
    - stage: 评测
      description: 固定文字规范化与切分规则，比较总体及噪声、专名等切片。
      artifact: CER/WER 与切片报告模板（无虚构分数）
      nodes:
        - wer
        - evaluation-protocol
    - stage: 应用
      description: 把识别放入真实处理链，记录切段边界、端到端延迟与输出。
      artifact: 一次请求的原始输入、时间与输出记录
      nodes:
        - whisper
    - stage: 错例分析
      description: 先核对参考与切段，再判断是否由声学条件或模型造成。
      artifact: 错误分类、复现条件与根因假设
      nodes:
        - failure-analysis
    - stage: 数据改进
      description: 从开发池补采或重标；改进后在独立回归集检查收益与退化。
      artifact: 数据变更记录与回归检查清单
      nodes:
        - data-quality
        - evaluation-protocol
---

## 场景与范围

识别“打开客厅灯”时漏了最后一个字，先把错例变成可重复检查的问题。此页为教学复现设计，未执行推理、训练或测出改进分数。完整模型原理见 [Whisper](/audio/whisper/)。

## 数据

保存原录音、实际切段、人工转写、说话人和会话标识。覆盖安静、噪声、句尾与专名等条件；按会话或说话人划分开发与独立测试。先确认“灯”真的在输入音频里，而非切段前就被截掉。

## 训练

保留原模型基线。若是切段、标注或解码配置问题，先修这些环节；确认需要模型适配后，再选有训练支持的实现和清理后的音频文本配对。训练产物需记录数据划分、模型与依赖版本、配置和检查点。

## 评测

按固定文本规范化规则计算 [WER／CER](/evaluation/wer/)，同时统计句尾漏字、噪声与专名等切片。补数据后既看目标场景，也看干净语音是否退化；开发集定配置，独立集做最终回归。

## 应用

可按 [Whisper 官方 README](https://github.com/openai/whisper)准备依赖与测试音频，再用其命令行建立推理基线。以下命令是待执行示例，网站没有运行它：

```sh
whisper sample.wav --model small --language Chinese --output_format json
```

保留音频、模型权重标识和输出 JSON；如果产品还有活动检测、分块与超时控制，也要记录实际输入范围及时间线。

## 错例分析

对照原录音和实际送入模型的片段，再核对人工答案。依次区分输入截断、标注错误、噪声覆盖、文本规范化和模型识别失败。还未复现前，不把某个原因写成已经确定的缺陷。

## 数据改进

从开发错例补充对应口音、句尾、专名与噪声样例，不从独立测试集搬答案进训练。用固定协议比较前后逐题结果与速度，保存错误类别、回归集和结论；一个成功样本不足以证明整体改善。

## 参考资料

- [Whisper 官方代码与命令行入口](https://github.com/openai/whisper)
- [JiWER 官方说明](https://github.com/jitsi/jiwer)
- [Rules of Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表已经实际运行并得到结果。
