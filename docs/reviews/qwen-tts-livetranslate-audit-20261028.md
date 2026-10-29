# Qwen3-TTS 与 Qwen3-LiveTranslate 核对

核对范围：两篇模型正文和关联图，使用官方技术报告、模型卡、发布文章。未运行模型或实测延迟。

- [Qwen3-TTS 技术报告 v1](https://arxiv.org/html/2601.15621v1)：核对 12.5Hz、16 层码本、双轨及 MTP、三阶段预训练、DPO／GSPO、表 2 延迟和表 5 的 WER。补充 25Hz 的未来块等待与 12Hz 因果解码差异。
- [Qwen3-TTS 官方仓库](https://github.com/QwenLM/Qwen3-TTS)及其模型卡：12Hz 的五个发布模型和 Tokenizer 标注 Apache-2.0；CustomVoice 1.7B 支持风格指令，0.6B 的对应能力未列出。
- TTS 两幅本地图与技术报告 v1 Figure 2、3 的 PNG 文件逐字节一致；报告图标注 CC BY 4.0，图的登记保留官方出处。
- [Qwen3-LiveTranslate 官方发布文章](https://qwen.ai/blog?from=res&id=4266edf7f3718f2d3fda098b3f4c48f3573215d0)：补充轻量 MoE、语义单元预测和官方最低约 3 秒延迟，并用例子说明语序和等待之间的关系。页面配图是教学用途的输入输出示意，不冒充官方逐层架构图。
- LiveTranslate 当前以官方服务形式介绍，参数及详细训练配方未公开；不同版本的能力分别对待，不把新版细节套给初代。
