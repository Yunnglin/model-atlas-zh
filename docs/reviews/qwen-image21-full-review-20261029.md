# Qwen-Image-2.1 专项审校

审校日期：2026-10-29。完整通读 [Qwen-Image-2.1 正文](../../src/content/docs/cv/qwen-image21-model.md)，未运行模型或复现评测；咖啡杯和海报为教学构造。

- **结构**：对照[官方仓库架构](https://github.com/QwenLM/Qwen-Image-2.1#architecture)和[模型卡](https://huggingface.co/Qwen/Qwen-Image-2.1)，核对约 7B、32 层单流 DiT、Qwen3-VL-8B 条件编码器、64 通道 RGBA VAE 和 16 倍空间压缩、文字因果及图像块内双向注意力。7B 不等于整套系统参数，最多十张参考图不能解释为质量保证。[许可原文](https://huggingface.co/Qwen/Qwen-Image-2.1/blob/main/LICENSE)区分非商业研究与商业用途。
- **训练**：模型卡及官方仓库没有给出完整训练数据、阶段与配方；正文区分通用编辑/流匹配教学案例与官方披露，不将初代模型训练当作 2.1 配方。
- **评测与实践**：模型卡核对 2048×2048、40 步、种子 42 的示例及 RGBA 提示；将示例与实际测试区分，正文的文字、主体一致性、透明边缘与资源分组是建议方案而非实测。补充模型卡 CPU 卸载及主机内存和传输开销的取舍，避免把显存等同全部资源。
- **配图与实现**：检查[登记](../../src/content/data/figures.yaml)、[原创简图](../../public/figures/qwen-image21/overview.svg)以及[官方仓库前缀缓存说明](https://github.com/QwenLM/Qwen-Image-2.1#prefix-kv-cache)：固定文字、参考图片和 VAE 条件进入 DiT，采样后 VAE 解码；图注明简化、来源和 CC BY 4.0。补充默认 `causal_condition: true` 下跨去噪步骤复用条件缓存及输入变化需重建的边界。Chromium 本地正文滚动加载后图片解码成功（1200×460）、替代文本存在，截图检查中文与箭头。
- **社区**：沿用 [2026-10-28 实读记录](qwen-image21-ncnn-community-20261028.md)，nihui 的 [ncnn 部署实践](https://zhuanlan.zhihu.com/p/2088230771794371280)当时 163 赞、237 收藏，讨论分阶段加载、主机权重与 KV 缓存；与[其项目仓库](https://github.com/nihui/qwenimage-ncnn-vulkan)及官方模型卡交叉核对，2GB 显存说法不等于总内存或所有设备速度。文章是第三方实现作者的说明，不是官方运行时或独立复现；本次未重读或更新互动量。
