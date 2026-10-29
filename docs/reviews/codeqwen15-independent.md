# CodeQwen1.5 独立审校

2026-10-28 对照该模型的官方发布文章、Base 和 Chat 模型卡及 Chat 配置，复核正文和原创图。没有运行模型、复现基准或修改共享台账。

- [官方 Base 模型卡](https://huggingface.co/Qwen/CodeQwen1.5-7B)标注 `tongyi-qianwen-research`，而 [Chat 模型卡](https://huggingface.co/Qwen/CodeQwen1.5-7B-Chat)标注 `tongyi-qianwen`；两者许可不同。正文此前仅提示 Chat 许可，已补上 Base 差异并链接两张模型卡，不对许可证作超出原文的法律解释。
- [Chat 配置](https://huggingface.co/Qwen/CodeQwen1.5-7B-Chat/blob/main/config.json)列出 decoder 型 `Qwen2ForCausalLM`、32 层、32 查询头和 4 键值头、最大位置 65,536、`use_sliding_window: false`；GQA 和 64K 的正文口径与配置及模型卡一致。实现类名称不表示该模型属于后来的 Qwen2.5 系列。
- [发布文章](https://qwenlm.github.io/blog/codeqwen1.5/)称预训练约 3 万亿代码相关 token、支持 92 种编程语言，公开 Base 与 Chat 版本；正文补充语言数并说明不代表每种语言效果相同。官方还称 SQL 合成数据用于预训练和微调，但未公开可完整复现的具体配方。
- 发布文章表格确认 HumanEval 零样本 Base 51.8、Chat 83.5，HumanEval+ 零样本 45.7/78.7。LiveCodeBench 涵盖 2023-09-01 至 2024-04-01，官方承认训练数据可能包含 LeetCode；正文补足时间范围，不将结果视为已排除污染。
- 原创图 `public/figures/codeqwen15/overview.svg` 是简化的数据流，外部执行器标明可选。为避免图中误认为普通 Qwen1.5 权重，已将解码器改标 CodeQwen1.5，并将四条箭头接至框边；没有暗示模型自行执行代码。

结果依赖评测提示、库与执行环境，未独立运行或复现；单次测试通过不能保证程序行为在所有输入上正确。
