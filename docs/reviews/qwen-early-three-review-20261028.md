# Qwen 初代、Qwen1.5 与 Qwen2 审校

核对日期：2026-10-28。核对三篇模型卡、正文及原创教学图的关键配置、数据、许可、训练和引述的评测。审阅者此前参与 Qwen 系列其他模型审校，未找到本人撰写或审校这三篇正文的明确记录，不能据此断言此前没有其他间接参与。

## 修改与发现

- [Qwen 官方仓库](https://github.com/QwenLM/Qwen)说明首发 Qwen-7B 用 2.2T token；2023 年 9 月更新检查点增加至 2.4T，窗口由 2048 扩至 8192。已补充版本差异，避免把更新版当作首发配置。
- [Qwen1.5-7B Base 模型卡](https://huggingface.co/Qwen/Qwen1.5-7B)标示 Tongyi Qianwen 许可；[Qwen2 发布说明](https://qwenlm.github.io/blog/qwen2/)和 [72B](https://huggingface.co/Qwen/Qwen2-72B)、[7B](https://huggingface.co/Qwen/Qwen2-7B)模型卡分别列出 72B 的 Tongyi Qianwen 与 7B 的 Apache 2.0。已补充具体例子，并提醒按检查点核对。
- [Qwen2-7B-Instruct 模型卡](https://huggingface.co/Qwen/Qwen2-7B-Instruct)列其 GPQA 为 25.3，而[技术报告表 8](https://arxiv.org/html/2407.10671)为 34.3；两者对 Qwen1.5-7B-Chat 均列 27.8。由于差异原因不明，已在正文列明冲突并撤回基于模型卡的变化方向判断，不任选一个数值断言结论。
- 根据技术报告 §4.3 补充 Qwen2 离线 DPO 和奖励模型选对的在线 DPO，避免将其笼统当作 PPO。

## 其他核对

- Qwen-7B 官方配置 32 层、32 个注意力头、4096 隐藏维度；官方权重卡标示 Tongyi Qianwen License Agreement。图为简化因果解码器，并非官方架构图。
- [Qwen2 发布说明](https://qwenlm.github.io/blog/qwen2/)称 Qwen1.5 中 32B、110B 使用 GQA，Qwen2 各首发尺寸使用 GQA；三张图对不同型号标注了限制，均省略了层内细节。
- [Qwen2 报告 §3](https://arxiv.org/html/2407.10671)称 Qwen1.5 数据约 3T；Qwen2 非 0.5B 稠密模型使用 7T 以上数据集，0.5B 使用 12T 数据集，MoE 在 upcycling 后额外预训练 4.5T。长上下文训练从 4096 延至 32768，外推实验使用 YaRN 与 DCA；不能将设置或效果无条件套用至所有部署。
- Qwen2 模型卡及报告表 8 的 7B Instruct MMLU 数字均为 70.5，对照 Qwen1.5 7B Chat 为 59.5；上述 GPQA 冲突需后续依据版本记录或官方说明进一步确认。

本次未运行模型或复现官方评测；未全面复核所有尺寸的许可、所有检查点及社区文章。图为教学简图，不表示完整结构。

## 后续补查

[Qwen 发布文章](https://qwenlm.github.io/blog/qwen2/)的 2024-07-16 更新要求指令模型评测数字出现差异时以技术报告为准。正文已采用报告中的 GPQA 34.3；差异的具体原因未由该更新解释。
