# Qwen2.5-Coder 与 Qwen3-Coder 核查

核查日期：2026-10-28。本轮核对指定内容及两张教学图，并补充原文中可追溯的例子；不是逐句复核，也没有运行模型或评测。

- [Qwen2.5-Coder 报告 v3](https://arxiv.org/html/2409.12186v3)表 1 列出六个规格、7B 的 28 层与 28/4 查询和键值头，以及 32B 的 64 层、40/8 头。表 5 中 7B Base 的 HumanEval 与 HumanEval+ 分别为 61.6、53.0。7B Instruct 的[模型卡](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct)标注 Apache 2.0，默认配置 32,768 token，更长输入使用 YaRN。文章新增 FIM 的输入顺序与外部执行过程说明。
- [Qwen3-Coder-480B-A35B-Instruct 模型卡](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)列出 62 层、160 专家中激活 8 个、96/8 查询和键值头、原生 262,144 token 和 Apache 2.0。其[官方发布说明](https://qwenlm.github.io/blog/qwen3-coder/)描述用 Qwen2.5-Coder 清理和改写数据；发布页头图列出 OpenHands 100 轮与 500 轮的 SWE-bench Verified 分数分别为 67.0% 和 69.6%。正文说明两种预算，以免把带工具系统结果当成裸模型结果。
- `public/figures/qwen25-coder/overview.svg` 为 FIM 与外部执行的教学示意，`public/figures/qwen3-coder/overview.svg` 为模型及外部工具的交互示意；均非官方完整架构图。两图的箭头方向、图文和可读性本轮用 Chromium 渲染检查，未发现需修改之处。
- 原有知乎链接是否仍可读及互动数据本轮未重新核验。Qwen3-Coder 发布说明没有公开完整数据与奖励配方，不能根据结果反推训练细节。
