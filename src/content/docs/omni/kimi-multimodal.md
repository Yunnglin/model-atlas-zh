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

### Kimi-VL：截图怎样进入语言模型

MoonViT 编码截图，MLP projector 将视觉表示接到 MoE 语言模型，文字问题再与图像条件共同生成回答。例如问“哪个按钮用于保存”，视觉路径应提供按钮外观与位置，语言部分再结合任务理解用途；projector 不是提前把屏幕完整转成操作说明。

### Kimi-Audio：为什么保留两种音频表示

官方描述混合输入包括连续声学信息与离散语义 token，可以类比同时保留语气、声音细节与内容线索。语言核心有文字和音频输出路径，音频 token 经分块流匹配解码还原声音。文字回答正确、发声正常和用户情绪理解正确，需要分别验证。

### Kimi Linear：工作笔记与原始材料并用

48B-A3B 发布路线按 3:1 混合 KDA 与全局 MLA。KDA 对有限状态记忆作细粒度门控，全局 MLA 保留另一种历史读取路径；因此不是全模型没有 KV Cache。减少缓存的报告结论要带对应长度、硬件和实现，不能脱离条件抄倍率。

### K2.5、K2.6、K2.7 Code：连续任务与版本边界

K2.5 将视觉文本持续预训练与工具任务结合；后续 K2.6、K2.7 Code 面向更长的工程执行和代码工作。读一个仓库截图再修改代码，比静态问“图中有什么”多了动作、环境反馈和最终验收。版本更新不意味着各自公开了完整奖励函数；具体结构和训练仍以各自模型卡为准。

## 数据与训练

视觉模型需要图文与视频材料；Audio 需要声音与文字、音频目标；代码任务需要可执行环境和轨迹。K2.5 官方明确在 K2 基础上持续预训练视觉与文本。后续版本公开资料的细节不同，不能反向把它们的训练流程套给早期型号。

### 同一个录屏不能直接复用同一种标签

截图问答标签可以是按钮名称，GUI 轨迹还需要动作与下一状态；语音理解标签可能是文字或事件，语音生成则需要目标声音。把“能关掉通知”当标签，没有留下点击位置和执行结果，会省掉最关键的学习信号。

教学适配中先固定各分支输入接口，再整理相应数据。Thinking 版本用了额外推理训练，也不能推断音频输出路径、视觉编码器或所有基座同时改变。

## 评测怎么看

视觉看文字、空间和跨帧证据，语音看内容与声音质量，Linear 看长文本质量和硬件成本，代码看测试与需求完成。评测指标应随任务改变，而不是把所有分支排在一张聊天榜上。

### 同一次会议，用三套验收题

VL 从截图读出标题，Audio 从录音识别时间或语气，Linear 从长文字找出最后修订的决定。每个任务都有自己的真值与失败类型。把三项压成一个模态总分，会看不出到底哪里退化。

长程任务还要核对产物和工具状态。子任务并行数量、恢复逻辑与工具配置属于系统条件，不能将多代理系统成绩当成单次权重调用的自然表现。

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

资料核对：2026-10-27。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
