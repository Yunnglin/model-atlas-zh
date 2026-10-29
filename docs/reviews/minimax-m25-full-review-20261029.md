# MiniMax-M2.5 全文审校

审校日期：2026-10-29。通读 [M2.5 正文](../../src/content/docs/nlp/minimax-m25-model.md)，对照官方发布、模型卡、权重配置与 M2 系列报告。未运行模型、训练或复现评测。

- **结构与模型卡**：对照 [官方配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.5/raw/main/config.json)与 [模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)：62 层、256 个专家选 8 个、48 个查询头及 8 个 KV 头，头维度 128，最大位置数 196608；许可为 modified-MIT。8,192 token 的 BF16 缓存算术得到约 1.94 GiB，仅是 K/V 存储，未包括权重和工作空间。
- **训练**：对照 [官方发布](https://www.minimax.io/blog/minimax-m25)与 [M2 系列报告](https://arxiv.org/html/2605.26494)，区分长程任务的过程奖励、CISPO 的策略更新和 Forge 工程框架；20 万环境数量是官方口径，未推断数据配比或全部奖励函数。树形轨迹合并的 40 倍是最高训练加速，不等同平均加速或用户侧推理速度；系列报告中后续改进未一概归给 M2.5。
- **评测**：官方卡报告 SWE-bench Verified 80.2、Multi-SWE-Bench 51.3、BrowseComp 76.3，均有系统条件；SWE 官方内部基础设施使用指定 Claude Code 脚手架和覆盖提示，四次平均。补充 BrowseComp 在最大上下文的 30% 时清空历史的具体规则和可能丢线索的例子；M2.1 对比仅在已注明的脚手架条件下讨论。31.3 分钟到 22.8 分钟的耗时降幅与速度提升采用不同分母；不将其视为所有用户的提升。
- **配图**：对照 [配图登记](../../src/content/data/figures.yaml)、[任务流程图](../../public/figures/minimax-m25/overview.svg)与[骨干图](../../public/figures/minimax-m2/backbone.svg)。2026-10-29 以 Chromium 打开本机正文，滚动加载并检查两图、替代文本、箭头与中文字；两图均为 CC BY 4.0 简化教学图，外部工具未画作模型内部。
- **社区**：2026-10-29 主审通过已登录 Chrome 阅读 kaiyuan 的 [Qwen3.5 与 MiniMax M2.5 架构分析](https://zhuanlan.zhihu.com/p/2013669483248633430)，当时 250 赞、559 收藏。文章介绍 M2.5 的 GQA、partial RoPE、QK RMSNorm 及 MoE 路由，可与官方配置和系列报告交叉理解；其速度、成本及模型对比不脱离具体运行环境推广，Qwen3.5 内容不混入 M2.5。互动数为阅读时快照。

优惠券、样本划分与误改案例均为教学构造，并非实际模型测量。

## 评测数字逐项补证（2026-10-29）

- [MiniMax-M2.5 官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)：SWE-bench Verified 80.2%、Multi-SWE-Bench 51.3%、BrowseComp（带上下文管理）76.3%；Droid 79.7、OpenCode 76.1。官方说明 SWE 主结果使用内部环境、Claude Code、替换默认系统提示并平均四次；Droid 和 OpenCode 使用默认提示。BrowseComp 使用 WebExplorer 风格框架，超过最大上下文 30% 时丢弃历史。
- 同一模型卡报告 SWE-bench Verified 平均每任务从 M2.1 的 31.3 分钟降至 M2.5 的 22.8 分钟：耗时下降约 27.2%，速度按耗时倒数计算提升约 37.3%。正文计算和口径一致。
- M2.1 的 74.0 对照来自 [M2.1 官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.1)，两代主结果说明均为 Claude Code、替换默认系统提示及四次平均；这并不代表所有其余环境条件均已证明相同。
