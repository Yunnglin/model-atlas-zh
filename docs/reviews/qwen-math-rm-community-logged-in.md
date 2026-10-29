# 数学奖励模型知乎参考核查

2026-10-28 使用已登录 Chrome 查看知乎搜索结果及文章原文，未清除或修改登录会话。已读取 `corrinehu-kimi-searchzhihu` skill；其 agent-browser 保存会话列表为空，为复用实际登录页面，使用 Chrome 浏览器读取。以下互动数字是查看当时的快照，并非质量或正确性的保证。

- [tomsheep：《Qwen2.5-Math-PRM：如何构建高质量的 PRM 训练数据？》](https://zhuanlan.zhihu.com/p/18389486329)：165 赞、317 收藏，2025-01-15 发布。原文覆盖 MC 标注、共识过滤、BoN 偏差、ProcessBench 和问答；作者评论明确伪代码用于辅助学习、未完整搭建流程。对于“从当前前缀继续成功”和“当前步骤逻辑正确”的区别，结合[官方论文 v1 第 3.1 节](https://arxiv.org/html/2501.07301v1)补充独立例子。文中某些关于硬标签或模型评委更可靠的表述是特定实验下的观察，不当作普适定律。
- [akaihaoshuai：《LLM之ORM和PRM一探究竟》](https://zhuanlan.zhihu.com/p/23569628423)：39 赞、75 收藏，2025-02-19 编辑。内容覆盖结果/过程监督、PRM 数据及测试时选择；其模拟代码使用占位函数，不能视为可复现训练。文章称 BoN 直接评估当前步骤准确性，与[官方论文第 2.2、4.2 节](https://arxiv.org/html/2501.07301v1)的候选级最终答案评测不符，故不采用该说法；在 Math-RM 文中添加相同最终答案但过程不同的教学例子，解释仅看最终答案的局限。

两篇知乎文章是学习视角，权重、训练、评测数字和实现接口仍以[官方 PRM 论文](https://arxiv.org/abs/2501.07301)、[PRM 模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-PRM-7B)和 [Math-RM 模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-RM-72B)为准。没有运行模型或复现社区示例。

## Math-RM 正文和配图独立核对

- [官方报告第 3.2 节](https://arxiv.org/html/2409.12122)说明 361K 英文题与 257K 中文题，每题六条候选、以最终答案匹配标注正负，过滤全正或全负；利用不同规模和中间模型丰富数据。正文已补充这些条件，区分原始题数与最终保留量。
- 同节给出两个线性层的标量头和同题正负评分差的排序损失，按 $k(6-k)$ 个有效组合归一化；[官方实现](https://huggingface.co/Qwen/Qwen2.5-Math-RM-72B/blob/main/modeling_qwen2_rm.py)显示中间 ReLU、最后非填充位置取分。正文补充实现细节；代码中可选通用回归损失不等于论文描述的训练目标。
- 报告表 5 的 CoT、AMC 2023、Qwen2.5-Math-1.5B-Instruct、RM@256 结果为 29/40；这是生成与评分组合使用 256 个候选的成绩，非评分模型自行答题或单次调用结果。
- `public/figures/qwen25-math-rm/overview.svg` 是生成候选、整体评分、选择及可选外部复核的教学流程，非论文结构图；未把评分和核验说成确定正确。未修改共享 YAML，未实际加载权重或复现实验。
