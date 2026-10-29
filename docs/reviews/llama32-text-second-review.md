# Llama 3.2 1B / 3B 文本模型独立复核

范围：文章和原创示意图，对照 Meta 首发说明、量化说明、官方模型卡的结构、剪枝蒸馏、训练、版本、许可、评测与设备条件；未自行加载权重、测手机性能或复现分数。

- [2024-09-25 首发说明](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) 确认从 Llama 3.1 8B 一次性结构化剪枝，再在预训练引入 8B/70B 的 token 级 logits 蒸馏恢复性能，指令后训练涉及多轮 SFT、拒绝采样和 DPO；图的阶段次序与之相符，明确是省略细节的教学示意。
- [1B 官方模型卡](https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct) 确认 1.23B/3.21B、GQA 与共享嵌入、公开来源预训练数据至多 9T token、2023 年 12 月数据截止；原模型 128K，卡内指定量化模型 8K，不推断所有量化实现皆有此限制。支持语言清单不含中文。许可为 Llama 3.2 Community License，使用需遵守协议与政策。
- [10 月 24 日量化发布](https://ai.meta.com/blog/meta-llama-quantized-lightweight-models/)与[官方模型卡](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md)确认发布的量化对象是指令模型，方式为 SpinQuant 与 QAT 加 LoRA；现补充该特定方案的线性层 4 位权重/8 位激活与嵌入及输出层 8 位权重，避免误解为所有运算均为 4 位。量化基线 Vanilla PTQ 未发布，原文已说明。
- 核查 BF16 指令模型 MMLU 5-shot 49.3/63.4，IFEval 0-shot 59.5/77.4 及其平均指标；模型卡称内部评测库。OnePlus 12、ARM CPU、ExecuTorch 的 1B BF16 19.2、SpinQuant 50.2 token/s 与原表一致；补充该表首 token 延迟测量提示长度 64 token，并没有将此条件错误套到解码速度。注意分数不是本项目复现结果。
- SVG XML 已解析，检查了文字标注和与公开流程的一致性；未进行逐像素渲染或模型执行验证。
