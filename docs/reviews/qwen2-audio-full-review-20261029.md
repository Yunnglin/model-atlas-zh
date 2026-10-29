# Qwen2-Audio 全维度审阅

审阅日期：2026-10-29。逐项核对 `src/content/docs/audio/qwen2-audio-model.md` 的模型卡、结构、训练、评测、业务例子、官方配图和社区参考；没有运行模型或复现基准。

## 结构与模型卡

- [官方报告 v1](https://arxiv.org/html/2407.10759v1)：Whisper-large-v3 初始化音频编码器，Qwen-7B 为语言骨干，整套约 8.2B 参数；声音和文字输入、文本输出。输入重采样到 16kHz，25ms 窗口和 10ms 步长产生 128 维梅尔频谱，池化后编码输出时间步约 40ms。五秒约 125 步是估算，不混同音频波形采样点。
- [7B 模型卡](https://huggingface.co/Qwen/Qwen2-Audio-7B)与 [7B-Instruct 模型卡](https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct)均标注 Apache 2.0；前者是预训练检查点，后者是对话微调检查点。正文区分输入音频与输出文本，没有声称该模型自行生成语音波形。

## 训练

- 报告方法部分：预训练使用自然语言任务提示，随后是联合训练声音分析／语音聊天的 SFT 与使用偏好数据的 DPO；模型条件于音频表示和先前文本预测文字 token。正文的键盘声、偏好对和训练数据质量建议是教学例子；没有推断逐阶段冻结和配比。

## 评测

- 报告表 2：LibriSpeech test-clean / test-other 的 WER 为 1.6% / 3.6%；Fleurs 为零样本而 Common Voice 不为零样本。MELD 的 Qwen-Audio / Qwen2-Audio 为 0.557 / 0.553，VocalSound 为 0.9289 / 0.9392，正文如实保留跨任务不同结果。
- AIR-Bench Chat 使用 GPT-4 评分，报告注明 Gemini 对部分样本未返回而评估样本减少约五分之一；不能直接视作完全同样样本。WER 例子删除一个参考词，参考长四词，结果 25%；音频事件描述和对话不能仅凭 WER 衡量。
- 键盘与敲桌声对照、独立设备与说话人分组等属于评测建议，没有声称实跑。

## 配图

- `src/content/data/figures.yaml` 的官方 Figure 2 指向 `public/figures/qwen2-audio/architecture.png`，标明论文与作者、原图未修改和 CC BY 4.0；[arXiv 论文许可](https://arxiv.org/abs/2407.10759v1)链接到 CC BY 4.0。图中预训练、SFT、DPO 是训练阶段，不是每个请求依次运行三次模型；正文已说明。
- Chromium 打开本机 `/audio/qwen2-audio-model/`，滚动后图像加载为 2017×1220，替代文本存在；截图检查训练阶段、编码器、QwenLM 与输出。

## 社区

- [似花还似非花：语音大模型知识点整理](https://zhuanlan.zhihu.com/p/6715867215) 于 2026-10-28 实读时 44 赞、107 收藏，详情见 [音频社区资料](qwen-audio-community.md)。文章有 16kHz、30 秒采样点数字笔误，作者在评论更正；逐阶段冻结策略为作者推测。正文用官方报告，并将中文文章作为延伸阅读，没有转载其图文。

## 评测数字逐项复核（2026-10-29）

[技术报告表 2](https://arxiv.org/html/2407.10759v1)：Qwen2-Audio 在 LibriSpeech `test-clean`／`test-other` 的 WER 为 1.6%／3.6%；MELD 准确率 Qwen-Audio／Qwen2-Audio 为 0.557／0.553，VocalSound 为 0.9289／0.9392，正文数值及指标方向一致。论文说明 Fleurs 为零样本、Common Voice 15 不是零样本；评测未做任务专用微调不等于所有数据集都是零样本。本次没有复现评测。
