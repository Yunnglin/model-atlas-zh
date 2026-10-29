# 视觉与语音模型评测数字复核

日期：2026-10-29。对照下列正文中具体引用的评测数字、模型与关键协议；本记录不是逐句全文或配图审校，也未运行模型和复现评测。教学算例只按正文假设核对算术。

- **Swin Transformer**：[原论文表 1–4](https://arxiv.org/html/2103.14030)：ImageNet-22K 预训练的 Swin-L 以 384 像素输入微调后 top-1 为 87.3%，仅用 ImageNet-1K 的 224 像素 Swin-T 为 81.3%；Swin-L + HTC++ 多尺度测试的 COCO test-dev 为 58.7 box AP／51.1 mask AP；Swin-L + UperNet 的 ADE20K val 为 53.5 mIoU。表 4 对 Swin-T 的移位窗口消融，分类 top-1 增加 1.1 个百分点、检测框 AP 增加 2.8 个点。正文数字和任务口径一致。
- **DiT**：[原论文表 2、4、5及附录](https://arxiv.org/html/2212.09748)：400K 步 XL/4 和 XL/2 分别为 29.05／118.64 Gflops、FID-50K 43.01／19.47；700 万步 XL/2 的 ImageNet 256 类别条件生成，无引导为 FID 9.62、Recall 0.67，CFG 1.5 为 FID 2.27、Recall 0.57。论文采用 250 步 DDPM；附录的 2.27 设置为 ft-EMA 解码器及三通道引导。不同训练步数的结果不应视作单一变量对照。
- **VALL-E**：[原论文 5.1–5.2 节及表 2、3](https://arxiv.org/html/2301.02111)：LibriSpeech test-clean 4–10 秒子集、同说话人另一段 3 秒参考，YourTTS／VALL-E 的 WER 为 7.7／5.9，WavLM-TDNN 相似度为 0.337／0.580；三次实验取平均。40 位说话人的听评 SMOS 为 3.45／4.38。论文使用在 960 小时 LibriSpeech 上微调的 HuBERT-Large，不融合外部语言模型；正文已补上该条件。SPK 使用经编解码器还原的参考语音。
- **EnCodec**：[原论文 4.3 节、表 1、表 5](https://arxiv.org/html/2210.13438)：24 kHz 流式 6 kbps 下干净／带噪语音 MUSHRA 分别为 EnCodec 83.1／69.4、Opus 30.1／19.1；每类抽取 50 条、每条 5 秒，每样本至少 10 次标注，表格报告 95% 置信区间。论文的 RTF 定义是音频时长除以处理耗时；24 kHz 模型初始延迟约 13.3 毫秒，不含计算。
- **Conformer**：[原论文 3.2–3.4 节及表 1、2、4](https://arxiv.org/html/2005.08100)：大模型在 LibriSpeech test-clean／test-other 不使用外部 LM 时 WER 为 2.1%／4.3%，有 LM 为 1.9%／3.9%；dev-other 的注意力后卷积／卷积后注意力／并行分别为 4.4%／4.5%／4.9%。论文使用三层 LSTM 外部 LM，通过浅融合解码并在开发集调权重；正文已补充。表中参数为 118.8M，解码设置不能推广到其他任务。
