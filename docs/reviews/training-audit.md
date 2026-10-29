# 训练算法专题审校

核对日期：2026-10-27。本轮逐篇阅读下列页面，重点核对公式或算例、比较边界与教学解释；主要结论对照列出的一手资料。没有运行训练或评测，不能据此声称源码逐行、所有叙述和所有版本都已验证。

- [LoRA](../../src/content/docs/training/lora.md)：核对低秩更新、缩放与参数算术；4,096×4,096 的秩 8 算例为 65,536 个参数，相当于原矩阵的 1/256，不是整模型显存比例。[LoRA 论文](https://arxiv.org/abs/2106.09685)
- [SFT](../../src/content/docs/training/sft.md)：核对示范前缀、答案掩码和负对数损失；0.8 与 0.5 的自然对数平均损失约为 0.458。实际聊天模板及训练掩码依实现而异。[InstructGPT](https://arxiv.org/abs/2203.02155)
- [DPO](../../src/content/docs/training/dpo.md)：核对优选、劣选和参考策略的对数比；策略与参考策略一致时损失约 0.693；相对差变大不保证优选回答绝对概率增加。[DPO 论文](https://arxiv.org/abs/2305.18290)
- [PPO](../../src/content/docs/training/ppo.md)：复核裁剪目标及正优势例子，新增负优势下的数值例子，避免误把“较小目标”写成“较小概率比”。[PPO 论文](https://arxiv.org/abs/1707.06347)
- [GRPO](../../src/content/docs/training/grpo.md)：核对同题组均值与标准差算例、结果监督和过程监督；标准差口径与全同奖励的数值保护保留实现差异说明。[DeepSeekMath](https://arxiv.org/html/2402.03300)
- [GSPO](../../src/content/docs/training/gspo.md)：核对几何平均数例子与序列裁剪；补充长度归一化比率与完整序列重要性采样权重的区别，注明算法公式与实验中对称／非对称阈值的不同表达。[GSPO 论文](https://arxiv.org/html/2507.18071)
- [DAPO](../../src/content/docs/training/dapo.md)：核对四个设计与动态采样条件，补充论文的 16,384／4,096／20,480 token 具体长度配置，区分预期长度、软惩罚和截断。[DAPO 论文 §3.4、§4.1](https://arxiv.org/html/2503.14476)
- [RLOO](../../src/content/docs/training/rloo.md)：复核留一平均及其与整组均值的代数关系；摘要改为“尝试降低”波动，避免暗示任何基线都保证降方差。[Back to Basics](https://arxiv.org/html/2402.14740)
- [RLHF](../../src/content/docs/training/rlhf.md)：核对成对偏好评分和参考策略 KL 目标，将奖励模型的代理性质与最终独立评测分开。[InstructGPT](https://arxiv.org/abs/2203.02155)
- [RLVR](../../src/content/docs/training/rlvr.md)：核对规则奖励与更新方法的区分、结果对过程的限制；以 R1 公开案例为例，不将个别方案推广为统一算法。[DeepSeek-R1 v1](https://arxiv.org/abs/2501.12948v1)

PPO 的新算例、DAPO 参数说明以及流程建议仅用于教学，未实测。RLVR、SFT 和 RLHF 都有多种具体实现，阅读该表不能替代检查目标训练框架与配置。
