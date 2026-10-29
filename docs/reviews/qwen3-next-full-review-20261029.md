# Qwen3-Next 专项审校

审校日期：2026-10-29。完整通读 [Qwen3-Next 正文](../../src/content/docs/nlp/qwen-next.md)，范围为 80B-A3B-Instruct；未运行模型或复现评测，会议记录和缓存计算均为教学例子。

- **结构**：对照[官方模型卡](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct)和[配置](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct/blob/main/config.json)核对 48 层、每 3 个 Gated DeltaNet 加 1 个 Gated Attention、512 路由专家选 10 加共享专家、两种注意力各自的头数及全注意力头维 256。新增 RoPE 仅作用于其中 64 维的说明；8192 token、BF16 的全注意力 KV 估算为 192 MiB，不包括 DeltaNet 状态及其他开销。
- **训练**：模型卡核对预训练 15T token 与后训练，使用门控注意力、MoE 和多 token 预测；数据组成与各阶段细节未充分披露。对照 [Gated DeltaNet 论文](https://arxiv.org/abs/2412.06464)解释预测误差更新与门控；论文一般方法不是 Next 此检查点的完整训练配方。
- **评测**：模型卡核对 Instruct 的 MMLU-Pro 80.6、BFCL-v3 70.3、原生 262144 与可扩展 1010000 token，并区分 Base 相对 Qwen3-32B-Base 在长度超过 32K 时的官方吞吐描述；MTP 支持与性能依赖具体框架。长会议和接受率都是教学构造，不是实测。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)与[原创简图](../../public/figures/qwen-next/overview.svg)，每组 3 个 DeltaNet 层、1 个注意力层及每层 MoE、重复 12 组与模型卡相符；标明省略细节及 CC BY 4.0。Chromium 打开本地正文、滚动并解码成功，宽 1060，替代文本存在；截图检查中文及箭头。
- **社区**：沿用 [2026-10-27 知乎实读记录](zhihu-reading.md)，李先生的 [Qwen3-Next 源码解析](https://zhuanlan.zhihu.com/p/1950219022890172477)当时 111 赞、253 收藏，按投影、状态更新与输出拆解；文章中的具体公式和归一化与官方配置及论文核对，教学解释不把图示简化当成完整实现。淘气堡的[浅析](https://zhuanlan.zhihu.com/p/1952124673669173438)当时 99 赞、110 收藏，从线性记忆到门控与 Delta 更新解释状态；其效率泛化不直接采用。本次未重读或更新互动量。

## 2026-10-29 评测数字补充核对

- [Qwen3-Next-80B-A3B-Instruct 官方模型卡](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct)的性能表列 MMLU-Pro 80.6、BFCL-v3 70.3；模型为 Instruct 非思考模式。卡片给出基准名称与分数，正文未声称具体 few-shot 或采样配置。
- 同一模型卡列原生上下文 262,144、扩展至 1,010,000 token；正文将窗口与评测得分区分，数字相符。
