# Qwen-Image-Edit 2509 / 2511 推理代码补充核查

2026-10-28 对照两版官方模型卡、Qwen 官方仓库与 [Diffusers 固定版本 c60830ee](https://github.com/huggingface/diffusers/blob/c60830ee365d520ab52b110dda562dd26f7b4d7f/src/diffusers/pipelines/qwenimage/pipeline_qwenimage_edit_plus.py)。

- 两版模型卡均标 20B、Apache 2.0。2509 模型卡介绍多图与通过图像拼接进一步训练；2511 卡列出人物一致性、图像漂移及部分社区 LoRA 效果整合。2511 官方仓库记录 2025-12-23 发布。
- 固定版本的推理管线为多图分别准备视觉语言条件图像与 VAE 图像。视觉语言编码器处理图像与指令；VAE 逐图编码并沿序列维度拼接。采样循环将生成潜变量和参考图潜变量拼接，输出截取生成部分，并由调度器更新。新教学图体现这些推理数据流，训练样本具体拼接方式没有从推理代码推断。
- 2511 官方示例设置 40 步、`true_cfg_scale=4.0` 并提供空格负向提示。所核对 Diffusers 代码在该条件下每步计算正、负两个 Transformer 前向，因此完整执行为 80 次调用；步数和前向调用次数各有定义，执行中断或其他实现不在此算例中。
- 2509 的知乎参考见[此前实读记录](qwen-image-edit-2509-community-20261028.md)，2511 中文官方介绍见[此前实读记录](qwen-image-edit-2511-community-retry.md)。本轮未重新读取知乎互动数；官方中文文章不是第三方量化评测。
- 新增图为原创教学示意，两篇文章共用；已验证 SVG 解析与 Chromium 渲染。此轮未执行模型推理或复现实验，也未修改登记的模型图和共享 YAML。
