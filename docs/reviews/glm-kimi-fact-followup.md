# GLM 与 Kimi 事实复核

核对日期：2026-10-28。本轮核查以下四篇的指定内容；未运行模型、重训或独立复现基准。

- [GLM-5](../../src/content/docs/nlp/glm5-model.md)和 [GLM-5.1](../../src/content/docs/nlp/glm51-model.md)：对照 [GLM-5 技术报告](https://arxiv.org/html/2602.15763v1#A1.T10)、[GLM-5](https://huggingface.co/zai-org/GLM-5) 与 [GLM-5.1](https://huggingface.co/zai-org/GLM-5.1) 模型卡，核查模型卡、专家配置及公开评测，明确报告中的 744B 与托管页显示约 754B 的统计范围不能直接相减。5.1 未公开的训练配方仍未补猜。
- [Kimi Linear](../../src/content/docs/nlp/kimi-linear-model.md)：对照[技术报告 v2](https://arxiv.org/html/2510.26692v2)第 4、5 节，补充 MLA 层使用 NoPE 和 KDA 提供顺序相关信息的关系，保留对消融结论适用范围的限定。
- [Kimi-Audio](../../src/content/docs/audio/kimi-audio-model.md)：对照[技术报告 v1](https://arxiv.org/html/2504.18425v1)，补充预训练配方和多项评测，并说明不同报告对相同基准可能采用不同协议，不能直接混合比较。

社区延伸阅读使用既有台账的记录；互动数据本轮未重新核实。知乎覆盖范围仍见[社区资料盘点](community-coverage.md)。
