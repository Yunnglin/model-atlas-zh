# 时间线模型内容与审校覆盖盘点

核对日期：2026-10-27。本表按当时的 `model-timeline.yaml` 逐项盘点首页 96 个节点，只反映记录是否存在，不代表已经完成全部事实、图片或社区来源的逐句终审。

- **正文**：链接至节点使用的独立 Markdown。内容单测检查节点间文章不重复、首个章节为模型卡；更新后的字数检查排除了标题、表格和独立参考链接，要求正文至少 2000 个汉字。字数和模型卡标题不证明讲解质量或每项参数正确。
- **配图**：数字为 `model-guides.yaml` 注册的图片数量；本次同时检查图注册记录和本地资源路径存在。它不证明图片结构、版本适配、许可或渲染已逐项确认。
- **登记来源**：数字为该正文元数据中的来源数，本次检查每个标识在 `sources.yaml` 中存在；登记类型为论文、官方代码或官方文档的集合，不自动证明论文作者就是模型方、链接可访问或每个陈述都获得支持。可见参考和登记来源的一致性另由单元测试检查。
- **审校记录**：标记“专项”仅表示相应记录明确列出该文章做过定向核查，检查点与限制见各记录；“通读”表示该文件曾作为独立入口列于历史通读记录，记录可能早于当前正文；“待补充明确记录”表示本表未找到符合以上标准的条目，不能反推未审过。其他家族或社区材料不自动算成该版本的专项复核。
- 表中不以社区文章存在、互动数或全文长度代替原论文核验，也不以内容检查代替训练、推理和评测实测。社区阅读范围见 [知乎筛选](zhihu-reading.md)及其引用的专题记录。

