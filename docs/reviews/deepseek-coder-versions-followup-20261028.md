# DeepSeek-Coder 两代复核

核对日期：2026-10-28。本次重点核对模型配置、FIM 和训练阶段、模型许可、选定的评测与教学图；未运行模型、训练或重新阅读知乎全文。

- [初代论文表 2](https://arxiv.org/html/2401.14196)列出 1.3B、6.7B、33B 的层数、隐藏维度、注意力头与 33B 的 8 组 GQA；正文加入具体对比。其表 7 的 CrossCodeEval 有无 BM25 检索，Python 6.7B Base 的 exact match 是 9.53% 与 16.14%；已有正文指出输入条件和预算。
- [官方 FIM 示例](https://github.com/deepseek-ai/DeepSeek-Coder#2-code-insertion)给出 begin、hole、end 三个标记，正文补充其先后顺序；[官方模型卡](https://huggingface.co/deepseek-ai/deepseek-coder-6.7b-instruct)区分代码仓库 MIT 与模型许可证。
- [V2 论文第 3.1、3.4 节和表 2](https://arxiv.org/html/2406.11931)区分 16B 与 236B 的预训练 FIM 目标，说明从 16K 经过 32K 再扩展到 128K，以及长上下文两阶段的步数和批次。[表 6](https://arxiv.org/html/2406.11931)的 16B Lite Base 单行补全在 Python、Java、JavaScript 上分别为 80.0%、89.1%、87.2%，论文只取生成的第一行进行文本精确匹配。[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Instruct)将模型使用与代码仓库许可分开说明。
- V2 原图的描述称测试结果可反馈，但图中没有返回箭头；补线并核对渲染，图仍将执行和测试描述为外部可选步骤。初代教学图保留了 FIM 的简化信息流。
- 先前[社区阅读记录](zhihu-reading.md)记录了初代文章及互动数据；V2 正文已有中文报告整理。两者用于补充理解，模型参数与实验口径以上述一手来源为准。原论文中的其他结果和图示未逐项核对。
