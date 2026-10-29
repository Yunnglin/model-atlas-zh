# Qwen3、DeepSeek-R1 与 Llama 3 评测口径抽查（2026-10-29）

本次抽查三篇正文中引用的主要评测数值、模型版本与采样口径，并没有运行模型或复现基准。

- [Qwen3 正文](../../src/content/docs/nlp/qwen3.md)：对照[技术报告 v1 表 22](https://arxiv.org/html/2505.09388v1)及第 4.6 节，Qwen3-32B 思考模式的 IFEval strict prompt 从 73.0 至 85.0、AIME 2024 从 83.8 至 81.4，数值无误。两个检查点之间既有思考模式融合也有通用 RL；正文明确两阶段共同构成变化，避免归因给单一阶段。报告同节说明 AIME 每年 30 题、每题 64 次采样取平均；参照 [IFEval 论文第 3 节](https://arxiv.org/html/2311.07911)补充 strict prompt 的解释。
- [DeepSeek-R1 正文](../../src/content/docs/nlp/deepseek-r1.md)：对照[论文 v1 第 2.2.4 节图 2、表 2 与第 3 节评测设置](https://arxiv.org/html/2501.12948v1)，R1-Zero 的 AIME 2024 从 15.6% 到 71.0%，图 2 每题采样 16 次；表 2 的多数票 `cons@64` 为 86.7%。论文第 3 节指出主评测温度 0.6、top-p 0.95、生成上限 32,768 token，且每题通常采样 4–64 次计算单次准确率估计。正文区分这几种统计口径，无需改动。
- [Llama 3 正文](../../src/content/docs/nlp/llama3-model.md)：对照 [Meta 模型卡基准表](https://huggingface.co/meta-llama/Meta-Llama-3-8B)，基础版 8B / 70B 的 MMLU 5-shot 是 66.6 / 79.5，指令版分别为 68.4 / 82.0；指令版 HumanEval 0-shot 为 62.2 / 81.7。对照 [Meta 发布介绍](https://ai.meta.com/blog/meta-llama-3/)，人工评测集包含 1,800 个提示和 12 类任务。正文数值与版本匹配，无需改动。

本次不以表中数字推断真实应用表现，也不涉及其他版本的全部评测结果。修改后的 Qwen3 正文接受 Prettier 检查。
