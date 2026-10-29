# DeepSeek 训练与评测口径核对

核对日期：2026-10-28。本轮对照官方论文和模型卡中的代表性训练及评测主张；未逐句复核全部正文，也未运行模型、复现训练或评测。

| 页面                                                                          | 依据与核对范围                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [DeepSeek-V3](../../src/content/docs/nlp/deepseek-v3.md)                      | [论文](https://arxiv.org/html/2412.19437)给出 14.8T 预训练 token、1.5M SFT 样本、2.788M H800 GPU 小时及其统计边界。                                                                                                      |
| [DeepSeek-R1](../../src/content/docs/nlp/deepseek-r1.md)                      | [论文 v1](https://arxiv.org/html/2501.12948v1)表 2 与图 2 区分 AIME 2024 的 pass@1 平均和 64 次多数投票；已补充训练曲线每题采样 16 次的条件。后续版本[附录](https://arxiv.org/html/2501.12948)解释 800K 蒸馏数据的组成。 |
| [DeepSeek-V4-Flash](../../src/content/docs/nlp/deepseek-v4-flash-model.md)    | [模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)的基础模型表列出 MMLU 5-shot 88.7；[论文](https://arxiv.org/html/2606.19348)区分 Flash 的 32T 和 Pro 的 33T 预训练 token。                                 |
| [DeepSeek-V4-Pro](../../src/content/docs/nlp/deepseek-v4-pro-model.md)        | [论文](https://arxiv.org/html/2606.19348)第 5.1 节使用学生轨迹和全词表反向 KL 进行在策略蒸馏；[模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)的基础模型表列 MMLU 5-shot 90.1。已补充对训练过程的通俗解释。  |
| [DeepSeek-V4.1-Flash](../../src/content/docs/nlp/deepseek-v41-flash-model.md) | [模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)明确 45T 多模态预训练、34T 时扩展 1M，以及 MMLU-Pro 基础模型 5-shot 74.1；890 字节／token 是全局 KV 缓存而非全部内存。                                   |

结果是对应作者报告和指定条件下的成绩；训练数据、硬件、采样及任务设置变化后不能直接外推。
