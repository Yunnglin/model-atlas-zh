# DeepSeek-R1-0528 专项审校

审校日期：2026-10-29。完整通读 [R1-0528 正文](../../src/content/docs/nlp/deepseek-r1-0528-model.md)，范围为完整公开权重，区分 Qwen3-8B 蒸馏版；未运行模型或复现评测。

- **结构**：对照[官方配置](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/blob/main/config.json)及 [V3 报告](https://arxiv.org/html/2412.19437)核对 61 层、前 3 层稠密、256 路由专家选 8 加共享专家、MLA 与 163840 位置配置。激活专家数不等于全部权重或显存。
- **训练**：对照[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528)，保留增加后训练计算与算法优化的公开范围，不将原始 R1 报告配方视为更新版的完整细节；区分 Qwen3-8B 学生架构和轨迹训练。补充 0528 支持 system prompt、无需强制思考标记及官方应用温度的版本差异。
- **评测**：模型卡核对 AIME 2025 70.0/87.5、平均 12K/23K token、采样题 16 次估计 pass@1、64K 上限，及 GPQA、SimpleQA、BFCL 和 Tau-bench 的具体任务及工具条件。促销、正确次数和验证器例子属于教学构造。
- **配图**：对照[图示登记](../../src/content/data/figures.yaml)、[V3 主干图](../../public/figures/deepseek-v3/overview.svg)和[外部验证流程图](../../public/figures/deepseek-r1-0528/overview.svg)；图分别省略前三个稠密前馈层、说明外部程序非模型自动执行，均注明教学简图与 CC BY 4.0。Chromium 本地页面两图解码成功并有替代文本，截图核查中文和箭头。
- **社区**：沿用[2026-10-28 实读记录](deepseek-new-community-logged-in.md)，Karminski-牙医的[评测解读](https://zhuanlan.zhihu.com/p/1911619551587709397)当时 62 赞、14 收藏，讨论数学、代码和知识题的不同量纲；AIME 与 SimpleQA 的不同变化对照官方表，训练推测与排名判断不作为事实。本次未重读或更新互动量。

## 评测数字逐项核对

- [官方模型卡评测表](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528)：完整 R1 与 R1-0528 的 AIME 2025 pass@1 分别为 70.0、87.5；GPQA Diamond pass@1 为 71.5、81.0，SimpleQA Correct 为 30.1、27.8。0528-Qwen3-8B 蒸馏模型另列，不混入上述比较。
- 官方对需要采样的基准使用温度 0.6、top-p 0.95、每题 16 个回答估计 pass@1，最大生成长度 64K；SWE Verified 使用 Agentless，Tau-Bench 使用 GPT-4.1 扮演用户。该记录不代表独立复现。
