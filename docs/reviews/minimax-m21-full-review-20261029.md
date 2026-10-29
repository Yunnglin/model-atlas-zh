# MiniMax-M2.1 全文审校

审校日期：2026-10-29。通读 [M2.1 正文](../../src/content/docs/nlp/minimax-m21-model.md)，对照模型卡、权重配置和后训练分享；没有运行模型、训练或复现评测。

- **结构**：对照 [模型配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.1/raw/main/config.json)核对 62 层、256 专家选 8、48 个查询头和 8 个键值头、196608 最大位置；[官方分享](https://www.minimax.io/news/post-training-experience-and-insights-for-agent-models)称约 230B 总参数、10B 激活参数，以及在 M2 上继续后训练。上下文位置配置不是每项服务的实际窗口。
- **训练**：官方后训练分享介绍 GitHub PR 和 commit 构建可运行环境、不同任务的筛选、专家指导应用构建、WebExplorer 和 Forge；截至 M2.1 主要采用 CISPO 并裁剪重要性采样权重。正文的失败到通过、通过到通过和项目隔离为实践说明，不能据此保证官方每条数据都经过相同处理。多币种任务是教学例子，不是复现实验。
- **评测**：对照 [模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.1)的 SWE-bench Verified、BrowseComp 和 VIBE；补充 VIBE Web 91.5、Android 89.7 与三次运行平均，强调其通过验证智能体检查交互而不是用户满意度。Terminal-bench 2.0 使用 Claude Code、官方报告修复环境问题并移除超时限制，取四次平均；条件不能直接与有超时的结果混比。
- **配图**：依据 [配图登记](../../src/content/data/figures.yaml)与 [素材说明](../assets.md)，在 Chromium 实际加载正文中的 [共用骨干图](../../public/figures/minimax-m2/backbone.svg)，并加载 [M2.1 工具流程图](../../public/figures/minimax-m21/overview.svg)目视检查文字与箭头。两图为原创简化图、非官方原图，后者的评测与训练标注不代表模型内部自动运行工具。
- **社区**：2026-10-29 主审通过已登录 Chrome 阅读青稞社区发布的 [MiniMax-M2.1 分享实录](https://zhuanlan.zhihu.com/p/1993476563434481084)，当时 56 赞同、108 收藏。文章介绍 PR 沙盒构建、失败到通过与通过到通过检查、多脚手架以及 CISPO 裁采样权重，与官方分享一致。它是团队分享实录，不是独立实验；测试通过也不证明代码没有其他缺陷。赞藏数量为阅读时快照。

## 评测数字逐项补证（2026-10-29）

- [MiniMax-M2.1 官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.1)：SWE-bench Verified 默认 Claude Code 下 M2.1 为 74.0、M2 为 69.4；Droid 71.3、mini-swe-agent 67.0。官方注明内部环境、Claude Code 替换默认系统提示、四次运行平均。正文数字一致。
- 同一模型卡 BrowseComp 普通设置 47.4、上下文管理设置 62.0；VIBE 总平均 88.6。官方注明 VIBE 为自建基准，Claude Code 脚手架、自动验证，三次运行平均。正文数字一致，不能把两种基准的分数视作同一指标。
