# Qwen 模型卡五项定向核对（2026-10-29）

本次逐项对照五篇模型卡中列出的代表规格和上下文等信息；不是五篇正文的逐句复审，没有运行权重或复现评测。

- **Qwen3**：[8B 官方模型卡](https://huggingface.co/Qwen/Qwen3-8B)列 8.2B 参数、36 层、32 个查询头和 8 个键值头，原生上下文 32,768，YaRN 扩展到 131,072；其配置的 40,960 与原生窗口不同。正文已作区分。本次未重新核查所有稠密及 MoE 规格。
- **Qwen2.5-Coder**：[7B Instruct](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct)列 7.61B、默认配置 32,768；[32B Instruct](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct)列 32.5B。模型卡所述符合两个权重的参数数字；长窗口使用条件以对应模型卡为准。
- **Qwen2-VL**：[论文表 1](https://arxiv.org/html/2409.12191#S1.T1)列 2B、7B、72B 的视觉编码器各 675M，语言骨干分别 1.5B、7.6B、72B。名称中的 7B 是系列名称，不应误当作精确总参数。
- **Qwen3-ForcedAligner**：[技术报告](https://arxiv.org/html/2601.21337v1)列 0.6B、11 种语言和最长 300 秒；[公开配置](https://huggingface.co/Qwen/Qwen3-ForcedAligner-0.6B/blob/main/config.json)列 `classify_num=5000`、时间间隔 80 ms。论文和配置的类别数差异已在正文及[此前专项记录](forcedaligner-community-config-check-20261029.md)区分，不把配置计算结果当成已实测输入时长。
- **Qwen2.5-1M**：[7B](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct-1M)列 7.61B、28 层、28/4 个 Q/KV 头；[14B](https://huggingface.co/Qwen/Qwen2.5-14B-Instruct-1M)列 14.7B、48 层、40/8 个 Q/KV 头。两个模型卡均列上下文 1,010,000、生成 8,192，并推荐特定长上下文推理实现，与正文卡片一致。

上述指定信息未发现需要更改的错误；其他字段、性能数据、图片与中文社区资料仍以各篇现有专项记录为准。
