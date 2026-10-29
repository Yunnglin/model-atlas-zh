# GLM 系列版本核对

核对日期：2026-10-28。逐页检查时间轴所列 13 个 GLM 模型页面的版本边界，并针对下列代表性主张查阅论文、官方模型卡或发布材料；不是对全部正文逐句、模型运行结果或所有许可条款的独立验证。

| 页面                                                             | 本轮核对的主张与一手依据                                                                                                                              |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [原始 GLM](../../src/content/docs/nlp/glm-original-model.md)     | [论文](https://arxiv.org/abs/2103.10360)介绍自回归填空、打乱空白生成顺序与二维位置；它不是后来 ChatGLM 的完整训练配方。                               |
| [ChatGLM-6B](../../src/content/docs/nlp/chatglm.md)              | [官方仓库](https://github.com/zai-org/ChatGLM-6B)标示 6.2B、约 1T 中英文 token 和对话后训练；数值不套给 GLM-130B。                                    |
| [GLM-V](../../src/content/docs/omni/glm-v-model.md)              | 页面具体讨论 GLM-4V-9B；[对应模型卡](https://huggingface.co/zai-org/glm-4v-9b)称支持 1120×1120 图像。                                                 |
| [GLM-4.5](../../src/content/docs/nlp/glm45-model.md)             | [报告](https://arxiv.org/html/2508.06471)给出 355B／32B、训练长度逐步扩展至 131,072，以及特定设置下的 SWE-bench Verified 64.2。                       |
| [GLM-4.6](../../src/content/docs/nlp/glm46-model.md)             | [模型卡](https://huggingface.co/zai-org/GLM-4.6)说明约 200K 上下文和推荐评测参数；它引用 4.5 报告，不能据此补全 4.6 私有训练细节。                    |
| [GLM-4.7](../../src/content/docs/nlp/glm47-model.md)             | [模型卡](https://huggingface.co/zai-org/GLM-4.7)列出 SWE-bench Verified 73.8、Terminal Bench 2.0 41.0，结果有各自评测条件。                           |
| [GLM-ASR-Nano](../../src/content/docs/audio/glm-asr-model.md)    | [模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)列出约 1.5B 并讨论方言、低音量；它不是语音合成模型。                                        |
| [GLM-5](../../src/content/docs/nlp/glm5-model.md)                | [报告](https://arxiv.org/html/2602.15763)给出 744B、28.5T 训练 token 和 SWE-bench Verified 77.8，评测结果依赖具体框架与配置。                         |
| [GLM-5.1](../../src/content/docs/nlp/glm51-model.md)             | [模型卡](https://huggingface.co/zai-org/GLM-5.1)表中 SWE-Bench Pro 为 58.4，Terminal-Bench 2.0 的 Terminus-2 为 63.5，另列不同框架结果。              |
| [GLM-5.2](../../src/content/docs/nlp/glm52-model.md)             | [模型卡](https://huggingface.co/zai-org/GLM-5.2)说明四层索引复用、1M 条件下的计算比较及 Terminal-Bench 2.1 的不同框架结果；本轮增加教学例子。         |
| [GLM-5.3](../../src/content/docs/nlp/glm53-model.md)             | [模型卡](https://huggingface.co/zai-org/GLM-5.3)称与 5.2 共用基座、使用专用许可，给出 Terminal-Bench 3.0 的框架及预算；不能把结果当成单次无工具问答。 |
| [GLM-5.3-Flash](../../src/content/docs/nlp/glm53-flash-model.md) | [官方发布](https://z.ai/blog/glm-5.3-flash)区分 320B／18B 多模态新基座和 5.3；MMLU 88.1 是 Flash-Base 的数值。                                        |
| [GLM-OCR](../../src/content/docs/omni/glm-ocr-model.md)          | [模型卡](https://huggingface.co/zai-org/GLM-OCR)标示约 0.9B 和文档解析任务；PDF 页面组织仍属于应用流程。                                              |

评测数字均为相关来源报告，未独立运行模型或重现基准；图像、数据许可和每个版本的全量结构细节需要另行核查。
