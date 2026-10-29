# GLM 与 DeepSeek 评测数字复核（第七批）

日期：2026-10-29。范围为以下五篇正文引用的指定评测数字及直接相关的任务、版本和指标；本次没有重新审校全文、运行模型或复现论文实验。教学算例按其声明的假设阅读，不视为实测。

- **GLM-ASR-Nano**：[官方仓库](https://github.com/zai-org/GLM-ASR)报告所选基准的平均错误率 4.10，以及 17 种语言达到 WER 不高于 20% 的条件。另直接读取并渲染 [AmphionASR 研究报告](https://github.com/AmphionTeam/AmphionASR/blob/main/main.pdf)第 17 页表 15：其将系统标为 GLM-ASR-nano，wEar 中文 CER 为 15.41%、WTIMIT 英文 WER 为 15.50%；该表未列完整检查点名称，不能确认与 2512 权重完全相同。数字分别来自官方报告和独立研究，评测集与统计口径不同。
- **GLM-TTS**：[技术报告表 3 和表 7](https://arxiv.org/html/2512.14291)列出 Seed-TTS-eval test-zh 的 GLM-TTS / GLM-TTS_RL：CER 1.03% / 0.89%，说话人相似度 76.1 / 76.4；表 7 内部多音字与生僻词难例集的 text-only / hybrid 音素错误率为 13.23% / 5.14%。两组结果属于不同数据和指标，不能混成同一项测试。
- **GLM-4.5V**：[GLM-V 报告表 2、6.1 节](https://arxiv.org/html/2507.01006)的 thinking 列为 MMMU 验证集 75.4、MathVista 84.6、MMBench V1.1 88.2、OSWorld 35.8；脚注给出 100 步预算。报告规定每个基准成功请求率至少 95%，生成或 API 失败样本不计入评分；模型提取或评分的任务使用 GPT-4o，正文说明与其一致。
- **GLM-4V-9B**：[CogVLM2 论文表 4](https://arxiv.org/html/2408.16500)的 GLM-4V-9B 行中 OCRBench 为 786、MMStar 为 58.7、MMMU 为 47.2；均为论文报告的基准结果。正文末尾原先将“菜单和评测数字”概括为教学构造，与前文引用论文成绩冲突；已改为只将菜单案例注明为教学构造，明确基准分数来自论文。
- **初代 DeepSeek-VL**：[论文 v2 表 5—7 及 4.1—4.2 节](https://arxiv.org/html/2403.05525v2)列 7B 的 MMBench / MMBench-CN 开发集 73.2 / 72.8、OCRBench 456，1.3B 的 MMBench / OCRBench 64.6 / 409；7B Chat 与 DeepSeek-LLM 7B Chat 的 HellaSwag 分别为 68.4 / 68.5，GSM8K 为 55.0 / 63.0。论文说明 MMBench 使用开发集，多模态评测为贪心生成，HellaSwag 和 MMLU 为候选困惑度评分；正文区分了这些协议。

上述数值是各自出处的报告结果，不能由本次静态核查推广为独立运行结果。其他结构、训练数字及正文以外的榜单更新不在本记录范围。