| 模型／版本          | 独立正文                                                       | 配图数 | 登记来源数 | 可追溯审校记录                       |
| ------------------- | -------------------------------------------------------------- | -----: | ---------: | ------------------------------------ |
| Transformer         | [正文](../../src/content/docs/foundations/transformer.md)      |      1 |          1 | [专项](foundation-audit.md)          |
| BERT                | [正文](../../src/content/docs/nlp/bert.md)                     |      1 |          1 | [专项](foundation-audit.md)          |
| GPT-2               | [正文](../../src/content/docs/nlp/gpt.md)                      |      1 |          5 | [专项](foundation-audit.md)          |
| T5                  | [正文](../../src/content/docs/nlp/t5.md)                       |      1 |          1 | [专项](foundation-audit.md)          |
| Conformer           | [正文](../../src/content/docs/audio/conformer.md)              |      1 |          1 | [专项](speech-followup.md)           |
| ViT                 | [正文](../../src/content/docs/cv/vit.md)                       |      1 |          1 | [专项](vision-followup.md)           |
| wav2vec 2.0         | [正文](../../src/content/docs/audio/wav2vec2.md)               |      1 |          1 | [专项](legacy-audio-vision-audit.md) |
| CLIP                | [正文](../../src/content/docs/cv/clip.md)                      |      1 |          1 | [专项](legacy-audio-vision-audit.md) |
| GLM                 | [正文](../../src/content/docs/nlp/glm-original-model.md)       |      1 |          1 | [专项](glm-remaining-audit.md)       |
| HuBERT              | [正文](../../src/content/docs/audio/hubert.md)                 |      1 |          1 | [专项](speech-followup.md)           |
| Swin                | [正文](../../src/content/docs/cv/swin.md)                      |      1 |          1 | [专项](vision-followup.md)           |
| DiT                 | [正文](../../src/content/docs/cv/dit.md)                       |      1 |          1 | [专项](legacy-audio-vision-audit.md) |
| EnCodec             | [正文](../../src/content/docs/audio/encodec.md)                |      1 |          1 | [专项](legacy-audio-vision-audit.md) |
| Stable Diffusion    | [正文](../../src/content/docs/cv/stable-diffusion.md)          |      1 |          2 | [专项](legacy-audio-vision-audit.md) |
| Whisper             | [正文](../../src/content/docs/audio/whisper.md)                |      1 |          2 | [专项](speech-followup.md)           |
| ChatGLM             | [正文](../../src/content/docs/nlp/chatglm.md)                  |      1 |          4 | [专项](foundation-audit.md)          |
| Claude              | [正文](../../src/content/docs/nlp/claude.md)                   |      1 |          2 | [专项](closed-model-audit.md)        |
| LLaVA               | [正文](../../src/content/docs/omni/llava.md)                   |      1 |          1 | [专项](vision-followup.md)           |
| Qwen                | [正文](../../src/content/docs/nlp/qwen1-model.md)              |      1 |          2 | [专项](qwen-text-audit.md)           |
| Qwen-Audio          | [正文](../../src/content/docs/audio/qwen-audio-model.md)       |      1 |          2 | [专项](qwen-audio-omni-audit.md)     |
| Qwen-VL             | [正文](../../src/content/docs/omni/qwen-vl-first-model.md)     |      1 |          2 | [专项](qwen-vision-audit.md)         |
| SAM                 | [正文](../../src/content/docs/cv/sam.md)                       |      1 |          2 | [专项](vision-followup.md)           |
| VALL-E              | [正文](../../src/content/docs/audio/vall-e.md)                 |      1 |          2 | [专项](legacy-audio-vision-audit.md) |
| CodeQwen1.5         | [正文](../../src/content/docs/nlp/codeqwen15-model.md)         |      1 |          2 | [专项](qwen-code-audit.md)           |
| DeepSeek-V3         | [正文](../../src/content/docs/nlp/deepseek-v3.md)              |      1 |          1 | [专项](deepseek-core-audit.md)       |
| F5-TTS              | [正文](../../src/content/docs/audio/f5-tts.md)                 |      1 |          3 | [专项](legacy-audio-vision-audit.md) |
| Gemini 1.5          | [正文](../../src/content/docs/omni/gemini.md)                  |      1 |          1 | [专项](closed-model-audit.md)        |
| GLM-V               | [正文](../../src/content/docs/omni/glm-v-model.md)             |      1 |          4 | [专项](omni-followup.md)             |
| GPT-4o              | [正文](../../src/content/docs/omni/gpt4o.md)                   |      1 |          1 | [专项](closed-model-audit.md)        |
| Llama 3.1           | [正文](../../src/content/docs/nlp/llama.md)                    |      1 |          2 | [专项](foundation-audit.md)          |
| Qwen1.5             | [正文](../../src/content/docs/nlp/qwen15-model.md)             |      1 |          2 | [专项](qwen-text-audit.md)           |
| Qwen2               | [正文](../../src/content/docs/nlp/qwen2-model.md)              |      1 |          2 | [专项](qwen-text-audit.md)           |
| Qwen2-Audio         | [正文](../../src/content/docs/audio/qwen2-audio-model.md)      |      1 |          2 | [专项](qwen-audio-omni-audit.md)     |
| Qwen2-VL            | [正文](../../src/content/docs/omni/qwen2-vl-model.md)          |      1 |          2 | [专项](qwen-vision-audit.md)         |
| Qwen2.5             | [正文](../../src/content/docs/nlp/qwen25-model.md)             |      1 |          3 | [专项](qwen-text-audit.md)           |
| Qwen2.5-Coder       | [正文](../../src/content/docs/nlp/qwen25-coder-model.md)       |      1 |          2 | [专项](qwen-code-audit.md)           |
| Qwen2.5-Math        | [正文](../../src/content/docs/nlp/qwen25-math-model.md)        |      1 |          3 | [专项](remaining-models-audit.md)    |
| DeepSeek-R1         | [正文](../../src/content/docs/nlp/deepseek-r1.md)              |      1 |          3 | [专项](deepseek-core-audit.md)       |
| GLM-4.5             | [正文](../../src/content/docs/nlp/glm45-model.md)              |      1 |          3 | [专项](glm-core-audit.md)            |
| GLM-4.6             | [正文](../../src/content/docs/nlp/glm46-model.md)              |      1 |          3 | [专项](glm-core-audit.md)            |
| GLM-4.7             | [正文](../../src/content/docs/nlp/glm47-model.md)              |      1 |          3 | [专项](glm-core-audit.md)            |
| GLM-ASR             | [正文](../../src/content/docs/audio/glm-asr-model.md)          |      1 |          2 | [专项](glm-remaining-audit.md)       |
| Kimi K1.5           | [正文](../../src/content/docs/nlp/kimi.md)                     |      1 |          9 | [专项](kimi-core-audit.md)           |
| Kimi K2 与 Thinking | [正文](../../src/content/docs/nlp/kimi-k2.md)                  |      1 |          2 | [专项](kimi-core-audit.md)           |
| Kimi Linear         | [正文](../../src/content/docs/nlp/kimi-linear-model.md)        |      1 |          2 | [专项](remaining-models-audit.md)    |
| Kimi-Audio          | [正文](../../src/content/docs/audio/kimi-audio-model.md)       |      1 |          2 | [专项](remaining-models-audit.md)    |
| Kimi-VL             | [正文](../../src/content/docs/omni/kimi-vl-model.md)           |      1 |          2 | [专项](remaining-models-audit.md)    |
| Qwen-Image          | [正文](../../src/content/docs/cv/qwen-image.md)                |      1 |          2 | [专项](qwen-last-audit.md)           |
| Qwen2.5-Omni        | [正文](../../src/content/docs/omni/qwen-omni.md)               |      1 |          2 | [专项](qwen-audio-omni-audit.md)     |
| Qwen2.5-VL          | [正文](../../src/content/docs/omni/qwen-vl.md)                 |      1 |          3 | [专项](qwen-vision-audit.md)         |
| Qwen3               | [正文](../../src/content/docs/nlp/qwen3.md)                    |      1 |          2 | [专项](qwen-text-audit.md)           |
| Qwen3 Embedding     | [正文](../../src/content/docs/nlp/qwen3-embedding-model.md)    |      1 |          4 | [专项](remaining-models-audit.md)    |
| Qwen3-Coder         | [正文](../../src/content/docs/nlp/qwen3-coder-model.md)        |      1 |          3 | [专项](qwen-code-audit.md)           |
| Qwen3-Next          | [正文](../../src/content/docs/nlp/qwen-next.md)                |      1 |          3 | [专项](qwen-last-audit.md)           |
| Qwen3-Omni          | [正文](../../src/content/docs/omni/qwen3-omni.md)              |      2 |          3 | [专项](qwen-audio-omni-audit.md)     |
| Qwen3-VL            | [正文](../../src/content/docs/omni/qwen3-vl.md)                |      1 |          2 | [专项](qwen-vision-audit.md)         |
| Qwen3Guard          | [正文](../../src/content/docs/nlp/qwen3guard-model.md)         |      1 |          2 | [专项](omni-followup.md)             |
| QwQ-32B             | [正文](../../src/content/docs/nlp/qwq-model.md)                |      1 |          2 | [专项](remaining-models-audit.md)    |
| GLM-5               | [正文](../../src/content/docs/nlp/glm5-model.md)               |      1 |          3 | [专项](glm-core-audit.md)            |
| GLM-5.2             | [正文](../../src/content/docs/nlp/glm52-model.md)              |      1 |          2 | [专项](glm-core-audit.md)            |
| GLM-5.3             | [正文](../../src/content/docs/nlp/glm53-model.md)              |      1 |          4 | [专项](glm-core-audit.md)            |
| GLM-5.3-Flash       | [正文](../../src/content/docs/nlp/glm53-flash-model.md)        |      1 |          1 | [专项](glm-core-audit.md)            |
| GLM-OCR             | [正文](../../src/content/docs/omni/glm-ocr-model.md)           |      1 |          1 | [专项](glm-remaining-audit.md)       |
| Jev                 | [正文](../../src/content/docs/nlp/jev.md)                      |      1 |          2 | [专项](closed-model-audit.md)        |
| Kimi K2.5           | [正文](../../src/content/docs/omni/kimi-k25-model.md)          |      1 |          2 | [专项](kimi-core-audit.md)           |
| Kimi K2.6           | [正文](../../src/content/docs/omni/kimi-k26-model.md)          |      1 |          3 | [专项](kimi-core-audit.md)           |
| Kimi K2.7 Code      | [正文](../../src/content/docs/omni/kimi-k27-model.md)          |      1 |          1 | [专项](kimi-core-audit.md)           |
| Kimi K3             | [正文](../../src/content/docs/nlp/kimi-k3.md)                  |      1 |          3 | [专项](kimi-core-audit.md)           |
| OmniJev             | [正文](../../src/content/docs/omni/omnijev.md)                 |      1 |          1 | [专项](closed-model-audit.md)        |
| Qwen3-ASR           | [正文](../../src/content/docs/audio/qwen-asr.md)               |      2 |          4 | [专项](qwen-audio-omni-audit.md)     |
| Qwen3-Coder-Next    | [正文](../../src/content/docs/nlp/qwen3-coder-next-model.md)   |      1 |          3 | [专项](qwen-code-audit.md)           |
| Qwen3-TTS           | [正文](../../src/content/docs/audio/qwen-tts.md)               |      2 |          3 | [专项](qwen-audio-omni-audit.md)     |
| Qwen3.5             | [正文](../../src/content/docs/omni/qwen35-model.md)            |      1 |          2 | [专项](qwen-remaining-audit.md)      |
| Qwen3.6             | [正文](../../src/content/docs/omni/qwen36-model.md)            |      1 |          2 | [专项](qwen-remaining-audit.md)      |
| Qwen3.7             | [正文](../../src/content/docs/nlp/qwen37-model.md)             |      1 |          1 | [专项](qwen-remaining-audit.md)      |
| Qwen3.8             | [正文](../../src/content/docs/omni/qwen38.md)                  |      1 |          5 | [专项](qwen-last-audit.md)           |
| GLM-5.1             | [正文](../../src/content/docs/nlp/glm51-model.md)              |      1 |          3 | [专项](glm-core-audit.md)            |
| DeepSeek LLM        | [正文](../../src/content/docs/nlp/deepseek-llm-model.md)       |      1 |          1 | [专项](deepseek-remaining-audit.md)  |
| DeepSeek-Coder      | [正文](../../src/content/docs/nlp/deepseek-coder-model.md)     |      1 |          1 | [专项](deepseek-special-audit.md)    |
| DeepSeekMath        | [正文](../../src/content/docs/nlp/deepseek-math-model.md)      |      1 |          1 | [专项](deepseek-special-audit.md)    |
| Janus-Pro           | [正文](../../src/content/docs/omni/janus-pro-model.md)         |      1 |          2 | [专项](deepseek-special-audit.md)    |
| DeepSeekMath-V2     | [正文](../../src/content/docs/nlp/deepseek-math-v2-model.md)   |      1 |          1 | [专项](deepseek-special-audit.md)    |
| DeepSeek-V2         | [正文](../../src/content/docs/nlp/deepseek-v2-model.md)        |      1 |          2 | [专项](deepseek-core-audit.md)       |
| DeepSeek-Coder-V2   | [正文](../../src/content/docs/nlp/deepseek-coder-v2-model.md)  |      1 |          1 | [专项](deepseek-special-audit.md)    |
| DeepSeek-VL2        | [正文](../../src/content/docs/omni/deepseek-vl2-model.md)      |      1 |          1 | [专项](deepseek-special-audit.md)    |
| DeepSeek-V3.1       | [正文](../../src/content/docs/nlp/deepseek-v31-model.md)       |      1 |          2 | [专项](deepseek-core-audit.md)       |
| DeepSeek-V3.2       | [正文](../../src/content/docs/nlp/deepseek-v32-model.md)       |      1 |          2 | [专项](deepseek-core-audit.md)       |
| DeepSeek-V4-Flash   | [正文](../../src/content/docs/nlp/deepseek-v4-flash-model.md)  |      1 |          3 | [专项](deepseek-remaining-audit.md)  |
| DeepSeek-V4-Pro     | [正文](../../src/content/docs/nlp/deepseek-v4-pro-model.md)    |      1 |          3 | [专项](deepseek-remaining-audit.md)  |
| DeepSeek-V4.1-Flash | [正文](../../src/content/docs/nlp/deepseek-v41-flash-model.md) |      1 |          2 | [专项](deepseek-remaining-audit.md)  |
| MiniMax-M2          | [正文](../../src/content/docs/nlp/minimax-m2-model.md)         |      1 |          3 | [专项](minimax-core-audit.md)        |
| MiniMax-M2.1        | [正文](../../src/content/docs/nlp/minimax-m21-model.md)        |      1 |          3 | [专项](quality-followup.md)          |
| MiniMax-M2.5        | [正文](../../src/content/docs/nlp/minimax-m25-model.md)        |      1 |          3 | [专项](minimax-core-audit.md)        |
| MiniMax-M2.7        | [正文](../../src/content/docs/nlp/minimax-m27-model.md)        |      1 |          2 | [专项](minimax-core-audit.md)        |
| MiniMax-M3          | [正文](../../src/content/docs/omni/minimax-m3-model.md)        |      1 |          1 | [专项](minimax-core-audit.md)        |
| MiniMax-M3.1 Flash  | [正文](../../src/content/docs/omni/minimax-m31-flash-model.md) |      1 |          1 | [专项](minimax-core-audit.md)        |

