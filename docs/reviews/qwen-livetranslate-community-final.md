# Qwen3 与 Qwen3.5 LiveTranslate 社区资料复核

2026-10-28 使用用户已登录 Chrome 阅读知乎原文；互动数为查看时快照。两文均涉及明确版本，但均有范围限制。

- **Qwen3-LiveTranslate-Flash**：[小小将《Qwen 最新 6 大发布来了》](https://zhuanlan.zhihu.com/p/1954101453053494712)，51 赞同、44 收藏，编辑于 2025-09-24。阅读 LiveTranslate 专节：介绍 API、音视频翻译、18 语言及实时/离线的功能；这是一次发布汇总，非专门的结构或训练解析，部分效果与“94%+ 准确率”未解释清楚评测口径，不能视为所有任务的正确率。其将该模型标明为 API，与页面既有[官方发布介绍](https://qwen.ai/blog?from=res&id=4266edf7f3718f2d3fda098b3f4c48f3573215d0)对应；不能将同场发布的其他开源模型归到它身上。
- **Qwen3.5-LiveTranslate-Flash-Realtime**：[五花肉Tree《Qwen3.5 LiveTranslate 浏览器 Demo 开源》](https://zhuanlan.zhihu.com/p/2043009656210158557)，2 赞同、6 收藏，编辑于 2026-05-27。阅读 Demo 架构、麦克风和摄像头输入、WebSocket 流式响应与 API 子协议部分；[项目 README](https://github.com/modelstudioai/livetranslatedemo)确认这是浏览器采集、本地代理和云端模型的示例，API Key 和网络访问仍是实际运行前提。仓库开源不表示模型权重开源；未运行 Demo 或验证各平台隐私与性能。收藏量较低，作为动手入口而非质量排名依据。
- 另读[人工智能研究所的 Qwen3.5 文章](https://zhuanlan.zhihu.com/p/2074880606736011548)，1 赞同、6 收藏；其“看见就不会错”、热词“直接锁定”、训练保证不互相妥协等说法过于确定，未作为正文推荐参考。不能将可选视觉信息、热词或声线复刻当作正确性保证。

本轮未运行模型或复现翻译评测，未验证示例中的每个服务参数。两个版本已分别加入对应文章的延伸阅读，并注明体验文章的局限。
