# Qwen3.8-LiveTranslate 专项审校（2026-10-29）

对象：`qwen38-livetranslate`，正文 `src/content/docs/audio/qwen38-livetranslate-model.md`。

- **结构**：结合先前的[官方发布资料核查](qwen38-flash-live-final-audit.md)和[知乎阅读记录](qwen38-livetranslate-community.md)，核对 Thinker–Talker、音频和文本交错输出、说话人区分的说明。现行 [QwenCloud 实时翻译文档](https://docs.qwencloud.com/developer-guides/speech/realtime-translation)区分必要音频和可选图片输入；客户端事件映射不应当作模型内部网络结构。
- **训练**：官方发布资料没有公开足以复现的训练数据配比、损失及完整训练流程；正文的训练思路是教学示例，不作为官方训练细节。
- **评测**：先前审校记录的官方发布结果包含 LAAL 2.8 秒到 2.3 秒、70 个方向中 14 个方向的比较；对照时注意基准、条件和指标定义，不能把该数字直接当成任何场景的端到端延迟。模型能力与接口配置另以[阿里云模型文档](https://help.aliyun.com/en/model-studio/qwen3-8-livetranslate-flash-realtime)为准。
- **配图**：`public/figures/qwen38-livetranslate/overview.svg` 是标有来源和许可的教学示意图，非官方原图。浏览器检查正文图片可加载，原始尺寸 1200×410，图片有替代文本；图示不声称复现未公开的内部细节。
- **社区资料**：既有记录中，知乎官方账号的[发布介绍](https://zhuanlan.zhihu.com/p/2084615937060234923)在 2026-10-28 阅读时为 7 赞、8 收藏；它是发布方资料，不是独立验证。本次沿用历史阅读记录，未重新核验当前互动量。

## 本轮修改与验证

依据 QwenCloud 官方接口示例，补充多人字幕中原文、译文及说话人编号的关联方法，以及输入输出默认采样率和会话结束事件。正文没有声称实际调用过服务。浏览器检查本地正文与配图；接口行为按官方文档核对，未进行在线接口实测。
