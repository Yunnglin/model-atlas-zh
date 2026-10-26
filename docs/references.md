# 参考资料与整理方法

## 资料如何进入知识库

优先从论文、官方代码与模型卡确认技术事实。课程与知识库帮助检查覆盖，面试库帮助发现问题和追问角度。每条技术关系保留一手来源；学习顺序属于本项目的教学组织。

第一阶段只精选代表性概念，不采集外部排行榜，不批量搬运他人答案。已核对的节点资料登记在 `src/content/data/sources.yaml`。

## 结构与解释参考

- [AI Lineage](https://will-hijazi.github.io/ai-lineage/)：演进关系、分栏与路径高亮的视觉组织参考。
- [LLM Research Lineage](https://github.com/llmsresearch/llm-research-lineage)：不同模型组合多条技术路线的组织参考。
- [Jay Alammar 图解](https://jalammar.github.io/illustrated-transformer/)：逐步引入概念与可视化解释方式。
- [Happy-LLM](https://github.com/datawhalechina/happy-llm)：中文内容覆盖参考。项目使用带非商业与相同方式共享条件的内容许可，本文不搬运其正文与图片。
- [Smol Course](https://github.com/huggingface/smol-course)：训练、偏好学习、评测与实践材料的覆盖参考。
- [RLHF Book](https://rlhfbook.com/)：后训练机制、术语和参考文献入口。

## 面试选题参考

- [LLM Interview Questions and Answers Hub](https://github.com/KalyanKS-NLP/LLM-Interview-Questions-and-Answers-Hub)：基础问题和工程话题入口。
- [AIGC-Interview-Book](https://github.com/km1994/AIGC-Interview-Book)：训练、后训练、CV、多模态与场景题的查漏补缺入口。

这些仓库用于检查题目范围，不作为所有答案正确的证明。参考库中的经验性比例、成绩与公司面试传闻不能直接写成技术事实。当前题目由本项目重新编写，并附上对应的一手资料。

核对日期：2026-10-26。后续扩充时按具体主题补查官方资料，并记录变化。

## 本批内容的一手依据

Qwen：第一代至 3.8 的官方报告与发布记录、VL、Audio／ASR、Omni、TTS、Coder、Image、Embedding 与 Guard 仓库。Kimi：K1.5 报告，K2、K2.5、K2.6、K2.7 Code、K3 与 Linear／VL／Audio 官方模型卡。GLM：原始填空论文、ChatGLM 家族报告、GLM-4.5 与 GLM-5 官方版本说明，以及视觉、语音和 OCR 仓库。

每篇正文列直接来源，完整清单登记在 `sources.yaml`。发布页、报告与可下载权重分别核对；例如 Qwen3.8-Omni 的报告和开源工具不作为模型权重开放的证据。所有型号的许可证仍按具体仓库核对。
