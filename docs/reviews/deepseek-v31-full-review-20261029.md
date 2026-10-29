# DeepSeek-V3.1 初版全文审校

审校日期：2026-10-29。完整通读 [V3.1 正文](../../src/content/docs/nlp/deepseek-v31-model.md)，范围为 2025 年 8 月初版，不混同 V3.1-Terminus 或 V3.2；未运行模型或复现评测。

- **结构和模型卡**：对照 [官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V3.1)确认 V3.1 和 Base 的 671B 总参数、37B 激活、128K 窗口、MIT 许可，结构与 V3 相同。思考与非思考由聊天模板前缀控制；正文新增多轮模板丢弃历史思考文本的说明，引用和合同内容都是教学例子。
- **数据与训练**：对照 [Base 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V3.1-Base)确认从 V3 Base 出发的两阶段长上下文训练为 32K 的 630B token 和 128K 的 209B token；后训练优化工具与 Agent，公开信息不足以还原完整训练配方。UE8M0 为 FP8 缩放格式，不声称通用推理加速倍数。
- **评测和应用**：模型卡列非思考 SWE Verified 66.0、Terminal-Bench 31.3，分别使用内部代码框架和 Terminus 1；思考／非思考 AIME 2025 88.4／49.8、MMLU-Pro 84.8／83.7。新增 BrowseComp 30.0 例子，明确思考模式下结果来自包含商业搜索 API 和网页过滤的内部搜索系统。对照模型卡模板补充普通 ToolCall 用于非思考模式、思考模式搜索使用单独格式，不把工具执行归为模型内部动作。
- **配图**：核对 [图片登记](../../src/content/data/figures.yaml)和 [教学 SVG](../../public/figures/deepseek-v31/overview.svg)；本轮用 Chromium 在 `/nlp/deepseek-v31-model/` 加载，图片尺寸 1060×260、有替代文本，目视检查了工具结果返回箭头和文字。图为简化教学示意，非官方架构图，省略模型直接回答等路径。
- **知乎**：2026-10-29 由主审通过已登录 Chrome 阅读 Mountain 的 [V3.1 配置文件解析](https://zhuanlan.zhihu.com/p/1941412539335440240)，当时 17 赞同、11 收藏；文章对照聊天模板的 thinking 开关、工具调用及搜索标记。对照官方模型卡，模板中的标记本身不能证明模型自行联网或格式变化必然减少错误。该文章为早期配置分析，互动数是阅读时快照，不作为独立评测。

- **评测数字补充复核（2026-10-29）**：[初版官方模型卡 Evaluation](https://huggingface.co/deepseek-ai/DeepSeek-V3.1)列非思考模式 SWE Verified 66.0、Terminal-bench 31.3；前者为内部代码智能体框架，后者为 Terminus 1。思考模式 BrowseComp 30.0 使用内部搜索框架、商业搜索 API、网页过滤和 128K 上下文。AIME 2025 Pass@1 思考／非思考为 88.4／49.8，MMLU-Pro 的 EM 为 84.8／83.7。均为模型卡所列结果，并非本项目复现；模型卡未完整列出各项采样细节。
