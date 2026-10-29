# GPT-2 深度审校

审校日期：2026-10-29。范围为 [GPT-2 正文](../../src/content/docs/nlp/gpt.md)，未运行模型或复现论文结果。

- **结构：完成。** 对照 [GPT-2 论文第 2.3 节及表 2](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)、[官方实现](https://github.com/openai/gpt-2)核对四种层数和维度、50,257 词表、1,024 token 窗口、因果生成，补充各子模块的 Pre-LN 和末尾归一化。最大模型 25 头及缓存估算使用最大版本参数；缓存计算是教学估算而非实测。
- **训练：完成。** 论文第 2 节核对 WebText 外链收集阈值、4,500 万外链与清洗后的 800 多万文档区别、40 GB 和截止时间，补充非英语网页过滤；下一 token 自监督目标及字节级 BPE 与论文一致。对比 [2019 年官方发布说明](https://openai.com/index/gpt-2-6-month-follow-up/)区分论文和发布记录中的型号命名。
- **评测：完成。** 论文表 3 核对 WikiText-103 的 17.48 与 1BW 的 42.16、数据预处理及同期对照；第 3.4 节和第 4 节核对 CoQA 55 F1、贪心解码与新闻领域文档重合。修正零样本措辞：模型不针对目标任务进行标注训练或微调，但评测提示可能包含已有问答上下文。会议案例是建议方案，不是运行结果。
- **配图：完成。** 核查[图示登记](../../src/content/data/figures.yaml)及[自绘示意图](../../public/figures/gpt2/overview.svg)中的分词、嵌入、因果模型、选择 token 和回接流程；图注明简化范围、来源与 CC BY 4.0。Chromium 本地访问正文，图片加载成功（原始宽 1060 像素），替代文本存在，截图中标签与箭头清晰。
- **社区：完成。** 2026-10-29 通过已登录 Chrome 实读「绝密伏击」的[《OpenAI ChatGPT（三）：十分钟读懂 GPT-2》](https://zhuanlan.zhihu.com/p/613895056)，当时显示 30 赞同、134 收藏（互动数会变化）。文章解释 WebText 的网页语料、约 40 GB 文本、1.5B 最大模型以及零样本任务，与 [GPT-2 原论文第 2.1、2.3 和 3 节](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)相互核对，正文保留训练数据、版本和评测条件的具体口径。文章的序列概率乘积式重复使用末位下标，正文以论文式 (1) 的逐位置条件概率为准；文章关于无监督和监督目标全局最小值的说法应限定在论文明确提出的简化设定，不能推广成所有实际训练都如此。论文讨论网页中的任务示范与零样本迁移，并非说 GPT-2 按任务标签显式进行监督多任务训练；正文用下一 token 自监督与自然包含的示范解释这个区别。社区文章的解读只作为对照，评测数值和架构以原论文为准。
