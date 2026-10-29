# DeepSeek 模型卡抽查

核对日期：2026-10-28。以下核对模型卡的版本、参数、上下文与权重公开信息；不代表逐句验证正文、部署效果或许可证的法律适用性。

| 模型              | 官方证据与核对结果                                                                                                                                                                            |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DeepSeek-V2       | [官方仓库](https://github.com/deepseek-ai/DeepSeek-V2)的下载表将 236B／21B、128K 的 V2 与 16B／2.4B、32K 的 Lite 分开。已在模型卡明确两个版本，避免将 128K 错套到 Lite。                      |
| DeepSeek-V3       | [官方仓库](https://github.com/deepseek-ai/DeepSeek-V3)下载表列出主模型 671B／37B、128K，并注明 Hugging Face 文件 685B 包含 14B 的 MTP 模块。模型卡补充这两种统计口径。                        |
| DeepSeek-R1       | [官方仓库](https://github.com/deepseek-ai/DeepSeek-R1)将 R1 和 R1-Zero 的主模型列为 671B／37B、128K，并说明基于 V3-Base；蒸馏模型是不同底座与规格。                                           |
| DeepSeek-Coder-V2 | [技术报告](https://arxiv.org/html/2406.11931)表 2 给出 Lite 16B／2.4B 与大模型 236B／21B，报告指出最大上下文 128K。两种规模的 FIM 训练不同，正文已有区分。                                    |
| DeepSeekMath      | [技术报告](https://arxiv.org/html/2402.03300)将初代数学模型列为 7B，分别讨论 Base、Instruct 与 RL，正文对工具使用另有说明。                                                                   |
| DeepSeek-V3.1     | [官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V3.1)下载表列出 Base 和后训练模型均为 671B／37B、128K；[发布说明](https://www.deepseek.com/en/news/deepseek-v3-1/)标明两种推理模式。 |
| DeepSeek-V3.2     | [官方模型页面](https://huggingface.co/deepseek-ai/DeepSeek-V3.2)列出 685B 文件张量统计；不从此值推定激活量。正文引用该版本报告并区分 Speciale。                                               |

权重公开不代表所有用途没有限制，实际使用须查阅具体检查点的许可和服务条款。
