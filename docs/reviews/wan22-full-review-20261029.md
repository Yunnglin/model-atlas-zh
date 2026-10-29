# Wan2.2 专项审校

审校日期：2026-10-29。完整通读 [Wan2.2 正文](../../src/content/docs/cv/wan22-model.md)，范围是 T2V/I2V-A14B 与 TI2V-5B；未运行模型或复现视频评测，猫和杯子的例子为教学构造。

- **结构**：对照[官方仓库](https://github.com/Wan-Video/Wan2.2)、[T2V-A14B 模型卡](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B)与 [TI2V-5B 模型卡](https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B)，核对约 27B 双专家与每步约 14B 激活、按噪声阶段接力、独立的 5B 密集模型和 VAE `4×16×16` 及分块后的 `4×32×32`。对照 [T2V 配置](https://github.com/Wan-Video/Wan2.2/blob/main/wan/configs/wan_t2v_A14B.py)、[采样代码](https://github.com/Wan-Video/Wan2.2/blob/main/wan/text2video.py)与 [TI2V 配置](https://github.com/Wan-Video/Wan2.2/blob/main/wan/configs/wan_ti2v_5B.py)，补充各模型层数、头数及默认采样，并说明 0.875 时间阈值不是步数百分比。
- **训练**：官方仓库及模型卡核对图像、视频数据分别增加 65.6%、83.2%，美学数据、双专家与验证损失；早期 Wan 报告是 2.1 背景，不能当成完整 2.2 训练报告。数据核查建议和案例均为教学方案。
- **评测**：核对官方 Wan-Bench 2.0 多维展示和专家组合验证损失的范围；没有将图表排名概括为通用结论。核对仓库 TI2V 的 1280×704、24 GB 显存示例，以及 T2V-A14B 的 80 GB 示例与卸载选项；未实测速度、显存或视频质量。
- **配图**：检查[图片登记](../../src/content/data/figures.yaml)与[原创简图](../../public/figures/wan22/overview.svg)：高低噪声专家依次更新同一状态，5B 是独立路线；标注教学图、官方依据及 CC BY 4.0。Chromium 本地正文滚动加载图片并解码成功，原始尺寸 1200×430，替代文本存在；截图检查中文和箭头。
- **社区**：复用 [2026-10-28 已登录浏览器实读记录](wan22-independent.md)，LittleNyima 的 [Wan2.2 代码解读](https://zhuanlan.zhihu.com/p/1933274999587841225)当时 60 赞同、57 收藏；文章涉及两个检查点、阶段切换与 VAE，其高低信噪比表述与官方模型卡及采样代码不一致，正文保留高噪声前期、低噪声后期。本次未重读或更新互动量。
