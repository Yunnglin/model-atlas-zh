# 训练知识库覆盖审计（2026-10-28）

## 结论和方法

当前 `src/content/docs/training/` 有 17 篇：LoRA、SFT、偏好对齐、PPO/GRPO/DAPO/GSPO/RLOO、RLVR、蒸馏与量化均有独立入口，足以建立主要概念脉络；不能因此宣称训练技术已完整覆盖或每篇都达到深度教程。尤其数据质量、扩散与流匹配和总流程偏入门，若目标是深入学习与面试，仍有实质缺口。

本轮只读核查文章正文、标题、图引用与本地文件是否存在、外部引用和模型正文 Markdown 链接；结合已有审校记录，不修改内容、图或共享数据。模型互链统计仅按 `nlp/`、`cv/`、`audio/`、`omni/` 下 Markdown 中的 `/training/方法/` 形式统计，不代表网站所有自动生成关联，亦不代表技术归因已验证。不能以篇幅、链接数量或有图等同于事实正确或深度完成。

## 逐篇盘点

“图”表示正文引用的教学图文件存在，非本次视觉验收；“社区”表示正文有知乎直链，不代表已重新阅读或验证现时互动量。下面的原始依据是该页确实引用的入口，本轮未逐项重新联网核验。

| 文章                                                                | 已覆盖内容及一手入口                                                                                                                                                       | 图／社区       | 主要缺口                                                                                |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------- |
| [LoRA](../../src/content/docs/training/lora.md)                     | 低秩、秩和缩放、训练与 QLoRA 区别；[LoRA](https://arxiv.org/abs/2106.09685)、[PEFT](https://huggingface.co/docs/peft/main/package_reference/lora)                          | 有／有         | 可补明确目标层选择、合并与多适配器服务的可复现实例；现有模型出链至 VL Reranker。        |
| [SFT](../../src/content/docs/training/sft.md)                       | 教师强制、损失掩码、数据和评测；[InstructGPT](https://arxiv.org/abs/2203.02155)、[TRL](https://huggingface.co/docs/trl/sft_trainer)                                        | 有／有         | 正文无模型页面出链；可补基于已核实的具体模型案例及数据格式、训练与独立评测记录。        |
| [RLHF](../../src/content/docs/training/rlhf.md)                     | 人类偏好、奖励模型与策略优化；[InstructGPT](https://arxiv.org/abs/2203.02155)                                                                                              | 有／无         | 无模型正文出链；应连接 InstructGPT 并补标注分歧、奖励校准与成本对照。                   |
| [DPO](../../src/content/docs/training/dpo.md)                       | 成对偏好、参考模型与损失；[原论文](https://arxiv.org/abs/2305.18290)                                                                                                       | 有／无         | 已链接 Qwen2.5-Coder；可加真实数据过滤与和 PPO 的受控比较。                             |
| [KTO](../../src/content/docs/training/kto.md)                       | 无配对好坏标签及其目标；[原论文](https://arxiv.org/abs/2402.01306)、[TRL](https://huggingface.co/docs/trl/kto_trainer)                                                     | 有／无         | 无模型正文入链或出链；具体模型采用案例需找到一手证据再加，不能推测。                    |
| [PPO](../../src/content/docs/training/ppo.md)                       | 策略、价值、裁剪和 RLHF；[原论文](https://arxiv.org/abs/1707.06347)                                                                                                        | 有／无         | InstructGPT 模型页入链但方法页无模型出链；可补轨迹、优势估计和实现配置的可复现案例。    |
| [GRPO](../../src/content/docs/training/grpo.md)                     | 组内优势、PPO/GSPO 比较；[DeepSeekMath](https://arxiv.org/abs/2402.03300)                                                                                                  | 有／有         | 多个模型页入链，方法正文尚无模型出链；可连接 DeepSeekMath 并补生成成本与多步工具轨迹。  |
| [DAPO](../../src/content/docs/training/dapo.md)                     | 动态采样、非对称裁剪、长度惩罚与截断；[原论文](https://arxiv.org/abs/2503.14476)                                                                                           | 有／无         | 无模型正文入链或出链；补可验证使用案例和跨论文评测口径，勿把建议误写成官方实验。        |
| [GSPO](../../src/content/docs/training/gspo.md)                     | 长度归一化序列比率和裁剪；[原论文](https://arxiv.org/abs/2507.18071v2)                                                                                                     | 有／无         | 3 篇模型正文入链，方法正文无模型出链；可把官方 Qwen 案例和具体条件对应起来。            |
| [REINFORCE/RLOO](../../src/content/docs/training/rloo.md)           | 基线、留一优势、与 GRPO 区别；[原论文](https://arxiv.org/abs/2402.14740)                                                                                                   | 有／无         | 无模型正文入链或出链；现有算例不能替代训练复现，具体应用需核对资料。                    |
| [RLVR](../../src/content/docs/training/rlvr.md)                     | 验证器、ORM/PRM 和策略优化区别；[DeepSeek-R1](https://arxiv.org/abs/2501.12948v1)                                                                                          | 有／无         | 与 R1、Math-PRM、Math-RM 双向关联较好；仍缺一套实际执行、带隐藏测试的复现结果。         |
| [蒸馏](../../src/content/docs/training/distillation.md)             | 软标签、序列蒸馏、GKD、MiniLLM；[Hinton](https://arxiv.org/abs/1503.02531)、[GKD](https://arxiv.org/abs/2306.13649)                                                        | 有／有         | 已有 R1 模型链接；可补教师/学生模型与在线、离线成本的实跑比较。                         |
| [量化](../../src/content/docs/training/quantization.md)             | PTQ/QAT、GPTQ、AWQ、SmoothQuant、QLoRA、GGUF；[GPTQ](https://arxiv.org/abs/2210.17323)、[AWQ](https://arxiv.org/abs/2306.00978)、[QLoRA](https://arxiv.org/abs/2305.14314) | 有／有         | 6 篇模型页入链但方法正文无模型出链；FP8/低比特 MoE 具体案例与校准、精度和吞吐实测仍缺。 |
| [训练全流程](../../src/content/docs/training/pipeline.md)           | 预训练、SFT、偏好、强化学习与跨模态目标；[InstructGPT](https://arxiv.org/abs/2203.02155)、[DPO](https://arxiv.org/abs/2305.18290)                                          | 无正文插图／无 | 没有真实模型路径的正文出链；缺一张阶段与可选分支图、从原始数据到部署的可复现走读。      |
| [数据质量](../../src/content/docs/training/data-quality.md)         | 去重、来源分组与泄漏；[Google Rules of ML](https://developers.google.com/machine-learning/guides/rules-of-ml)                                                              | 有／无         | 入门篇幅短；缺文本、图像、音频等各自的标注、切分和质量检查案例，原始论文型依据较少。    |
| [对比学习](../../src/content/docs/training/contrastive-learning.md) | 图文批内匹配、假负例、语音对比；[CLIP](https://arxiv.org/abs/2103.00020)、[wav2vec 2.0](https://arxiv.org/abs/2006.11477)                                                  | 有／无         | 与 CLIP、LLaVA、wav2vec 2.0 有正文出链；可补多正样本、批量与检索评测的具体实验。        |
| [扩散与流匹配](../../src/content/docs/training/diffusion-flow.md)   | 区分预测噪声与速度场、训练与采样；[DDPM](https://arxiv.org/abs/2006.11239)、[Flow Matching](https://arxiv.org/abs/2210.02747)                                              | 有／无         | 原理篇较短；缺训练目标、采样器、图像/语音具体配置和可复现比较。                         |

## 跨页面缺口与优先级

1. **补真实案例和互链。** SFT→InstructGPT、RLHF→InstructGPT、GRPO→DeepSeekMath、GSPO→已有 Qwen 案例，以及量化→已核实的具体模型，是可优先核对的双向连接。DAPO、KTO、RLOO 尚无模型正文 Markdown 入链；应先找直接一手证据，找不到就明确缺口，不能凭模型表现推断其采用算法。
2. **扩大方法覆盖，但避免只加名词。** PPO、GRPO、GSPO、DAPO、RLOO 已有，REINFORCE 在 RLOO 页介绍；MiniMax 模型页提及 CISPO，训练目录尚无独立 CISPO 方法页。可优先依据 MiniMax 一手资料补它与 PPO/GRPO 的目标差异；ORPO、SimPO 等偏好优化可视学习价值列后续候选，不把清单当作已覆盖。
3. **补可复现闭环。** 当前文章多提供可执行思路和构造算例，但未附本库实际运行的数据版本、命令/配置、硬件、基线、独立评测及结果记录。首批可以选 SFT/LoRA 与规则奖励训练各一个，先明确在站外运行的资源和授权，再记录失败案例和验证器边界；本次未执行任何训练。
4. **补内容深度。** 数据质量、扩散/流匹配、总体流程需要更详细的图文、具体例子和模型互链；蒸馏与量化虽包含多种算法，仍缺同一模型、同数据预算下的可复现实测和资源比较。
5. **补社区参考的可追溯性。** 五篇有知乎直链：LoRA、SFT、GRPO、蒸馏、量化。已有 [2026-10-27 阅读与互动快照](training-community.md)记录作者、赞同、收藏与一手对照；本次未重新打开文章或复核互动数。其余 12 篇正文未见知乎直链，并不代表知乎不存在相关内容，也不要求机械地每篇插入链接；应择优实读并记录来源、赞藏和适用边界。

## 已验证和未验证

- 已验证：17 篇文件与各页上述标题、正文主题、原始资料链接文本；16 篇正文引用的本地图文件均存在（共 17 次引用，部分图被复用）；入链按上述限定范围检索；已有训练核心、蒸馏量化与 DAPO/RLOO/RLVR 审校记录已查阅。
- 未验证：本轮没有联网重查全部论文、知乎、页面互动数据或逐链接做 HTTP 检查；没有逐式重新推导全部 17 篇、验证模型关联的官方事实、网页视觉和无障碍操作，也未运行模型、训练或评测。之前的审校和互动快照是历史证据，不等于本次独立验证，也不保证当前内容无误。
