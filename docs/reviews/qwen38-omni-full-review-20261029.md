# Qwen3.8-Omni-Flash 专项审校

审校日期：2026-10-29。完整通读 [Qwen3.8-Omni 正文](../../src/content/docs/omni/qwen38-omni-model.md)，以技术报告 v1 的 Flash 与 Realtime 分支为范围；未调用服务或复现评测，会议例子为教学构造。

- **结构**：对照[技术报告第 2 节](https://arxiv.org/html/2609.25611v1)核对 Thinker 的混合 Gated DeltaNet 与注意力、QSA 选压缩索引后读取原 token、视觉编码、普通 AuT 的 16 kHz／6.25 Hz 和空间 AuT 的一阶 Ambisonics 与复数频谱；区分标准服务文字输出和 Realtime 语音输出。不根据 Qwen3.8-Next 推测 Omni 的参数规模。
- **训练**：报告第 3–4 节核对编码器对齐、全参数多模态预训练、密集注意力监督索引器和稀疏训练四阶段，以及多教师蒸馏和后续 RL。报告写总约 2.5T、近似分项相加约 2.6T，正文保持原报告口径，不强行补造解释。
- **评测**：对照报告表 5、8、9 核对 WorldSense 68.5/63.9、OmniVideoBench 静态／智能体 63.4/67.8 与 145736/79117 token、6 秒音频 TTFC 978.36 ms 和生成 RTF 0.1538。区分网络与服务处理、输入上传/播放及首块等待的计时范围，智能体系统对照不是单一参数变化。
- **实时语音与配图**：报告第 7 节核对 Thinker、Talker、MTP 与因果 Code2Wav 的职责，补充 24 kHz 至 48 kHz 波形重建上采样，并区分输入 16 kHz。对照[图片登记](../../src/content/data/figures.yaml)、[原创示意](../../public/figures/qwen38-omni/overview.svg)和[官方音频编码器图](../../public/figures/qwen38-omni/official-encoders.png)、[Realtime 系统图](../../public/figures/qwen38-omni/official-realtime.png)，均标明范围、来源和 CC BY 4.0；Chromium 本地页面滚动加载三图成功，替代文本存在，截图检查文字与箭头。
- **社区**：沿用[2026-10-28 实读记录](qwen38-omni-community.md)，千问大模型的[发布介绍](https://zhuanlan.zhihu.com/p/2084035289178231553)当时 30 赞、23 收藏；其 OmniVideoBench 直接与智能体对照数字与报告表 8 一致，但文章属于发布方资料，不能作为独立评测；聚合提升和实际费用也不能不加条件推广。本次未重读或更新互动量。
