# 模型卡位置与基础字段清查（2026-10-29）

范围是 `src/content/data/model-timeline.yaml` 当前的 150 个模型或版本。本次重新读取时间线与正文 frontmatter，以每个条目的 `article` 对应 Markdown 的 `atlas.id`，检查映射和正文第一个二级标题及该节的表格。此前的清查覆盖 145 个条目，本次扩展到当前完整清单。

- 150 个条目各自恰好对应一篇正文，共 150 篇不同正文；未发现指向缺失或重复 `atlas.id` 的时间线条目。
- 150 篇正文的首个二级标题均以“模型卡”开头，首节均有表格和发布时间或年份。
- 150 个模型卡有参数规模、代表规格，或对未披露情况的说明；EnCodec 已补入 24 kHz 版本的编码器和解码器规模。字段名并不统一：例如 Qwen3-VL-Embedding 使用“模型”，Qwen3 Reranker 在“底座”和“权重”行列出规格，Qwen3-ForcedAligner 与 Qwen2.5-Math-RM 使用“规模”；这四例已对照首节人工确认，不能仅按“参数”一词判缺失。

这是一项位置、映射和基础字段的存在性清查，不等于逐一核实卡片中每个数字，也不能证明正文讲解深度、引用准确性或配图质量。模型与来源是否一致、配置是否完整以及社区交叉核对仍以各专项审校记录为准；未实际运行模型或复现评测。

## EnCodec 24 kHz 参数补查

2026-10-29 读取 [facebook/encodec_24khz 版本 f2f7183 的 safetensors 权重](https://huggingface.co/facebook/encodec_24khz/tree/f2f7183)文件头，按张量名称及形状计算：编码器 7,425,792，解码器 7,426,018，合计 14,851,810；量化器保存 8,421,408 个数值，全部张量合计 23,273,218。该权重对应 [24 kHz 单声道配置](https://huggingface.co/facebook/encodec_24khz/blob/f2f7183/config.json)，不包括独立的可选熵编码语言模型。

[Transformers 4.31 的 EnCodec 实现](https://github.com/huggingface/transformers/blob/v4.31.0/src/transformers/models/encodec/modeling_encodec.py)将量化器的 `inited`、`cluster_size`、`embed`、`embed_avg` 注册为缓存；因此权重文件总数包含码本及统计缓存，不能全部算作可训练参数。此处只读了文件头与张量维度，未加载数值或运行模型。
