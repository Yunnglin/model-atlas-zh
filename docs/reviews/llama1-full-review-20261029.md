# 初代 LLaMA 专项审校

审校日期：2026-10-29。完整通读[初代 LLaMA 正文](../../src/content/docs/nlp/llama1-model.md)，范围为 2023 年基础模型和论文中的指令微调实验；未运行模型或复现评测。

- **结构**：对照[论文第 2.2 节及表 2](https://arxiv.org/html/2302.13971)，核对 7B/13B/33B/65B 规模、7B 与 65B 的层数、宽度和注意力头数，以及 decoder-only 自回归、Pre-RMSNorm、SwiGLU 和各层 RoPE；这些部件来自先前研究，并非 LLaMA 独创。
- **训练**：论文第 2.1–2.4 节与表 1、2 核对数据来源采样比例、1.0T/1.4T 训练 token、数字拆分、AdamW 和 65B 的 2048 A100 约 21 天；补充全局 4M token 批次、2000 步预热与末尾 10% 峰值的学习率安排。训练 token 次数与参数及独立文档数分别说明。
- **评测**：论文第 3 节及表 3 核对 13B/GPT-3 175B 在 HellaSwag 79.2/78.9 和 PIQA 80.1/81.0 的零样本结果。补充选择题基于候选续写似然及按任务归一化，不等同自由生成答案；闭卷、少样本及基础模型与 LLaMA-I 分开描述。
- **配图**：核对[图示登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/llama1/overview.svg)，分词、因果层内 Pre-RMSNorm、RoPE 注意力、SwiGLU 及下一 token 的方向与简化范围一致；注明来源、CC BY 4.0、非逐层图。Chromium 打开本地页面滚动加载后图片解码成功、宽 1200、替代文本存在，截图检查中文和箭头。
- **社区**：沿用 [2026-10-28 知乎实读记录](llama1-independent.md)，真真锋的 [Llama 1–3 结构解读](https://zhuanlan.zhihu.com/p/625775403)当时 172 赞、290 收藏，讨论 RMSNorm、SwiGLU 与 RoPE；各项对照论文第 2.2 节，性能泛化与推广内容不作为事实依据。本次未重读或更新互动数据。

研究许可按[Meta 初代发布说明](https://ai.meta.com/blog/large-language-model-llama-meta-ai/)与时间范围说明，不将后续 Llama 许可套用于初版。
