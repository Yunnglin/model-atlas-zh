# Qwen2.5-Math-RM / PRM 核查记录

核查日期：2026-10-28。核对两篇模型卡、评分头、数据构造及所引用的论文评测；没有运行模型、重新阅读知乎文章或逐项核对所有外部链接。

- [Math 技术报告第 3.2、3.3 节](https://arxiv.org/html/2409.12122)与[RM 官方代码](https://huggingface.co/Qwen/Qwen2.5-Math-RM-72B/blob/main/modeling_qwen2_rm.py)：核对英文／中文问题数、每题六个候选、过滤规则、两层标量评分头与 GRPO 奖励公式。正文新增以 $r_m=0$ 为例的奖励计算，展示规则验证正确与错误的分组。
- [PRM 论文第 2.1、3.1.3、4.1–4.3 节](https://arxiv.org/html/2501.07301)和[7B 模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-PRM-7B)：核对每步八次续写、零正确时标负、整份解答的评审一致性过滤、7B/72B 初始化、步骤分隔符和二分类评分。代码与示例取分位置分别对照[公开实现](https://huggingface.co/Qwen/Qwen2.5-Math-PRM-7B/blob/main/modeling_qwen2_rm.py)和模型卡。
- 论文表 6 的 Best-of-8 为 7B 生成器加七类任务平均；表 7 的 ProcessBench 是错误位置与整题正确判断相结合的分数。正文补充 GSM8K 子集 PRM 与 RM 对照，并指出论文对 RM 使用逐步前缀单独评分。
- 原有两张图是候选生成与排序流程图。本次增加 [RM／PRM 评分头对照教学图](../../public/figures/training/math-reward-heads.svg)，依据两篇论文和公开代码绘制，省略内部层与批处理；已用 Chromium 渲染查看。图不作为官方原图。
- 两篇正文均已有知乎延伸链接，本轮未重新核对作者、赞藏及正文；相关社区参考不能代替论文与代码。
