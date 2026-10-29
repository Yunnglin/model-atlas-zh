# 四个模型的社区资料补查

核查日期：2026-10-28。本次补查通过网页搜索读取已索引内容；知乎文章直接访问返回 403，无法在当前环境核实新候选的完整正文与赞同、收藏，因此不新增推荐。下面引用的既有互动量来自先前站内核查，会随时间变化，不能代替事实核验。搜索未找到不等于资料不存在。

随后使用已有登录会话再次检索，已找到并阅读 M2.7 的补充测评；Stable Diffusion、Claude 与 OmniJev 的最新结果见[两篇候选补查](zhihu-sd-claude-recheck.md)和 [OmniJev 再检索](omnijev-zhihu-recheck.md)。本页保留首次检索的访问限制与过程。

## Stable Diffusion v1-4

- 搜索词：`site:zhihu.com Stable Diffusion 1.4 原理 模型 潜空间 扩散`。搜索返回[十分钟读懂 Stable Diffusion](https://www.zhihu.com/tardis/bd/art/600251419)，索引片段涉及潜空间和文本条件 U-Net，但未核实其完整正文、互动量及是否明确针对 v1-4，不作为新推荐。
- 此前已阅读的[小小将文章](https://zhuanlan.zhihu.com/p/617134893)为 1928 赞同、3087 收藏，侧重 v1.5，现有正文将其限定为共同结构的延伸阅读；不可将其训练细节直接套给 v1-4，见 [final-community-b.md](./final-community-b.md)。
- [v1-4 官方模型卡](https://huggingface.co/CompVis/stable-diffusion-v1-4)记载该检查点基于 v1-2 继续训练，并给出训练步骤及条件丢弃等版本细节；这些应以模型卡为准。

## Claude 初代

- 搜索词：`site:zhihu.com Anthropic Claude 初代 2023 constitutional AI 解读`。新搜索主要返回讨论 2026 年宪法的文章，不能作为初代模型的专门解读。先前查找同样没有确认符合版本、深度和互动数据要求的文章，详见 [final-community-b.md](./final-community-b.md)。
- 保留 [2023 年 Claude 发布介绍](https://www.anthropic.com/news/introducing-claude)、[2023 年宪法说明](https://www.anthropic.com/news/claudes-constitution)及 [Constitutional AI 论文](https://arxiv.org/abs/2212.08073)。研究方法可帮助理解背景，但不能据此断言初代 Claude 的完整生产训练流程。

## MiniMax M2.7

- 2026-10-28 后续补查：复用已登录浏览器，在知乎站内搜索并完整阅读 [toyama nao 的 M2.7 对比评测](https://www.zhihu.com/question/2017637087134901679/answer/2017745966883710514)，当时显示 229 赞同、57 收藏。文章按指令遵循、信息提取、代码与复杂推理比较 M2.7 和 M2.5，引用作者自己的逻辑题集；其观察受测试题目、采样与运行环境限制，不是架构或训练细节的一手依据。正文已将其加入受限的延伸阅读，与官方数据分开。

- 搜索词：`site:zhihu.com MiniMax M2.7 模型 训练 评测 解读`。[OpenCSG 的候选文章](https://zhuanlan.zhihu.com/p/2027396160847900959)的搜索索引提及自我进化和 100 轮迭代，但当前无法核对完整正文和互动数；其文字把模型优化脚手架与模型训练表述得容易混淆，暂不采用。
- [MiniMax 官方说明](https://www.minimax.io/news/minimax-m27-en)将 100 多轮和 30% 改善限定在内部脚手架优化及内部评测集，不代表模型权重自主更新，也不代表通用任务都提升 30%。此前阅读的 [302.AI 测评](https://zhuanlan.zhihu.com/p/2018038826556204239)为 0 赞同、2 收藏，样本有限且存在类似外推，详见 [final-community-b.md](./final-community-b.md)。

## OmniJev

- 搜索词：`site:zhihu.com OmniJev tinnel123666888 模型 讲解`；此前还查询 `OmniJev`、`OmniJev Qwen3.5` 等，未确认针对该项目的合适文章。项目依据仍为 [tinnel123666888/OmniJev](https://github.com/tinnel123666888/OmniJev)，其 README 的 v1.1 表格应与具体模型尺寸对应阅读。
- 此前检查的 [Datawhale Jev-Omni 教程](https://zhuanlan.zhihu.com/p/2090220072728016471)为 2 赞同、5 收藏，描述的是 Akhila 的 Jev-Omni，不能当作本站 OmniJev 的实现说明。详见 [remaining-community-1.md](./remaining-community-1.md)。
