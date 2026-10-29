# DeepSeek-V2.5 专项审校

审校日期：2026-10-29。完整通读 [V2.5 正文](../../src/content/docs/nlp/deepseek-v25-model.md)，对照官方模型卡与配置；未运行模型或复现评测，订单和代码为教学构造。

- **结构**：对照[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V2.5)、[配置](https://huggingface.co/deepseek-ai/DeepSeek-V2.5/blob/main/config.json)和 [V2 报告第 2 节](https://arxiv.org/html/2405.04434v5)，核对 60 层、首层稠密、160 个路由专家选择 6 个加 2 个共享专家、128 查询头及 MLA 配置。补充单序列 8192 token、BF16 的 540 MiB 压缩缓存估算，仅在实现缓存 512 维潜变量与 64 维位置键时成立，不包含权重与额外分配。
- **训练**：模型卡说明整合 V2-Chat 与 Coder-V2-Instruct 能力，并未披露完整数据、融合或后训练配方；V2 报告的初代训练被限定为系列背景，教学用订单样本不表示官方数据。
- **评测**：模型卡表格核对 HumanEval Python 84.5/87.2/89、LiveCodeBench 36.6/39.7/41.8、SWE-verified 的 Coder-V2 19 与 V2.5 16.8；区分不同任务及未公开的全部评测条件。FIM 特殊标记与工具请求、外部执行和工具结果返回按官方示例核对；示范业务通过率不是实测。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)及[原创教学图](../../public/figures/deepseek-v25/overview.svg)，模型生成、外部执行及结果返回方向与模型卡示例一致，标明教学简图和 CC BY 4.0；Chromium 打开本地正文并滚动加载，图片解码成功、宽 1200、替代文本存在，截图检查中文和箭头。
- **社区**：沿用 [2026-10-28 实读记录](deepseek-new-community-logged-in.md)，OneFlow 编译、bind 原文的 [V2.5 介绍](https://www.zhihu.com/question/666358134/answer/4391090664)当时 7 赞同、3 收藏，讨论聊天与代码统一接口及成本；其价格和最优判断不能推广。与官方 HumanEval、LiveCodeBench 和 SWE-verified 表交叉核对，统一后并非每项指标都上升。本次未重读文章或更新互动量。
