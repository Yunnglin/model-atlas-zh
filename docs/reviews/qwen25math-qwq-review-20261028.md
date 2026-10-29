# Qwen2.5-Math 与 QwQ-32B 局部审阅

核查时间：2026-10-28。审阅两篇的模型卡、训练说明、相关评测数字及教学图数据流；此记录不表示全文逐句审校，也未运行模型。

- [Qwen2.5-Math 技术报告](https://arxiv.org/html/2409.12122)第 2–3 节与表 3：模型从 Qwen2.5 基座继续数学预训练，后训练包含 SFT、奖励模型与 GRPO。7B-Instruct 在 MATH 的文字推理单次、多数投票 8 次、奖励模型选 8 次分别为 83.6、87.1、88.5；工具推理单次表格为 85.2。报告摘要与官方发布均写工具推理 85.3，正文保留差异及出处。
- [1.5B Instruct](https://huggingface.co/Qwen/Qwen2.5-Math-1.5B-Instruct)与 [7B Instruct](https://huggingface.co/Qwen/Qwen2.5-Math-7B-Instruct)模型卡标注 Apache 2.0；[72B Instruct](https://huggingface.co/Qwen/Qwen2.5-Math-72B-Instruct)标注 Qwen 许可。各 Base 和奖励模型许可未在本轮逐一核对。
- Qwen2.5-Math 教学图原来只画了模型请求工具，漏掉结果返回模型；已补返回箭头并在 Chromium 渲染检查，已更新资产记录哈希。图为流程示意，不能视为完整模型结构图。
- [QwQ-32B 模型卡](https://huggingface.co/Qwen/QwQ-32B)与[配置](https://huggingface.co/Qwen/QwQ-32B/blob/main/config.json)：核对 32.5B、64 层、40 个查询头与 8 个键值头、长输入使用 YaRN 的建议。新增的 2 GiB 缓存值是 8192 token、BF16、单序列的算术估算，不含权重和工作区。
- QwQ 教学图展示数学／代码 RL 与通用 RL 两阶段；与[官方发布文章](https://qwenlm.github.io/blog/qwq-32b/)的公开说明一致，仍省略具体训练实现。既有知乎资料本轮未重新阅读，未验证全部评测与其他外链，也未进行推理或训练。
