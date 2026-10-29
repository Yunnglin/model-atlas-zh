# DeepSeek 六篇模型文章的例子与条件抽查

核对日期：2026-10-28。仅核查下表列出的代表性主张，不代表逐句核验，未运行模型或复现论文评测。

| 文章                                                                    | 核查内容与一手资料                                                                                                                                                   |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeepSeek LLM](../../src/content/docs/nlp/deepseek-llm-model.md)        | [报告](https://arxiv.org/html/2401.02954)表 2 与表 12：7B/67B 的层数与 GQA，7B 两阶段 SFT 的 HumanEval、GSM8K 及零温重复率；补充 67B 只做一阶段的公开说明。          |
| [DeepSeek-Coder](../../src/content/docs/nlp/deepseek-coder-model.md)    | [报告](https://arxiv.org/html/2401.14196)第 2 节与表 7：中英文数据比例、87 种语言及 6.7B 的 CrossCodeEval 检索对照；明确 3% 中文材料与代码无关。                     |
| [DeepSeekMath](../../src/content/docs/nlp/deepseek-math-model.md)       | [报告](https://arxiv.org/html/2402.03300)第 2、4 节：120B 数学语料、500B 训练 token 的 56% 混合比例，以及 GRPO 实验每题 64 个回答。                                  |
| [DeepSeekMath-V2](../../src/content/docs/nlp/deepseek-math-v2-model.md) | [报告](https://arxiv.org/html/2511.22570)第 2、3 节：17,503 道题、三档证明评分、高计算搜索的 64 份证明、64 次验证及最多 16 轮；补充每份候选配对 8 个分析与停止条件。 |
| [Janus-Pro](../../src/content/docs/omni/janus-pro-model.md)             | [报告](https://arxiv.org/html/2501.17811)第 2、3 节：三阶段训练、第二阶段 270K 步提前停止及 MMBench/GenEval；补充 GenEval 的单对象与计数子项。                       |
| [DeepSeek-VL2](../../src/content/docs/omni/deepseek-vl2-model.md)       | [报告](https://arxiv.org/html/2412.10302)表 2、4、5：三种规模语言模型激活参数、各阶段冻结设置及 Small 在 DocVQA/ChartQA 的分数。                                     |

论文分数只在其模型、数据和评测条件下成立；文章中的业务例子是教学构造，不是实际推理结果。
