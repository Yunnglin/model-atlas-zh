# Kimi K3 专项审校（2026-10-29）

审校对象：`src/content/docs/nlp/kimi-k3.md`；依据 [技术报告 v2](https://arxiv.org/html/2607.24653v2)、[官方模型卡](https://huggingface.co/moonshotai/Kimi-K3) 和[配置文件](https://huggingface.co/moonshotai/Kimi-K3/blob/main/config.json)。

- **结构：完成。** 核对 2.8T 总参数、104B 激活参数、93 层、KDA 与 Gated MLA 的层数、路由专家与共享专家、视觉编码器及上下文长度；文章区分了 MoE 专家和其他层的功能。
- **训练：完成。** 对照报告第 3–4 节核对上下文逐步扩展、SFT、领域强化学习、蒸馏和量化感知后训练。补充九个教师策略如何指导学生生成的轨迹，并明确与 MoE 专家不同。
- **评测：完成。** 对照报告表 2 核对 Terminal-Bench 2.1、DeepSWE、BrowseComp 的数值，并保留 max 推理强度、框架选择、上下文压缩及非独立复现等比较条件。
- **配图：完成。** 浏览器实际加载并检查自绘教学图，图示表达三个不同作用方向，正文提供官方原图链接。报告许可及使用方式见 `kimi-official-figure-sources.md`。
- **社区参考：完成。** 2026-10-29 实读知乎[新智元对 Kimi K3 的技术报告解读](https://www.zhihu.com/question/2065214142915654338/answer/2065334385482659333)，页面显示 31 赞同、20 收藏。文章讨论 KDA 与 Gated MLA 混合、896 选 16 路由专家以及 MoonViT-V2；对照[官方报告第 2 节](https://arxiv.org/html/2607.24653v2)核实，并保持正文按配置统计的 69 层 KDA、24 层 MLA。文章把 KDA 定长递推状态说成彻底消除上下文内存问题，忽略 MLA 的历史缓存；正文明确整个模型缓存仍会受上下文长度影响。文中的整体排名和指数级提速等宣传性概括不当作已证实结论。

这份记录覆盖上述维度，并不代表模型运行、训练或基准测试已独立复现。
