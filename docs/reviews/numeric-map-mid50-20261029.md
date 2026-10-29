# 第 51–100 项模型的评测数字补充复核对应表（2026-10-29）

按 `model-timeline.yaml` 顺序及稳定 ID 对应[补充复核索引](numeric-followup-20261029.md)中直接列出的具体记录。每行仅表示该记录对指定数字或评测材料有定向核查，并非逐项核对全文所有数字，也不证明模型已运行或评测已复现；记录未列出不等于没有其他审校。无官方定量成绩的条目明确标出，不计作核对了实测分数。

| 序号 | 时间线 ID            | 记录                                                   | 指定范围或限制                               |
| ---: | -------------------- | ------------------------------------------------------ | -------------------------------------------- |
|   51 | kimi-vl              | [记录](kimi-vl-full-review-20261029.md)                | InfoVQA 等                                   |
|   52 | qwen-image           | [记录](qwen-image-full-review-20261029.md)             | GenEval、ChineseWord                         |
|   53 | qwen-image-edit      | [记录](qwen-numeric-batch6-20261029.md)                | 报告多任务编辑模型 GEdit-Bench，注意名称口径 |
|   54 | qwen-image-layered   | [记录](qwen-numeric-batch6-20261029.md)                | Crello、LayerD 微调版本                      |
|   55 | qwen-vla             | [记录](qwen-numeric-batch9-20261029.md)                | 机器人仿真与真实实验                         |
|   56 | qwen3-livetranslate  | [记录](qwen-numeric-batch10-20261029.md)               | 官方相对指标，含教学算例                     |
|   57 | qwen35-livetranslate | [记录](qwen-numeric-batch10-20261029.md)               | 延迟指标；官方文章经搜索索引读取             |
|   58 | qwen-image21         | [记录](qwen-numeric-batch9-20261029.md)                | 无具体官方榜单分数；核对任务与教学算例       |
|   59 | qwen38-livetranslate | [记录](qwen-numeric-batch10-20261029.md)               | 语言方向与延迟；官方文章经搜索索引读取       |
|   60 | qwen38-flash-next    | [记录](qwen-numeric-batch10-20261029.md)               | 注意力效率与 SWE-bench Pro                   |
|   61 | qwen-omni            | [记录](qwen25-omni-numeric-review-20261029.md)         | 音频与视频评测                               |
|   62 | qwen-vl              | [记录](qwen25vl-full-review-20261029.md)               | 视觉评测                                     |
|   63 | qwen3                | [记录](qwen-numeric-batch9-20261029.md)                | 32B 后训练各阶段                             |
|   64 | qwen-embedding       | [记录](qwen3-embedding-full-review-20261029.md)        | 检索评测                                     |
|   65 | qwen3-vl-embedding   | [记录](qwen3-vl-embedding-full-review-20261029.md)     | 多模态检索评测                               |
|   66 | qwen3-coder          | [记录](qwen-numeric-batch6-20261029.md)                | SWE-bench 工具轮数                           |
|   67 | qwen-next            | [记录](qwen3-next-full-review-20261029.md)             | Instruct 基准与上下文                        |
|   68 | qwen3-omni           | [记录](qwen3-omni-full-review-20261029.md)             | 报告指定基准                                 |
|   69 | qwen35-omni          | [记录](qwen-numeric-batch7-20261029.md)                | WorldSense 两版报告口径                      |
|   70 | qwen38-omni          | [记录](qwen-numeric-batch7-20261029.md)                | Flash／Realtime，理解与延迟协议              |
|   71 | qwen3-vl             | [记录](qwen3-vl-full-review-20261029.md)               | 报告指定评测                                 |
|   72 | qwen-guard           | [记录](qwen3guard-numeric-review-20261029.md)          | 分类评测                                     |
|   73 | qwen-qwq             | [记录](qwen-numeric-batch8-20261029.md)                | 无具体官方基准分数；核对推理建议与教学算例   |
|   74 | glm5                 | [记录](glm-deepseek-numeric-review-20261029.md)        | SWE-bench Verified                           |
|   75 | glm52                | [记录](glm-deepseek-numeric-review-batch6-20261029.md) | HLE、Terminal-Bench 等                       |
|   76 | glm53                | [记录](glm-deepseek-numeric-review-batch6-20261029.md) | Terminal-Bench、DeepSWE 等                   |
|   77 | glm53-flash          | [记录](glm-deepseek-numeric-review-batch6-20261029.md) | 基座 MMLU、LiveCodeBench 及 Terminal-Bench   |
|   78 | glm-ocr              | [记录](glm-deepseek-numeric-review-batch6-20261029.md) | OmniDocBench                                 |
|   79 | jev                  | [记录](numeric-missing-batch11-20261029.md)            | 教学数值而非基准；核对官方评测描述           |
|   80 | kimi25               | [记录](kimi-k25-full-review-20261029.md)               | 指定智能体与多模态评测                       |
|   81 | kimi26               | [记录](numeric-kimi-minimax-batch5-20261029.md)        | SWE-bench、Terminal-Bench 等                 |
|   82 | kimi27               | [记录](numeric-kimi-minimax-batch5-20261029.md)        | 代码和工具评测                               |
|   83 | kimi-k3              | [记录](numeric-kimi-minimax-batch5-20261029.md)        | Terminal-Bench、DeepSWE 等                   |
|   84 | omnijev              | [记录](numeric-missing-batch11-20261029.md)            | 项目自报评测及 FastJEV 第三方结果            |
|   85 | qwen3-asr            | [记录](qwen3-asr-full-review-20261029.md)              | ASR 指定评测                                 |
|   86 | qwen-coder-next      | [记录](qwen3-coder-next-full-review-20261029.md)       | SWE-bench 与 Terminal-Bench                  |
|   87 | qwen-tts             | [记录](qwen3-tts-full-review-20261029.md)              | 语音合成指定评测                             |
|   88 | qwen35               | [记录](qwen-numeric-batch7-20261029.md)                | 397B-A17B 视觉评测                           |
|   89 | qwen36               | [记录](qwen-numeric-batch7-20261029.md)                | 27B 代码与视觉评测                           |
|   90 | qwen37               | [记录](qwen-numeric-batch9-20261029.md)                | Max 厂商单例；部分知乎数字沿历史记录         |
|   91 | qwen38-version       | [记录](qwen-numeric-batch7-20261029.md)                | 27B 评测；此记录不覆盖 2.4T                  |
|   92 | glm51                | [记录](glm-deepseek-numeric-review-20261029.md)        | 代码智能体、数学基准                         |
|   93 | deepseek-llm         | [记录](deepseek-llm-full-review-20261029.md)           | HumanEval 与选择题实验                       |
|   94 | deepseek-coder       | [记录](deepseek-coder-full-review-20261029.md)         | HumanEval、DS-1000、CrossCodeEval            |
|   95 | deepseek-math        | [记录](deepseek-math-full-review-20261029.md)          | 数学推理评测                                 |
|   96 | janus-pro            | [记录](janus-pro-full-review-20261029.md)              | 理解与生成评测                               |
|   97 | deepseek-math-v2     | [记录](glm-deepseek-numeric-review-20261029.md)        | 验证器与高计算数学评测                       |
|   98 | deepseek-v2          | [记录](deepseek-v2-full-review-20261029.md)            | 指定基准评测                                 |
|   99 | deepseek-coder-v2    | [记录](deepseek-coder-v2-full-review-20261029.md)      | 指定代码评测                                 |
|  100 | deepseek-vl2         | [记录](deepseek-vl2-full-review-20261029.md)           | DocVQA、ChartQA                              |

Qwen3.8 系列正文也讨论 2.4T 型号，上述第七批记录只核对 27B 的指定结果，不能扩展为已核对另一规格的所有数字。OmniJev 的数字复核不等于已经找到对应知乎专属文章。

后续补充：Qwen3.8-2.4T 的结构和 Max 服务评测口径见[专项复核](qwen38-24t-numeric-review-20261029.md)。

后续补充：Qwen-Image-2.1 的团队提示增强组合评测见[专项记录](qwen-image21-prompt-eval-followup-20261029.md)，该数字不是裸模型独立得分。

后续补充：QwQ-32B 后续补充的官方报告成绩见[专项记录](qwq32b-official-evaluation-followup-20261029.md)。
