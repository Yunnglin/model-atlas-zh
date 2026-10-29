# Qwen 文本三篇核对记录（2026-10-28）

## 范围与参与情况

核对 Qwen2.5、Qwen3 初版、Qwen3-Next 的模型卡、结构、训练、文中评测和关联教学图；不包括所有衍生检查点或模型实测。本轮审校者此前参与过 Qwen3 与 Qwen3-Next 的审校和修改（见 `qwen3-next-independent-audit.md`），此次是持续复查，不能称为全新独立审阅；Qwen2.5 为本轮独立复核。

## 核对结果

- **Qwen2.5：**[技术报告](https://arxiv.org/html/2412.15115v1)列出开放的 0.5B 至 72B 稠密规格，另将 API 型号 Turbo、Plus 描述为 MoE；增加范围说明以避免混淆。报告的预训练数据为 18T token，报告摘要还列出超过 100 万 SFT 样本，以及 DPO、GRPO；正文补充后训练信息并注明它是系列描述，不能当作每个检查点的完整配方。[3B Instruct](https://huggingface.co/Qwen/Qwen2.5-3B-Instruct) 和 [72B Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) 卡分别标记 qwen-research 和 qwen，与正文许可表述一致。[7B Instruct 配置](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/blob/main/config.json)的层数与 Q/KV 头数符合文中数字。`qwen25/overview.svg` 是省略层内细节的稠密 decoder 示意，符合正文说明。
- **Qwen3 初版：**[技术报告 v1](https://arxiv.org/html/2505.09388v1)支持 36T 语料、三阶段预训练与初版 MoE 的 128 个路由专家／每 token 选 8 个、无共享专家。报告表 22 的 Qwen3-32B 思考模式下 IFEval strict prompt 73.0→85.0、AIME 2024 83.8→81.4 对应推理 RL 至通用 RL 阶段，正文没有把它写成其他尺寸的普遍结论。对照 [8B 官方模型卡](https://huggingface.co/Qwen/Qwen3-8B)，补清 40,960 配置的输入／输出预算示例不构成固定分配；原生 32,768 与 YaRN 扩展 131,072 的边界保留。`qwen3/teaching-flow.svg` 区分 Dense 与 MoE、标注教学简化。
- **Qwen3-Next：**[80B-A3B-Instruct 模型卡](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct)给出 15T 预训练、48 层按 12×(3 DeltaNet + 1 Gated Attention) 组织、512 路由专家选 10 个加 1 个共享专家，以及原生 262,144 和扩展 1,010,000 的上下文。模型卡 MMLU-Pro 80.6、BFCL v3 70.3 与正文一致。`qwen-next/overview.svg` 与上述分层关系一致；图示为教学概括，不代表完整计算图。此页对 Instruct 与 Thinking 的差异已有说明，本轮未修改。

## 限制与验证

核对以链接的官方报告、模型卡与配置为依据，图按结构对照，未运行权重、训练或评测。数字比较不跨用不同设置、版本或模式。检查相关 SVG 的 XML 格式和改动空白；本记录不代表对资料全部细节或第三方复现实验的验证。
