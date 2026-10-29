# CLIP、Swin 和 SAM 型号与事实复核

核对日期：2026-10-28。核查三篇模型卡的代表规格及本轮涉及的结构、训练和评测说明；没有运行权重或复现论文数值，不能据此认为所有扩展任务已验证。

- [CLIP](../../src/content/docs/cv/clip.md)：对照[论文](https://arxiv.org/html/2103.00020)附录表 20 和 [ViT-B/32 公开配置](https://huggingface.co/openai/clip-vit-base-patch32/blob/main/config.json)，补充 224 输入、32 图块、两个 12 层编码器及 512 维投影；按公开配置估算双编码器和投影共约 1.51 亿参数，不把它当作单独视觉骨干。论文表 1 及附录表 11 给出的 ViT-L/14-336 零样本 ImageNet top-1 为 76.2。4 亿图文对不是逐条人工核验标签，归一化后的相似度也不是普遍校准概率。
- [Swin](../../src/content/docs/cv/swin.md)：对照[论文](https://arxiv.org/html/2103.14030) §3.2 与表 1、2、4 补充 T／S／B／L 分类设置约 29M／50M／88M／197M 及 Swin-T 四阶段 2／2／6／2 的块数；Swin-T 接入 Cascade Mask R-CNN 的完整系统表列 86M，不能与单一分类配置混为一谈。原文的 87.3 ImageNet、58.7／51.1 COCO 指标限定模型、数据与评测条件。
- [SAM](../../src/content/docs/cv/sam.md)：对照[论文](https://arxiv.org/html/2304.02643)附录 A 与[官方构建代码](https://github.com/facebookresearch/segment-anything/blob/main/segment_anything/build_sam.py)，补充 ViT-B／L／H 编码器的 12／24／32 层和宽度。论文对单一歧义提示预测三张候选；训练中多个提示使用额外第四个掩码 token，调用时输出选项仍看接口。ViT-H 编码器约 632M 的口径见[官方项目介绍](https://segment-anything.metademolab.com/)，完整模型包含其他模块。
- 既有中文社区资料见[知乎阅读记录](zhihu-reading.md)和视觉相关审校，本轮未重新核验互动数。
