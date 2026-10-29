# MiniMax M3 全文审校

审校日期：2026-10-29。通读 [M3 正文](../../src/content/docs/omni/minimax-m3-model.md)，以发布的 MiniMax M3 及 MSA 方法论文为范围；未运行模型或复现评测。

- **结构与模型卡**：对照[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3)和[配置](https://huggingface.co/MiniMaxAI/MiniMax-M3/raw/main/config.json)，核对约 428B／23B、60 层、64 查询头／4 KV 头、128 路由专家选 4 及 1 共享专家，前 3 层全注意力、后 57 层稀疏注意力。多模态输入与工具执行环境分开说明。
- **训练**：对照 [MSA 论文 v1](https://arxiv.org/html/2606.13392v1)第 3、5 节，核对索引器 KL 训练、梯度分离、预热与当前块保留；新增 109B 实验中从头训练和从 GQA 继续训练的对比、40B 预热与 3T 预算。该实验模型不是发布的 M3，不把其预算或消融当作 M3 的完整训练配方。
- **评测**：对照[官方发布说明](https://www.minimax.io/blog/minimax-m3)的 SWE-Bench Pro 59.0、Terminal-Bench 2.1 66.0 与 1M 上下文加速结果；补充 Pro 测试使用 Claude Code 脚手架和内部基础设施。MSA 论文中的 109B／H800 性能实验与发布页对 M2 的比较分别记载，不混为同一指标。
- **配图**：检查[图示登记](../../src/content/data/figures.yaml)和[教学图](../../public/figures/minimax-m3/overview.svg)；2026-10-29 在 Chromium 实际加载并目视检查文字和箭头，图明确为稀疏层示意且前三层全注意力，不冒充官方架构图。图片替代文本存在。
- **知乎**：沿用 [2026-10-27 已登录阅读记录](minimax-community.md)：绝密伏击的 [MSA 解读](https://zhuanlan.zhihu.com/p/2053179886907531735)当时 15 赞、25 收藏；文章讨论 GQA 分组、索引与主分支、预热和辅助损失，对照论文第 3 节理解。该文是论文解读，不视为独立测评；109B 实验不能直接当成 M3 的结果。互动数量为历史快照。

正文中的日志选择、上传修复案例为教学构造；未声称执行工具或模型推理。
