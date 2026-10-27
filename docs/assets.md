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

## Qwen 本批图形（2026-10-27）

7 张官方原图来自声明 CC BY 4.0 的对应版本技术报告，原文件未改绘。另有 2 张本站原创教学简图，明确标为教学简化；Qwen2.5-VL 和初版 Qwen3 报告采用 arXiv 非独占分发许可，未将其图片误标为 CC BY。两页仍链接官方原图。图形均通过同一个 `ArchitectureFigure` 组件放大、查看来源和失败回退，没有新增绘图框架。

### Qwen2.5-VL：一张发票怎样变成答案

- 范围：Qwen2.5-VL；仅静态图片教学路径。依据：原创教学简图。
- [来源与版本](https://arxiv.org/abs/2502.13923v1)；本地 `public/figures/qwen-vl/teaching-flow.svg`，尺寸 1200 × 540。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`2ba39eaf4796ff54bda62cada30035e53b53eb4ab763de790f18a6c20fef2907`。
- 本站原创教学简图；以处理后 840×560 图片计算 patch 与合并后的数量，省略逐层注意力、位置编码及视频路径。

### Qwen3：从已知前缀预测下一个 token

- 范围：2025 年初版 Qwen3；Dense 与 MoE 为不同型号选择。依据：原创教学简图。
- [来源与版本](https://arxiv.org/abs/2505.09388v1)；本地 `public/figures/qwen3/teaching-flow.svg`，尺寸 1200 × 450。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`6c794e2ecca378667c08a5352ea4234264cbefcccb7b20bfa81d98fc5c226802`。
- 本站原创教学简图；Dense 与 MoE 是两种型号选择，不是同一个模型同时走两条 FFN 路线。省略残差、归一化细节和层数。

### Qwen3-ASR：AuT 预训练与识别结构

- 范围：Qwen3-ASR 技术报告 v1，Figure 2。依据：官方原图。
- [来源与版本](https://arxiv.org/html/2601.21337v1#S2.F2)；本地 `public/figures/qwen-asr/architecture.svg`，尺寸 2205 × 806。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`ea5858d366a5015cbe5abbd83e7ff64c3400b72fb4fcfe4b3a15a44c14f35bf8`。
- 官方 Figure 2，原图未改绘。左侧为 AuT 编码器—解码器预训练，右侧为 ASR 识别模型；正文补充图中未单独绘出的投影层。

### ForcedAligner：给已知文字定位时间

- 范围：Qwen3-ForcedAligner 技术报告 v1，Figure 3。依据：官方原图。
- [来源与版本](https://arxiv.org/html/2601.21337v1#S3.F3)；本地 `public/figures/qwen-asr/alignment.png`，尺寸 2738 × 1874。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`343a411c70519d2635d0825b42d29710ebc9639c1a1cccaaa7fb988481b10d89`。
- 官方 Figure 3，原图未改绘。给定音频和文字，在 time 槽位预测离散时间位置；时间单位不代表实测误差。

### Qwen3-TTS：双轨语音生成

- 范围：Qwen3-TTS 技术报告 v1，Figure 3；12Hz 路线。依据：官方原图。
- [来源与版本](https://arxiv.org/html/2601.15621v1#S3.F3)；本地 `public/figures/qwen-tts/architecture.png`，尺寸 4546 × 3171。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`1e9a61a481bd719ea54a36e8d30389b60675b335c4ef4a667da7df3f9f141c7a`。
- 官方 Figure 3，原图未改绘。主骨干预测主码本，MTP 补其他码本；虚线表示可选条件，各检查点接口不同。

### 语音 tokenizer：25Hz 与 12Hz 两条路线

- 范围：Qwen3-TTS 技术报告 v1，Figure 2。依据：官方原图。
- [来源与版本](https://arxiv.org/html/2601.15621v1#S2.F2)；本地 `public/figures/qwen-tts/tokenizers.png`，尺寸 7737 × 3899。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`9cdde9a7d47ae02f2b83e3584d009dbc57fe9b8201a2af1dd4fbd758cbbcc30a`。
- 官方 Figure 2，原图未改绘。25Hz 单码本与 12Hz 多码本是不同研究路线；公开 12Hz 型号的实际码帧频率为 12.5Hz。

### Qwen2.5-Omni：Thinker 与 Talker

- 范围：Qwen2.5-Omni 技术报告 v1，Figure 2。依据：官方原图。
- [来源与版本](https://arxiv.org/html/2503.20215v1#S2.F2)；本地 `public/figures/qwen25-omni/architecture.png`，尺寸 2742 × 2499。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`6e73f37744949e68944e46aa6c444f9b5ed489685c376a7e584740e2c3ab90a6`。
- 官方 Figure 2，原图未改绘。理解、文字回答、语音码与分块波形重建分工不同，不适用于直接解释 Qwen3-Omni。

### Qwen3-Omni：理解与流式发声

- 范围：Qwen3-Omni 技术报告 v1，Figure 2。依据：官方原图。
- [来源与版本](https://arxiv.org/html/2509.17765v1#S2.F2)；本地 `public/figures/qwen3-omni/architecture.png`，尺寸 5408 × 5715。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`d35fed0d5351a457dcada3b4cea8fd51af0f6de0785ef017f520d63972d5ca8b`。
- 官方 Figure 2，原图未改绘。MoE 是专家结构，0 到 15 是语音码本；两种编号含义不同。文字表示的解耦按正文 2.1 节解释。

### AuT：音频表示怎样学习

- 范围：Qwen3-Omni 技术报告 v1，Figure 3。依据：官方原图。
- [来源与版本](https://arxiv.org/html/2509.17765v1#S2.F3)；本地 `public/figures/qwen3-omni/aut.png`，尺寸 4001 × 3689。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；许可及署名说明随图保存在同目录 `LICENSE.txt`。
- SHA-256：`30662d9abbfe7ff33b88cf90e79229312adf5a40e72cfd2554bdd098d698efe1`。
- 官方 Figure 3，原图未改绘。区分学习音频编码器时的训练系统与接入 Omni 后的编码器，不把训练解码器当作所有推理都保留的模块。
