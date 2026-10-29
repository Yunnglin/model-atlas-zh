# 初代 Qwen 专项审校

审校日期：2026-10-29。范围为[第一代 Qwen 正文](../../src/content/docs/nlp/qwen1-model.md)，通读文本并对照官方材料；未运行模型或复现评测，客服例子均为教学构造。

- **结构**：对照[技术报告第 2.2–2.3 节与表 1](https://arxiv.org/html/2309.16609)和 [7B 配置](https://huggingface.co/Qwen/Qwen-7B/blob/main/config.json)，核对 BPE、约 152K 词表、单数字切分、32 层 32 头与 4096 隐藏维。补充 RoPE、Pre-RMSNorm、SwiGLU 和输入、输出投影不共享，解释其作用并保持模型版本范围。[模型卡](https://huggingface.co/Qwen/Qwen-7B)标注的权重许可与代码许可分别核对。
- **训练**：对照[官方仓库发布历史](https://github.com/QwenLM/Qwen)核对首发 2.2T/2048 与 2023-09 更新 2.4T/8192，仓库现表列 7B 最大长度 32K；训练窗口、扩展和运行限制不混同。对照报告第 3 节核对 ChatML、系统和用户位置 loss mask、2048/128/4000 SFT 设置、PPO 先仅更新 value 模型 50 步和每个问题采样两份回复。补充区分报告 RLHF 实验与仓库当时尚未发布的 RLHF 模型，不推断所有公开 Chat 权重采用该流程。
- **评测**：对照论文表 5 核对 7B Chat 的 C-Eval 0-shot 59.7、5-shot 59.3、HumanEval 0-shot 37.2，区分选择题和代码测试；论文表 3 为 arXiv 长文本困惑度，不能直接证明客服应用效果。客服意图和流程分数为构造示例，不是论文实验。
- **配图**：对照[图示登记](../../src/content/data/figures.yaml)及[原创教学图](../../public/figures/qwen1/overview.svg)，图中输入、32 层因果注意力和前馈、词表分数及生成方向符合报告简化模型，明确省略结构、非官方图和 CC BY 4.0。Chromium 访问本地正文、滚动加载并解码成功，图为 1060×250，替代文本存在；截图目视核对中文、箭头与布局。
- **社区**：复用 [2026-10-27 知乎实读记录](qwen-community.md)：刘聪NLP 的 [Qwen 技术报告细节分享](https://zhuanlan.zhihu.com/p/658392609)当时 185 赞同、378 收藏；该文关于 PPO 预热更新 policy 的说法与报告第 3.2.2 节不同，正文采用报告的先只更新 value 模型 50 步。本轮未重新读取互动量。

### 2026-10-29 评测数字逐项复核

- 对照 [Qwen Technical Report 表 5](https://arxiv.org/html/2309.16609#S3.T5)：Qwen-7B-Chat 的 C-Eval 0-shot／5-shot 为 59.7／59.3，HumanEval 0-shot 为 37.2，与正文一致；这些是 Chat 而非 Base 的结果。
- 范围仅限正文引用的评测数字、型号和 shot 设置；未重新运行模型。
