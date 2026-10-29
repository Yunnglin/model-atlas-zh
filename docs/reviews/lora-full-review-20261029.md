# LoRA 训练技术审阅

审阅日期：2026-10-29。逐段核对 `src/content/docs/training/lora.md` 的原理、数值例子、训练与评测方案、配图及社区参考；未运行模型或实际微调。

## 原理与资料

- [LoRA 原论文第 4.1 节](https://arxiv.org/html/2106.09685)：冻结基座、低秩更新、A 随机／B 置零初始化以及 α/r 缩放。正文明确低秩限制的是更新而非原始矩阵，且 LoRA 参数化可与不同训练目标配合；第一步 A 的损失梯度为零的推导见 [LoRA 与 SFT 复核](lora-sft-followup-20261028.md)。
- [QLoRA 论文](https://arxiv.org/abs/2305.14314)和 [PEFT 文档](https://huggingface.co/docs/peft/en/developer_guides/checkpoint)：量化基座冻结并训练适配器；`merge_and_unload()` 的返回对象不再保留适配器切换功能。
- [DoRA 论文表 6](https://arxiv.org/html/2402.09353)：正文的 LLaMA-7B 74.7、78.1、77.5 及 0.83%、0.84%、0.39% 与该表一致，正文注明比较设置。另在参考资料中增加论文入口，避免读者只能从段落中找到。

## 例子与评测

- 4096×4096、秩 8 的两块矩阵共 65536 个参数；两个目标投影、32 层共 4194304。Qwen2-7B-Instruct 的 [配置](https://huggingface.co/Qwen/Qwen2-7B-Instruct/blob/main/config.json)有 28 层、3584 隐藏宽度、28 查询头和 4 KV 头；结合 [Transformers 4.41.2 实现](https://github.com/huggingface/transformers/blob/v4.41.2/src/transformers/models/qwen2/modeling_qwen2.py)，Q、V 的秩 8 参数分别为 57344、32768，28 层总计 2523136。例子未声称是官方训练配方。
- 工单字段、业务拆分、资源测量、合并前后比较与错误分析均是建议方案；LoRA、QLoRA 和全参对照需固定基座与任务，并记录资源及训练／推理阶段。

## 配图

- `public/figures/training/lora-sft.svg` 是原创简图，依据和 CC BY 4.0 许可见 `docs/assets.md` 与 `public/figures/LICENSE-TEACHING.txt`。图明确只显示选中一层；冻结权重与 LoRA 支路合并，损失只更新该例的 LoRA 矩阵。
- Chromium 访问本机 `/training/lora/`：图片滚动后加载为 1120×440，替代文本存在；截图目视核对连接、文字与方向。

## 社区

- [猛猿：图解 LoRA 原理](https://zhuanlan.zhihu.com/p/646831196) 于 2026-10-27 实读时为 956 赞、1054 收藏，阅读与交叉核对记录见 [训练方法的知乎参考核查](training-community.md)。部分子空间解释是作者推测；反向传播必须物化完整更新矩阵和显存开销相同的泛化结论不采纳，公式与实现以论文和使用的框架为准。正文保留阅读链接，未复制文章配图。

后续补充核查：[lora-sft-numerical-followup-20261029](lora-sft-numerical-followup-20261029.md)、[training-coverage-followup-20261029](training-coverage-followup-20261029.md)。

后续补充：[公式与算例定向复核](sft-lora-grpo-math-check-20261029.md)。
