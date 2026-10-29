# Qwen-VLA 训练阶段与评测复核

2026-10-28 对照 [技术报告 v2](https://arxiv.org/html/2605.30280v2)第 5.2.3 节及表 11：三个检查点依次为 CPT、CPT + SFT、CPT + SFT + RL；RL 的轨迹只来自 SimplerEnv，使用稀疏二元成功奖励。正文新增 Simpler 64.3→70.8→73.7、RoboCasa 40.4→56.0→56.7 和 RoboTwin-Easy 64.3→86.3→86.1 的仿真成功率，强调百分点和小幅回落。

此前中文资料阅读记录见 [Qwen-VLA 社区参考核查](qwen-vla-community.md)；本次没有重新打开知乎文章或执行机器人训练、仿真与真实实验。
