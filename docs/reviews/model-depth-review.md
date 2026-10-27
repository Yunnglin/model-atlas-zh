# 模型讲解深度与文案通读记录

核对日期：2026-10-27。覆盖已收录的 49 个模型／家族正文和 Transformer，共 50 个阅读入口。对较短页面补充输入输出、机制、训练信号、评测算例与对照；已有较完整的 Qwen／Whisper 页面保留并复查，避免重复改写。家族中的规格与代际沿表格和详解链接组织，不为每个量化格式重复写一篇。

这是一轮编辑与资料核对记录，不是独立专家认证，也不是模型运行报告。篇幅、章节数和自动检查都不能证明原理正确。闭源模型深入已公开机制与验证方法，未知架构与训练细节仍保持未知。

## 逐页检查

| 阅读入口                                                                        | 核心机制                                    | 具体例子或验证问题                       |
| ------------------------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------- |
| [BERT](../../src/content/docs/nlp/bert.md)                                      | 双向表示、任务头、MLM 与 NSP                | 实体边界，精确率 3/4 与召回 3/5          |
| [GLM 与 ChatGLM 早期路线](../../src/content/docs/nlp/chatglm.md)                | 自回归填空、二维位置与工具后训练            | 城市和日期的三段链路                     |
| [Claude](../../src/content/docs/nlp/claude.md)                                  | Constitutional AI 公开的批评修改与 RLAIF    | 证据变化、事实与拒答分项                 |
| [CLIP](../../src/content/docs/cv/clip.md)                                       | 双编码、批内匹配与候选条件                  | 2×2 匹配与属性绑定、候选概率             |
| [Conformer](../../src/content/docs/audio/conformer.md)                          | 局部卷积、全局注意力与前馈组合              | 音频等待、计算与端点确认                 |
| [DeepSeek-R1](../../src/content/docs/nlp/deepseek-r1.md)                        | R1-Zero 与多阶段 R1、GRPO、蒸馏             | 算术候选与答案提取器对照                 |
| [DeepSeek-V3](../../src/content/docs/nlp/deepseek-v3.md)                        | MoE、MLA、负载均衡与 MTP 分工               | 权重存储、激活计算、通信分别比较         |
| [DiT](../../src/content/docs/cv/dit.md)                                         | 潜在分块、条件注入与重复采样                | 层数和步数、统计 FID 与单图缺陷          |
| [EnCodec](../../src/content/docs/audio/encodec.md)                              | 残差码本、重建与生成器的边界                | 2000 bit/s 算例与重建基线                |
| [F5-TTS](../../src/content/docs/audio/f5-tts.md)                                | 连续特征、ConvNeXt、DiT、流匹配             | 长度、采样步数和声码器分开               |
| [Gemini 1.5](../../src/content/docs/omni/gemini.md)                             | 1.5 长上下文、Pro／Flash 公开边界           | 单点定位、多证据、缺信息分题             |
| [GLM 系列](../../src/content/docs/nlp/glm.md)                                   | 早期填空、对话协议与现代分支演进            | 同接口约束与长文本证据                   |
| [GLM-4.5 → 5.3](../../src/content/docs/nlp/glm-modern.md)                       | DSA、IndexShare、MoE、异步 RL 与基座关系    | 策略版本与任务验收                       |
| [GLM 视觉、语音与 OCR 分支](../../src/content/docs/omni/glm-multimodal.md)      | V、OCR、ASR、TTS 不同监督和解码任务         | 同一金额在四条链的错误定位               |
| [GPT-2](../../src/content/docs/nlp/gpt.md)                                      | 因果生成、缓存、提示学习与参数微调          | 摘要是否随延期一周／两周改变             |
| [GPT-4o](../../src/content/docs/omni/gpt4o.md)                                  | 2024 联合模态路线与串联的信息差异           | 同句不同语气、不同链路错误               |
| [HuBERT](../../src/content/docs/audio/hubert.md)                                | 离线聚类、遮盖预测与迭代标签                | 表示比较需固定下游条件                   |
| [Jev](../../src/content/docs/nlp/jev.md)                                        | 类型化判断、RLCD 公开目标与未知结构         | 概率组频率、覆盖率与代价                 |
| [Kimi 系列](../../src/content/docs/nlp/kimi.md)                                 | K1.5 long2short 与 K2／K3 演进轴            | 短长预算与工程四步比较                   |
| [Kimi K2 与 Thinking](../../src/content/docs/nlp/kimi-k2.md)                    | MLA、MoE、MuonClip 和工具系统分工           | CSV 表头修复与不能偷删测试               |
| [Kimi K3](../../src/content/docs/nlp/kimi-k3.md)                                | KDA、AttnRes、专家计算与视觉路径            | 跨位置约束、系统裁剪与模型读取分开       |
| [Kimi 视觉、音频与 Linear 分支](../../src/content/docs/omni/kimi-multimodal.md) | VL、Audio 双表示、Linear 混合与后续代码路线 | 会议截图、声音、长记录各用真值           |
| [Llama 3.1](../../src/content/docs/nlp/llama.md)                                | GQA、基础权重与 SFT／拒绝采样／DPO          | 固定模板比较精度与量化                   |
| [LLaVA](../../src/content/docs/omni/llava.md)                                   | 视觉投影与语言生成，两阶段训练              | 换图和反向关系检验是否用图               |
| [OmniJev](../../src/content/docs/omni/omnijev.md)                               | Qwen3.5、LoRA、决策头与 prefix-branch       | 原始／校准／服务，重放／在线执行         |
| [Qwen 系列](../../src/content/docs/nlp/qwen.md)                                 | 通用代际与任务分支，深读入口                | 先确认输入输出，再选择分支               |
| [Qwen Audio / ASR](../../src/content/docs/audio/qwen-asr.md)                    | Fbank、AuT、专门识别与 ForcedAligner        | 五字 CER 与临时／稳定结果                |
| [Qwen-Coder 系列](../../src/content/docs/nlp/qwen-coder.md)                     | FIM、外部执行与工程轨迹                     | 计数少一、测试覆盖和需求验收             |
| [Qwen 一代至 2.5](../../src/content/docs/nlp/qwen-early.md)                     | 一代至 2.5，Base／Chat、GQA 与数据          | 合同条件提取与格式／任务成功率           |
| [Qwen-Image](../../src/content/docs/cv/qwen-image.md)                           | MMDiT、VAE 与双路图像条件                   | 海报改价、字形和未改区域                 |
| [Qwen3-Next](../../src/content/docs/nlp/qwen-next.md)                           | Delta 更新、混合注意力、MoE 与 MTP          | 最终预算与旧值差额分题                   |
| [Qwen2.5-Omni](../../src/content/docs/omni/qwen-omni.md)                        | 2.5 编码初始化、Thinker／Talker 与分块 DiT  | 视频左杯与时间对应                       |
| [Qwen-Omni 系列](../../src/content/docs/omni/qwen-omni-family.md)               | 代际路线、ARIA 与模型／harness 边界         | 音画证据与整套交互延迟                   |
| [Qwen 数学、检索与安全分支](../../src/content/docs/nlp/qwen-specialists.md)     | Math、检索、重排与 Guard 目标不同           | Recall／倒数排名与阈值误报漏报           |
| [Qwen3-TTS](../../src/content/docs/audio/qwen-tts.md)                           | 12.5Hz、16 码本、MTP 与波形解码             | 金额内容、音色、表达、延迟分开           |
| [Qwen2.5-VL](../../src/content/docs/omni/qwen-vl.md)                            | patch、窗口／全局、Merger、分阶段训练       | 虚构发票 114.48 与视觉长度算例           |
| [Qwen-VL 系列](../../src/content/docs/omni/qwen-vl-family.md)                   | 从视觉连接到动态分辨率、时间和特征融合      | 读数、字段对应、定位分别验收             |
| [Qwen3](../../src/content/docs/nlp/qwen3.md)                                    | 重复层、初版 MoE、四段后训练与 2507         | 算术损失算例与思考预算                   |
| [Qwen3-Omni](../../src/content/docs/omni/qwen3-omni.md)                         | AuT、MoE、多码本与因果声码解码              | Instruct／Thinking／Captioner 和分项失败 |
| [Qwen3-VL](../../src/content/docs/omni/qwen3-vl.md)                             | DeepStack、Interleaved-MRoPE、文本时间戳    | 短弹窗抽帧与坐标变换                     |
| [Qwen3.5 → 3.8](../../src/content/docs/omni/qwen38.md)                          | 27B 混合层、视觉路径与长程轨迹              | 通知开关的工具、状态、报告三份证据       |
| [SAM](../../src/content/docs/cv/sam.md)                                         | 提示、图像缓存、歧义候选和掩码质量          | 正负点、IoU 80/120 与边界                |
| [Stable Diffusion](../../src/content/docs/cv/stable-diffusion.md)               | latent、U-Net、采样器与 CFG                 | 红杯蓝桌与固定种子组                     |
| [Swin](../../src/content/docs/cv/swin.md)                                       | 窗口、移位掩码、patch merging 与多尺度      | 小目标、平移、缩放控制变量               |
| [T5](../../src/content/docs/nlp/t5.md)                                          | 编码解码分工与多空缺片段重建                | 标签合法性与否定事实保留                 |
| [Transformer](../../src/content/docs/foundations/transformer.md)                | QKV、三种注意力、右移目标与并行训练         | 翻译前缀与未来答案隔离                   |
| [VALL-E](../../src/content/docs/audio/vall-e.md)                                | 主码本 AR、残差码本 NAR 与参考条件          | 参考固定／文字固定两组实验               |
| [ViT](../../src/content/docs/cv/vit.md)                                         | patch 到 token、分类表示与数据依赖          | 197 位置算例与背景捷径                   |
| [wav2vec 2.0](../../src/content/docs/audio/wav2vec2.md)                         | 量化对比、遮盖输入与 CTC 微调               | 标注预算、解码器和说话人留出             |
| [Whisper](../../src/content/docs/audio/whisper.md)                              | 音频编码、任务 token、文字解码与弱监督      | 噪声漏字、无语音与翻译方向               |

