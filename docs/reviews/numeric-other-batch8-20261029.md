# Llama 系列指定评测数字核查（第八批）

核查日期：2026-10-29。本次核对五篇文章中下列指定数字、对应模型和直接涉及的评测协议，不代表重审文章全部事实或独立运行评测。

- **Llama 3 初版**：[8B 官方模型卡](https://huggingface.co/meta-llama/Meta-Llama-3-8B)分别列出 Base 和 Instruct 的 MMLU 5-shot：8B 为 66.6 / 68.4，70B 为 79.5 / 82.0；指令版 HumanEval 0-shot 为 62.2 / 81.7。本文将基础版与指令版分开，数字与模型卡表格一致。
- **Llama 4 Scout 与 Maverick**：[Maverick 官方模型卡](https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct)指令模型表列出 ChartQA 0-shot relaxed accuracy 为 88.8 / 90.0，DocVQA test 0-shot ANLS 为 94.4 / 94.4；模型卡注明报告评测使用 BF16。这些不是同卡预训练模型表的结果。
- **Llama 3.2 Vision**：[11B Vision Instruct 模型卡](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)指令模型表中，11B / 90B 的 ChartQA test 为 83.4 / 85.5（0-shot、CoT、relaxed accuracy），DocVQA test 为 88.4 / 90.1（0-shot、ANLS）。模型卡说明使用 Meta 内部评测库。
- **Llama 3.3 70B Instruct**：[官方模型卡](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct)指令模型表的 3.1 70B / 3.3 70B / 3.1 405B 分别为：MMLU Pro 5-shot CoT 66.4 / 68.9 / 73.3，GPQA Diamond 0-shot CoT 48.0 / 50.5 / 49.0，HumanEval 0-shot pass@1 80.5 / 88.4 / 89.0，MATH 0-shot CoT sympy_intersection_score 68.0 / 77.0 / 73.8。正文按同一表及条件引用。
- **Llama 3.2 1B 与 3B 文本模型**：[Meta 模型卡](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md)指令版表中，BF16 的 MMLU 5-shot 分别为 49.3 / 63.4、IFEval 0-shot 分别为 59.5 / 77.4；1B SpinQuant 与 QAT + LoRA 的 MMLU 分别为 47.3、49.0。端侧表给出 OnePlus 12、ARM CPU、ExecuTorch 上 1B BF16 与 SpinQuant 解码速度 19.2 / 50.2 token/s；其 64 token 提示长度说明针对首 token 延迟，正文没有把它当成整个速度表的长上下文测试。

以上结果均为官方披露条件下的数据；测试集版本、提示、精度和评分口径不同时不应直接混排。本次未发现所查数值错误，未修改正文，也未复现评测。
