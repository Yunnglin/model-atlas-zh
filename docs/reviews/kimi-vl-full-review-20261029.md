# Kimi-VL 专项审校

审校日期：2026-10-29。完整通读 [Kimi-VL 正文](../../src/content/docs/omni/kimi-vl-model.md)，以初版 Instruct 和 Thinking 为主并区别 Thinking-2506；未运行模型或复现评测，账单、图片大小和视频案例为教学构造。

- **结构**：对照[技术报告第 2.1 节](https://arxiv.org/html/2504.07491)及 [Instruct 配置](https://huggingface.co/moonshotai/Kimi-VL-A3B-Instruct/blob/main/config.json)，核对 MoonViT 的变分辨率、二维位置信息、2×2 合并及 MLP 映射、Moonlight 语言主干约 16B 总参数和 2.8B 激活参数。224×224 的 patch/合并位置数属于去除边界等细节的教学算例；128K 不等于所有内容均能被准确识别。
- **训练**：对照报告第 2.3–2.4 节和表 1 核对 MoonViT 的 2T 加 0.1T 对齐、Moonlight 中间检查点的 5.2T、联合训练及冷却和长上下文 1.4T/0.6T/0.3T。新增两种视觉训练目标的图文教学例子：SigLIP 风格配对与图片条件描述生成，报告给描述损失权重 2；视觉训练用文本解码器与最终 Moonlight 语言主干区分。Thinking 长思维链监督与强化学习按报告描述，不推断全部配方。
- **评测**：对照报告表 3 与附录 B，核对 InfoVQA 的 83.2 与 ANLS 计分，区分文档图、视频和屏幕定位任务。账单字段/计算分组和视频抽帧固定条件为建议方案，非模型实测；屏幕定位不等于外部动作执行成功。
- **配图**：核查[图示登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/kimi-vl/overview.svg)的图片/视频帧、MoonViT、合并和投影、MoE、文本输出流向，简化程度、来源和 CC BY 4.0 已注明。Chromium 本地页面打开后滚动并解码图片成功（宽 1060）、替代文本存在，截图目视检查中文及箭头。
- **社区：完成。** 2026-10-29 浏览器实读知乎作者 [tomsheep 的 Kimi-VL 论文解读](https://zhuanlan.zhihu.com/p/1894448044679865056)，页面显示 48 赞同、64 收藏。文章解释 MoonViT 可变尺寸 patch、空间合并与 MLP 映射，也区分 Thinking 版本的额外长思维链训练；与[技术报告第 2.1、2.4 节](https://arxiv.org/html/2504.07491)核对后正文保留这些机制。文章前面的“无须切割成固定大小的小块”与后文“仍切成 patch”表述不一致；正文明确仍分块，而不是将原生分辨率理解为不分块。文章伪代码为示意，不能作为实现依据。

## 评测数字逐项补证（2026-10-29）

- [Kimi-VL 论文表 3 和附录 B.1](https://arxiv.org/html/2504.07491)：表中 Kimi-VL-A3B 的 InfoVQA 为 83.2，附录明确使用测试集 ANLS。表格标注 Acc，但正文保留 ANLS 的说明，避免误解为逐字准确率；这是初版模型列，并非 Thinking-2506 的成绩。
