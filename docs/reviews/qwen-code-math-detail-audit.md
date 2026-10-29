# Qwen 代码与数学模型的版本核对

核对日期：2026-10-28。本轮逐页检查代表性的模型版本、结构、训练数据与评测口径，不代表逐句复核全文，也未实际运行模型。

| 页面                                                                     | 核对依据与范围                                                                                                                                                                                                 |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CodeQwen1.5](../../src/content/docs/nlp/codeqwen15-model.md)            | [官方介绍](https://qwenlm.github.io/blog/codeqwen1.5/)中 HumanEval 与 HumanEval+ 区分 Base、Chat 和零样本设置。官方同时提醒预训练语料可能包含 LeetCode 数据，已在正文补充 LiveCodeBench 的污染边界。           |
| [Qwen2.5-Coder](../../src/content/docs/nlp/qwen25-coder-model.md)        | [报告 v3](https://arxiv.org/html/2409.12186v3)第 3 节区分文件级 5.2T、仓库级约 300B、训练长度和 YaRN 外推；数据比例来自该报告的特定模型实验。                                                                  |
| [Qwen3-Coder](../../src/content/docs/nlp/qwen3-coder-model.md)           | [首发文章](https://qwenlm.github.io/blog/qwen3-coder/)称 7.5T token、70% 代码及可并行运行 20,000 个环境；[模型卡](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)区分 480B 总参数和 35B 激活参数。 |
| [Qwen3-Coder-Next](../../src/content/docs/nlp/qwen3-coder-next-model.md) | [模型卡](https://huggingface.co/Qwen/Qwen3-Coder-Next)列出 48 层、3:1 混合层布局与 512 个路由专家选 10；[报告 v1](https://arxiv.org/html/2603.00729v1)表 3 的 70.6、71.1、71.3 对应不同脚手架，最多 300 轮。   |
| [Qwen2.5-Math](../../src/content/docs/nlp/qwen25-math-model.md)          | [报告](https://arxiv.org/html/2409.12122)第 2–3 节区分 Qwen Math Corpus v1、v2 和 SFT 的中英问题池；不同推理方式、规格和采样预算的结果不可直接混用。                                                           |

中文材料的作者、互动数和适用范围另见[代码社区参考](qwen-code-community.md)及[社区覆盖盘点](community-coverage.md)。
