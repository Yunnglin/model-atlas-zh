# 长上下文、语音模型和 KTO 复核

核对日期：2026-10-28。以下复核以论文、模型卡和现有正文为依据，未运行训练或复现基准。

- [Qwen2.5-1M](../../src/content/docs/nlp/qwen25-1m-model.md)：对照[技术报告 v1](https://arxiv.org/html/2501.15383v1#S3)及 [7B](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct-1M)、[14B](https://huggingface.co/Qwen/Qwen2.5-14B-Instruct-1M)模型卡，区分 Qwen2.5 Base 已进行的前两阶段与中间检查点之后的长上下文训练；补充实际参数和上下文信息。评测数字限于报告具体条件。
- [Qwen2-Audio](../../src/content/docs/audio/qwen2-audio-model.md)：对照[技术报告 v1](https://arxiv.org/html/2407.10759v1)，区分频谱输入和编码后输出的时间步长，补充同报告中的情绪及声音分类分项，避免把综合表现误写成每项提升。
- [Qwen3-TTS](../../src/content/docs/audio/qwen-tts.md)：对照[技术报告 v1](https://arxiv.org/html/2601.15621v1#S3.T2)，补充预训练阶段及首包等待与语音包时长的不同含义。报告中的延迟受模型、硬件与并发条件限制。
- [KTO](../../src/content/docs/training/kto.md)：对照[原论文第 4 节](https://arxiv.org/html/2402.01306#S4)，解释论文中错配小批次估计参考点及其偏差、停止梯度和特定场景可设零的边界。实现可能不同。

社区参考覆盖和访问限制见[盘点](community-coverage.md)，不把未能核实的赞同与收藏视为证据。
