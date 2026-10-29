# DeepSeek-V3-0324 专项审校

审校日期：2026-10-29。完整通读 [V3-0324 正文](../../src/content/docs/nlp/deepseek-v3-0324-model.md)，以公开更新权重和配置为范围；未运行模型或复现评测，活动页面和库存查询为教学构造。

- **结构**：对照[官方配置](https://huggingface.co/deepseek-ai/DeepSeek-V3-0324/blob/main/config.json)、[模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V3-0324)与[初代 V3 技术报告第 2 节](https://arxiv.org/html/2412.19437v2)，核对 61 层、前 3 层稠密、256 路由专家选 8 加 1 共享专家、MLA 和 163840 位置配置。补充 512 维压缩 KV 与 64 维位置相关键的缓存估算，按 61 层、8192 token 和每值 2 字节得 549 MiB；不含权重、框架开销与并行分配。
- **训练**：官方模型卡说明同 V3 架构、介绍能力更新，但没有公开完整更新配方。初代报告的预训练、SFT、RL、FP8 和 MTP 被明确标为前代背景，不推断 0324 新增数据或训练步骤。
- **评测**：模型卡核对 MMLU-Pro 75.9/81.2、GPQA 59.1/68.4、AIME 39.6/59.4、LiveCodeBench 39.2/49.2；数值为官方对照，各条目未完整披露所有提示及采样条件。核对当时 API 温度 1.0 映射至模型温度 0.3 的说明，不推广至本地运行框架；网页验证与样本比率是教学方案。
- **配图**：核对[图示登记](../../src/content/data/figures.yaml)、[V3 主干简图](../../public/figures/deepseek-v3/overview.svg)和[工具交互简图](../../public/figures/deepseek-v3-0324/overview.svg)，前者明确只画后 58 层 MoE 并省略前三层稠密层，后者说明请求由外部系统执行；均为标注来源及 CC BY 4.0 的教学图。Chromium 本地正文滚动后两图解码成功，替代文本存在，截图目视检查中文与箭头。
- **社区**：沿用[2026-10-28 实读记录](deepseek-new-community-logged-in.md)，Karminski-牙医的 [V3-0324 可视化编程体验](https://www.zhihu.com/question/1887626597667952435/answer/130712735685)当时 1639 赞、462 收藏，展示小球碰撞及行星模拟并指出轨道周期错误；其有限案例可用于错例设计，不作为模型通用排名或训练方法依据。官方模型卡可核对前端能力声明但未披露相关后训练来源。本次未重读或更新互动量。
