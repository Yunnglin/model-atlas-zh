# 外部资产与交互资源

## Whisper 官方图

- 原始图片：[openai/whisper/approach.png](https://raw.githubusercontent.com/openai/whisper/main/approach.png)。本地为 `public/figures/whisper/approach.png`。
- 来源项目：[OpenAI Whisper](https://github.com/openai/whisper)。获取与核对日期：2026-10-26，来源使用当时的 main，未声称绑定某个提交。
- 原始尺寸：2973 × 2253。保留官方英文标注与结构，未改绘。
- SHA-256：`2b25fb2ed94da7273e10db82f1b7383b38d1b3ee1cc09037c87ec95448de3525`。
- 许可：[官方 MIT LICENSE](https://github.com/openai/whisper/blob/main/LICENSE)，本地副本 `public/figures/whisper/LICENSE.txt`，Copyright (c) 2022 OpenAI。图片不适用本站原创正文的 CC BY 4.0 许可。
- 说明：模型家族的结构和多任务示意，并非针对用户运行时参数生成的执行追踪；不能当成每个后续版本的完整张量图。

## 第三方交互结构图

当前为 [HF Viewer: openai/whisper-small](https://hfviewer.com/openai/whisper-small) 提供新页链接。来源、生成依据、参数与运行支持以目标页面说明为准。没有复制其应用代码，也没有宣称已验证 iframe 嵌入或其所有层级的结构正确性。

`ArchitectureFigure` 预留已验证嵌入模式，但当前没有启用实例。未来接入前逐一核对许可与实际嵌入行为，保留本地图形和来源入口作为回退。不要通过关闭证书验证来绕过目标服务访问失败。

## SAM 官方结构图

- 原始图片：[Segment Anything model_diagram.png](https://raw.githubusercontent.com/facebookresearch/segment-anything/main/assets/model_diagram.png)，本地为 `public/figures/sam/model_diagram.png`。
- 原始尺寸：2412 × 514；获取日期：2026-10-26，使用当时 main 的原图，未改绘。
- SHA-256：`80f88ccc64fdefc08b28682661b41832e25e4c1612e7e430dc30ed551ee51d86`。
- 许可：[官方 Apache-2.0 LICENSE](https://github.com/facebookresearch/segment-anything/blob/main/LICENSE)，副本为 `public/figures/sam/LICENSE.txt`。图片保留原项目许可，不适用本站原创正文的 CC BY 4.0。
- 范围：原始 SAM 的论文级架构示意。原图含文字提示分支，不能据此把已发布预测接口的点、框、掩码能力扩大为完整自然语言分割支持；不与 SAM 2 等后续版本混用。