## 2026-10-28 新增条目补充盘点

在原 96 条历史盘点之外，依据当前时间线补充以下 17 条。配图和来源数字只表示注册数量；“待补充”表示此处尚未关联逐篇记录，不代表文章没有被检查。已有定向记录也不等于完整终审。

| 模型／版本            | 独立正文                                                           | 配图数 | 登记来源数 | 可追溯审校记录                                    |
| --------------------- | ------------------------------------------------------------------ | -----: | ---------: | ------------------------------------------------- |
| Qwen2-Math            | [正文](../../src/content/docs/nlp/qwen2-math-model.md)             |      1 |          3 | [定向记录](math-kimi-thinking-followup.md)        |
| Kimi K2 Thinking      | [正文](../../src/content/docs/nlp/kimi-k2-thinking.md)             |      1 |          2 | [定向记录](math-kimi-thinking-followup.md)        |
| Qwen-Image-Edit       | [正文](../../src/content/docs/cv/qwen-image-edit-model.md)         |      1 |          4 | [定向记录](qwen-image-two-audit.md)               |
| Qwen-Image-Layered    | [正文](../../src/content/docs/cv/qwen-image-layered-model.md)      |      1 |          3 | [定向记录](qwen-image-two-audit.md)               |
| Qwen-VLA              | [正文](../../src/content/docs/omni/qwen-vla-model.md)              |      1 |          2 | [定向记录](qwen-vla-vlembedding-audit.md)         |
| Qwen3-LiveTranslate   | [正文](../../src/content/docs/audio/qwen3-livetranslate-model.md)  |      1 |          1 | [定向记录](qwen-livetranslate-early-audit.md)     |
| Qwen3.5-LiveTranslate | [正文](../../src/content/docs/audio/qwen35-livetranslate-model.md) |      1 |          1 | [定向记录](qwen-livetranslate-early-audit.md)     |
| Qwen-Image-2.1        | [正文](../../src/content/docs/cv/qwen-image21-model.md)            |      1 |          2 | [定向记录](qwen-image21-final-audit.md)           |
| Qwen3.8-LiveTranslate | [正文](../../src/content/docs/audio/qwen38-livetranslate-model.md) |      1 |          1 | [定向记录](qwen38-flash-live-final-audit.md)      |
| Qwen3.8-Flash-Next    | [正文](../../src/content/docs/omni/qwen38-flash-next-model.md)     |      1 |          2 | [定向记录](qwen38-flash-live-final-audit.md)      |
| Qwen3-VL-Embedding    | [正文](../../src/content/docs/omni/qwen3-vl-embedding-model.md)    |      1 |          3 | [定向记录](qwen-vla-vlembedding-audit.md)         |
| Qwen3.5-Omni          | [正文](../../src/content/docs/omni/qwen35-omni-model.md)           |      2 |          1 | [定向记录](omni35-38-final-audit.md)              |
| Qwen3.8-Omni-Flash    | [正文](../../src/content/docs/omni/qwen38-omni-model.md)           |      3 |          1 | [定向记录](omni35-38-final-audit.md)              |
| Qwen3-Reranker        | [正文](../../src/content/docs/nlp/qwen3-reranker-model.md)         |      1 |          3 | [定向记录](training-further-review.md)            |
| Qwen3-VL-Reranker     | [正文](../../src/content/docs/omni/qwen3-vl-reranker-model.md)     |      1 |          3 | [定向记录](qwen3-vl-reranker-community.md)        |
| Qwen3-ForcedAligner   | [正文](../../src/content/docs/audio/qwen3-forcedaligner-model.md)  |      2 |          3 | [定向记录](training-further-review.md)            |
| Qwen2.5-1M            | [正文](../../src/content/docs/nlp/qwen25-1m-model.md)              |      1 |          3 | [定向记录](long-context-audio-training-review.md) |

