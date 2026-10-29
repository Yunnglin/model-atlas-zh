# 视觉与多模态文章的易读性抽查

核查日期：2026-10-28。本次阅读四篇文章的结构、训练和评测段落，检查解释是否与具体型号对应，并补充能够手算或复述的教学例子；没有运行模型或复现论文实验。

- [DeepSeek-VL2](../../src/content/docs/omni/deepseek-vl2-model.md)：对照[报告](https://arxiv.org/html/2412.10302)，补充文本预测损失如何回传到未冻结视觉模块，解释损失位置与参数更新的区别。
- [Kimi-VL](../../src/content/docs/omni/kimi-vl-model.md)：对照[报告](https://arxiv.org/html/2504.07491)第 2.1 节，补充 8×8 特征网格经过 2×2 空间合并后的算例；它不包含特殊标记和实际预算。
- [SAM](../../src/content/docs/cv/sam.md)：对照[原论文](https://arxiv.org/html/2304.02643)对质量预测的说明，用两个候选的虚构数字说明预测排序可能与实际 IoU 不一致。
- [Qwen-Image](../../src/content/docs/cv/qwen-image.md)：对照[技术报告](https://arxiv.org/html/2508.02324)的流匹配目标，在正文已有的时间和符号约定下给出一维算例；真实图像潜变量是高维的。

算例均为教学构造，不代表模型运行结果；本记录不是对四篇文章逐句审校。
