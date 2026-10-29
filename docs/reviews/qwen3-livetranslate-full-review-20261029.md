# Qwen3-LiveTranslate-Flash 专项审校

审校日期：2026-10-29。完整通读 [Qwen3-LiveTranslate 正文](../../src/content/docs/audio/qwen3-livetranslate-model.md)，范围为 2025 年初代服务；未调用服务或复现评测，会议和数字算例为教学构造。

- **结构**：对照[官方发布介绍](https://qwen.ai/blog?from=res&id=4266edf7f3718f2d3fda098b3f4c48f3573215d0)，核对音视频输入、文本与语音输出、Qwen3-Omni 多模态基础、轻量 MoE 与语义单元预测；内部逐层结构与参数未披露，不套用后续版本的细节。按[后续官方对照](https://qwen.ai/blog?id=qwen3.5-livetranslate)区分初代热词与声音克隆。
- **训练**：发布介绍核对数百万小时多模态数据，文章将配对样本、领域术语表与数据授权作为教学和应用建议，未将其写为官方具体配比与训练阶段。
- **评测**：发布介绍描述实时模式相对非实时模式保留 94% 以上准确度及最低约 3 秒延迟；本次补充相对比例的假设算例，说明公开信息不足以把它等同于逐句准确率或后续版本 LAAL 指标。官方初代介绍及后续对照写 18 种语言；[阿里云模型列表](https://www.alibabacloud.com/help/en/model-studio/newly-released-models)对 2025-09-22 快照写可理解 19 种、生成 10 种语音，本次记录两处口径差别，不推断具体原因。字幕、否定和画面反例为评测建议而非实测。
- **配图**：核对[图示登记](../../src/content/data/figures.yaml)及[原创教学图](../../public/figures/qwen3-livetranslate/overview.svg)的音视频输入、流式理解、文字和语音输出，标注非逐层网络图、来源及 CC BY 4.0。Chromium 打开本地正文滚动后图片成功解码（宽 1200），替代文本存在；截图核对中文和箭头。
- **社区**：沿用 [2026-10-28 实读记录](qwen-livetranslate-community-final.md)，小小将的[六项发布解读](https://zhuanlan.zhihu.com/p/1954101453053494712)当时 51 赞、44 收藏，介绍初代 API、音视频和 18 种语言；其“94%+ 准确率”表述未展开口径，对照官方实际是实时与非实时的相对比较，不将其当作所有句子的正确率。本次未重读或更新互动量。
