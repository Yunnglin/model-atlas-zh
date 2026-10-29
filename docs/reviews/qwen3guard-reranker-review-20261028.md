# Qwen3Guard 与 Qwen3-Reranker 内容审校记录

审校日期：2026-10-28。依据论文、官方模型卡和官方示例核对文章；以下例子用于帮助理解，数值例子不是实际运行结果。

## Qwen3Guard

- [技术报告](https://arxiv.org/html/2510.14276) 第 3、4 节：核对生成式和流式版本的训练与输出。Stream 从隐藏状态分别经过 prompt 和 response 分类路径，两条路径各有风险和类别输出；新增的结构图按论文描述自行绘制，用于解释结构。
- 同一报告第 4.2 节：风险边界候选要求采样续写中至少 85% 为 Unsafe 或 Controversial，且还要由裁判检查前缀本身。文章用 17/20 举例，并写明前缀检查。
- [Gen 0.6B 模型卡](https://huggingface.co/Qwen/Qwen3Guard-Gen-0.6B)、[Stream 0.6B 模型卡](https://huggingface.co/Qwen/Qwen3Guard-Stream-0.6B)：核对模型发布及 Apache 2.0 许可。

## Qwen3-Reranker

- [技术报告](https://arxiv.org/html/2506.05176v1) 表 1、第 3 节及表 4：核对模型层数、序列长度、训练目标与已有评测数字。补充训练时完整词表的目标概率和推理时 `yes`/`no` 两项归一化的区别。
- [0.6B](https://huggingface.co/Qwen/Qwen3-Reranker-0.6B)、[4B](https://huggingface.co/Qwen/Qwen3-Reranker-4B)、[8B](https://huggingface.co/Qwen/Qwen3-Reranker-8B) 官方模型卡：核对各规格许可。0.6B 卡片中的示例将 `max_length` 设为 8192；报告列出的模型序列长度为 32K，两者并不矛盾。

本次未执行模型训练或评测，文章中的性能数字沿用论文结果；也未重新检索知乎文章。
