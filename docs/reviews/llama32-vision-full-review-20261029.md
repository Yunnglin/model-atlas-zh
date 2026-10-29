# Llama 3.2 Vision 专项审校

审校日期：2026-10-29。完整通读 [Llama 3.2 Vision 正文](../../src/content/docs/omni/llama32-vision-model.md)，覆盖 11B、90B 与预训练／指令版；未运行模型或复现评测，销售图表示例是教学构造。

- **结构**：对照 [Meta 官方发布说明](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)、[11B 模型卡](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)与[提示格式](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/vision_prompt_format.md)，核对图像编码器、交叉注意力视觉适配器、Llama 3.1 语言模型、128K、GQA 及图文仅支持英语的官方范围。新增 `<|image|>` 放在用户消息体、关联后续文本与建议单图的说明；区分图像数据与文字标记。
- **训练**：官方发布说明核对适配器训练时更新视觉编码器和适配器、冻结语言主干，多阶段图文数据及 SFT、拒绝采样与 DPO；模型卡核对约 60 亿图文对及超 300 万合成指令样例。修正正文把此冻结结论链接至其他研究论文的引用，改为直接链接 Meta 3.2 发布说明。
- **评测**：模型卡核对 Instruct 11B/90B ChartQA test 0-shot CoT relaxed accuracy 83.4/85.5 和 DocVQA test 0-shot ANLS 88.4/90.1；解释不能将图表读数错误等同文字流畅，未将这些指标称为独立实测。
- **配图**：核对[图示登记](../../src/content/data/figures.yaml)及[原创教学图](../../public/figures/llama32-vision/overview.svg)，图示编码器、交叉注意力、问题及文字生成的方向与 Meta 描述一致，注明简化范围、来源与 CC BY 4.0。Chromium 本地页面滚动后解码成功、替代文本存在；截图检查中文及箭头。
- **社区**：沿用[2026-10-28 实读记录](llama32-vision-community-20261028.md)，45度角仰望天空的[结构导读](https://zhuanlan.zhihu.com/p/722249121)当时 143 赞、134 收藏，讨论文字查询与视觉键值；文章对交叉注意力“替代”及模块参数的描述受代码版本和统计口径影响，未无条件推广，以官方模型卡和提示文档核对。本次未重读或更新互动数。
