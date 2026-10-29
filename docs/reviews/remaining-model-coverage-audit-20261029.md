# 其余模型覆盖和社区证据核查（2026-10-29）

范围：排除已在 Qwen 系列、DeepSeek／GLM 系列、Kimi／MiniMax／经典视觉语音覆盖核查中的条目，检查时间线剩余 22 个模型或版本。逐条查看对应正文、模型卡、登记图片及社区记录，核查记录是否包含可定位的知乎文章和互动信息；未在本次重新实读这些文章，也没有重新核验全部训练和评测数字。

| 模型（时间线 ID）                           | 独立正文                                                    | 社区记录                                                    | 当前状态 |
| ------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | -------- |
| Transformer (transformer)                   | [正文](../../src/content/docs/foundations/transformer.md)   | [审校记录](transformer-full-review-20261029.md)             | 已登记   |
| BERT (bert)                                 | [正文](../../src/content/docs/nlp/bert.md)                  | [审校记录](bert-training-eval-figure-community-20261029.md) | 已登记   |
| GPT-2 (gpt)                                 | [正文](../../src/content/docs/nlp/gpt.md)                   | [审校记录](gpt2-full-review-20261029.md)                    | 已登记   |
| T5 (t5)                                     | [正文](../../src/content/docs/nlp/t5.md)                    | [审校记录](t5-full-review-20261029.md)                      | 已登记   |
| Claude (claude)                             | [正文](../../src/content/docs/nlp/claude.md)                | [审校记录](claude-v13-cot-hub-20261029.md)                  | 已登记   |
| Gemini 1.5 (gemini)                         | [正文](../../src/content/docs/omni/gemini.md)               | [审校记录](gemini15-full-review-20261029.md)                | 已登记   |
| GPT-4o (gpt4o)                              | [正文](../../src/content/docs/omni/gpt4o.md)                | [审校记录](gpt4o-full-review-20261029.md)                   | 已登记   |
| Llama 3.1 (llama)                           | [正文](../../src/content/docs/nlp/llama.md)                 | [审校记录](llama31-full-review-20261029.md)                 | 已登记   |
| Jev (jev)                                   | [正文](../../src/content/docs/nlp/jev.md)                   | [审校记录](jev-full-review-20261029.md)                     | 已登记   |
| OmniJev (omnijev)                           | [正文](../../src/content/docs/omni/omnijev.md)              | [审校记录](omnijev-zhihu-identity-recheck-20261029.md)      | 待补     |
| GPT-3 (gpt3)                                | [正文](../../src/content/docs/nlp/gpt3-model.md)            | [审校记录](gpt3-full-review-20261029.md)                    | 已登记   |
| GPT-4 (gpt4)                                | [正文](../../src/content/docs/omni/gpt4-model.md)           | [审校记录](gpt4-full-review-20261029.md)                    | 已登记   |
| GPT 初代 (gpt1)                             | [正文](../../src/content/docs/nlp/gpt1-model.md)            | [审校记录](gpt1-full-review-20261029.md)                    | 已登记   |
| GPT-5 (gpt5)                                | [正文](../../src/content/docs/omni/gpt5-model.md)           | [审校记录](gpt5-full-review-20261029.md)                    | 已登记   |
| LLaMA 初代 (llama1)                         | [正文](../../src/content/docs/nlp/llama1-model.md)          | [审校记录](llama1-full-review-20261029.md)                  | 已登记   |
| Llama 2 (llama2)                            | [正文](../../src/content/docs/nlp/llama2-model.md)          | [审校记录](llama2-full-review-20261029.md)                  | 已登记   |
| Llama 3 (llama3)                            | [正文](../../src/content/docs/nlp/llama3-model.md)          | [审校记录](llama3-full-review-20261029.md)                  | 已登记   |
| Llama 4：Scout 与 Maverick (llama4)         | [正文](../../src/content/docs/omni/llama4-model.md)         | [审校记录](llama4-full-review-20261029.md)                  | 已登记   |
| Llama 3.2 Vision (llama32-vision)           | [正文](../../src/content/docs/omni/llama32-vision-model.md) | [审校记录](llama32-vision-full-review-20261029.md)          | 已登记   |
| Llama 3.3 70B Instruct (llama33)            | [正文](../../src/content/docs/nlp/llama33-model.md)         | [审校记录](llama33-full-review-20261029.md)                 | 已登记   |
| InstructGPT (instructgpt)                   | [正文](../../src/content/docs/nlp/instructgpt-model.md)     | [审校记录](instructgpt-full-review-20261029.md)             | 已登记   |
| Llama 3.2：1B 与 3B 文本模型 (llama32-text) | [正文](../../src/content/docs/nlp/llama32-text-model.md)    | [审校记录](llama32-text-full-review-20261029.md)            | 已登记   |

## 核查结果和边界

- 22 个条目对应 22 篇不同正文，首个二级标题均为模型卡，正文各超过 2,000 个汉字，均有登记配图。本项只证明字段与资源覆盖，不证明讲解准确、图示正确或所有网页效果已逐一目视。
- 除 OmniJev 外，其余 21 篇正文均列有知乎链接，对应的社区记录可定位到作者、赞同或收藏快照及其适用范围。其事实和误差边界仍按各专项记录及官方资料理解。
- OmniJev 已核查官方项目、第三方接入及 FastJEV 研究，但当前无法确认对应项目的深入知乎文章；未用 Jev-Omni 或 PlayJev 顶替，社区项保持待补。
- Claude 的社区资料包括准确提及标准版 Claude-v1.3 的论文汇总、初代系列长上下文报道及 Constitutional AI 方法文章；它们分别覆盖不同问题，不能把 Instant 实测、研究模型训练或后续版本推广成首发标准版的完整配方。
- Gemini 1.5 参考是初版 Pro 的报告翻译；Llama 3.3 参考互动量较低；GPT-5 参考为个人测试而非官方基准。具体模型版本和适用条件见对应记录。
- 这次核查没有复现训练、运行模型或复测数字，也未重新实读全部知乎文章和逐图检查手机页面。
