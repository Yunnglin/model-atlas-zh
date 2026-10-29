# 前 50 个模型完成证据范围审计（2026-10-29）

范围是 `docs/reviews/review-ledger.yaml` 的第 1–50 条及其五项 `completedEvidence` 文件，不是时间排序，也不是 150 个模型的全面审计。逐份核读记录中对模型版本、结构、训练、评测、配图和社区的表述；这次没有重新打开所有论文、知乎页面或图片，也没有逐句重审当前正文或验证历史浏览器截图。能找到记录及其具体描述，不能单凭本页证明其全部事实正确。

记录本身均写有对应维度的核查内容；闭源或未披露的训练信息按记录所述公开边界处理。下表的“记录”是台账实际指向的完成证据，不是对它的重新背书。社区资料的阅读时间和赞藏取各记录中的历史快照。

| 序号 | 模型 ID          | 台账指向的完成证据                                                                            | 本次发现的范围边界                                                       |
| ---: | ---------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|    1 | transformer      | [记录](transformer-full-review-20261029.md)                                                   | 详见各维度记录；本次仅核读记录。                                         |
|    2 | bert             | [1](bert-structure-complete-20261029.md) [2](bert-training-eval-figure-community-20261029.md) | 详见各维度记录；本次仅核读记录。                                         |
|    3 | gpt              | [记录](gpt2-full-review-20261029.md)                                                          | 详见各维度记录；本次仅核读记录。                                         |
|    4 | t5               | [记录](t5-full-review-20261029.md)                                                            | 详见各维度记录；本次仅核读记录。                                         |
|    5 | conformer        | [记录](conformer-full-review-20261029.md)                                                     | 详见各维度记录；本次仅核读记录。                                         |
|    6 | vit              | [记录](vit-full-review-20261029.md)                                                           | 详见各维度记录；本次仅核读记录。                                         |
|    7 | wav2vec2         | [记录](wav2vec2-full-review-20261029.md)                                                      | 详见各维度记录；本次仅核读记录。                                         |
|    8 | clip             | [记录](clip-full-review-20261029.md)                                                          | 详见各维度记录；本次仅核读记录。                                         |
|    9 | glm-original     | [记录](glm-original-full-review-20261029.md)                                                  | 详见各维度记录；本次仅核读记录。                                         |
|   10 | hubert           | [记录](hubert-full-review-20261029.md)                                                        | 详见各维度记录；本次仅核读记录。                                         |
|   11 | swin             | [记录](swin-full-review-20261029.md)                                                          | 详见各维度记录；本次仅核读记录。                                         |
|   12 | dit              | [记录](dit-full-review-20261029.md)                                                           | 详见各维度记录；本次仅核读记录。                                         |
|   13 | encodec          | [记录](encodec-deep-review-20261029.md)                                                       | 详见各维度记录；本次仅核读记录。                                         |
|   14 | stable-diffusion | [记录](stable-diffusion-full-review-20261029.md)                                              | 源码文章未明确 v1-4；另有 v1-4 演示记录，但较侧重推理。                  |
|   15 | whisper          | [记录](whisper-full-review-20261029.md)                                                       | 详见各维度记录；本次仅核读记录。                                         |
|   16 | chatglm-version  | [记录](chatglm-first-full-review-20261029.md)                                                 | 详见各维度记录；本次仅核读记录。                                         |
|   17 | chatglm2-version | [记录](chatglm2-full-review-20261029.md)                                                      | 详见各维度记录；本次仅核读记录。                                         |
|   18 | chatglm3-version | [记录](chatglm3-full-review-20261029.md)                                                      | 详见各维度记录；本次仅核读记录。                                         |
|   19 | claude           | [1](claude-full-review-20261029.md) [2](claude-v13-cot-hub-20261029.md)                       | 社区为明确提及 v1.3 的论文摘要；深入结构与训练分析仍缺。                 |
|   20 | llava            | [记录](llava-full-review-20261029.md)                                                         | 详见各维度记录；本次仅核读记录。                                         |
|   21 | qwen-1           | [记录](qwen1-full-review-20261029.md)                                                         | 详见各维度记录；本次仅核读记录。                                         |
|   22 | qwen-audio       | [记录](qwen-audio-full-review-20261029.md)                                                    | 详见各维度记录；本次仅核读记录。                                         |
|   23 | qwen-vl-first    | [记录](qwen-vl-first-full-review-20261029.md)                                                 | 详见各维度记录；本次仅核读记录。                                         |
|   24 | sam              | [记录](sam-full-review-20261029.md)                                                           | 详见各维度记录；本次仅核读记录。                                         |
|   25 | vall-e           | [记录](vall-e-full-review-20261029.md)                                                        | 详见各维度记录；本次仅核读记录。                                         |
|   26 | qwen-coder-15    | [记录](codeqwen15-full-review-20261029.md)                                                    | 知乎文章来自发布机构，不是独立评测。                                     |
|   27 | deepseek-v3      | [记录](deepseek-v3-full-review-20261029.md)                                                   | 详见各维度记录；本次仅核读记录。                                         |
|   28 | f5-tts           | [记录](f5-tts-full-review-20261029.md)                                                        | 详见各维度记录；本次仅核读记录。                                         |
|   29 | gemini           | [记录](gemini15-full-review-20261029.md)                                                      | 知乎参考为初版 Pro 报告翻译，不覆盖 Flash 或后续修订。                   |
|   30 | glm-vision       | [记录](glm-v-full-review-20261029.md)                                                         | 详见各维度记录；本次仅核读记录。                                         |
|   31 | gpt4o            | [记录](gpt4o-full-review-20261029.md)                                                         | 详见各维度记录；本次仅核读记录。                                         |
|   32 | llama            | [记录](llama31-full-review-20261029.md)                                                       | 详见各维度记录；本次仅核读记录。                                         |
|   33 | qwen-15          | [记录](qwen15-full-review-20261029.md)                                                        | 社区文章仅覆盖 MoE 分支，稠密规格依一手资料。                            |
|   34 | qwen-2           | [记录](qwen2-full-review-20261029.md)                                                         | 详见各维度记录；本次仅核读记录。                                         |
|   35 | qwen2-audio      | [记录](qwen2-audio-full-review-20261029.md)                                                   | 详见各维度记录；本次仅核读记录。                                         |
|   36 | qwen2-vl         | [记录](qwen2-vl-full-review-20261029.md)                                                      | 详见各维度记录；本次仅核读记录。                                         |
|   37 | qwen-25          | [记录](qwen25-full-review-20261029.md)                                                        | 知乎参考为官方报告中文翻译，非独立实验。                                 |
|   38 | qwen25-coder     | [记录](qwen25-coder-full-review-20261029.md)                                                  | 详见各维度记录；本次仅核读记录。                                         |
|   39 | qwen2-math       | [记录](qwen2-math-full-review-20261029.md)                                                    | 详见各维度记录；本次仅核读记录。                                         |
|   40 | qwen-math        | [记录](qwen25-math-full-review-20261029.md)                                                   | 详见各维度记录；本次仅核读记录。                                         |
|   41 | deepseek-r1      | [记录](deepseek-r1-full-review-20261029.md)                                                   | 详见各维度记录；本次仅核读记录。                                         |
|   42 | glm45            | [记录](glm45-full-review-20261029.md)                                                         | 详见各维度记录；本次仅核读记录。                                         |
|   43 | glm46            | [记录](glm46-full-review-20261029.md)                                                         | 详见各维度记录；本次仅核读记录。                                         |
|   44 | glm47            | [记录](glm47-full-review-20261029.md)                                                         | 详见各维度记录；本次仅核读记录。                                         |
|   45 | glm-audio        | [记录](glm-asr-full-review-20261029.md)                                                       | 确认版本的工程笔记未系统讨论训练／评测；相关弱匹配测试未推作对应检查点。 |
|   46 | kimi15           | [记录](kimi15-full-review-20261029.md)                                                        | 详见各维度记录；本次仅核读记录。                                         |
|   47 | kimi-k2          | [记录](kimi-k2-full-review-20261029.md)                                                       | 详见各维度记录；本次仅核读记录。                                         |
|   48 | kimi-k2-thinking | [记录](kimi-k2-thinking-full-review-20261029.md)                                              | QAT 文章来自项目相关方；具体配置依模型卡。                               |
|   49 | kimi-linear      | [记录](kimi-linear-full-review-20261029.md)                                                   | 团队成员的说明不是独立评测；性能条件依论文。                             |
|   50 | kimi-audio       | [记录](kimi-audio-full-review-20261029.md)                                                    | 详见各维度记录；本次仅核读记录。                                         |

