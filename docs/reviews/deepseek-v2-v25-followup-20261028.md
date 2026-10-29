# DeepSeek-V2 / V2.5 重点核查

核查日期：2026-10-28。此次核对具体结构配置、部分评测、许可和图示；并非对全部正文和全部来源的逐句独立审校。

- [V2 技术报告](https://arxiv.org/html/2405.04434v5)第 2、3 节报告 V2 的 60 层结构（第一层为稠密前馈，其余为 MoE），每个 MoE 层包含两个共享专家和 160 个路由专家，每个 token 选择 6 个路由专家；模型总参数约 236B、激活约 21B。报告中 V2 对前代 DeepSeek 67B 的 KV Cache 减少 93.3%，是该比较的缓存口径。
- [V2 官方配置](https://huggingface.co/deepseek-ai/DeepSeek-V2/blob/main/config.json)列 60 层、`kv_lora_rank=512` 与 `qk_rope_head_dim=64`。新增 8,192 token、BF16 下 540 MiB 的缓存算例是按 $60×(512+64)×8192×2$ 字节推导，假设推理实现保留压缩潜变量与位置键；未实际加载权重或测量。
- [V2 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V2)说明代码采用 MIT、模型使用独立模型许可，并说明 V2 系列支持商业使用；具体许可仍以对应文件为准。
- [V2.5 官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V2.5)中 HumanEval Python 的 V2-0628、Coder-V2-0724、V2.5 分别为 84.5、87.2、89；SWE-verified 后两者为 19、16.8。FIM 示例使用 `<｜fim▁begin｜>{prefix}<｜fim▁hole｜>{suffix}<｜fim▁end｜>`。模型卡没有完整披露 V2.5 的训练配方。
- [V2.5 配置](https://huggingface.co/deepseek-ai/DeepSeek-V2.5/blob/main/config.json)列 60 层、128 查询头、160 路由专家、2 共享专家、每 token 选 6 个路由专家，与正文配置一致。
- V2 的教学图展示 MLA 和专家前馈，已明确省略第一层稠密前馈。V2.5 的教学图原文及图注提到外部工具反馈，但图中缺返回箭头；本次补充工具结果返回模型的路径，并用 Chromium 渲染检查。该图未在 `docs/assets.md` 登记哈希，图像尺寸不变。
- V2 页面已有知乎实现分析链接；V2.5 页面已有社区介绍链接。本轮未重读知乎或核查互动数。未运行模型、复现训练或全部评测。

验证：`vitest run tests/unit/content.test.ts tests/unit/figure-arrows.test.ts` 共 9 项通过；两篇 Markdown 已格式化，V2.5 SVG 经 XML 解析与浏览器渲染检查。
