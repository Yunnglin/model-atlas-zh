# Kimi K2 Thinking 专项审校

审校日期：2026-10-29。完整通读 [K2 Thinking 正文](../../src/content/docs/nlp/kimi-k2-thinking.md)，范围为公开 INT4 Thinking 检查点；没有运行模型或复现评测。CSV 和测试场景为教学构造。

- **结构**：对照[官方模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)与[配置](https://huggingface.co/moonshotai/Kimi-K2-Thinking/blob/main/config.json)，核对 1T 总参数、32B 激活、61 层、首层稠密、384 选 8 加共享专家、MLA 和 256K；工具执行属于外部程序。正文与教学图以配置为依据，未将激活参数当作全部存储。
- **训练**：模型卡核对对 MoE 使用 INT4 权重量化感知后训练，配置核对 32 权重一组、对称 INT4 与注意力、共享专家、输出头排除项，以及 KV Cache 配置为空。具体训练配方没有披露，本文将 K2 原始报告作为背景而非 Thinking 完整训练记录。相关性能与具体硬件和框架有关。
- **评测**：模型卡核对 HLE 文本无工具 23.9、工具 44.9、BrowseComp 60.2、SWE-bench Verified 71.3；核对 HLE 最多 120 步、o3-mini 裁判、搜索浏览器和代码工具，以及 SWE-agent 派生框架与 5 次独立运行。补充官方报告允许访问 Hugging Face 为 51.3、正式对比阻止访问的防污染条件；文本与工具、预算、上下文管理应一起记录。
- **配图**：检查[图片登记](../../src/content/data/figures.yaml)、[主干教学图](../../public/figures/kimi-k2-thinking/backbone.svg)与[工具交互图](../../public/figures/kimi-k2-thinking/overview.svg)；首层稠密、后续专家与模型请求、外部执行及结果返回的方向符合配置及示意范围。图非官方原图，教学图许可为 CC BY 4.0。Chromium 打开正文检查两幅图实际加载、替代文本及截图，中文与箭头可读。
- **社区**：沿用 [2026-10-28 实读记录](kimi-thinking-community.md)，月之暗面工程师刘少伟的 [INT4 QAT 说明](https://www.zhihu.com/question/1969558404759544488/answer/1970539327902679960)当时 991 赞、716 收藏，讲伪量化、直通估计与 MoE W4A16；属于项目相关方，训练耗时与误差原因不能推广，量化范围和配置对照模型卡与配置。本次未重读或更新互动数。
