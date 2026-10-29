# Qwen-Image-Edit-2509 核查记录

核查范围：2025 年 9 月 2509 版本的发布时间、权重、许可、多图训练、结构表述、评测披露、初代和 2511 对比，以及原创示意图。本文案例和评测建议均未实跑。

- [2509 官方模型卡](https://huggingface.co/Qwen/Qwen-Image-Edit-2509)：核查开放权重、Apache 2.0、模型页面所示参数和 Plus 管线示例。
- [2509 官方发布说明](https://github.com/QwenLM/Qwen-Image/blob/main/Qwen-Image-Edit-2509.md)：确认在初代基础上通过图像拼接继续训练、一到三张输入效果较好、人/商品/文字一致性、ControlNet 条件。该页没有完整训练配方或可复现量化基准表；一到三张不是硬上限。
- [系列官方仓库](https://github.com/QwenLM/Qwen-Image)：确认 2509 的 2025-09-22 和 2511 的 2025-12-23 日期，以及 2511 改进方向。2511 型号不等同于发布时间。
- [初代官方说明](https://github.com/QwenLM/Qwen-Image/blob/main/Qwen-Image-Edit.md) 和 [基础模型报告](https://arxiv.org/abs/2508.02324)：用于早期架构背景，不把原版参数、训练数据或图中的每条连接归为 2509 专属事实。
- 原创图仅表示多图、文字、生成和输出后验收的高层流程；验收在模型外，图不声称为官方网络结构。
- 知乎：在登录 Chrome 会话搜索 `Qwen-Image-Edit-2509`，本次搜索页未返回可读取的具体文章结果，因此未取得可核验的原文赞同数和收藏数，未以社区文转述技术事实。相关 [Qwen-Image-2.0 官方知乎文章](https://zhuanlan.zhihu.com/p/2004565699788551092) 的公开搜索摘要包含系列时间线，但不把它当作 2509 技术细节的依据。
