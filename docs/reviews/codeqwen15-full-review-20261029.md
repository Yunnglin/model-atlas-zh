# CodeQwen1.5 专项审校（2026-10-29）

范围：[CodeQwen1.5 正文](../../src/content/docs/nlp/codeqwen15-model.md)，涵盖 Base 与 Chat；未运行模型、训练或复现评测。代码与测试示例均为教学构造。

- **结构**：对照[官方 Base 配置](https://huggingface.co/Qwen/CodeQwen1.5-7B/blob/main/config.json)、[Chat 配置](https://huggingface.co/Qwen/CodeQwen1.5-7B-Chat/blob/main/config.json)及模型卡核对 32 层、4096 隐藏维、32 查询头与 4 KV 头、65,536 最大位置、未启用滑动窗口。补充 GQA 的共享关系，区分配置中的实现类名称与模型系列；分别说明 Base 和 Chat 权重与许可。
- **训练**：对照[官方发布说明](https://qwenlm.github.io/blog/codeqwen1.5/)，核对约 3 万亿代码相关 token、92 种编程语言、仓库级长序列和 SQL 合成数据用于预训练和微调；官方未公开完整数据配比，不将业务数据准备建议写成官方流程。
- **评测**：官方文章的 HumanEval、HumanEval+ 表格核对 Base 和 Chat 的零样本分数，LiveCodeBench 时间范围及官方对 LeetCode 数据重合的提醒。补充官方 Needle in the Code 的构造方式和它不能证明整个仓库修复能力的局限；测试样例与线上实践不是实测。
- **配图**：对照[图示登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/codeqwen15/overview.svg)，代码输入经分词和因果解码生成文字、外部工具可选执行的箭头一致，图明示省略结构与 CC BY 4.0 许可。Chromium 打开本地正文并滚动，图成功解码（宽 1060 像素）、替代文本存在，截图确认中文和箭头。
- **社区**：沿用 [2026-10-27 实读记录](qwen-code-community.md)，[魔搭社区发布的 CodeQwen1.5 介绍](https://zhuanlan.zhihu.com/p/693022416)当时 13 赞同、18 收藏，涉及 Base 与 Chat 对照、长代码评测、微调示例。它是发布机构文章而非独立评测；上述评测对象、数据污染提醒与官方文章交叉核对，旧版脚本和硬件要求不当作现行承诺。本次未重读或核对实时互动数。
