# Qwen2-Math 与 Kimi K2 Thinking 复核

核对日期：2026-10-28。逐篇检查本轮涉及的模型卡参数、主要结构、训练方法、评测条件、示例与教学图；未运行权重，未独立复现训练或评测，也不声称人工核实了所有底层实现。

- [Qwen2-Math](../../src/content/docs/nlp/qwen2-math-model.md)：对照[官方发布说明](https://qwenlm.github.io/blog/qwen2-math/)和 [7B](https://huggingface.co/Qwen/Qwen2-Math-7B-Instruct)、[72B](https://huggingface.co/Qwen/Qwen2-Math-72B-Instruct) 模型卡，核对版本和许可、继续预训练、数学奖励与答案正确性、拒绝采样、GRPO，以及 Greedy／Maj@8／RM@8 的评测设置。补充官方页面实际模型解答中的错误断言，使用 10 的数字和反例说明过程验证；不把反例当作整题解答。该页原同时在正文嵌图和共享图组登记同一 SVG，删除正文重复嵌图，保留共享图组的配图及来源说明。SVG 是训练路线教学图，未将奖励模型画为推理必需模块；原图并非官方图。
- [Kimi K2 Thinking](../../src/content/docs/nlp/kimi-k2-thinking.md)：对照[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)和[K2 官方仓库](https://github.com/MoonshotAI/Kimi-K2)，核对 1T 总参数、32B 激活、61 层含一层稠密、384 选 8 加共享专家、MLA、256K、INT4 范围及带工具分数。修正表格“每层有专家”为“每个 MoE 层有专家”，避免把稠密首层算入；修正 SWE-bench 的脚手架描述：模型卡列为团队基于 SWE-agent 改造的内部工具，并对代码任务取 5 次独立运行平均。配图中的工具请求、外部执行器及回传与模型卡交互方式一致；它是原创概念图而非逐层结构图。
- 两篇已使用既有社区资料入口；未在本轮重新核实知乎正文和赞同／收藏数量。此前的互动快照见 [Qwen 数学与代码社区资料](qwen-code-community.md)及 [Kimi Thinking 社区资料](kimi-thinking-community.md)。
