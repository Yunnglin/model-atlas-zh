# 数学评分、视觉推理、代码与语音模型补充核查

核对日期：2026-10-28。本轮对照对应官方模型卡、发布或论文的模型卡、结构、训练披露和代表性评测；未下载运行大模型，也没有复现论文分数。

- [Qwen2.5-Math-RM-72B](../../src/content/docs/nlp/qwen25-math-rm-model.md)：对照[技术报告](https://arxiv.org/abs/2409.12122)、[发布介绍](https://qwenlm.github.io/blog/qwen2.5-math/)和[模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-RM-72B)，核对结果评分、数据及 RM@256。独立复查、知乎作者和互动快照见[数学奖励模型核查](qwen-math-rm-community-logged-in.md)。
- [QVQ-72B-Preview](../../src/content/docs/omni/qvq-72b-preview-model.md)：对照[发布介绍](https://qwenlm.github.io/blog/qvq-72b-preview/)与[模型卡](https://huggingface.co/Qwen/QVQ-72B-Preview)，核对参数、输入及单轮与视频限制、公开评测和许可；Qwen2-VL 报告只作家族背景，不能补猜其完整训练配方。知乎案例及互动快照见[社区核查](new-models-community-logged-in.md)。
- [DeepSeek-V2.5](../../src/content/docs/nlp/deepseek-v25-model.md)：对照[模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V2.5)与配置核对通用和代码能力、结构、许可和评测；初代 V2 报告不证明更新版本的完整训练配方。知乎参考和互动快照见[DeepSeek 社区核查](deepseek-new-community-logged-in.md)。
- [GLM-TTS](../../src/content/docs/audio/glm-tts-model.md)：对照[报告](https://arxiv.org/abs/2512.14291)、[模型卡](https://huggingface.co/zai-org/GLM-TTS)和[代码](https://github.com/zai-org/GLM-TTS)，核对参数、语音 token 到流匹配与声码器的流程、训练和评测条件；时间线日期表示论文月份，不冒称权重同日发布。知乎搜索结果中有综合测评未列该模型，未作为直接参考。

配图为原创教学简图，不是官方结构图；解释刻意省略具体层与运行细节。互动数量为查阅时快照，不能证明技术结论正确。
