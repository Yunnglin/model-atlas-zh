# Qwen-Image 家族三篇复核

本次在已有文章与教学图上复核；本审校者此前审校过 Qwen-Image-2.1、Edit 2509/2511，并非这三篇的原作者。本次未运行模型、量化推理或复现训练评测。

- [Qwen-Image 报告](https://arxiv.org/html/2508.02324)及[模型卡](https://huggingface.co/Qwen/Qwen-Image)：核对约 20B MMDiT、Qwen2.5-VL 条件与 VAE、GenEval 的 SFT/RL 0.87/0.91 和 ChineseWord 97.29/6.48（各难度单字）。正文保留模型变体、任务和权重对应的不确定边界；教学图是文生图简化流程，不把初代权重等同编辑版本。模型卡许可为 Apache-2.0。
- [初代 Edit 模型卡](https://huggingface.co/Qwen/Qwen-Image-Edit)、[发布说明](https://qwenlm.github.io/blog/qwen-image-edit/)与报告第 5.2.3 节：核对单图及指令、双路径语义和外观条件、不同编辑变体与 Apache-2.0 许可。图示两条原图条件和外部生成结果，未承诺未编辑区域像素锁定。新增报告表 11 GEdit 双语综合分 7.56/7.52 的具体例子，明确为论文所称 Qwen-Image 多任务编辑模型、GPT-4.1 评判，未假定其可直接复现为开放检查点成绩。
- [Layered 论文](https://arxiv.org/html/2512.15603)与[模型卡](https://huggingface.co/Qwen/Qwen-Image-Layered)：核对 RGBA-VAE、VLD-MMDiT、Layer3D RoPE、三阶段 500K/400K/400K、Crello 指标及其训练集微调边界，许可 Apache-2.0；图将 RGBA 输出与外部编辑、叠合分开。论文的可合并图层协议及遮挡内容的推测限制已在正文说明。
- 以上三篇未报告可复现的量化部署实验；不将精度、参数规模或论文中的量化评价分数混作 INT4/INT8 量化实测。
