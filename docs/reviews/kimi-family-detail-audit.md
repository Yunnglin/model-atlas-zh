# Kimi 系列页面核对

核对日期：2026-10-28。检查每页列出的部分具体结构、训练或评测主张与对应版本的一手资料；不等于所有段落、评测设置或图片已逐句核实，也未实际运行模型。

| 页面                                                            | 本轮核对依据与范围                                                                                                                                                                                |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Kimi k1.5](../../src/content/docs/nlp/kimi.md)                 | [论文](https://arxiv.org/abs/2501.12599)区分长、短推理结果，AIME 2024 长推理为 77.5，短推理为 60.8。                                                                                              |
| [Kimi K2](../../src/content/docs/nlp/kimi-k2.md)                | [报告](https://arxiv.org/abs/2507.20534)表 3 的 LiveCodeBench v6 是 Pass@1，AIME 2025 是 Avg@64；正文已补明采样口径。Thinking 为另一个检查点，不能将其结果套给原版 Instruct。                     |
| [Kimi Linear](../../src/content/docs/nlp/kimi-linear-model.md)  | [报告](https://arxiv.org/abs/2510.26692)表 3 与附录表 9 分别给出 1.4T 对照与 5.7T 模型的结果，RULER 1M 为 94.8。                                                                                  |
| [Kimi K3](../../src/content/docs/nlp/kimi-k3.md)                | [模型卡](https://huggingface.co/moonshotai/Kimi-K3)列出 2.8T／104B、69 KDA 与 24 Gated MLA，以及 BrowseComp 压缩条件。                                                                            |
| [Kimi-VL](../../src/content/docs/omni/kimi-vl-model.md)         | [报告](https://arxiv.org/abs/2504.07491)分开视觉训练与联合训练，总计 4.4T token；InfoVQA 83.2 是该基准结果，不代表所有 OCR。                                                                      |
| [Kimi-Audio](../../src/content/docs/audio/kimi-audio-model.md)  | [报告](https://arxiv.org/abs/2504.18425)描述约 1300 万小时原始音频与 LibriSpeech test-clean／test-other 的 WER。                                                                                  |
| [Kimi K2.5](../../src/content/docs/omni/kimi-k25-model.md)      | [报告](https://arxiv.org/abs/2602.02276)将 15T 放在联合预训练阶段，MMMU-Pro 为 78.5；[模型卡](https://huggingface.co/moonshotai/Kimi-K2.5)将视频对话列为实验性官方 API 功能，正文已补上接口限制。 |
| [Kimi K2.6](../../src/content/docs/omni/kimi-k26-model.md)      | [模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)列出 384 路由专家选 8、1 个共享专家和相应评测；视频对话的官方 API 限制已补充。                                                               |
| [Kimi K2.7 Code](../../src/content/docs/omni/kimi-k27-model.md) | [模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)列出其与 K2.6 的 Code Bench、Program Bench 及 MCP Atlas 测试结果和条件；视频对话的官方 API 限制已补充。                                 |
| [分支概览](../../src/content/docs/omni/kimi-multimodal.md)      | 对照上述版本资料，检查视觉、音频与 Linear 的能力边界；这篇是概览，具体实验以前述独立页面为准。                                                                                                    |

接口能力与许可证可能更新，上述说明反映核对时官方资料；具体部署以当前模型卡、框架和服务文档为准。
