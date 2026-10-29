---
title: Qwen 系列
atlas:
  id: qwen
  modality: nlp
  year: 2023
  featured: true
  aliases:
    - 通义千问
    - Qwen3.7
  purpose: 从第一代读到 3.8 与各条分支
  summary: 用代际表串起通用模型，再进入视觉、语音、Omni、代码与生成分支。
  question: 版本、模态分支和训练变化怎样对应？
  sources:
    - qwen1-paper
    - qwen15-blog
    - qwen2-paper
    - qwen25-paper
    - qwen3-paper
    - qwen-next-card
    - qwen38-code
    - qwen37-blog
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

Qwen 已经是一组模型，不是一个不断变大的聊天机器人。学习时先问：它接收什么、输出什么；结构改在哪里；训练让它多学会了什么。比如“能听懂声音”和“能直接说话”是两项能力，不能看到 Audio 就默认都有。

这里优先详解有开放权重的模型。**开放权重不等于公开全部训练数据和训练代码，使用条件仍看具体模型许可证。** 闭源型号用于认清系列位置，不推测内部结构。

## 结构与数据流

### 通用模型：从一代到 3.8

| 代际                       | 主要变化与学习重点                                   | 公开范围／继续阅读                                               |
| -------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------- |
| Qwen 第一代（2023）        | 中英文为主的因果语言模型；区分预训练 Base 与 Chat    | 开放权重，[一代至 2.5](/nlp/qwen-early/)                         |
| Qwen1.5（2024）            | 扩充规格、多语言与框架支持；后续有 MoE 探索          | 开放权重；不同规格不能套同一配置                                 |
| Qwen2（2024）              | Dense 与 MoE，多语言与长上下文改进                   | 开放权重，看各型号模型卡                                         |
| Qwen2.5（2024）            | 加强数据、代码数学、结构化输出与指令能力             | 开放权重；Coder、Math 独立分支                                   |
| Qwen3（2025）              | Dense／MoE，思考与非思考模式；2507 是后续更新        | 开放权重，[Qwen3 详解](/nlp/qwen3/)                              |
| Qwen3-Next（2025）         | 混合注意力、稀疏 MoE、多 token 预测，关注长文本成本  | 开放权重，[Next 详解](/nlp/qwen-next/)                           |
| Qwen3.5（2026）            | 混合注意力与原生视觉语言能力进入通用主线             | 开放权重，[3.5 → 3.8](/omni/qwen38/)                             |
| Qwen3.6（2026）            | 沿 3.5 基础加强代码与多轮任务，保留思考上下文        | 有开放权重型号，API 名称另行区分                                 |
| Qwen3.7（2026）            | Max 官方定位为长程 Agent 模型                        | 闭源服务，不能补造开放检查点                                     |
| Qwen3.8（2026）            | 加强代码、研究与长程执行；开放 27B、2.4T-A95B 等型号 | 开放权重，与 API Max、Plus 分别核对                              |
| Qwen3.8-Flash-Next（2026） | 混合稀疏注意力、门控残差与 N-gram 表                 | 开放权重，许可另核对；[模型详解](/omni/qwen38-flash-next-model/) |

版本号不决定参数规模。Dense 的 27B 与 MoE 的“总参数／激活参数”要分开读。[MoE](/foundations/moe/)决定调用哪些专家，[混合注意力](/nlp/qwen-next/)决定怎样处理历史信息。

### 分支：按任务理解，不要求编号对齐

