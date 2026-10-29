# 官方结构图来源与许可核查（2026-10-29）

范围为图集登记中以官方原图标示的 Whisper、SAM 和 Qwen 系列。核对文件与声明，不将论文许可推定为模型权重或其他素材的许可；未核查网站所有原创图。

- **Whisper**：2026-10-29 重新下载 [openai/whisper 的 approach.png](https://github.com/openai/whisper/blob/main/approach.png)，与本地文件 SHA-256 均为 `2b25fb2ed94da7273e10db82f1b7383b38d1b3ee1cc09037c87ec95448de3525`；[仓库 MIT 许可](https://github.com/openai/whisper/blob/main/LICENSE)及版权声明已随图保存，图集标注 OpenAI 和未改绘。
- **SAM**：2026-10-29 重新下载 [segment-anything 的 model_diagram.png](https://github.com/facebookresearch/segment-anything/blob/main/assets/model_diagram.png)，与本地文件 SHA-256 均为 `80f88ccc64fdefc08b28682661b41832e25e4c1612e7e430dc30ed551ee51d86`；[仓库 Apache-2.0 许可](https://github.com/facebookresearch/segment-anything/blob/main/LICENSE)已随图保存，图集注明项目贡献者和未改绘。
- **Qwen**：分别对照九篇论文对应版本的页面许可，均显示 CC BY 4.0：Qwen-Audio [v2](https://arxiv.org/html/2311.07919v2)、Qwen2-Audio [v1](https://arxiv.org/html/2407.10759v1)、Qwen3-ASR [v1](https://arxiv.org/html/2601.21337v1)、Qwen3-TTS [v1](https://arxiv.org/html/2601.15621v1)、Qwen2.5-Omni [v1](https://arxiv.org/html/2503.20215v1)、Qwen3-Omni [v1](https://arxiv.org/html/2509.17765v1)、Qwen3.5-Omni [v1](https://arxiv.org/html/2604.15804v1)、Qwen3.8-Omni [v1](https://arxiv.org/html/2609.25611v1) 与 Qwen-Image-Layered [v1](https://arxiv.org/html/2512.15603v1)。按各论文对应 Figure 重新读取图像文件，13 个不同本地文件与原图 SHA-256 均一致（ForcedAligner 图由两个图集条目共用）；各图集条目均记载作者、原文、版本、许可与未改绘。图目录中的许可说明和 [资产清单](../assets.md) 保留对应出处。
- **读者可访问的许可**：此前两种正文中的配图显示许可名称，但没有直接链接许可文本。现在分别为 CC BY 4.0、MIT 和 Apache-2.0 添加许可链接；图源和署名仍在同一图注。未登记的其他许可名称保持原文字，不擅自推断链接。相关组件和静态正文共用同一纯函数；单元测试检查独立正文子路径及交互组件可访问链接。

本次核查针对图像文件与项目或论文公开声明，未独立确定任何未列明第三方权利，也未对文章里的其他外部图片作普遍授权判断。验证：13 张 Qwen 图和两张仓库图的远端与本地字节一致，相关单测、ESLint、格式及 `git diff --check` 通过。
