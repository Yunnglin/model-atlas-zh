# Qwen2.5-Coder 与 Qwen3-Coder 专项核查（2026-10-29）

范围：通读两篇正文并核对模型卡、训练与评测中的代表性陈述；未运行模型或重新实读知乎，社区资料沿用既有各篇审校记录。

- [Qwen2.5-Coder 报告 v3](https://arxiv.org/html/2409.12186v3)第 3 节说明文件级阶段 5.2T、仓库阶段约 300B token，以及 8,192 至 32,768 的上下文扩展；表 7 中 7B 的 HumanEval-FIM Python、Java、JavaScript 分别为 79.7、88.5、87.6，带权平均为 86.2。正文对精确匹配、Base 与仓库修复的区别准确。[7B 模型卡](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct)给出 7.61B 总参数、28 层、28 个查询头与 4 个 KV 头；[32B 模型卡](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct)给出 32.5B、64 层与 40/8 头。7B 模型卡同时注明配置默认 32,768，需要 YaRN 处理更长输入，正文未把 128K 写成默认值。
- [Qwen3-Coder 官方说明](https://qwenlm.github.io/blog/qwen3-coder/)给出 480B/35B、7.5T token、70% 代码与长程 Agent RL；[检查点配置](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct/blob/main/config.json)核对 62 层、160 专家选 8、96 个查询头、8 个 KV 头以及每头 128 维。本次补充 65,536 token 的 BF16 KV 缓存教学估算：`62 × 2 × 8 × 128 × 65,536 × 2 / 2³⁰ = 15.5 GiB`，不含权重和其他运行时占用，不是设备实测。
- 两篇对应 `public/figures/qwen25-coder/overview.svg` 与 `public/figures/qwen3-coder/overview.svg` 分别示意 FIM 补全、外部工具执行反馈；人工检查文字与路径顺序，未将执行器画进模型，也未将简图当作论文原始架构图。网页渲染及许可沿用原专项记录；本次未重新截图。

验证：Qwen3-Coder 正文 Prettier、内容测试 7 项与 `git diff --check` 通过。
