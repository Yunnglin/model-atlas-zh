# Whisper 补充核查

核查日期：2026-10-28。范围是原论文模型结构、任务标记、附录表 9 和当前官方架构图；不代表逐句审阅全文，也未运行推理或重做评测。

- [原论文第 2.2 节](https://arxiv.org/html/2212.04356)使用 16 kHz 音频、80 通道 log-Mel 和 10 ms 帧移；两层卷积的第二层步长为 2。[官方音频预处理](https://github.com/openai/whisper/blob/main/whisper/audio.py)给出 30 秒、480,000 采样点和 3,000 Mel 帧。正文中的 1,500 是对应时间轴的卷积输出位置数，而非文字 token 数。
- 论文第 2.3 节说明语言、转写／翻译、无语音和时间戳标记；时间戳以当前片段为基准，按 20 ms 量化。示例将时间戳与文字片段对应，不声称提供逐字对齐。
- 论文附录表 9 给出使用 beam search 和温度回退时，large-v2 在 LibriSpeech test-clean 和 CHiME-6 的 WER 分别为 2.5% 与 24.9%。这两个数据集不同，不能解释成单纯改变噪声的受控实验。
- 本地图 `public/figures/whisper/approach.png` 与 [官方仓库原图](https://github.com/openai/whisper/blob/main/approach.png)的 SHA-256 均为 `2b25fb2ed94da7273e10db82f1b7383b38d1b3ee1cc09037c87ec95448de3525`；本轮查看图像并对照结构。代码仓库标注 MIT，图示资产记录见 [assets.md](../assets.md)。
- 现有知乎文章链接保留，本轮没有重新读取其内容与互动量，也未验证所有模型版本和所有论文数字。
