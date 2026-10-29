# Qwen3.6-27B 图示与正文核查

核查日期：2026-10-28。根据[官方模型卡](https://huggingface.co/Qwen/Qwen3.6-27B)的 Model Overview、Benchmark Results、Serving 与 Preserve Thinking 章节核对下列内容。

- 模型卡描述的是 27B 语言部分，64 层按 16 组重复：每组依次为三层 Gated DeltaNet 和一层 Gated Attention，各层搭配前馈网络。教学图已画出这一层组及视觉输入、文本输入、工具请求与外部执行结果，省略各层内部细节。
- 官方说明 Qwen3.6 不支持 `/think`、`/nothink` 软开关；可通过服务参数设置 `enable_thinking`。默认仅保留处理最近用户消息时产生的思考内容；`preserve_thinking` 可启用历史消息思考内容保留。正文增补了这一区别。
- 官方模型卡中 27B 的 SWE-bench Verified 为 77.2，3.5-27B 为 75.0，Terminal-Bench 2.0 为 59.3；评测框架与采样条件在页面中注明。
- 以 Playwright 在 Chromium 中打开本地图并渲染检查过文字、连线和箭头；模型页的响应式布局未在本次检查。

本地模型页 SHA-256：`cb78df7cddc9bdebdc26bee2e77112dbab6df7d74696893cfb540c97ea2504ec`。教学图 `public/figures/qwen36/overview.svg` 的 SHA-256：`380b021098f8e59d90c5d51af0bcc58daa8930f4c13995ae05a720e305abeb70`。图为原创教学示意，非官方原图；依据与许可见[资产记录](../assets.md)。

未运行模型，也未核对权重数值、完整训练配方或所有外部文章。此前 [追踪记录](evidence-followup-20261028.md) 的正文哈希对应当时的旧版本。
