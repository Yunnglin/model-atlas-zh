# Qwen3Guard 专项审校

审校日期：2026-10-29。完整通读 [Qwen3Guard 正文](../../src/content/docs/nlp/qwen3guard-model.md)，范围为 Gen 与 Stream；未运行模型、训练或复现评测。示例为教学构造。

- **结构**：对照[技术报告第 3、4 节](https://arxiv.org/html/2510.14276)和[官方发布](https://qwenlm.github.io/blog/qwen3guard/)，核对 Gen 指令式三类判断及 Stream 以 Qwen3 为骨干、独立的请求和回复分类路径；分类结果交由外部应用处理。119 语言和方言为支持声明，不能当作训练集对每种语言均匀覆盖。
- **训练**：报告第 3.2、4.2–4.3 节核对 Gen 超过 119 万样本、Stream 的前缀采样及 85% 阈值、另一个裁判对前缀核验与各位置损失。补充报告第 3.5–3.6 节中将 Gen 作为安全 RL 信号的实验：单一安全奖励与混合奖励各自用途、独立 WildGuard 评估及拒绝率；并区分 Guard 上线审核与训练奖励，不能将该实验概括为人工满意率。
- **评测**：论文表 11–12 和[官方评测说明](https://github.com/QwenLM/Qwen3Guard/blob/main/eval/README.md)核对 Gen/Stream 4B 的 Think 回复 F1 84.0/85.4，以及 Stream-4B 的 66.78% 和 569 条 thinking_loc 样本。补充英文请求表中严格/宽松策略的两个基准例子，区分逐基准选最优模式的平均与固定策略；核对[固定版本脚本](https://github.com/QwenLM/Qwen3Guard/blob/8a8b45a280bce0f65c322cc7086698b0d2ce4971/eval/eval_stream.py)的连续标签策略和 strict/loose 计算变量对应，不能据此断定报告表错。
- **配图**：检查[图示登记](../../src/content/data/figures.yaml)中的[审核流程图](../../public/figures/qwen3guard/overview.svg)和正文内联[分类分支图](../../public/figures/qwen3guard/stream-heads.svg)，分别展示应用策略和独立分支；均为 CC BY 4.0 简图，后者已补充[素材登记](../assets.md)。Chromium 打开本地正文，两图滚动后均解码成功、替代文本存在；截图检查中文和箭头。
- **社区**：沿用[2026-10-28 实读记录](remaining-community-1.md)，hhh 的 [Qwen3Guard 解读](https://zhuanlan.zhihu.com/p/1954857409739718762)当时 20 赞同、35 收藏，讨论 Gen/Stream 与前缀风险。其将 119 种语言解释为训练集覆盖、以及 Stream-8B 英文回复 F1 均值 81.2 的说法分别与论文数据构建和表 12 不一致；论文表列 81.1，且汇总使用逐基准较优的模式。本次未重读或更新互动量。
