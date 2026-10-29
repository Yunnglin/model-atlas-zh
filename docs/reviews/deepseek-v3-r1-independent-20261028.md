# DeepSeek-V3、R1、R1-0528 复核

参与记录：审阅者此前参与对 R1-0528 社区文章的阅读与官方材料交叉检查（见 `deepseek-new-community-logged-in.md`），也曾为同家族 V2.5 和 V3-0324 编写或审阅材料；因此本次对 R1-0528 的复核不是完全独立于此前相关工作。未自行加载权重或复现评测，未改共享 YAML。

- [V3 报告 v2](https://arxiv.org/html/2412.19437v2)及[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V3)确认主模型 671B/37B、权重文件额外 14B MTP、61 层前三层稠密、256 个路由专家选 8 个加 1 共享专家、MLA、14.8T 预训练和 4K→32K→128K 扩展。训练费用 2.788M H800 小时只计正式训练；图注明省略前三层和内部细节。表 3 中 Base MMLU 5-shot 为 V2 78.4、V3 87.1，正文补充论文使用的 EM 指标，避免与不同口径混淆。
- [原始 R1 论文 v1](https://arxiv.org/html/2501.12948v1)确认以 V3-Base 为起点，Zero 不先做推理 SFT；R1 冷启动、推理 RL 后生成筛选样本，重新从 V3-Base 用约 60 万推理及 20 万非推理样本进行 SFT，再做全场景 RL。蒸馏模型用同一批约 80 万条数据仅做 SFT；原始学生各有 Qwen 或 Llama 结构。图清楚区分重新微调和筛选数据的路径。AIME 2024 15.6→71.0 为图中每题 16 次采样平均，表中 86.7 为 64 次多数投票，不混为同一预算。
- [R1-0528 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528) 与[配置](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/blob/main/config.json)确认 61 层、前 3 层稠密、256 路由专家选 8 和 1 共享专家、`max_position_embeddings=163840`，配置字段不是服务的有效窗口保证；卡上权重统计约 685B，许可证 MIT。评测表 AIME 2025 70.0→87.5、GPQA 71.5→81.0、SimpleQA 30.1→27.8 与生成上限 64K、需采样时温度 0.6/top-p 0.95/每题 16 次估计 pass@1 一致。卡将提升归于更多后训练计算及算法优化，但未公开完整配方；文章不将初版训练流程断言为更新版细节。
- 0528 图为推理与可选外部验证教学示意，不表示实际每次调用都运行工具。三张 SVG XML 已解析；未进行浏览器截图或实际推理验收。
