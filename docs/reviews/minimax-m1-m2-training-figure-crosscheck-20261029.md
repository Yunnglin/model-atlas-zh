# MiniMax-M1、M2 训练和配图补充核对（2026-10-29）

核对范围是 M1 初版及 M2 初版的模型卡、结构、训练与所列评测，未运行模型或复现官方结果。本轮未重新读取知乎文章，沿用两篇原有社区审校记录。

- **M1**：对照[技术报告第 2 节](https://arxiv.org/html/2506.13585v1)和 [80K 权重配置](https://huggingface.co/MiniMaxAI/MiniMax-M1-80k/blob/main/config.json)，核对 456B／45.9B、80 层、7 个 Lightning 层与 1 个 Softmax 层交替、32 专家选 2 个，以及 7.5T 继续预训练。正文补充分为固定学习率 2.5T、衰减 5T 的阶段与 70% 数据混合比例，说明 token 数不等于样本数。对照论文表 2 和第 6 节确认 40K／80K 的 AIME、SWE-bench 与 MRCR 数据及 32 次采样口径。
- **M2**：对照 [M2 系列报告第 2、3 节](https://arxiv.org/html/2605.26494v1)和[初版配置](https://huggingface.co/MiniMaxAI/MiniMax-M2/blob/main/config.json)核对 229.9B／9.8B、62 层、GQA 48／8 头、256 专家选 8 及 19.9T＋9.3T。补充报告中单 MTP 模块扩展为三个、复制初始化、短暂冻结主模型后联合训练的顺序。对照[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2)确认 SWE-bench 69.4、Terminal-Bench 46.3 的脚手架与采样设置；模型卡元数据中的 Terminal-Bench 2.0 为另一项记录。
- **配图**：检查 `public/figures/minimax-m1/overview.svg` 的 7:1 层组和专家数，及 `public/figures/minimax-m2/backbone.svg` 的 62 层、GQA 与路由数，均与配置对应；`public/figures/minimax-m2/overview.svg` 将执行器放在模型外。检查 SVG 内容与注册说明，本轮未重新截图。

验证：修改正文的 Prettier 和内容测试（7 项）通过，`git diff --check` 通过。没有声称全部原文逐句复核。
