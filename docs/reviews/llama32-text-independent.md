# Llama 3.2 轻量文本模型独立核查

核查范围：1B/3B 文本模型与视觉分支区分、剪枝与蒸馏、后训练、许可、模型卡数值及端侧评测；示例未实际运行。

- [Meta 2024-09-25 首发说明](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)：1B/3B 为文本模型，11B/90B 为视觉模型；1B/3B 从 Llama 3.1 8B 一次性结构化剪枝，预训练时将 8B 与 70B 教师 logits 作为 token 级目标；后训练描述多轮 SFT、拒绝采样和 DPO。
- [官方文本模型卡](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md)：参数 1.23B/3.21B、GQA、共享嵌入、最多 9T 预训练 token、2023-12 知识截止；原始模型上下文列 128K、量化模型列 8K。中文不在官方支持语言清单。当前卡包含后续量化更新，其 2024-10-24 日期不当作 2024-09-25 首发日期。
- 指令版 BF16 的英语 MMLU 5-shot 宏平均准确率为 49.3/63.4；IFEval 0-shot 多种口径平均为 59.5/77.4。Vanilla PTQ 列注明仅用于对照且未发布。模型卡端侧性能为 OnePlus 12、ARM CPU、ExecuTorch 特定条件，不外推至所有设备。
- [社区许可](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/LICENSE)：自定义社区许可和使用政策约束下开放权重，不称无条件开源。
- 原创图为剪枝、蒸馏、后训练与应用评估的高层示意，不推断具体剪枝层、损失权重或训练数据比例。
- 知乎：已登录 Chrome 搜索 `Llama 3.2 蒸馏 剪枝`，本次页面未返回可读取的具体结果；未能核实作者、赞同和收藏，不采用不可核查的社区说法。
