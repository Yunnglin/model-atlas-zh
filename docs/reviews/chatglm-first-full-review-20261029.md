# 初代 ChatGLM-6B 专项审校

审校日期：2026-10-29。范围为 [ChatGLM 正文](../../src/content/docs/nlp/chatglm.md)中的初代 6B；原始 GLM 填空用于解释背景，未将其视为完整 ChatGLM 架构。未运行模型或复现评测。

- **结构**：对照[原始 GLM 论文](https://arxiv.org/html/2103.10360)、[初代配置](https://huggingface.co/zai-org/chatglm-6b/blob/main/config.json)及[官方仓库](https://github.com/zai-org/ChatGLM-6B)，核对原始填空的上下文和生成方向，以及初代 28 层、4096 隐藏宽度、32 头与 2048 位置。说明 ChatGLM2 的因果掩码与 MQA 属于另一代。
- **训练**：对照官方仓库及[ChatGLM 技术报告](https://arxiv.org/html/2406.12793)第 1、2 节，核对初代约 1T 中英文 token、上下文 2048，以及初代对齐主要使用 SFT、早期提示和回答主要由开发者标注；仓库列出的多种后训练技术不等于公开了某检查点的完整顺序与比例。
- **评测**：技术报告表 1 核对初代与 ChatGLM2 的 MMLU 25.2/45.2 和 C-Eval 23.7/51.7。本次补入分数与代际差异，提示固定测试协议及不能将差距归因单一变更；报告未在该表详细列出所有测评细节。客服例子为教学构造。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/chatglm/overview.svg)，图将原始填空、ChatGLM 对话分为两行，并明确不是完整网络图，来源和 CC BY 4.0 已登记。Chromium 本地正文加载图片成功（宽 1060），替代文本存在；截图中中文和箭头可读。
- **社区**：复用 [2026-10-28 实读记录](remaining-community-3.md)，无涯的[《ChatGLM-6B是如何生成回复的？》](https://zhuanlan.zhihu.com/p/617929228)当时 339 赞同、743 收藏，讨论初代聊天接口、历史拼接和注意力掩码。其调用顺序与初代仓库对应，版本相关 API 不推广到后续代；本次未重新读取或核对互动数。
