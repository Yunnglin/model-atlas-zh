# Kimi / MiniMax 评测数字复核（2026-10-29）

范围仅为以下七篇正文中的官方评测数字与其运行条件，不代表重新完成全文或独立运行评测。数字为原作者报告，核对时同时区分模型版本、题集、工具及试验协议。

- **Kimi K2 Thinking**：模型卡确认 HLE 文本题无工具 23.9、带工具 44.9，允许访问 Hugging Face 的对照 51.3；BrowseComp 60.2、SWE-bench Verified 71.3。HLE 带工具上限 120 步，使用 o3-mini 评判；代码任务除 Terminal-Bench 外使用改造的 SWE-agent 框架，5 次平均。模型卡注明全部基准为 INT4 精度，已补入正文。[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)
- **Kimi K2.6**：模型卡确认 SWE-Bench Pro 58.6、Terminus-2 下 Terminal-Bench 2.0 为 66.7、MMMU-Pro 不带 Python 79.4／带 Python 80.1；编程任务 10 次、视觉基准 3 次平均。SWE-Bench 系列使用自建框架，正文口径吻合。[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)
- **Kimi K2.7 Code**：模型卡确认 Code Bench v2 的 62.0 对 50.9、Program Bench 的 53.6 对 48.3、MCP Atlas 的 76.0 对 69.4；两 Kimi 模型使用 Kimi Code CLI 思考模式。Program Bench 有 200 项任务、超过 24.8 万行为测试；Claw 24/7 采用 17 个场景、610 个检查点，三次结果取平均；MCP Atlas 100 次工具调用预算、三次平均。正文比较与说明吻合。[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
- **Kimi K3**：技术报告表 2 确认 max 模式 Terminal-Bench 2.1 为 88.3、DeepSWE 为 67.5、BrowseComp 为 91.2。终端成绩取多个框架最佳值，BrowseComp 在 300K token 触发压缩；正文补明 DeepSWE 使用 v1.1 任务，避免和不同版本混淆。报告另列 mini-SWE-agent 官方榜单 67.3，不能混用。[技术报告第 6 节](https://arxiv.org/html/2607.24653)
- **MiniMax M2.7**：当前模型卡确认 SWE-Pro 56.22%、VIBE-Pro 55.6%、Terminal Bench 2 为 57.0%，以及推荐采样配置；模型卡历史版本记载 MLE Bench Lite 的 22 场、三次各 24 小时、平均获奖率 66.6%、最佳一次 9 金 5 银 1 铜，与正文一致。该历史版本也说明使用自建框架。[当前模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)；[历史模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/1eece56934dda5c770bdb7fec67021222b705629/README.md)
- **MiniMax M3**：官方发布及评测方法确认 SWE-Bench Pro 59.0%、Terminal-Bench 2.1 66.0%；前者使用 Claude Code 和内部设施，后者使用 Terminus 2、2 小时、128K 输出 token，已将后者条件补入正文。1M 上下文的计算量与加速倍数是官方指定前代对照下的报告。[官方发布与评测方法](https://www.minimax.io/blog/minimax-m3)
- **MiniMax M3.1 Flash**：模型卡确认 DeepSWE v1.1 73.7、OSWorld 2.0 61.7、BankerToolBench 76.2；分别使用 mini-SWE-agent 2.4.5 与 512K 上下文、0808 Full 数据、OpenCode 1.17.18 与 M2.7 评判。模型卡注明 OSWorld 多数模型取发布时最高报告成绩；正文口径吻合。[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)
