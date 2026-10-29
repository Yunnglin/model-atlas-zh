# Llama 4 社区参考复核

2026-10-28 使用已登录 Chrome 阅读 [Rooters：《借 llama4 模型架构聊一下混合注意力架构》](https://zhuanlan.zhihu.com/p/1892498563755389735)。页面标注发布于 2025-04-07，当时可见 **43 赞同、44 收藏**；互动数量是快照，不代表结论正确。

正文直接讨论 Llama 4 Scout 与 Maverick 的专家、注意力和长上下文，并附带作者通过第三方服务做的有限 RULER 检索测试。文章适合作为对具体架构和长上下文测试的延伸阅读，但作者明确把部分实现及设计动机标为猜测，自己的测试也称范围有限；其结果不能视作官方评测或全场景能力结论。

对照 [Meta 官方发布说明](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)和 [官方模型卡](https://dev.meta.ai/llama/docs/model-cards-and-prompt-formats/llama4)：Scout 与 Maverick 分别有 16 和 128 个专家、约 17B 激活参数；官方给 Scout 最高 10M 上下文。模型的输入上限不等于所有长度与任务都能无损理解，实际要按模型版本、平台和测试方法核对。没有把作者对设计原因的推测或其非官方分数写成官方事实。

已将文章作为具有限制说明的中文延伸阅读加入模型页。没有运行模型、复现社区测试或修改共享覆盖表。
