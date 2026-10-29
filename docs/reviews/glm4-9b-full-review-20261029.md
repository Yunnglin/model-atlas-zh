# GLM-4-9B 全维度审阅

审阅日期：2026-10-29。时间线 ID `glm4-version`，通读 `src/content/docs/nlp/glm4-9b-model.md`，对照官方技术报告、Base／Chat 模型卡、配置、图示与历史知乎实读记录；未运行模型或复现论文成绩。

## 结构与模型卡

- [Chat 配置](https://huggingface.co/zai-org/glm-4-9b-chat/blob/main/config.json)：40 层、4096 隐藏宽度、32 查询头、2 键值组、每键值头 128 维，配置长度 131072；[Base 配置](https://huggingface.co/zai-org/glm-4-9b/blob/main/config.json)长度 8192。模型卡标注自定义 GLM-4 许可；另有实验性 1M Chat 型号。
- BF16、8192 token 的 KV 缓存教学估算为 40×2×2×128×8192×2=335544320 字节，即 320 MiB；131072 token 在同样假设下为 16 倍。计算未包含权重、并发或工作区。文字生成及工具请求使用外部执行器，天气例子非实际执行记录。

## 训练

- [ChatGLM 技术报告第 1、2 节](https://arxiv.org/html/2406.12793)：GLM-4-9B 以约 10 万亿 token 的多语言数据、8192 上下文预训练，并使用与 GLM-4（0520）相同的后训练流程及数据。报告描述 SFT 与人类反馈，但正文没有臆造 9B 专用训练数据比例。
- 会议摘要示例用于解释监督学习；工具权限、校验和执行仍由应用负责。

## 评测与应用

- 报告表 1：基础 GLM-4-9B 的 MMLU 74.7、GSM8K 84.0；[Chat 模型卡](https://huggingface.co/zai-org/glm-4-9b-chat)的对话权重记录分别为 72.4、79.6，正文区分版本及协议，未将其差值解释为训练因果效果。
- 报告表 7：GLM-4-9B-Chat 在 Berkeley Function Calling Leaderboard 上总体 81.00、AST 80.26、执行 84.40、相关性 87.92；本次补充这一对照，解释结构正确与执行检查的区别，未将分数视为实际天气服务成功率。
- 320 MiB 缓存和会议日期错例是教学估算及示例，涉及服务评测与数据切分的段落是实施建议，并无实跑。

## 配图

- `src/content/data/figures.yaml` 登记 `glm4-9b/overview.svg` 为原创 CC BY 4.0 教学图，引用 Chat 配置，图示模型产生工具请求，应用执行并返回结果；不冒称官方结构图。
- Chromium 打开本机 `/nlp/glm4-9b-model/`，图片解码为 1080×300，替代文本存在；截图检查顺序与外部工具说明。

## 社区

- [混沌随想：Qwen2-7B 与 GLM-4-9B 本地部署和速测](https://zhuanlan.zhihu.com/p/702475296)，2026-10-28 已登录实读时 75 赞同、171 收藏，见 [GLM 社区复核](glm130-glm4-zhihu-20261028.md)。文章使用 Chat 权重及 RTX 4090，少量翻译与代码案例可启发测试设计，但不能与 Base 分数混用或推成通用排名。未复制其图文。

- **评测数字补充复核（2026-10-29）**：[ChatGLM 技术报告 v2 表 1、7](https://arxiv.org/html/2406.12793v2)给 GLM-4-9B 的 MMLU 74.7、GSM8K 84.0，以及 GLM-4-9B-Chat 在当时 BFCL 的 overall 81.00、AST 80.26、execution 84.40、relevance 87.92；[官方 Chat 模型卡](https://huggingface.co/zai-org/glm-4-9b-chat)列 MMLU 72.4、GSM8K 79.6。正文按 Base／Chat 和各自出处区分，与原表相符；这两处公开表格未给足所有提示和采样细节，不能视作严格同协议对照。
