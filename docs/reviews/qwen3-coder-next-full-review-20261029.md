# Qwen3-Coder-Next 全文审校

审校日期：2026-10-29。通读 [Qwen3-Coder-Next 正文](../../src/content/docs/nlp/qwen3-coder-next-model.md)，范围为 80B-A3B 检查点；未运行模型或复现评测。

- **结构与模型卡**：对照 [官方模型卡](https://huggingface.co/Qwen/Qwen3-Coder-Next)，确认 Apache 2.0、80B 总量与 3B 激活、48 层、每组三层 Gated DeltaNet 加一层 Gated Attention、512 个路由专家选 10 个及共享专家、原生 262144 上下文；区分注意力、MoE 和外部执行器。仅非思考模式指不产生指定思考标签，不能推出无法推理。
- **训练**：对照 [技术报告 v1](https://arxiv.org/html/2603.00729v1) 第 2–4 节：从 Qwen3-Next Base 经代码和 Agent 中间训练、SFT、各领域专家训练及蒸馏。补充第二种任务合成方式的缺陷注入、测试失败及恢复验证、约 80 万任务与九种以上语言的范围；区分轨迹惩罚、工具格式惩罚和实际功能正确性。工具模板消融比较保持数据量和训练配置一致，正文没有将关联写成跨所有场景的保证。
- **评测**：报告表 3 的 SWE-Bench Verified 三个工具框架 70.6、71.1、71.3，最多 300 轮；补充表 5 Terminal-Bench 2.0 两种 Terminus2 格式 34.2、36.2，解释任务、框架和评价条件，不能跨基准直接相减。论文第 4.2.4 节的历史与联网绕过及启发式阻断只用于描述作者实验，正文没有声称封住所有泄漏。
- **配图**：核对 [图登记](../../src/content/data/figures.yaml)和复用的 [Qwen3-Next 图](../../public/figures/qwen-next/overview.svg)；2026-10-29 用 Chromium 打开本地模型页，解码图像并目视检查文字和连线。图为原创层布局教学简图，非官方结构图；省略归一化、残差和具体张量。
- **知乎**：沿用 [2026-10-27 已登录 Chrome 实读记录](qwen-code-community.md)：曾天真的 [Agent 框架适配讨论](https://zhuanlan.zhihu.com/p/2074614450179543828)当时 128 赞、160 收藏。文中工具模板过拟合的讨论可与论文第 4.2.2 节的数据量固定消融交叉理解；作者对其他模型和蒸馏的推断并非受控实验，不采用为模型事实。互动数为阅读时快照。

文中示例与流程为教学说明，不代表模型实际调用或部署效果。

## 2026-10-29 评测数字补充核对

- [技术报告 v1 表 3](https://arxiv.org/html/2603.00729v1)的 SWE-Bench Verified 中，Qwen3-Coder-Next 的 SWE-Agent、MiniSWE-Agent、OpenHands 分别为 70.6、71.1、71.3；评测设置最多 300 轮。
- 同版表 5 的 Terminal-Bench 2.0，Terminus2 XML 和 JSON 分别为 34.2、36.2；两种框架输入格式的分数不能与 SWE-Bench 直接对比。正文与表格相符。
