# DeepSeek V4 各版本审校

核对日期：2026-10-28。审阅 V4-Flash、V4-Pro、V4.1-Flash 三篇模型卡、正文及原创教学 SVG。审阅者此前已参与 Flash 与 Pro 的二次定向审校，因此这两篇不是独立于先前工作的复核；本轮未发现自己曾参与 V4.1-Flash 正文的记录。

## 修正

- [V4 技术报告首版](https://arxiv.org/html/2606.19348v1)标注 2026 年 4 月 26 日，Flash 和 Pro 两篇误写成 6 月，已更正。其预览版本的 [官方发布时间](https://www.deepseek.com/news/v4-preview/)为 4 月 24 日。
- 两幅 V4 教学图此前把 MoE 方框画在注意力层之后，可能被理解为整组层执行完才做一次专家前馈。已移除独立阶段方框，保留图中文字“各层含 MoE”，并调整无障碍描述。图仍为简化示意，不是官方架构图。
- [V4.1 官方发布](https://www.deepseek.com/news/deepseek-v4-1-flash/)为 2026 年 9 月 10 日；其[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash#license)声明仓库和模型权重采用 MIT 许可。已补足模型卡中的日期和许可。

## 核对范围与依据

- [V4 报告 §4.2](https://arxiv.org/html/2606.19348v1#S4.SS2)：Flash 284B 总参数、13B 激活、43 层，前两层仅滑动窗口；Pro 1.6T、49B、61 层，前两层 HCA。后续层交替 CSA 与 HCA；两版的 CSA top-k 分别为 512 与 1024，压缩比例为 4，HCA 为 128，窗口为 128。图省略 mHC、层内路由及投影细节。
- 同报告 §4、§5 记载 Flash 和 Pro 分别在 32T、33T token 上预训练，后训练先训练领域教师，再以在线策略蒸馏整合；后训练针对部分权重及索引器路径使用量化感知训练。不能将其归纳为全模型 4 位或完全未用强化学习。
- [Flash 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)与 [Pro 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)标示 MIT 许可。报告基础模型表中的 MMLU 5-shot 分别为 88.7 和 90.1；这不是指令模型在实际任务上的成功率。
- [V4.1 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)：552B 主干、额外 196B Engram 条件记忆，输入和输出阶段分别约 8B 与 16B 激活；支持图像和文本输入、文本输出及 1M 上下文。主干为 20 层因果编码器加 20 层解码器；CSA2 使用 Full、Reindex、Reuse 模式，解码器全局 KV 来自编码器末层状态。教学图省略局部缓存和跨层共享，不能视作完整结构。
- V4.1 模型卡说明 45T 多模态预训练 token，累计到 34T 时扩至 1M；后训练采用 SFT、RL、OPD。基础模型表 MMLU-Pro 5-shot：V4.1 Flash 74.1、V4 Flash 68.3。不同模型的架构和训练不同，不能把差距归因于单一设计。

本轮依据公开材料核对关键陈述及图示，未运行模型、复现评测、逐项核对论文中所有实现细节或检验部署中的许可证适用问题。
