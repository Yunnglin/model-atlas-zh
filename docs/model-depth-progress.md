# 具体模型深读进度

用户要求时间轴每个模型有独立页面，正文至少 2000 字，图文并茂，并能跳转相关知识。以下进度按这个要求记录，字数只检查中文字符，不能代替技术和写作品质 review。

本文保留早期内容扩展记录，下面的节点数是当时的历史快照。当前时间线范围与按维度审校的进度以[内容审阅进度](reviews/review-progress.md)为准；字数、页面存在与完整审校是不同的检查。

2026-10-29 最新盘点：时间线 150 个节点分别匹配到 150 篇不同正文；去掉文件头后，每篇正文均有至少 2000 个汉字，最短为 QwQ-Preview 的 2483 个汉字。计数包括正文中的表格和参考资料，只是长度检查，不能证明讲解深度、图示正确性或审校质量；相关状态仍以审阅台账为准。

- 已完成独立深读：Qwen 第一代（2667 个中文字符，原创教学图）、Qwen1.5（2604 个中文字符，原创教学图）、Qwen2（2498 个中文字符，原创教学图，来源为官方发布与报告）、Qwen2.5（2715 个中文字符，原创教学图，来源为官方发布与报告）、Qwen3（补写后超过 2000 中文字符，有教学图）、Qwen3-Next（2045 个中文字符，有教学图）、Qwen2.5-VL（已有独立正文和教学图，超过 2000 中文字符）、Qwen3.5（2578 个中文字符，原创教学图）、Qwen3-VL（2754 个中文字符，原创教学图）、Qwen3-Omni（2686 个中文字符，官方图）、Qwen2.5-Omni（2104 个中文字符，官方图）、Qwen3-TTS（2140 个中文字符，官方图）、Qwen3-ASR（超过 2000 个中文字符，官方图）、Qwen-Audio 和 Qwen2-Audio（独立正文各超过 2000 个中文字符，均使用对应论文官方图）、Qwen-VL 第一代和 Qwen2-VL（独立正文各超过 2000 个中文字符，原创教学图）、CodeQwen1.5、Qwen2.5-Coder、Qwen3-Coder 和 Qwen3-Coder-Next（独立正文各超过 2000 个中文字符，原创教学图，其中 Coder-Next 复用 Next 底座图）。
- Transformer 原始架构、GLM-5、Kimi K2.6、MiniMax-M2.5、初代 DeepSeek LLM、GLM-4.7、Kimi K2.5、MiniMax-M2.1、Kimi Linear、GLM-4.6、MiniMax-M2、Qwen3 Embedding、GLM-4.5、Kimi-VL、Qwen2.5-Math、QwQ-32B、Kimi-Audio、Janus-Pro、DeepSeekMath-V2、初代 DeepSeek-Coder、DeepSeek-V3.1 初版、DeepSeekMath 初版、DeepSeek-VL2、DeepSeek-Coder-V2、DeepSeek-V2、原始 DeepSeek-V3、DeepSeek-V3.2、DeepSeek-V4-Flash、DeepSeek-V4-Pro、DeepSeek-V4.1-Flash 与初版 DeepSeek-R1：新增或补深独立正文和教学图，核对官方报告及知乎分析；仍需整体终审。
- 本批新增 GLM-5.1、GLM-5.2、GLM-OCR、MiniMax-M2.7、MiniMax M3、GLM-5.3、GLM-5.3-Flash、MiniMax M3.1 Flash、Kimi K2.7 Code、Qwen3Guard、Qwen3.7、Qwen3.6、原始 GLM、GLM-V、GLM-ASR 独立正文及教学简图；均已接入时间轴，仍需全库统一终审。
- 时间轴 96 个节点已各自关联模型卡、配图及至少 2000 个中文字符正文；这是结构检查结果，不代表论文、图示和所有知乎来源已逐句核实。剩余工作为逐批事实复核、补齐知乎交叉验证、设计与交互验收。
- 月份：每个有月份的节点必须标明官方发布或论文首次公开及对应来源；未核对的月份不推测。月份缺失项见 `src/content/data/model-timeline.yaml`。
- 所有数字算例、排错建议与实际运行结果分开说明。封闭模型的未披露结构与数据不填造；正文应深入公开原理、能力边界和可验证方法。

图形优先查官方许可与原图；教学简图标注范围、简化部分、来源与许可证。知乎文章先核对赞同、收藏与正文质量，事实回到原论文、模型卡和官方实现，筛选记录见 [知乎阅读](reviews/zhihu-reading.md)。

BERT、GPT-2、T5、ViT、wav2vec 2.0、Whisper、CLIP、HuBERT、Swin、SAM、DiT、Conformer、EnCodec、Stable Diffusion、LLaVA、VALL-E、Llama 3.1、ChatGLM、F5-TTS、Qwen3.8、Qwen-Image、Kimi K1.5、Kimi K2 与 Thinking、Kimi K3、Jev、OmniJev、Claude、Gemini 1.5、GPT-4o 补充原始规格模型卡、训练与评测细节及自绘图；其他早期基础模型仍需逐篇核对深度和配图。

2026-10-27 重点审校：Qwen NLP 与图像页面修正数据规模及 GenEval 口径；DeepSeek-Math-V2 修正已发布权重与许可；Kimi K2.6 更新失效的官方日期来源。详见本轮工作记录，仍非全库逐句终审。

2026-10-27 继续审校：核对 Qwen 音频及多模态页面、BERT／GPT-2／T5 等基础模型，以及 LoRA、SFT、PPO、GRPO、GSPO、DAPO、RLOO、RLHF、RLVR、蒸馏和量化等训练方法。修正部分 Qwen 音频模型卡日期和 Qwen3-Omni 训练阶段顺序，区分 BERT 论文与权重发布日期、GPT-2 的不同参数统计口径，并调整 RLOO 基线和 DAPO 奖励说明。T5、Qwen3.6 和 Qwen3.8 新增可读取、可核验互动量的社区参考；阅读取舍见 [知乎阅读](reviews/zhihu-reading.md)。这些是针对具体知识点的核对，不能视为所有文章所有句子、图片和知乎资料均已复核。
