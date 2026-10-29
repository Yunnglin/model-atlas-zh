# Wan2.2 评测补充核查（2026-10-29）

核对 [Wan2.2 官方仓库](https://github.com/Wan-Video/Wan2.2)与 [T2V-A14B 模型卡](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B)：官方称在 Wan-Bench 2.0 上做多维比较，模型卡所查可读文字没有逐项数值表；仓库所链 [Wan 报告](https://arxiv.org/abs/2503.20314)是早期系列报告，不把其中数字当作 Wan2.2 结果。

找到评测执行方 [AWS Neuron 模型指南](https://awsdocs-neuron.readthedocs-hosted.com/en/v2.33.0/vllm-omni-neuron/docs/models/wan22-t2v-14b.html)：其 Accuracy Evaluation 明确将结果标为 Wan2.2-T2V-A14B-Diffusers（BF16）在 Trn2 的 VBench 六维结果，其中主体一致性 87.60%、运动平滑度 96.50%、动态程度 61.04%。这属于第三方具体运行，不是 Wan 官方自测；页面表格未详细列出每项样本和采样设置，不能将这些维度分数直接解释为任务成功率或与其他设置无条件比较。正文用猫的例子解释各指标关注点，并指出动态程度不是动作正确性。

本次没有运行模型或复现评测，也没有核查该页面其他量化配置的效果；官方模型卡、原报告和第三方记录的版本、条件分别表达。
