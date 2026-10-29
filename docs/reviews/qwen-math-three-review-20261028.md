# Qwen2.5-Math 生成器、PRM 与 RM 复核（2026-10-28）

## 范围与参与情况

按官方论文、模型卡及三张教学图核对生成、步骤评分、整体评分的职责，以及数据、训练和评测条件。本审校者此前参与 PRM、RM 和数学模型资料核查，并修改过 PRM、RM 两篇；本次属于延续自查，不称为全新独立审阅。相关既有证据见 `prm-r10528-independent.md` 和 `qwen-math-rm-community-logged-in.md`。

## 核对与修改

- **Qwen2.5-Math：**[技术报告 v1](https://arxiv.org/html/2409.12122v1) §2–5 区分 1.5B/7B/72B Base 与 Instruct、数学语料超过 1T token、4K 专项训练长度、CoT 与需要外部 Python 执行器的 TIR。报告表 3 的 7B TIR MATH 为 85.2，[发布文章](https://qwenlm.github.io/blog/qwen2.5-math/)列 85.3；正文保留两者差异，不强行统一。奖励与规则信号、GRPO 训练和推理期候选筛选已有区分。教学图的奖励模型与外部工具为简化流程。
- **Qwen2.5-Math-PRM：**[PRM 论文 v1](https://arxiv.org/html/2501.07301v1) §2、§3.1.3、§4：7B/72B 从同规格数学 Instruct 初始化，8 次续写全错标负、至少一次正确标正，再由 Qwen2.5-72B-Instruct 与 MC 对错误步骤位置作一致性过滤、用硬标签训练步骤分类。明确修改正文为按整份解答的错误位置筛选实例，避免理解为逐步丢弃并拼接新解答。[7B](https://huggingface.co/Qwen/Qwen2.5-Math-PRM-7B) 和 [72B](https://huggingface.co/Qwen/Qwen2.5-Math-PRM-72B) 模型卡均标记 Qwen 许可。论文表 6 在 7B 生成器、8 个候选、步骤分数乘积下，七项成绩平均 maj@8 66.2、PRM 7B 67.6、pass@8 74.7；ProcessBench 用首错定位，不能视作同一指标。
- **Qwen2.5-Math-RM-72B：**[数学报告 v1](https://arxiv.org/html/2409.12122v1) §3.2–3.3 给出 361K 英文、257K 中文问题，每题六份候选、最终答案标注与全对全错过滤，同题正负组合排序损失；[官方模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-RM-72B)标记 Qwen 许可。报告奖励组合让规则判对的回答高于规则判错的回答，RM 在组内排序；正文新增这个训练口径及验证器误判边界。报告表 5 的 1.5B Instruct、CoT、AMC 2023、RM@256 为 29/40，是生成加评分组合的结果，不是评分器单独答题。图中单份整体评分与 PRM 逐步评分的分工一致。

## 验证与限制

三张 SVG 是原创教学图，检查语义及 XML 格式；改动已做空白检查。未调用模型、训练、复现评测，也未重核知乎互动数字或完整许可法律适用；模型分数不保证概率校准与推理步骤正确。
