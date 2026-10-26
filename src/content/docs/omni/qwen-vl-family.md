---
title: Qwen-VL 系列
atlas:
  id: qwen-vl-family
  modality: omni
  year: 2023
  featured: true
  aliases:
    - Qwen-VL
    - Qwen2-VL
    - Qwen2.5-VL
    - Qwen3-VL
  purpose: 看懂视觉语言模型的代际变化
  summary: 从 Qwen-VL 到 Qwen3-VL，解释分辨率、视频时间信息和视觉特征接入的演进。
  question: 为什么图片缩放与视频采样也是模型能力的一部分？
  sources:
    - qwen1-vl-paper
    - qwen2-vl-paper
    - qwen3-vl-code
    - qwen-vl-paper
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

问照片“这是什么”与读发票上的小字，看似都是看图，难度却不同。视觉语言模型要把图像细节变成语言模型能使用的信息，还得知道答案对应哪一处证据。[返回系列](/nlp/qwen/)。

## 结构与数据流

共同路线是图像／视频经过视觉编码与连接模块，再与文字一起进入语言模型。不同代际改进输入分辨率、位置与特征融合，不能只把它们理解为“语言模型换了个底座”。

| 版本       | 重要变化                                                                  | 连续阅读入口                  |
| ---------- | ------------------------------------------------------------------------- | ----------------------------- |
| Qwen-VL    | 视觉编码器、视觉语言连接与语言模型；图像问答、文字识别和定位              | 第一代报告                    |
| Qwen2-VL   | 动态分辨率与多模态位置编码 M-RoPE，支持视频理解                           | Qwen2-VL 报告                 |
| Qwen2.5-VL | 视觉编码效率、动态帧率和绝对时间信息，增强文档与定位                      | [2.5-VL 详解](/omni/qwen-vl/) |
| Qwen3-VL   | Dense／MoE、Instruct／Thinking；Interleaved-MRoPE、DeepStack 与文本时间戳 | [3-VL 详解](/omni/qwen3-vl/)  |

DeepStack 可以先理解为把不同深度的视觉特征送入语言网络，而不是只交给它最后一份图片摘要。位置与时间信息让模型区分空间和先后关系；精确机制仍以该代实现为准。

3.5、3.6、3.8 的通用主线已有原生视觉，见[对应页面](/omni/qwen38/)。这不意味着有独立发布、同名的“3.8-VL”检查点。

## 数据与训练

需要图文配对、OCR、文档、定位、视频等训练材料，再做指令与推理后训练。不同报告公开的阶段不同，不能把一代冻结视觉编码器的做法照搬到所有后继版本。

做票据问答时，训练样本要有答案证据、坐标和无法辨认的情况。缩小图片会丢失文字；把漏字全当成语言推理问题，会补错训练数据。

## 评测怎么看

同时记录图像像素、视觉 token 预算、视频采样与思考模式。[多模态评测](/evaluation/multimodal-evaluation/)解释 DocVQA、MMMU 等任务的差异。文档读数、空间定位、跨帧顺序分别切片；平均分不能说明细小文字与长视频都可靠。

## 应用与错例

答案无依据时，先验证目标文字是否在实际送入模型的图像中。局部裁剪能答对、全图答错，可能是分辨率或注意范围问题；看得清仍混淆字段，再补关系样本。改进后回归原图、裁剪图与新文档，不只测修过的一张图。

## 比较与面试追问

[LLaVA](/omni/llava/)适合先理解视觉编码器如何接语言模型；Qwen-VL 系列进一步学习动态输入、视频与多尺度融合。

**视觉 token 越多越好吗？** 更细致但更贵，还需任务证据验证收益。

**Qwen-VL 能直接说话吗？** 视觉输入与语音输出是不同能力，需要看具体分支，语音交互见 [Omni](/omni/qwen-omni-family/)。

## 参考资料

- [Qwen-VL Technical Report](https://arxiv.org/abs/2308.12966)
- [Qwen2-VL Technical Report](https://arxiv.org/abs/2409.12191)
- [Qwen3-VL 官方实现与发布记录](https://github.com/QwenLM/Qwen3-VL)
- [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923v1)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
