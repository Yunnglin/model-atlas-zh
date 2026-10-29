# QVQ-72B-Preview 专项审校

审校日期：2026-10-29。完整通读 [QVQ 正文](../../src/content/docs/omni/qvq-72b-preview-model.md)，范围为 2024 年预览权重；未运行模型或复现评测，图表及尺寸试验为教学构造。

- **结构**：对照[官方发布文章](https://qwenlm.github.io/blog/qvq-72b-preview/)、[模型卡](https://huggingface.co/Qwen/QVQ-72B-Preview)与[底座 Qwen2-VL 报告](https://arxiv.org/html/2409.12191)，核对视觉编码、文本生成、动态分辨率和 M-RoPE 的家族背景；模型卡注明单轮、不支持视频，其 image outputs 表述与任务标签及示例不一致，正文不据此宣称可生成图片。
- **训练**：官方说明基于 Qwen2-VL-72B 增强视觉推理，未公开预览版完整数据、阶段和算法；正文将底座背景与自行构造的数据建议分开，不据推理文本猜测 RL 配方。
- **评测**：模型卡核对 MMMU 70.3/64.5、MathVista 71.4/70.5、MathVision 35.9/25.9 和 OlympiadBench 20.4/11.2 的模型及划分；基础识别限制和长推理脱离图像的风险来自官方说明。本次补充模型卡处理器视觉预算示例，图表清晰度、耗时与显存比较为建议方案而非实测。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)与[原创简图](../../public/figures/qvq-72b-preview/overview.svg)，图片、视觉编码、问题与语言模型及文本答案方向符合简化范围，注明来源与 CC BY 4.0。Chromium 本地页面滚动后图片解码成功、宽 1200、有替代文本；截图核查中文和箭头。
- **社区**：沿用[2026-10-28 实读记录](new-models-community-logged-in.md)，夕小瑶的 [QVQ 体验](https://zhuanlan.zhihu.com/p/14798649459)当时 46 赞、20 收藏，实际阅读数动物、物理和数学案例；一些案例样本少或缺标准答案，不能推成总体排名。其视觉任务讨论对照官方发布的四组基准和限制；本次未重读或更新互动量。
