# Qwen3-Omni-Captioner 第三方评测补充（2026-10-29）

对照 [Eureka-Audio 报告 v1 第 6.3 节、表 5 和附录 8.4](https://arxiv.org/html/2602.13954v1#S6.SS3)：研究先由音频模型生成描述，再将描述与下游题目交给 GPT-OSS-120B；Qwen3-Omni-Captioner 这条流程在 MMAU 与 MMAR 分别为 56.68 和 46.40，Qwen3-Omni-Instruct 为 48.24 和 36.90。论文将此作为间接衡量描述的问答流程，数值不能称为 Captioner 单独的事件识别准确率或幻觉率；未独立运行模型或复现。附录列有评测提示模板，具体生成参数及题集切分以研究所提供材料为准。

另检查 [OmniCapBench v1](https://arxiv.org/html/2610.12458v1)表 2 与附录表 A.7：其列 Captioner 的视频帧与结构化输出设置，和 [Qwen 官方 Captioner 模型卡](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Captioner)对单段音频、无文字提示的使用说明存在表面差异；本次无法独立确认实验具体接口，因此未把其分数直接加入正文，不能据此断言接口支持视觉输入。
