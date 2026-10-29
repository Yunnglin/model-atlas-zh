# Kimi-Audio 与 GLM-ASR 耳语评测补查

2026-10-28 实读 [marsggbo 的 AmphionASR 解读](https://zhuanlan.zhihu.com/p/2075183470100341457)，页面显示 0 赞同、5 收藏。文章给出语音特殊场景、独立测试和论文条件的解释；这篇互动量不高，选用原因是它具体讨论了耳语识别并给出原报告入口，而非按互动量认定质量。

对照 [AmphionASR 团队报告](https://github.com/AmphionTeam/AmphionASR/blob/main/main.pdf)第 16–17 页表 15：Kimi-Audio-7B-Instruct 的 wEar 中文 CER 1.48%、WTIMIT 英文 WER 10.95%；报告标为 GLM-ASR-nano 的结果分别为 15.41% 和 15.50%。中文、英文和 LibriSpeech 属于不同测试集与单位，不能直接比较数值。报告中的 GLM 条目未在该表展开完整检查点名称，正文保留其原称呼。

本次未运行模型，也没有独立复现报告结果；只交叉核对这两项指定数值，未全面审阅知乎文章或该报告。
