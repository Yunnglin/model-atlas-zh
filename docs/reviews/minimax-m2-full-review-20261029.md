# MiniMax-M2 审阅

审阅日期：2026-10-29。时间线 ID `minimax-m2`，通读 `src/content/docs/nlp/minimax-m2-model.md`，对照官方发布、模型卡、配置、系列报告 v1 与页面配图；未运行模型或复现评测。

## 结构与模型卡

- [MiniMax-M2 系列报告 v1 第 2 节](https://arxiv.org/html/2605.26494v1)：62 层 decoder-only、229.9B 总参数／9.8B 激活，所有层全注意力，GQA 48 个查询头／8 个 KV 头，256 专家每 token 选择 8 个；192K 原生上下文及 MTP。M2 与此前 Text-01 的混合注意力区分。
- [官方配置](https://huggingface.co/MiniMaxAI/MiniMax-M2/blob/main/config.json)给出 head_dim=128、max_position_embeddings=196608、62 层及 48／8 头；本次增加单序列 BF16、8192 token 的 KV 缓存教学估算：62×2×8×128×8192×2=2080374784 字节，约 1.94 GiB；16384 token 翻倍，未包含权重及其他开销。
- [模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2)元数据为 modified-MIT，而正文提供 MIT 许可链接；正文将两个来源分别说明，未假定所有版本具有完全一致的授权条件。

## 训练

- 报告第 3 节：总预训练 29.2T token，恒定阶段 19.9T、衰减阶段 9.3T；后者从 8K 逐步扩展至 32K、192K，长上下文材料包括代码、长 PDF 和主题相关文档。正文区分后续系列训练流程及初版的具体披露范围。
- 模型多 token 预测训练与推测解码的草稿／验证逻辑分别表述，收益依实际实现；工具轨迹、奖励漏洞和订单数据示例是教学构造。

## 评测与应用

- [模型卡评测说明](https://huggingface.co/MiniMaxAI/MiniMax-M2)：SWE-bench Verified 69.4 使用 R2E-Gym／OpenHands 脚手架、128K、最多 100 步及无测试时扩展；Terminal-Bench 46.3 使用指定的原始仓库版本和 claude-code，8 次平均。两者是各自系统协议结果。
- 20 项案例中 14／20、12／20 分别 70%、60%，为构造算例；196608−190000=6608，表示输入已占 190000 位置后的理论剩余额度，实际模板及运行框架还占空间。

## 配图

- 正文 `public/figures/minimax-m2/backbone.svg` 与登记在 `src/content/data/figures.yaml` 的 `overview.svg` 均为 CC BY 4.0 原创教学图，许可见 `public/figures/LICENSE-TEACHING.txt`；分别概括因果注意力／专家前馈与外部执行器的工具循环，注明省略细节。
- Chromium 打开本机 `/nlp/minimax-m2-model/`，两图成功解码，替代文本存在；截图检查层内主线、外部执行、结果回流和文字。页面为新增正文算例前的静态构建，图片和替代文本未变。

## 社区

- 2026-10-29，主审在 Chrome 核对[微调的 MiniMax-M2 使用观察](https://www.zhihu.com/question/1965302088260104295/answer/1969038709283361084)的作者和互动数，页面显示 269 赞、346 收藏；Chrome 当时未读出正文。本次另通过网页检索读取了正文：作者将全注意力选择理解为系统复杂性和可控性的取舍，并描述了网页端科研报告任务，以及代码、工具链等使用观察。
- 对照[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2)和[系列报告](https://arxiv.org/html/2605.26494v1)：M2 使用全注意力及工具调用，模型卡的 SWE-bench 验证得分为 69.4；社区体验不能证明架构选择的因果关系或普遍的工业可用性，也不是统一评测协议下的跨系统对比。作者网页端给开放任务自行定义评分权重，这些权重并非客观公认的排名标准。
- 本次核对模型卡发现页面同时列出 Terminal-Bench 旧版 46.3 和 Terminal-Bench 2.0 的评测元数据 30；正文补充两者版本不同，不能直接相减判断进退步。未运行模型或复现任一评测。

## 评测数字补充复核（2026-10-29）

- 对照 [MiniMax-M2 官方模型卡的表格及评测说明](https://huggingface.co/MiniMaxAI/MiniMax-M2)：SWE-bench Verified 69.4 使用 OpenHands 上的 R2E-Gym 脚手架、128K 上下文、最多 100 步和无测试时扩展；Terminal-Bench 46.3 使用模型卡指定版本的官方仓库与 Claude Code，取 8 次运行平均。
- 同页评测元数据另列 Terminal-Bench 2.0 为 30；它与表格 46.3 的基准版本和评测记录不同。正文已区分两个成绩，未发现需改动。