## 二次 review 修正与重点

- 安全分支原文把调松阈值后的误报／漏报关注点写反，已改为不能只看误报下降而忽略漏报上升。新例子进一步区分二者。
- Kimi K3 的概括收紧到本次官方配置明确支持的图文范围；不从原生视觉推导所有视频或语音接口。
- Qwen2.5-VL 全注意力层同时注明从 1 计的层号与从 0 计的索引，避免初学者数错层。
- Next 的 Delta 更新明确是当前 key 对应的记忆值与新 value 的差值修正，避免与输出读取所用 query 混淆。整个混合模型仍有全局注意力缓存。
- 类型化输出、正确决策、概率校准、自动化覆盖率分别解释。OmniJev 的离线重放、原始报告、温度校准和实际服务路径没有混写成已验证的在线闭环。
- 核对算例：ViT 196＋1 位置；高宽翻倍的注意力量级；实体精确率 3/4 与召回 3/5；IoU 80/120；假设编码率的 50×4×10；CER 分母；召回与倒数排名。全部为标注的教学算例。
- 类比限定用途：记忆工作板不是无损压缩；专家不是人工学科组；多头不是固定职业；码本不是汉字／声调字典；长窗口不是完整理解保证。

## 引用与文案

各页一手引用保留在统一注册表，新增 TypeSafe RLCD、Gated DeltaNet、Attention Residuals 与 mHC 的一手说明。知乎参考同时记录热度和读后取舍，见 [知乎筛选记录](zhihu-reading.md)，不将高赞作为技术正确性的证明。未复制第三方正文、图形或代码。

正文以输入、具体过程与失败对照展开；公式与模型配置解释时说明适用版本。公开材料没有披露的训练比例、奖励与内部层图不猜测。没有用模型方榜单替代本网站实验，没有声称示例已复现。

技术检查另记在根目录 `design-qa.md`：结构与引用、构建、单元测试、根路径与子路径阅读交互。内容通读与浏览器测试分别提供证据，互不替代。
