# Kimi-Audio、GLM-ASR、GLM-TTS 审校（2026-10-28）

## 范围和参与情况

检查三篇模型页的音频输入、编码与输出、训练目标、权重许可、文中评测和原创教学图。本人此前审校过 Kimi/Moonshot 相关内容，不能将此次 Kimi-Audio 核对宣称为全新独立审校；GLM 两篇有其他审校记录，本次不推定初稿作者。所检图是简化示意，不是对所有内部连接的完整描述。

## 检查与修改

- **Kimi-Audio：**[技术报告 v1](https://arxiv.org/html/2504.18425v1)第 2–4 节描述 12.5 Hz 离散语义 token 与下采样到同一频率的 Whisper 连续特征、双输出头以及流匹配／声码器；4 个 token 的前瞻是示例，不能直接推导端到端延迟。报告表 4 的 LibriSpeech clean/other WER 为 1.28/2.42，表 5 的 MMAU music/sound/speech 为 61.68/73.27/60.66，正文正确保留基准范围和与其他报告不可直接混用的限制。[Instruct 模型卡](https://huggingface.co/moonshotai/Kimi-Audio-7B-Instruct)标记 MIT。配图省略文本输入和分块细节，已有标注。
- **GLM-ASR-Nano：**[官方仓库](https://github.com/zai-org/GLM-ASR)称 1.5B、平均错误率 4.10，描述 17 种语言 WER ≤ 20% 的条件；正文注明这一结论有官方统计口径，不对每段录音作保证。[Transformers 实现](https://github.com/huggingface/transformers/blob/main/src/transformers/models/glmasr/modeling_glmasr.py)说明 Whisper 编码器、投影器、Llama 模型；[模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)标记 MIT。图把文本提示独立接入语言解码器，未将提示误画为声音。模型训练配方未见完整公开，正文保留不确定性。
- **GLM-TTS：**[技术报告 v1](https://arxiv.org/html/2512.14291v1)描述 Whisper-VQ tokenizer、流匹配与声码器、多奖励 GRPO；表 3 中文 Seed-TTS-eval 基础模型 CER 1.03/SIM 76.1、RL 版本 0.89/76.4，表 7 内部难例 PER 13.23→5.14，正文数值及场景范围一致。[模型卡](https://huggingface.co/zai-org/GLM-TTS)标记 MIT。报告 §2.5 中约 15% 是核心骨干参数、约 100 个 epoch；已补正文口径，避免误认为是完整系统参数的比例。教学图保留文字和声音条件至输出的简化流程，省略完整条件与分块细节。

## 验证和限制

已 XML 解析三个 SVG，并检查改动空白；未实跑模型、复现训练或评测，也未验证全部许可的法律适用条件。论文及仓库报道的结果不代表本地测试结果；第三方来源和许可可能变化。
