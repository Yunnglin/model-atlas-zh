# DeepSeek 与 GLM 证据抽查（2026-10-29）

本次对 R1 初版、V4-Flash 初版及 GLM-4.5 主模型的以下具体表述复查，不代表重新逐句审完三篇，也未运行模型或复现评测。

- **R1 蒸馏对照**：对照[论文第 3.2、4.1 节及表 5、6](https://arxiv.org/html/2501.12948v1)，从 Qwen-32B-Base 出发的 RL 实验训练超过 1 万步；表 6 中 RL 与 R1 蒸馏分别为 AIME 2024 pass@1 47.0 / 72.6、cons@64 60.0 / 83.3。正文补充数值并区分单次采样与 64 次多数投票；训练数据与预算并非严格一致，不能概括为算法的普遍优劣。
- **V4-Flash 基座评测与图**：对照[论文表 1](https://arxiv.org/html/2606.19348)，V3.2-Base 与 V4-Flash-Base 的 MMLU 5-shot EM 为 87.8 / 88.7；比较限制与现有记录一致。检查本地 `public/figures/deepseek-v4-flash/overview.svg` 文本和路径，图说明前两层滑窗、后续 CSA / HCA 交替及示意图省略范围；本次未重新截图或逐层复查实现。
- **GLM-4.5 评测与图**：对照[论文表 5 及第 4.2.3 节](https://arxiv.org/html/2508.06471v1)，主模型 SWE-bench Verified 为 64.2，OpenHands v0.34.0、最多 100 次迭代、temperature 0.6、top-p 1.0；不可将该成绩移给 Air。检查 `public/figures/glm45/overview.svg` 的文字与路径，图将任务专家模型与 MoE 层内路由专家分开；本次未重新截图或复核全部训练细节。
