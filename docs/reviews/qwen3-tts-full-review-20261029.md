# Qwen3-TTS 全维度审阅

审阅日期：2026-10-29。通读 `src/content/docs/audio/qwen-tts.md`，对照技术报告 v1、模型卡、官方实现、配图与既有知乎实读记录；未运行模型或复现评测。

## 结构与模型卡

- [报告 v1 第 2、3 节](https://arxiv.org/html/2601.15621v1)：12Hz 路线实际每秒 12.5 帧，16 层码本中首层以 WavLM 表示作语义教师，其余 15 层残差量化；主骨干预测第 0 层，MTP 预测剩余层。4 秒对应约 50 帧、800 个码本索引；不等于主骨干串行运行 800 次。
- [固定版本代码](https://github.com/QwenLM/Qwen3-TTS/blob/d8146d5/qwen_tts/core/models/modeling_qwen3_tts.py)中的 Code Predictor 逐步生成剩余码本；25Hz 单码本、分块 DiT 与 12Hz 因果解码是不同路线。25Hz 首块等待 16 个码，12Hz 可按帧流式解码。
- [官方模型卡](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base)列出 12Hz 0.6B／1.7B Base、CustomVoice 和 1.7B VoiceDesign，说明 0.6B CustomVoice 不支持风格指令，发布模型和 tokenizer 标注 Apache 2.0。本次增加三种模型的选型教学例子。

## 训练

- 报告 2.2 节的 tokenizer 使用语义教师、重建和对抗损失；3.2 节生成器预训练先使用 500 多万小时多语言音频，再继续高质量训练，最后将最大长度从 8192 提升至 32768 并提高长语音采样比例。
- 后训练采用 DPO、规则奖励与 GSPO、声音相关微调；训练序列长度和数据时长不等于用户请求的音频时长。

## 评测与应用

- 表 5 的 12Hz 1.7B／0.6B Base 零样本生成 WER：test-en 1.24／1.32，test-zh 0.77／0.92。表 4 的 LibriSpeech test-clean 2620 条录音重建中，12Hz tokenizer 与 Mimi 说话人相似度 0.95／0.87；这是 WavLM 相似度而非听众百分比，重建与文本生成分开。
- 表 2：0.6B 并发 1 首包 93+4=97ms、并发 6 为 294+5=299ms，1.7B 并发 1 为 101ms；4 帧对应约 320ms 声音内容，不等于等待时间。4 秒音频合成花 2 秒的 RTF 0.5 为教学假设。
- 数字错读、音色漂移、参考音频质量和切分对照均为教学建议，不声称实际模型运行结果。

## 配图

- `src/content/data/figures.yaml` 登记报告 Figure 3 与 Figure 2，注明版本、原图来源、CC BY 4.0、署名及替代文本；两图分别呈现生成器主／残差码本和 25Hz／12Hz 两条 tokenizer 路线。
- Chromium 打开本机 `/audio/qwen-tts/`，两图分别解码为 4546×3171、7737×3899，替代文本存在；截图检查了箭头、标注和呈现。

## 社区

- [知更鸟：当 TTS 方案重新回到 LLM+RVQ](https://zhuanlan.zhihu.com/p/2016533345186633564) 于 2026-10-28 已登录实读时 38 赞同、75 收藏，见 [音频社区核查](qwen-audio-community.md)。文章对比离散码本与训练流程，拼接维度前后有不一致；本文按论文和代码描述，未复制社区图文。

## 本轮评测数字复核

- 对照[报告 v1 表 4、5](https://arxiv.org/html/2601.15621v1)：Seed-TTS test-en 上 12Hz 1.7B/0.6B Base WER 为 1.24/1.32，test-zh 为 0.77/0.92；LibriSpeech test-clean 的 tokenizer 重建中 Qwen-TTS-Tokenizer-12Hz 与 Mimi 的说话人相似度为 0.95/0.87。分别对应生成与重建实验，不能互相替代。本轮未运行评测。
