# DeepSeekMath-V2 全文审校

审校日期：2026-10-29。通读[正文](../../src/content/docs/nlp/deepseek-math-v2-model.md)，核查自然语言证明模型 DeepSeekMath-V2；未运行模型或复现评测。

- **结构与模型卡**：对照[技术报告](https://arxiv.org/html/2511.22570v1)第 1、2 节、[官方配置](https://huggingface.co/deepseek-ai/DeepSeek-Math-V2/blob/main/config.json)与[模型卡](https://huggingface.co/deepseek-ai/DeepSeek-Math-V2)，核对 V3.2-Exp-Base、61 层、前 3 层稠密、256 个路由专家选择 8 个和 Apache 2.0。配置位置上限 163840 与论文顺序实验单次 128K 的预算分开；生成和验证是最终模型可承担的角色，不意味部署三套模型。
- **训练**：对照报告第 2 节核对 17503 道题的来源、专家评分、元验证、自动标注及 GRPO 迭代；0.85 到 0.96 是元验证器评出的分析质量，不是人工准确率。按式 1、5、6 新增有缺漏证明的奖励算例，区分证明分数、自评一致项和分析质量，并标明算例不是模型实测。
- **评测**：对照报告第 3.2、3.3 节：补充 IMO Shortlist 顺序实验每题 32 条轨迹、最终验证器 32 次分析多数投票及自评挑选的口径；高计算搜索的 64 证明、64 分析、最多 16 次修订与专家评阅均依论文叙述，不与单次推理比较。IMO 2025 为 5/6，Putnam 2024 为 118/120，不能当成同等预算的正式参赛成绩。
- **配图**：检查[登记](../../src/content/data/figures.yaml)、[流程图](../../public/figures/deepseek-math-v2/overview.svg)及[语言骨干图](../../public/figures/deepseek-math-v2/backbone.svg)。Chromium 本地正文加载两图并目视检查中文和箭头；均为原创简化教学图，不是官方原图。补充骨干图来源、许可与哈希至[素材登记](../assets.md)。
- **知乎**：2026-10-29 主审使用已登录 Chrome 阅读 Qing的算法笔记的[《DeepSeekMath-V2 的自我验证》](https://zhuanlan.zhihu.com/p/1977755295989130582)，当时 11 赞、16 收藏。文章解释验证器分析并评分、元验证器检查所指问题是否真实及是否支持评分、生成器获得证明和自评监督；与报告第 2.1、2.2 节一致。文章“类过程奖励”是作者自己的说法，不当作论文定义。赞藏数是当时快照，文章是论文解读而非独立复现。
