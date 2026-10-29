# Llama 2 独立核查

范围：Llama 2 模型卡、基础结构、预训练、Chat 对齐、具体论文评测和开放许可；原创图是训练和应用流程示意，不是模型网络结构图。文中会议摘要是教学方案，没有实跑。

- [Llama 2 论文](https://arxiv.org/abs/2307.09288)：确认 2T 预训练 token、4096 上下文、Decoder 架构、70B 和论文 34B 的 GQA、SFT、偏好奖励模型、拒绝采样微调和 PPO；表 6 的 1,418,091 指 Meta 自采偏好比较，不是 SFT 示例或人数。
- 论文 3.2.3 节：拒绝采样只由 70B Chat 进行，较小模型用大模型筛出数据微调；早期只用拒绝采样，后期结合 PPO。Ghost Attention 是训练数据方法而非新注意力层。
- 论文表 4：基础 70B 的 MMLU 68.9 为 5-shot、HumanEval 29.9 为 0-shot；附录表 21 对应 HumanEval pass@1 的温度 0.1、top-p 0.95。不能把基础版分数归给 Chat 版或视为当前模型排名。
- [Meta 官方模型卡](https://github.com/meta-llama/llama/blob/main/MODEL_CARD.md)：实际开放版本 7B、13B、70B；论文出现的 34B 并不能证明其权重公开；70B 使用 GQA。
- [权重页与社区许可](https://huggingface.co/meta-llama/Llama-2-7b-hf)：可在条款条件下商业使用，但不是无条件的宽松开源许可。700 million 月活限制的判定有特定时点、主体范围与额外授权条款，文章未将其简化成普遍禁止商业使用。
- 知乎：在已登录 Chrome 中搜索“Llama 2 论文 RLHF”，本次搜索页面未返回可读取的具体结果；无法核实直接相关文章的作者、赞同与收藏，因此未引用未经核实的社区文章。
