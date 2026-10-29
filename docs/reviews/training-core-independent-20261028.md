# 训练方法核心页面独立审校

范围为 LoRA、SFT、DPO、RLHF、RLVR 正文和其中指向模型的链接；与首版作者不同，本文审校者对照论文及目标文档检查。教学算例未实跑，未验证训练框架的每个版本。

- **LoRA**：[原论文](https://arxiv.org/abs/2106.09685)与 [QLoRA](https://arxiv.org/abs/2305.14314)核对冻结基座、低秩更新和量化基座；矩阵示例 4096×8 与 8×4096 合计 65536，等于 4096² 的 1/256，仅指矩阵参数。核对 [Qwen3-VL-Embedding/Reranker 技术报告第 4.2 节](https://arxiv.org/html/2601.04720)：公开从 Qwen3-VL-Instruct 初始化并采用 LoRA，链接目标文档存在。
- **SFT**：[InstructGPT 论文](https://arxiv.org/abs/2203.02155)作为示范训练的代表例子；用户输入不计算损失仍可作为条件，训练与生成前缀的区别、LoRA 可选和掩码细节均有说明。具体聊天模板依框架版本而定。
- **DPO**：[原论文](https://arxiv.org/abs/2305.18290)核对公式符号与参考模型位置；例子中 log 4 经 sigmoid 得 0.8，负对数约 0.223。原前言问题容易误读为必须单独训练奖励模型，已改为询问能否不单独训练。[Qwen2.5-Coder 报告第 4.2 节](https://arxiv.org/html/2409.12186)确认 SFT 后用离线 DPO，代码执行和 LLM 裁判提供反馈，目标文章存在。
- **RLHF**：[InstructGPT 论文](https://arxiv.org/abs/2203.02155)核对人工示范、偏好训练奖励模型与 PPO；奖励差的 sigmoid 和期望下 KL 的解释未将单样本对数比视为必然非负。图以 GRPO 举例并已注明不是 InstructGPT 的 PPO 流程。
- **RLVR**：[DeepSeek-R1 v1](https://arxiv.org/abs/2501.12948v1)确认 R1-Zero 的准确性、格式规则奖励；最终 R1 的不同阶段有区别，正文未把全部 R1 系列训练说成仅使用规则。已将图后“只反映通过与否”改为“反映预设检查结果”，兼容部分分。检查 [Qwen2.5-Math-PRM](https://qwenlm.github.io/blog/qwen2.5-math-prm/) 与 [Math-RM 模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-RM-72B)，目标页面存在，正文区分过程评分、模型结果奖励和规则验证。
- 所有五篇中指向知识库模型及方法的本地链接经文件存在性检查；本地 Markdown 资源由项目 `remark-base-links` 校验并补部署前缀。未修改共享数据文件。
