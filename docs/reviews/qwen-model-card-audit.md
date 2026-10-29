# Qwen 模型卡抽查

核对日期：2026-10-28。抽查六篇模型卡的版本、参数、上下文与权重许可，以下为所查范围，并非对全部正文或模型实验结果的逐项验证。

| 页面                                                   | 官方依据与结论                                                                                                                                                                                                                               |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Qwen 初代](../../src/content/docs/nlp/qwen1-model.md) | [官方系列介绍](https://qwenlm.github.io/blog/qwen/)列出 7B 的 2023-08-03 发布日期，以及后来公开的其他规格。                                                                                                                                  |
| [Qwen1.5](../../src/content/docs/nlp/qwen15-model.md)  | [官方介绍](https://qwenlm.github.io/blog/qwen1.5/)列出 0.5B 至 110B 稠密规格及 MoE；文章列出的规格覆盖后续发布，并非全部在首发日推出。                                                                                                       |
| [Qwen2](../../src/content/docs/nlp/qwen2-model.md)     | [官方发布](https://qwenlm.github.io/blog/qwen2/)列出五种规模；7B 和 72B Instruct 的 128K 是使用 YaRN 的扩展能力，模型卡已写明条件。                                                                                                          |
| [Qwen2.5](../../src/content/docs/nlp/qwen25-model.md)  | [官方发布](https://qwenlm.github.io/blog/qwen2.5/)列出七种开放稠密模型；[3B Instruct](https://huggingface.co/Qwen/Qwen2.5-3B-Instruct)和[72B Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct)许可标识不同，已在模型卡下补充例子。 |
| [Qwen3](../../src/content/docs/nlp/qwen3.md)           | [初版发布](https://qwenlm.github.io/blog/qwen3/)列出稠密与 MoE 系列；[8B](https://huggingface.co/Qwen/Qwen3-8B)和[30B-A3B](https://huggingface.co/Qwen/Qwen3-30B-A3B)模型卡区分原生 32,768、YaRN 扩展 131,072 和配置值 40,960，已补充说明。  |
| [Qwen3.5](../../src/content/docs/omni/qwen35-model.md) | [397B-A17B 模型卡](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)列出语言模型 397B 总参数、17B 激活、60 层、混合注意力、原生 262,144 与扩展上限 1,010,000，许可标为 Apache-2.0；已有说明与其一致。                                           |
