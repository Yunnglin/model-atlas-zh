# Qwen-Audio 初代全维度审阅

审阅日期：2026-10-29。时间线 ID `qwen-audio`，正文为 `src/content/docs/audio/qwen-audio-model.md`。通读正文并对照论文 v2、官方仓库、模型许可、配图和已有知乎实读记录；未运行模型或复现评测。

## 结构与模型卡

- [论文第 3.1 节](https://arxiv.org/html/2311.07919v2)：Whisper-large-v2 初始化的 32 层音频编码器 640M，Qwen-7B 初始化的 32 层语言模型为 7.7B、隐藏维度 4096。本次明确 7.7B 是语言底座参数，音频编码器另计，不把它当成全系统总参数。
- 16 kHz、80 通道梅尔频谱、10 ms 步幅，经下采样和额外池化后约每 40 ms 一个声音表示；4 秒约 64000 采样点、400 帧、100 个声音表示是近似教学算例。
- [官方仓库](https://github.com/QwenLM/Qwen-Audio)标注 2023-11-30 发布初代和 Chat 权重；[权重许可](https://huggingface.co/Qwen/Qwen-Audio/blob/main/LICENSE)为 Tongyi Qianwen 自定义许可，输出为文字。

## 训练

- [论文第 3.2–3.3、4.1 节及附录表 6](https://arxiv.org/html/2311.07919v2)：多任务预训练固定 LLM、优化音频编码器；Chat SFT 固定音频编码器、优化 LLM。训练配置分别为 500k／8k 步、全局批量 120／128、最大学习率 5e-5／1e-5、AdamW 和 BF16。
- 多任务标签区分转写类型、输入语言、任务、输出语言、时间戳与格式；非人声音频使用 unknown 输入语言标记。本次补充同一录音转写与翻译、无语音声音描述的示例；相关例子均为教学构造。

## 评测与应用

- 论文表 3 的 LibriSpeech test-clean／test-other WER 为 2.0／4.2；[Qwen2-Audio 报告表 2](https://arxiv.org/html/2407.10759v1) test-clean 的初代／二代为 2.0／1.6。原论文图 1 对识别数据展示 1−WER%，方向与 WER 相反。
- “门开了”与“门关了”按三个汉字计算一个替换，CER 为 1/3；弱背景声漏检、保存录音与拆分回归为教学方案，非模型实测。

## 配图

- `src/content/data/figures.yaml` 的 `qwen-audio-first-official` 登记论文 Figure 3、论文 v2、CC BY 4.0、署名与替代文字。火焰与雪花分别表示多任务预训练中训练音频编码器与冻结 LLM，不应推广到 Chat 微调阶段。
- Chromium 打开本机 `/audio/qwen-audio-model/`，图片成功解码为 2040×1332，替代文字存在；截图检查了图中数据流、训练格式和显示。

## 社区

- [破立：Qwen-Audio 解读系列](https://zhuanlan.zhihu.com/p/25580093755) 于 2026-10-28 已登录实读时为 6 赞同、20 收藏；记录见 [Qwen 音频与 Omni 社区核对](qwen-audio-community.md)。文章覆盖初代与二代，较为简短；结构与训练数值对照原论文，不复制社区图文。

## 评测数字逐项复核（2026-10-29）

[原论文表 3](https://arxiv.org/html/2311.07919v2)：Qwen-Audio 的 LibriSpeech `test-clean`／`test-other` WER 为 2.0%／4.2%；同表的 `dev-clean`／`dev-other` 为 1.8%／4.0%，正文没有混淆切片。论文第 4.1 节说明这里的 Qwen-Audio 与后续监督微调的 Qwen-Audio-Chat 是不同阶段；4.3 节说明该组任务未进行任务专用微调。[Qwen2-Audio 报告表 2](https://arxiv.org/html/2407.10759v1)复列前者 test-clean 2.0%，以及 Qwen2-Audio 的 1.6%。本次没有复现评测。
