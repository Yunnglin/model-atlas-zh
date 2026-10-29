# QwQ-32B-Preview 专项审校

审校日期：2026-10-29。完整通读 [QwQ 预览版正文](../../src/content/docs/nlp/qwq-preview-model.md)，不与 2025 年 QwQ-32B 混同；未运行模型或复现评测，折扣和测试流程为教学构造。

- **结构**：对照[官方模型卡](https://huggingface.co/Qwen/QwQ-32B-Preview)和[配置](https://huggingface.co/Qwen/QwQ-32B-Preview/blob/main/config.json)，核对 32.5B、64 层、40 查询头和 8 KV 头、RoPE、SwiGLU、RMSNorm、32768 上下文及 Apache 2.0；逐步生成的推理文本不等于外部计算。
- **训练**：模型卡列预训练与后训练，[发布说明](https://qwenlm.github.io/blog/qwq-32b-preview/)未披露可复现的预览版完整数据与算法；正文以一般 SFT/RLVR 为技术背景，不把后续版本配方倒推为该检查点事实。
- **评测**：发布说明核对 GPQA 65.2、AIME 50.0、MATH-500 90.6、LiveCodeBench 50.0；各任务与未详细列出的采样条件分开。本次补充模型卡旧版示例 `max_new_tokens=512` 的输出上限与完整上下文、复杂题预算区别，并建议统计正常结束和截断。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)和[原创图](../../public/figures/qwq-preview/overview.svg)，输入、因果生成、答案与外部程序或人工核验的流程一致，图注明简化及 CC BY 4.0。Chromium 本地正文滚动后图片成功解码、宽 1200，有替代文本；截图检查中文和箭头。
- **社区**：沿用[2026-10-28 实读记录](qwq-preview-independent.md)，孔某人的[工作流体验](https://zhuanlan.zhihu.com/p/9761811540)当时 51 赞、51 收藏，讨论文字改错中调整提示及输入长度；数据与方案未公开，不能作通用排名。模型身份、限制与评测仍对照官方发布和模型卡，本次未重读或更新互动量。
