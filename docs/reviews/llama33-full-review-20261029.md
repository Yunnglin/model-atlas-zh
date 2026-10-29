# Llama 3.3 专项审校（2026-10-29）

范围：[Llama 3.3 70B Instruct 正文](../../src/content/docs/nlp/llama33-model.md)，完整通读并核对官方资料；未运行模型、训练或复现评测。客服、代码测试及缓存计算均为说明性例子。

- **结构**：对照 [Meta 架构配置](https://github.com/meta-llama/llama-models/blob/main/models/sku_list.py)与[官方模型卡](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct)，核对 70B、80 层、8192 维、64 个查询头、8 个键值头、GQA、128K 和文本输入输出。8192 token、BF16、单序列 KV 缓存估算为 2.5 GiB；补充 16384 token 的线性估算，未计权重、工作区和具体实现的缓存分配。
- **训练**：模型卡列出预训练约 15T token、超过 25M 条合成微调样本，以及 SFT 和 RLHF；没有据此推断数据配比或蒸馏来源。补充模型卡说明安全微调混用人工和合成数据、使用语言模型分类器筛选提示与回答；客服抽查为说明性建议，不是 Meta 的具体配方。按模型卡列出八种支持语言和中文不在其中，并保留额外语言微调的官方说明。
- **评测**：逐项对照模型卡英文测试表，核对 Llama 3.1 70B、3.3 70B、3.1 405B 的 MMLU Pro、GPQA Diamond、HumanEval 和 MATH 数值、shot、CoT 及评分口径。补充 HumanEval 测试覆盖范围的例子；未把公开基准分数当作应用准确率。
- **配图**：检查[共用 70B 教学图](../../public/figures/llama-common/llama70b-backbone.svg)、来源及 [教学图许可](../../public/figures/LICENSE-TEACHING.txt)，80 层、自注意力、前馈及生成方向与配置和简化说明一致；图中说明两版本权重与后训练不同。Chromium 在本地页面加载该图并检查图片替代文本和截图，中文、箭头可读。
- **社区**：沿用 [2026-10-28 知乎实读记录](llama33-direct-community-20261028.md)：数据学习的 [Llama 3.3 介绍](https://www.zhihu.com/question/6350162647/answer/50977571484)，当时 2 赞同、3 收藏；其模型定位、窗口和支持语言对照官方模型卡，其对基座关系的推测不作为完整训练配方事实。互动量较低，只作背景补充，本次未重读或核对实时数字。
