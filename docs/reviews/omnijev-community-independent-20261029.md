# OmniJev 社区资料与独立接入复核（2026-10-29）

范围是 [tinnel123666888/OmniJev](https://github.com/tinnel123666888/OmniJev) v1.1；并非 TypeSafe Jev、Akhila 的 Jev-Omni，也不是 OmniJev/OneJev 或 PlayJev。

## 知乎检索

2026-10-29 使用已登录 Chrome 的知乎内容搜索 `OmniJev`。可见搜索结果包含 Datawhale 的 Jev-Omni 部署、SPX-CD-Omni、AudioJev 及 TypeSafe Jev 的生态介绍，但结果标题和摘要未确认对应本仓库。此前直接实读的文章、作者及赞藏见 [知乎直接资料补查](omnijev-zhihu-direct-search-20261028.md)。搜索页 AI 汇总把 OmniJev 当作项目集合，不能据此断定其项目身份。此次没有发现可确认对应该仓库的深入知乎文章；没有发现不等于不存在，社区维度不据此冒充为已找到对应知乎解读。

## 独立应用材料

实读 [ThinkFlowLab/system1-agents 的 OmniJev 适配器源码](https://github.com/ThinkFlowLab/system1-agents/blob/main/s1a/decision_models/omnijev.py)与[配套接口文档](https://github.com/ThinkFlowLab/system1-agents/blob/main/docs/decision-models.md)。源码明确指向 `tinnel123666888/OmniJev` 仓库，默认 `tinnel123/OmniJev-0.8B`、`v1.1` 及 `Qwen/Qwen3.5-0.8B`；这能排除近名项目。适配器调用 `MSO1.system_one`，传截图与用户目标、规则和候选，对网页文字长度做限制；它是作者实现的系统接线，不是本次实际运行，也不是独立准确率结论。正文增加可追踪入口及接线说明，不以这个项目的设置替换 OmniJev 原仓库训练或评测数据。

另读 [ms-swift Decision Model Training 文档](https://swift.readthedocs.io/en/latest/BestPractices/Decision.html)：该项目介绍 `omnijev` 的 PEFT 适配器、决策头和共享前缀分支，并将视频预处理为带时间信息的图像拼图。它是另一个框架的实现说明，不能当成 OmniJev 项目原始接口在所有版本中必然一致；未进行训练或推理验证。

与原仓库 [README](https://github.com/tinnel123666888/OmniJev) 及 [branch.py](https://github.com/tinnel123666888/OmniJev/blob/main/mso/branch.py)交叉核对后，正文对于 Qwen3.5 底座、视觉输入和按问题／候选计算分支的描述保持一致。因缺少针对该版本的知乎深入文章，本记录支持项目身份和第三方实现核对，不建议将“已找到对应知乎文章”标为完成。
