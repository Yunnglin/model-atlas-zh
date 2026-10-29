# 交付前正文抽查记录

核对日期：2026-10-28。以 `model-coverage-audit.md` 的模型页面清单为入口，抽取 13 篇、12 个模型家族，覆盖文本、视觉、语音及多模态；重点查看字数之外的型号边界、结构、训练、评测、例子和资料来源。下表只记本次核对的代表性主张，不表示对应论文所有数字已逐项复算。

| 页面                              | 本次检查的具体要点及一手依据                                                                                                                                                      |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nlp/bert.md`                     | 双向表示、微调和论文 SQuAD 成绩的型号与集成边界；[BERT 论文](https://arxiv.org/abs/1810.04805)。                                                                                  |
| `nlp/llama.md`                    | 3.1 的 8B／70B／405B、128K、405B 预训练规模与许可边界；[Meta 发布说明](https://ai.meta.com/blog/meta-llama-3-1/)、[模型卡](https://huggingface.co/meta-llama/Meta-Llama-3.1-8B)。 |
| `nlp/kimi-k3.md`                  | KDA／MLA 分工与 896 路由专家选 16 的描述；[K3 技术报告](https://arxiv.org/abs/2607.24653)、[官方开放说明](https://www.kimi.com/news/kimi-k3-open-source)。                        |
| `nlp/deepseek-v4-pro-model.md`    | Pro 33T 预训练、混合注意力与领域专家训练后进行在线蒸馏；[V4 报告](https://arxiv.org/html/2606.19348)、[Pro 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)。          |
| `nlp/glm53-flash-model.md`        | Flash 是新基座、IndexPool 与评价配置；[官方说明](https://z.ai/blog/glm-5.3-flash)、[模型卡](https://huggingface.co/zai-org/GLM-5.3-Flash)。                                       |
| `nlp/qwen3-embedding-model.md`    | Embedding 与 Reranker 分工、2025 年多语言 MTEB 70.58 的时间边界；[官方发布](https://qwenlm.github.io/blog/qwen3-embedding/)、[技术报告](https://arxiv.org/abs/2506.05176)。       |
| `omni/qwen38.md`                  | 27B 与 2.4T 权重的输入模态、许可和榜单条件；[27B 模型卡](https://huggingface.co/Qwen/Qwen3.8-27B)、[2.4T 模型卡](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)。                 |
| `omni/minimax-m31-flash-model.md` | M3.1 Flash 的输入、428B／23B 及 DSpark；[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)。                                                                       |
| `audio/whisper.md`                | 原版 30 秒处理、语音到英文翻译与 68 万小时数据；[OpenAI 发布](https://openai.com/index/whisper/)、[论文](https://arxiv.org/abs/2212.04356)。                                      |
| `cv/stable-diffusion.md`          | v1-4 从 v1-2 恢复训练，225,000 步和文本条件丢弃；[v1-4 模型卡](https://huggingface.co/CompVis/stable-diffusion-v1-4)。                                                            |
| `cv/vit.md`                       | 图像分块、分类模型及大规模预训练背景；[ViT 论文](https://arxiv.org/abs/2010.11929)。                                                                                              |
| `cv/clip.md`                      | 图文双编码、4 亿配对和零样本分类的含义；[CLIP 论文](https://arxiv.org/abs/2103.00020)。                                                                                           |
| `cv/sam.md`                       | 提示式图像分割与 SA-1B 规模；[SAM 论文](https://arxiv.org/abs/2304.02643)。                                                                                                       |

## 修改与观察

- `omni/qwen38.md` 的搜索别名原含 Qwen3.5 和 Qwen3.6；它们是相关前代，不是 Qwen3.8 的别名，已移除，保留正文中有明确版本标记的比较。搜索的名称匹配会读取别名，因此原数据会把不同代际作为同一名称匹配。
- `nlp/glm53-flash-model.md` 中社区评测引用两次使用“本项目未复现”等站点自指，改为告诉读者该段没有提供独立复现结果，保留供应商和实验配置限定。
- 这 13 篇并非只用相同段落拼接：例如 DeepSeek 区分 Pro 与 Flash 的注意力，Embedding 区分召回与重排，SAM 区分预测质量与实际 IoU，Whisper 明确翻译方向。多篇采用相同的教学案例、指标口径和实验限制提示；重复的提示可在后续编辑中继续压缩，但不宜为了字数删除版本和条件。

## 范围与限制

这是针对 13 篇的抽样核对，**不是 96 篇逐篇审校**；未运行模型、复现任何基准、验证每个图片授权或逐项检查全部外链。对较新的模型，以上依据以核对时公开的模型卡与报告为准，服务功能和权重可能变化。对于上述未抽查页面，覆盖表或字数达标不能证明正确性和讲解深度。后续可优先按模型版本逐篇检查同系列别名、评测条件和图文对应关系。
