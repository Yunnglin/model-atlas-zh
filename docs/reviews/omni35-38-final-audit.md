# Qwen3.5-Omni 与 Qwen3.8-Omni-Flash 定向审校

核对时间：2026-10-28。对照两篇模型文章的模型卡、结构、训练和所引用的评测数值，以及官方图和教学图的对应关系；未实际调用模型，也未复现训练、评测或时延。

## Qwen3.5-Omni

- [报告 v1 第 2 节](https://arxiv.org/html/2604.15804v1#S2)：核对 16 kHz、128 通道梅尔频谱、AuT 输出 6.25 Hz，及 Thinker、Talker、MTP、ARIA 等职责。文字描述视觉编码器来自 Qwen3.5，但表 1 写 SigLIP2；文章已保留两处表述的差异，未推测具体关系。
- 报告第 3、4 节核对 4000 万小时音频文本数据、三个 Thinker 预训练阶段和 Talker 四阶段。第 5 节表 7 核对 WorldSense Flash 57.9 / Plus 62.8。首包延迟来自表 1 的内部部署条件，不是 API 端到端实测。
- 报告公开与权重开放是不同事情。已检查文章所引用的官方报告及服务文档；本次未发现对应 Plus/Flash 官方可下载权重，不能据此断言其绝不存在。

## Qwen3.8-Omni-Flash

- [报告 v1 第 2 至 4 节](https://arxiv.org/html/2609.25611v1#S2)：核对普通 AuT 与 Spatial AuT、QSA 先选块后读原 token、四阶段训练。正文对第二阶段列出的总数约 2.5T 与各分项约 2.6T 的不一致已明确保留。
- 第 6、7 节表 6、7、8、9 核对 WorldSense、OmniVideoBench 的直接与工具模式、token 消耗，以及 6 秒音频输入 TTFC 978.36ms 的测量边界。Plus 的 WorldSense 在 3.5 报告是 62.8、3.8 报告是 63.9；两篇文章现均指出差异，不推测来源或将数字混用。
- [QwenCloud 服务说明](https://www.qwencloud.com/models/qwen3.8-omni-flash)列标准服务为多模态输入和文本输出；Realtime 语音输出有单独路径。公开报告与插件不等于模型权重可下载，本次未确认官方权重。

## 配图与局限

核对报告 v1 的官方图片 URL 并逐字节比较：3.5 Figure 2、3.8 Figure 2 和 Figure 3 均与仓库对应文件一致。原创教学 SVG 与论文的模块及标准/Realtime 边界对应，均经过 XML 解析；教学图省略层内实现。

本次未重访知乎文章及互动数；也未核查模型论文之外每一条服务状态的未来变化。服务配置、公开资源和模型卡可能随时间变化。
