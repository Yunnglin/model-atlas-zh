# Qwen 多模态模型评测数字复核（第七批）

日期：2026-10-29。针对五篇正文中以下具体评测数字和条件进行一手资料复核；并非逐项核对这些文章的全部数字，也没有实际运行模型或复现评测。正文中的构造算例不作为实测。

- **Qwen3.5-397B-A17B**：[官方模型卡视觉表](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)分别列 MMMU 85.0、MMMU-Pro 79.0，与正文一致。两项是不同基准，不是界面操作成功率。
- **Qwen3.6-27B**：[官方模型卡](https://huggingface.co/Qwen/Qwen3.6-27B)的代码智能体表列 SWE-bench Verified 77.2、Pro 53.5、Terminal-Bench 2.0 59.3；相同表中 3.5-27B 的 Verified 为 75.0。脚注注明 SWE 系列用内部智能体框架、bash 和文件编辑工具，Pro 修正部分题目，Terminal-Bench 用 Harbor/Terminus-2、3 小时、32 CPU、48 GB、五次均值。视觉表的 RealWorldQA、OCRBench、VideoMME 带字幕对应 3.6-27B 84.1、89.4、87.7，3.5-27B 83.7、89.4、87.0；均与正文一致。
- **Qwen3.8-27B**：[官方模型卡](https://huggingface.co/Qwen/Qwen3.8-27B)列 SWE-bench Pro 的 3.8-27B 61.7、3.6-27B 53.5，差 8.2 个百分点；脚注说明相关模型用 Claude Code、256K 上下文、温度 1.0、top-p 0.95 和修正题集。MathVision 的 90.0 和 94.6 分别为不使用及使用代码解释器；模型卡说明题集部分标注修正，3.8-27B 使用固定提示，其他模型取两个提示版本较高值。正文对应条件和数字一致。
- **Qwen3.5-Omni**：[技术报告 v1 表 7](https://arxiv.org/html/2604.15804v1)的 WorldSense 文本查询问答列 Flash 57.9、Plus 62.8；[Qwen3.8-Omni 报告表 6](https://arxiv.org/html/2609.25611)列前代 Plus 63.9。正文分别保留两个报告口径，不推测差异原因。
- **Qwen3.8-Omni-Flash / Realtime**：[技术报告表 6–9](https://arxiv.org/html/2609.25611)列 WorldSense 68.5、前代 Plus 63.9；OmniVideoBench 的直接理解／Qwen Code 工作流准确率 63.4／67.8、每次查询 token 145,736／79,117，工作流跨轮保留上下文。Realtime 表对 6 秒纯音频列首音频块 978.36 毫秒和生成 RTF 0.1538；脚注说明十次有效回复、预热一次，计时包括网络和服务处理但不含连接、上传、播放。正文取约 978 毫秒和由 RTF 估算 10 秒语音约 1.54 秒，均与该口径一致。

模型卡和论文提供作者报告的结果；本次没有比较不同服务实现的实测表现、复核未列出的所有指标或重新审查知乎和配图。
