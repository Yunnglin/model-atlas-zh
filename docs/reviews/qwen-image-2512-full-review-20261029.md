# Qwen-Image-2512 专项审校

审校日期：2026-10-29。完整通读 [Qwen-Image-2512 正文](../../src/content/docs/cv/qwen-image-2512-model.md)；未运行模型或复现评测，海报和错例为教学构造。

- **结构**：对照 [2512 组件清单](https://huggingface.co/Qwen/Qwen-Image-2512/blob/main/model_index.json)、[Transformer 配置](https://huggingface.co/Qwen/Qwen-Image-2512/blob/main/transformer/config.json)与[原版报告](https://arxiv.org/html/2508.02324)，核对文本编码、生成网络、调度器与 VAE 的组件职责。补充 60 层、24 头和头维 128，明确网络层数与生成步数是不同概念；20B 为权重页面的统计，不当作完整部署资源需求。
- **训练**：对照[官方模型卡](https://huggingface.co/Qwen/Qwen-Image-2512)，该版本公开人像、自然细节和文字的更新方向，没有提供可完整复现训练的详细配方；原版报告仅用于家族背景。正文把自拟海报数据和筛选方案与官方事实分开。
- **评测与实践**：模型卡核对 AI Arena 超过 10,000 轮盲测的说法，轮数不等于题目数，也不替代可重复测试；核对官方示例的 50 步、true CFG 4.0、种子 42 与画幅。示例的 CPU 分支仍创建 CUDA 随机数生成器，正文说明需要与设备匹配；未运行该示例。
- **配图**：检查[图示登记](../../src/content/data/figures.yaml)及[原创图](../../public/figures/qwen-image-2512/overview.svg)，文字条件、生成网络、VAE 解码及外部核对的流程符合模型卡组件及教学简化范围，注明来源与 CC BY 4.0。Chromium 本地页面滚动后解码成功（1200×390），替代文本存在，截图检查中文及箭头。
- **社区**：沿用 [2026-10-28 实读记录](qwen-image-2512-independent.md)，千问大模型的[中文发布](https://zhuanlan.zhihu.com/p/1989751102191735849)当时 61 赞、63 收藏，展示人物、自然纹理和海报文字；这些方向与英文模型卡对应。文章来自发布方，展示样例不是独立盲测或通用正确率；本次未重读或更新互动数。
