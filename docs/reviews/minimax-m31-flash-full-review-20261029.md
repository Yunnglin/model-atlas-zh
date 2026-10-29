# MiniMax-M3.1-Flash 全文审校

审校日期：2026-10-29。通读 [正文](../../src/content/docs/omni/minimax-m31-flash-model.md)，范围为公开 M3.1 Flash 权重；未运行模型、训练或复现评测。

- **结构与模型卡**：对照 [官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)、[公开配置](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash/blob/main/config.json)和 [发布文章](https://www.minimax.io/blog/minimax-m31f)，核对 428B 总参数、23B 激活、图文视频输入、1M 上限、60 层、64 个查询头和 4 个 KV 头。配置前 3 层为稠密前馈、全层稀疏注意力，二者属于不同模块；公开页面自动统计的 220B 与模型卡文字口径不同，不猜原因。配置列块大小 128、top-k 为 16；正文补充查手册的例子并说明边界与因果掩码影响实际读取量。Space Bunny 是早期服务版本，不与当前权重等同。
- **训练**：模型卡确认路由专家和注意力路径采用量化感知训练；完整训练数据和后训练配方没有公布，不把 M3 论文配置强加于此版本。区分 QAT 与具体部署量化格式，DSpark 草稿头是否使用取决于服务实现。
- **评测**：模型卡所列 DeepSWE v1.1 73.7 使用 mini-SWE-agent 2.4.5 和 512K 上下文；OSWorld 2.0 的 61.7 使用 0808 Full；BankerToolBench 76.2 使用 OpenCode 1.17.18 与 MiniMax-M2.7 判分。不同基准的分数、外部工具和评委不能简单合并。正文新增官方推荐 temperature 1.0、top-p 0.95 与推理强度设置，并提醒在同一任务和预算下比较。
- **配图**：核对 [图登记](../../src/content/data/figures.yaml)及[原创 SVG](../../public/figures/minimax-m31-flash/overview.svg)，图中稀疏读取、量化和草稿验证是不同优化，工具在模型外；2026-10-29 在本机页面以 Chromium 加载并截图目视检查，文字和箭头完整。图为教学示意，不是官方原图。
- **社区**：2026-10-29 由主审通过已登录 Chrome 实读恋猫的[权重解读](https://www.zhihu.com/question/2096922075239862384/answer/2096925872846529447)，当时 23 赞同、10 收藏。文章解释全层 MSA、128 token 分块与 top-16 配置、专家和稠密层量化及草稿模型；对照配置和模型卡使用可验证的部分。问题标题的参数单位与回答不同，以官方 428B／23B 为准；作者对后续产品的猜测不作为事实。赞藏数为阅读时快照。

本轮未实测延迟、稀疏选择召回率、量化质量或服务吞吐。
