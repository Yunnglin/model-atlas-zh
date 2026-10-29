# 训练全流程审阅

审阅日期：2026-10-29。通读 `src/content/docs/training/pipeline.md`，对照原论文、例子、配图及既有社区实读；未训练模型或复现评测。

## 原理与资料

- [InstructGPT 论文第 3 节](https://arxiv.org/html/2203.02155)：人工示范 SFT、人工排序训练奖励模型及 PPO 优化是一种代表性路线；PPO-ptx 混入预训练损失。并非所有模型都必须使用各阶段。
- [BERT](https://arxiv.org/abs/1810.04805)、[CLIP](https://arxiv.org/abs/2103.00020)及[流匹配](https://arxiv.org/abs/2210.02747)分别提供掩码预测、对比目标和连续生成实例；自回归下一 token 预测不覆盖全部模型。LoRA、奖励来源与策略更新属于不同维度。
- 本次补充示范错误、偏好不一致和奖励模型漏洞的分阶段排查例子，均为应用建议。

## 例子与评测

- 四个回答组成 4×3/2=6 个比较对；论文第 3.5 节收集每题 4–9 个回答，指出将同题相关比较作为独立样本打乱可能导致奖励模型过拟合，并按提示组织比较。
- 论文对所研究提示分布中的人工偏好报告 1.3B InstructGPT 胜过 175B GPT-3；这不是跨任务的准确率比较。2+3、过拟合解释、验证器与事故排查为构造示例。

## 配图

- `public/figures/training/rlhf-pipeline.svg` 为 CC BY 4.0 原创教学图，依据 InstructGPT 论文、许可见 `public/figures/LICENSE-TEACHING.txt`；概括示范、排序和 PPO，并标明只是一条路线。
- Chromium 打开 `/training/pipeline/`，图成功解码、替代文本存在；截图检查阶段、箭头和版面。

## 社区

- [小神弟弟：RLHF 场景下的 PPO 算法](https://zhuanlan.zhihu.com/p/631338315) 于 2026-10-28 已登录实读时 445 赞、980 收藏，见 [InstructGPT 独立审校](instructgpt-independent.md)。文章解释策略梯度、优势估计与 PPO-ptx 中预训练数据混合；训练流程和具体事实按原论文核查，未复制图文。本次在正文加入延伸阅读。
