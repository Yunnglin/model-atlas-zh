# Qwen3.5-Omni 中文资料核查

核查日期：2026-10-28。使用已登录知乎页面检索并阅读 [模型之声：Qwen3.5-Omni 语音架构解读](https://zhuanlan.zhihu.com/p/2047357911563776046)，页面当时显示 **14 赞同、18 收藏**。互动数会变化，也不证明观点正确。

文章用 Thinker／Talker、AuT 和 ARIA 串起语音路径，适合作为中文延伸阅读。文中把从 Qwen3-Omni 配置推断 Qwen3.5-Omni 码本规格、以及推理时如何获得 ARIA 全局比例明确写为作者猜测；没有将这两项猜测写为官方事实。结构、训练和实验口径以 [技术报告 v1](https://arxiv.org/abs/2604.15804v1) 为准。

[阿里云 Model Studio 发布记录](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/newly-released-models)列出 Plus、Flash 于 2026 年 3 月 30 日上线；技术报告 v1 是同年 4 月 17 日提交。服务上线不等于模型权重开放；目前未确认 Plus／Flash 的官方可下载权重。该记录不代表模型已实际运行或评测复现。
