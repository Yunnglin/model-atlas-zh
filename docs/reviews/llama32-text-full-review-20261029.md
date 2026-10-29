# Llama 3.2 轻量文本模型专项审校

审校日期：2026-10-29。完整通读 [1B/3B 文本模型正文](../../src/content/docs/nlp/llama32-text-model.md)，区分原始与 Meta 指定量化权重；未运行模型或复现端侧评测。

- **结构**：对照[官方发布说明](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)及[模型卡](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md)，核对 1B/3B 文本输入输出、GQA、共享嵌入、原始 128K 与所列量化版本 8K、支持语言及许可；与图像分支分别说明。
- **训练**：官方说明核对从 3.1 8B 单次结构化剪枝、使用 8B/70B logits 蒸馏以及后训练的 SFT、拒绝采样、DPO；公开资料未完整披露可重建配方，备忘录和教师概率为教学例子。
- **评测**：模型卡核对英文 MMLU 和 IFEval，及 OnePlus 12、ARM CPU、ExecuTorch 指定条件下的 BF16/SpinQuant 速度和 64 token 首字延迟；本次补充 1B BF16、SpinQuant、量化感知训练加 LoRA 的 MMLU 对照，不将结果推到中文或其他设备。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/llama32-text/overview.svg)，8B 剪枝、小模型、教师 logits 蒸馏和后训练顺序与官方说明一致，图注明简化及 CC BY 4.0。Chromium 本地正文滚动加载图片成功、有替代文本，截图检查中文及箭头。
- **社区**：沿用[2026-10-28 实读记录](llama32-text-community-20261028.md)，刀刀宁的 [Llama 3.2 导读](https://zhuanlan.zhihu.com/p/730549847)当时 18 赞、17 收藏，介绍结构化剪枝和蒸馏；已与官方说明交叉核对 8B 是剪枝起点、8B/70B 是蒸馏教师，不推导任意手机均能处理 128K。本次未重读或更新互动量。
