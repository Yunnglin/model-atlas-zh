# 三个 MoE 模型的参数口径核对（2026-10-29）

本次检查 DeepSeek-V3、Qwen3 初代 MoE 和 Kimi K2 的模型卡与专家路由描述；未运行模型，也不代表对所有版本进行了评测复现。

- [DeepSeek-V3 官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V3)和[报告](https://arxiv.org/html/2412.19437)说明主模型 671B 总参数、每 token 激活 37B；模型文件另含 14B 的 MTP 模块，合计 685B。配置列出 61 层、前 3 层稠密、256 个路由专家选 8 个及 1 个共享专家，正文与此一致。
- [Qwen3 报告第 2 节和表 2](https://arxiv.org/html/2505.09388)给出初代 MoE 各层 128 个专家、每 token 选 8 个，不设共享专家；[Qwen3-30B-A3B 模型卡](https://huggingface.co/Qwen/Qwen3-30B-A3B)列出 30.5B 总参数和 3.3B 激活。正文新增具体口径并解释注意力等非专家计算仍需执行；不能把激活参数当作全部部署内存。
- [Kimi K2 技术报告表 2](https://arxiv.org/html/2507.20534)列出 1.04T 总参数、32.6B 激活参数、61 层、384 路由专家选 8 个和 1 个共享专家；[Instruct 配置](https://huggingface.co/moonshotai/Kimi-K2-Instruct/blob/main/config.json)与层数和专家设置一致。模型卡补充报告表中的数字，并保留 1T、32B 作为官方常用简写。

以上每 token 激活的参数规模不是完整显存占用；不同专家选择、缓存和执行框架影响部署需求。修改正文后检查格式、内容测试和差异。
