# 外部资产与交互资源

原创教学图的集中许可与署名要求见 `public/figures/LICENSE-TEACHING.txt`；模型图的来源、适用版本、许可和署名以 `src/content/data/figures.yaml` 对应条目为准，正文内嵌的训练方法图在下方列出。官方原图不适用该原创图许可，遵循各自条目和原作者许可。

## 训练方法正文中的教学图

- `public/figures/training/lora-sft.svg`：LoRA 与 SFT 共用的原创简图，分别说明低秩参数更新和示范答案提供的监督；只展示选中的一层，不代表其他模块必然冻结。依据 [LoRA 原论文](https://arxiv.org/abs/2106.09685)与 [InstructGPT 论文](https://arxiv.org/abs/2203.02155)的监督微调说明。该图适用 `public/figures/LICENSE-TEACHING.txt` 中的 CC BY 4.0 许可，不是论文原图。
- `public/figures/training/feedback-grpo.svg`：RLHF、RLVR 与 GRPO 共用的原创简图，区分奖励来源和策略更新；规则奖励与偏好模型只是两种可选示例，InstructGPT 原论文使用 PPO。依据 [DeepSeekMath](https://arxiv.org/abs/2402.03300) 与 [InstructGPT](https://arxiv.org/abs/2203.02155)，适用 `public/figures/LICENSE-TEACHING.txt` 中的 CC BY 4.0 许可，不是论文原图。
- `public/figures/training/quantization-grid.svg`：量化正文中的原创简图，以固定尺度说明舍入和裁剪；是教学算例，不对应 GPTQ 或 QLoRA 的具体编码。依据 [GPTQ](https://arxiv.org/abs/2210.17323) 和 [QLoRA](https://arxiv.org/abs/2305.14314) 对量化方法的说明，适用 `public/figures/LICENSE-TEACHING.txt` 中的 CC BY 4.0 许可。
- `public/figures/training/distillation-offline.svg`：蒸馏正文中的原创简图，以离线教师生成示范、学生监督训练为例，区分训练与部署；不表示所有蒸馏都离线进行。依据 [Sequence-Level Knowledge Distillation](https://arxiv.org/abs/1606.07947) 与 [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)，适用 `public/figures/LICENSE-TEACHING.txt` 中的 CC BY 4.0 许可。

以下训练方法图同样为原创教学示意，统一适用 `public/figures/LICENSE-TEACHING.txt` 所列 CC BY 4.0 许可，署名 model-atlas-zh contributors；图中数值为教学算例，非论文复现实测。

- `public/figures/training/ppo-clipping.svg`：正负优势下的裁剪算例；依据 [PPO 论文](https://arxiv.org/abs/1707.06347)。
- `public/figures/training/gspo-sequence.svg`：序列概率比与长度归一化；依据 [GSPO 论文](https://arxiv.org/abs/2507.18071)。
- `public/figures/training/rloo-baseline.svg`：留一基线和优势；依据 [Back to Basics](https://arxiv.org/abs/2402.14740)。
- `public/figures/training/dpo-preference.svg`：偏好对与相对参考模型的概率；依据 [DPO 论文](https://arxiv.org/abs/2305.18290)。
- `public/figures/training/dapo-length.svg`：长度奖励与截断处理；依据 [DAPO 论文](https://arxiv.org/abs/2503.14476)。
- `public/figures/training/rlhf-pipeline.svg`：InstructGPT 的示范、偏好与 PPO 路线；依据 [InstructGPT 论文](https://arxiv.org/abs/2203.02155)。
- `public/figures/training/kto-unpaired.svg`：无需偏好配对的单条好坏反馈；依据 [KTO 论文](https://arxiv.org/abs/2402.01306)。
- `public/figures/training/contrastive-pairs.svg`：图文双向对比和批内候选；依据 [CLIP 论文](https://arxiv.org/abs/2103.00020)。
- `public/figures/training/diffusion-flow.svg`：扩散噪声预测与直线流匹配示例；依据 [DDPM](https://arxiv.org/abs/2006.11239) 和 [Flow Matching](https://arxiv.org/abs/2210.02747)。
- `public/figures/training/data-quality.svg`：按说话人划分数据与独立测试；依据 [Rules of Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml)，分组细节是教学选择。

官方图来源、许可和文件一致性复核见 [2026-10-29 审校记录](reviews/official-figure-license-audit-20261029.md)。

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

## Qwen3.5 与 3.8 Omni 官方图

三张图片来自 Qwen Team 对应技术报告 v1，按 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 保留原始文件；重新从原图地址获取后已逐字节比对。署名与许可副本分别位于图像目录中的 `LICENSE.txt`。

- [Qwen3.5-Omni Figure 2](https://arxiv.org/html/2604.15804v1/figures/model.jpg)：`public/figures/qwen35-omni/official-model.jpg`，SHA-256 `f93982441d01de982a0a040324c0aba54bc948eaa70636e944bbda0c553c2fc5`。
- [Qwen3.8-Omni Figure 2](https://arxiv.org/html/2609.25611v1/3.8aut.png)：`public/figures/qwen38-omni/official-encoders.png`，SHA-256 `8652a883c1fcba108605ca046b1c707fe9eac40cfd9fec172adfb5c91678cf25`；仅展示音频编码器。
- [Qwen3.8-Omni Figure 3](https://arxiv.org/html/2609.25611v1/realtime.png)：`public/figures/qwen38-omni/official-realtime.png`，SHA-256 `37d8d310304cc46ad040dd5ee8b02c2ea768829d887e44c6897b8b7c970848b6`；展示 Realtime 与外部框架的系统协作。

两篇文章还使用原创教学简图，许可与署名见各自图示注册记录和 `public/figures/LICENSE-TEACHING.txt`。

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

### Qwen2.5 文本模型：因果解码教学图

- 范围：Qwen2.5 开放文本模型；依据为 [官方技术报告](https://arxiv.org/abs/2412.15115)。图为本站原创教学简图，省略归一化、位置编码、残差和具体张量形状。
- 本地 `public/figures/qwen25/overview.svg`，1060 × 250，CC BY 4.0；署名与许可随图保存。
- SHA-256：`f81cd920f0adede3555e4d63831a0a5d0b705b564afc0e33e2e84eb407a0ef6a`。

### Qwen2 文本模型：稠密与专家模型教学图

- 范围：Qwen2 文本模型；依据为 [官方技术报告](https://arxiv.org/abs/2407.10671)。图为本站原创教学简图，稠密与 MoE 是不同型号的选择，省略归一化、位置编码、残差和具体张量形状。
- 本地 `public/figures/qwen2/overview.svg`，1060 × 250，CC BY 4.0；署名与许可随图保存。
- SHA-256：`b65820e671965f97cc7e8ef699567fcac188f0f4eacb34f2d865c2d60b6443d1`。

### 第一代 Qwen：因果解码教学图

- 范围：第一代 Qwen 文本模型；依据为 [官方技术报告](https://arxiv.org/abs/2309.16609)。图为本站原创教学简图，省略位置编码、归一化、残差及具体张量形状。
- 本地 `public/figures/qwen1/overview.svg`，1060 × 250，CC BY 4.0；署名与许可随图保存。
- SHA-256：`1e57c38024bea10b51c3ed3b779d0e88885c33f240088972da4ae40369acd4c6`。

### Qwen1.5：因果解码教学图

- 范围：Qwen1.5 文本模型；依据为 [官方发布说明](https://qwenlm.github.io/blog/qwen1.5/)。图为本站原创教学简图，省略位置编码、归一化、残差及具体张量形状，不将不同规格简化为同一配置。
- 本地 `public/figures/qwen15/overview.svg`，1060 × 250，CC BY 4.0；署名与许可随图保存。
- SHA-256：`248fc7a7419c2f98d49684b4a2a6b9fdf29a423f0b4c9fb82ce29ab9c44c7160`。

### Qwen3-Next：混合层与专家教学图

- 范围：Qwen3-Next-80B-A3B；依据为 [官方模型卡](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct)。图为本站原创教学简图，省略位置编码、归一化、残差、MTP 和张量细节。
- 本地 `public/figures/qwen-next/overview.svg`，1060 × 260，CC BY 4.0；署名与许可随图保存。
- SHA-256：`f858366226f00e585d0d65933c698e2c354786dc930fca7319469dba3a795fe1`。

### Qwen3.5：视觉语言与混合注意力教学图

- 范围：Qwen3.5 视觉语言系列；依据为 [官方模型卡](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)。图为本站原创教学简图，省略归一化、残差及张量细节，稠密与 MoE 根据具体型号区分。
- 本地 `public/figures/qwen35/overview.svg`，1060 × 260，CC BY 4.0；署名与许可随图保存。
- SHA-256：`9bf6a9f2d322da11bf9bb790bb743917923fbbbaa7d72416e695f4a0275ffb8b`。

### Qwen3-VL：视觉语言融合教学图

- 范围：Qwen3-VL 技术报告 v1；依据为 [官方报告](https://arxiv.org/html/2511.21631v1#S2)。本站原创简图省略分层融合器和张量细节，虚线概括多层特征注入前三层。
- 报告的 arXiv 页面声明的是向 arXiv 授予非独占分发许可，不作为本站复用官方图的授权；因此使用原创图，并保留官方报告入口。
- 本地 `public/figures/qwen3-vl/overview.svg`，1060 × 300，CC BY 4.0；许可随图保存。
- SHA-256：`a2e10ea7428a7973cbf32336147f72c5ee00e178882d07383af1fdf64c7577ab`。

### Qwen-Audio：多任务训练与音频理解

- 范围：Qwen-Audio 论文 v2，Figure 3；[官方图与说明](https://arxiv.org/html/2311.07919v2#S3.F3)。图中冻结与训练状态针对多任务预训练，Chat 微调配置不同。
- 本地 `public/figures/qwen-audio/architecture.png`，2040 × 1332，官方原图未修改，CC BY 4.0；署名和许可随图保存。
- SHA-256：`f53a54c8acb4c27d7ee3652797abe3872026783f58c5569711df22e2c1f11b28`。

### Qwen2-Audio：结构与三阶段训练

- 范围：Qwen2-Audio 技术报告 v1，Figure 2；[官方图与说明](https://arxiv.org/html/2407.10759v1#S2.F2)。左侧是训练阶段，不是推理时的三个模型。
- 本地 `public/figures/qwen2-audio/architecture.png`，2017 × 1220，官方原图未修改，CC BY 4.0；署名和许可随图保存。
- SHA-256：`04420d5989a962c64f2430db0b7c4c4cb50ce46823b1cb3e45f51cb1ab8aee52`。

### Qwen-VL：固定长度视觉表示教学图

- 范围：Qwen-VL 论文 v3；依据为 [官方报告](https://arxiv.org/html/2308.12966v3#S2)。本站原创简图省略层内结构和图像标记，不是官方原图。
- 论文 arXiv 许可是向平台授予非独占分发许可，未作为本站转载授权；报告原图入口保留在正文。
- 本地 `public/figures/qwen-vl-first/overview.svg`，1060 × 250，CC BY 4.0；许可随图保存。
- SHA-256：`b65b9d209acd67c45f5cc4ab9760a76c9606df9fed3c11c16a59f585bdbf795c`。

### Qwen2-VL：动态视觉输入与位置教学图

- 范围：Qwen2-VL 技术报告 v2；依据为 [官方报告](https://arxiv.org/html/2409.12191v2#S2)。本站原创简图省略视频管块、视觉层内细节和标记，不是官方原图。
- 论文 arXiv 许可是向平台授予非独占分发许可，未作为本站转载授权；报告原图入口保留在正文。
- 本地 `public/figures/qwen2-vl/overview.svg`，1060 × 270，CC BY 4.0；许可随图保存。
- SHA-256：`11f39db8c5ad214509c82be191bbc70fa2e791c248e4cca3272c2b38014e75c8`。

### CodeQwen1.5：代码生成教学图

- 范围：CodeQwen1.5-7B；依据为 [官方模型卡](https://huggingface.co/Qwen/CodeQwen1.5-7B)。本站原创教学简图省略网络层内细节；外部工具不是模型组件。
- 本地 `public/figures/codeqwen15/overview.svg`，1060 × 250，CC BY 4.0；许可随图保存。
- SHA-256：`6925143de6fa5f96b1bdd9abe44b9c496cea1acf9c52695f3245c82cd7ce7923`。

### Qwen2.5-Coder：中间补全教学图

- 范围：Qwen2.5-Coder 技术报告 v3；依据为 [官方报告](https://arxiv.org/html/2409.12186v3)。本站原创简图展示 FIM 任务组织，省略网络层内细节，外部执行器并非模型内部模块。
- 报告 arXiv 许可为向平台授予非独占分发许可，未作为本站转载授权；官方报告入口保留在正文。
- 本地 `public/figures/qwen25-coder/overview.svg`，1060 × 250，CC BY 4.0；许可随图保存。
- SHA-256：`2f1d16a9bc97f5c63c99ad79a668a26c31ee05d20fbe140637001f237c440ff6`。

### Qwen3-Coder：模型与外部工具教学图

- 范围：Qwen3-Coder-480B-A35B-Instruct；依据为[官方模型卡](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)。本站原创图展示交互关系，省略网络层内细节，工具属于外部系统。
- 本地 `public/figures/qwen3-coder/overview.svg`，1060 × 260，CC BY 4.0；许可随图保存。
- SHA-256：`acb0b20409172a956f813a89b05c705abf03cc97e53b607bcaf4bff3f36304be`。

### Qwen3-Coder-Next：复用 Next 混合层教学图

- 范围：Qwen3-Coder-Next 80B-A3B；[官方模型卡](https://huggingface.co/Qwen/Qwen3-Coder-Next)确认三层 Gated DeltaNet 与一层 Gated Attention 的重复结构。复用 Qwen3-Next 层布局教学图，并非官方原图；两个配置的 RoPE 设定并不相同，图中未展示这一差异。层布局相同不表示检查点权重、训练数据或能力相同。
- 文件、许可和 SHA-256 见上方「Qwen3-Next：混合层与专家教学图」。

### DeepSeek-V2 教学简图

- 范围：DeepSeek-V2 236B；依据为 [技术报告](https://arxiv.org/abs/2405.04434)。原创简图标示 60 层与首层稠密前馈，省略残差、归一化及内部计算，不是官方原图。
- 本地 `public/figures/deepseek-v2/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`c50f3a707beba60d3ef58006c378faa14e87e8ce8f548da3308fec437df0ad62`。

### DeepSeek-V3 教学简图

- 范围：原始 DeepSeek-V3；依据为 [技术报告](https://arxiv.org/abs/2412.19437v2)。图省略前三层稠密前馈、残差、归一化、层内计算与 MTP，非官方原图。
- 本地 `public/figures/deepseek-v3/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`33e4d47249576a2dd55c58f42c45969829c24dfa96e45819b078dc542f822e38`。

### DeepSeek-R1 后训练教学图

- 范围：初版 R1；依据为 [技术报告](https://arxiv.org/abs/2501.12948v1)。图展示训练阶段，省略 R1-Zero、蒸馏和内部细节。
- 本地 `public/figures/deepseek-r1/training.svg`，1060 × 350，CC BY 4.0。
- SHA-256：`0c47f626d3891fe9b615b94fbf5bd7c317d9271864695a3f577760982adf757d`。

### DeepSeek-V3.2 稀疏注意力教学图

- 范围：DeepSeek-V3.2；依据为 [技术报告](https://arxiv.org/abs/2512.02556)。图省略 MLA 投影和层内细节，非官方原图。
- 本地 `public/figures/deepseek-v32/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`7142c3e04436eda3116eee55721b073986875ea4721addad94a355ebf00b4fe8`。

### DeepSeek-V4-Flash 混合注意力教学图

- 范围：V4-Flash 初版；依据为 [技术报告](https://arxiv.org/abs/2606.19348)。省略层内细节，非官方原图。
- 本地 `public/figures/deepseek-v4-flash/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`78bd2df94793caa82e45255fc190f2bd8fed96580bddca64d2b58f8602b30098`。

### DeepSeek-V4.1-Flash 教学图

- 范围：V4.1-Flash 初版；依据为 [官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)。省略跨层共享与层内细节，非官方原图。
- 本地 `public/figures/deepseek-v41-flash/overview.svg`，1060 × 300，CC BY 4.0。
- SHA-256：`360b0c984c836911f06cd1903da0eb9d8e68eb62eda9e52326861267f9982c74`。

### DeepSeek-V4-Pro 混合注意力教学图

- 范围：V4-Pro 初版；依据为 [技术报告](https://arxiv.org/abs/2606.19348)。省略层内细节，非官方原图。
- 本地 `public/figures/deepseek-v4-pro/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`5c7b48762c10db12ee1d8be70a52cfca500dd1642221cc42e971fcee13ad2201`。

### DeepSeek-Coder-V2 教学图

- 范围：Coder-V2 系列，依据为 [技术报告](https://arxiv.org/abs/2406.11931)；省略层内细节，测试为模型外部可选步骤，非官方原图。
- 本地 `public/figures/deepseek-coder-v2/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`734e0740e0068e7e8639d505f4226705cbe3d96cde7bbdc928695b9938a2b759`。

### DeepSeek-VL2 教学图

- 范围：VL2 系列，依据为 [技术报告](https://arxiv.org/abs/2412.10302)；省略分块排列与层内结构，非官方原图。
- 本地 `public/figures/deepseek-vl2/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`e65726570f8f17c0cfe311b28b2e3b0a7d4fc8d1df8f3819363db7541e365be6`。

### DeepSeekMath 教学图

- 范围：DeepSeekMath 7B 初版，依据为 [技术报告](https://arxiv.org/abs/2402.03300)；展示训练阶段，省略奖励模型训练等细节，非官方原图。
- 本地 `public/figures/deepseek-math/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`8e0265bc0ea266953f7044a243b9b36cd5cd99e280a297f1d5a9138fd28aeba6`。
- 语言骨干补充图 `public/figures/deepseek-math/backbone.svg`，960 × 235，CC BY 4.0；依据 [Base 模型配置](https://huggingface.co/deepseek-ai/deepseek-math-7b-base/blob/main/config.json)，省略归一化、位置编码和残差连接。
- 骨干图 SHA-256：`270d9bc307494cd8ef827c43ed57bd90a41506ff0095f041ab12e9cc268c8e83`。

### DeepSeek-V3.1 教学图

- 范围：V3.1 初版，依据为 [官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V3.1)；工具调用为可选流程，省略多轮交互及层内细节，非官方原图。
- 本地 `public/figures/deepseek-v31/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`920243624347453e522799cb105e73fbf7eba1bc28dd0ee9a7e67b626441afe3`。

### DeepSeek-Coder 初代教学图

- 范围：初代 DeepSeek-Coder，[技术报告](https://arxiv.org/abs/2401.14196)；省略层内结构，非官方原图。
- 本地 `public/figures/deepseek-coder/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`930528ed9b6ed1e0997a1dae42f0a67b11f3ae04bbabdf661f1d8161479cbfa2`。

### DeepSeekMath-V2 教学图

- 范围：DeepSeekMath-V2，[技术报告](https://arxiv.org/abs/2511.22570)；简化生成和验证流程，非官方原图。
- 本地 `public/figures/deepseek-math-v2/overview.svg`，1060 × 280，CC BY 4.0。
- SHA-256：`d8901a69128025f0ec1c9fa9a5a4fb8f812d830c15122fd3f89a9a437f71183a`。
- 语言骨干图 `public/figures/deepseek-math-v2/backbone.svg`，960 × 255，CC BY 4.0；依据[官方配置](https://huggingface.co/deepseek-ai/DeepSeek-Math-V2/blob/main/config.json)，省略归一化、位置编码和残差。
- 骨干图 SHA-256：`15100285735c716b562e905ec4749819c813f8268295227286560b27203bfb59`。

### Janus-Pro 教学图

- 范围：Janus-Pro，[技术报告](https://arxiv.org/abs/2501.17811)；简化视觉路径，非官方原图。
- 本地 `public/figures/janus-pro/overview.svg`，1060 × 360，CC BY 4.0。
- SHA-256：`bfa86f193d5a12761716386cbba1f806941d8cd8dae4dcff1f65031479403477`。

### Qwen2.5-Math 教学图

- 范围：Qwen2.5-Math，[官方项目](https://github.com/QwenLM/Qwen2.5-Math)；简化训练与推理流程，非官方原图。
- 本地 `public/figures/qwen25-math/overview.svg`，1060 × 280，CC BY 4.0。
- SHA-256：`2233c7c004fff458f88071f020fae6d4ca140d2a3fe4c7f11ec67f3f09dbdde2`。

### QwQ-32B 教学图

- 范围：QwQ-32B，[官方模型卡](https://huggingface.co/Qwen/QwQ-32B)；简化强化学习阶段，非官方原图。
- 本地 `public/figures/qwq/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`9f0587b76f1af245c114dbab54bf3f3caf929e113096ff9163ec96f0c1d06a20`。

### Kimi-Audio 教学图

- 范围：Kimi-Audio，[技术报告](https://arxiv.org/abs/2504.18425)；简化音频输入输出过程，非官方原图。
- 本地 `public/figures/kimi-audio/overview.svg`，1060 × 360，CC BY 4.0。
- SHA-256：`b3bb7db1b12a0505f63a1c431476796c74cf87c1d222530f8aabda7807428364`。

### Qwen3 Embedding 教学图

- 范围：Qwen3 Embedding 与 Reranker，[技术报告](https://arxiv.org/abs/2506.05176)；简化召回与重排，非官方原图。
- 本地 `public/figures/qwen3-embedding/overview.svg`，1060 × 290，CC BY 4.0。
- SHA-256：`8e8b7bee2bdc4ed121aabe25688b2707843d89bec8371ef7fbe13632a7a98d8b`。

### GLM-4.5 语言模型结构教学图

- 范围：GLM-4.5，根据[技术报告](https://arxiv.org/abs/2508.06471)中的层数、GQA 和 MoE 配置绘制。
- 本地 `public/figures/glm45/architecture.svg`，1060 × 300，CC BY 4.0。
- SHA-256：`30dcfcdfd8dfe4bea2c39f4d8156888928ff903d8a448813056c86d84316b807`。

### GLM-4.5 教学图

- 范围：GLM-4.5，[技术报告](https://arxiv.org/abs/2508.06471)；简化任务专家训练与工具交互，非官方原图。
- 本地 `public/figures/glm45/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`8eb106caa588998e07a81cb1d601c88182180f20fd7d0647105fb31b5ddeb59f`。

### Kimi-VL 教学图

- 范围：Kimi-VL，[技术报告](https://arxiv.org/abs/2504.07491)；简化图文输入与语言输出流程，非官方原图。
- 本地 `public/figures/kimi-vl/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`d4152f813ae6d476b05ebf6f5a2a1fdddd0973b81007307281e3a768be3653e9`。

### Kimi Linear 教学图

- 范围：Kimi Linear，[技术报告](https://arxiv.org/abs/2510.26692)；简化混合注意力与专家层，非官方原图。
- 本地 `public/figures/kimi-linear/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`7ba4f22e472757455004d19c4cea2211e1fdb92a158440ebde172e07f72acdc9`。

### MiniMax-M2 教学图

- 范围：MiniMax-M2，[系列报告](https://arxiv.org/abs/2605.26494)；简化外部工具循环，非官方原图。
- 本地 `public/figures/minimax-m2/overview.svg`，1060 × 300，CC BY 4.0。
- SHA-256：`648c5ccf800b267354fda8e6fc951b26df42ecff799157b9408c13e1bf63e61e`。

### GLM-4.6 教学图

- 范围：GLM-4.6，[官方模型卡](https://huggingface.co/zai-org/GLM-4.6)；简化工具交互，非官方原图。
- 本地 `public/figures/glm46/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`18439e1f1c23df41901f6dbd1a1471e1a787cc14a6aaf707c735fcb6fda4fa5e`。

### DeepSeek LLM 教学图

- 范围：DeepSeek LLM，依据为[官方资料](https://arxiv.org/abs/2401.02954)；简化流程，非官方原图。
- 本地 `public/figures/deepseek-llm/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`ca4790ef270a359ac3eecf43ebc4771ef97777571ac713e03ecbe4a0149a9a86`。

### GLM-4.7 教学图

- 范围：GLM-4.7，依据为[官方资料](https://huggingface.co/zai-org/GLM-4.7)；简化流程，非官方原图。
- 本地 `public/figures/glm47/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`788c198c5f1cac7a53e3d4d739e830ec890e079557f940f8861c994427ce1f36`。

### Kimi K2.5 教学图

- 范围：Kimi K2.5，依据为[官方资料](https://arxiv.org/abs/2602.02276)；简化流程，非官方原图。
- 本地 `public/figures/kimi-k25/overview.svg`，1060 × 300，CC BY 4.0。
- SHA-256：`cc2cb8e62b060f0417e30f176e794bc783f6b53ab6b38491ad97e9f2d472f37c`。

### MiniMax-M2.1 教学图

- 范围：MiniMax-M2.1，依据为[官方资料](https://huggingface.co/MiniMaxAI/MiniMax-M2.1)；简化流程，非官方原图。
- 本地 `public/figures/minimax-m21/overview.svg`，1060 × 280，CC BY 4.0。
- SHA-256：`2c5c56faa8d649dc32916731a875fbc363d2c0fd20678405616048a13e916283`。

### Transformer 原始架构 教学图

- 范围：Transformer 原始架构，依据为[官方资料](https://arxiv.org/abs/1706.03762)；简化流程，非官方原图。
- 本地 `public/figures/transformer/overview.svg`，1060 × 300，CC BY 4.0。
- SHA-256：`56df00de6f0287a83447dbd6c86e2c5e7ff6a1c60c81a30d010de66667a4b7f5`。

### GLM-5 教学图

- 范围：GLM-5，依据为[官方资料](https://arxiv.org/abs/2602.15763)；简化流程，非官方原图。
- 本地 `public/figures/glm5/overview.svg`，1060 × 260，CC BY 4.0。
- SHA-256：`7c7ecbd008847ba8d032bcdab868348da34fb0efbf352440045f246cd642c93c`。

### Kimi K2.6 教学图

- 范围：Kimi K2.6，依据为[官方资料](https://huggingface.co/moonshotai/Kimi-K2.6)；简化流程，非官方原图。
- 本地 `public/figures/kimi-k26/overview.svg`，1060 × 300，CC BY 4.0。
- SHA-256：`dc2c8ea5bd22d0c71c97f2620a390f681fcc18238d698ca059a608d24c67746e`。

### Kimi K2.6 与 K2.7 Code 语言主干教学图

- 依据：[Kimi K2.6 官方配置](https://huggingface.co/moonshotai/Kimi-K2.6/blob/main/config.json)与 [Kimi K2.7 Code 官方配置](https://huggingface.co/moonshotai/Kimi-K2.7-Code/blob/main/config.json)；展示 MLA 和专家前馈的简化结构。
- 本地 `public/figures/kimi-k26-k27/backbone.svg`，1050 × 300；原创教学图，model-atlas-zh 贡献者，CC BY 4.0。
- SHA-256：`049c761c3dab795baea3dec7d00b5281be5c38c38f40160da808bdfef55db81b`。

### MiniMax-M2.5 教学图

- 范围：MiniMax-M2.5，依据为[官方资料](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)；简化流程，非官方原图。
- 本地 `public/figures/minimax-m25/overview.svg`，1060 × 280，CC BY 4.0。
- SHA-256：`fca5a768eb0b1be8047336f9bae7f1bea139598a8f610c79ebefe7b0947342ce`。

### MiniMax M3 教学图

- 范围：MiniMax M3，依据为[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3)与 [MSA 论文](https://arxiv.org/abs/2606.13392)；示意语言模型稀疏层及后续专家前馈，省略视觉编码及各层细节。
- 本地 `public/figures/minimax-m3/overview.svg`，1080 × 345，CC BY 4.0。
- SHA-256：`ba40a5effb7171d74eb71921f92de591bdf173e1205393fd926cb6bd6edb6374`。

### GLM-ASR-Nano 语音转写教学图

- 范围：GLM-ASR-Nano-2512；依据为[官方模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)与 [Transformers 实现](https://github.com/huggingface/transformers/blob/main/src/transformers/models/glmasr/modeling_glmasr.py)。转写提示为文本输入，不进入音频特征提取；图省略分块和层内细节。
- 本地 `public/figures/glm-asr/overview.svg`，1080 × 330，CC BY 4.0。
- SHA-256：`afb0883f3dbde2d03c0cc2cef4151d762a03310bfeb3b1a56c0519ed5261e94b`。

### Qwen3.6-27B 多模态与工具流程教学图

- 范围：Qwen3.6-27B 的视觉输入、混合注意力层组与工具交互；依据[官方模型卡](https://huggingface.co/Qwen/Qwen3.6-27B)，外部工具与语言骨干分开展示，省略视觉编码与层内细节。
- 本地 `public/figures/qwen36/overview.svg`，1060 × 450，CC BY 4.0。
- SHA-256：`380b021098f8e59d90c5d51af0bcc58daa8930f4c13995ae05a720e305abeb70`。

### MiniMax-M2 系列共用主干教学图

- 范围：依据 [M2 系列技术报告](https://arxiv.org/abs/2605.26494)和 M2、M2.1、M2.5、M2.7 官方配置绘制的简化语言主干。
- 本地 `public/figures/minimax-m2/backbone.svg`，1100 × 260，CC BY 4.0。
- SHA-256：`f500c2e07283e43fb319be8d2c4e8fc84e57e4a4f55c15414e0625806ca62232`。

### GLM-130B 填空教学图

- 范围：依据 [GLM-130B 技术报告](https://arxiv.org/abs/2210.02414)绘制单一主干、上下文和逐词填空的简化流程。
- 本地 `public/figures/glm130/overview.svg`，1080 × 300，CC BY 4.0。
- SHA-256：`01baa324ffcdefaf61f54ff6ef10c563ab96fa8b370384521308b3f343405cb6`。

### GLM-4-9B-Chat 文本与工具教学图

- 范围：依据[官方配置](https://huggingface.co/zai-org/glm-4-9b-chat/blob/main/config.json)绘制文本生成及外部工具执行的简化流程。
- 本地 `public/figures/glm4-9b/overview.svg`，1080 × 300，CC BY 4.0。
- SHA-256：`27ef13f2c5931259c1a74da28b0665c71e6aec3fa82a00ff89488e8f87205dcf`。

### MiniMax-M1 混合注意力与稀疏专家教学图

- 范围：依据 [MiniMax-M1 技术报告](https://arxiv.org/abs/2506.13585)与 [80K 权重配置](https://huggingface.co/MiniMaxAI/MiniMax-M1-80k/blob/main/config.json)绘制的简化语言主干。
- 本地 `public/figures/minimax-m1/overview.svg`，1080 × 330，CC BY 4.0。
- SHA-256：`c77da56aa47c6d3beaf23d39955e2f65809f71de848407ad820f7dfe6cc45ec3`。

### Qwen-Image-Layered 官方论文图 4

- 作者：Shengming Yin 等，《[Qwen-Image-Layered](https://arxiv.org/abs/2512.15603)》，图 4；[原始图像](https://arxiv.org/html/2512.15603v1/figure2.png)，未经修改。
- 许可：[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；论文的 [HTML 版本](https://arxiv.org/html/2512.15603v1)标注该许可。
- 本地 `public/figures/qwen-image-layered/official-figure4.png`，1987 × 945。
- SHA-256：`8742de84f80465f310f70a28e512d8d8d1de01bc89c2c4055332cfe37c31f4b4`。

### Qwen-Image-Edit 多图推理教学图

- 范围：依据 [Diffusers 固定版本管线](https://github.com/huggingface/diffusers/blob/c60830ee365d520ab52b110dda562dd26f7b4d7f/src/diffusers/pipelines/qwenimage/pipeline_qwenimage_edit_plus.py)绘制多参考图的语义和 VAE 条件路径；图为推理简图，不代表官方训练数据拼接的具体实现。
- 本地 `public/figures/qwen-image-edit-plus/inference.svg`，1200 × 430，作者为 model-atlas-zh 贡献者，CC BY 4.0。
- SHA-256：`8827ac3ce9748459747a4214c56132e010d770d46b143854ad7bfbd0931179fd`。

### Qwen3-VL-Embedding 编码教学图

- 范围：依据[技术报告第 2 节](https://arxiv.org/html/2601.04720v1)绘制视觉、文本输入与末尾标记隐藏状态形成向量的简化流程；未展示所有网络层。
- 本地 `public/figures/qwen3-vl-embedding/encoder.svg`，1120 × 290，作者为 model-atlas-zh 贡献者，CC BY 4.0。
- SHA-256：`e6af09e22878391efa5f14298cbae1bb1a5a0a85a8db261e15ed5095a0caf5f4`。

### Qwen3Guard-Stream 分类分支教学图

- 范围：依据 [Qwen3Guard 技术报告第 4.1 节](https://arxiv.org/html/2510.14276)绘制请求和回复分类分支及各自的风险等级、类别输出；省略骨干细节。
- 本地 `public/figures/qwen3guard/stream-heads.svg`，1080 × 380，作者为 model-atlas-zh 贡献者，CC BY 4.0。
- SHA-256：`7131ca37ecfe06b954fe328f4801751f0cdabb7c42c8162c169b59ac070a4efd`。

### GLM-5.1 / GLM-5.2 共用主干教学图

- 范围：依据 [GLM-5.1 配置](https://huggingface.co/zai-org/GLM-5.1/raw/main/config.json)和 [GLM-5.2 配置](https://huggingface.co/zai-org/GLM-5.2/raw/main/config.json)说明 78 层注意力与前馈的简化流程，省略残差、归一化和多 token 预测。
- 本地 `public/figures/glm5-family/backbone.svg`，1100 × 340，作者为 model-atlas-zh 贡献者，CC BY 4.0。
- SHA-256：`95b86e1e6735a77e47a1b2b30fb660b128f083182fed9e6a7d00a28c101633fe`。

### GLM-5.3-Flash 多模态主干教学图

- 范围：依据 [GLM-5.3-Flash 配置](https://huggingface.co/zai-org/GLM-5.3-Flash/raw/main/config.json)绘制视觉输入、混合注意力和稠密／专家前馈的简化路径，省略层内细节。
- 本地 `public/figures/glm53-flash/backbone.svg`，1100 × 410，作者为 model-atlas-zh 贡献者，CC BY 4.0。
- SHA-256：`1aca5bbcabb74098cba18eac65c73c442b1ecf2ca11fc5de3ddcc2a3ff2d7069`。
