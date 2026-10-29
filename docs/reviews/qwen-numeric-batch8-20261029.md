# Qwen 指定评测数字补充核查（第八批）

核查日期：2026-10-29。本次针对以下五篇正文中明确列出的指定数字和条件，对照原始发布资料或基准原始报告。范围仅限本记录指出的内容；没有运行模型或复现测试，也未据此重新核对全文、图片或知乎资料。

- **QwQ-32B**：[官方模型卡](https://huggingface.co/Qwen/QwQ-32B)建议温度 0.6、top-p 0.95、min-p 0，top-k 在 20–40，用于减少反复生成；这是一组推理建议，不是评测分数。正文另有 20 题中 16 题、13 题分别为 80%、65% 的教学算例，算术正确且已标明非实测。该评测章节未引用具体官方基准分数。正文的缓存例子为 64 层、8 个 KV 头、每头 128 维、8192 token、BF16，按键和值两份计算为 2 GiB，属于假设条件下的缓存估算，非实际显存测量。
- **QwQ-32B-Preview**：[2024 年官方发布文章](https://qwenlm.github.io/blog/qwq-32b-preview/)叙述 GPQA 65.2%、AIME 50.0%、MATH-500 90.6%、LiveCodeBench 50.0%，与正文一致。发布文章该处没有逐项列出完整评测协议，正文未将其写成统一的 pass@k。
- **QVQ-72B-Preview**：[官方模型卡 Performance 表](https://huggingface.co/Qwen/QVQ-72B-Preview)中，QVQ 与 Qwen2-VL-72B 的 MMMU 验证集分别为 70.3、64.5，MathVista mini 为 71.4、70.5，MathVision full 为 35.9、25.9，OlympiadBench 为 20.4、11.2；均与正文表格一致。各基准对应不同任务与划分，原表未提供可据此断定所有模型完全相同的评测设置。
- **Qwen-Image-Edit-2509**：[MultiBanana 论文表 3](https://arxiv.org/html/2511.22989#S4.T3)报告该版本 single 与 two 类分别为 7.499、3.699，10 分制，表内采用 Gemini 2.5 与 GPT-5 评分的平均；这是不同任务类别而非同一道题增图消融。[GenArena 官方页面](https://genarena.github.io/)的 2026 年 1 月快照列 Basic / Reasoning / MultiRef Elo 为 1020 / 962 / 705，由 Qwen3-VL-32B Instruct FP8 成对比较，均与正文一致。Elo 是该榜单内的相对评分。
- **Qwen-Image-Edit-2511**：同一 [GenArena 官方快照](https://genarena.github.io/)给出 2511 的 Basic / Reasoning / MultiRef Elo 为 1065 / 1005 / 793，2509 对照为 1020 / 962 / 705；正文正确标明裁判和分数类型。[2511 官方模型卡示例](https://huggingface.co/Qwen/Qwen-Image-Edit-2511)使用两张图片、随机种子 0、40 步、`true_cfg_scale=4.0` 和空格负向提示；这些是示例配置而非上述榜单的评测配置。正文另设的 100 个合照任务为教学方案，未当作实测。
