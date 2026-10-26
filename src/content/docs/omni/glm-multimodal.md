---
title: GLM 视觉、语音与 OCR 分支
atlas:
  id: glm-multimodal
  modality: omni
  year: 2024
  featured: false
  aliases:
    - GLM-4V
    - GLM-4.1V
    - GLM-4.5V
    - GLM-4.6V
    - GLM-ASR
    - GLM-TTS
    - GLM-OCR
  purpose: 分清视觉理解、识别与语音生成
  summary: 整理 GLM-V、ASR、TTS、OCR 以及 5.3-Flash 的公开入口和评测方法。
  question: 为什么文字、图片和声音需要不同的错误分析？
  sources:
    - chatglm-paper
    - glm-v-code
    - glm-asr-code
    - glm-tts-code
    - glm-ocr-code
    - glm53-flash-card
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

“读发票”“转写录音”“把回答说出来”需要不同输入路径和输出目标。GLM 的这些分支应放回具体任务理解，不能把 API 产品列表当作同一模型架构。[返回 GLM](/nlp/glm/)。

## 结构与数据流

| 分支              | 整理范围                           | 学习重点与公开入口                         |
| ----------------- | ---------------------------------- | ------------------------------------------ |
| GLM-4V／4.1V      | 4V-9B、4.1V-9B-Thinking 等开放型号 | 图像输入与视觉语言理解                     |
| GLM-4.5V／4.6V    | 官方 GLM-V 清单含 4.6V、Flash 等   | 视觉与混合推理，注意不同聊天模板           |
| GLM-5.3-Flash     | GLM-5 主线的原生多模态新基础模型   | 与纯文本 5.3 分开理解                      |
| GLM-ASR-Nano-2512 | 开放语音识别模型                   | 音频到文字，方言、低音量等切片             |
| GLM-TTS           | 可控与情感语音生成                 | 文字／声音条件到波形；多奖励训练见官方实现 |
| GLM-OCR           | 文档识别与解析                     | 文字、表格、公式等，阅读顺序与结构也要测   |

视觉模型在看图，OCR 更关注文档转录与结构，ASR 识别声音里的字，TTS 生成声音。某一项强不代表其余任务也强。具体权重、许可证和框架格式以各仓库为准。

## 数据与训练

文档任务需图像与文字／结构标签，ASR 需音频与转写，TTS 需文本与语音目标。语音生成里不同奖励可能分别约束内容、音色或感知质量，不能把它笼统叫作与数学答案验证一样的 RLVR。

## 评测怎么看

视觉看证据与定位，OCR 看文字错误、表格结构和阅读顺序；ASR 用 [WER／CER](/evaluation/wer/)并固定规范；TTS 同时检查[内容与听感](/evaluation/speech-quality/)。记录输入预处理和运行版本，再比较同任务模型。

## 应用与错例

发票金额读错可能来自像素缩放；录音数字错可能来自发音、标签或规范；TTS 数字错则可能来自文本处理。将这些错误分开，补对应数据，并用未见文档、说话人和文本进行回归。

## 比较与面试追问

**为什么 GLM-V 官方提醒区分聊天模板？** 相似输入预处理不意味着控制 token 和对话格式相同，模板不匹配可能破坏能力。

**有 ASR 和 TTS 就等于单个 Omni 模型吗？** 可以组成系统，但模块组合与原生联合模型在结构和训练上不同。可对照 [Qwen-Omni](/omni/qwen-omni-family/)。

## 参考资料

- [ChatGLM: From GLM-130B to GLM-4 All Tools](https://arxiv.org/abs/2406.12793)
- [GLM-V 官方实现与版本清单](https://github.com/zai-org/GLM-V)
- [GLM-ASR 官方实现](https://github.com/zai-org/GLM-ASR)
- [GLM-TTS 官方实现](https://github.com/zai-org/GLM-TTS)
- [GLM-OCR 官方实现](https://github.com/zai-org/GLM-OCR)
- [GLM-5.3-Flash 官方模型卡](https://huggingface.co/zai-org/GLM-5.3-Flash)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
