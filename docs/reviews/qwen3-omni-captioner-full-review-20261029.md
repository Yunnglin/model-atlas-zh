# Qwen3-Omni-Captioner 独立复核（2026-10-29）

完整通读[独立正文](../../src/content/docs/audio/qwen3-omni-captioner-model.md)，以 [Qwen3-Omni 报告 v1](https://arxiv.org/html/2509.17765v1)、[Captioner 官方模型卡](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Captioner)及[官方项目](https://github.com/QwenLM/Qwen3-Omni)为依据。未运行模型、微调或复现评测。

- **结构与模型卡**：模型卡明确版本从 Instruct 微调、只保留 Thinker、单次一段音频输入、仅输出文本、不接受文本提示，建议音频不超过 30 秒；许可为 Apache 2.0。报告 2.2–2.3 节核对 AuT、16 kHz 采样、128 通道梅尔频谱与 12.5 Hz 表示速率；新增 10 秒约 125 个表示的算术例子，说明不含实际分段、填充和特殊标记，且不等同输出文字 token。30B-A3B 以模型名称解释总参数与每 token 激活的近似规模，不把 Talker 算作此版本输出路径。
- **训练**：报告 4.3 节仅披露用大规模细粒度音频描述微调，没有分支数据清单、步数和配比；正文把 Qwen3-Omni 通用基础训练与 Captioner 专项微调分开，避免声称专用检查点完整使用特定奖励算法或模型卡没有披露的参数。雨声、汽车和标注例子是教学构造，不是论文训练样本。
- **评测**：报告 5 节评测表是 Instruct、Thinking 等模型，不含该 Captioner 的同表量化成绩；附录 9.2 仅列三类代表场景的定性样例并提供原始音频。正文采用自拟 100 条录音的分类错误例子，并明确不是模型实测。补充第三方论文 [Unlocking Strong Supervision](https://arxiv.org/html/2603.25767) 第 3.1 节：研究者用 Captioner 为 CaptionsStew 40 万子集生成描述，再用语言模型提取标签以训练其他音频表示模型；不能将该下游研究结论当成 Captioner 独立准确率。
- **配图**：核对[图登记](../../src/content/data/figures.yaml)与 [SVG](../../public/figures/qwen3-omni-captioner/overview.svg)，输入、AuT、Thinker 和文字输出顺序、单音频说明与官方模型卡一致，图为原创 CC BY 4.0 简图并有替代文字。沿用[初始记录](qwen3-omni-captioner-initial-20261029.md)的本地桌面正文页实看；本次复核 SVG 模块与箭头，未单独目视检查手机。
- **社区**：2026-10-29 在登录 Chrome 的知乎搜索 `Qwen3-Omni Captioner`，比较结果卡片后实读[默歌尽微凉1024 的《Qwen3-Omni 技术报告详细解读》](https://zhuanlan.zhihu.com/p/1954525385946558466)：当时 71 赞同、99 收藏。文中分别讨论 AuT 的频谱、下采样和 12.5 Hz，以及 Captioner 用细粒度音频描述微调；这些与报告 2.2–2.3、4.3 节一致。该文同时包含通用 Omni 的 Talker 延迟、ASR 长音频和 Instruct/Thinking 评测，不能直接套给 Captioner。既有候选[云多多网络产品汇总](https://zhuanlan.zhihu.com/p/2083852862950581216)只简述功能、0 赞同且未显示收藏数，不用来支撑训练和评测。知乎文章有助于交叉查看同系列机制，独立研究只提供下游使用实例，不充当官方测试或训练配方。

验证：正文与本记录的 Prettier、内容及配图相关测试、`git diff --check`。本文覆盖当前正文五项审阅维度；尚未复现论文结果或检查手机视口。
