# Janus-Pro 双路径教学图核查（2026-10-29）

对照 [Janus-Pro 论文第 2.1 节与 Figure 3](https://arxiv.org/html/2501.17811v1#S2.SS1)核查 `public/figures/janus-pro/overview.svg` 与[正文](../../src/content/docs/omni/janus-pro-model.md)：图像理解使用 SigLIP 与理解适配器，文字和视觉表示进入共享自回归主干；视觉生成使用单独的图像预测头和解码器。论文还描述图像生成 ID 的生成适配器；现有图注明省略该适配器与自回归循环，正文已解释逐个预测图像 token，不应把教学图看作完整实现。

本次用 Chromium 渲染本地 SVG 并目视检查，图中节点、箭头和图注均可见，SVG 的无障碍描述与图示主要路径一致。未发现需要修改的实际错误；未运行模型，也未检查其他 Janus 版本或重新阅读知乎材料。
