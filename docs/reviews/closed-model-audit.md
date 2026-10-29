# 闭源模型与决策模型定向审校

核对日期：2026-10-27。核对下列公开接口、代表性训练和评测说明，并阅读五张图的 SVG 标题与节点文字；未逐项复核全部陈述或图像的每个连接，也未运行模型、训练或评测。Jev 与 OmniJev 是独立项目，不能从名称推断继承关系；OmniJev 是公开代码和适配器权重的研究项目，不应与闭源服务混为一谈。

- **GPT-4o**：对照 [2024 系统卡](https://openai.com/index/gpt-4o-system-card/)与 [API 模型页](https://developers.openai.com/api/docs/models/gpt-4o)，核对公开模态、2023 年 10 月的预训练数据截止、当时语音响应时间以及服务与模型能力边界。澄清 0.98／0.83 是分别在应拒绝和应配合场景中的行为比例，不是身份识别准确率；API 页面当日标示 Deprecated。教学图明确仅展示模型层公开输入输出和应用侧流程。
- **Claude 初代**：对照[发布文章](https://www.anthropic.com/news/introducing-claude)、[100K 更新](https://www.anthropic.com/news/100k-context-windows)及 [Constitutional AI 论文](https://arxiv.org/abs/2212.08073)，核对 2023 年版本时间、监督阶段的批评修订和 AI 偏好数据训练流程；公开论文不证明后续每个 Claude 版本都使用相同配方。教学图是外部应用流程，不声称内部架构。
- **Gemini 1.5 Pro 与 Flash**：对照[技术报告 v5](https://arxiv.org/html/2403.05530v5)第 3、5 节及附录模型卡，核对 Pro 稀疏 MoE、10M 文本检索的实验边界、1H-VideoQA 125 题与 1 fps 采样。补充 Flash 是稠密 Transformer decoder、注意力和前馈并行，并从 Pro 在线蒸馏；完整结构和数据未公开。教学图仅表示输入输出。
- **Jev**：对照 [System One](https://docs.typesafe.ai/concepts/system-one)、[RLCD 公开说明](https://docs.typesafe.ai/introduction/machine-learning-primer)及 [Score 接口](https://docs.typesafe.ai/primitives/score)，核对文本输入、Choice／Noul／Score 与校准边界；补充 Score 是等级数值的概率加权平均，举例说明相同分数可以对应不同分布。教学图不推测内部网络。所链知乎文章的内部结构部分为推测，不作为官方事实。
- **OmniJev v1.1**：对照[项目仓库](https://github.com/tinnel123666888/OmniJev)的发布模型、训练和校准表，核对三种 Qwen3.5 底座、LoRA 与决策头、2B choice 的 ECE 与 NLL 数字。项目报告的历史轨迹重放不等于独立在线闭环；其教学图中应用执行与反馈是外部流程。

公开服务的文档可能更新；此记录不构成每项能力、许可和服务可用性的持续保证。知乎交叉核查以既有 [筛选记录](zhihu-reading.md)为准，本轮没有重新核验所有相关文章的赞同和收藏。
