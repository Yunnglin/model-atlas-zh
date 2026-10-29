# Kimi-Audio 与 GLM-ASR-Nano 重点核查

核查日期：2026-10-28。本文记录本轮核查的部分，不等于逐句审核两篇全文。

## Kimi-Audio

对照 [Kimi-Audio 论文 v1 第 2、4、6 节](https://arxiv.org/html/2504.18425v1)：混合输入使用 12.5 Hz 离散语义 token 和降采样至 12.5 Hz 的 Whisper 连续特征；共享层之后分成文本与音频输出头；音频语义 token 经过流匹配与声码器成为波形。报告的某一交错预训练任务在音频 token 前加入 6 个空白 token；文中 0.48 秒为按帧率换算的序列长度，并非实测首包延迟。报告列出约 30 万小时 SFT 数据、ASR 任务 200 种自然语言指令、其他任务 30 种指令；具体数据来源及训练设置见论文。

对照同报告表 4、表 5，核对 LibriSpeech 与 MMAU 三项数字。复核 [Instruct 模型卡](https://huggingface.co/moonshotai/Kimi-Audio-7B-Instruct)的 MIT 标记。对本地图按浏览器渲染检查，确认音频输入双路径、对齐相加、共享层和两种输出路径；教学图省略具体层和分块细节。

## GLM-ASR-Nano

对照 [Nano 模型配置](https://huggingface.co/zai-org/GLM-ASR-Nano-2512/blob/main/config.json)、[处理器配置](https://huggingface.co/zai-org/GLM-ASR-Nano-2512/blob/main/processor_config.json)和 [Transformers 模型实现](https://github.com/huggingface/transformers/blob/main/src/transformers/models/glmasr/modeling_glmasr.py)：录音处理器为 16 kHz、128 维 Mel、30 秒特征块；编码器配置 32 层、20 头、1280 维，语言模型配置 28 层、16 个查询头、4 个键值头及 2048 维。实现先用步长为 2 的卷积下采样，再将 4 个编码器时间位置拼接至 5120 维，投影到 2048 维。30 秒、3000 帧对应约 375 个投影位置；短片段需要结合掩码处理。

配置列出 `max_audio_len=655` 秒，但 [Transformers 固定版本 0cc72b4 的处理器](https://github.com/huggingface/transformers/blob/0cc72b4bb99a0907660471435c996986b6f1c678/src/transformers/models/glmasr/processing_glmasr.py)按 `655 // 30` 算出最多 21 块；静态推导最长保留 630 秒，警告文本却表述为 655 秒。本轮没有运行依赖或验证其他版本；该差异按固定版本记录，实际部署应检查尾部是否被截断。

对照 [官方模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)和[官方仓库](https://github.com/zai-org/GLM-ASR)核对 1.5B、MIT 模型许可、官方平均指标与数据集说明；完整训练配方未见公开。对现有教学图浏览器渲染，检查音频与转写提示各自进入解码路径；图简化了编码器、拼接及投影细节。

## 本轮没有验证

没有运行真实模型、训练、长录音推理或基准评测；没有重新阅读两篇原有知乎参考或验证现时互动量。模型实现和文档可能更新，外部来源中未披露的训练配方不以推测补足。
