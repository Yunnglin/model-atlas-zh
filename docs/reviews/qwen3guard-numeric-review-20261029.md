# Qwen3Guard：评测数字复核

- 正文：`src/content/docs/nlp/qwen3guard-model.md`
- 核对范围：安全强化学习例子与流式检测数字；仅是数字与协议复核，不代表独立复现实验。
- [技术报告表 10](https://arxiv.org/html/2510.14276)：WildJailbreak 测试、Qwen3-4B 非思考模式下，WildGuard 判定拒绝率 Guard-only 96.6、Hybrid 5.3；Hybrid 的 WildGuard 安全率 98.1。它们是该实验的模型裁判结果。
- [固定版本官方流式评测说明](https://github.com/QwenLM/Qwen3Guard/blob/8a8b45a280bce0f65c322cc7086698b0d2ce4971/eval/README.md)与[脚本](https://github.com/QwenLM/Qwen3Guard/blob/8a8b45a280bce0f65c322cc7086698b0d2ce4971/eval/eval_stream.py)：含思考内容时 Stream-4B 的 `hit in first 128 token` 为 66.78；计算包含提前触发，不能表述为展示前拦截比例。正文对切分和单位有说明。
- 17/20=85%、16/20=80% 是教学计算。未发现需修改的数字。
