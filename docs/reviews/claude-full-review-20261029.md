# 初代 Claude 内容审校

核对日期：2026-10-29。范围是 2023 年首代 Claude 与关联的 Constitutional AI 研究，不推断闭源服务的完整实现。

- **结构与时间**：对照 [首发文章](https://www.anthropic.com/news/introducing-claude)核对 2023-03-14、Claude 与 Claude Instant、聊天和 API 场景；文章未给出完整架构、参数或层数。[2023-05-11 上下文更新](https://www.anthropic.com/news/100k-context-windows)将 9K 提升至 100K，不能倒推首发配置。
- **训练**：对照 [Constitutional AI 原论文](https://arxiv.org/html/2212.08073)第 1.3、3.2、4 节，核对批评和修订、监督训练、AI 无害性偏好与人类有帮助性偏好混合、偏好模型和强化学习。补充论文中监督数据包括普通有帮助任务样本，澄清会议纪要是教学类比，原论文重点是有害回答；研究模型不等于已披露的 Claude 生产配方。
- **评测**：对照原论文图 2、3 和第 3.3 节，核对人工比较形成的有帮助性／无害性相对 Elo，以及同样无害时倾向选择不回避回答的评审规则。补充其研究结论与实验适用范围，不将相对分数说成正确率或 Claude 服务指标。
- **配图**：检查 [登记](../../src/content/data/figures.yaml)和[应用流程图](../../public/figures/claude/overview.svg)，并用 Chromium 渲染后目视检查，箭头和文字完整；图是应用侧教学示意，不是官方内部架构图。
- **社区参考**：采用既有浏览记录而非声称本次重新阅读。[Claude Instant 案例](claude-instant-community-20261028.md)记载 OrbiumCoelestium 的文章当时 37 赞、30 收藏，仅为单题案例；[方法解读记录](claude-community-method.md)记载 Hao Bai 的文章当时 214 赞、394 收藏，主要为论文阅读，不证明首代生产配方。赞藏数会变化。

本轮没有运行 Claude、训练模型或执行评测；讨论的业务案例均为教学示例。
