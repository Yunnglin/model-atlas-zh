# 训练方法与模型页面交叉链接检查

2026-10-28 检查 `src/content/docs/training` 中 LoRA、SFT、RLHF、RLVR、PPO、GRPO、DPO、蒸馏和量化正文的内部模型链接，并抽查对应模型页面。方法入口均有自己的正文；部分页面已有方法间链接，但缺少通向具体模型的站内入口。

- RLVR 既有 DeepSeek-R1 和 Qwen2.5-Math 评分模型链接；模型页也解释了相关训练和边界。GRPO 页面主要链接方法概念，DeepSeek-R1 页面已有回链；SFT、RLHF 与 PPO 页有方法互链及 InstructGPT 外部论文引用。量化正文已有 LoRA 与蒸馏链接，但没有将特定模型的量化检查点误写为模型原本训练配方。
- 新增三处正文交叉链接：LoRA → [Qwen3-VL-Reranker](../../src/content/docs/omni/qwen3-vl-reranker-model.md)，DPO → [Qwen2.5-Coder](../../src/content/docs/nlp/qwen25-coder-model.md)，蒸馏 → [DeepSeek-R1](../../src/content/docs/nlp/deepseek-r1.md)。后两者原模型页本来已有相应方法说明或链接；三处新增均解释具体信号与限制。
- 一手依据：[Qwen3-VL 系列报告第 4.2 节](https://arxiv.org/html/2601.04720)说明从 Qwen3-VL-Instruct 初始化并使用 LoRA；[Qwen2.5-Coder 报告](https://arxiv.org/html/2409.12186)说明 SFT 后的离线 DPO 和代码执行或模型裁判反馈；[DeepSeek-R1 官方仓库](https://github.com/deepseek-ai/DeepSeek-R1)说明使用 R1 生成样本微调不同 Qwen/Llama 底座。未把未披露的配方补成事实。
- 本次只检查链接和公开训练描述，没有执行训练或复现论文。没有修改共享 YAML 或增加全局关系。
