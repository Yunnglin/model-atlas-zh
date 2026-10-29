# 初代 Qwen-VL 五维审校

审阅日期：2026-10-29。范围是 [初代 Qwen-VL 正文](../../src/content/docs/omni/qwen-vl-first-model.md)，包括多任务预训练后的 Qwen-VL 和指令微调后的 Qwen-VL-Chat；未实际运行模型或复现论文基准。完整通读正文并对照以下资料，例子均为教学构造。

- **结构**：[论文 v3 第 2 节及表 1](https://arxiv.org/html/2308.12966v3#S2)核对三个模块、ViT-bigG 与 Qwen-7B 初始化、1.9B / 0.08B / 7.7B 参数、14 像素步长、位置感知交叉注意力和 256 个固定输出。附录 C 核对 448 输入时视觉序列长度 1024；[附录 E.4](https://arxiv.org/html/2308.12966v3)说明底座为中间检查点。正文坐标范围改为论文中的 [0, 1000)，避免误读为包含 1000。[模型卡](https://huggingface.co/Qwen/Qwen-VL-Chat)和[许可](https://github.com/QwenLM/Qwen-VL/blob/master/LICENSE)核对权重和协议。
- **训练**：[论文第 3 节及表 2、3](https://arxiv.org/html/2308.12966v3#S3)核对三个阶段的训练目标、训练模块及冻结策略、224/448 输入、数据类型、5B / 1.4B 和 350k 数据口径；[附录 C 表 8](https://arxiv.org/html/2308.12966v3)核对 30720 批大小及 50000 步。约 15.36 亿为样本读取次数，并非去重条数。
- **评测**：[论文表 6 和表 9](https://arxiv.org/html/2308.12966v3#S4)逐项核对 RefCOCO val 与 test-A 及对应的基础 / Chat 型号和准确率；训练数据使用 RefCOCO 等来源见表 3。IoU 算例、标注歧义及货架分组属于正文提出的评测方案，不是论文测量结果。
- **配图**：核对 [图示登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/qwen-vl-first/overview.svg)：标注论文依据、CC BY 4.0、非官方图，箭头依次表示尺寸调整、视觉编码、交叉注意力压缩、与文字进入语言模型、输出文本或坐标，符合正文的简化范围。Chromium 打开本地正文页并滚动加载，图片实际大小 1060×250，替代文本存在；截图目视检查模块和连线。
- **社区**：复用 [2026-10-27 已登录浏览器实读记录](qwen-vision-community.md)：姜富春的[《多模态技术梳理：Qwen-VL 系列》](https://zhuanlan.zhihu.com/p/25267823390)当时 1254 赞同、2141 收藏，讨论初代编码器与交叉注意力；其固定长度及变长相关观点已与论文交叉核对。互动量为历史快照，不代表质量保证；本次未重新打开知乎页面。
