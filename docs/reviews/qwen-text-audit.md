# Qwen 初代至 Qwen3 文本模型定向审校

核对日期：2026-10-27。本轮逐篇阅读模型卡与结构、训练、评测及教学示例，对照下列具体官方资料检查关键数字与版本边界。阅读并检查 5 张教学图的 SVG 文本和图形结构，未逐像素核验。没有运行模型、训练或基准，不把构造示例当成结果；这不是五篇所有陈述的逐句事实证明。

- **Qwen 初代**：对照 [Qwen 报告](https://arxiv.org/html/2309.16609)的 BPE 词表、单数字切分与 Base/Chat；对照 [Qwen-7B 配置](https://huggingface.co/Qwen/Qwen-7B/blob/main/config.json)补充 32 层、32 头和隐藏维度；说明其模型卡列出的许可不能直接假定为 Apache 2.0。教学图只画文本解码主路径，未声称覆盖所有层细节。
- **Qwen1.5**：对照[发布说明](https://qwenlm.github.io/blog/qwen1.5/)核查 Base/Chat、规格和 32K；按 [Qwen2 博客](https://qwenlm.github.io/blog/qwen2/)限定稠密系列中采用 GQA 的 32B 与 110B，避免误以为所有规格相同。图省略各规格层数及 MoE 内部。
- **Qwen2**：对照[技术报告](https://arxiv.org/html/2407.10671)、[7B Instruct 模型卡](https://huggingface.co/Qwen/Qwen2-7B-Instruct)及[配置](https://huggingface.co/Qwen/Qwen2-7B-Instruct/blob/main/config.json)，补充 28 个查询头与 4 个键值头、57B-A14B 从 7B 上采样、0.5B 与 MoE 的训练数据口径、128K 使用 YaRN 的条件。模型卡的 MMLU 和 GPQA 对照保留型号和来源，不能外推到业务。
- **Qwen2.5**：对照[技术报告](https://arxiv.org/html/2412.15115)、[7B Instruct 模型卡](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct)及[配置](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct/blob/main/config.json)，补充具体 28 层、28/4 头及默认 32K 与 YaRN 长文本的区别。两代部分配置相同不证明模型或训练相同；18T 是报告的数据口径，不推断各型号重复读取次数。
- **Qwen3 初版**：对照[技术报告](https://arxiv.org/html/2505.09388)、[8B 模型卡](https://huggingface.co/Qwen/Qwen3-8B)与[配置](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json)，补充 8B 的 36 层与 32/8 头、QKV 偏置和 QK-Norm 的变化、原生 32K 与经 YaRN 验证 128K 的区别。默认 40960 配置字段与原生训练长度分别说明。稠密/MoE、初版/2507 区分保留。

社区对照：此前已读的 [Qwen2.5 报告中文译文](https://zhuanlan.zhihu.com/p/13936916587)阅读时 160 赞同、277 收藏；可帮助检查章节覆盖，但公式与具体配置仍以原报告核对，不能直接将 Turbo 结构套到开放权重。其余四代的社区资料与互动量已补查，详见 [Qwen 社区资料核查](qwen-community.md)；其他社区资料见 [知乎筛选记录](zhihu-reading.md)。
