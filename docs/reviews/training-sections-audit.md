# 模型页面训练章节检查

核查日期：2026-10-28。先按时间线的 96 个模型逐篇检查二级标题；其中 95 篇有“训练”“学习”“预训练”或“蒸馏”相关标题，Claude 以 Constitutional AI 为主题介绍训练研究，没有使用这些词作二级标题。标题存在并不证明训练内容正确或充分，因此不能将此项统计视为逐页技术审校。

本轮进一步人工核查了以下页面的训练公开范围和例子：

- [Claude](../../src/content/docs/nlp/claude.md)说明首代完整配方未公开，区分论文研究与产品版本。
- [GLM-ASR-Nano](../../src/content/docs/audio/glm-asr-model.md)说明声学编码器实现及未披露的数据与训练细节，并将通用实践与官方信息分开；核对[官方模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)。
- [MiniMax M3.1 Flash](../../src/content/docs/omni/minimax-m31-flash-model.md)区分官方量化感知训练说明、未披露的后训练配方和一般业务建议；核对[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)。
- [Kimi K2.7 Code](../../src/content/docs/omni/kimi-k27-model.md)说明官方未披露完整数据与训练配方，没有把通用监督或强化学习方法写成该版本的确定做法；核对[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)。
- [F5-TTS](../../src/content/docs/audio/f5-tts.md)按[论文第 3.1 节和附录 B.4](https://arxiv.org/html/2410.06885)补充文字引导语音填空的示例，并标明不同 ODE 求解器的 RTF。算例用于教学，不代表已运行模型。

本轮没有逐句核验其余模型的训练细节，也没有独立运行训练或复现实验。各系列更具体的抽查见其他审校记录。
