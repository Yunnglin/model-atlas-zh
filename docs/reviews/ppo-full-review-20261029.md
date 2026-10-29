# PPO 训练技术审阅

审阅日期：2026-10-29。完整通读 `src/content/docs/training/ppo.md`，对照原论文、InstructGPT、算例、图与已有知乎实读记录；未运行训练或复现评测。

## 原理与资料

- [PPO 原论文 v2 第 3、5 节](https://arxiv.org/pdf/1707.06347) 的 clipped surrogate 先分别计算原比率与裁剪比率乘优势，再取较小值并求平均；它限制代理目标的激励，不是对概率比或 KL 的硬约束。论文提出利用旧策略采样，在同批数据上进行多个小批次更新。
- 价值函数可以共享策略网络，并非一定要独立模型；奖励模型、价值函数与参考策略作用不同。[InstructGPT 第 3 节](https://arxiv.org/html/2203.02155)展示人类偏好奖励、SFT 参考策略与 PPO-ptx 的组合。本次补充旧策略与参考策略的区别及 PPO-ptx 的预训练数据混合，避免把特定训练配方当作 PPO 固定义务。
- [DeepSeekMath 第 4.1 节](https://arxiv.org/html/2402.03300) 使用组相对奖励作为优势，并保留 PPO 风格裁剪；[GSPO](https://arxiv.org/html/2507.18071v2)定义序列级归一化比率与裁剪。正文区分更新方式和 RLHF 反馈来源。

## 算例与评测

- ε=0.2 时，正优势 +1、概率比 1.5，未裁剪目标 1.5，裁剪后 1.2，取 1.2；负优势 -1、概率比 0.5，未裁剪目标 -0.5，裁剪后 -0.8，取 -0.8。优势 0.8−0.5=0.3 只作为简化单步教学示意，不是一般 GAE 计算。
- 报表错例、独立题正确性和长度偏好排查是构造建议；奖励模型得分上升不能直接当作人类偏好或能力提升。参考模型 KL、裁剪比例与响应长度属于训练诊断指标；正文未将其当作最终质量评测。

## 配图

- `public/figures/training/ppo-clipping.svg` 为原创教学图，采用仓库教学图许可 `public/figures/LICENSE-TEACHING.txt`；两项算例及箭头解释与正文和论文目标一致。
- Chromium 打开本机 `/training/ppo/`，图像加载及解码成功，替代文本存在；截图检查正负优势、运算符和排版。页面为编辑前静态构建，配图及替代文字与此次正文变更无关。

## 社区

- [小神弟弟：RLHF 场景下的 PPO 算法的来龙去脉](https://zhuanlan.zhihu.com/p/631338315) 在 2026-10-28 的已登录实读记录为 445 赞同、980 收藏，覆盖策略梯度、优势估计和预训练混合，见 [InstructGPT 社区审阅](instructgpt-independent.md)。本次加入正文作为延伸阅读，公式和训练配方以论文为准；未复制社区文章图文，也未重新查看实时互动数。

后续补充核查：[ppo-grpo-dpo-numerical-review-20261029](ppo-grpo-dpo-numerical-review-20261029.md)。

补充核对见 [ppo-gae-example-review-20261029.md](ppo-gae-example-review-20261029.md)；该记录仅覆盖新增例子，不替代本次完整审校。
