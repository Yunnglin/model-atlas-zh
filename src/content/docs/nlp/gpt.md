---
title: GPT-2
atlas:
  id: gpt
  kind: model
  modality: nlp
  aliases:
    - GPT
    - GPT 系列
    - GPT-2
    - GPT-3
    - GPT-4
  purpose: 逐步生成文字
  summary: 用已经出现的 token 预测下一个 token，并重复这个过程生成文本。
  question: 为什么它生成文字时不能看未来？
  facets:
    - overview
    - architecture
    - training
    - evaluation
    - application
  sources:
    - gpt-code
    - gpt3-paper
    - gpt4-paper
    - instruct-paper
  year: 2019
  featured: true
---

## 要解决什么问题

输入“请用两句话总结这段会议记录”，模型如何接着写出回答？GPT 这条路线先练习续写，再通过后训练学习按要求回答。本页用公开的 GPT-2 讲结构，用 GPT-3、GPT-4 说明研究重点的变化，不把家族所有版本都当成同一个模型。

## 结构与数据流

文本经过[分词](/foundations/tokenization/)，每个位置只能参考此前内容。多层因果 Transformer 把上下文变成下一 token 的概率分布，解码策略再选出片段，接回输入继续生成。

GPT-2 没有原始翻译 Transformer 那个独立编码器及编码器交叉注意力。生成时的 [KV Cache](/foundations/kv-cache/)减少重复计算，但缓存越长，显存占用通常也越大。

## 数据与训练

预训练用[下一 token 预测](/foundations/next-token/)学习语言规律。后来的指令助手可在预训练后加入 [SFT](/training/sft/)，用问题与示范答案训练，[RLHF](/training/rlhf/)等方法进一步调整回答偏好。完整方法之间的关系见[训练全流程](/training/pipeline/)。

GPT-3 论文重点研究在提示里放示例的少样本学习。这种上下文学习不等于每次提问都更新模型参数。GPT-4 的公开报告没有披露完整架构规模和训练配方，不能据传闻填出专家数量或总参数。

## 评测怎么看

困惑度衡量续写预测，不能代替回答质量。做知识题要固定提示与答案提取；做代码题要检查能否通过测试；做业务问答要看证据、事实性和格式。可从[语言模型评测](/evaluation/llm-benchmarks/)开始，不跨不同协议直接抄排行榜分数。

## 应用与错例

助手编造公司制度时，先判断知识是否在输入里。需要新资料可用 [RAG](/applications/rag/)检索证据；格式总不对可补示范；问题本身有歧义则需要澄清。检索没找到、找到后读错和回答时忽略证据，应该分开统计。

## 比较与面试追问

[BERT](/nlp/bert/)侧重双向理解，[T5](/nlp/t5/)让输入编码和输出生成分工，GPT 的因果续写把许多任务写进同一条序列。后来更强的助手还依赖数据、后训练和工具系统，不能只归功于参数变大。

**SFT 换了预测目标吗？** 常见生成式 SFT 仍做下一 token 预测，示范材料、对话格式和计分位置发生变化。

**温度调低能消除幻觉吗？** 它主要改变采样分布，无法凭空补上缺失的证据。

闭源路线只作简要对照：[Claude](/nlp/claude/)了解公开对齐研究，[GPT-4o](/omni/gpt4o/)了解端到端多模态，[Gemini 1.5](/omni/gemini/)了解长上下文。它们未公开的结构与训练细节不补写。

## 参考资料

- [OpenAI GPT-2 官方实现](https://github.com/openai/gpt-2)
- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)
- [GPT-4 Technical Report](https://arxiv.org/abs/2303.08774)
- [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
