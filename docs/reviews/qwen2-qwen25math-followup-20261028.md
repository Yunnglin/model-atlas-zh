# Qwen2-Math 与 Qwen2.5-Math 专项复核

2026-10-28：对照官方材料检查两篇的模型卡、7B 配置、训练阶段、评测数值与教学图关系，并补充可算的训练例子。本次没有运行模型、训练或评测。

- [Qwen2-Math 发布说明](https://qwenlm.github.io/blog/qwen2-math/)：核对英文为主、数学预训练、拒绝采样、奖励模型与答案正确性信号、GRPO 及 greedy / Maj@8 / RM@8；[1.5B](https://huggingface.co/Qwen/Qwen2-Math-1.5B-Instruct)、[7B](https://huggingface.co/Qwen/Qwen2-Math-7B-Instruct)和 [72B](https://huggingface.co/Qwen/Qwen2-Math-72B-Instruct) Instruct 模型卡核对许可。
- [Qwen2-Math 7B 配置](https://huggingface.co/Qwen/Qwen2-Math-7B-Instruct/blob/main/config.json)和 [Qwen2.5-Math 7B 配置](https://huggingface.co/Qwen/Qwen2.5-Math-7B-Instruct/blob/main/config.json)：均列出 28 层、28 个查询头和 4 个键值头；后者配置的 `max_position_embeddings` 为 4096。
- [Qwen2.5-Math 技术报告](https://arxiv.org/html/2409.12122)第 3 节与表 3：核对 SFT 样本与超参数、每题 32 个强化学习候选、奖励合成公式、工具输出掩码和评测设置。单次 TIR 的发布文章与论文表格分别为 85.3 和 85.2，正文均保留出处。
- 教学图按现有资产检查训练阶段及工具输出返回模型的方向；图为简化流程，不作为精确的官方网络结构图。本轮未修改共享图或资产登记。
- 中文参考采用项目[既有知乎记录](community-coverage.md)：Qwen2-Math 团队成员解读记录为 230 赞／102 收藏，Qwen2.5-Math 训练分析记录为 57 赞／87 收藏，均为历史查看快照，本次未重新核对互动数或重读文章。技术事实以上述官方资料为准。
