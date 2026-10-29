# Kimi K1.5 与 K2 Thinking 重点核对

日期：2026-10-28。核查本次补充的细节及现有模型卡、评测，未逐句审阅所有历史正文。

- [Kimi K1.5 论文](https://arxiv.org/html/2501.12599)第 2.5 和 2.6.2 节分别描述长 CoT SFT 的 32K、128K 阶段与 partial rollout。正文新增的 1,000／600 token 仅用于说明分段，不是论文超参数。论文说明旧片段可从缓冲区复用且部分片段可排除损失；不将分段误说成每段单独获得答案奖励。表 2、3 中 AIME 和 MathVista 数值按 long／short CoT 分别记录。
- [Kimi K2 Thinking 模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)与[配置](https://huggingface.co/moonshotai/Kimi-K2-Thinking/blob/main/config.json)列出 61 层、首层稠密、64 注意力头、384 个路由专家选择 8 个与 1 个共享专家。新增主干图是教学简化，未展示归一化、残差和各投影细节。
- 同一配置的量化组大小为 32、权重为 INT4，排除项包括输出头、注意力与共享专家；KV Cache 量化项为空。具体运行计算与精度还取决于所用框架。模型卡 HLE 的带工具／不带工具结果、工具预算和评审说明已与现有正文比对。
- 新图用 Chromium 打开查看，确认文字与箭头可读；SVG 解析、正文格式、内容与图示测试共 9 项通过。没有加载模型、执行训练或重新阅读知乎材料。
