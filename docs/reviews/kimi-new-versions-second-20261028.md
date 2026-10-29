# Kimi K2.6、K2.7 Code 与 K3 复核

本次复核已有正文与配图；审校者此前参与 K2、K2 Thinking、K2.5 的版本审查，未参与这三篇的撰写。未运行权重或复现模型评测。

- [K2.6 模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)与[官方更新](https://www.kimi.com/en/help/agent/agent-swarm)：核对 2026-04-20 发布时间、Modified MIT、文本图像与实验性视频接口、1T/32B、MoE 与 MLA。核对 SWE-Bench Pro 58.6、Terminal-Bench 2.0 66.7、MMMU-Pro 79.4；正文补充模型卡的编程任务 10 次及视觉任务 3 次运行平均。
- [K2.7 Code 模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)与[官方更新](https://www.kimi.com/code/docs/en/kimi-code/whats-new.html)：核对 2026-06-12、权重许可、模型参数和视频 API 的实验性限制，核对 Kimi Code Bench v2、Program Bench 和 MCP Atlas 的版本与条件。正文补充模型卡所述强制思考及保留思考、不支持 Instant；图增加文字直接输入语言主干的标识，避免把文字也当成视觉编码输入。
- [K3 模型卡](https://huggingface.co/moonshotai/Kimi-K3)与[报告](https://arxiv.org/html/2607.24653v2)：核对 Kimi K3 License、2.8T/104B、69 层 KDA 和 24 层 Gated MLA、视觉编码器与图像视频共享路径、MXFP4/8 量化及表 2 的三项分数。报告说明多任务训练与评测设置，配图明确模块并非独立串行流水线。模型卡的模态表写文本和图片，报告则明确介绍共享视觉编码器处理视频；不能将 API 或部署支持范围泛化到所有实现。
- 资料与服务会变化，训练数据、算法未完整公开的部分不补造；图文核查不等于设备运行、许可法律解释或独立基准复现。
