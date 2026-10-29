# 非 Qwen、Kimi、GLM 时间线模型审阅进度

核查日期：2026-10-28。按当前 `model-timeline.yaml` 的组织字段，排除阿里巴巴、Moonshot AI、智谱 / 清华，共 **62 条**：DeepSeek 18、MiniMax 7、其他 37。以下逐 ID 映射到有明确范围的现存记录，不代表全文所有技术陈述均已核对，也不代表独立审阅、完整图示审核或模型运行已经完成。

标记含义：**结构、训练、评测**仅指记录中所列的代表性事实或公开信息；**图**指审校记录明确描述的图示范围，不等于逐像素或全部连线检查；**社区**指记录中的实读或历史材料线索，系列文章不一定覆盖每个版本。未写某项只说明本表所引记录未明确覆盖，不断言其他记录完全没有涉及。赞同和收藏为历史快照。

## DeepSeek（18 条）

| 时间线 ID          | 已找到的记录与范围                                                                                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| deepseek-llm       | [初代与 V4 审校](deepseek-remaining-audit.md)：结构、训练、部分评测、图标题与节点文字；社区沿用历史记录。                                                                    |
| deepseek-v2        | [核心版本审校](deepseek-core-audit.md)：结构、训练、部分评测和图文字；[V2 / V2.5 补查](deepseek-v2-v25-followup-20261028.md)：结构与缓存算例。                               |
| deepseek-v25       | [V2 / V2.5 补查](deepseek-v2-v25-followup-20261028.md)：结构与部分评测，完整训练配方未公开；[社区核查](deepseek-new-community-logged-in.md)。                                |
| deepseek-v3        | [核心版本审校](deepseek-core-audit.md)：结构、训练、部分评测和图文字；[V3 / R1 复核](deepseek-v3-r1-independent-20261028.md)补充配置和评测。                                 |
| deepseek-v3-0324   | [版本资料核对](deepseek-v3-0324-audit.md)；[图示及评测定向复核](deepseek-versions-figure-eval-20261028.md)：对照官方模型卡检查指标、采样说明和教学图。                       |
| deepseek-v31       | [核心版本审校](deepseek-core-audit.md)：结构、公开训练信息、部分评测和图文字；[V3.1 / V3.2 核查](deepseek-v31-v32-review-20261028.md)。                                      |
| deepseek-v32       | [核心版本审校](deepseek-core-audit.md)：结构、训练、部分评测和图文字；[社区补查](omnijev-zhihu-direct-search-20261028.md)所读文章实际聚焦 V3.2-Exp。                         |
| deepseek-r1        | [核心版本审校](deepseek-core-audit.md)：结构、训练、部分评测及训练图；[V3 / R1 复核](deepseek-v3-r1-independent-20261028.md)。                                               |
| deepseek-r1-0528   | [V3 / R1 复核](deepseek-v3-r1-independent-20261028.md)；[图示及评测定向复核](deepseek-versions-figure-eval-20261028.md)：对照官方模型卡检查评测设置、工具任务和教学图。      |
| deepseek-coder     | [专用模型审校](deepseek-special-audit.md)：结构、训练、部分评测、图标题及节点；社区为既有阅读记录。                                                                          |
| deepseek-coder-v2  | [专用模型审校](deepseek-special-audit.md)：结构、训练、部分评测、图标题及节点；[社区补查](community-weak-models-20261028.md)。                                               |
| deepseek-math      | [专用模型审校](deepseek-special-audit.md)：结构、训练、部分评测、图标题及节点；社区为既有阅读记录。                                                                          |
| deepseek-math-v2   | [专用模型审校](deepseek-special-audit.md)：结构、训练、部分评测、图标题及节点；社区为既有阅读记录。                                                                          |
| deepseek-vl2       | [专用模型审校](deepseek-special-audit.md)、[视觉模型复核](deepseek-vision-audit-2026-10-28.md)：结构、训练、部分评测与教学图范围；社区参考沿用既有阅读记录。                 |
| janus-pro          | [专用模型审校](deepseek-special-audit.md)、[视觉模型复核](deepseek-vision-audit-2026-10-28.md)：结构、训练、部分评测；修正图中文字问题的输入路径；社区参考沿用既有阅读记录。 |
| deepseek-v4-flash  | [初代与 V4 审校](deepseek-remaining-audit.md)：结构、训练、部分评测、图标题与节点文字；社区沿用历史记录。                                                                    |
| deepseek-v4-pro    | [初代与 V4 审校](deepseek-remaining-audit.md)：结构、训练、部分评测、图标题与节点文字；社区沿用历史记录。                                                                    |
| deepseek-v41-flash | [初代与 V4 审校](deepseek-remaining-audit.md)：结构、训练、部分评测、图标题与节点文字；社区沿用历史记录。                                                                    |

