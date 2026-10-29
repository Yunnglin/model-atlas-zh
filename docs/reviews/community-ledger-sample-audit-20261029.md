# 社区审校证据抽查（2026-10-29）

核查 `review-ledger.yaml` 和 `training-review-ledger.yaml` 中列为社区完成的 20 条：阅读其 `completedEvidence.community` 记录，核对作者、文章、实读时间、赞同和收藏、与官方资料对照的范围。此处检查审校记录的可追溯性，不声称重新阅读全部 20 篇知乎文章，也不将本文抽查结果推广到全库。

| 类型 | 条目                                     | 证据                                                                                                                                                                                                       |
| ---- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 模型 | Transformer                              | [记录](transformer-full-review-20261029.md)                                                                                                                                                                |
| 模型 | DeepSeek-V3 / R1                         | [V3](deepseek-v3-full-review-20261029.md)、[R1](deepseek-r1-full-review-20261029.md)                                                                                                                       |
| 模型 | Qwen3 / Qwen2.5-VL / Qwen3-ASR           | [Qwen3](qwen3-full-review-20261029.md)、[VL](qwen25vl-full-review-20261029.md)、[ASR](qwen3-asr-full-review-20261029.md)                                                                                   |
| 模型 | Llama 3.1 / Kimi K2 / GLM-5 / MiniMax-M2 | [Llama](llama31-full-review-20261029.md)、[Kimi](kimi-k2-full-review-20261029.md)、[GLM](glm5-full-review-20261029.md)、[MiniMax](minimax-m2-full-review-20261029.md)                                      |
| 方法 | LoRA / SFT / PPO / GRPO / GSPO           | [LoRA](lora-full-review-20261029.md)、[SFT](sft-full-review-20261029.md)、[PPO](ppo-full-review-20261029.md)、[GRPO](grpo-full-review-20261029.md)、[GSPO](gspo-full-review-20261029.md)                   |
| 方法 | RLVR / DPO / 蒸馏 / 量化 / RLHF          | [RLVR](rlvr-full-review-20261029.md)、[DPO](dpo-full-review-20261029.md)、[蒸馏](distillation-full-review-20261029.md)、[量化](quantization-full-review-20261029.md)、[RLHF](rlhf-full-review-20261029.md) |

这些记录均有可定位的社区材料、具体互动数字和观点范围。模型版本匹配及算法对应以这些记录所述为检查依据；不能由赞藏数推断技术正确，也不能据此证明文章每个结论均已核实。

- DeepSeek-V3 与 R1 原完整审校记录未写明作者；本轮在已登录 Chrome 直接复读两个页面，确认均为 tomsheep，2026-10-29 分别为 448 赞／758 收藏和 195 赞／301 收藏，已补入两份记录。互动数量会变化。
- MiniMax-M2 的原审校记录明确：Chrome 用于核对作者及赞藏，正文通过网页检索读取；不能把它写成 Chrome 已实读正文。知乎文章是单次使用观察，不是统一协议评测。
- Qwen3-ASR 的参考文章记录为 5 赞／15 收藏，含模型配置与代码讨论；互动数较少，反映参考范围，不能仅据此判断质量。
- 其余条目本轮只核读既有审校材料，未重新登录访问原文或核实实时互动数。未修改共享台账状态。
