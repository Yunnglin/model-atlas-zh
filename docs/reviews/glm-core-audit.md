# GLM 4.5 至 5.3 核心模型定向审校

核对日期：2026-10-27。本轮对照对应官方模型卡、公开配置和原报告，重点检查模型卡、结构、训练信息是否跨版本套用，以及部分评测数字和条件；阅读了 8 张教学图的 SVG 文字与连接关系。这不代表所有事实逐句核验、所有图片逐像素核验，也没有运行模型或复现评测。

- **GLM-4.5**：对照[原报告](https://arxiv.org/html/2508.06471)，核对 355B／32B、3 个稠密层、89 个 MoE 层、160 选 8 的专家设置、23T 多阶段数据及专家迭代。图中任务专家是不同完整模型，不是 MoE 层内专家。补充 SWE-bench Verified 的 OpenHands 版本、采样、上下文和最大交互轮数；该数字不能直接代表任意工具环境的表现。
- **GLM-4.6**：对照[模型卡](https://huggingface.co/zai-org/GLM-4.6)和[配置](https://huggingface.co/zai-org/GLM-4.6/raw/main/config.json)，核对 200K 定位、92 层、前 3 层稠密、160 选 8 和 96／8 个查询／键值头。官方卡将 4.5 报告作为背景，不能由此认定 4.6 完整后训练配方；图展示模型与外部工具的交互，不是网络层图。
- **GLM-4.7**：对照[模型卡](https://huggingface.co/zai-org/GLM-4.7)和[配置](https://huggingface.co/zai-org/GLM-4.7/raw/main/config.json)，核对公开结构、交错思考与思考保留，以及 73.8、66.7、41.0 各基准的对应关系。图展示可选交互和保留行为，未画内部网络。
- **GLM-5**：对照[技术报告](https://arxiv.org/html/2602.15763)的训练和评测章节以及[官方模型卡](https://huggingface.co/zai-org/GLM-5)，核对 DSA、MoE、MLA 各自作用、28.5T 训练量、异步智能体训练与 SWE-bench Verified 的 77.8。教学图省略模型层内细节。
- **GLM-5.1**：对照[模型卡](https://huggingface.co/zai-org/GLM-5.1)和[配置](https://huggingface.co/zai-org/GLM-5.1/raw/main/config.json)，核对 202752 位置数、256 选 8、2048 索引上限以及 SWE-bench Pro、Terminal-Bench 和 NL2Repo 的分数。模型页面统计参数和 GLM-5 报告口径不应直接相减；前代报告不等于本版本完整训练配方。
- **GLM-5.2**：对照[模型卡](https://huggingface.co/zai-org/GLM-5.2)和[配置](https://huggingface.co/zai-org/GLM-5.2/raw/main/config.json)，核对 1M 位置配置、IndexShare 与 2048 索引上限，确认 81.0 是指定 Terminus-2 设置、82.7 是另一套 Claude Code 设置。图表明复用的是候选索引，层输出仍单独计算；具体运行环境、时间与资源限制需要按模型卡脚注记录。
- **GLM-5.3**：对照[模型卡](https://huggingface.co/zai-org/GLM-5.3)和[配置](https://huggingface.co/zai-org/GLM-5.3/raw/main/config.json)，核对同 5.2 基座、后训练、上下文与模型许可。补充 Terminal Bench 3.0 的三次运行平均、框架、上下文及预算，避免把 28.3 看成无工具条件下单次作答成绩。图强调同基座与外部工具，省略层内计算。
- **GLM-5.3-Flash**：对照[模型卡](https://huggingface.co/zai-org/GLM-5.3-Flash)和[配置](https://huggingface.co/zai-org/GLM-5.3-Flash/raw/main/config.json)，核对新基座、多模态、320B／18B、30T、45 个语言层及 24 个视觉层；增加 11 组「3 层线性 + 1 层稀疏」另加 1 层线性注意力的数层算例，修正至 GLM-5.3 独立文章的链接。图为多模态数据流简化示意。

社区参考以现有 [知乎筛选记录](zhihu-reading.md)为准；本轮未重新核验每个版本对应的知乎正文与赞同、收藏。官方页面和配置可能更新，模型能力、服务接口与权重许可应按具体版本重新核对。
