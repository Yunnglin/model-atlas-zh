# GLM 模型评测数字补充核查（第八批）

日期：2026-10-29。按补充数字索引核查尚未列出的 ChatGLM 初代和 GLM-Image；这一批核对所列数字及其条件，不代表逐项检查全文，也没有运行模型或复现评测。

- **ChatGLM-6B**：[ChatGLM 技术报告表 1](https://arxiv.org/html/2406.12793)的初代 ChatGLM-6B 行为 MMLU 25.2、C-Eval 23.7；ChatGLM2-6B 分别为 45.2、51.7，和正文一致。20 条中 15 条得到 75% 是教学算术，不是实验成绩。另对照[初代官方仓库量化部署说明](https://github.com/zai-org/ChatGLM-6B)，INT4 约 6GB 的数字属于 2 至 3 轮对话后的示例，正文已补充这一具体条件；不把它算作基准评测或所有输入长度的显存保证。
- **GLM-Image**：[官方模型卡的 CVTG-2K 及 DPG-Bench 表](https://huggingface.co/zai-org/GLM-Image)分别列 GLM-Image / Qwen-Image 的 Word Accuracy 0.9116 / 0.8288，以及 DPG-Bench 84.78 / 88.32；均为发布方报告，不是本次实测。模型卡中的文生图示例是高 1024、宽 1152、50 步、guidance scale 1.5 和种子 42；模型卡另说明自回归默认温度 0.9、top-p 0.75，与正文一致。模型卡未在对应表格中明确各模型评测时的全部采样细节；不能把使用示例当作表格分数的完整协议。

现有时间线的其余 GLM 和 DeepSeek 条目均已在补充数字索引中出现；此索引是定向核查清单，已有条目并不自动表示其正文所有数字均已独立核实。
