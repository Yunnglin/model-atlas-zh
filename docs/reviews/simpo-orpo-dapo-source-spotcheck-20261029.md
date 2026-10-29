# SimPO、ORPO 和 DAPO 定向来源复核（2026-10-29）

本次按正文对照原论文的指定公式和指标，范围不是整篇逐句审核；没有运行模型或复现评测，也没有重新阅读知乎或检查配图。

- [SimPO 论文第 3 节及附录 J](https://arxiv.org/html/2405.14734v3)：主文中的 Mistral / Llama 3 Instruct 设定每题采样五条回答，用 PairRM 取最高分和最低分；后续 Gemma 2 设定使用 ArmoRM。原正文将前者概括成全部 Instruct 实验，本次明确区分。表 4 和表 5 的 Mistral-Instruct 长度控制胜率 26.8、32.1、19.1 与正文一致；目标函数及简化算例亦已对照。
- [ORPO 论文](https://arxiv.org/html/2403.07691)及 [SimPO 论文表 3](https://arxiv.org/html/2405.14734v3)：核对长度归一化似然和赔率比定义；ORPO 报告的 Mistral-ORPO-β 的 MT-Bench 7.32 与 AlpacaEval 2.0 12.20% 与正文一致。
- [DAPO 论文第 3 节及表 1](https://arxiv.org/html/2503.14476)：核对组内 token 总数归约、按正确率筛选、截断损失屏蔽和长度惩罚区分，以及论文的逐步叠加结果 30、36、38、41、42、50；本轮未发现所查内容不一致。
