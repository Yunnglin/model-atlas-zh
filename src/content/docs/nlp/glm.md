---
title: GLM 系列
atlas:
  id: glm
  modality: nlp
  year: 2021
  featured: true
  aliases:
    - 智谱
    - ChatGLM
    - GLM-130B
    - GLM-4
    - GLM-4.5
    - GLM-4.6
    - GLM-4.7
    - GLM-5
    - GLM-5.1
    - GLM-5.2
    - GLM-5.3
  purpose: 从填空预训练到长程任务
  summary: 串起 GLM、ChatGLM、GLM-4 到 5.3，说明代际变化与视觉、语音、OCR 分支。
  question: 早期 GLM 的填空目标，能代表所有后续型号吗？
  sources:
    - glm-paper
    - chatglm-paper
    - chatglm-code
    - glm4-card
    - glm45-code
    - glm5-code
    - glm53-card
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

GLM 最早研究怎样用一个预训练框架处理理解与生成，ChatGLM 面向中文对话，后续 GLM 更关注推理、代码和工具任务。把这条线读清楚，比记住每次榜单分数更有用。

## 结构与数据流

| 代际                          | 主要变化与学习重点                                      | 公开入口                                      |
| ----------------------------- | ------------------------------------------------------- | --------------------------------------------- |
| GLM（2021）／GLM-130B（2022） | 自回归填空、二维位置与大规模双语预训练                  | 原始论文与开放模型；[早期详解](/nlp/chatglm/) |
| ChatGLM-6B（2023）            | 双语对话与对齐                                          | 开放权重，按具体许可证使用                    |
| ChatGLM2（2023）              | 长文本、推理效率与多查询注意力等改进                    | 独立代际，不是初代改名                        |
| ChatGLM3（2023）              | 工具、代码执行和多任务格式                              | 开放 6B 系列与官方实现                        |
| GLM-4（2024）                 | 多语言、长文本与工具能力；9B、长窗口及 4V 等开放型号    | 开放型号不等于所有 GLM-4 API 型号             |
| GLM-4.5（2025）               | MoE、推理与 Agent 任务                                  | 开放权重；[4.5 至 5.3](/nlp/glm-modern/)      |
| GLM-4.6／4.7                  | 长上下文、代码与工具任务持续更新，思考行为也有变化      | 官方仓库分别列出型号与功能                    |
| GLM-5（2026）                 | 744B 总参数、40B 激活，DSA 稀疏注意力与异步 RL 基础设施 | 开放权重与技术报告                            |
| GLM-5.1                       | 加强长程代码与工程任务                                  | 开放权重，任务环境需一起记录                  |
| GLM-5.2                       | 百万上下文、IndexShare 与 MTP 改进                      | 开放权重，具体许可看模型卡                    |
| GLM-5.3                       | 与 5.2 共用基础模型，官方说明提升来自后训练             | 开放权重；不能推测为全新预训练架构            |
| GLM-5.3-Flash                 | 新基础模型，稀疏与线性注意力混合、mHC、原生多模态       | 开放权重；不是 5.3 简单量化                   |

视觉、音频与 OCR 的代际见[分支页](/omni/glm-multimodal/)。API、权重、训练数据和许可证是不同维度，“开放”不意味着每项都公开。

## 数据与训练

早期 GLM 的填空目标是把被遮住的一段文字按顺序生成出来，可以看到未遮住的上下文；与 BERT 逐位置预测和普通左到右续写作比较。后续型号不断改变数据、网络与后训练，不能凭家族名字断言全都使用完全相同的注意力掩码。

现代 GLM 的代码、推理和工具训练，还需要执行反馈与长程轨迹。[SFT](/training/sft/)、[RLHF](/training/rlhf/)与[RLVR](/training/rlvr/)是方法入口；具体版本用了哪些，只按其公开报告写。

## 评测怎么看

区分基础知识、长文定位、跨段推理、代码正确与任务完成。Base 与 Chat、主型号与 Flash、思考与非思考分别记录。尤其不要把更长窗口等同于更强推理，或把框架加速归因于模型训练。

## 应用与错例

中文工具助手不执行动作，先查工具模板；动作有了但参数错，查轨迹与字段；长程任务偏离要求，查上下文与反馈。给每类失败准备独立样本，修复后回归，避免只提高一个总分。

## 比较与面试追问

**GLM-5.3 与 Flash 为什么要分开讲？** 官方说明前者沿用 5.2 基础模型做后训练，后者有重新训练的基础与不同架构。

**ChatGLM 和 BERT 都填空，目标相同吗？** 早期 GLM 是自回归生成被遮住的片段，BERT 的掩码预测方式不同。比较时应说明具体代际。

## 参考资料

- [GLM: Autoregressive Blank Infilling](https://arxiv.org/abs/2103.10360)
- [ChatGLM: From GLM-130B to GLM-4 All Tools](https://arxiv.org/abs/2406.12793)
- [ChatGLM3 官方实现与历史模型入口](https://github.com/THUDM/ChatGLM3)
- [GLM-4-9B-Chat 官方模型卡](https://huggingface.co/THUDM/glm-4-9b-chat)
- [GLM-4.5／4.6／4.7 官方实现](https://github.com/zai-org/GLM-4.5)
- [GLM-5 至 5.3 官方实现与发布说明](https://github.com/zai-org/GLM-5)
- [GLM-5.3 官方模型卡与许可证](https://huggingface.co/zai-org/GLM-5.3)
- [GLM-5.3-Flash 官方模型卡](https://huggingface.co/zai-org/GLM-5.3-Flash)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
