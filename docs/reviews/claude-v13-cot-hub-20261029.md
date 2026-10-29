# 初代 Claude 标准版的同期社区资料与评测复核（2026-10-29）

## 知乎实读

在已登录 Chrome 阅读 [MegEngine Bot 的大模型热点论文解析](https://zhuanlan.zhihu.com/p/634161484)，发布于 2023-06-02；2026-10-29 页面显示 15 赞同、38 收藏。文章的 Chain-of-Thought Hub 一节明确提到 **Claude-v1.3**，将其列入 2023 年 5 月的多步推理对照。它是多篇论文汇总中的简短摘要，并非完整 Claude 架构、训练分析或独立复现实验；页面的“与 GPT-4 相当”等总结不能被扩大成所有任务均等。

## 一手评测与正文

对照研究者的 [Chain-of-Thought Hub 论文 v1](https://arxiv.org/html/2305.17306v1)第 2、3 节与表 1：作者使用少样本思维链提示并以最终答案准确率计分，自测的 GSM8K 得分为 `claude-v1.3` 81.8、`claude-instant-v1.0` 70.8；结果对应指定版本与论文评测，不是 Anthropic 官方服务保证，也不表示每一步推导都正确。[研究者的 MMLU 实现说明](https://github.com/FranxYao/chain-of-thought-hub/blob/main/MMLU/readme.md)明确 `claude-v1.3` 为完整能力版本，与轻量 Instant 区分。[Anthropic 首发说明](https://www.anthropic.com/news/introducing-claude)也区分 Claude 与 Instant，但没有公开完整参数或架构。

正文新增该同期具体评测及两条参考链接，清楚说明评测团队、模型版本、提示设置和结果边界。论文 v1 的 MMLU 结果为 74.8，而仓库后续榜单显示 75.6；本次未将不同快照混为一谈。没有实际调用模型或复现实验。

## 资料边界

这次找到明确对应标准版 v1.3 的知乎材料，但它只是论文摘要，不是完整技术专题；深入社区材料仍有缺口。已有[新智元的初代系列报道](claude-first-original-community-20261029.md)和[Constitutional AI 方法解读](claude-community-method.md)分别补充长文本和训练方法，不应将 Instant 演示、研究模型或后代模型当成 Claude-v1.3 的官方训练配方。

## 再次核对模型版本（2026-10-29）

对照 Anthropic 的 2023-03-14 首发介绍与 2023-05-11 上下文更新，核对 Claude / Claude Instant 的区分、9K 到 100K 的发布时间和 72K token／22 秒演示的 Instant 版本；正文没有将 100K 写成 3 月首发配置。再查 Chain-of-Thought Hub v1 第 2 节、表 1：少样本思维链、最终答案准确率，以及 Claude-v1.3 的 81.8 和 Claude-instant-v1.0 的 70.8 均对应原文。两者版本号也不同，正文补充不能将差值当作仅改变模型大小得到的受控结果。未运行模型或复现测试。
