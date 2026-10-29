# 训练技术审校证据覆盖核查（2026-10-29）

核对范围为训练技术台账中的 20 篇文章及各自 `complete` 指向的审校记录。逐条阅读记录中的原理、例子／评测、配图、社区四节，检查正文有教学例子和图片引用，核查记录中有具体论文、知乎文章作者及当时互动量。下表是已记录的核查重点，不表示本轮重新通读所有论文、重新实读所有知乎文章，也不代替真实模型训练与结果复现。

| 条目            | 检查重点及既有来源                                | 审校依据                                                             |
| --------------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| CISPO           | 权重裁剪与优势、负优势算例；M1 论文和炼熵师       | [cispo](cispo-full-review-20261029.md)                               |
| 对比学习        | 图文双向损失、假负例；CLIP 论文与鱼子酱           | [contrastive-learning](contrastive-learning-full-review-20261029.md) |
| DAPO            | 组内 token 汇总、长度惩罚；DAPO 论文与 ducati     | [dapo](dapo-full-review-20261029.md)                                 |
| 数据质量        | 分组隔离和近重复；RETRO 论文与 zihui              | [data-quality](data-quality-full-review-20261029.md)                 |
| 扩散与流匹配    | 噪声／速度目标、采样步数；Wan 论文与曾天真        | [diffusion-flow](diffusion-flow-full-review-20261029.md)             |
| 知识蒸馏        | 序列与分布蒸馏、KL；GKD／MiniLLM 与一只路过的烧鸡 | [distillation](distillation-full-review-20261029.md)                 |
| DPO             | 相对参考比率、偏好对数值；原论文与猛猿            | [dpo](dpo-full-review-20261029.md)                                   |
| GRPO            | 组内优势、过程／结果监督；DeepSeekMath 与知行者   | [grpo](grpo-full-review-20261029.md)                                 |
| GSPO            | 序列比率、上下裁剪；原论文和 tomsheep             | [gspo](gspo-full-review-20261029.md)                                 |
| KTO             | 单条标签、微批错配 KL；原论文和 akaihaoshuai      | [kto](kto-full-review-20261029.md)                                   |
| LoRA            | 低秩矩阵、参数量、冻结；原论文和猛猿              | [lora](lora-full-review-20261029.md)                                 |
| ORPO            | 赔率比与监督项；原论文和 akaihaoshuai             | [orpo](orpo-full-review-20261029.md)                                 |
| 训练全流程      | 预训练／SFT／PPO 区分；InstructGPT 与小神弟弟     | [training-pipeline](training-pipeline-full-review-20261029.md)       |
| PPO             | 正负优势裁剪算例；原论文和小神弟弟                | [ppo](ppo-full-review-20261029.md)                                   |
| 量化            | GPTQ/AWQ/QLoRA、舍入；原论文与绝密伏击            | [quantization](quantization-full-review-20261029.md)                 |
| RLHF            | 人工排序、奖励模型与 PPO；InstructGPT 与小神弟弟  | [rlhf](rlhf-full-review-20261029.md)                                 |
| REINFORCE／RLOO | 留一优势、摘要评测；Back to Basics 与无易         | [rloo](rloo-full-review-20261029.md)                                 |
| RLVR            | 规则奖励、验证器与策略更新；R1 与 tomsheep        | [rlvr](rlvr-full-review-20261029.md)                                 |
| SFT             | 损失掩码、示范与拒绝采样；InstructGPT 与 LLMCat   | [sft](sft-full-review-20261029.md)                                   |
| SimPO           | 长度归一化、目标间隔；原论文与 akaihaoshuai       | [simpo](simpo-full-review-20261029.md)                               |

## 本轮发现与修订

- 对比学习和数据质量的正文此前未列出其审校记录中已有的知乎文章；现分别补上鱼子酱的 CLIP 解读和 zihui 的 RETRO 解读，并标注适用范围。数据质量参考当时只有 1 赞和 2 收藏，适合作为辅助阅读，不用互动数代替准确性核查。
- RLOO 的记录已有无易文章和赞藏，但原审校指出文章对 ReMax 的表述有误，因此不把它新增为推荐教程；RLOO 与 ReMax 的实际定义仍以论文为准。这不意味着无法找到更好的中文 RLOO 资料。
- DAPO、数据质量和训练全流程没有用数学公式排版，但各有具体数值或分步案例；这不构成对所有算法公式充分性的证明。本轮重新对照 DAPO 原论文 v2 式 12，其同组 token 总数归一化与当前正文一致。
- 图的来源、许可、替代文本与历史网页渲染记录见各审校文件。本轮未重新逐张目视检查，也未复核历史赞藏数量。