| 分支             | 已整理的主线                                                       | 去哪里读                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 视觉理解         | Qwen-VL → Qwen2-VL → Qwen2.5-VL → Qwen3-VL；3.5 起主线也有原生视觉 | [Qwen-VL 系列](/omni/qwen-vl-family/)                                                                                                                                  |
| 音频理解／识别   | Qwen-Audio → Qwen2-Audio；独立 Qwen3-ASR、ForcedAligner 和实时同传 | [ASR](/audio/qwen-asr/)、[LiveTranslate 初代](/audio/qwen3-livetranslate-model/)、[3.5](/audio/qwen35-livetranslate-model/)、[3.8](/audio/qwen38-livetranslate-model/) |
| 全模态交互       | Qwen2.5-Omni → Qwen3-Omni；3.5、3.8-Omni 按公开报告另列            | [Omni 系列](/omni/qwen-omni-family/)                                                                                                                                   |
| 语音生成         | Qwen3-TTS 的 Base、CustomVoice、VoiceDesign 与语音 tokenizer       | [Qwen3-TTS](/audio/qwen-tts/)                                                                                                                                          |
| 代码             | CodeQwen1.5 → Qwen2.5-Coder → Qwen3-Coder／Coder-Next              | [Coder 系列](/nlp/qwen-coder/)                                                                                                                                         |
| 图像生成／编辑   | Qwen-Image、Image-Edit 与 Layered；Image-2.1 另有独立权重和许可    | [Qwen-Image](/cv/qwen-image/)、[Layered](/cv/qwen-image-layered-model/)、[Image-2.1](/cv/qwen-image21-model/)                                                          |
| 机器人动作       | 将视觉和文字条件接入动作预测，执行仍需机器人系统                   | [Qwen-VLA](/omni/qwen-vla-model/)                                                                                                                                      |
| 数学、检索与安全 | Qwen2／2.5-Math、QwQ、Embedding／Reranker、VL 检索、Qwen3Guard     | [专用分支](/nlp/qwen-specialists/)                                                                                                                                     |

参数量、量化格式、Base／Instruct 在对应页归并。**没有独立发布的分支不能按数字补齐**：不能从 Qwen3.8 推出存在名为 Qwen3.8-ASR 的开源模型。

### 想读深，可以跟着一个例子读完

- [Qwen3：一道算术题](/nlp/qwen3/)——因果生成、Dense／MoE、四段后训练、思考预算。
- [Qwen2.5-VL：一张发票](/omni/qwen-vl/)——图片怎样变成 600 个视觉 token，训练怎样学字段，评测怎样区分认字与理解。
- [Qwen3-ASR：一句带噪声的话](/audio/qwen-asr/)——声音编码、专门识别、强制对齐、流式与错例。
- [Qwen3-TTS：读对一笔金额](/audio/qwen-tts/)——多码本、流式发声、声音条件与四类质量。
- [Qwen2.5-Omni](/omni/qwen-omni/)与 [Qwen3-Omni](/omni/qwen3-omni/)——沿同一次看视频回答，比较理解与发声的代际变化。
- [Coder：修复一个计数错误](/nlp/qwen-coder/)——填空补全、工具轨迹、训练反馈与测试覆盖。

## 数据与训练

早期主线先通过[下一 token 预测](/foundations/next-token/)学习文本，再通过指令与偏好训练适应对话。到 Qwen3，要理解长推理训练、[可验证奖励](/training/rlvr/)与[蒸馏](/training/distillation/)；到 3.5 以后，还要看视觉与文本怎样共同训练。每代公开范围不同，不用通用流程图冒充完整配方。

例如补强发票问答，先选能读取图像的型号，再检查分辨率、答案标注和模板；换更大的纯文本模型，不能让它直接读取图片。

## 评测怎么看

固定完整模型 ID、思考设置、输入处理、输出预算与工具环境。系列总榜只帮助找方向：ASR 看字错率，VL 看证据与定位，Coder 看测试通过与任务完成，不能共用一个“综合强弱”分数。

## 应用与错例

先定位：输入是否截断、图像是否缩得太小、工具是否报错、答案是否无依据。归类后补样本或修改流程，再用独立回归集检查。[文档问答案例](/cases/document-qa/)与[全模态助手案例](/cases/omni-assistant/)提供可复现方案入口；这些案例尚未执行。

## 比较与面试追问

**3.8 一定比 3 好在哪里？** 先说明具体型号与任务，再找同条件证据，版本号本身不是评测。

**开放 Qwen 与 API Qwen 是同一模型吗？** 要核对官方对应关系、上下文与工具配置，名称相近不足以证明权重和服务行为相同。

## 参考资料

- [Qwen Technical Report（第一代）](https://arxiv.org/abs/2309.16609)
- [Qwen1.5 官方发布说明](https://qwenlm.github.io/blog/qwen1.5/)
- [Qwen2 Technical Report](https://arxiv.org/abs/2407.10671)
- [Qwen2.5 Technical Report](https://arxiv.org/abs/2412.15115)
- [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388)
- [Qwen3-Next-80B-A3B-Instruct 官方模型卡](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct)
- [Qwen3.5、3.6、3.8 官方发布记录](https://github.com/QwenLM/Qwen3.8)
- [Qwen3.7-Max 官方发布：闭源服务](https://qwen.ai/blog?id=qwen3.7)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表已经实际运行并得到结果。