## MiniMax（7 条）

| 时间线 ID         | 已找到的记录与范围                                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| minimax-m1        | [M1 内容核对](minimax-m1-review-20261028.md)：结构、论文计算口径、教学图定位与知乎实读；未运行模型。                         |
| minimax-m2        | [核心模型审校](minimax-core-audit.md)：结构、训练、部分评测、图标题文字和连接；社区沿用历史记录。                            |
| minimax-m21       | [版本复核](minimax-versions-second-20261028.md)：配置、公开训练信息、部分评测及图示。                                        |
| minimax-m25       | [核心模型审校](minimax-core-audit.md)：结构、训练、部分评测、图标题文字和连接；社区沿用历史记录。                            |
| minimax-m27       | [核心模型审校](minimax-core-audit.md)、[版本复核](minimax-versions-second-20261028.md)：结构、公开训练信息、部分评测和图示。 |
| minimax-m3        | [核心模型审校](minimax-core-audit.md)：结构、训练、部分评测、图标题文字和连接；社区沿用历史记录。                            |
| minimax-m31-flash | [核心模型审校](minimax-core-audit.md)、[版本复核](minimax-versions-second-20261028.md)：结构、公开训练信息、部分评测和图示。 |

[MiniMax 社区资料](minimax-community.md)和[既有知乎阅读记录](zhihu-reading.md)需按具体版本和文章范围使用，不能把家族文章自动视为每一版本的独立评测。

## 其他模型（37 条）

