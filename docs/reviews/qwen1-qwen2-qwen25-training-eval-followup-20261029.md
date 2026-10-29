# Qwen 初代、Qwen2、Qwen2.5 训练与评测复核（2026-10-29）

核查范围为三个独立模型卡及正文中训练、评测的代表性论述；未运行模型或复现分数，本轮未重新读取知乎。

- [Qwen 初代报告](https://arxiv.org/html/2309.16609)第 2.4、3.2 节和表 5：预训练上下文 2,048，PPO 实验前先单独更新价值模型 50 步，Qwen-7B-Chat 的 C-Eval 0/5-shot 为 59.7/59.3，HumanEval 0-shot 为 37.2。公开 Chat 权重与报告中的 RLHF 实验仍须区分，正文原有说明保留。
- [Qwen2 报告](https://arxiv.org/html/2407.10671)第 2.2.2、3.1、4.2–4.3 节及表 8：细粒度专家中 50% 参数重新初始化；较大稠密模型采用 7T 数据集，0.5B 使用 12T 数据集，MoE 扩展后继续处理 4.5T token；SFT 超过 50 万条、两个 epoch；在线阶段用奖励模型选偏好对并继续 DPO。表 8 的 7B Instruct MMLU/GPQA 为 70.5/34.3。正文新增在线 DPO 的工单示意，明确训练时采样与实时用户服务不是一回事。
- [Qwen2.5 报告](https://arxiv.org/html/2412.15115)摘要、第 4 节和表 8：18T 是预训练数据集规模；SFT 超过 100 万条，在线 GRPO 每题采样 8 条回答，按奖励模型评分方差安排问题。Qwen2 与 Qwen2.5 的 7B Instruct MATH 为 52.9/75.5，HumanEval 为 79.9/84.8。正文新增合同任务例子，区分 Qwen2 的在线 DPO 与 Qwen2.5 报告中的在线 GRPO，不把该例子当成官方样本。
- [Qwen2.5-7B-Instruct 模型卡](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct)说明默认配置 32,768 token、长输入可配置 YaRN；这与正文的版本限定一致。

验证：两篇修改后的正文通过 Prettier、内容测试（7 项）和 `git diff --check`。
