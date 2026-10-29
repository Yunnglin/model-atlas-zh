# Qwen2.5-Math 审阅

审阅日期：2026-10-29。时间线 ID 为 `qwen-math`，通读 `src/content/docs/nlp/qwen25-math-model.md`，对照报告 v1、模型卡、配置、既有社区阅读记录及图示；未运行模型或复现评测。

## 结构与模型卡

- [报告 v1](https://arxiv.org/html/2409.12122)与 [7B Instruct 配置](https://huggingface.co/Qwen/Qwen2.5-Math-7B-Instruct/blob/main/config.json)：数学专项自回归模型，7B 为 28 层、28 查询头、4 键值头及 4096 最大位置；CoT 直接写答案，TIR 必须结合外部执行环境。数学 RM 给候选整体评分，独立于后来的 PRM。
- [7B Instruct 模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-7B-Instruct)标注 Apache 2.0，[72B Instruct 模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-72B-Instruct)标注 Qwen 许可；两种型号适用条款不同。

## 训练

- 报告第 2–3 节：Qwen Math Corpus v2 超过 1 万亿 token；CoT 问题池约 580K 英文、500K 中文，最后 2000K 英文、500K 中文训练样本。SFT 长度 4096、3 轮；原始奖励分数与规则验证结合，采用 $r=\sigma(0.5r_m)+(r_v-1)$，每题采样 32 份，TIR 的 Python 执行结果被遮罩策略损失。
- 本次补充有标准答案时筛选最终答案正确的解法、合成无确定答案题使用加权多数投票与奖励排序；以折扣题说明多数人可能犯相同错误，属于教学例子。

## 评测与应用

- 报告表 3 的 7B-Instruct MATH CoT 单次、maj@8、rm@8 为 83.6、87.1、88.5；TIR 单次 85.2。报告摘要及[官方发布文](https://qwenlm.github.io/blog/qwen2.5-math/)写 85.3，正文标出来源和 0.1 差异，不能混称模型稳定的单一值。
- 规则验证器、分组采样、额外工具与 RM 成本及数据泄漏边界已核查；折扣题和 20 题 16／13 个结果为教学案例，并非实际模型测量。

## 配图

- `src/content/data/figures.yaml` 登记 `qwen25-math/overview.svg` 为原创 CC BY 4.0 教学图，来源为技术报告，图中区分奖励模型辅助训练与推理时的可选外部工具，不冒称论文官方结构图。
- Chromium 打开本机 `/nlp/qwen25-math-model/`，SVG 成功解码为 1060×280，替代文本存在；截图检查箭头、可选工具与显示。

## 社区

- 2026-10-29 通过已登录 Chrome 阅读 Xode 的[技术报告解读](https://zhuanlan.zhihu.com/p/721015204)，当时 57 赞同、87 收藏，数量是阅读时快照。
- 文章以有标答和无标答两类问题解释候选解筛选，并讨论奖励模型和规则分数的配合；对照[官方报告第 3.1 节](https://arxiv.org/html/2409.12122)确认：无标答的合成题先采用加权多数投票，再按奖励分数选择候选。多数意见不保证正确。
- 文章对专项训练可能损害通用能力的推测不作为已证实结论；其分析是论文解读，不是独立复现实验。具体数据和评测条件仍以官方报告为准。

## 2026-10-29 评测数字补充核对

- [技术报告第 5 节及表 3](https://arxiv.org/html/2409.12122v1)中，Qwen2.5-Math-7B-Instruct 在 MATH 的 CoT 贪心解码为 83.6、maj@8 为 87.1、rm@8 为 88.5，TIR 贪心为 85.2；MATH 使用 zero-shot，后两项分别从 8 个候选多数投票及奖励模型选取。正文已把“单次”明确为“贪心解码”。
- [发布说明](https://qwenlm.github.io/blog/qwen2.5-math/)以及报告摘要另列相同模型 TIR 85.3，正文保留两份官方资料 0.1 的差异及来源，不擅自归因。
