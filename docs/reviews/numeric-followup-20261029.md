# 评测数字补充复核记录

这里记录 2026-10-29 进行的补充核对：针对正文中引用的部分评测数字，再次检查模型版本、数据集、指标、表号和实验条件。链接指向每篇已有的专项审校记录；具体覆盖的数字以记录正文为准。这里不是全库评测数字的完整清单，未列出不等于没有审校，也不表示已复现模型评测。

按时间线稳定 ID 整理的对应表： [前 50 项](numeric-map-first50-20261029.md)、[第 51–100 项](numeric-map-mid50-20261029.md)、[第 101–150 项](numeric-map-last50-20261029.md)。150 个型号均可定位至少一条指定数字或评测协议的记录；具体范围各不相同，不能算作所有数字已逐一核对。

- Qwen2-Math、Qwen2-VL、Qwen3-Reranker、Qwen3-ForcedAligner：[Math](qwen2-math-full-review-20261029.md)、[VL](qwen2-vl-full-review-20261029.md)、[Reranker](qwen3-reranker-full-review-20261029.md)、[ForcedAligner](qwen3-forcedaligner-full-review-20261029.md)。
- DeepSeek-Coder、DeepSeekMath：[Coder](deepseek-coder-full-review-20261029.md)、[Math](deepseek-math-full-review-20261029.md)。
- Qwen2、Qwen2.5、Qwen-Audio、Qwen2-Audio：[Qwen2](qwen2-full-review-20261029.md)、[Qwen2.5](qwen25-full-review-20261029.md)、[Audio](qwen-audio-full-review-20261029.md)、[2-Audio](qwen2-audio-full-review-20261029.md)。
- DeepSeek-V2、Coder-V2、VL2、R1-0528 和 GLM-130B：[V2](deepseek-v2-full-review-20261029.md)、[Coder-V2](deepseek-coder-v2-full-review-20261029.md)、[VL2](deepseek-vl2-full-review-20261029.md)、[R1-0528](deepseek-r1-0528-full-review-20261029.md)、[GLM-130B](glm130-full-review-20261029.md)。
- Kimi Linear、Kimi-VL、MiniMax-M2.1、M2.5：[Linear](kimi-linear-full-review-20261029.md)、[VL](kimi-vl-full-review-20261029.md)、[M2.1](minimax-m21-full-review-20261029.md)、[M2.5](minimax-m25-full-review-20261029.md)。
- BERT、T5、ViT、CLIP：[BERT](bert-training-eval-figure-community-20261029.md)、[T5](t5-full-review-20261029.md)、[ViT](vit-full-review-20261029.md)、[CLIP](clip-full-review-20261029.md)。
- Qwen3-VL、VL-Embedding、VL-Reranker、Qwen-Image、Qwen3-TTS：[VL](qwen3-vl-full-review-20261029.md)、[VL-Embedding](qwen3-vl-embedding-full-review-20261029.md)、[VL-Reranker](qwen3-vl-reranker-full-review-20261029.md)、[Image](qwen-image-full-review-20261029.md)、[TTS](qwen3-tts-full-review-20261029.md)。
- DPO、KTO、ORPO、SimPO：[DPO](dpo-full-review-20261029.md)、[KTO](kto-full-review-20261029.md)、[ORPO](orpo-full-review-20261029.md)、[SimPO](simpo-full-review-20261029.md)。
- Qwen 初代、Qwen2.5-Coder、Qwen2.5-VL、Qwen3-Omni、Qwen3-ASR：[Qwen](qwen1-full-review-20261029.md)、[Coder](qwen25-coder-full-review-20261029.md)、[VL](qwen25vl-full-review-20261029.md)、[Omni](qwen3-omni-full-review-20261029.md)、[ASR](qwen3-asr-full-review-20261029.md)。
- DeepSeek-V3、DeepSeek-R1、GLM-4.5、4.6、4.7：[V3](deepseek-v3-full-review-20261029.md)、[R1](deepseek-r1-full-review-20261029.md)、[GLM-4.5](glm45-full-review-20261029.md)、[4.6](glm46-full-review-20261029.md)、[4.7](glm47-full-review-20261029.md)。
- Whisper、wav2vec 2.0、HuBERT、F5-TTS：[Whisper](whisper-full-review-20261029.md)、[wav2vec 2.0](wav2vec2-full-review-20261029.md)、[HuBERT](hubert-full-review-20261029.md)、[F5-TTS](f5-tts-full-review-20261029.md)。
- Qwen1.5、Qwen2.5-Math、Qwen3-Coder-Next、Qwen3-Next、Qwen3-Embedding：[Qwen1.5](qwen15-full-review-20261029.md)、[Math](qwen25-math-full-review-20261029.md)、[Coder-Next](qwen3-coder-next-full-review-20261029.md)、[Next](qwen3-next-full-review-20261029.md)、[Embedding](qwen3-embedding-full-review-20261029.md)。
- DeepSeek-LLM、V3.1、V3.2、GLM-4-9B、ChatGLM3、Janus-Pro：[LLM](deepseek-llm-full-review-20261029.md)、[V3.1](deepseek-v31-full-review-20261029.md)、[V3.2](deepseek-v32-full-review-20261029.md)、[GLM-4-9B](glm4-9b-full-review-20261029.md)、[ChatGLM3](chatglm3-full-review-20261029.md)、[Janus-Pro](janus-pro-full-review-20261029.md)。
- Kimi k1.5、K2、K2.5、MiniMax-M1、M2：[k1.5](kimi15-full-review-20261029.md)、[K2](kimi-k2-full-review-20261029.md)、[K2.5](kimi-k25-full-review-20261029.md)、[M1](minimax-m1-full-review-20261029.md)、[M2](minimax-m2-full-review-20261029.md)。
- Qwen2.5-Math-PRM、Math-RM、1M、Omni、Qwen3Guard：[PRM](qwen25-math-prm-numeric-review-20261029.md)、[RM](qwen25-math-rm-numeric-review-20261029.md)、[1M](qwen25-1m-numeric-review-20261029.md)、[Omni](qwen25-omni-numeric-review-20261029.md)、[Qwen3Guard](qwen3guard-numeric-review-20261029.md)。
- GLM 初代、ChatGLM2、DeepSeek-V2.5、V3-0324、Math-V2、GLM-5、GLM-5.1：[数字复核](glm-deepseek-numeric-review-20261029.md)。
- Kimi K2 Thinking、K2.6、K2.7 Code、K3 与 MiniMax M2.7、M3、M3.1 Flash：[数字复核](numeric-kimi-minimax-batch5-20261029.md)。
- CodeQwen1.5、Qwen3-Coder、初代 Qwen-VL、Qwen-Image-Layered、Qwen-Image-Edit、Qwen-Image-2512：[数字复核](qwen-numeric-batch6-20261029.md)。
- DeepSeek-V4 Flash、V4 Pro、V4.1 Flash、GLM-5.2、GLM-5.3、GLM-5.3-Flash、GLM-OCR：[数字复核](glm-deepseek-numeric-review-batch6-20261029.md)；GLM-5.3-Flash 基座两项数字已通过浏览器直接读取官方发布表确认。
- LLaMA 1、Llama 2、LLaVA、SAM、Stable Diffusion：[数字与评测协议复核](numeric-other-batch6-20261029.md)；当时 Stable Diffusion 页面未引用实测分数，本次核对已有评测协议；后续补充见下。
- Qwen3.5-397B、Qwen3.6-27B、Qwen3.8-27B、Qwen3.5-Omni、Qwen3.8-Omni：[指定数字复核](qwen-numeric-batch7-20261029.md)。
- Swin、DiT、VALL-E、EnCodec、Conformer：[指定数字及协议复核](numeric-vision-speech-batch7-20261029.md)。
- GLM-ASR-Nano、GLM-TTS、GLM-4.5V、GLM-4V-9B、初代 DeepSeek-VL：[指定数字及协议复核](glm-deepseek-numeric-review-batch7-20261029.md)；独立 GLM-ASR 耳语评测未注明完整检查点。
- QwQ-32B、QwQ-32B-Preview、QVQ-72B-Preview、Qwen-Image-Edit-2509、2511：[指定数字复核](qwen-numeric-batch8-20261029.md)；当时 QwQ-32B 正文没有引用具体官方基准分数；后续补充见下。
- ChatGLM 初代、GLM-Image：[指定数字复核](glm-deepseek-numeric-batch8-20261029.md)。
- Llama 3、Llama 4、Llama 3.2 Vision、Llama 3.3 70B、Llama 3.2 轻量文本：[指定数字及协议复核](numeric-other-batch8-20261029.md)。
- Qwen3、Qwen-VLA、Qwen3-Omni-Captioner、Qwen-Image-2.1、Qwen3.7-Max：[指定数字与协议复核](qwen-numeric-batch9-20261029.md)；原检查时两篇评测节没有引用具体官方定量分数；后续补充见下。
- Kimi-Audio、MiniMax-Text-01、MiniMax-VL-01：[指定数字及协议复核](kimi-minimax-numeric-batch9-20261029.md)。
- GPT-2、GPT-3、GPT-4、GPT-4o、Gemini 1.5：[指定数字及协议复核](closed-model-numeric-batch9-20261029.md)。
- Transformer、GPT 初代、InstructGPT、Claude、Llama 3.1：[指定数字及协议复核](foundation-numeric-batch10-20261029.md)。
- Qwen3／3.5／3.8-LiveTranslate、Qwen3.8-Flash-Next：[指定数字复核](qwen-numeric-batch10-20261029.md)；其中两篇官方博客使用搜索引擎收录内容。
- Wan2.1、Wan2.2、SAM 2：[指定数字与协议复核](vision-audio-numeric-batch10-20261029.md)；Wan2.2 评测节没有引用官方定量分数。
- Jev、OmniJev v1.1、GPT-5：[指定数字及协议复核](numeric-missing-batch11-20261029.md)；Jev 的示例是教学算例。
- Qwen3-Omni、Qwen3-VL、Qwen3-TTS、Qwen3-Next、Qwen2.5-Omni：[补充数字及协议复核](numeric-additional-batch11-20261029.md)。
- Qwen3.8-2.4T-A95B：[结构与评测口径补充复核](qwen38-24t-numeric-review-20261029.md)，区分开放权重与 Max 服务。
- Wan2.2：[第三方评测补充](wan22-evaluation-followup-20261029.md)，具体分数来自 AWS Neuron 而非官方模型卡。
- Qwen-Image-2.1：[提示增强与图像模型组合评测](qwen-image21-prompt-eval-followup-20261029.md)，非裸模型独立得分。
- Qwen3-Omni-Captioner：[第三方描述与问答组合评测](qwen3-omni-captioner-eureka-evaluation-20261029.md)。
- QwQ-32B：[官方后续报告基准复核](qwq32b-official-evaluation-followup-20261029.md)。
- Stable Diffusion v1-4：[第三方 BK-SDM 协议与结果复核](stable-diffusion-v14-bksdm-evaluation-20261029.md)。