## 本轮新增模型

| 模型／版本       | 独立正文                                                     | 配图数 | 登记来源数 | 可追溯审校记录                              |
| ---------------- | ------------------------------------------------------------ | -----: | ---------: | ------------------------------------------- |
| DeepSeek-R1-0528 | [正文](../../src/content/docs/nlp/deepseek-r1-0528-model.md) |      1 |          3 | [定向记录](new-models-20261028-followup.md) |
| Qwen2.5-Math-PRM | [正文](../../src/content/docs/nlp/qwen25-math-prm-model.md)  |      1 |          3 | [定向记录](new-models-20261028-followup.md) |
| GLM-Image        | [正文](../../src/content/docs/cv/glm-image-model.md)         |      1 |          3 | [定向记录](new-models-20261028-followup.md) |

## 后续新增模型

| 模型／版本       | 独立正文                                                     | 配图数 | 登记来源数 | 审校记录                              |
| ---------------- | ------------------------------------------------------------ | -----: | ---------: | ------------------------------------- |
| DeepSeek-V3-0324 | [正文](../../src/content/docs/nlp/deepseek-v3-0324-model.md) |      1 |          2 | [定向记录](deepseek-v3-0324-audit.md) |

## 本轮新增模型

| 模型／版本          | 独立正文                                                     | 配图数 | 登记来源数 | 可追溯审校记录                                  |
| ------------------- | ------------------------------------------------------------ | -----: | ---------: | ----------------------------------------------- |
| Qwen2.5-Math-RM-72B | [正文](../../src/content/docs/nlp/qwen25-math-rm-model.md)   |      1 |          3 | [定向记录](qwen-math-rm-community-logged-in.md) |
| QVQ-72B-Preview     | [正文](../../src/content/docs/omni/qvq-72b-preview-model.md) |      1 |          3 | [定向记录](four-models-20261028.md)             |
| DeepSeek-V2.5       | [正文](../../src/content/docs/nlp/deepseek-v25-model.md)     |      1 |          2 | [定向记录](deepseek-new-community-logged-in.md) |
| GLM-TTS             | [正文](../../src/content/docs/audio/glm-tts-model.md)        |      1 |          3 | [定向记录](four-models-20261028.md)             |

