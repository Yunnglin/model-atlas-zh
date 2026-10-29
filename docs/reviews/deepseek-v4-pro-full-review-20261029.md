# DeepSeek-V4-Pro 全文审校

审校日期：2026-10-29。对象为 [V4-Pro 正文](../../src/content/docs/nlp/deepseek-v4-pro-model.md)，不混用 Flash 或 V4.1。未运行模型、训练或复现评测。

- **结构与模型卡**：对照[报告第 2、4.2 节](https://arxiv.org/html/2606.19348)与[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)，核对 1.6T 总参数、49B 激活、61 层、前两层 HCA、随后 CSA/HCA 交替、CSA 4 倍压缩和 top-k 1024、HCA 128 倍压缩、窗口 128、384 个路由专家选 6 和一个共享专家；模型卡标记 MIT。专家参数需要保存或调入，不能按激活参数估算全部显存。
- **训练**：报告第 4、5 节核对 33T 预训练、领域教师 SFT/GRPO、学生自身轨迹上的反向 KL 与全词表蒸馏，以及后训练的专家与索引器 FP4 量化感知训练。领域教师与 MoE 层内专家是不同概念。
- **评测**：模型卡基础模型表的 MMLU 5-shot Pro-Base 90.1、Flash-Base 88.7；报告摘要比较 1M token 下 Pro 相对 V3.2 的单 token 等效 FP8 FLOPs 27% 与 KV 缓存 10%。正文新增后者的直观解释，明确不是端到端延迟或质量等价证明。仓库修复数字均为教学构造，未进行实际运行。
- **配图**：核对[图登记](../../src/content/data/figures.yaml)与[原创示意图](../../public/figures/deepseek-v4-pro/overview.svg)；2026-10-29 用 Chromium 打开本地正文，图成功解码、宽 1060，替代文本存在，并目视检查箭头与文字。图仅展示注意力层组织，非论文官方网络图。
- **知乎**：沿用[Flash 专项记录](deepseek-v4-flash-full-review-20261029.md)中主审 2026-10-29 登录 Chrome 实读的 JustBeClaw [混合注意力解读](https://zhuanlan.zhihu.com/p/2031146581542580917)，当时 401 赞、546 收藏。文章讨论 CSA 压缩和筛选、HCA 及 Pro 前两层，Pro top-k 1024 与 Flash 512 在文章末尾表格明确区分；对前两层动机的个人推测不当作官方结论。赞藏为阅读时快照。
