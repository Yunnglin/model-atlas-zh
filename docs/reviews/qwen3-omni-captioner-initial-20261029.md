# Qwen3-Omni-Captioner 新增内容与资料记录（2026-10-29）

- 对象：[Qwen3-Omni-Captioner 正文](../../src/content/docs/audio/qwen3-omni-captioner-model.md)，时间线 ID 为 `qwen3-omni-captioner`。这是 Qwen3-Omni 的音频描述专项检查点，而非把 Instruct 或 Thinking 的其他参数规格拆成重复条目。
- 官方依据：[模型卡](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Captioner)说明由 Instruct 微调、只有 Thinker、音频输入及文字输出、不接受文字提示、单轮单段，建议不超过 30 秒。 [技术报告 v1 第 4.3 节](https://arxiv.org/html/2509.17765v1#S4.SS3)说明使用大规模细粒度音频描述数据微调；第 9.2 节给出三个定性样例及示例音频，不提供可直接归属于 Captioner 的同表综合分数。
- 正文以构造的雨声、说话和杯声解释声音描述，与 ASR、强制对齐、语音输出区分。训练配方未披露完整参数及数据，不把基础模型的训练阶段推定为 Captioner 专属配方；评测章节区分官方定性样例和教学中的设计数字。
- 配图：[原创示意图](../../public/figures/qwen3-omni-captioner/overview.svg)表示音频、AuT、Thinker 和文字输出，省略内部细节；资料、尺寸和许可已登记。已将 SVG 转成 PNG 并目视检查文字、箭头与方框；尚待最终构建与正文页浏览器检查。
- 知乎搜索：2026-10-29 搜索 Captioner 及 Omni 中文词，找到[产品汇总候选](https://zhuanlan.zhihu.com/p/2083852862950581216)，有简短功能介绍；尚未实读作者及赞藏，不能以搜索摘要充当社区交叉核对。社区维度待补。

本记录仅覆盖新分支的初始资料整理和编写；未执行模型或复现评测。请在共享台账为新条目添加记录并按实际完成情况登记，勿凭条目存在标记全面完成。

2026-10-29 实读候选知乎文章：作者“云多多网络”，页面显示 0 赞同，收藏按钮未显示数量。该文是服务产品汇总，对 Captioner 仅作简短介绍，并非结构、训练或评测深度解析；不作为完整社区交叉审校依据。桌面浏览器中检查了独立正文页和图，图、文字、来源和许可可见，箭头连接正常。
