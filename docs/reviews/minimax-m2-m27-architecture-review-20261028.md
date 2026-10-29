# MiniMax-M2 与 M2.7 结构及资料核对

核对日期：2026-10-28。本轮复查模型卡与结构，不代表逐句验证了两篇正文，也未运行模型或复现论文指标。

- [MiniMax-M2 系列报告](https://arxiv.org/html/2605.26494)第 2、3 节记载 M2 为 62 层，48 个查询头、8 个键值头，每层 256 个专家选 8 个；预训练 29.2T token，包括恒定阶段 19.9T 与衰减阶段 9.3T，后者逐步把上下文从 8K 扩到 32K 和 192K。M2 页面新增阶段说明。
- [M2 官方配置](https://huggingface.co/MiniMaxAI/MiniMax-M2/blob/main/config.json)和 [M2.7 官方配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/config.json)都列出 62 层、48 个查询头、8 个键值头、每头 128 维，以及 256 个本地专家选 8 个。现有共用主干图的无障碍标题改为“M2 系列”，两篇正文引用同一图；图省略残差、归一化与 MTP 等细节。
- M2.7 新增的缓存估算：单序列、8,192 token、BF16，按常规 K/V 张量计算 `62 × 2 × 8 × 128 × 8192 × 2` 字节，即 1.9375 GiB，未计其他显存，也不是运行测量。
- 原 M2 工具循环图没有画出执行结果返回模型，且容易误解为执行器直接给出最终答案。本轮补上“执行器 → 模型”和“模型 → 输出”两条路径；已用 Chromium 渲染检查，更新了图尺寸与资产哈希。
- [M2 模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2)给出 SWE-bench Verified 69.4，注明 OpenHands/R2E-Gym 脚手架、128K 上下文及最多 100 步；Terminal-Bench 46.3 使用 Claude Code 脚手架、8 次运行平均。M2 模型卡元数据标 modified-MIT，页面又包含 MIT 链接，仓库没有单独的 `LICENSE` 文件；正文保留这一区别。
- [M2.7 官方权重许可](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE)允许所列个人及非商业用途；商业用途需事先书面授权，并有相应标识要求。[官方发布](https://www.minimax.io/news/minimax-m27-en)记载内部脚手架 100 余轮和内部评测提升 30%，但未给出充分基线细节。
- M2 页面加入已有社区阅读记录中的[知乎使用观察](https://www.zhihu.com/question/1965302088260104295/answer/1969038709283361084)作为延伸阅读。互动快照见 [社区覆盖记录](community-coverage.md)；本轮未重新阅读知乎正文或复核互动数量。M2.7 的既有社区资料及适用范围见 [MiniMax 社区资料记录](minimax-community.md)。
