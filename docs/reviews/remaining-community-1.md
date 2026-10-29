# 社区资料补查：Qwen3Guard、OmniJev、GLM-OCR

核查日期：2026-10-28。通过知乎站内搜索并阅读候选正文；赞同、收藏数为核查时页面显示值，会随时间变化。互动量仅辅助筛选，不代表技术正确。搜索结果受排序和索引影响，未找到不等于不存在。

## Qwen3Guard

- 查询词：`Qwen3Guard`。
- [hhh：Qwen3Guard 安全检测模型详解](https://zhuanlan.zhihu.com/p/1954857409739718762)：20 赞同、35 收藏。正文详细介绍数据构建、Gen/Stream 以及流式风险边界，可作为延伸阅读，已在模型页面附提醒。
- 核对 [官方技术报告](https://arxiv.org/html/2510.14276)：文章将 119 种语言和方言说成训练数据覆盖语言，报告在数据构建部分提到翻译成另外 15 种语言；不能把评测范围直接当成训练覆盖。文章将 Stream-8B response English average F1 写为 81.2，报告表 12 是 81.1；该平均还采用各基准下较优的 strict/loose 映射，不应理解为一个统一策略的结果。因此数据与结果均以报告原表为准。

## OmniJev

- 知乎查询 `OmniJev`、`OmniJev Qwen3.5`，另用网页检索 `site:zhihu.com "OmniJev" "tinnel123666888"` 和 `site:zhihu.com "OmniJev" "Qwen3.5"`。在查看的结果中没有确认到针对本站所述 OmniJev v1.1 的合适文章；保留模型原始资料作为依据。
- [Datawhale：给 Jev 装上眼睛！多模态 Jev 部署教程发布](https://zhuanlan.zhihu.com/p/2090220072728016471)，2 赞同、5 收藏。正文是 Akhila 的 Jev-Omni，基于 Gemma 4 12B IT，与本站讨论的 tinnel123666888 OmniJev 并非同一模型；因此不作为 OmniJev 的实现解读引用。名字相近不是同源证据。

## GLM-OCR

- 知乎查询 `GLM-OCR 技术报告`，并阅读 [魔搭社区：GLM-OCR 模型实战教程](https://zhuanlan.zhihu.com/p/2009615350375929849)，15 赞同、44 收藏。教程提供 SDK、推理服务和 ms-swift 微调示例，适合作为实践入口；已链接并提醒按官方文档核对版本，不宣称实际运行了示例。
- [官方技术报告](https://arxiv.org/html/2603.10910) 支持其 CogViT 视觉编码器、语言解码器和版面分析后识别的总体描述。基准分数属于报告指定的数据和流水线，不是普遍正确率。文章包含较早的依赖和配置示例，不能保证与当前软件版本兼容。
- 此前核查的 [OpenCSG 文章](https://zhuanlan.zhihu.com/p/2018301114513146887) 站内搜索显示 0 赞同，收藏数量未核实；其架构和训练表述存在无法依据官方资料确认的问题，不作为推荐资料。已有的三款 OCR 实测继续保留为有限样本反馈。