## 补充主线与视频生成模型

| 模型／版本 | 独立正文                                          | 配图数 | 登记来源数 | 审校记录                     |
| ---------- | ------------------------------------------------- | -----: | ---------: | ---------------------------- |
| GPT-3      | [正文](../../src/content/docs/nlp/gpt3-model.md)  |      1 |          1 | [核查](gpt3-independent.md)  |
| GPT-4      | [正文](../../src/content/docs/omni/gpt4-model.md) |      1 |          1 | [核查](gpt4-model-audit.md)  |
| Wan2.1     | [正文](../../src/content/docs/cv/wan21-model.md)  |      1 |          1 | [核查](wan21-independent.md) |

## 补充视频与 GPT 初代

| 模型／版本 | 独立正文                                         | 配图数 | 登记来源数 | 审校记录                     |
| ---------- | ------------------------------------------------ | -----: | ---------: | ---------------------------- |
| GPT 初代   | [正文](../../src/content/docs/nlp/gpt1-model.md) |      1 |          1 | [核查](gpt1-independent.md)  |
| SAM 2      | [正文](../../src/content/docs/cv/sam2-model.md)  |      1 |          1 | [核查](sam2-independent.md)  |
| Wan2.2     | [正文](../../src/content/docs/cv/wan22-model.md) |      1 |          1 | [核查](wan22-independent.md) |

