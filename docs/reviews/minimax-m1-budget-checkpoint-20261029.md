# MiniMax-M1 版本与评测对照复核（2026-10-29）

针对 [MiniMax-M1](../../src/content/docs/nlp/minimax-m1-model.md) 的 40K、80K 模型和评测数字进行定向核查，并对照 [Kimi Linear 技术报告](https://arxiv.org/html/2510.26692v2) 的 KDA 状态、1.4T Base 数字与效率口径抽查其正文；本轮未对两篇文章完整逐句审校或运行模型。

- [MiniMax-M1 论文摘要和第 5 节](https://arxiv.org/html/2506.13585)明确 40K 版本是 80K 训练的中间阶段，80K 在后续强化学习中调整训练长度和数据分布。正文原先仅比较思考预算，可能让读者以为是同一检查点调节输出上限；已补充版本和训练差异。
- 同文第 6 节及表 2 中 40K / 80K 的 AIME 2024 为 83.3 / 86.0，SWE-bench Verified 为 55.6 / 56.0。AIME 使用每题 32 次采样的平均通过率，不能作为逐题单次作答成绩。
- Kimi Linear 的论文表 3 列出 1.4T Base MMLU 的 MLA / Kimi Linear 为 71.6 / 73.8、EvalPlus 的 GDN-H / Kimi Linear 为 63.1 / 60.2；第 6.3 节以每头 128×128 状态、1M 上下文 2.3 倍解码对照及更大批量时理论最高 6.3 倍说明效率。正文对应信息一致。

本次未重读知乎内容、检查图片实际渲染或复现评测。
