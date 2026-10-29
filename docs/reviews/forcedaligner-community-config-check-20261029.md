# Qwen3-ForcedAligner 社区笔记与公开配置对照（2026-10-29）

使用已登录 Chrome 阅读 [Zhengji 的《笔记：Qwen3-ForcedAligner》](https://zhuanlan.zhihu.com/p/2001964591773676778)，阅读时为 1 赞同、1 收藏。笔记列举 ASR、时间对齐和翻译的工具组合；它把 5000 个分类输出乘 80 毫秒，推算理论 400 秒。这个计算可作为配置观察，但未提供 400 秒输入得到官方支持或实测的证据。

核对 [Qwen 公开权重配置](https://huggingface.co/Qwen/Qwen3-ForcedAligner-0.6B/blob/main/config.json)：`classify_num` 为 5000、`timestamp_segment_time` 为 80；[技术报告第 3.2 节](https://arxiv.org/html/2601.21337v1)描述研究中 3750 个类别、最长 300 秒。两份资料存在配置范围差异，不能将论文数字笼统写成公开权重的分类头最大维度，也不能把张量维度乘时间间隔当作经过验证的可处理时长。已修正正文与原审校记录；未运行权重，也未确定差异原因。

此外阅读 [逍冲的 ASR 问答](https://www.zhihu.com/question/2000456618349974903/answer/2002338952447808566)，阅读时 4 赞同、27 收藏。其大量使用“我们”等报告原文措辞、讨论 3750 类与 300 秒，不能仅因是个人账号就视为独立实验或用作对照配置差异的第二份独立证据。互动量不证明技术结论。
