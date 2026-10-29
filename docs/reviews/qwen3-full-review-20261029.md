# Qwen3 初版全维度审阅

审阅日期：2026-10-29。范围为 `src/content/docs/nlp/qwen3.md` 所述的 2025 年初版 Qwen3，以及正文对 2507 思考模式的区别说明；没有运行模型或复现论文基准。

## 结构与模型卡

- [技术报告 v1 第 2 节与表 1、2](https://arxiv.org/html/2505.09388v1)：初版六个稠密和两个 MoE 型号；MoE 每层 128 个路由专家、每 token 激活 8 个，无共享专家；稠密结构引入 QK-Norm 并去除 QKV bias。[8B 官方配置](https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json)为 36 层、32 查询头和 8 KV 头。
- 纠正模型卡：报告表 1 中 0.6B 和 1.7B 为 32K，而 4B 及以上稠密与两个 MoE 为 128K；[8B 模型卡](https://huggingface.co/Qwen/Qwen3-8B)指出原生 32768、扩展需要 YaRN，并解释 40960 默认配置的输出／提示预算。4B 的首发博客为 32K，而报告和 [4B 模型卡](https://huggingface.co/Qwen/Qwen3-4B)列出 YaRN 128K，正文明确资料口径差异。
- [首发博客](https://qwenlm.github.io/blog/qwen3/)说明六个稠密及两个 MoE 模型以 Apache 2.0 开放；正文模型卡补充许可。2507 单模式行为按[官方仓库](https://github.com/QwenLM/Qwen3)的 Instruct／Thinking 使用说明区分。

## 训练

- 报告第 3、4 节：约 36T token，预训练三阶段及长度；大模型四阶段后训练包括长 CoT 冷启动、GRPO 推理 RL、思考模式融合 SFT 与通用 RL；较小模型另使用离线／在线蒸馏。正文明确各阶段信号与教学样例。
- 目标 token 概率 0.8 / 0.2 的负自然对数约为 0.223 / 1.609；SFT 例子明确 `12` 作为单 token 的假设。

## 评测和应用

- 报告表 22，Qwen3-32B 思考模式的 IFEval strict prompt 由阶段 2 的 73.0 到阶段 4 的 85.0，AIME 2024 为 83.8 到 81.4；正文限定相应阶段和模式。
- 箱子、送出饮料、推理解释、模型采样次数与选择器的例子用于方法教学，不视为模型实测。正文建议固定权重、题集、预算及结果解析，并分开错误类型。

## 配图

- `qwen3-teaching` 为原创 CC BY 4.0 图，登记来源与省略范围；`public/figures/qwen3/teaching-flow.svg` 显示注意力后 Dense 或 MoE 计算，再进行词表预测；不是同时运行两种 FFN。图中文字和箭头与正文一致。
- Chromium 打开本机 `/nlp/qwen3/`，滚动后图片加载为 1200×450，替代文本存在；截图检查结构与文字。

## 社区

- [匆匆那年：Qwen3 开源大模型源码分析](https://zhuanlan.zhihu.com/p/1902677188064567603) 于 2026-10-27 实读时 59 赞、148 收藏。其示例开头误用 `Qwen2Config()`，正文没有采用该配置；稠密代码不能直接当作 MoE 路由实现。记录见 [Qwen 社区资料](qwen-community.md)，原文只以链接作为延伸阅读。
