# DeepSeekMath 一代与 V2 内容复核（2026-10-28）

范围：两篇模型文章及新加的语言骨干示意图。对照论文、模型卡和模型配置核对模型结构、训练及评测口径，并补充实例；没有实际运行模型或复现训练。

- [DeepSeekMath 技术报告](https://arxiv.org/html/2402.03300)：核对 7B 训练路线与 GRPO；新增表 6 的 1.3B 代码语料对照，明确它不是 7B 模型成绩。
- [DeepSeekMath 7B 模型卡](https://huggingface.co/deepseek-ai/deepseek-math-7b-base)及[配置](https://huggingface.co/deepseek-ai/deepseek-math-7b-base/blob/main/config.json)：核对许可证、30 层、隐藏维度及注意力头数，增加简化语言骨干图。
- [DeepSeekMath-V2 技术报告](https://arxiv.org/html/2511.22570)：核对证明生成、验证、元验证以及高计算评测流程；补充验证集上由元验证器评定的分析质量变化，区分专家评审。
- [DeepSeek-Math-V2 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-Math-V2)及[配置](https://huggingface.co/deepseek-ai/DeepSeek-Math-V2/blob/main/config.json)：核对架构、专家路由和许可证，增加简化语言骨干图。
- 中文延伸阅读采用仓库已有阅读记录中的知乎文章：[理解 GRPO：DeepSeekMath 与 DeepSeek Coder](https://zhuanlan.zhihu.com/p/700878867) 和 [DeepSeekMath-V2 的自我验证](https://zhuanlan.zhihu.com/p/1977755295989130582)；本文事实依据以上官方资料。知乎赞藏数量为先前阅读记录，不代表本次实时数据。

两张新增图为基于官方配置绘制的教学示意，省略了部分实现细节；它们分别与原有训练、证明工作流图配合使用。
