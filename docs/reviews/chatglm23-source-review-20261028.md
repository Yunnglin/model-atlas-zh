# ChatGLM2 / ChatGLM3 内容核对

核查日期：2026-10-28。新增两代独立文章、时间线节点和共用骨干教学图。两篇都以各自默认 6B 对话检查点为中心，区分官方仓库中的 Base 和长文本版本。

- 模型结构：对照 [ChatGLM2 官方配置](https://huggingface.co/zai-org/chatglm2-6b/blob/main/config.json) 与 [ChatGLM3 官方配置](https://huggingface.co/zai-org/chatglm3-6b/blob/main/config.json) 中的 28 层、32 查询头、2 组键值头和每头 128 维；默认配置长度分别是 32768 和 8192。BF16 8192 token 的缓存是依据这些参数计算的教学估算，未加载权重实测。
- 训练与评测：对照 [ChatGLM2 官方仓库](https://github.com/zai-org/ChatGLM2-6B) 的 1.4T token、对话长度、MMLU 和推理测试条件；[ChatGLM3 仓库](https://github.com/THUDM/ChatGLM3) 的 Base、长文本版本及 LongBench 表；[技术报告](https://arxiv.org/abs/2406.12793)表 1 确认二代与三代发布时间。
- 工具格式：对照 [ChatGLM3 格式说明](https://github.com/zai-org/ChatGLM3/blob/main/PROMPT_en.md) 的 assistant、工具名称及 observation 示例；本轮未运行模型或调用天气工具。
- 社区交叉阅读：[元图：ChatGLM、ChatGLM2、ChatGLM3 模型架构对比](https://zhuanlan.zhihu.com/p/665531989)，阅读时 100 赞、248 收藏。文章打印二代、三代的 28 层和 4608 维 QKV 投影；官方配置的 `32×128 + 2×128×2 = 4608` 与之吻合。文章认为二代和三代模型结构一致，本轮仅确认上述配置和列出的模块形状，不把它扩大为训练数据、权重或所有实现行为一致。对初代 GLU 属于“修复 bug”的推测不作为事实采用。
- 图示：依据官方配置绘制教学简图，本地 SVG 已解析并用 Chromium 渲染检查；图中的外部工具路径专指三代按需调用，不等于模型自己执行工具。

本次未重现训练、模型推理和论文分数；商业许可采用官方仓库公开说明，具体应用仍以对应版本的许可为准。