| 时间线 ID        | 已找到的记录与范围                                                                                                                                                                                                               |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transformer      | [基础语言模型审校](foundation-audit.md)：结构、训练、部分评测、图文字和连接；社区沿用历史记录。                                                                                                                                  |
| bert             | [基础语言模型审校](foundation-audit.md)、[经典模型卡复核](classic-nlp-cards-final.md)：结构、训练、部分评测及图示范围。                                                                                                          |
| gpt              | [基础语言模型审校](foundation-audit.md)、[经典模型卡复核](classic-nlp-cards-final.md)：GPT-2 结构、训练、部分评测及图示范围。                                                                                                    |
| t5               | [基础语言模型审校](foundation-audit.md)、[经典模型卡复核](classic-nlp-cards-final.md)：结构、训练、部分评测及图示范围。                                                                                                          |
| llama            | [基础语言模型审校](foundation-audit.md)：Llama 3.1 的结构、训练及图示；[3.1 / 3.3 结构核查](llama31-llama33-architecture-review-20261028.md)含 70B 配置和新图渲染检查。                                                          |
| vit              | [视觉模型专题复核](vision-followup.md)：结构、训练、部分评测、教学图和知乎实读。                                                                                                                                                 |
| swin             | [视觉模型专题复核](vision-followup.md)：结构、训练、部分评测及教学图；社区资料另见该记录。                                                                                                                                       |
| sam              | [视觉模型专题复核](vision-followup.md)：结构、训练、部分评测及教学图；社区资料另见该记录。                                                                                                                                       |
| llava            | [视觉模型专题复核](vision-followup.md)：结构、训练、部分评测及教学图；社区资料另见该记录。                                                                                                                                       |
| clip             | [基础音频与视觉审校](legacy-audio-vision-audit.md)：结构、训练、部分评测及图标题和节点；社区沿用历史记录。                                                                                                                       |
| dit              | [基础音频与视觉审校](legacy-audio-vision-audit.md)：结构、训练、部分评测及图标题和节点；社区沿用历史记录。                                                                                                                       |
| encodec          | [基础音频与视觉审校](legacy-audio-vision-audit.md)：结构、训练、部分评测及图标题和节点；社区沿用历史记录。                                                                                                                       |
| stable-diffusion | [基础音频与视觉审校](legacy-audio-vision-audit.md)：v1-4 结构、训练、部分评测及图标题和节点；社区沿用历史记录。                                                                                                                  |
| wav2vec2         | [基础音频与视觉审校](legacy-audio-vision-audit.md)、[音频模型卡复核](audio-model-cards-final.md)：结构、训练、部分评测及图示范围。                                                                                               |
| vall-e           | [基础音频与视觉审校](legacy-audio-vision-audit.md)：结构、训练、部分评测及图标题和节点；社区沿用历史记录。                                                                                                                       |
| f5-tts           | [基础音频与视觉审校](legacy-audio-vision-audit.md)：结构、训练、部分评测及图标题和节点；社区沿用历史记录。                                                                                                                       |
| conformer        | [音频模型卡复核](audio-model-cards-final.md)：结构、训练和部分评测；[语音补充审校](speech-followup.md)记录知乎实读。                                                                                                             |
| whisper          | [音频模型卡复核](audio-model-cards-final.md)：结构、训练和部分评测；[语音补充审校](speech-followup.md)记录知乎实读。                                                                                                             |
| hubert           | [语音补充审校](speech-followup.md)：聚类、训练与部分评测细节，包含知乎实读；不代表该记录覆盖全文及配图。                                                                                                                         |
| claude           | [闭源与决策模型审校](closed-model-audit.md)：公开训练、评测和图文字；图不推测内部架构。                                                                                                                                          |
| gemini           | [闭源与决策模型审校](closed-model-audit.md)：Gemini 1.5 公开结构、训练、部分评测及图文字。                                                                                                                                       |
| gpt4o            | [闭源与决策模型审校](closed-model-audit.md)、[GPT-4 / 4o 复核](gpt4-gpt4o-second-review.md)：公开模态、训练披露、部分评测及示意图。                                                                                              |
| jev              | [闭源与决策模型审校](closed-model-audit.md)：公开接口、部分评测与图文字；不推测内部网络。                                                                                                                                        |
| omnijev          | [闭源与决策模型审校](closed-model-audit.md)：仓库公开结构、训练、部分评测及图文字；[知乎直接检索](omnijev-zhihu-direct-search-20261028.md)未找到可核实针对该仓库的直接文章。                                                     |
| gpt1             | [初代 GPT 核查](gpt1-independent.md)：结构、训练与知乎实读；不由该记录推断图的所有连线已检查。                                                                                                                                   |
| gpt3             | [GPT-3 核查](gpt3-independent.md)：结构、训练、部分评测、教学图范围与知乎实读。                                                                                                                                                  |
| gpt4             | [GPT-4 核查](gpt4-model-audit.md)、[GPT-4 / 4o 复核](gpt4-gpt4o-second-review.md)：公开结构、训练、部分评测及示意图；[社区补查](gpt4-community-20261028.md)。                                                                    |
| gpt5             | [GPT-5 核查](gpt5-independent.md)：公开系统、部分评测、教学图与知乎实读；完整内部架构和训练配方未公开。                                                                                                                          |
| instructgpt      | [InstructGPT 核查](instructgpt-independent.md)：结构、训练、部分评测、教学图范围与知乎实读。                                                                                                                                     |
| sam2             | [SAM 2 核查](sam2-independent.md)：结构、训练、部分评测与教学图；[后续社区实读](sam2-community-success-20261028.md)补充了首轮未找到的资料。                                                                                      |
| llama1           | [初代 LLaMA 核查](llama1-independent.md)：结构、训练、部分评测、教学图范围与知乎实读。                                                                                                                                           |
| llama2           | [Llama 2 核查](llama2-independent.md)：结构、训练、部分评测与教学图范围；首轮社区搜索未读到具体结果，后续可查[社区记录](llama2-community-20261028.md)。                                                                          |
| llama3           | [Llama 3 核查](llama3-independent.md)：结构、训练、部分评测、教学图范围与知乎实读。                                                                                                                                              |
| llama4           | [Llama 4 核查](llama4-independent.md)：结构、公开训练、部分评测及教学图范围；后续社区记录见 [Llama 4 社区](llama4-community-20261028.md)。                                                                                       |
| llama32-vision   | [Llama 3.2 Vision 核查](llama32-vision-independent.md)：结构、训练、部分评测及教学图范围；后续社区记录见 [视觉版社区](llama32-vision-community-20261028.md)。                                                                    |
| llama33          | [Llama 3.3 核查](llama33-independent.md)：结构、公开训练、部分评测及教学图范围；[结构核查](llama31-llama33-architecture-review-20261028.md)含新图渲染检查；后续社区记录见 [直接社区资料](llama33-direct-community-20261028.md)。 |
| llama32-text     | [Llama 3.2 文本版核查](llama32-text-independent.md)：结构、训练、部分评测及教学图范围；后续社区记录见 [文本版社区](llama32-text-community-20261028.md)。                                                                         |

## 当前边界

记录中的案例多为教学设计。上述论文与模型卡指标没有因此被本库重新训练、推理或复现；图标题、节点文字或文件存在也不能证明全部连接、语义、渲染和授权均已核验。大部分记录只核对代表性事实，有些审阅者曾参与同系列内容工作；是否独立、哪些具体结论已核查，应回看各记录的实际说明。

[时间线内容完整性审计](model-completion-audit-20261028.md)的页面、字数与图登记数量是清单检查；[社区完成度审计](community-completion-audit-20261028.md)所述覆盖数混合了官方介绍、低互动文章和单例，并不代表相同数量的高质量独立技术审阅。
