# 模型结构讲解覆盖检查

核对日期：2026-10-28。按当前时间线的 96 个型号检查 Markdown 二级章节：均包含结构、数据流、机制、工作流程或同义的章节入口。标题筛查只能发现可能的遗漏，不能证明每篇章节对当前型号的解释完整或正确，也不能证明所有图像细节正确。

本轮人工阅读并对照来源的薄弱候选：

- [GLM-ASR-Nano](../../src/content/docs/audio/glm-asr-model.md)：章节标题为“声音如何变成文字”，以 Whisper 声学编码器、投影器和语言解码器解释具体数据流，并区分公开配置和未公开训练配方；对照[模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)及[实现](https://github.com/huggingface/transformers/blob/main/src/transformers/models/glmasr/modeling_glmasr.py)。
- [ChatGLM](../../src/content/docs/nlp/chatglm.md)：将原始 GLM 的填空和二维位置编码作为背景，明确后续版本不能无条件套用；对照[原论文](https://arxiv.org/abs/2103.10360)与[ChatGLM-6B 仓库](https://github.com/THUDM/ChatGLM-6B)。
- [Gemini 1.5](../../src/content/docs/omni/gemini.md)：区分 Pro 的稀疏 MoE 与 Flash 的公开描述，注明完整结构未披露；对照[技术报告](https://arxiv.org/abs/2403.05530)。
- [OmniJev](../../src/content/docs/omni/omnijev.md)：对照[v1.1 项目说明](https://github.com/tinnel123666888/OmniJev)核查视觉语言底座、决策头与共享前缀。正文补充候选框 0—1000 坐标的换算示例，明确界面裁剪和执行器仍需单独处理。

以上是 96 篇的标题筛查和 4 篇定向阅读，不是对 96 篇逐句事实核对；其中模型服务或仓库实现后续可能变化。
