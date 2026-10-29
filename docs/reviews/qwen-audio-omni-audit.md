# Qwen 音频与 Omni 重点审校

核对日期：2026-10-27。本轮阅读 Qwen-Audio、Qwen2-Audio、Qwen3-ASR、Qwen3-TTS、Qwen2.5-Omni 和 Qwen3-Omni 文章，对照论文核查模型结构、训练阶段、指标及配图的文字解释；这是重点核查，不代表所有陈述、图像每个细节已逐句或逐像素核验，也未运行模型、训练或评测。

- **Qwen-Audio**：对照[论文](https://arxiv.org/html/2311.07919v2)核对 Whisper-large-v2 编码器初始化、40ms 输出时间步与分阶段冻结策略；补充[后代报告表 2](https://arxiv.org/html/2407.10759v1)同英语测试集的 WER，注明数据集与协议的边界。
- **Qwen2-Audio**：对照[报告](https://arxiv.org/html/2407.10759v1)核对 8.2B 总参数、large-v3 编码器和预训练／SFT／DPO；补充 AIR-Bench 的 GPT-4 裁判、Gemini 未返回部分样本，以及 Fleurs 与 Common Voice 零样本设置差异。
- **Qwen3-ASR**：对照[报告](https://arxiv.org/html/2601.21337)核对 12.5Hz、1.7B 的 300M 编码器、对齐器槽位和 GSPO；补充 Fleurs 30 语言集合按语言选 CER 或 WER 后的宏平均结果，以及 2 秒分块等流式评测条件。
- **Qwen3-TTS**：对照[报告](https://arxiv.org/html/2601.15621)核对 12.5Hz、多码本、25Hz 路线及后训练；补充 SEED test-en 在不同型号的 WER，以及长语音内部测试使用识别器回读的限制。
- **Qwen2.5-Omni**：对照[报告](https://arxiv.org/html/2503.20215v1)核对 Thinker／Talker、TMRoPE 和语音输出训练；补充 SEED test-en 的 WER 作为语音输出评测示例，不当作多模态理解指标。
- **Qwen3-Omni**：对照[报告](https://arxiv.org/html/2509.17765v1)核对 Thinker／Talker、AuT 和适配器先后训练；补充 AuT 约 0.6B、注意力窗口及其音频数据配比，明确该配比不代表整体系统数据。

六篇引用统一注册的官方图，核对其标题与正文的阶段边界；未修改图片，也未对图像各像素逐项核验。相关知乎参考见 [Qwen 深读记录](../qwen-depth.md)和[知乎筛选记录](zhihu-reading.md)；本轮未重新检索六篇的知乎正文及其动态互动量。
