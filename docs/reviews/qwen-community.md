# Qwen 文本模型社区资料核查

查看日期：2026-10-27。使用现有 Chrome 登录会话阅读知乎正文，赞同和收藏是当时显示的动态值，只辅助筛选，不证明技术正确。检索结果中的 AI 汇总没有作为资料事实来源。

- **初代 Qwen**：[刘聪NLP：Qwen 技术报告细节分享](https://zhuanlan.zhihu.com/p/658392609)，185 赞同、378 收藏。文章按预训练、对齐和工具应用组织，可用于检查阅读顺序。其 PPO 预热写成训练 policy；[原始报告 3.2.2](https://arxiv.org/html/2309.16609)明确说先暂停 policy 更新、只更新 value 模型 50 步，不能照搬该说法；其余数字和长上下文细节也要看原报告对应版本。
- **Qwen1.5-MoE**：[刘聪NLP：Qwen1.5-MoE 模型](https://zhuanlan.zhihu.com/p/689637785)，116 赞同、171 收藏。可以参考对稠密初始化、共享与路由专家的组织；速度 1.74 倍与训练成本比较来自[官方博客](https://qwenlm.github.io/blog/qwen-moe/)中的特定实验，不能视为所有设备或所有 Qwen1.5 型号的结论。它关注 MoE 分支，不能代替稠密版本配置。
- **Qwen2**：[xyiz：Qwen2 源码解读（下）](https://zhuanlan.zhihu.com/p/704851580)，26 赞同、40 收藏。适合查找配置、解码器和权重共享的源码入口；示例为 0.5B Instruct 和文章所指的旧版代码，不能无条件推广到 7B 或所有运行方式。文中展示配置 `use_sliding_window: false`，所以类支持滑窗不代表该检查点默认启用；共享权重减少参数也不自动保证训练加速。[0.5B 官方配置](https://huggingface.co/Qwen/Qwen2-0.5B-Instruct/blob/main/config.json)可交叉核对。
- **Qwen3**：[匆匆那年：Qwen3 开源大模型源码分析](https://zhuanlan.zhihu.com/p/1902677188064567603)，59 赞同、148 收藏。可参考模型类、残差路径、注意力和 MLP 的阅读组织。文章开头示例误写 `Qwen2Config()`，且代码及配置可能随 Transformers 版本改变，具体尺寸、头数及 bias 以[官方模型配置](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json)和对应实现为准；不能把稠密模型代码直接当 MoE 路由流程。

这些参考帮助核对表达和寻找实现入口，没有复制其图文；本轮核查不是四篇所有技术细节或所有模型检查点的逐句验证，未运行模型。
