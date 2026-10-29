# Qwen-Audio 与 Qwen2-Audio 继续复核

此前本审校者曾参与两篇重点审校，本次属于继续复核，不是全新独立作者的首次审阅。未实际运行模型、训练或复现评测。

- **Qwen-Audio**：[论文 v2 第 3–4 节](https://arxiv.org/html/2311.07919v2)确认以 Whisper-large-v2 初始化约 640M 音频编码器、Qwen-7B 初始化语言模型；16 kHz、80 通道 mel 和池化后的约 40ms 时间步。多任务预训练冻结语言模型、训练音频编码器，Chat SFT 冻结音频编码器、训练语言模型。论文官方图中的火焰和雪花对应预训练阶段，正文未外推至所有阶段。补充 640M 编码器口径。
- **初代许可**：官方模型卡中指向 GitHub `LICENSE.txt` 的链接本次返回 404；但[权重仓库自身 LICENSE](https://huggingface.co/Qwen/Qwen-Audio/blob/main/LICENSE)可读取 Tongyi Qianwen 自定义许可，文本明确包含 Qwen-Audio 和 Qwen-Audio-Chat，并非 Apache 2.0。正文已提供可访问的许可入口和自定义许可说明；具体商业条件以原文为准。
- **Qwen2-Audio**：[报告 v1](https://arxiv.org/html/2407.10759v1)第 2 节确认 Whisper-large-v3 初始化、128 通道 mel、40ms、Qwen-7B 语言骨干、整体 8.2B，以及自然语言提示、SFT、DPO。两种音频交互不需要靠不同系统提示切换，输出为文字；论文 Figure 2 的预训练、SFT、DPO 是训练阶段，非推理流水线。[官方仓库](https://github.com/QwenLM/Qwen2-Audio)区分 2024-07-15 论文与 2024-08-09 权重，已补具体日期；[7B-Instruct 模型卡](https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct)标 Apache 2.0。
- **评测**：报告表 2 对照 LibriSpeech test-clean 初代/二代 2.0%/1.6% WER、二代 test-other 3.6%、MELD 0.557/0.553、VocalSound 0.9289/0.9392；Fleurs 零样本与 Common Voice 非零样本需区分。AIR-Bench 自动 GPT-4 评判以及 Gemini 的部分样本缺失均已在正文说明。仓库明确原论文分数来自原始训练框架，转换 Hugging Face 后有波动；已补充比较时的框架边界。
- 对照两张本地官方架构图的主要模块、任务标签、训练阶段及数据方向；未逐像素核验图像版权来源，未更改图片。
