---
title: 多模态评测：感知、推理与交互
atlas:
  id: multimodal-evaluation
  kind: metric
  modality: omni
  purpose: 确认模型用了哪些证据
  summary: 按 OCR、定位、视频时序、声音与跨模态一致性拆分评测。
  question: 模型是真的看懂了，还是靠文字常识猜中？
  sources:
    - mmmu-paper
    - docvqa-paper
    - qwen-vl-paper
    - gemini-paper
    - judge-paper
  aliases:
    - MMMU
    - DocVQA
    - OCR
    - 多模态幻觉
    - 视频评测
  facets:
    - evaluation
    - application
---

## 用大白话理解

答错一张图的问题，可能是字没读清、物体认错、关系推错，也可能是输出格式不对。把这些错误揉成一个总分，很难知道该改模型还是输入处理。

## 按问题选择任务

DocVQA 关注文档图像问答，MMMU 提供多学科多模态理解和推理问题。视频还要看事件顺序、时间定位与跨帧证据；语音交互还需检查听懂、回答与发声。不同题集测到的是不同部分。

## 确认模型看到什么

保留实际图像尺寸、裁剪、抽帧时间、音频范围和输入模板。网页上播放了整段视频，并不代表请求把每一帧都传给模型。看不到的证据与看到了但不会用，应分开归因。

例如把图里的红杯换成蓝杯、其余内容不变，观察回答是否跟着改变。去掉图片后仍然答对，也可能说明题目能靠语言线索解决，并不能单独证明视觉理解。

## 评分与回归

固定答案提取、结构校验、坐标约定及模型裁判标准。对视觉幻觉、长尾对象、小字、否定、模态冲突分别留出测试；模型裁判需要人工抽样复核。

[Qwen2.5-VL](/omni/qwen-vl/)与[多模态助手案例](/cases/omni-assistant/)展示不同环节怎样连接。

## 面试追问

**长视频大海捞针就是长程推理吗？** 不是同一问题，检索单个事件与整合多段因果关系需分别测试。

**多模态模型还需要文本评测吗？** 需要，语言生成与指令遵循依然会影响最终结果。

## 参考资料

- [MMMU: A Massive Multi-discipline Multimodal Understanding and Reasoning Benchmark](https://arxiv.org/abs/2311.16502)
- [DocVQA: A Dataset for VQA on Document Images](https://arxiv.org/abs/2007.00398)
- [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923v1)
- [Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context](https://arxiv.org/abs/2403.05530v5)
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
