# GLM-ASR-Nano 专项审校

审校日期：2026-10-29。完整通读 [GLM-ASR-Nano 正文](../../src/content/docs/audio/glm-asr-model.md)，范围为 2512 公开检查点；未运行模型或复现识别评测。

- **结构**：对照[模型配置](https://huggingface.co/zai-org/GLM-ASR-Nano-2512/blob/main/config.json)、[处理器配置](https://huggingface.co/zai-org/GLM-ASR-Nano-2512/blob/main/processor_config.json)和 [Transformers 实现](https://github.com/huggingface/transformers/blob/main/src/transformers/models/glmasr/modeling_glmasr.py)核对 16 kHz、128 维声学特征、Whisper 编码、四个位置合并和 Llama 解码。30 秒输入约 3000 帧、下采样及合并后约 375 个位置为配置算例，短音频涉及掩码。
- **训练**：对照[官方仓库](https://github.com/zai-org/GLM-ASR)与模型卡核对约 1.5B、方言和低音量能力说明；官方没有给出可完整复现的训练配方。正文将通用语音标注和领域数据建议与公开事实分开。本次补充官方仓库说明的 2025-12-27 前后权重格式变化及推理版本配套。
- **评测**：官方仓库核对平均错误率 4.10 的范围及 17 种语言所述 WER 条件，未外推到每条录音。[另一研究报告](https://github.com/AmphionTeam/AmphionASR/blob/main/main.pdf)表 15 的 wEar 和 WTIMIT 数据来自特定条件，且未确认完整检查点名；中文 CER 与英文 WER 分开解释。30 秒切块和 630 秒截断为[固定版本处理代码](https://github.com/huggingface/transformers/blob/0cc72b4bb99a0907660471435c996986b6f1c678/src/transformers/models/glmasr/processing_glmasr.py)的计算，不是实测。
- **配图**：对照[图示登记](../../src/content/data/figures.yaml)及[原创教学图](../../public/figures/glm-asr/overview.svg)，音频与文本提示分别进入编码和解码流程，图为简化示意并标明来源与 CC BY 4.0。Chromium 本地页面滚动加载并解码图片，替代文本存在，截图检查中文和箭头。
- **社区**：沿用 [2026-10-28 实读记录](audio-whisper-benchmark-20261028.md)，marsggbo 的 [AmphionASR 解读](https://zhuanlan.zhihu.com/p/2075183470100341457)当时 0 赞、5 收藏，讨论语音特殊场景和独立测试；文中耳语数据与原报告表 15 核对，GLM 条目没有完整检查点名称，不能断言为本页权重。文章互动量低，仅作具体评测的补充，本次未重读或更新数值。

## 2026-10-29 社区资料补查

在已登录的 Chrome 知乎搜索 `GLM-ASR-Nano-2512` 并实读以下内容，互动数为当天页面显示：

- [Zhengji：ChatLLM.cpp：2026 从 GLM-ASR-Nano 开始](https://zhuanlan.zhihu.com/p/1991220708395745832)：明确使用 Nano-2512，作者介绍音频编码器的 RoPE、投影及 30 秒输入处理；0 赞，收藏数未显示。变长语音是作者待验证的想法，不当成模型结论。适合作为版本对应的工程参考，文章未系统讨论训练或评测。
- [听说之地：2026 实测主流 ASR / TTS](https://zhuanlan.zhihu.com/p/2039392717323620590)：143 赞、309 收藏，展示方言样例和延时，列出 RTX 4060 Ti 8G 与 RTX 5090 32G。文章仅称 GLM-ASR-Nano-1.5B，未写完整检查点，不能证明使用 2512；亦不能把单条数据归到指定设备或推广为整体排名。
- [刘聪NLP：12 月开源模型汇总](https://zhuanlan.zhihu.com/p/1989632077495287865)：77 赞、95 收藏，明确提及 Nano-2512 和 1.5B，但针对该模型仅简述，不能作为深入技术审校。

对照[官方模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)可确认 Nano-2512 的 1.5B 及官方列出的方言、低音量场景；[处理器配置](https://huggingface.co/zai-org/GLM-ASR-Nano-2512/blob/main/processor_config.json)和 [Transformers 实现](https://github.com/huggingface/transformers/blob/main/src/transformers/models/glmasr/modeling_glmasr.py)支持正文中的声学处理与投影说明。知乎工程笔记对变长输入的猜测没有在此作为已验证事实，也没有把社区测试说成官方基准。

本次搜到与版本准确对应的工程笔记，但没有找到同时具备准确版本标识和深入训练、评测分析的高互动社区文章；结构与训练等事实仍须以官方资料为准。
