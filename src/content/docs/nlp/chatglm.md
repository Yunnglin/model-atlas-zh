---
title: GLM 与 ChatGLM 早期路线
atlas:
  id: chatglm
  modality: nlp
  year: 2021
  featured: false
  aliases:
    - 自回归填空
    - 二维位置编码
    - ChatGLM2
    - ChatGLM3
  purpose: 理解填空目标与对话后训练
  summary: 从 GLM 的自回归填空到 ChatGLM 三代与 GLM-4-9B，区分目标、结构和产品。
  question: 为什么填空也能通过自回归生成完成？
  sources:
    - glm-paper
    - chatglm-paper
    - chatglm-code
    - glm4-card
  kind: model
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 要解决什么问题

句子“我在［空白］买了咖啡”，右边的“买了咖啡”也能帮助判断空白。早期 GLM 希望利用两侧上下文，同时学会生成一段内容。[返回系列](/nlp/glm/)。

## 结构与数据流

原始 GLM 把部分连续片段遮住，再自回归生成这些片段。未遮住的部分提供上下文，生成片段内部仍按顺序预测。二维位置信息帮助区分原文位置与片段内部进度；这不是说给文字加上图像的二维坐标。

GLM-130B 是后来的大规模双语模型。ChatGLM-6B 在家族基础上面向对话；ChatGLM2 引入更高效注意力等改进并加强长文本；ChatGLM3 扩展工具与代码执行格式；GLM-4-9B 是新的开放代际。每次演进都要看对应实现，不能沿用一张早期注意力图解释所有型号。

## 数据与训练

填空预训练学基础表示与生成；对话、指令和偏好训练再学习怎样响应用户。工具调用还需要结构化的调用和结果。能在演示中调用工具，不意味着模型自身执行了浏览器或解释器，执行发生在外部系统。

例如训练天气查询，数据要包含城市、时间、函数参数、查询结果和回答；只训练“今天天气很好”教不到查哪个地方。

## 评测怎么看

先区分理解、生成和对话任务，再固定聊天模板与上下文配置。GLM-4 的开放 9B 与同名 API 系列不是一个可以随意互换的标识；1M 窗口型号也应单独测试定位和跨段推理。

## 应用与错例

工具参数解析失败先查模板；查询成功但答错日期，检查返回结果和时间信息；长文本答错则查材料是否进入输入。对照相同任务的短输入与长输入，能帮助定位失败来源。

## 比较与面试追问

**与 [BERT](/nlp/bert/)有什么不同？** 原始 GLM 自回归生成被遮片段，而 BERT 采用掩码语言建模。

**与 [T5](/nlp/t5/)有什么不同？** 两者都研究去噪生成，但架构和掩码组织不同，不能只看“填空”二字。现代 MoE 路线见 [GLM 后续代际](/nlp/glm-modern/)。

## 参考资料

- [GLM: Autoregressive Blank Infilling](https://arxiv.org/abs/2103.10360)
- [ChatGLM: From GLM-130B to GLM-4 All Tools](https://arxiv.org/abs/2406.12793)
- [ChatGLM3 官方实现与历史模型入口](https://github.com/THUDM/ChatGLM3)
- [GLM-4-9B-Chat 官方模型卡](https://huggingface.co/THUDM/glm-4-9b-chat)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
