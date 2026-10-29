# R1-0528、Qwen 数学过程评分和 GLM-Image 接入复核

核对日期：2026-10-28。三篇文章的模型卡、任务边界、代表性训练与评测描述和原创示意图对照以下资料，未实际下载大模型、运行或复现成绩。

- [DeepSeek-R1-0528](../../src/content/docs/nlp/deepseek-r1-0528-model.md)：[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528)将 AIME 2025 的 70.0 与 87.5 标为 pass@1；评测说明使用 16 次采样估计，不能当作 pass@16。初版 [R1 论文](https://arxiv.org/abs/2501.12948v1)用于训练背景，不代表公开了更新版完整配方。权重页约 685B 的展示值不等于激活参数。日期依据[权重仓库历史](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/commits/main)的 2025 年 5 月提交。
- [Qwen2.5-Math-PRM](../../src/content/docs/nlp/qwen25-math-prm-model.md)：[报告 v1](https://arxiv.org/html/2501.07301v1#S4)描述 8 次续写构造硬标签与 72B critic 一致性过滤；论文表 6 的 66.2 与 67.6 为指定 7B 生成器、Best-of-8 及各项均值；74.7 是候选中至少有一个正确的参考上界，不是 PRM 实际挑中的准确率。步骤分数乘积是所选排序策略，不能当成已校准的答案正确概率。
- [GLM-Image](../../src/content/docs/cv/glm-image-model.md)：[官方发布](https://z.ai/blog/glm-image)列 9B 自回归生成器和 7B 扩散解码器；模型和组件、代码的许可应分别读取[模型卡](https://huggingface.co/zai-org/GLM-Image)与[仓库](https://github.com/zai-org/GLM-Image)。模型方的评测结果受其数据和设置约束。

三张原创图只是教学流程，非官方结构图。知乎交叉资料的可读正文和互动数尚未核实，见[社区盘点](community-coverage.md)。
