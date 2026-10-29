# QwQ-32B-Preview 审校记录

2026-10-28 对照 [2024-11-28 官方发布](https://qwenlm.github.io/blog/qwq-32b-preview/)、[预览版模型卡](https://huggingface.co/Qwen/QwQ-32B-Preview)及[配置](https://huggingface.co/Qwen/QwQ-32B-Preview/blob/main/config.json)，核对 32.5B、64 层、40 查询头/8 键值头、32,768 token、Apache 2.0 和语言混用/循环推理限制。模型卡仅说明预训练与后训练，没有公布完整预览版训练配方；不以 2025 QwQ-32B 的强化学习描述倒推 Preview。

官方发布报告 GPQA 65.2、AIME 50.0、MATH-500 90.6、LiveCodeBench 50.0；不推断其未在该处明确说明的统一采样与 pass@k 协议。原创图为文字生成和外部复核的教学流程，非官方网络结构图。

已通过独立已登录浏览器读取 [孔某人的实际工作流体验](https://zhuanlan.zhihu.com/p/9761811540)，2026-10-28 页面显示 51 赞、51 收藏。文章自述数据及方案未公开、各模型提示和输入长度有调整；用于提醒读者场景与提示影响表现，不据此宣称可复现的通用排名。没有运行模型或复现官方指标，未修改共享 YAML。
