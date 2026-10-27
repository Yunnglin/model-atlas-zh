# Qwen 内容补深记录

核对日期：2026-10-27。本批以公开权重和报告为主，沿用一个例子把输入、结构、训练、评测与错例串起来。所有算例、候选回答与排错实验均为教学构造，未执行模型训练或评测。

## 本批内容

| 页面                                                  | 贯穿例子                | 补充的关键问题                                                                             |
| ----------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------ |
| [Qwen3](../src/content/docs/nlp/qwen3.md)             | 3 箱、每箱 4 瓶         | 因果生成与损失掩码、Dense／MoE、四段后训练、蒸馏、初版与 2507 模式区别                     |
| [Qwen2.5-VL](../src/content/docs/omni/qwen-vl.md)     | 找到发票含税总额 114.48 | 预处理尺寸、patch 与 Merger 数量、窗口／全局注意力、分阶段冻结、字段／格式／定位评测       |
| [Audio／ASR](../src/content/docs/audio/qwen-asr.md)   | 噪声中识别“打开客厅灯”  | 波形与 Fbank、AuT、投影、专门识别与通用理解、ForcedAligner、CER、流式稳定结果              |
| [Qwen3-TTS](../src/content/docs/audio/qwen-tts.md)    | 准确读出金额            | 12Hz 命名与实际 12.5Hz、主／残差码本、MTP、25Hz 研究路线、权重接口、内容／音色／风格／延迟 |
| [Qwen2.5-Omni](../src/content/docs/omni/qwen-omni.md) | 视频中指认左杯并回答    | 编码器初始化、音画时间对应、Thinker／Talker、分块波形生成、分模块排错                      |
| [Qwen3-Omni](../src/content/docs/omni/qwen3-omni.md)  | 同一个左杯问题          | AuT、MoE、多码本与因果解码、文字表示解耦、Instruct／Thinking／Captioner 边界               |
| [Coder](../src/content/docs/nlp/qwen-coder.md)        | 修复计数少一的函数      | FIM、代码补全与任务执行、工具轨迹、训练反馈、隐藏测试与覆盖缺口                            |
| [GSPO](../src/content/docs/training/gspo.md)          | 同题三个候选            | 序列级重要性比率、裁剪、与 GRPO／RLVR 的区别、奖励可靠性                                   |

家族总览保留代际与分支关系，并提供上述深读入口。上一批到此时，Next、3.5—3.8、Qwen3-VL、Image 和专用分支仍是较短解释；本轮已继续补充这些正文，并将检查范围扩展至全部已收录模型，详见[逐页通读记录](reviews/model-depth-review.md)。

## 一手依据与复用图形

技术结论回到各页登记的论文、官方实现和模型卡。报告中具体段落对应：

- [Qwen3 v1](https://arxiv.org/html/2505.09388v1)：架构、预训练与后训练章节；128／8 专家和模式切换限定初版。
- [Qwen2.5-VL v1](https://arxiv.org/html/2502.13923v1)：2.1 架构、2.2 预训练及 2.3 后训练；像素计数结合[输入处理实现](https://github.com/huggingface/transformers/blob/main/src/transformers/models/qwen2_5_vl/processing_qwen2_5_vl.py)与模型卡核对。
- [Qwen3-ASR v1](https://arxiv.org/html/2601.21337v1)：2.1 架构、2.2 训练、3 强制对齐、4 评测；图 2、3。
- [Qwen3-TTS v1](https://arxiv.org/html/2601.15621v1)：2 tokenizer、3 方法、4 评测；图 2、3。12Hz 型号的实际时间步为 12.5Hz，不把型号名代替数值。
- [Qwen2.5-Omni v1](https://arxiv.org/html/2503.20215v1)：架构、预训练与后训练；图 2。
- [Qwen3-Omni v1](https://arxiv.org/html/2509.17765v1)：2 架构、3 预训练、4 后训练及 5 评测；图 2、3。文字表示的解耦以 2.1 节说明为准，不只凭总图图注推断。
- [GSPO v2](https://arxiv.org/html/2507.18071v2)：序列级重要性比率、长度归一化与裁剪；不是奖励来源的同义词。
- [Qwen3-Coder](https://github.com/QwenLM/Qwen3-Coder)与 [Coder-Next 模型卡](https://huggingface.co/Qwen/Qwen3-Coder-Next)：补全、Agent 训练与评测设置。未将具体教学 bug 当作官方训练样本。

本批新增 7 张保留原貌的官方架构图与 2 张原创教学简图。图形文件、尺寸、版本、许可、SHA-256 和简化范围见[资产记录](assets.md)。图形均复用现有组件；没有声称图片支持执行、逐层参数检查或第三方交互嵌入。

## 知乎补充阅读

按用户指定安装并使用 `corrinehu-kimi-searchzhihu`，在持久 Chrome 登录会话中完成搜索和正文阅读。浏览器操作使用当前环境的浏览器工具，保留同一个有界面会话，不另外建立无头登录。以下仅作中文讲解与问题组织参考，未复制原文、图片或代码，也未归入一手资料注册表。

- [marsggbo：从零理解 ASR](https://zhuanlan.zhihu.com/p/2053144456170313482)：适合从波形、特征、编码器一路讲到解码与流式。阅读时发现其中文字数算例、音频 token 数前后不一致，以及循环重跑累积音频与真正增量流式的区别未交代清楚；本站分别用明确的 CER 算例和官方推理接口边界解释，不直接照搬其示例代码。
- [视觉大模型 Qwen2.5-VL 关键技术介绍](https://www.zhihu.com/tardis/bd/art/28123551089)：可帮助组织代际比较；其中“动态分辨率无需 resize”的说法不能照搬。本站使用处理后的实际尺寸计算 token，并区分窗口层与全注意力层。

知乎用于发现读者容易困惑的问题，论文、实现与模型卡用于判断技术结论。未在实际硬件验证的代码不标为已复现，也不搬运第三方文章的成绩作为本站结果。
