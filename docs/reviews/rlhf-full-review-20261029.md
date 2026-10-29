# RLHF 训练技术审阅

审阅日期：2026-10-29。完整通读 `src/content/docs/training/rlhf.md`，对照 InstructGPT 和早期 RLHF 论文、算例、配图及既有社区实读记录；未实际训练或复现论文评测。

## 原理与资料

- [InstructGPT 第 3 节](https://arxiv.org/html/2203.02155) 描述人工示范 SFT、人工候选排序训练奖励模型、PPO 策略优化；偏好概率采用评分差的 sigmoid，参考策略 KL 项约束相对 SFT 模型的偏离。正文表明这些是代表性路线，奖励来源与优化方法属于不同维度。
- 对照 [2019 人类偏好语言模型论文](https://arxiv.org/abs/1909.08593)和[2020 摘要论文](https://arxiv.org/abs/2009.01325)，补充 RLHF 早于 InstructGPT 的历史；没有把 DPO 写成必须训练显式奖励模型的 RLHF。
- 参考策略 KL 是当前策略分布下对数比的期望，不等于单条样本或每一步的硬约束；正文新增两回答算例说明。

## 算例与评测

- 用自然对数计算，p=(0.2,0.8)、q=(0.5,0.5) 时，A 的单样本对数比 log(0.4)≈−0.916；分布 KL≈0.192745，约 0.193。偏好分差 0 时 sigmoid=0.5；例子是教学计算。
- 论文第 3.2 节：SFT、奖励模型、PPO 分别约 13k、33k、31k 条训练提示；PPO 提示仅来源于 API，API 提示按用户 ID 划分。论文第 4.1 节比较 175B InstructGPT 与同规模 GPT-3 和 few-shot GPT-3 的偏好为 85±3%、71±4%，均是所述标注设置下的偏好结果。
- 正文区分训练奖励、输出长度、参考偏离等诊断与独立事实、安全、用户偏好的评价；过拟合解释错例为构造教学示意。

## 配图

- `public/figures/training/rlhf-pipeline.svg` 与 `feedback-grpo.svg` 为原创 CC BY 4.0 教学图，许可见 `public/figures/LICENSE-TEACHING.txt`；分别画 InstructGPT 的 PPO 路线，以及可验证奖励／偏好评分与 GRPO 更新的组合，后一幅不是 InstructGPT 流程。
- Chromium 打开本机 `/training/rlhf/`，两图成功解码且替代文本存在；截图检查文字、箭头、步骤及第二图对 RLHF 与 RLVR 区别的表述。页面是正文编辑前的静态构建，图文资产未因本次编辑改变。

## 社区

- [小神弟弟：RLHF 场景下的 PPO 算法的来龙去脉](https://zhuanlan.zhihu.com/p/631338315) 于 2026-10-28 已登录实读时 445 赞、980 收藏，见 [InstructGPT 审阅](instructgpt-independent.md)。文章涉及偏好评分、价值模型与 PPO；本文以原论文验证流程与具体数值，本次新增延伸阅读链接，未复制社区图文或重新查看实时互动数。

后续补充核查：[training-coverage-followup-20261029](training-coverage-followup-20261029.md)。