## GPT-5 与 QwQ 预览版

| 模型／版本      | 独立正文                                                | 配图数 | 登记来源数 | 审校记录                           |
| --------------- | ------------------------------------------------------- | -----: | ---------: | ---------------------------------- |
| GPT-5           | [正文](../../src/content/docs/omni/gpt5-model.md)       |      1 |          1 | [核查](gpt5-independent.md)        |
| QwQ-32B-Preview | [正文](../../src/content/docs/nlp/qwq-preview-model.md) |      1 |          1 | [核查](qwq-preview-independent.md) |

## Qwen 图像生成与编辑更新

| 模型／版本           | 独立正文                                                        | 配图数 | 登记来源数 | 审校记录                                    |
| -------------------- | --------------------------------------------------------------- | -----: | ---------: | ------------------------------------------- |
| Qwen-Image-2512      | [正文](../../src/content/docs/cv/qwen-image-2512-model.md)      |      1 |          1 | [核查](qwen-image-2512-independent.md)      |
| Qwen-Image-Edit-2511 | [正文](../../src/content/docs/cv/qwen-image-edit-2511-model.md) |      1 |          1 | [核查](qwen-image-edit-2511-independent.md) |

## Qwen 图像编辑 2509

| 模型／版本           | 独立正文                                                        | 配图数 | 登记来源数 | 审校记录                                    |
| -------------------- | --------------------------------------------------------------- | -----: | ---------: | ------------------------------------------- |
| Qwen-Image-Edit-2509 | [正文](../../src/content/docs/cv/qwen-image-edit-2509-model.md) |      1 |          1 | [核查](qwen-image-edit-2509-independent.md) |

