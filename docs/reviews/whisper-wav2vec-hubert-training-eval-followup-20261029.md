# Whisper、wav2vec 2.0、HuBERT 训练与评测复核（2026-10-29）

本次核对三篇正文的预训练目标与部分代表性评测，不代表重新复核所有配图、社区资料或运行模型。

- [Whisper 原论文](https://arxiv.org/html/2212.04356)第 2.3 节：前文提示的文本位置不计算损失，当前任务及其他标记仍用于预测；表 9 的 large-v2 在 LibriSpeech test-clean 与 CHiME-6 分别是 2.5% 与 24.9%，采用束搜索和温度回退。正文的这两组数字与设置一致。
- [wav2vec 2.0 原论文](https://arxiv.org/html/2006.11477)附录表 9：Large、LV-60k 无标注、10 分钟标注下，Transformer 语言模型的 test-clean/test-other 是 4.8%/8.2%，无语言模型是 40.2%/38.7%；两组均不是只用 10 分钟音频从零训练。正文数字一致。
- [HuBERT 原论文](https://arxiv.org/html/2106.07447)第 IV-D 节明确微调时卷积编码器固定，Transformer 可按 freeze-step 先冻结、之后更新；正文补充这一训练顺序，避免误解为从第一步就更新所有上下文层。表 2 的 wav2vec 2.0 Large、HuBERT Large、HuBERT X-Large 在 LL-60k 预训练、10 分钟标注微调和 Transformer 语言模型条件下，test-clean/test-other 分别为 4.8%/8.2%、4.7%/7.6% 和 4.6%/6.8%；正文新增对照和相对降幅算例，并说明模型规模不同。

验证：修改正文通过 Prettier、内容测试 7 项及 `git diff --check`；未实际训练或复现论文分数。
