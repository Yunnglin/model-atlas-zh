# GLM-OCR 专项审校

审校日期：2026-10-29。完整通读 [GLM-OCR 正文](../../src/content/docs/omni/glm-ocr-model.md)，未运行模型或复现评测；发票、字段 F1 和错例是教学构造。

- **结构**：对照[技术报告第 2.1 节](https://arxiv.org/html/2603.10910v2)、[模型卡](https://huggingface.co/zai-org/GLM-OCR)和[配置](https://huggingface.co/zai-org/GLM-OCR/blob/main/config.json)，核对 0.4B CogViT、0.5B GLM、连接器、视觉前缀、16/8 头和 131072 位置；区分布局检测后分区解析与整图关键字段提取。报告 MTP 的训练预测 10 token、实验平均每步 5.2 token 和约 50% 吞吐提升，分别保留训练、推理及实现条件。
- **训练**：报告第 2.2 节及表 1、2 核对视觉编码器训练、图文预训练及引入 MTP、SFT、GRPO；区分文字编辑距离、公式 CDM、表格 TEDS 和字段 F1/JSON 验证等奖励。本次补充三字段中两项匹配的精确率、召回率和 F1 算例，强调字段匹配规则是教学假设。
- **评测**：报告表 4 核对 OmniDocBench v1.5 综合 94.62、GLM-OCR 文字编辑距离 0.040/表格 TEDS 93.96、PaddleOCR-VL-1.5 0.035/92.76；综合分与各项指标不等于业务准确率。案例为评测建议，不是实测。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/glm-ocr/overview.svg)，图明确版面分区解析和整页字段抽取两条流程；非官方逐层图、来源与 CC BY 4.0 已登记。Chromium 本地正文滚动加载后图片解码成功、替代文本存在；截图检查中文与箭头。
- **社区**：沿用[2026-10-28 实读记录](remaining-community-1.md)，魔搭社区的[GLM-OCR 实战教程](https://zhuanlan.zhihu.com/p/2009615350375929849)当时 15 赞、44 收藏，介绍 SDK、推理服务与微调入口；其中 SDK 和微调任务范围对照[官方仓库](https://github.com/zai-org/GLM-OCR)及报告第 4 节，示例依赖版本需独立核实。教程属生态平台实践材料，非独立准确率评测；本次未重读或更新互动量。
