# MiniMax 核心模型重点审校

核对日期：2026-10-27。本轮阅读 M2、M2.5、M2.7、M3 和 M3.1 Flash 的模型卡、结构、训练和部分评测说明，并检查对应五张教学 SVG 的标题、说明、节点文字和连接。以下是重点核验记录，不代表文章逐句或图片逐像素核验；未运行模型、训练或评测。

- **M2**：对照[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2)和[系列技术报告](https://arxiv.org/html/2605.26494)第 2 节，核对 62 层、229.9B 总参数／9.8B 激活、GQA 48／8 头、256 选 8、29.2T 与 192K。模型卡标记 modified-MIT，正文则给 MIT 链接，原文已提示以具体权重许可为准。69.4 使用模型卡指定 OpenHands 脚手架、128K 和 100 步；Terminal-Bench 46.3 使用不同框架与 8 次平均。图强调工具在模型外执行。
- **M2.5**：对照[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)和[系列技术报告](https://arxiv.org/html/2605.26494)，核对 230B／10B、训练环境数量、过程奖励与 CISPO，以及 SWE-bench／BrowseComp 的条件。模型卡明确早期已采用树形样本合并并报告约 40 倍训练加速；后续报告称最高 40 倍，已修正此前不能确定早期是否采用的含糊说法，不能将训练加速推广到推理。图为任务和工具的教学流程。
- **M2.7**：对照[官方发布](https://www.minimax.io/news/minimax-m27-en)、[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)及[配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/config.json)，核对工具脚手架自我改进、22 个 MLE Bench Lite 任务／3 次 24 小时运行、奖牌率与 SWE-Pro 评分。仓库许可标签为 other，文中未假定无条件商用；图中流程改动与权重更新分开。
- **M3**：对照[官方发布](https://www.minimax.io/blog/minimax-m3)、[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3)、[配置](https://huggingface.co/MiniMaxAI/MiniMax-M3/blob/main/config.json)与 [MSA 论文](https://arxiv.org/html/2606.13392)，核对 428B／23B、1M 上下文、长上下文效率及 KL／预热描述；新增 60 层、前 3 层稠密前馈和全注意力、后 57 层 MoE 与稀疏注意力的具体配置，并明确两种稀疏含义不同。已修改图示：用虚线框标明注意力及专家前馈位于语言模型中，后续层参与生成；并注明仅示意稀疏层且前三层为全注意力。
- **M3.1 Flash**：对照[官方发布](https://www.minimax.io/blog/minimax-m31f)、[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)和[配置](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash/blob/main/config.json)，核对全层 MSA、专家与注意力路径 QAT、DSpark 草稿头和评测说明。补充 60 层与前馈配置，区分全层稀疏注意力与稠密前馈；说明 Space Bunny 是早期版本，不能当作当前权重及服务完全等同。图把三项优化画在独立位置，未宣称它们串行执行。

M3 和 M3.1 Flash 的模型卡使用 MiniMax Community License；具体权重许可及商用条件应按版本重新核对。此前阅读的社区文章与动态互动量见 [知乎筛选记录](zhihu-reading.md)，本轮没有重新逐篇检索或复验知乎。模型官方指标不等同于独立复现结果。
