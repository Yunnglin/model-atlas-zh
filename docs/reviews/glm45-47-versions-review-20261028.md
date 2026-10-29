# GLM-4.5、4.6、4.7 版本复核（2026-10-28）

## 范围及参与情况

按官方论文、模型卡、配置检查三篇文本模型的结构、参数、训练披露、许可、代表评测和原创教学图。仓库已有 `glm-core-audit.md`、`glm-version-audit.md` 等审校记录，本人此前审过 GLM 相关训练方法，但无法确认是否参与过这三篇初稿或专项审校，因此不将本轮标称全新独立审阅。

## 核对及改动

- **GLM-4.5：**[技术报告 v1](https://arxiv.org/html/2508.06471v1) 表 1 与 §2–4：355B 总／32B 激活、3 稠密层＋89 MoE 层、160 路由专家选 8 加共享专家、1 层 MTP；355B 的报告口径包含 MTP、不含词嵌入与输出层。23T 是多阶段训练 token 量；任务专家与层内 MoE 专家不同。SWE-bench Verified 64.2 使用 OpenHands 0.34、100 轮、128K 历史截断、temperature 0.6 和 top-p 1.0；正文数值及条件一致。[模型卡](https://huggingface.co/zai-org/GLM-4.5)标记 MIT。教学图展示任务专家迭代，注明其与路由专家不同。
- **GLM-4.6：**[模型卡](https://huggingface.co/zai-org/GLM-4.6)标记 MIT，并将 4.5 报告用于背景；不能据此认定 4.6 完整训练方案与前代相同。[配置](https://huggingface.co/zai-org/GLM-4.6/raw/main/config.json)给出 92 层、首 3 层稠密、160 选 8 加 1 共享、96 Q / 8 KV、202752 位置和 `num_nextn_predict_layers: 1`。将正文易混淆的“下一 token 预测层”改为多 token 预测相关层，并说明推测解码依赖实现。图将实际执行放在外部工具。
- **GLM-4.7：**[模型卡](https://huggingface.co/zai-org/GLM-4.7)标记 MIT；[配置](https://huggingface.co/zai-org/GLM-4.7/raw/main/config.json)对应上述相同层数、专家及头数，但不能据此推断训练权重或配方完全相同。模型卡表列 SWE Verified 73.8、Multilingual 66.7、Terminal Bench 2.0 41.0；正文补充官方对 Terminal 和 SWE Verified 的采样／生成预算建议，以及多轮保留思考建议，未把推荐值扩写成完整评测协议。模型卡说明 τ²-Bench 不同领域有提示及环境调整。图说明工具和思考保留依赖应用配置。

## 验证与限制

三张 SVG 均为仓库原创教学简图，已核对语义并做 XML 解析；改动经空白检查。未实际调用模型、训练或复现评测，未就许可适用提供法律结论；4.6、4.7 的新增训练数据及完整配方仍以官方进一步披露为准。
