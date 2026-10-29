# GLM-5.3-Flash 专项审校（2026-10-29）

对象：`src/content/docs/nlp/glm53-flash-model.md`。完整通读正文；核对公开的一手资料、社区资料和两张实际渲染的插图。未运行模型，也未复现评测成绩。

- **结构：完成。** 对照[模型卡](https://huggingface.co/zai-org/GLM-5.3-Flash)、[配置](https://huggingface.co/zai-org/GLM-5.3-Flash/raw/main/config.json)和[官方结构介绍](https://autoclaw.z.ai/blog/model/glm-5.3-flash)：320B 总参数、18B 激活参数、新训练基座、图文及视频输入；45 层语言主干由 11 组「三层线性注意力、一层稀疏注意力」及最后一层线性注意力构成；视觉编码器 24 层。配置中的 288 个路由专家、每 token 选 8 个、mHC 和 IndexPool 分别与正文对照；注意力类型与稠密／MoE 前馈网络是不同维度。
- **训练：完成。** 官方披露约 30T 多模态 token 与新基座；正文教学样例和 SFT、强化学习的解释没有冒充官方训练样本或完整配方。数据比例、后训练阶段和奖励函数未公开的内容没有编造。
- **评测：完成。** 基座 MMLU 88.1、LiveCodeBench-Base 37.6 与 Chrome 直接读取的官方发布表一致，见[补充复核](glm-deepseek-numeric-review-batch6-20261029.md)；核对模型卡中的 Terminal-Bench 2.1 对比及其 Flash 运行设置；新增后者的版本、工具、采样、输出预算和时间限制。新增聊天模板 `clear_thinking` 与 `reasoning_effort` 的区别，提醒多轮对照同时记录历史处理方式。正文 30 例、21 例通过是明确标识的教学计算。
- **配图：完成。** 总览图 `public/figures/glm53-flash/overview.svg` 与正文结构图 `public/figures/glm53-flash/backbone.svg` 均为标注简化的自绘图；对照官方配置检查输入、输出、注意力、MoE 和层数。浏览器实际渲染两图，并检查替代文本；补充结构图的来源、署名、许可和摘要到 `docs/assets.md`。
- **社区：完成。** 已读记录 [remaining-community-2.md](remaining-community-2.md) 记载，2026-10-28 阅读 [DigitalOcean 的特定配置评测](https://zhuanlan.zhihu.com/p/2078886952426852372)，当时可见赞同 2、收藏 5；其任务、提示、预算和代码入口可用于理解实验设计，不能推广为其他配置的成绩，正文已说明。另据 [glm-community.md](glm-community.md)，同日阅读 [OpenCSG 文章](https://zhuanlan.zhihu.com/p/2078457455110108533)，可见赞同 0、收藏数不可见；其将前三层稠密前馈和注意力类型混同，已用官方配置交叉核对，正文准确区分线性注意力与稠密前馈，不引用其错误表述。

本次核对以公开模型卡和配置为准；官方未披露的训练细节、跨服务商实际表现和分数复现不在上述完成范围内。
