# Qwen2.5-Omni 与 Qwen3-Omni 审校

本轮对两篇已有文章逐项核对相关结构、训练阶段、模态、评测条件、许可和引用图的关键构件；此前曾参与两篇重点审校，故本记录是进一步复核，不将其冒称全新独立作者首次审阅。未运行模型或复现论文评测。

- **Qwen2.5 结构**：[技术报告 v1](https://arxiv.org/html/2503.20215v1)第 2–3 节：文本、图像、音频、视频输入，Thinker 输出文本，Talker 输出语音码；音频编码器从 Whisper-large-v3 初始化并非运行完整 Whisper 接口。对照官方 Figure 2 图片，编码器、Thinker、Talker 和 Streaming Codec Decoder 的顺序与文章一致。论文第 2.4 节表明流匹配 DiT 先生成梅尔频谱、改造 BigVGAN 再生成波形；正文原来概括成声学解码链，本次补明两者角色。DiT 当前块另看前两块和后一块，与正文一致。
- **Qwen2.5 训练评测**：第 3 节先固定 LLM，分别训练适配器后训练编码器，再解冻混合训练和长序列训练；第 4.2 节核对 Talker 的分阶段训练。表 9 为 SEED test-en 的 ICL 2.72%、RL 2.33%，属于语音生成测试，不是视觉理解成绩。
- **Qwen3 结构与参数**：[技术报告 v1](https://arxiv.org/html/2509.17765v1)第 2 节及表 1：Thinker 30B-A3B，Talker 为单独的 3B-A0.3B；文章原来只说系列总参数与激活数，易让人误以为 30B 包含 Talker，已明确这是 Thinker 口径。官方 Figure 2 图中层级与视觉/AuT、Thinker、Talker、MTP 和 Streaming Codec Decoder 解释相符；MTP 预测剩余码本使用固定步数自回归，已补充这个串行细节，避免误解为一次并行生成。
- **Qwen3 训练与评测**：第 2.2 节核对 AuT 编码器约 0.6B、1–8 秒注意力查询窗口及 80/10/10 数据比例，比例只属 AuT 训练。第 3 节核对独立先训适配器再训编码器；表 11 的 WorldSense 为 30B-A3B-Instruct 54.0、Qwen2.5-Omni 45.4，属于音视频输入到文本评测。理论首包数据不能代替端到端部署实测。Thinking 仅 Thinker；Instruct 含 Talker。
- **许可**：[Qwen2.5-Omni-7B](https://huggingface.co/Qwen/Qwen2.5-Omni-7B)、[Qwen3-Omni-30B-A3B-Instruct](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct) 和 [Thinking](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking) 官方模型卡均标 Apache 2.0，已在相应模型卡列明并加直接链接；不将其自动推广到后续或其他型号。
- 官方图只做关键路径和图文对应检查，未逐像素核验来源文件，也未变更或重新授权图片。
