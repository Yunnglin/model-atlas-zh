# GLM-5.2 专项审校

审校日期：2026-10-29。完整通读 [GLM-5.2 正文](../../src/content/docs/nlp/glm52-model.md)，范围为公开权重及模型卡；未运行模型或复现评测，支付案例为教学构造。

- **结构**：对照[官方配置](https://huggingface.co/zai-org/GLM-5.2/raw/main/config.json)与[模型卡](https://huggingface.co/zai-org/GLM-5.2)，核对 78 层、前三层稠密前馈、256 个路由专家选 8 加共享专家、1,048,576 位置、index_topk 2048。`indexer_types` 前七项 full/full/full/shared/shared/shared/full；结合 [IndexCache 论文第 3 节](https://arxiv.org/html/2603.12201)解释位置索引复用，不能当作所有层输出复用。
- **训练**：模型卡引用 GLM-5 报告，但未公开可完整复现 5.2 的数据及训练流程；正文将前代背景和示意性工具环境分开，不推断奖励算法或样本。1M 下 2.9 倍 FLOPs 与 MTP 最多 20% 接受长度变化按模型卡描述，不推导端到端加速。
- **评测**：模型卡表格及脚注核对 SWE-bench Pro 62.1/58.4、OpenHands 与 400K、Terminal-Bench 2.1 81.0/82.7、HLE 有无工具 40.5/54.7。新增 Terminus-2 的 4 小时/500 episode 与 Claude Code 的无总时限/5 次平均比较，明确不同框架预算不能单独归因差距；5.1 卡对 63.5 的基准版本标注差异保留。
- **配图**：检查[图片登记](../../src/content/data/figures.yaml)、[IndexShare 教学图](../../public/figures/glm52/overview.svg)及[共用主干图](../../public/figures/glm5-family/backbone.svg)，分别表达位置复用与稠密/MoE 前馈层，标注非官方简化及 CC BY 4.0；后者已补充[素材登记](../assets.md)。Chromium 本地正文滚动并解码两图成功，替代文本存在；截图核查中文及箭头。
- **社区**：沿用[2026-10-27 实读记录](glm-community.md)，智谱的 [GLM-5.2 发布文](https://zhuanlan.zhihu.com/p/2050513163658044507)当时 321 赞、112 收藏，讨论 1M 上下文和长程任务；与模型卡配置、SWE-bench 脚手架与预算交叉核对，厂方展示不等同独立测试，也不能证明长上下文无损。本次未重读或更新互动量。
