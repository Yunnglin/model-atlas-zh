# DiT 与 DeepSeekMath-V2 模型卡复核

核对日期：2026-10-28。对照[DiT 原论文表 4](https://arxiv.org/html/2212.09748#A1.T4)，为 adaLN-Zero DiT-XL/2 补充约 675M 参数；论文明确此统计不含 VAE，编码器和解码器共约 84M。其他条件注入方式的参数数不同。

对照 [DeepSeek-Math-V2 权重页](https://huggingface.co/deepseek-ai/DeepSeek-Math-V2)，模型卡补充页面展示约 685B 的权重统计，并标明它不是每 token 激活量；该页显示值与底座报告的参数统计口径不能未经核对直接相减。论文的证明生成与验证流程、评测预算仍按正文的版本和条件说明。

未下载大型权重计数、执行模型或复现论文；线上模型页面可能更新。
