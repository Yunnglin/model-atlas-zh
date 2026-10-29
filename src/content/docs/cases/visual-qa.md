---
title: 看图问答：是没看清，还是没推对
atlas:
  id: visual-qa
  kind: case
  modality: cv
  purpose: 把图片处理、视觉证据和回答分开验证
  question: 模型漏读发票金额，应该从哪里排查？
  summary: 把图片处理、视觉证据和回答分开验证，按六个阶段记录复现条件与改进依据。
  sources:
    - qwen-vl-paper
    - docvqa-paper
    - llava-paper
  caseStages:
    - stage: 数据
      description: 保留原图、字段答案与证据位置，并按模板划分。
      artifact: image-manifest.json
      nodes:
        - qwen-vl
        - data-quality
    - stage: 训练
      description: 先比较输入配置，必要时再用图文指令样例适配。
      artifact: training-config.json
      nodes:
        - sft
        - llava
    - stage: 评测
      description: 分开评价字段、定位、格式与视觉幻觉。
      artifact: field-results.jsonl
      nodes:
        - vision-metrics
        - multimodal-evaluation
    - stage: 应用
      description: 保存实际缩放裁剪后的图片和请求。
      artifact: request-images.jsonl
      nodes:
        - qwen-vl
    - stage: 错例分析
      description: 区分字看不清、对象混淆、关系错误与解析错误。
      artifact: visual-errors.csv
      nodes:
        - failure-analysis
    - stage: 数据改进
      description: 补充开发难例并在新模板图像上回归。
      artifact: heldout-templates.json
      nodes:
        - data-quality
  aliases: []
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
---

## 场景与范围

发票上写着总额，助手却回答了另一个字段。这个案例是未执行的复现实验设计，示例产物用于说明怎样保留证据。可使用 [Qwen2.5-VL](/omni/qwen-vl/)官方入口；[LLaVA](/omni/llava/)可作不同模型路线的对照。

## 数据

保存原图、人工字段、文字位置与文档模板。覆盖小字、旋转、低清晰度、同页多个金额与无目标字段。按模板和来源划分，别让同一发票扫描件进入两个集合。

## 训练

先固定模型，比较输入分辨率、裁剪和提示的基线。只有确定需要模型适配时，才用准确标注的图文指令做实验；保留未适配模型与原配置，避免把更高输入预算的收益误写成训练收益。

## 评测

同时检查字段值、单位、JSON 结构和证据位置。对没有字段的问题统计错误猜测；用换数字、换布局但语义相近的图片，检查模型是否确实依赖图像。

## 应用

保存送入模型后的实际图片和视觉 token 预算，记录原图到裁剪图的坐标变换。只保存用户原图，无法复现缩放后看不清字的问题。

## 错例分析

先人工查看模型实际收到的图片。看得清却读错，和输入阶段就丢了字，是不同问题。再检查字段关系、输出解析和评分脚本，避免把格式失败全算成视觉能力不足。

## 数据改进

从开发池补充易混字段、小字和相似模板，独立测试使用未见文档。汇报不同分辨率的正确率、成本和延迟，检查新增难例是否损伤普通图片回答。

## 参考资料

- [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923v1)
- [DocVQA: A Dataset for VQA on Document Images](https://arxiv.org/abs/2007.00398)
- [Visual Instruction Tuning](https://arxiv.org/abs/2304.08485)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表已经实际运行并得到结果。
