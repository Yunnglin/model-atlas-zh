# MiniMax-M1 全文审校

审校日期：2026-10-29。通读 [MiniMax-M1 正文](../../src/content/docs/nlp/minimax-m1-model.md)，对象为 2025 年的 40K／80K 模型版本；未运行模型或复现训练、评测。

- **结构和模型卡**：对照[论文](https://arxiv.org/html/2506.13585)第 1 节、[80K 官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M1-80k)及其 [配置](https://huggingface.co/MiniMaxAI/MiniMax-M1-80k/blob/main/config.json)，核对 456B 总量、45.9B 激活、80 层、32 选 2、七层 Lightning 加一层 Softmax 和 Apache 2.0。模型可生成工具请求，实际执行依赖外部环境；百万 token 输入是报告配置，不等于任意任务的可靠准确率。
- **训练**：对照报告第 2–4 节，核对从 Text-01 继续训练 7.5T token、32K 到 1M 四阶段扩展、SFT 样本中数学和代码约六成、CISPO 对重要性采样权重裁剪和停止梯度、生成与训练内核差异以及 LM head FP32。补充第 4.1 节的容器化软件工程训练：测试通过与失败提供反馈，但未覆盖的边界仍可能漏检。模型反馈和规则验证器并非同一机制。
- **评测**：对照论文表 2 与第 6.1 节，核对 40K／80K 的 AIME 2024 83.3／86.0、SWE-bench Verified 55.6／56.0 和 128K MRCR 76.1／73.4。正文补充温度 1、top-p 0.95、AIME 每题 32 次采样的平均通过率，以及 Agentless 两阶段定位、无向量检索的条件；不能把平均采样结果当成单次实测。100K 生成的 25% 是论文的 FLOPs 估算，不当作吞吐测量。
- **配图**：检查[登记](../../src/content/data/figures.yaml)、[原创教学图](../../public/figures/minimax-m1/overview.svg)和[素材记录](../assets.md)。2026-10-29 在本地页面通过 Chromium 加载、解码并目视检查，分组、箭头和中文字可辨；这是简化示意，不是官方结构图。
- **知乎**：沿用 [2026-10-28 已登录实读记录](minimax-m1-review-20261028.md)，平凡的[解读](https://www.zhihu.com/question/1918348812491141733/answer/1918359373564056118)当时 222 赞、356 收藏，介绍七层加一层与 CISPO。对照论文第 1、3 节，不将线性注意力计算次序理解成普通 softmax 注意力的精确变换；作者对速度和成本的泛化不代替具体设置。互动数为历史快照，本次未重新阅读。

修复代码与测试边界均为教学构造，不代表实机结果。

## 评测数字补充复核（2026-10-29）

- 对照 [MiniMax-M1 报告表 2 和 §6.1](https://arxiv.org/html/2506.13585)：40K、80K 思考预算的 AIME 2024 分别为 83.3、86.0，SWE-bench Verified 为 55.6、56.0，OpenAI-MRCR 128K 为 76.1、73.4。
- AIME 使用 temperature 1.0、top-p 0.95，32 次采样的平均通过率；正文与报告一致。不同预算的单项成绩并非处处单调增加。
