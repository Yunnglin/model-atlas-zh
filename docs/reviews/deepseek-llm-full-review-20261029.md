# DeepSeek LLM 初代全文审校

审校日期：2026-10-29。通读 [DeepSeek LLM 正文](../../src/content/docs/nlp/deepseek-llm-model.md)，范围为初代 7B／67B Base 和 Chat；未运行模型或复现论文评测。

- **结构与模型卡**：对照 [技术报告第 2 节](https://arxiv.org/html/2401.02954)表 2，确认稠密 Transformer、7B 的 30 层与 32 个查询／键值头、67B 的 95 层与 64 查询头／8 键值头和 4096 上下文。后者 GQA 的 KV 头共享不能推为整机显存减少八倍。补充 [7B Base 模型卡](https://huggingface.co/deepseek-ai/deepseek-llm-7b-base)所标 DeepSeek 许可及具体条款入口；论文日期与权重上传日期分开说明。
- **训练**：对照报告第 2–4 节，确认约 2T 中文和英文 token、超过 100 万条 SFT 样例、缩放试验的数据质量影响和 SFT／DPO 区别；添加售后对话如何构造不同指令的教学示例。表 12 的两阶段 SFT 仅用于 7B 对照，67B 按论文只做一阶段。
- **评测**：对照表 5 和表 12：Base HumanEval 为 7B 26.2、67B 42.7，7B 的 SFT 对照包含温度零的重复比例；表中不同任务采用各自提示和指标。新增表 13 的选择题数据实验：C-Eval 47.0→71.3、CMMLU 49.7→73.8，而生成任务 TriviaQA 保持 57.9，说明任务格式与真实生成能力的区别；这不是普遍的因果保证。论文对 C-Eval 验证集和 CMMLU 测试集去重，未将这组选择题加入常规训练。
- **配图**：核对 [图登记](../../src/content/data/figures.yaml)和 [原创 SVG](../../public/figures/deepseek-llm/overview.svg)，依据论文且标为教学简图，省略层内细节。Chromium 加载本地正文，图片解码为 1060×260，替代文本存在；目视检查文字与箭头完整。
- **知乎**：2026-10-29 由主审使用已登录 Chrome 实读 NeverMind 的 [DeepSeek LLM 论文解读](https://zhuanlan.zhihu.com/p/22523382162)，当时 35 赞、30 收藏；文章解释固定 FLOPs 下模型与数据规模的分配、不同数据质量改变缩放拟合、67B GQA、SFT 和 DPO。对照论文第 2–4 节，缩放规律属于论文的实验范围，不把文章公式或示例代码当作通用调参配方。赞藏数为阅读时快照，文章解读不是独立复现。

售后与错例均为教学构造，不是模型实测；报告成绩属于对应检查点及其评测协议。

- **评测数字补充复核（2026-10-29）**：[论文表 5、12、13](https://arxiv.org/html/2401.02954)分别列出：Base 的 HumanEval 0-shot，7B 为 26.2、67B 为 42.7；7B Chat 两阶段 SFT 的 HumanEval 48.2→48.2、GSM8K 63.9→63.0、温度为零的重复比例 0.020→0.014；7B Chat 加入选择题数据前后 C-Eval 47.0→71.3、CMMLU 49.7→73.8、TriviaQA 均为 57.9。数字与正文一致；测试条件以各表及论文描述为准，教学算例不是实测。
