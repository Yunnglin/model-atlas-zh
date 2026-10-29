# Kimi 核心版本重点审校

核对日期：2026-10-27。本轮阅读 K1.5、K2／Thinking、K2.5、K2.6、K2.7 Code、K3 文章，重点核对下面列出的结构、训练和评测口径，并读取六张教学 SVG 的标题、说明与文字。它不是全部句子的逐项事实核验，也不是对图片逐像素或完整运行行为的验证；没有运行模型、训练或评测。

- **K1.5**：对照[论文](https://arxiv.org/html/2501.12599) 2.6.2 节，澄清 partial rollout 是未完成轨迹分段保存、跨迭代继续生成；不是把每个前缀反复重试。说明历史片段和当前策略生成片段的训练处理需要区分；长短推理及数学评测仍以报告设置为准。教学图区分训练反馈和推理。
- **K2／Thinking**：对照 [K2 论文](https://arxiv.org/html/2507.20534)、[原始 Instruct 配置](https://huggingface.co/moonshotai/Kimi-K2-Instruct/raw/main/config.json)和 [Thinking 配置](https://huggingface.co/moonshotai/Kimi-K2-Thinking/raw/main/config.json)，检查 15.5T 预训练、总／激活参数、评测设置和上下文；补明 61 层中第一层是稠密前馈层。教学图标注工具在外部执行。
- **K2.5**：对照[报告](https://arxiv.org/html/2602.02276)和[配置](https://huggingface.co/moonshotai/Kimi-K2.5/raw/main/config.json)，检查最多四帧时间聚合、约 15T 图文继续训练、zero-vision SFT 的范围和评测预处理；补充第一层稠密前馈，避免说成全部层都有专家。将视觉 RL 的表述限制到本次研究流程。教学图是数据流简图，省略层内结构。
- **K2.6**：对照[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)，补明 61 层中含一层稠密层，核查 MoE、上下文、视觉编码器、评测指标以及额外许可。模型卡没有完整公开新增训练配方，不从前代推测。图中工具是外部执行器。
- **K2.7 Code**：对照[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)，补明第一层稠密与 MoE 层的区别，核对内部基准 62.0／50.9、其他指标和工具预算。相对提升是基于这两个已报告数字的算术，并不能推广为真实项目成功率。模型卡未公开完整新增训练步骤。
- **K3**：对照[技术报告](https://arxiv.org/html/2607.24653) 2.1、3.3、4.1.4 与 6 节，以及[模型配置](https://huggingface.co/moonshotai/Kimi-K3/raw/main/config.json)，补充 23 组 3 KDA + 1 Gated MLA 后还有一个 Gated MLA，解释 69／24 层计数；明确 MXFP4 路由专家权重与 MXFP8 激活的范围，非专家模块保留较高精度，不能推断 KV cache 格式。核对 Terminal-Bench 2.1、DeepSWE、BrowseComp 的报告分数与推理强度。图只是三个作用轴的简图，明确写明模块并非串行流水线，未展开末尾额外层，正文给出精确计数。

此前读过的 K2.5、K2.6、K2.7 和 K3 知乎参考及互动量见 [知乎筛选记录](zhihu-reading.md)；本轮未重新核验所有候选社区文章及互动量。论文、配置与模型卡用于事实核查，社区数据不能代替官方材料或真实实验。
