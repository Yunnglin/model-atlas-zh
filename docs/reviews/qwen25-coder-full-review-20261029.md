# Qwen2.5-Coder 全维度审阅

审阅日期：2026-10-29。时间线 ID `qwen25-coder`，文章为 `src/content/docs/nlp/qwen25-coder-model.md`。完整通读并核对技术报告 v3、官方模型卡、页面配图和此前知乎实读记录；未运行模型或复现评测。

## 结构与模型卡

- [技术报告表 1](https://arxiv.org/html/2409.12186v3)列出 0.5B、1.5B、3B、7B、14B、32B 六种稠密解码模型；7B 为 28 层、28 个查询头、4 个 KV 头，32B 为 64 层、40 个查询头、8 个 KV 头。两者模型卡的实际参数为 7.61B、32.5B，本次补充模型卡参数。
- [7B Instruct 模型卡](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct)标注 Apache 2.0、默认配置 32768 token，较长上下文需 YaRN；[32B Instruct 模型卡](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct)同样标注 Apache 2.0。模型尺寸、部署配置与权重许可分别表述。
- 报告表 2 列出 `<|fim_prefix|>`、`<|fim_suffix|>`、`<|fim_middle|>` 等特殊标记；本文补全了实际标记拼写。前缀和后缀均置于预测位置前，仍为因果生成；代码案例与工具执行区分。

## 训练

- 报告第 3 节：文件级训练 5.2T token，最大长度 8192，使用 next token 和 FIM；仓库级训练约 300B token，扩至 32768，并以 YaRN 外推到 131072。合计叙述遵循报告超过 5.5T 的口径，不推断去重后的独立样本量。
- 报告第 3.1.2 节选取代码／文本／数学 70／20／10 的 7B 混合实验；第 4 节为粗到细指令微调、混合 FIM 样本、基于多语言执行与模型裁判的离线 DPO，不把自动反馈称为人工核准。

## 评测与应用

- 报告表 5 的 Base 7B HumanEval／HumanEval+ 为 61.6／53.0，CodeQwen1.5-7B 为 51.8／45.7；均为函数生成对照，不等于仓库修复成绩。
- 表 7 的 HumanEval-FIM 单行首行精确匹配中，7B Base 的 Python／Java／JavaScript 为 79.7／88.5／87.6，加权平均为 86.2；本次补充结果和加权口径。代码任务按检索范围、候选数量、执行环境及测试覆盖分别评估；函数、货币精度和运行失败均为教学情境。

## 配图

- `src/content/data/figures.yaml` 登记 `qwen25-coder-teaching`，标注报告 v3、非官方的原创 CC BY 4.0 教学图及替代文字。图将前后缀整理、因果解码、外部执行器分开，不声称模型自动运行工具。
- Chromium 打开本机 `/nlp/qwen25-coder-model/`，图像解码为 1060×250，替代文字存在；截图检查箭头、文字及显示。

## 社区

- [Xode：Qwen2.5-Coder 技术报告详细解读](https://zhuanlan.zhihu.com/p/721189499)于 2026-10-27 已登录实读时 50 赞同、53 收藏，见 [代码模型社区记录](qwen-code-community.md)。文章帮助组织数据、FIM 和训练阶段；作者标注的 Agent 推测及尚无报告支持的 FIM 损失口径未作为事实。文章发表于 32B 发布前，32B 信息以报告 v3 和模型卡为准；未复制社区图文。

### 2026-10-29 评测数字逐项复核

- 对照 [Qwen2.5-Coder Technical Report v3 表 5](https://arxiv.org/html/2409.12186v3#S6.T5)：7B Base 的 HumanEval／HumanEval+ 为 61.6／53.0，CodeQwen1.5-7B 为 51.8／45.7，与正文一致。
- 对照[表 7 和第 6.2 节](https://arxiv.org/html/2409.12186v3#S6.T7)：7B Base 的 Python／Java／JavaScript 首行精确匹配为 79.7／88.5／87.6，按各语言样本数加权平均为 86.2；与正文和评测协议一致。
- 未重新运行模型；该复核不涵盖未引用的其他模型或榜单。
