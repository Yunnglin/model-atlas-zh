# Qwen3.5-LiveTranslate 专项审校

审校日期：2026-10-29。完整通读 [正文](../../src/content/docs/audio/qwen35-livetranslate-model.md)，范围为 Flash 实时服务；未调用接口或复现评测，直播案例为教学构造。

- **结构**：沿用[早期官方资料核查](qwen-livetranslate-early-audit.md)的 Thinker–Talker 与 Readable Unit 分工；对照[阿里云实时接口](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-livetranslate-flash-realtime)核对音频必选、图像可选与文字/语音输出。界面事件不等于模型内部网络实现；完整参数与权重不凭服务接口猜测。
- **训练**：已有[发布资料核对](qwen-livetranslate-early-audit.md)确认官方未详细披露该版本训练数据、阶段和损失；正文将任务拆解的教学例子与已披露事实分开。未推断其使用何种后训练算法。
- **评测**：对照官方相关[演示仓库说明](https://github.com/modelstudioai/livetranslatedemo/blob/main/README.zh-CN.md)检查字均 2.8 秒口径；修正正文将首字和字均误写为 token 的表述。其他相对初代的 3.45/1.88 秒沿用[先前官方发布核查](qwen-livetranslate-early-audit.md)，测试质量和延迟在不同协议下比较，非本地实测。
- **配图**：对照[登记](../../src/content/data/figures.yaml)及[原创简图](../../public/figures/qwen35-livetranslate/overview.svg)，音视频至 Thinker、可读单元、Talker 和译文/语音的简化路径与公开描述一致，图示来源及 CC BY 4.0 已登记。Chromium 本地页面滚动解码成功、宽 1200、替代文本存在；截图核对中文与箭头。
- **社区**：复用 [2026-10-28 实读记录](qwen-livetranslate-community-final.md)，五花肉Tree 的[浏览器 Demo](https://zhuanlan.zhihu.com/p/2043009656210158557)当时 2 赞、6 收藏；其麦克风/摄像头、WebSocket 与云端服务流程对照官方[演示项目](https://github.com/modelstudioai/livetranslatedemo)核对，开源演示不代表权重公开。互动量低，仅作实践参考；本次未重读或更新互动数据。

本次依照[官方事件文档](https://www.alibabacloud.com/help/en/model-studio/live-translator-server-events)补充 3.5 实时接口 `text`/`stash`、最终结果和结束会话流程；不同模型版本事件格式不同，不能直接套用 3.8 的增量事件。
