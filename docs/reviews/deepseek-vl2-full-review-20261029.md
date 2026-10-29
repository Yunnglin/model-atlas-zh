# DeepSeek-VL2 全文审校

审校日期：2026-10-29。通读 [正文](../../src/content/docs/omni/deepseek-vl2-model.md)，范围是 2024 年 DeepSeek-VL2 三个规格；未运行模型、训练或复现评测。

- **结构与模型卡**：对照[技术报告](https://arxiv.org/html/2412.10302)第 2 节和表 2，核对 SigLIP、动态分块及全图缩略块、27×27 特征整理成 14×14、Tiny 的 MHA 与 Small/大规格的 MLA。语言模型总参数与包含视觉编码器的激活参数口径分开；1×2 局部块的 617 视觉 token 为教学算例。对照[官方仓库](https://github.com/deepseek-ai/DeepSeek-VL2)补充三个规格均列出 4096 序列长度、代码和模型各自许可及商业使用说明。
- **数据与训练**：对照论文第 3、4 节及表 2，核对三个阶段、图文与纯文本数据比例、各阶段冻结范围；补充 Small 三阶段的训练 token 量、视觉编码器学习率倍率以及 SFT 仅监督回答与特殊标记。token 处理量不等同去重后数据量，训练例子不是实测。
- **评测与应用**：论文表 3 的 Small DocVQA 92.3 与 ChartQA 84.5 及测试集口径和正文一致；InfoVQA 使用更高分块上限。正文区分数据集与指标，并用构造的发票错例说明文本识别、字段关联与后处理的不同失败来源。
- **配图**：核对 [图登记](../../src/content/data/figures.yaml)与[教学图](../../public/figures/deepseek-vl2/overview.svg)，在本地页面用 Chromium 加载并目视检查，文字和箭头清楚；图省略路由和空间分隔细节，非官方架构图，替代文本可用。
- **知乎**：2026-10-29 由主审通过已登录 Chrome 阅读 Linsight 的[《面试官让我讲一下 DeepSeek-VL2 的细节》](https://zhuanlan.zhihu.com/p/26481250405)，当时 20 赞同、29 收藏。文章讲动态切图、全图缩略、SigLIP 与适配器、三阶段训练和 Tiny MHA 与较大版本 MLA 的区别；对照论文第 2、4 节与表 2 后采用相应解释。其效率观点为推断，训练和评测数字以论文为准；赞藏数是阅读时快照。

## 评测数字逐项核对

- [技术报告表 3](https://arxiv.org/html/2412.10302#S4.SS1)中 DeepSeek-VL2-Small：DocVQA test 92.3、ChartQA test 84.5；这两个测试集分数不能解释成通用 OCR 准确率。表中 InfoVQA 为 test，TextVQA 为 val，不能把不同数据集的数字混作同一量纲。
- 报告第 4 节注明 InfoVQA 评测允许更高图像切块上限，比较时需结合分辨率和切块设置；未复现评测。
