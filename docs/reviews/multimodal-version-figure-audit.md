# 多模态与音频图示版本抽查

核对日期：2026-10-28。对照图中文字、数据流、图注与所标示的具体版本，不代表对文章全部细节、权重或实验结果的逐项核验；未运行模型。教学图均省略内部结构，不是论文原图。

| 图示               | 本轮核查的对应依据与边界                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GLM-4V-9B          | [CogVLM2 论文](https://arxiv.org/html/2408.16500)第 2 节将视觉编码、下采样和语言解码对应到该型号；不能套用同论文的 CogVLM2 视觉专家。                                                                                                                   |
| GLM-ASR-Nano       | [配置](https://huggingface.co/zai-org/GLM-ASR-Nano-2512/raw/main/config.json)列出声学编码配置、Mel 维度和投影；[Transformers 模型文档](https://huggingface.co/docs/transformers/model_doc/glmasr)提供输入与转写接口。图只描述对应检查点的一条转写路径。 |
| Kimi K2.5          | [技术报告](https://arxiv.org/html/2602.02276)第 4.2 节列出 MoonViT-3D、MLP 投影器和 K2 MoE。原图把文字与图像画在同一输入框，容易误以为文字先经过视觉编码器；现拆出文字路径，直接进入语言主干。工具执行由外部系统负责。                                  |
| Kimi K2.6          | [官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)说明其与 K2.5 同架构、视觉编码器为 MoonViT，并将视频对话标为实验功能，核对时仅官方 API 支持；图注已补充该服务边界。                                                                            |
| Kimi K2.7 Code     | [官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)列出 MoonViT、MoE 和图文视频输入；模型输出工具请求不等于自行执行。图注补充视频接口的实验性限制。                                                                                          |
| MiniMax M3         | [官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3)与 [MSA 论文](https://arxiv.org/html/2606.13392)分别说明多模态模型和稀疏层：索引分支按组选择块，局部块保留，主注意力读取选中块。图注保留前三层全注意力和简化范围。                             |
| MiniMax M3.1 Flash | [官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)列出全层稀疏注意力、量化感知训练与 DSpark 草稿头；具体推理收益仍取决于部署实现。                                                                                                       |
| Qwen3.6-27B        | [官方模型卡](https://huggingface.co/Qwen/Qwen3.6-27B)列视觉编码器及 Gated DeltaNet／Gated Attention 混合语言骨干。图中的工具执行属于模型外部系统。                                                                                                      |
| Qwen3.8            | [27B 模型卡](https://huggingface.co/Qwen/Qwen3.8-27B)列稠密视觉语言模型；[2.4T-A95B 模型卡](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)列混合注意力与 MoE，且该开放权重只接受文本。图将两种检查点分开，不把服务能力自动赋予它们。                    |
| OmniJev v1.1       | [项目说明](https://github.com/tinnel123666888/OmniJev)列 Qwen3.5 视觉语言底座、LoRA 和不同决策头；图中的外部执行和复核不能由模型输出单独保证。                                                                                                          |

Kimi K2.5 修订后的 SVG 已进行 XML 解析并在桌面截图中目视检查；这不代表所有模型图或移动设备都已验证。
