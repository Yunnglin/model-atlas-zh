# Kimi K2.7 Code 专项审校

审校日期：2026-10-29。完整通读 [K2.7 Code 正文](../../src/content/docs/omni/kimi-k27-model.md)，范围为开放检查点和官方 API 说明；未运行模型或复现评测，上传修复为教学案例。

- **结构**：对照[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)和[配置](https://huggingface.co/moonshotai/Kimi-K2.7-Code/blob/main/config.json)，核对 1T/32B、MoonViT、61 层、首层稠密及后续 384 选 8 加共享专家、64 头 MLA、256K 与部分模块 INT4 每组 32。视觉与视频 API、思考模式及外部工具执行分别说明。
- **训练**：模型卡说明基于 K2.6 并改进代码与长程任务，未完整披露新增数据、奖励及训练配方；正文的 SFT、验证器和业务样本为一般方法，不将前代细节当作本版事实。
- **评测**：模型卡核对 Kimi Code Bench v2 62.0/50.9、Program Bench 53.6/48.3、MCP Atlas 76.0/69.4，以及 Kimi Code CLI、MCP Atlas 100 次工具预算和三次平均。本次补充 Program Bench 的 200 个任务与超过 24.8 万个行为测试，以及 Kimi Claw 24/7 Bench 的 17 个场景、610 个检查点、三次运行平均及分数解释；这些均依据官方模型卡。约 30% 思考 token 减少不等于每个任务或端到端耗时同等下降。本次补充模型卡 `preserve_thinking` 与多轮上下文预算和不同接口字段的关系。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)、[工具交互简图](../../public/figures/kimi-k27/overview.svg)及[共享语言主干图](../../public/figures/kimi-k26-k27/backbone.svg)，输入、MLA、专家层和外部执行的简化关系与模型卡一致；均为 CC BY 4.0 教学图。Chromium 本地页面滚动加载两图成功、替代文本存在，截图核查中文及箭头。
- **社区参考**：2026-10-29 通过已登录浏览器实读知乎作者[恋猫的 K2.7 Code 讨论](https://www.zhihu.com/question/2049041027298750565/answer/2049051131368804695)，当时显示 45 赞、12 收藏。文章介绍长程编程定位、思考模式、图像和视频输入，以及官方声称思考 token 相比 K2.6 降低约 30%；这些与官方模型卡相符。视频输入在模型卡所述的第三方部署中仍是实验功能，当前仅官方 API 支持。作者关于非编程任务一定更差的判断属于推断，缺少足够对照依据，未作为正文结论。
