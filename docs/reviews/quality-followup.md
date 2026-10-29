# MiniMax 系列深度与重复性复核

核对日期：2026-10-27。浏览了 M2.1、M2.5、M2.7 三篇文章，并用模型文档段落的完全相同文本扫描辅助查找重复；此扫描不能发现改写后的模板内容，也不构成对 96 篇文章的逐篇审校。三篇均有模型卡、模型结构、训练、评测、案例、面试题和参考资料，仍有继续改善可读性和核对所有细节的空间。

- M2.1：按[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.1)和[官方后训练介绍](https://www.minimax.io/news/post-training-experience-and-insights-for-agent-models)，补充 GQA 的头数算例和 CISPO 裁剪的教学例子，明确该例中的上限只是演示，不保证整个模型更新有固定上界。
- M2.5：回查[系列技术报告](https://arxiv.org/html/2605.26494)第 6.2.5 节，原文将“最高 40 倍”简写成“约 40 倍”容易误认为平均值；修正并补充共享前缀的操作说明。系列报告后于 M2.5 发布，不以此断言初版使用后来所有的工程优化。
- M2.7：对照[官方配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/raw/main/config.json)、[官方发布](https://www.minimax.io/news/minimax-m27-en)和系列技术报告，补充 GQA、FP8 配置、基座与后训练数据口径及 CISPO，并说明官方内部评测“提升 30%”未交代充分基线和计算方法，不能擅自换成 30 个百分点。

本轮未运行模型、训练或测评；示例为教学构造。知乎资料以已有 [筛选记录](zhihu-reading.md) 为准，M2.5 仍缺可靠的优质技术解读。
