---
title: 多模态助手：沿证据流定位错误
atlas:
  id: omni-assistant
  kind: case
  modality: omni
  purpose: 把视频、声音、回答与语音输出连起来
  question: 视频问答错了，怎样知道是哪一路出了问题？
  summary: 把视频、声音、回答与语音输出连起来，按六个阶段记录复现条件与改进依据。
  sources:
    - omni-code
    - qwen-vl-paper
    - gemini-paper
  caseStages:
    - stage: 数据
      description: 保留同步音视频、问题、答案和证据时间。
      artifact: av-manifest.json
      nodes:
        - qwen-omni
        - data-quality
    - stage: 训练
      description: 先分模态基线，必要时再适配跨模态指令数据。
      artifact: modality-baselines.json
      nodes:
        - sft
    - stage: 评测
      description: 分别测感知、整合、回答和语音输出。
      artifact: omni-results.jsonl
      nodes:
        - multimodal-evaluation
        - speech-quality
    - stage: 应用
      description: 记录抽帧、音频窗口、模型配置和时间线。
      artifact: request-timeline.jsonl
      nodes:
        - qwen-omni
    - stage: 错例分析
      description: 区分缺证据、模态冲突、推理和输出错误。
      artifact: omni-errors.csv
      nodes:
        - failure-analysis
    - stage: 数据改进
      description: 补充开发池跨模态样例并在独立视频上回归。
      artifact: heldout-videos.json
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

用户播放带声音的视频，问“刚才那个人把哪个杯子拿走了”，助手把另一只杯子说成答案。这里提供未执行的复现实验设计，参考 [Qwen2.5-Omni](/omni/qwen-omni/)官方入口与[多模态评测](/evaluation/multimodal-evaluation/)。

## 数据

保留原视频、音轨、帧时间、问题、答案和支持答案的证据时段。准备只靠画面、只靠声音、两路必须结合以及两路冲突的问题。按视频或事件来源划分，避免相邻切片泄漏。

## 训练

先建立完整输入、仅视觉、仅音频等基线，确定跨模态信息是否有帮助。若要做指令适配，保证样本的时间对应和答案依据准确，保留未适配权重与固定输入预算。

## 评测

分别看声音内容、视觉对象、时序推理、答案正确与语音输出一致性。固定抽帧和音频范围，记录首个文字、首段声音及完整回答时间。

## 应用

保存实际发送的帧与音频窗口，维护从原视频时间到请求时间的映射。用户界面播放了完整视频，不代表模型收到全部内容。工具入口和请求配置应固定到可复查版本。

## 错例分析

关键帧没进请求，是输入组织问题；对象看到了但拿走顺序答错，是时序或推理问题；文字对而语音错，要回到发声环节。用同一证据做对照，不靠一个总分归因。

## 数据改进

开发池补充交叉指代、相似对象、噪声、时间冲突与缺证据样例。独立视频继续检验感知与推理，避免只记住场景背景。回归同时检查普通对话与响应延迟。

## 参考资料

- [Qwen2.5-Omni 官方实现](https://github.com/QwenLM/Qwen2.5-Omni)
- [Qwen2.5-VL Technical Report](https://arxiv.org/abs/2502.13923v1)
- [Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context](https://arxiv.org/abs/2403.05530v5)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表已经实际运行并得到结果。
