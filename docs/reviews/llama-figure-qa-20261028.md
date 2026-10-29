# Llama 交互阅读器图示复核

范围：检查三个图在 `figures.yaml` 的来源、授权说明、alt、图片视口尺寸、`model-guides.yaml` 对应章节、SVG 文本与正文的关系；对照官方资料。未修改共享 YAML，未运行模型或验证模型输出。

- **Llama 3.2 Vision**：自绘图明确标注教学简化，视觉编码器、交叉注意力与语言模型的关系和 [Meta 提示格式说明](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/vision_prompt_format.md) 一致，适配器并非把原始像素变成普通文本；元数据的 alt、来源、尺寸及阅读章节均对应。图中的图表和回答为例子。
- **Llama 3.3**：自绘图表示文本与代码、GQA 和 128K；这些与 [官方 70B Instruct 模型卡](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct)一致，并明确 405B 是 3.1 比较对象。alt、来源、视口尺寸及章节对应。图中文字已标明非官方结构图。
- **Llama 4**：对照 [Meta 发布说明](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) 的视觉编码、早期融合和 MoE；元数据明确覆盖 Scout 与 Maverick，alt 和正文将核验视为外部步骤。图补充 **仅针对 Maverick** 的“共享专家与 1 个路由专家参与”，避免把省略的路由数量误认成两型号的统一细节；没有推测 Scout 的路由数量。
- 阅读器通过 `ModelLearning` 在匹配章节末尾插入图，而 Llama 3.3 的 Markdown 在同一章节也直接包含这张 SVG，因而当前逻辑会在交互阅读器重复显示。保留正文内图片是为了独立正文也能显示；这需要在共用阅读器层处理去重，已通知主任务。其他两篇在 Markdown 中没有同图内嵌，不存在同样重复。
- 三个 SVG 的 XML 与声明视口已检查；没有完成真实浏览器视觉截图审阅，也未验证图片授权以外的第三方素材，因为这三张均为项目原创教学图。
