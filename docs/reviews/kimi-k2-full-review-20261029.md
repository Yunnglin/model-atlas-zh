# Kimi K2 全维度审阅

审阅日期：2026-10-29。时间线与正文 ID `kimi-k2`，通读 `src/content/docs/nlp/kimi-k2.md`，对照技术报告、模型卡、配置、配图和已有知乎实读记录；未运行权重或复现论文评测。

## 结构与模型卡

- [K2 技术报告表 2](https://arxiv.org/html/2507.20534)列出 1.04T 总参数、32.6B 激活、61 层、384 路由专家选 8、1 共享专家、64 头及 1 稠密层；原始 Instruct 的配置为 131072 最大位置，Thinking 配置为 262144。正文分别说明 MoE、MLA 和外部工具的职责，不把激活参数当完整存储量。
- [Base 模型卡](https://huggingface.co/moonshotai/Kimi-K2-Base)与 [Instruct 模型卡](https://huggingface.co/moonshotai/Kimi-K2-Instruct)均标注 Modified MIT；此次把模型卡的许可名称写清楚。实际许可证含额外条件。

## 训练

- 报告第 2 节：15.5T token 预训练，MuonClip 包含 Muon 更新和按头 QK-Clip；阈值 100，发生在权重更新后，不直接改变当前步骤前向结果。MLA 中只调整不跨头共享的分量；本次补充该区别。
- 报告表 1 的维基 SimpleQA 对照为 23.76、27.39、28.94；数据改写和训练轮数属于该实验，不能视为普遍增益。工具合成轨迹、可验证奖励和评审反馈依据报告第 3 节，未冒充公开了全部训练配方。
- Thinking 量化及检查点与原始 K2 分别表述；其余代码和 CSV 情境为教学构造。

## 评测与应用

- 报告表 3：原始 Instruct LiveCodeBench v6 53.7 Pass@1、AIME 2025 49.5 Avg@64；SWE-bench Verified 无测试单补丁 51.8、工具单次尝试 65.8、多次尝试及内部验证选择 71.6。正文区分工具与预算，不将多尝试结果当单次。
- [Thinking 模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)列 SWE-bench Verified 有工具 71.3、K2 0905 69.2，提醒不同脚手架与聊天服务工具配置不可混同。20 个任务中 15 个通过是教学算例。

## 配图

- `src/content/data/figures.yaml` 登记 `kimi-k2/overview.svg` 为原创 CC BY 4.0 教学图，来源报告且标明非官方结构图；图中区分模型生成工具请求、外部执行和结果回传。
- Chromium 打开本机 `/nlp/kimi-k2/`，图像解码为 1060×290，替代文本存在；截图检查顺序、箭头与文字。预览页面为正文修订前构建，图与替代文字未改。

## 社区

- [袁朝发：Kimi K2 与 K2 Thinking 社区详解](https://zhuanlan.zhihu.com/p/1973160552684622460) 于 2026-10-28 已登录实读时 57 赞同、81 收藏，见 [社区补充核验](remaining-community-3.md)。文章梳理 K2 结构和 MuonClip；其中 Thinking 训练细节有基于原始 K2 的推测，正文按官方报告和模型卡限定，没有复制其图文。

## 评测数字补充复核（2026-10-29）

- 对照 [K2 技术报告表 1、表 3 和表注](https://arxiv.org/html/2507.20534)：Instruct 无延长思考的 LiveCodeBench v6 53.7 Pass@1、AIME 2025 49.5 Avg@64；SimpleQA 三组 23.76、27.39、28.94 对应原始文本、一次改写和十次改写的不同轮数。
- SWE-bench Verified 的 51.8、65.8、71.6 分别是无测试单补丁、有工具单次尝试、多尝试并由内部验证器选结果；[Thinking 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2-Thinking)的 71.3 和 K2 0905 的 69.2 属于有工具设置，BrowseComp 60.2 也使用工具。正文数字和协议表述一致。
