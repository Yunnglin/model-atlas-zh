# Qwen2.5-Omni 与 Qwen3-Omni 时间对齐及训练复核

核查日期：2026-10-28。本次结合正文阅读官方技术报告和模型卡，重点核查视频音轨位置、训练阶段、语音输出及部分评测，并检查三个官方图文件；不是逐句审校全部事实，也未运行模型或复现论文评测。

## Qwen2.5-Omni

- [报告 v1 第 2.2 节](https://arxiv.org/html/2503.20215v1#S2.SS2)描述带声音的视频按实际时间每 2 秒分块，每段先排列视觉表示再排列音频表示；音频时间位置粒度为 40 ms，视频帧按真实时刻确定时间编号。正文用 1 秒与 1.6 秒的帧说明编号间隔，采用绝对时间差而不指定具体起始编号。
- 第 3 节给出固定语言模型、适配器及编码器训练、混合模态训练和长序列训练。第二阶段新增图像视频 800B、音频 300B、视频加音频 100B token；最大序列从 8192 扩到 32768。第 2.4 节确认语音码经流匹配 DiT 形成梅尔频谱，再由改造 BigVGAN 生成波形，窗口看前两块、当前块与后一块。
- 表 9 确认 SEED test-en 中 ICL 为 2.72%、RL 为 2.33%；两者是语音生成的内容一致性 WER。7B [模型卡](https://huggingface.co/Qwen/Qwen2.5-Omni-7B)标注 Apache-2.0。

## Qwen3-Omni

- [报告 v1 第 2 节](https://arxiv.org/html/2509.17765v1#S2)给出 AuT 音频时间单位约 80 ms，视频按实际时间编号对齐；文章解释 80 ms 为位置单位，非规定视频帧率。Thinker 接收多模态输入，Talker 使用文本 token／嵌入及来自 Thinker 的音视频表示生成语音码；MTP 继续生成同一帧的残差码本，Code2Wav 为因果卷积网络。
- 第 4.1–4.2 节给出 Thinker 的轻量 SFT、强到弱蒸馏与 GSPO，规则与模型两种奖励；Talker 经语音续接、高质量继续训练、DPO 和说话人微调。表 11 的 WorldSense 为 Qwen3-Omni-30B-A3B-Instruct 54.0、Qwen2.5-Omni 45.4。表 2 的 234／547 ms 与 728／1517 ms 为论文特定运行配置下分别在并发 1、4 的音频／视频理论首包数值。
- [Instruct](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct)和 [Thinking](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking)模型卡标 Apache-2.0；各自输出模块差异已在正文区分。

## 官方图片核对

从两篇论文 HTML 对应 Figure 2、Figure 3 的 PNG 地址读取文件，SHA-256 与仓库内三张图片一致：

- Qwen2.5 Figure 2：`6e73f37744949e68944e46aa6c444f9b5ed489685c376a7e584740e2c3ab90a6`。
- Qwen3 Figure 2：`d35fed0d5351a457dcada3b4cea8fd51af0f6de0785ef017f520d63972d5ca8b`。
- Qwen3 Figure 3：`30662d9abbfe7ff33b88cf90e79229312adf5a40e72cfd2554bdd098d698efe1`。

正文既有中文社区链接和过往审阅记录，本轮未重新实读知乎文章或更新互动数；社区文章不能替代对论文、模型卡和实现的核对。
