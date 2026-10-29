# 文本模型讲解与例子抽查

核对日期：2026-10-28。本轮选择四篇不同文本模型，重点查看容易让初学者混淆的机制；增加的数字与流程均是教学构造，不是实际运行结果。未对四篇全文逐句或其他模型进行审校。

- [Qwen3Guard](../../src/content/docs/nlp/qwen3guard-model.md)：对照[固定版本的官方评测脚本](https://github.com/QwenLM/Qwen3Guard/blob/8a8b45a280bce0f65c322cc7086698b0d2ce4971/eval/eval_stream.py)的 `consecutive_unsafe`，用相邻 token 举例。脚本先扫描完整序列中的连续 Unsafe，再扫描连续 Controversial；原文较易让人误以为它等同于实时系统首次触发，现已区分。另发现所核查代码中 strict／loose 输出变量使用了相反名称的预测列表，补充复现时追踪实际标签映射的提醒；不能据此推断官方表中的已有数值有误。
- [Qwen3-Coder-Next](../../src/content/docs/nlp/qwen3-coder-next-model.md)：对照[官方模型卡](https://huggingface.co/Qwen/Qwen3-Coder-Next)，用读取、修改、测试三次往返说明模型输出与执行器返回的区别；例子不声称是该模型实测轨迹。
- [DeepSeek-V3](../../src/content/docs/nlp/deepseek-v3.md)：对照[技术报告](https://arxiv.org/html/2412.19437v2)的辅助损失自由负载均衡，增加两个专家的数值例子，区分加偏置选择专家与使用原始亲和分数计算输出权重。
- [GLM-5](../../src/content/docs/nlp/glm5-model.md)：对照[技术报告](https://arxiv.org/html/2602.15763)中 DSA 索引器的 $k=2048$ 设置，用 10 万个历史 token 算例说明精细注意力的候选范围；比例不是速度提升，也不排除索引器成本。
