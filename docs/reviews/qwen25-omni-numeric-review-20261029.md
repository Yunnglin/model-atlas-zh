# Qwen2.5-Omni：评测数字复核

- 正文：`src/content/docs/omni/qwen-omni.md`
- 核对范围：正文中的 LibriSpeech 识别和 SEED 语音生成数字；仅是数字与协议复核，不代表独立复现实验。
- [技术报告 v1 表 2](https://arxiv.org/html/2503.20215v1)：LibriSpeech test-clean/test-other，Qwen2.5-Omni-7B 的 WER 为 1.8／3.4，Whisper-large-v3 为 1.8／3.6。
- 同报告表 9：SEED test-en 零样本生成的 WER，Qwen2.5-Omni-7B 的 ICL 与 RL 设置分别为 2.72／2.33；正文区分两种设置与内容一致性指标。未发现需修改的数字。
