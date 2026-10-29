# LoRA 实例核对：Qwen2-7B-Instruct

日期：2026-10-28。对照 [Qwen2-7B-Instruct 配置](https://huggingface.co/Qwen/Qwen2-7B-Instruct/blob/main/config.json)和 [Transformers 4.41.2 Qwen2 实现](https://github.com/huggingface/transformers/blob/v4.41.2/src/transformers/models/qwen2/modeling_qwen2.py)，核对 28 层、3584 隐藏维度、28 个查询头、4 个键值头及 Q/V 投影输出维度。按每层 Q、V 均采用秩 8、无额外可训练参数推算 2,523,136 个适配器参数；这不是训练或显存实测，也不是 Qwen 官方训练配置。

对照 [PEFT 保存和合并说明](https://huggingface.co/docs/peft/en/developer_guides/checkpoint)，补充 `merge_and_unload()` 返回模型的功能限制、权重体积与量化兼容性。已有知乎参考及其边界见 [训练方法知乎参考核查](training-community.md)；本轮未重读社区文章或运行模型。
