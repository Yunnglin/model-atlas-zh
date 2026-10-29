# 开放模型的代表性来源复核

核对日期：2026-10-28。本次只检查下表列出的具体主张，未逐句复核正文、运行模型或复现评测；数据与模型服务可能更新。

| 模型                                                           | 本次检查的主张及来源                                                                                                                                                                                                                           |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GLM-OCR](../../src/content/docs/omni/glm-ocr-model.md)        | [技术报告](https://arxiv.org/html/2603.10910)报告 MTP 的十个预测 token、每步平均 5.2 个及特定实现下约 50% 吞吐提升；表 4 的 94.62 综合分、0.040 文本编辑距离和 93.96 表格 TEDS 是不同指标。                                                    |
| [GLM-ASR-Nano](../../src/content/docs/audio/glm-asr-model.md)  | [模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)列出官方平均错误率 4.10；这一数字受数据集和处理口径约束。                                                                                                                            |
| [Qwen3Guard](../../src/content/docs/nlp/qwen3guard-model.md)   | [报告](https://arxiv.org/html/2510.14276)描述超过 119 万条含人工和合成的训练样本与三种风险级别；[评测说明](https://github.com/QwenLM/Qwen3Guard/blob/main/eval/README.md)的含推理回复检测中，Stream-4B 在首 128 个 token 内命中比例为 66.78%。 |
| [QwQ-32B](../../src/content/docs/nlp/qwq-model.md)             | [模型卡](https://huggingface.co/Qwen/QwQ-32B)列出 32.5B、64 层、40 个查询头与 8 个 KV 头，完整上下文 131,072 token；提示超过 8,192 token 时明确要求启用 YaRN，已调整模型卡表述。                                                               |
| [Kimi Linear](../../src/content/docs/nlp/kimi-linear-model.md) | [论文](https://arxiv.org/html/2510.26692)的 1.4T 对照表列出 Kimi Linear MMLU 73.8、MLA 71.6；5.7T Instruct 的 RULER 1M 为 94.8，不能混同不同训练预算。                                                                                         |
| [Qwen-Image](../../src/content/docs/cv/qwen-image.md)          | [报告](https://arxiv.org/html/2508.02324)说明 Qwen2.5-VL 是冻结的多模态条件编码器，并冻结 VAE 编码器、微调图像解码器；已补足文生图与编辑输入的区分。报告表 4 的 Qwen-Image／RL GenEval 为 0.87／0.91，不能混成同一权重成绩。                   |
| [F5-TTS](../../src/content/docs/audio/f5-tts.md)               | [论文](https://arxiv.org/html/2410.06885)表 1 的 16／32 NFE RTF 为 0.15／0.31，附录求解器表对应 Euler，16 NFE midpoint 为 0.26；均为论文的 RTX 3090、10 秒语音设定。                                                                           |
| [Kimi-VL](../../src/content/docs/omni/kimi-vl-model.md)        | [技术报告](https://arxiv.org/html/2504.07491)说明语言骨干从已训练 5.2T 纯文本 token 的检查点开始，随后使用 2.3T 多模态与文本联合训练；InfoVQA 的 83.2 受模型版本与评测协议约束。                                                               |
