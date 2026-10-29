# GLM-ASR 长音频切块复核（2026-10-28）

对照[官方 processor 配置](https://huggingface.co/zai-org/GLM-ASR-Nano-2512/blob/main/processor_config.json)与 [Transformers 固定版本实现](https://github.com/huggingface/transformers/blob/0cc72b4bb99a0907660471435c996986b6f1c678/src/transformers/models/glmasr/processing_glmasr.py)：配置为 30 秒块、max_audio_len 655 秒；代码取 655 // 30 = 21 块，并以块数乘 30 秒限制输入。因此 640 秒输入在该版本最多保留 630 秒，日志文字仍提及 655 秒。其他版本可能改变实现。

模型结构配置及官方页面的许可、平均成绩也已复核；没有下载权重、运行转写或重测社区指标。
