---
title: Qwen3-VL
atlas:
  id: qwen3-vl
  modality: omni
  year: 2025
  featured: false
  aliases:
    - DeepStack
    - Interleaved-MRoPE
  purpose: 理解多层视觉融合和视频时间
  summary: 聚焦 Qwen3-VL 的视觉融合、位置编码与视频时间表示。
  question: 只给语言模型一份最终视觉特征够不够？
  sources:
    - qwen3-vl-code
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

一段操作视频中，按钮出现、被点击、界面跳转是不同事件。Qwen3-VL 不只识别画面里的物体，还要组织空间、时间与操作关系。[系列历史](/omni/qwen-vl-family/)。

## 结构与数据流

官方概括三个关键设计：Interleaved-MRoPE 组织多模态位置；DeepStack 将多层视觉特征注入语言网络；视频使用文本形式的时间信息。大白话说，就是把“看见了什么、在哪里、在什么时候”更好地交给语言模型。

系列有 Dense 和 MoE，也有 Instruct 和 Thinking。视觉编码路径、语言专家结构和思考行为是三个维度，不能把 Thinking 当作另一种图像编码器。

## 数据与训练

图文、视频与文本共同建立基础能力，后训练再改善指令、推理和工具操作。训练 GUI 助手时，需要屏幕、动作、结果反馈等轨迹，而不仅是静态截图问答。公开权重不意味着完整训练集可下载。

## 评测怎么看

固定分辨率、视频帧率、长度和思考预算，测 OCR、定位、时间顺序、视觉推理与 GUI 任务完成。视频长并不等于每一帧都被处理；必须记录输入采样方法。比较 Thinking 和 Instruct 时同时记录成本。

## 应用与错例

模型点错按钮，先检查缩放后坐标与真实屏幕坐标是否一致；漏掉短暂弹窗，再查抽帧；看到了仍选择错误操作，再补动作决策样本。将感知错误与执行错误分开，能避免盲目重训整个模型。

## 比较与面试追问

[2.5-VL](/omni/qwen-vl/)是代际比较入口，[视觉问答案例](/cases/visual-qa/)给出数据到改进的方案。

**DeepStack 为什么可能有帮助？** 不同视觉层保留不同抽象程度的信息，模型可以利用更丰富的特征；收益仍需消融实验证明。

## 参考资料

- [Qwen3-VL 官方实现与发布记录](https://github.com/QwenLM/Qwen3-VL)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
