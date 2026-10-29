# MiniMax M2.1、M2.7、M3.1 Flash 定向复核（2026-10-28）

## 范围与参与情况

核对三篇的模型卡、训练披露、输入输出、代表评测和原创图。本人上一轮审校了 M2、M2.5、M3；仓库已有本轮三个版本的其他审校资料，但无法确认本人是否参与其初稿或先前专项审校，故不称本轮为全新独立审阅。

## 逐篇核对和修改

- **M2.1：**[官方配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.1/raw/main/config.json)给出 62 层、256 专家选 8、48 Q / 8 KV 和 196608 最大位置数；[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.1)为文本生成，标记 modified-MIT；SWE-bench Verified 74.0、Droid 71.3、mini-swe-agent 67.0、VIBE 88.6 与正文一致。卡说明 SWE 默认 Claude Code、覆盖提示、4 次平均；[后训练分享](https://www.minimax.io/news/post-training-experience-and-insights-for-agent-models)支持基于 M2 后训练、轨迹、Forge 及 CISPO 的表述。图将沙盒、评测放在模型外，脚注明确训练与推理不同。
- **M2.7：**[配置](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/raw/main/config.json)给出 62 层、256 选 8、48 Q / 8 KV、204800 位置配置和 FP8 设置；模型卡标记 `other`，实际 [LICENSE](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/raw/main/LICENSE)为非商业许可，商业使用须事先取得书面授权并有标识条件，现已在正文直接说明，具体条款以文件为准。[官方发布](https://www.minimax.io/news/minimax-m27-en)称内部版本经 100 多轮脚手架迭代并提升 30%，未完整说明基线；MLE Bench Lite 为 22 项、三次各 24 小时、平均获奖率 66.6。教学图中“独立评测”易误解为官方保证独立留出，已改“运行评测”，另把独立留出测试标为教学建议。
- **M3.1 Flash：**[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)列 428B 总、23B 激活、文本图像视频输入／文本输出、1M 上限、全层稀疏、量化感知训练及 DSpark，许可标记 MiniMax Community；正文保留了模型卡与页面自动统计不一致。原 [MSA 论文](https://arxiv.org/html/2606.13392v1)是注意力方法报告，并非 M3.1 的完整训练报告；本轮网页工具未能直接读取 M3.1 的配置文件，不将该配置数字当成本轮重新核实。模型卡报告 DeepSWE 73.7、OSWorld 61.7、BankerToolBench 76.2；已补后两者所列的任务版本、模型选择口径与评判模型。图中三项优化为简化示意，不代表所有路径均已量化或所有推理均启用 DSpark。

## 验证与限制

三张教学 SVG 做 XML 解析，改动做空白检查；没有训练、运行模型或复现评测。引用的是核对时公开材料，许可证应按具体版本全文核对，不将模型公开权重等同于无限制使用。
