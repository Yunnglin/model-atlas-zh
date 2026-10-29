# MiniMax-M2.7 全文审校

审校日期：2026-10-29。通读 [MiniMax-M2.7 正文](../../src/content/docs/nlp/minimax-m27-model.md)，范围为 2026 年 3 月发布的 M2.7，不混同 M2.5、M3 或 M3.1。未运行模型、训练或复现评测。

- **结构和模型卡**：对照 [官方配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/raw/main/config.json)与[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)，核对 62 层、256 专家选 8、48 查询头／8 KV 头、204800 最大位置、混合精度及模型许可标记。KV 缓存示例是单序列 BF16 理论计算，并非实际显存测量；工具执行由外部系统负责。[许可文件](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE)要求商业使用另获授权。
- **训练**：对照 [M2 系列报告](https://arxiv.org/abs/2605.26494)对底座 29.2T token、CISPO 和智能体训练基础设施的描述，正文标明这是系列底座口径，不称为 M2.7 新增训练数据；具体配比与全部训练超参没有公开。代码修复和测试绕过案例为教学构造。
- **评测**：对照[官方发布](https://www.minimax.io/news/minimax-m27-en)：SWE-Pro 56.22%、VIBE-Pro 55.6%、Terminal Bench 2 57.0%；MLE Bench Lite 22 项、3 次、每次 24 小时和平均获奖率 66.6%。内部脚手架迭代 100 多轮的 30% 提升未披露完整基线，不能称 30 个百分点。本次增加官方对 RL 团队流程中 30%–50% 工作的估计，明确它和性能提升是不同量，且非独立核算。[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)推荐的 temperature 1.0、top-p 0.95、top-k 40 是推理设置，比较还须控制脚手架、预算等条件。
- **配图**：核对 [登记](../../src/content/data/figures.yaml)、[骨干图](../../public/figures/minimax-m2/backbone.svg)和[流程图](../../public/figures/minimax-m27/overview.svg)。2026-10-29 在本地页面 Chromium 解码并目视检查，文字和箭头可见，分别区分简化网络结构与外部工作流迭代；不是官方网络原图，独立测试是实践建议而非对官方实验的假定。
- **社区**：沿用 [2026-10-28 已登录实读记录](last-community-audit.md)，[toyama nao 的对比评测](https://www.zhihu.com/question/2017637087134901679/answer/2017745966883710514)当时 229 赞、57 收藏，按指令遵循、信息提取、代码与复杂推理比较 M2.7 和 M2.5；是特定题集和使用条件下的社区观察，不证明内部结构、训练或普遍排名。另有[周星星的自进化综述](minimax-community.md)，用于区分模型权重和脚手架，但其 M2.7 发布月份与官方不一致，时间以官方为准。赞藏为历史快照。
