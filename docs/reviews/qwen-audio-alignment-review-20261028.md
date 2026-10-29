# Qwen2-Audio 与 Qwen3-ForcedAligner 核查

日期：2026-10-28。本次核对两篇正文的模型卡、关键结构和训练描述、文中列出的论文评测，以及所登记官方图。重点核对而非对全文逐句证明；未运行模型、训练或评测，也未重新读取此前的知乎材料。

## Qwen2-Audio

- [技术报告 v1 第 2、3 节及表 2](https://arxiv.org/html/2407.10759v1)：核对 Whisper-large-v3 初始化、Qwen-7B、8.2B 参数、16 kHz 输入、25 ms 窗和 10 ms 步长、约 40 ms 的编码输出步长，以及三阶段训练。核对 LibriSpeech、MELD、VocalSound 和 AIR-Bench 的已引用数值与口径。
- [7B 模型卡](https://huggingface.co/Qwen/Qwen2-Audio-7B)和 [7B-Instruct 模型卡](https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct)：确认前者为预训练检查点、后者为对话检查点，均标注 Apache 2.0；已将信息补入模型卡。
- 本地 `public/figures/qwen2-audio/architecture.png` 与论文 v1 Figure 2 的 PNG 逐字节相同；原图采用论文的 CC BY 4.0。已查看本地图片。
- 未核训练数据完整组成、每个参数组的冻结策略或全部评测配置；原论文也未在上述位置完整披露这些细节。

## Qwen3-ForcedAligner

- [Qwen3-ASR 技术报告 v1 第 3 节和表 9](https://arxiv.org/html/2601.21337v1)：核对音频编码器、语言骨干、80 ms 时间编号、3750 类、非自回归预测、MFA 伪标签与时间槽损失；核对人工标注 Raw 和 Raw-Noisy 的 AAS。
- [官方处理代码修订版](https://github.com/QwenLM/Qwen3-ASR/blob/9567667698f195fa807b1581de5c03184e63d2b0/qwen_asr/inference/qwen3_forced_aligner.py)：默认接口按语言切分，中文汉字逐字处理，插入两个 `<timestamp>` 槽，预测后调整非单调的时间序列。正文已区分论文描述的灵活时间槽能力与默认工具行为。
- 本地 `public/figures/qwen-asr/alignment.png` 与技术报告 v1 Figure 3 的 PNG 逐字节相同，论文采用 CC BY 4.0。教学图按报告信息流检查了音频、文字、时间槽和分类头；未逐像素核验移动端页面展示。
- 尚未独立验证所有语言的切分细节及时间后处理对具体音频的影响；没有运行推理或获得人工边界标注。
