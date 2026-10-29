# Qwen2.5 与 Qwen3-Next 重点核查

核查日期：2026-10-28。本次检查模型卡关键参数、当前教学图的主要数据流、正文中选定的结构和评测内容；不是全文逐句审校，也没有运行模型或重新读取知乎文章。

## Qwen2.5

- [7B Instruct 配置](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/blob/main/config.json)给出 28 层、隐藏维度 3584、28 个查询头和 4 个 KV 头。正文用每头 128 维、BF16、8192 token 估算键值缓存约 448 MiB，未包括权重和其他工作空间。
- [技术报告表 8](https://arxiv.org/html/2412.15115)的 7B Instruct 对照包含 MATH 52.9 → 75.5、HumanEval 79.9 → 84.8，已在正文注明任务与版本。Qwen2 模型卡和报告的 GPQA 数字此前已记录不一致，不将其作为代际变化证据。
- 现有原创简图展示因果注意力、稠密前馈和词表输出，按登记标注省略残差与归一化；本次以 Chromium 查看其渲染。

## Qwen3-Next-80B-A3B

- [Instruct 模型卡](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct)和[配置](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct/blob/main/config.json)列 48 层、每四层含一层 Gated Attention、16 个查询头及 2 个 KV 头，每头 256 维。按 12 层、BF16 和 8192 token 估算的 192 MiB 只计算这些层的 K/V，线性状态和其他内存另算。
- 现有原创简图展示三层 Gated DeltaNet、一层 Gated Attention 的组合及每层 MoE；本次以 Chromium 查看其渲染。具体内核实现、线性状态的占用与实际推理速度未实测。
