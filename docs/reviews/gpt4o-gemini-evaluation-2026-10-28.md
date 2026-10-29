# GPT-4o 与 Gemini 1.5 内容复核（2026-10-28）

范围：模型卡、原有输入输出示意图、训练描述和文中评测。图为项目自绘的教学示意，核查其仅描述公开输入输出，没有推断闭源模型的内部网络；本次没有修改图或共享登记。

- [OpenAI GPT-4o System Card](https://openai.com/index/gpt-4o-system-card/)：核对端到端多模态、截至 2023 年 10 月的训练数据、音频响应 232/320 毫秒及说话人识别安全评测。文中补充早期与部署版本的两类结果，区分正确拒绝与正确回答。
- [OpenAI GPT-4o API 模型页](https://developers.openai.com/api/docs/models/gpt-4o)：核对具体 API 的上下文、输入输出与状态；产品信息会变化。
- [Gemini 1.5 技术报告 v5](https://arxiv.org/html/2403.05530v5)：核对 Pro 为稀疏 MoE、Flash 为稠密 Transformer decoder 及在线蒸馏；核对找针评测最多 10M token 的 99.2% 和表 9 视频评测。文章新增 16 帧、150 帧与每秒采样全部帧的 Pro/Flash 原始结果及评测条件。
- 已有知乎引用和阅读记录沿用前次复核；本次以官方技术报告和系统卡为事实来源，并未重新统计知乎互动数据。

没有调用模型运行实验；示例和业务分析用于解释评测方法。
