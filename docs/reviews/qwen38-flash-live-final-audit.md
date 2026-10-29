# Qwen3.8 Flash Next 与 LiveTranslate 复核

核对日期：2026-10-28。核对本轮所涉及的模型卡、结构、训练、评测、公开范围和两张原创教学图；没有运行模型或服务，没有重访全部知乎资料，也没有独立复现训练和评测。

- [Qwen3.8-Flash-Next](../../src/content/docs/omni/qwen38-flash-next-model.md)：对照[官方模型卡](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)核查 125B 主模型、6B 激活、额外 51B N-gram 与 4B MTP，48 层结构、专家、上下文、许可及 SWE-bench Pro 的评测口径；对照[报告 v1](https://arxiv.org/html/2608.30320v1) §2.1、§3.1 及 Figure 6 核查 QSA、MTP 与算子加速。修正优化器说明：N-gram 嵌入表采用关闭权重衰减的 Adam，不笼统归入 AdamW；该层键值投影使用 Muon。补充从全注意力切换稀疏注意力并继续训练及相关消融的适用范围。原创图是简化教学图，模型与图中 3:1、MoE、N-gram 和残差通道描述相符，不表示图中展开了全部内部细节。
- [Qwen3.8-LiveTranslate](../../src/content/docs/audio/qwen38-livetranslate-model.md)：通过[官方发布介绍](https://qwen.ai/blog?id=qwen3.8-livetranslate)的搜索索引可见内容核对 60／29 语言、Thinker–Talker、14／70 语向和 LAAL；页面直接读取未返回正文。本次未在官方发布介绍中确认参数规模和公开权重。进一步对照[QwenCloud 实时翻译接口文档](https://docs.qwencloud.com/developer-guides/speech/realtime-translation)及[阿里云模型信息](https://help.aliyun.com/en/model-studio/qwen3-8-livetranslate-flash-realtime)，补充指定服务的音频必需、图像可选、事件与 53,248 token 上下文限制，区分内部历史复用与独立上下文缓存接口。两个服务文档具体配置可能更新。原创教学图表达发布介绍中的信息流；音视频输入和文本声音输出不代表每种服务都具有相同接口。
- 社区资料来源和已记录的互动快照分别见 [Flash Next 社区记录](qwen38-flash-next-community.md) 与 [LiveTranslate 社区记录](qwen38-livetranslate-community.md)；本次没有重核互动数量。
