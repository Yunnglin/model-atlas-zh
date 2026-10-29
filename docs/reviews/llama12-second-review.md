# 初代 LLaMA 与 Llama 2 独立复核

2026-10-28 对照 [初代 LLaMA 论文](https://arxiv.org/html/2302.13971)、[Llama 2 论文](https://arxiv.org/html/2307.09288)、[Meta 初代发布说明](https://ai.meta.com/blog/large-language-model-llama-meta-ai/)和 [Llama 2 模型卡及许可](https://huggingface.co/meta-llama/Llama-2-7b-hf)，审查两篇正文及教学图。

- **初代数据和训练**：论文表 1 的七类数据采样比例、表 2 的模型规格、7B/13B 的 1.0T 与 33B/65B 的 1.4T 训练 token，以及 65B 使用 2048 张 A100 80GB 约 21 天的条件，与正文一致。采样比例不是去重后的独立文档占比；初代以研究用途访问、不能从 Llama 2 许可倒推商用权限。
- **初代结构与图**：论文说明每个 Transformer 子层之前均使用 RMSNorm；原图只画第一个 RMSNorm，虽然注明简化，仍易误读前馈层不做预归一化。现补充第二个 RMSNorm；仍省略残差并在图中说明。RoPE 与 SwiGLU 为已有研究，文中未归为初代 LLaMA 独创。
- **Llama 2 结构与训练**：论文表 1 中公开的 7B、13B 不采用 GQA，70B 采用；研究中的 34B 也采用，不能由论文出现 34B 推断权重发布。论文表 6 的 1,418,091 是 Meta 自采偏好比较数，不能与 SFT 示例条数或标注员人数混同。论文第 3.2.3 节说明 70B 做拒绝采样、较小模型以所选数据微调，正文保留此范围。
- **评测与许可**：初代论文表 3 的 13B 零样本 HellaSwag 79.2、PIQA 80.1 及相应 GPT-3 比较值正确；Llama 2 论文表 4 的 70B 基础版 MMLU 68.9 为 5-shot、HumanEval 29.9 为 0-shot，附录给出后者 pass@1 的采样设置。Llama 2 权重使用专门社区许可，不能当作 Apache 2.0；评测分数不能当成通用成功率。
- **Llama 2 图**：它是预训练到对齐的教学概览，并明确省略迭代细节；70B 使用 GQA 的标注与论文一致。应用评测不等同于官方已完成部署。

检查只对照静态图文与公开资料，没有运行模型或复现训练评测，也未修改共享表。
