# Qwen1.5 专项审校（2026-10-29）

范围：[Qwen1.5 正文](../../src/content/docs/nlp/qwen15-model.md)，完整通读稠密模型和后续 MoE 分支；没有运行模型或复现评测，旅游、缓存和任务样本是教学构造。

- **结构**：对照 [Qwen1.5 发布说明](https://qwenlm.github.io/blog/qwen1.5/)、[Qwen2 发布说明的代际对比](https://qwenlm.github.io/blog/qwen2/)及 [7B 配置](https://huggingface.co/Qwen/Qwen1.5-7B/blob/main/config.json)，核对系列规格、32K、稠密 32B 和 110B 的 GQA、7B 的层数及 Q/KV 头数；BF16、8192 token 假设下的 KV 缓存算式得 4 GiB，不包括模型权重。调整模板文字，避免把 Chat 模板和能力概括为 Base 的固有行为。对照 [MoE 博客](https://qwenlm.github.io/blog/qwen-moe/)补充 4 个共享专家和 60 个路由专家中选 4 个、激活参数与总权重的区别。
- **训练**：发布说明提到在 Qwen 系列对齐中使用 DPO 和 PPO，但未给出每个检查点完整流程；正文保留该范围。对照 MoE 博客核对将已有 Qwen-1.8B 稠密模型进行 upcycling 后继续训练，训练成本是特定对照且依赖训练起点，业务示例为建议方案。许可分别对照 [7B 模型卡](https://huggingface.co/Qwen/Qwen1.5-7B)与各型号，不将其推广至全系列。
- **评测**：发布说明的 MT-Bench 表列出 7B-Chat 三次 7.58、7.55、7.66，平均 7.60 和标准差 0.05；模型裁判分数与旅游任务测量分开。MoE 博客的吞吐比较采用 vLLM、单张 A100 80GB、输入输出各 1000 token，2.01/1.15 ≈ 1.75，官方描述约 1.74 倍；表中数值有四舍五入，不代表单请求延迟或其他设备的结果。
- **配图**：核查 [图片登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/qwen15/overview.svg)的输入、因果注意力、前馈和输出箭头，与简化范围一致，标明非官方图、来源与 CC BY 4.0。Chromium 打开本地正文并滚动，图成功解码为 1060×250，替代文本存在；截图检查布局与文字。图展示稠密模型的通用流程，不声称画出 MoE 专家路由。
- **社区**：复用 [2026-10-27 实读记录](qwen-community.md)中刘聪NLP 的 [Qwen1.5-MoE 解读](https://zhuanlan.zhihu.com/p/689637785)，当时 116 赞同、171 收藏。文章讨论稠密初始化与共享、路由专家；这些内容与官方 MoE 博客交叉核对，速度与成本只适用于所述实验。该文章只覆盖 MoE 分支，稠密模型配置仍以官方资料核实。本次未重新读取互动量。

## 2026-10-29 评测数字补充核对

- 正文 MT-Bench 例子核对 [Qwen1.5 官方发布说明](https://qwenlm.github.io/blog/qwen1.5/)：Qwen1.5-7B-Chat 三个随机种子分别 7.58、7.55、7.66，官方列均值 7.60、标准差 0.05，属于模型裁判评分。
- [MoE 官方说明](https://qwenlm.github.io/blog/qwen-moe/)报告单 A100 80GB、vLLM、输入和输出各 1000 token 时，7B-Chat 与 MoE-A2.7B-Chat 的请求吞吐分别为 1.15 和 2.01，约 1.74 倍；正文条件与来源相符。
