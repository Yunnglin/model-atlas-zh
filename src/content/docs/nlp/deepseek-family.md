---
title: DeepSeek 系列
atlas:
  id: deepseek-family
  kind: model
  modality: nlp
  year: 2024
  featured: false
  aliases: []
  purpose: 梳理 DeepSeek 主要代际
  summary: 从 V2、V3.1、V3.2 到 V4 和 V4.1 的官方资料入口。
  question: 不同代际的注意力、推理模式和视觉能力有什么区别？
  sources:
    - deepseek-llm-paper
    - deepseek-coder-paper
    - deepseek-math-paper
    - deepseek-math-v2-paper
    - janus-pro-release
    - deepseek-coder-v2-paper
    - deepseek-vl2-paper
    - deepseek-v32-release
    - deepseek-v2-release
    - deepseek-v31-release
    - deepseek-v32-paper
    - deepseek-v4-release
    - deepseek-v4-flash-card
    - deepseek-v4-pro-card
    - deepseek-v41-release
    - deepseek-v41-card
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 从 V2 到 V4.1

DeepSeek 有通用模型、推理模型和视觉等不同分支。V2、V3、V3.1、V3.2 和 V4 是主要通用模型代际；R1 是以推理为重点的分支。不同版本和检查点的结构、发布日期与输入模态需要分别核对，不能只根据数字大小判断继承关系。

| 版本             | 官方资料提供的线索              | 阅读入口                                                                                        |
| ---------------- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| V2               | MoE 和多头潜在注意力（MLA）     | [官方实现](https://github.com/deepseek-ai/DeepSeek-V2)                                          |
| V3               | MoE、MLA 与训练系统             | [V3 讲解](/nlp/deepseek-v3/)                                                                    |
| R1               | 推理后训练与蒸馏                | [R1 讲解](/nlp/deepseek-r1/)                                                                    |
| Coder / Coder-V2 | 代码生成与补全                  | [初代论文](https://arxiv.org/abs/2401.14196)、[V2 论文](https://arxiv.org/abs/2406.11931)       |
| Math / Math-V2   | 数学推理；V2 探索证明的自我验证 | [Math 论文](https://arxiv.org/abs/2402.03300)、[Math-V2 论文](https://arxiv.org/abs/2511.22570) |
| Janus-Pro        | 图像理解与生成                  | [官方项目](https://github.com/deepseek-ai/Janus)                                                |
| V3.1             | 思考与非思考两种模式、工具任务  | [官方发布](https://www.deepseek.com/en/news/deepseek-v3-1/)                                     |
| V3.2             | 稀疏注意力和工具相关训练        | [技术报告](https://arxiv.org/abs/2512.02556)                                                    |
| V4 Flash / Pro   | 两个不同规格，关注长上下文      | [官方发布](https://www.deepseek.com/news/v4-preview/)                                           |
| V4.1 Flash       | 官方模型卡列出视觉输入能力      | [官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)                            |

V4 Flash 的[模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)和 V4 Pro 的[模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)分别说明了各自的权重与运行方法。版本之间的时间先后不自动意味着直接继承权重；API 名称也可能随着服务更新而指向新的检查点。

## 阅读时先分清几件事

MoE 的“总参数”和“每次激活参数”分别影响权重存储和计算路径；更少激活并不意味着部署只需保存这部分权重。稀疏或压缩注意力用于组织上下文，不能仅凭名称判断它对每种长文任务都更准确。

评测时应固定检查点、提示词、工具框架、数据集和计算预算。一个模型会处理图片，不等于它能生成图片；模型卡的输入输出规格需要单独看。新版本的结构图、具体训练流程和完整评测说明正在逐篇补充，当前这里是系列资料入口。

## 参考资料

- [DeepSeek LLM 论文](https://arxiv.org/abs/2401.02954)
- [DeepSeek-Coder 论文](https://arxiv.org/abs/2401.14196)
- [DeepSeekMath 论文](https://arxiv.org/abs/2402.03300)
- [DeepSeekMath-V2 论文](https://arxiv.org/abs/2511.22570)
- [Janus-Pro 官方项目](https://github.com/deepseek-ai/Janus)
- [DeepSeek-Coder-V2 论文](https://arxiv.org/abs/2406.11931)
- [DeepSeek-VL2 论文](https://arxiv.org/abs/2412.10302)
- [DeepSeek-V3.2 官方发布](https://deepseek.com/en/news/deepseek-v3-2/)
- [DeepSeek-V2 官方发布记录](https://github.com/deepseek-ai/DeepSeek-V2)
- [DeepSeek-V3.1 官方发布](https://www.deepseek.com/en/news/deepseek-v3-1/)
- [DeepSeek-V3.2 技术报告](https://arxiv.org/abs/2512.02556)
- [DeepSeek-V4 官方预览版发布](https://www.deepseek.com/news/v4-preview/)
- [DeepSeek-V4-Flash 官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
- [DeepSeek-V4-Pro 官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
- [DeepSeek-V4.1-Flash 官方发布](https://www.deepseek.com/news/deepseek-v4-1-flash/)
- [DeepSeek-V4.1-Flash 官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
