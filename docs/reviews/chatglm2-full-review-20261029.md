# ChatGLM2-6B 专项审校

审校日期：2026-10-29。范围为 [ChatGLM2-6B 正文](../../src/content/docs/nlp/chatglm2-model.md)，通读全文，未运行模型或复现测试；客服案例与缓存计算为教学示例。

- **结构**：核对[官方配置](https://huggingface.co/zai-org/chatglm2-6b/blob/main/config.json)及[仓库](https://github.com/zai-org/ChatGLM2-6B)的 28 层、4096 宽、32 个查询头、2 组 KV、每头 128 维与 32768 配置。以 8192 token、batch 1、每值 2 字节计算，`28×2×2×128×8192×2` 字节为 224 MiB；仅包含 KV 缓存。本次补充历史缓存只能在对应前缀保持一致时复用的例子。
- **训练**：仓库核对混合目标、约 1.4T 中英文 token、人类偏好对齐、基础上下文扩至 32K、对话阶段 8K 及另发布 32K 检查点；对齐具体训练数据和超参数没有臆测。混合目标和对话因果掩码分别表述。
- **评测**：官方仓库表核对 MMLU 40.63/45.46/47.86，C-Eval 50.1/51.7，以及 Chat zero-shot CoT 和 Base few-shot answer-only 条件。补充 C-Eval 数字与系列报告表 1 的 MMLU 45.2 不应直接混用。速度表核对 A100-SXM4-80G、BF16、batch 1、最长 2048、2000 字符及 PyTorch 2.0.1；31.49 和 44.62 为字符/秒，不是 token/秒。
- **配图**：核对[登记](../../src/content/data/figures.yaml)及[教学图](../../public/figures/chatglm23/backbone.svg)：输入模板、28 层、32 查询头共享 2 组 KV、逐步生成的主线与配置一致，图内注明工具流程属于三代；注明出处、CC BY 4.0。Chromium 打开本地页面滚动加载图片并确认可解码、有替代文本，截图检查中文与箭头。
- **社区**：沿用 [2026-10-28 知乎实读记录](chatglm23-source-review-20261028.md)，元图的[三代架构对比](https://zhuanlan.zhihu.com/p/665531989)当时 100 赞同、248 收藏；文章打印的 28 层及 4608 维 QKV 投影与 `32×128 + 2×128×2` 的官方配置一致。不同代参数形状相近不证明权重、训练数据或所有行为一致；文章关于初代 GLU 的推测没有作为事实。本轮未重新读取或核对实时互动数。
