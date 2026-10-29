# Kimi-Audio 与 MiniMax-01 数字补充核查（第九批）

2026-10-29 对照以下三篇正文中明确列出的评测数字，检查具体模型、数据集、指标及能从原文确认的条件；这是定向核对，不等于重新审校整篇文章或独立复现结果。

- **Kimi-Audio**：[Kimi-Audio 技术报告 v1 表 4](https://arxiv.org/html/2504.18425v1)的 LibriSpeech test-clean／test-other 列为 Kimi-Audio WER 1.28／2.42、Qwen2-Audio-base 1.74／4.04；[Qwen2-Audio 技术报告 v1 表 2](https://arxiv.org/html/2407.10759v1)自己报告对应 1.6／3.6。两篇报告的评测流程不能自动视作完全相同。另下载并提取 [AmphionASR 报告](https://github.com/AmphionTeam/AmphionASR/blob/main/main.pdf)第 17 页表 15，Kimi-Audio-7B-Instruct 在中文 wEar 为 CER 1.48%，英文 WTIMIT 为 WER 10.95%；两项数据来自独立研究，数据集、语言和单位不同。
- **MiniMax-Text-01**：[MiniMax-01 技术报告表 8、5.7.1 节](https://arxiv.org/html/2501.08313)中，MMLU 为 88.5、GPQA Diamond 为 54.4、HumanEval 为 86.9；MMLU 和 GPQA 带星号，对应零样本思维链，论文说明指令模型使用贪心解码。HumanEval 行不带星号，不能据此把星号说明泛化到该行。
- **MiniMax-VL-01**：[同一报告表 13 和 6.3 节](https://arxiv.org/html/2501.08313)中，MMMU val+dev 为 68.5、DocVQA 为 96.4、OCRBench 为 865、MathVista testmini 为 68.6；带星号项目采用零样本思维链。MMLongBench-Doc 的总准确率为 32.5%，正文分别给出单页 47.3%、跨页 28.4%；OCRBench 为基准分数而非百分比。

本次核对的数字与原文一致，没有更改模型正文；未核对正文之外的全部榜单、模型结构或训练细节，也未运行模型。
