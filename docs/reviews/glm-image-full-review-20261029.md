# GLM-Image 专项审校

审校日期：2026-10-29。完整通读 [GLM-Image 正文](../../src/content/docs/cv/glm-image-model.md)；未运行生成或复现评测，海报、咖啡与排错案例为教学构造。

- **结构**：对照[官方模型卡](https://huggingface.co/zai-org/GLM-Image)与[官方仓库](https://github.com/zai-org/GLM-Image)，核对 GLM-4-9B-0414 初始化的 9B 自回归生成器、约 256 到 1K–4K 视觉 token、7B 单流 DiT 扩散解码器及字形编码。图生图参考路径与文本条件分开，VQ 表示与权重量化不同；模型整体 MIT、X-Omni VQ/ViT 权重 Apache-2.0 与仓库 Apache-2.0 分别记录。
- **训练**：官方模型卡确认分模块 GRPO 反馈，AR 侧重整体语义与美学、解码侧重细节与文字；公开资料未提供完整数据配比及可复现的全部训练参数。候选比较和样本设计是教学方案，并非声称复现官方训练。
- **评测与实践**：模型卡的 CVTG-2K Word Accuracy 0.9116 对比 Qwen-Image 0.8288、DPG-Bench 84.78 对比 88.32 已逐列核对；文本准确度不等于业务事实与排版正确。本次补充官方文生图示例 guidance 1.5、CPU 卸载的显存和速度取舍；示例为 1024×1152、50 步、seed 42，具体资源未实测。
- **配图**：检查[图片登记](../../src/content/data/figures.yaml)及[原创教学图](../../public/figures/glm-image/overview.svg)，文本/参考图条件、自回归生成、扩散与字形条件的走向符合模型卡简化范围；登记来源、非官方原图和 CC BY 4.0。Chromium 本地页面滚动加载后图片解码成功、替代文本存在；截图检查中文与箭头。
- **社区**：沿用 [2026-10-28 实读记录](new-models-community-logged-in.md)，Rocky Ding 的[图像模型综述](https://zhuanlan.zhihu.com/p/1975174691049189562)当时 95 赞、264 收藏，讨论自回归、扩散解码和后训练；两阶段 9B/7B 及模块化 GRPO 对照官方模型卡，文章中更细的训练与奖励细节不作为官方事实。本次未重读或更新互动量。
