# 社区资料补充核验（第三组）

核验日期：2026-10-28。互动量为当时知乎页面直接显示的数字，会变化；受欢迎不等于技术结论正确。官方论文、仓库和模型卡仍是事实依据。

## ChatGLM-6B

- [ChatGLM-6B是如何生成回复的？技术详解](https://zhuanlan.zhihu.com/p/617929228)，无涯，339 赞、743 收藏。文章沿调用顺序解释聊天接口、历史拼接、分词、注意力掩码与模型模块，配有多个示意图；适合初代 ChatGLM 的源码阅读，不代表后续版本实现。已补入 ChatGLM 页面。
- 与 [初代官方仓库](https://github.com/zai-org/ChatGLM-6B) 交叉核对模型身份和仓库；文章依赖 2023 年实现及当时 transformers 的代码，具体调用须依赖版本复核。

## Kimi k1.5

- [Kimi k1.5 论文解读](https://zhuanlan.zhihu.com/p/19612718816)，tomsheep，91 赞、105 收藏。覆盖长上下文强化学习、long2short 和训练流程，已作为带警示的入门资料加入 Kimi 页面。
- 对照 [官方论文 2.6.2 节](https://arxiv.org/html/2501.12599)：partial rollout 将未完成的长轨迹存入缓冲并在后续轮次续写，复用之前的片段；文章称片段分别获得奖励、无须完整轨迹便能反馈，与论文描述不符。文中代码是说明性示意，不能当成官方实现。

## Kimi K2 Thinking

- [官方发布文章](https://zhuanlan.zhihu.com/p/1969908447005873171)，190 赞、87 收藏；其中评测结果是团队在指定条件下报告，工具调用次数不能当成普遍保证。
- [Kimi K2 与 K2 Thinking 社区详解](https://zhuanlan.zhihu.com/p/1973160552684622460)，袁朝发，57 赞、81 收藏。可借鉴其对 K2 的结构和 MuonClip 的梳理；作者说明 Thinking 的训练配方未公开，部分解释基于 K2 报告推测，不能写成 Thinking 已证实细节。已将两篇列为延伸阅读并提示范围。
- 交叉依据：[K2 技术报告](https://arxiv.org/abs/2507.20534)、[Thinking 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)。

## 尚未核验

本组没有完成 Stable Diffusion、Claude、Qwen1.5 dense、DeepSeek V3.2 等条目的同型号知乎阅读和互动量核验；不能据此认为不存在可用资料。其他并行审查的结果以各自记录为准。
