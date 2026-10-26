---
title: Kimi 视觉、音频与 Linear 分支
atlas:
  id: kimi-multimodal
  modality: omni
  year: 2025
  featured: false
  aliases:
    - Kimi-VL
    - Kimi-Audio
    - Kimi Linear
    - Kimi K2.5
    - Kimi K2.6
    - Kimi K2.7 Code
  purpose: 比较不同分支的结构与任务
  summary: 整理 VL、Audio、Linear 以及 K2.5 至 K2.7 的公开模型，避免把产品功能当架构。
  question: 这些分支怎样关联，又为什么不能互相替代？
  sources:
    - kimi-vl-card
    - kimi-audio-card
    - kimi-linear-card
    - kimi-k25-code
    - kimi-k26-card
    - kimi-k27-card
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

读文档截图、听录音、修改仓库与降低长文本成本分别需要不同能力。Kimi 的这些分支有共同家族背景，但不是一个模型的几个开关。[返回系列](/nlp/kimi/)。

## 结构与数据流

| 模型           | 重点结构或目标                                        | 公开型号示例                               |
| -------------- | ----------------------------------------------------- | ------------------------------------------ |
| Kimi-VL        | MoonViT 视觉编码器与 MoE 语言路径，图文／视频理解     | A3B Instruct、Thinking，后续 Thinking-2506 |
| Kimi-Audio     | 统一音频理解、生成与对话                              | 7B、7B-Instruct；具体输出能力按接口        |
| Kimi Linear    | KDA 与其他注意力层混合，减少长历史缓存成本            | 48B-A3B Base、Instruct                     |
| Kimi K2.5      | 基于 K2 的视觉文本持续预训练，原生多模态与工具任务    | K2.5 开放权重                              |
| Kimi K2.6      | 加强长程代码、视觉设计与任务协作                      | K2.6 开放权重                              |
| Kimi K2.7 Code | 基于 K2.6 的代码专用更新，MLA、MoonViT 等配置见模型卡 | K2.7-Code 开放权重                         |

Kimi Linear 的 KDA 可以先理解为对压缩记忆进行细粒度门控，不能把内存降低的报告数字直接当成任何硬件、长度下都成立。K2.5 的视觉能力也不是由“把两个模型接起来”这句话就能解释完整。

## 数据与训练

视觉模型需要图文与视频材料；Audio 需要声音与文字、音频目标；代码任务需要可执行环境和轨迹。K2.5 官方明确在 K2 基础上持续预训练视觉与文本。后续版本公开资料的细节不同，不能反向把它们的训练流程套给早期型号。

## 评测怎么看

视觉看文字、空间和跨帧证据，语音看内容与声音质量，Linear 看长文本质量和硬件成本，代码看测试与需求完成。评测指标应随任务改变，而不是把所有分支排在一张聊天榜上。

## 应用与错例

截图代码任务中，“看错按钮”与“生成代码错误”分别归因；音频对话中“听错文字”和“说话不清楚”分别处理。补对应数据后回归新场景，不仅检查训练过的样本。对照案例见[视觉问答](/cases/visual-qa/)与[全模态助手](/cases/omni-assistant/)。

## 比较与面试追问

**A3B 意味着整个模型只有约 3B 参数吗？** 通常指激活规模，具体范围还要看模型卡是否只统计语言解码器。

**K2.7 Code 是 K3 吗？** 不是，命名与官方说明对应不同代际和训练路线。

## 参考资料

- [Kimi-VL 官方模型卡](https://huggingface.co/moonshotai/Kimi-VL-A3B-Instruct)
- [Kimi-Audio 官方模型卡](https://huggingface.co/moonshotai/Kimi-Audio-7B-Instruct)
- [Kimi Linear 官方模型卡](https://huggingface.co/moonshotai/Kimi-Linear-48B-A3B-Instruct)
- [Kimi K2.5 官方实现](https://github.com/MoonshotAI/Kimi-K2.5)
- [Kimi K2.6 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)
- [Kimi K2.7 Code 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