## LLaMA 初代与 Llama 2

| 模型／版本 | 独立正文                                           | 配图数 | 登记来源数 | 审校记录                      |
| ---------- | -------------------------------------------------- | -----: | ---------: | ----------------------------- |
| LLaMA 初代 | [正文](../../src/content/docs/nlp/llama1-model.md) |      1 |          1 | [核查](llama1-independent.md) |
| Llama 2    | [正文](../../src/content/docs/nlp/llama2-model.md) |      1 |          1 | [核查](llama2-independent.md) |

## Llama 3 与 Llama 4

| 模型／版本 | 独立正文                                            | 配图数 | 登记来源数 | 审校记录                      |
| ---------- | --------------------------------------------------- | -----: | ---------: | ----------------------------- |
| Llama 3    | [正文](../../src/content/docs/nlp/llama3-model.md)  |      1 |          1 | [核查](llama3-independent.md) |
| Llama 4    | [正文](../../src/content/docs/omni/llama4-model.md) |      1 |          1 | [核查](llama4-independent.md) |

## Llama 3.2 Vision 与 3.3

| 模型／版本       | 独立正文                                                    | 配图数 | 登记来源数 | 审校记录                              |
| ---------------- | ----------------------------------------------------------- | -----: | ---------: | ------------------------------------- |
| Llama 3.2 Vision | [正文](../../src/content/docs/omni/llama32-vision-model.md) |      1 |          1 | [核查](llama32-vision-independent.md) |
| Llama 3.3        | [正文](../../src/content/docs/nlp/llama33-model.md)         |      1 |          1 | [核查](llama33-independent.md)        |

## InstructGPT 与 Llama 3.2 文本版

| 模型／版本       | 独立正文                                                 | 配图数 | 登记来源数 | 审校记录                            |
| ---------------- | -------------------------------------------------------- | -----: | ---------: | ----------------------------------- |
| InstructGPT      | [正文](../../src/content/docs/nlp/instructgpt-model.md)  |      1 |          1 | [核查](instructgpt-independent.md)  |
| Llama 3.2 文本版 | [正文](../../src/content/docs/nlp/llama32-text-model.md) |      1 |          1 | [核查](llama32-text-independent.md) |

## 维护方法

模型版本或文件变化时，重新对照 `model-timeline.yaml`、`model-guides.yaml`、`figures.yaml`、`sources.yaml` 与各正文元数据更新本表，并运行 `pnpm test` 和构建检查。新增“专项”前须在对应审校记录中写清模型版本、实际核查项、来源与未完成范围；不要把一次结构检查记为内容事实验证。

当前发现的元数据或文件缺失：本次静态盘点未发现。这不表示所有来源可用、内容正确或许可已逐一复核。
