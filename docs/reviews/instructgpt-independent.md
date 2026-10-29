# InstructGPT 独立审校

- 核对 [2022 论文](https://arxiv.org/html/2203.02155) 第 3.2、3.5、3.6、4 节：GPT-3 架构，1.3B/6B/175B，SFT/RM/PPO 训练提示分别约 13k/33k/31k，超过 96% 英文，PPO-ptx 的预训练梯度混合和逐 token KL 惩罚。PPO 提示不逐条标注，但 RM 来自人工排序。
- 核对人工偏好结果的对象和置信区间：175B InstructGPT 对 GPT-3 的 85±3%、对 few-shot GPT-3 的 71±4%；两者不作为通用正确率。论文默认 InstructGPT 为 PPO-ptx；一些测试仍有退化，偏见评估未显著改善。
- 核对 [OpenAI 2022 发布介绍](https://openai.com/index/instruction-following/) 的 API 部署与局限，不称权重开放，不把它等同 ChatGPT 产品。自绘示意图仅展示训练流程。
- 实际阅读知乎[小神弟弟《RLHF 场景下的 PPO 算法的来龙去脉》](https://zhuanlan.zhihu.com/p/631338315)，2023-06-01 编辑；2026-10-28 查看时 445 赞同、980 收藏。文章从策略梯度、优势估计解释到 PPO 与预训练混合，适合作补充；正文具体论文事实已回到原论文核对，未把其个人实现经验当作原论文事实。
- 没有自行训练模型、运行 API 或复现评测；会议纪要示例为虚构教学例子。
