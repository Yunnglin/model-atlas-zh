# Kimi K2.6 专项审校

审校日期：2026-10-29。完整通读 [Kimi K2.6 正文](../../src/content/docs/omni/kimi-k26-model.md)，范围为开放权重与模型卡中的服务示例；未运行模型或复现评测，网页修复示例为教学构造。

- **结构**：对照[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)与[配置](https://huggingface.co/moonshotai/Kimi-K2.6/blob/main/config.json)核对 1T/32B、MoonViT、61 层、首层稠密及后续 384 选 8 路由专家加共享专家、64 头 MLA、256K、INT4 每组 32 及排除范围。补充官方模型卡确认 K2.6 和 K2.5 架构相同，但不能由此断言训练或权重一致；工具执行属于外部系统。
- **训练**：官方模型卡与[技术博客](https://www.kimi.ai/blog/kimi-k2-6)未披露足以完整重现新增训练的数据、配比及优化过程；正文把前代 K2.5 和通用任务训练解释限定为背景，不将示例当实际配方。视频输入接口标为实验功能且仅官方 API 当前支持。
- **评测**：模型卡核对 SWE-Bench Pro 58.6、Terminal-Bench 2.0 66.7、MMMU-Pro 无 Python 79.4、有 Python 80.1，代码任务十次独立运行平均与视觉三次平均。补充前者使用从 SWE-agent 改造的内部工具框架、后者使用 Terminus-2 保留推理的区别，并用图表计算例子解释带工具成绩；实际业务测试建议不是实测。
- **配图**：对照[图示登记](../../src/content/data/figures.yaml)、[原创工具流程图](../../public/figures/kimi-k26/overview.svg)和[语言主干简图](../../public/figures/kimi-k26-k27/backbone.svg)，多模态输入、工具交互、MLA 与专家前馈的方向与官方配置一致；均为 CC BY 4.0 教学图，后者已补充[素材登记](../assets.md)。Chromium 本地页面滚动后两图均解码成功、替代文本存在，截图核对中文和箭头。
- **社区：完成。** 2026-10-29 在浏览器实读 [toyama nao 的 K2.6 个人测试](https://www.zhihu.com/question/2029714522651272097/answer/2030049575298389432)，页面显示 246 赞同、46 收藏。作者说明某些复杂题超出其设置的 token 上限而按测试规则计零，另观察到长上下文检索可能出现幻觉；其对前代比较是特定题目和预算下的个人结果。对照[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)的基准及其不同框架、次数，不能把社区测试中的截断计零混成官方分数；正文增加区分预算耗尽与答案错误的教学示例。
