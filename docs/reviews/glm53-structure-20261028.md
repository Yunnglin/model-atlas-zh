# GLM-5.3 与 GLM-5.3-Flash 结构复核

复核日期：2026-10-28。依据官方模型卡、发布文章与权重配置；这是资料与配置核对，不包含模型运行或基准复现。

- [GLM-5.3 官方模型卡](https://huggingface.co/zai-org/GLM-5.3)：5.3 使用 5.2 基座，重点通过后训练提升长程任务表现。Terminal Bench 3.0 为 28.3 对 5.2 的 4.6，DeepSWE v1.1 为 66.9 对 46.2；需同时保留模型卡中的评测框架及预算。
- [GLM-5.3 配置](https://huggingface.co/zai-org/GLM-5.3/raw/main/config.json)：78 层，前 3 层稠密，256 个路由专家选 8 个，加 1 个共享专家。`indexer_types` 的前七项为 full、full、full、shared、shared、shared、full；文章中的层序例子根据此配置解释。
- [GLM-5.3-Flash 官方说明](https://autoclaw.z.ai/blog/model/glm-5.3-flash)：Flash 使用新基座、约 30T token 的多模态训练语料，以及混合注意力和 mHC。IndexPool 压缩索引器缓存的键向量，而不是把原始 token 四合一。
- [GLM-5.3-Flash 配置](https://huggingface.co/zai-org/GLM-5.3-Flash/raw/main/config.json)：视觉编码器深度 24；语言骨干 45 层，11 组“三线性加一稀疏”之后再加 1 层线性注意力；前 3 层稠密前馈，其余 42 层 MoE，288 个路由专家选 8 个，加 1 个共享专家。图中未展开视觉预处理、归一化、连接与 MTP。
- [Flash 官方模型卡](https://huggingface.co/zai-org/GLM-5.3-Flash)包含评测与使用方式；页面中的训练案例为教学例子，不能推断其即为官方训练样本。

5.3 的图复用本库既有 GLM-5.2 基座图，并在图注说明复用关系；Flash 图根据配置单独绘制。两张图均为简化示意，不是官方原图。
