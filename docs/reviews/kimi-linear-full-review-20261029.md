# Kimi Linear 专项审校

审校日期：2026-10-29。完整通读 [Kimi Linear 正文](../../src/content/docs/nlp/kimi-linear-model.md)，核对 48B-A3B Base/Instruct 与论文中的受控实验；未运行模型或复现评测，会议案例和状态容量为教学估算。

- **结构**：对照[论文第 3、4、6 节](https://arxiv.org/html/2510.26692v2)和 [Instruct 配置](https://huggingface.co/moonshotai/Kimi-Linear-48B-A3B-Instruct/blob/main/config.json)，核对 KDA 通道级门控及 Delta 状态更新、NoPE 的 MLA、约 3:1 混合、27 层中 20 层 KDA 和 7 层 MLA，以及首层稠密、后续 MoE。单头 128×128 FP32 状态 64 KiB 是教学估算，整个混合模型仍有随长度增长的 MLA 缓存。
- **训练**：论文第 5.4 节及附录 D 核对同配方 1.4T 架构比较和公开模型 5.7T 训练。补充多阶段 SFT（广泛任务后强化推理）、同数据和超参数下的数学 RL 对比，以及针对训练／推理概率不一致的截断重要性采样和动态 KL、小批量设置；不将其归为 KDA 本身。
- **评测**：论文表 3、5、9 分别核对 1.4T Base 的 MMLU 73.8/71.6 和 EvalPlus 60.2/63.1、128K 的 RULER/LongBench V2/RepoQA 分数，以及 5.7T Instruct 的 1M RULER 94.8。第 6.3 节与图 7 区分 1M、batch 1 的约 2.3 倍解码加速和考虑增大批量后的约 6.3 倍理论吞吐估计；论文摘要约 6 倍不能当作单请求延迟。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)和[原创教学图](../../public/figures/kimi-linear/overview.svg)，前 3 层 KDA、下一层 MLA、每层前馈及首层稠密描述与配置和简图范围一致，标明来源、CC BY 4.0、非官方图；论文 Figure 3 保留原文链接。Chromium 本地正文打开并滚动加载图，解码成功、替代文本存在；截图确认中文和箭头可读。
- **社区**：复用 [2026-10-28 实读记录](kimi-linear-context-community-20261028.md)，张宇的 [Kimi Linear 团队解读](https://www.zhihu.com/question/1967345030881584585/answer/1967730385816385407)当时约 1100 赞、1000 收藏，讨论 3:1、5.7T 和利用更大批量的加速；作者为项目相关方。架构、训练及性能条件以论文与官方配置交叉核对，本次未重读或更新互动量。

## 评测数字逐项补证（2026-10-29）

- [论文 v2 表 3](https://arxiv.org/html/2510.26692v2)：统一预训练方案、1.4T tokens 的 Base 对照中，MMLU 为 Kimi Linear 73.8、MLA 71.6；EvalPlus 为 Kimi Linear 60.2、GDN-H 63.1。后者是另一混合基线，而不是 MLA。正文数字及比较对象一致。
- 同论文表 5、5.5.1 节：1.4T tokens、128K 上下文下，MLA → Kimi Linear 的 RULER 为 81.3 → 84.3，LongBench V2 为 36.1 → 35.0，RepoQA 为 63.0 → 68.5；正文表格一致。以上是该组受控对照，不能与论文 5.7T 模型分数混用。
