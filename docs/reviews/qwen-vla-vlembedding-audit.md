# Qwen-VLA 与 Qwen3-VL-Embedding 专项复核

核对日期：2026-10-28。本轮逐项对照下列官方资料、文章关键段落和教学 SVG 的文字与箭头；没有运行模型、训练或复现评测，也没有完成全文逐句独立专家认证。

## Qwen-VLA

- [论文 v2 第 2.2–2.4 节](https://arxiv.org/html/2605.30280v2#S2)：核对 Qwen3.5 视觉语言骨干、约 1.15B 参数的 16 块 DiT 动作专家与流匹配。补充说明统一动作表示统一张量接口和掩码，不把不同机器人的物理控制语义强行变为同一坐标定义。
- [论文 v2 第 3 节和表 1](https://arxiv.org/html/2605.30280v2#S3)：核对 T2A、继续预训练、SFT 和 RL 阶段，以及 74.2% 操作轨迹等数据混合比例；比例不是各数据源小时数比例。
- [论文 v2 表 4–6](https://arxiv.org/html/2605.30280v2#S5)：核对 LIBERO、Simpler-WidowX、RoboTwin 和 ALOHA 结果。补清真机 76.9% OOD 均值来自从 Qwen-VLA-Base 出发并经 ALOHA 示范微调的模型，而非把仿真 Instruct 权重不经适配直接部署的成功率。
- [官方仓库](https://github.com/QwenLM/Qwen-VLA)在本次查看时未确认 Qwen-VLA 权重与推理训练代码的发布，正文保留限制，不把 Qwen3.5 骨干许可转给 Qwen-VLA。
- 图 [overview.svg](../../public/figures/qwen-vla/overview.svg) 为原创教学简图，阅读标注、箭头和图示元数据后未发现将控制系统画成模型内部结构；XML 解析通过。它不是论文逐层结构图，也未进行机器人执行验证。

## Qwen3-VL-Embedding

- [论文 v1 第 2、4、5 节](https://arxiv.org/html/2601.04720v1)：核对分别编码、末位置表示、对比预训练、多任务训练与重排器蒸馏；独立权重的 Reranker 与 Embedding 不因蒸馏而成为一个模型。
- [论文 v1 第 6.1 节、表 3 和表 5](https://arxiv.org/html/2601.04720v1#S6)：核对 MMEB-v2 的 73.2、77.8 与固定 2B Embedding top-100 候选时 73.4、79.2；补充表 3 所用 16,384 token 上下文、图像及视频 token / 帧预算，避免与模型卡的 32K 输入上限混淆。结果是报告指定条件下的汇总分，不是线上回答正确率。
- [8B 官方模型卡](https://huggingface.co/Qwen/Qwen3-VL-Embedding-8B)列出 Apache 2.0；正文将许可限定到该权重，未把该许可泛化至其他模型。
- 图 [overview.svg](../../public/figures/qwen3-vl-embedding/overview.svg) 为原创教学流程图，区分召回和独立的重排权重；XML 解析通过，不替代模型计算图或速度实测。

## 知乎资料范围

- [Qwen-VLA 社区核查](qwen-vla-community.md)记录周熙钦的回答当时显示 134 赞同，收藏数未显示；本轮未复核页面及互动数。
- [多模态 Embedding 与 Reranker 社区核查](qwen3-vl-reranker-community.md)记录算法大作手的文章旧快照为 25 赞同、37 收藏；本轮未复核页面及互动数。两篇只能作为阅读角度参考，结构及评测以官方资料为准。
