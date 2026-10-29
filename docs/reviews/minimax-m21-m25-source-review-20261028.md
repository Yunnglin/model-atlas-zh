# MiniMax-M2.1 / M2.5 重点核查

核查日期：2026-10-28。阅读两篇现有正文、两款官方模型卡、权重配置和 M2 系列报告的架构部分。以下检查是对关键结构与列出的评测实例的审阅，并非逐项复现实验或对全部训练细节的验证。

- [M2.1 配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.1/raw/main/config.json)与 [M2.5 配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.5/raw/main/config.json)均列 62 层、3072 隐藏维度、48 查询头、8 键值头、头维度 128、256 个本地专家和每个 token 选 8 个。结合 [M2 系列报告第 2 节](https://arxiv.org/html/2605.26494)，新增两篇共用的主干教学图；图省略残差、归一化和 MTP。
- M2.5 新增的 8192 token、单序列、BF16 注意力缓存算例：`62 × 2 × 8 × 128 × 8192 × 2` 字节，约 1.94 GiB。此为按配置推算的键值张量大小，不包含其他运行内存，也不是实机测量。
- [M2.1 模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.1)列 SWE-bench Verified 74.0、M2 69.4，Claude Code 为默认脚手架并平均四次；BrowseComp 的 47.4 和上下文管理版本 62.0 及其保留策略亦来自该卡。
- [M2.5 模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)列 SWE-bench Verified 80.2，Droid 79.7，OpenCode 76.1；文章保留脚手架与运行条件，不把不同框架结果直接当作同条件的模型对比。
- M2.1 原有工具图说明工具会反馈模型，但图中缺少返回箭头。本次补上该路径，更新资产哈希，并用 Chromium 渲染检查；M2.5 原有工具图已有返回箭头。新增主干图同样经 Chromium 渲染检查。
- 社区文章：M2.5 正文保留已有知乎参考；本轮未重新阅读该文或核对赞藏。没有执行模型、训练、基准或验证私有任务数据。
