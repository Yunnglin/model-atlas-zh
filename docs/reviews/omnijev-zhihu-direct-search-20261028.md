# OmniJev 知乎直接资料补查

2026-10-28 在已登录的 Chrome 中检索「OmniJev」「OmniJev 中关村」，并用公开搜索检索仓库全名、作者徐添润和开发机构组合。项目源以 [tinnel123666888/OmniJev 官方仓库](https://github.com/tinnel123666888/OmniJev)和[官方版本记录](https://github.com/tinnel123666888/OmniJev/blob/main/CHANGELOG.md)为准；仓库介绍 Qwen3.5 底座、0.8B/2B/4B，v1.1 为 2026-09-26 正式版。当前检索没有核实到可阅读且明确针对该仓库模型的知乎文章；这是本次检索范围的结果，不断言知乎绝无此类文章。

为排查同名混淆，实际阅读 [Datawhale《给 Jev 装上眼睛！多模态 Jev 部署教程发布！》](https://zhuanlan.zhihu.com/p/2090220072728016471)，2026-10-04 发布，查看时 2 赞同、5 收藏。它明确介绍开发者 Akhila 的 Jev-Omni、Gemma 4 12B 底座，与本项目不是同一个模型；没有加入 OmniJev 模型页。该文的部署测量也不是对 tinnel123 项目的实测。

另外阅读 [大模型爱好者社区《一文梳理 Jev 开源生态》](https://zhuanlan.zhihu.com/p/2087218714244658951)，2026-09-26 发布，查看时 65 赞同、142 收藏；它讨论 Laya、Kev、SemIf 等决策生态，而未见该 OmniJev 仓库的直接技术分析，因此也未作为该模型的直接来源。页面互动量会变化；没有将知乎搜索结果的 AI 自动摘要作为证据。

## 登录状态再次检索与补充阅读

2026-10-28 使用已登录知乎搜索 `OmniJev` 并对照项目仓库：搜索页的 AI 摘要将它与 `awesome-jev-gallery`、Jev-Omni 混同，不能作为 OmniJev 的直接来源。本轮仍未发现可核对到该项目的高质量中文文章。仓库地址为 <https://github.com/tinnel123666888/OmniJev>；不把同名或相近名项目的资料归入该模型。

转而检查另一篇资料较少的模型 DeepSeek-V3.2，搜索 `DeepSeek V3.2 DSA` 后阅读了绝密伏击的[《十分钟读懂 DeepSeek-V3.2 稀疏注意力 DSA》](https://zhuanlan.zhihu.com/p/1959636888123049941)。页面显示 266 赞同、562 收藏（2026-10-28）。正文实际介绍 V3.2-Exp 的 DSA，覆盖索引器、两阶段续训、成本和代码；把它作为补充阅读，并明确版本，正式 V3.2 的事实以[技术报告](https://arxiv.org/abs/2512.02556)为准。评论区对文章图示的注意力模式和计算位置提出了质疑，因此本项目不直接复用其中图示。