## 范围说明与需继续的核验

- 上表的已写入证据有不同深度。`qwen-15` 的社区材料只讲 MoE，`qwen-25` 和 `gemini` 以翻译为主，`qwen-coder-15`、`kimi-linear`、`kimi-k2-thinking` 含项目相关方材料；这些不能当作同型号独立实验，也不应掩盖记录中已说明的范围。现有台账“社区完成”允许按型号读取并与官方交叉核对，不要求资料必须独立，故本次不单凭这一事实建议降级；若要求独立验证，仍需补充。
- `claude` 的社区资料明确提到标准版 v1.3，但仅为论文摘要；`glm-audio` 的版本明确工程笔记没有深入训练和评测，记录另将未能确认完整版本的社区测试区分出来。二者适合列为社区深度补强候选。
- `stable-diffusion` 的两篇资料中，源码文章不写具体检查点，指定 v1-4 的文章侧重运行演示，均不能单独证明 v1-4 的训练细节。
- 不少完成证据是正文后续修改前形成；是否覆盖后续新段落应逐项查关联补充证据。比如 wav2vec2 的图已在本轮原始审校之后更新，补充证据应以台账 `evidence` 中的 [图示复核](four-foundation-figure-dataflow-20261029.md) 为准。本表没有核实各页每次改动的时序。
- 原始记录声称浏览器渲染和历史实读，不是本次重新执行的结果；个别记录使用原图、其他使用简化教学图。运行模型或复现评测均不在本次范围内。
