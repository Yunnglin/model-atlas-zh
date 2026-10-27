---
title: Qwen-Omni 系列
atlas:
  id: qwen-omni-family
  modality: omni
  year: 2025
  featured: true
  aliases:
    - Qwen2.5-Omni
    - Qwen3-Omni
    - Qwen3.5-Omni
    - Qwen3.8-Omni
    - Thinker
    - Talker
  purpose: 串起全模态理解与实时说话
  summary: 从 2.5、3 的开放权重到 3.5、3.8 的公开报告，分清 Thinker、Talker 与实时系统。
  question: 能理解多种输入，怎样变成低延迟语音交互？
  sources:
    - omni-code
    - qwen3-omni-code
    - qwen35-omni-paper
    - qwen38-omni-paper
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

用户指着视频问“刚才那个人说了什么”，助手既要看画面、听声音，也要及时回答。把 ASR、语言模型和 TTS 串起来可以做系统，Omni 则在模型层面共同处理多种输入和输出。[返回 Qwen](/nlp/qwen/)。

## 结构与数据流

| 版本               | 结构与能力重点                                                                | 公开范围                                                                                |
| ------------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Qwen2.5-Omni       | Thinker 理解，Talker 产生语音；时间对齐与分块输出                             | 3B、7B 开放权重，[详细结构](/omni/qwen-omni/)                                           |
| Qwen3-Omni         | Thinker／Talker 采用 MoE，改进多码本语音生成和流式输出                        | 30B-A3B Instruct、Thinking、Captioner 等开放型号；[结构、训练与例子](/omni/qwen3-omni/) |
| Qwen3.5-Omni       | 报告介绍混合注意力 MoE 与 ARIA，改善流式文字／语音对齐及长音视频理解          | 已公开技术报告；本次未确认官方可下载权重                                                |
| Qwen3.8-Omni-Flash | 原生多模态共同训练，面向长程 Agent；百万 token 上下文与配套插件／实时 harness | 已公开报告和服务资料；开源配套工具不能当作模型权重已开放                                |

### Qwen3-Omni 的三个检查点不要混用

| 检查点            | 包含什么                                 | 输出范围                              |
| ----------------- | ---------------------------------------- | ------------------------------------- |
| 30B-A3B-Instruct  | Thinker 与 Talker                        | 文字与语音                            |
| 30B-A3B-Thinking  | Thinker，强调推理                        | 文字；不包含 Talker，不能直接生成语音 |
| 30B-A3B-Captioner | 基于 Instruct 微调的音频描述专用 Thinker | 根据音频生成文字描述                  |

这三项来自官方模型清单。不能因为名字都带 Omni，就认为每个权重都能说话。

Thinker 可以理解成负责理解与组织内容，Talker 负责把内容变成语音。它们共享或传递哪些表示要按代际看，不能把 2.5 的一张图当作四代结构图。

3.5 的 ARIA 针对文字与语音 token 进度不一致造成的流式问题；3.8 还强调工具、记忆和子任务协作。实时体验取决于整套系统，不是只看模型开始发出第一段声音的时间。

## 数据与训练

需要文字、图像、音频、视频以及跨模态对齐数据。3.8 报告强调共同训练，让文本领域的任务能力迁移到音视频任务；它不意味着把文本模型提示词改成“你能听声音”就完成训练。

业务适配要保留同一事件的时间对应：画面、声音、文字和回答。若训练时错配时间，即使每条数据单独看都正确，也会教出错误关联。[训练全流程](/training/pipeline/)与[语音 tokenizer](/audio/encodec/)是相关前置知识。

## 评测怎么看

分别测感知、跨模态推理、语音清晰度和任务完成。记录首段文本、首段音频、完整回答延迟，以及打断、恢复和长时漂移。模型报告与产品演示不是本站实测，不能把报告成绩当成业务场景保证。

## 应用与错例

“听错但说得流畅”先查音频理解；内容正确却重复说话，查语音解码与分块对齐；工具调用后答非所问，查反馈和上下文。按环节归类后补数据或修系统，再用独立场景回归。[全模态助手案例](/cases/omni-assistant/)给出完整计划。

## 比较与面试追问

[Qwen3-ASR](/audio/qwen-asr/)专注识别，[Qwen3-TTS](/audio/qwen-tts/)专注语音生成；Omni 目标更广，但各任务是否适合仍需单独验证。

**Omni 就一定比 ASR＋LLM＋TTS 更好吗？** 端到端有联合建模优势，分模块方案更方便替换和定位问题，要按质量、延迟和维护成本选择。

**有开源 harness 就是开源模型吗？** 不是，工具代码、模型权重、训练代码和数据是不同公开层次。

## 参考资料

- [Qwen2.5-Omni 官方实现](https://github.com/QwenLM/Qwen2.5-Omni)
- [Qwen3-Omni 官方实现与模型清单](https://github.com/QwenLM/Qwen3-Omni)
- [Qwen3.5-Omni Technical Report](https://arxiv.org/abs/2604.15804)
- [Qwen3.8-Omni: Towards Native Omni-Modal Agents](https://arxiv.org/abs/2609.25611)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
