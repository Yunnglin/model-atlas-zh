# DeepSeek-V4.1-Flash 全文审校

审校日期：2026-10-29。通读[正文](../../src/content/docs/nlp/deepseek-v41-flash-model.md)，范围是 2026 年 9 月初版模型；未运行模型或复现评测。

- **结构**：对照[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)，核对 20 层因果编码器和 20 层解码器、编码器末层状态构建解码器全局 KV、8B prefill 与 16B decode 激活参数，以及图像经 DeepSeek-ViT 和投影后与文字共同输入。正文补充 Full、Reindex、Reuse 与候选池的类比，区分跨层缓存共享和各层继续处理隐藏状态；补充分块窗口状态有限回放，避免把全局 KV、持久化缓存和总显存混同。Engram 的 196B 与 552B 主干参数分开。
- **训练**：模型卡说明从头使用 45T 多模态 token，在 34T 进度扩至 1M、稀疏注意力训练长度 64K；SFT、RL、在线策略蒸馏依次进行，强调合成任务和环境。文中仪表样本为教学建议，并非官方数据；未以推测补全未披露的数据比例。
- **评测**：模型卡 Base 表的 MMLU-Pro 5-shot 为 74.1，旧 V4-Flash Base 为 68.3；多项模型配置有差别，不能当单因素消融。指令模型 Terminal-Bench 2.1 pass@1 90.6、旧 Flash 为 82.7；按照模型卡使用 DeepSeek Harness Minimal、1M 上下文、reasoning effort 100、temperature 1.0、top-p 0.95。工程工具与任务条件影响分数，不是部署实测。
- **配图**：对照[图示登记](../../src/content/data/figures.yaml)与[原创图](../../public/figures/deepseek-v41-flash/overview.svg)，图将图片和文本经因果编码器、解码器输出的流程简化，明确省略局部窗口等内容，非官方原图。Chromium 在本地页面加载并解码为 1060×300，替代文本存在；截图目视检查文字和箭头。
- **知乎**：2026-10-29 主审通过已登录 Chrome 实读潜龙勿用的 [CED 与后训练解析](https://zhuanlan.zhihu.com/p/2081395729059395473)，当时 235 赞同、323 收藏；文章讨论因果编码、解码器共享全局 KV、各层局部窗口及有限回放，并解释 CSA2 三种模式和 FP4。对照官方模型卡，正文明确缓存指标与真实端到端延迟不是同一回事。互动量为阅读时快照，中文解读不当作独立性能复现。
