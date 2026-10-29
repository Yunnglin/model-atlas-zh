# DeepSeek-Coder-V2 全维度审阅

审阅日期：2026-10-29。时间线 ID `deepseek-coder-v2`，正文 `src/content/docs/nlp/deepseek-coder-v2-model.md`；通读正文，对照技术报告、模型卡、图示和既有知乎实读记录。未运行模型或复现评测。

## 结构与模型卡

- [技术报告表 2](https://arxiv.org/html/2406.11931)与 [官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Instruct)：Lite 为 16B 总参数／2.4B 激活，大模型为 236B／21B；从 DeepSeek-V2 中间检查点继续预训练，采用 MLA 和 MoE，上下文扩展至 128K。权重使用 DeepSeek Model License，支持商业使用。
- 报告第 3.1 节：Lite 的预训练使用 PSM 格式 FIM 与 next token，FIM 比例 0.5；236B 仅 next token。Lite 的指令微调加入 FIM。本次增加前缀、后缀先输入的因果生成说明，代码例子是教学构造。

## 训练

- 报告第 1、2、3 节：中间检查点见过 4.2T token，额外继续训练 6T，训练使用量合计 10.2T；代码／数学／自然语言配比 60／10／30。本次补充报告收集代码相关语料 1170B 即约 1.17 万亿 token，区分数据池规模和继续训练使用量。
- 上下文继续训练 32K 和 128K 各 1000 步，batch 分别 1152、288。论文描述指令数据及利用编译器和测试结果构造偏好数据训练奖励模型，再以 GRPO 优化，不将其笼统写为每次直接用隐藏测试评分。

## 评测与应用

- 报告表 3、表 6：HumanEval 零样本 Python，大模型 Instruct 90.2%、Lite Instruct 81.1%；Lite Base 的 FIM Python／Java／JavaScript 为 80.0／89.1／87.2，提取首行作完全匹配。RepoBench 选 2023 年 12 月资料、最多生成 64 token，取首个非空非注释行。
- [Large Language Monkeys](https://arxiv.org/html/2407.21787) 的 SWE-bench Lite 使用 Coder-V2 与 Moatless Tools，单样本覆盖 15.9%、250 次至少一次成功覆盖 56%；单次本身为模型与工具的一条多轮轨迹，不能当作 56% 单次成功率。订单例子、隐藏测试和独立回归是教学方案。

## 配图

- `src/content/data/figures.yaml` 中 `deepseek-coder-v2-teaching` 登记原创 CC BY 4.0 教学图，标注论文依据、非官方性质及替代文本；图中外部执行器、注意力和专家网络边界与正文一致。
- Chromium 打开本机 `/nlp/deepseek-coder-v2-model/`，图像解码为 1060×260，替代文本存在；截图检查节点、箭头与显示。

## 社区

- [风行天下：DeepSeek-Coder-V2 报告整理](https://zhuanlan.zhihu.com/p/21266825023) 于 2026-10-28 已登录实读时 10 赞、15 收藏，见 [社区审阅](community-weak-models-20261028.md)。文章讨论 FIM、训练和评测，但 1170B 的中文单位前后不一致；本次正文明确按论文写为 1.17 万亿。文章互动量较低，属于报告整理而非独立实测；未复制社区图文。

## 评测数字逐项核对

- [技术报告第 4.1 节和表 3](https://arxiv.org/html/2406.11931#S4.SS1)：HumanEval Python 包含 164 道题，采用零样本提示、贪心解码和测试用例判定；236B Instruct 90.2%，16B Lite Instruct 81.1%。正文现补充解码方式，数字不是仓库缺陷修复率。
- 报告表 6 的 80.0／89.1／87.2 属于 Lite Base 在 Python／Java／JavaScript 的代码中间补全逐行完全匹配；它与上述 Instruct 函数生成不是同一任务。
