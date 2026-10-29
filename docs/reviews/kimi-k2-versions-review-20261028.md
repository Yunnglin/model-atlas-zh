# Kimi K2、K2 Thinking 与 K2.5 版本复核

本次是在仓库已有正文与配图上复核；本次审校者此前未参与这三篇的撰写。按公开资料核对，不代表运行模型、复现训练或实际评测。

- [K2 技术报告](https://arxiv.org/html/2507.20534)：核对 1T 总参数、32B 激活、15.5T 预训练 token、MuonClip，以及 Instruct 的 LiveCodeBench v6 53.7（Pass@1）、AIME 2025 49.5（Avg@64）。文本页将原始 K2 与后续 Thinking 的上下文和评测条件分开；工具流程图表达执行器在模型外。
- [K2 Thinking 模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)：核对 61 层、384 路由专家每 token 选 8、共享专家、MLA、256K 和 MoE 后训练 INT4 权重量化；SWE-bench Verified 71.3 是带工具结果。配图将工具执行和权限放在模型之外。检查点许可为 modified MIT，具体附加条件需看许可文件。
- [K2.5 技术报告](https://arxiv.org/html/2602.02276)第 4 节、表 4、表 6 与附录 E：核对 MoonViT-3D、投影器、K2 MoE、图文联合预训练 15T、最多四帧分组及时间池化；MMMU-Pro 78.5、带工具 Agent Swarm BrowseComp 78.4 需区分设置。核对 128/2048 帧采样后，在正文补充两档空间分辨率及图像评测 Avg@3，避免成绩脱离条件。配图是教学流程，模型输出与外部执行、编排分开。
- 三篇均未将开放权重误称为训练数据完全公开。核查范围限公开的报告、模型卡和图示，不对未披露的训练配方作推断。
