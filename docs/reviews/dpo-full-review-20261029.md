# DPO 训练技术审阅

审阅日期：2026-10-29。范围为 `src/content/docs/training/dpo.md` 的偏好目标、推导、数据、数值例子、评测、配图和中文参考；未运行偏好训练或复现论文实验。

## 原理与资料

- [DPO 论文第 4 节及附录 A.1–A.2](https://arxiv.org/html/2305.18290)：在 Bradley–Terry 偏好与参考策略约束的推导下，同一问题的配分函数在奖励差中抵消，参考策略仍参与两个答案概率的计算。正文区分理论最优策略和有限模型训练，未把参考模型描述为硬性距离边界。
- 经典目标比较优选与劣选回答的相对参考对数概率；数据准备可离线，在线收集属于不同流程选择。正文将 SFT、LoRA、RLHF 和 RLVR 按用途区别。

## 例子与评测

- 正文与图中的参考概率 0.03 / 0.16、策略概率 0.06 / 0.08 给出比值 2 / 0.5；β=1 时损失 `-log(sigmoid(log 4)) = -log(0.8) ≈ 0.223`。策略与参考相同时损失为 `-log(0.5) ≈ 0.693`。该例正确展示相对变化和绝对概率顺序是两回事。
- 论文第 6.3 节表 1：CNN/DailyMail 的 GPT-4 胜率以数据集参考摘要为对手；DPO 在温度 0 / 0.25 为 36% / 31%，PPO 为 26% / 23%。第 6.4 节指出简单裁判提示可能偏向较长重复摘要，并比较了强调简洁的提示与人工判断。正文保留评测对象和温度。
- [Qwen2.5-Coder 报告](https://arxiv.org/html/2409.12186)说明 SFT 后采用离线 DPO，使用代码执行和模型裁判；正文没有把自动反馈写成人工标签。训练与业务错例是建议，未声称实测。

## 配图

- `public/figures/training/dpo-preference.svg` 为原创 CC BY 4.0 教学图，依据和许可记录见 `docs/assets.md` 与 `public/figures/LICENSE-TEACHING.txt`；图中概率、相对变化和文字与正文一致。
- Chromium 打开本地 `/training/dpo/`，滚动后图片正常解码，替代文本存在；截图检查卡片与数字。SVG 没有固定像素尺寸，浏览器内在尺寸 275×150，不影响按页面宽度显示。

## 社区

- [猛猿：人人都能看懂的 DPO 数学原理](https://zhuanlan.zhihu.com/p/721073733) 于 2026-10-28 实读时 955 赞、1149 收藏；其推导与原论文的核对见 [DPO 推导记录](dpo-community-derivation-20261028.md)。
- [akaihaoshuai：基于 Qwen3 的 DPO／KTO 实践记录](https://zhuanlan.zhihu.com/p/1907949654739513685) 当日实读 443 赞、956 收藏，详见 [曲线核对](dpo-kto-zhihu-practice-20261028.md)。正文采用训练曲线观察，不把作者对原因或方法优劣的推测当成普遍事实；没有复制文章配图。

后续补充核查：[ppo-grpo-dpo-numerical-review-20261029](ppo-grpo-dpo-numerical-review-20261029.md)。

## 评测数字复核

- 再对照[原论文第 6.3 节表 1 与附录 C.2](https://arxiv.org/html/2305.18290)：被测策略沿用 Reddit TL;DR 摘要实验，转到 CNN/DailyMail 测试集新闻；GPT-4-0314 以强调简洁的提示比较候选摘要和数据集参考摘要，并随机安排顺序。温度 0 时 DPO / PPO 为 36% / 26%，温度 0.25 时为 31% / 23%，均与正文一致。两种算法不是直接互相比胜率；该项不是人工评审分数。

后续补充：[分布迁移实验数据条件补充核对](dpo-distribution-shift-data-check-20261029.md)。
