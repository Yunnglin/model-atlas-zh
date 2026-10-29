# GPT-5 页面审校记录

核对日期：2026-10-28。范围为 2025-08 发布时的 GPT-5 系列、ChatGPT 系统与官方评测；未调用模型或复现实验。产品和 API 后续可能变化。

- [发布介绍](https://openai.com/index/introducing-gpt-5/)与[系统卡](https://openai.com/index/gpt-5-system-card/)：发布时快速模型、thinking 模型和实时路由器构成统一体验；系统卡另列 main、thinking、mini、thinking-pro。公开资料不足以确定完整架构、参数、权重与训练配方。
- [开发者发布说明](https://openai.com/index/introducing-gpt-5-for-developers/)：原版 API 推理模型 gpt-5、mini、nano 与快速聊天模型 gpt-5-chat-latest 的区别；当时总上下文 400,000、最大输入 272,000、最大推理与输出 128,000，不能套用其他版本或当前产品。
- 发布材料报告 AIME 2025 无工具 94.6、SWE-bench Verified 74.9、MMMU 84.2；SWE-bench 使用 477 个在内部基础设施验证的固定子集；开发者表格中相应 GPT-5 配置为 high。特定启用搜索的真实流量提示事实错误相对 GPT-4o 约下降 45%，不能写成绝对错误率或普遍保证。
- 已登录知乎实读 [toyama nao 的 GPT-5 评测](https://www.zhihu.com/question/1936601885311239615/answer/1937114915686036189)：2025-08-08 发布，查阅时 294 赞同、63 收藏。作者提供题目与测试方法链接，并记录长文本统计幻觉；文章排名和体验仅代表其测试，不能推断内部架构。互动数会变化。
- 原创图是发布时产品路径示意，非神经网络结构；工具执行由应用完成，是否运行依系统与权限。正文中的任务、数据与错例是构造示例。

未修改共享 YAML；未验证当前 API 可用性、模型快照变化或生产系统行为。
