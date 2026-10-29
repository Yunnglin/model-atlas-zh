# Claude 与 Constitutional AI 的公开边界

核对日期：2026-10-28。本次检查首代 Claude 的发布与上下文信息，以及 Constitutional AI 研究中的反馈来源和评测口径；未复现研究实验。

- [Claude 首发介绍](https://www.anthropic.com/news/introducing-claude)发表于 2023 年 3 月 14 日，介绍 Claude 和 Claude Instant；未披露首代的完整架构和参数。
- [2023 年上下文更新](https://www.anthropic.com/news/100k-context-windows)称从 9K 扩展至 100K；页面将其描述为当时的服务更新，而不是首日所有型号的固定配置。
- [Constitutional AI 论文](https://arxiv.org/html/2212.08073)第 1.3、1.4 和 3.3 节显示：无害性偏好使用 AI 标签，有帮助性偏好使用人类标签，评测通过人工比较计算相对 Elo。已在正文说明混合标签与评测边界，不能把研究模型的 52B 参数归给首代 Claude。

公开论文有助于理解训练思路，但不能证明每代 Claude 的完整训练配方。知乎精确对应首代的资料仍未核实，现有范围见[社区参考盘点](community-coverage.md)。
