# Kimi K2 Thinking 官方及知乎资料核查

核查日期：2026-10-28。通过已有知乎登录会话检索并阅读正文；赞同和收藏是查看时快照，会变化。未运行模型或复现评测。

- [刘少伟的 INT4 QAT 说明](https://www.zhihu.com/question/1969558404759544488/answer/1970539327902679960)：阅读时 **991 赞同、716 收藏**。作者自述是参与本模型量化工作的月之暗面 infra 工程师，属于相关方一手经验。文章解释 MoE 权重的 W4A16、BF16 原始权重、伪量化与直通估计，以及低比特 rollout 的工程取舍；其报告的完整 RL iteration 耗时下降约 10%–20% 受具体工作负载影响，不能推广到所有训练配置。量化误差累积及不同算子间计算差异的成因，作者明确标为猜测。以[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)和具体实现为准；这篇主要解释量化，不验证全部结构或所有评测。
- [归来仍是少年的综合回答](https://www.zhihu.com/question/1970485182114019125/answer/1970809025294763100)：阅读时 23 赞同、24 收藏。文章有工具轨迹的直观例子，但对闭源模型参数的数字及 K2 Thinking 特定后训练阶段的说法缺少可核对依据，也容易误导读者以为执行器被装在模型权重里；不采作技术事实来源。
- [官方模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)列出 1T 总参数、32B 激活、61 层、384 个专家选 8、1 个共享专家、MLA 和 256K 上下文；INT4 QAT 作用于 MoE 权重，并非声明所有权重及激活都是 INT4。AIME 2025 无工具的 94.5 为 avg@32，思考预算 96K；HLE 的 23.9 无工具与 44.9 有工具均对应文字子集，比较必须保留工具和数据集条件。[官方发布介绍](https://www.kimi.com/en/blog/kimi-k2-thinking)也强调实际聊天服务的工具集和调用步数可能与评测不同。
- [Kimi 官方研究目录](https://www.kimi.com/en/blog/)与[美国 NIST 的评测介绍](https://www.nist.gov/news-events/news/2025/12/caisi-evaluation-kimi-k2-thinking)均记载发布于 2025 年 11 月 6 日；NIST 是第三方日期记录。不要把模型卡中的权重上传时间自动等同于发布时刻。
