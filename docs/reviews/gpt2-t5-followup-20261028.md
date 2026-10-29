# GPT-2 与 T5 内容和图示核查

核查日期：2026-10-28。本次复核部分章节并补充例子，不代表两篇文章逐句审查或运行了模型。

- GPT-2：对照 [原论文](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)的 WebText 筛选、表 2 规格及表 3 评测，并查看[官方实现](https://github.com/openai/gpt-2/blob/master/src/model.py)的位置嵌入、因果掩码及键值缓存结构。48 层、1,600 宽、1,024 token、BF16 的缓存算例按每个数两字节计算，不包含模型权重。渲染检查 `public/figures/gpt2/overview.svg` 的生成循环；图为简化示意。
- T5：对照 [原论文](https://arxiv.org/html/1910.10683)第 2.1 节相对位置偏置、第 3.1.2 节基线、第 3.3.4 节片段破坏、第 3.7 节最终训练设置和表 14 的摘要结果。图 `public/figures/t5/overview.svg` 经浏览器渲染检查，展示的是概括流程。两页本轮未修改图文件。
- [GPT-2 知乎资料](https://zhuanlan.zhihu.com/p/613895056)引用自此前[阅读记录](zhihu-reading.md)：2026-10-27 记录 30 赞同、134 收藏；此前审阅记录提醒其部分参数算式与多任务训练措辞不采用。本次未重读该文或重新查互动数。
- 未完成两篇论文所有数字、全部站外链接、图示小屏阅读与无障碍审查，也未复现模型训练或评测。
