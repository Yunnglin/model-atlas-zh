# 知识蒸馏训练技术审阅

审阅日期：2026-10-29。通读 `src/content/docs/training/distillation.md`，对照论文、算例、配图和已有社区实读记录；未运行训练或复现评测。

## 原理与资料

- [经典蒸馏论文](https://arxiv.org/abs/1503.02531)说明教师与学生使用相同温度比较软分布，硬标签可参与训练，软损失乘 T² 是补偿梯度尺度的常见方式，不是所有蒸馏方法必选。
- [Sequence-KD](https://arxiv.org/abs/1606.07947) 使用教师生成序列，[GKD](https://arxiv.org/html/2306.13649) 探索学生生成轨迹、混合数据和多种分布差异，[MiniLLM](https://arxiv.org/html/2306.08543) 使用学生采样和反向 KL，并讨论教师混合采样与长度归一化。正文区分数据来源和优化方向；本次增加学生错误前缀的教学例子。
- 文中区分示范 SFT 与概率蒸馏、教师概率获取和分词器对齐限制，以及蒸馏和量化的关系。

## 例子与评测

- 分数 (2,0) 在 T=1 和 T=2 下的概率约为 (0.881,0.119) 和 (0.731,0.269)；p=(0.9,0.1)、q=(0.6,0.4) 的自然对数 KL 分别约 0.226 和 0.311。
- [DeepSeek-R1 初版第 2.3.3、2.4 节及表 5](https://arxiv.org/html/2501.12948v1)：约 60 万条推理与 20 万条非推理数据；7B 蒸馏模型基座 Qwen2.5-Math-7B，AIME pass@1 为 55.5、cons@64 为 83.3，MATH-500 pass@1 为 92.8。正文此次补充采样基准每题生成 64 次估计 pass@1，与 64 次投票区分；论文训练数据概述和更具体的数据准备叙述的差异见 [社区核查记录](distillation-zhihu-followup-20261028.md)。
- [Qwen3 报告表 21](https://arxiv.org/html/2505.09388)：相同离线蒸馏检查点继续 RL／在线蒸馏，AIME 2024 为 67.6／74.4，后续 GPU 时间 17920／1800 小时；不能当成包括教师和前序训练的完整成本。业务成功率为教学构造；评测建议包括相同学生基座、独立数据、延迟和遗忘。

## 配图

- `public/figures/training/distillation-offline.svg` 为原创 CC BY 4.0 教学图，许可与来源见 `docs/assets.md`；图中教师生成与筛选、学生训练和独立推理路径一致，明确这只是离线示范的一种方法。
- Chromium 打开本机 `/training/distillation/`，图像成功解码，替代文本存在；截图检查流程、箭头和显示。

## 社区

- [一只路过的烧鸡：On-Policy Distillation 原理篇](https://zhuanlan.zhihu.com/p/2023108953026883794) 在 2026-10-28 已登录实读时为 151 赞、275 收藏；文章将反向 KL 的适用性概括得较广，R1 训练样本构成需参照论文，详见 [交叉核查](distillation-zhihu-followup-20261028.md)。
- [小张：MiniLLM 解读](https://zhuanlan.zhihu.com/p/706214065) 的实读记录为 140 赞、239 收藏，见 [训练社区资料](training-community.md)；涉及序列蒸馏和性能的概括以原论文实验为准。正文未复制文章图文。

后续补充核查：[distillation-onpolicy-followup-20261029](distillation-onpolicy-followup-20261029.md)、[training-coverage-followup-20261029](training-coverage-followup-20261029.md)。

补充核对见 [quantization-distillation-example-review-20261029.md](quantization-distillation-example-review-20261029.md)；该记录仅覆盖新增例子，不替代本次完整审校。
