# Kimi K2.6 / K2.7 Code 主干核查

核查日期：2026-10-28。本轮在原有文章与教学图基础上继续补充，属于参与修改后的定向核查，不是独立的逐句全文审校。

- 对照 [K2.6 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.6)和 [K2.7 Code 官方模型卡](https://huggingface.co/moonshotai/Kimi-K2.7-Code)，确认两者公开结构均为 61 层、首层稠密、64 注意力头、384 个路由专家每 token 选 8 个，并有一个共享专家。两个版本分别使用约 400M 的 MoonViT 视觉编码器，原生 INT4 与 K2 Thinking 同一方法。
- 查看 [K2.6 配置](https://huggingface.co/moonshotai/Kimi-K2.6/blob/main/config.json)和 [K2.7 Code 配置](https://huggingface.co/moonshotai/Kimi-K2.7-Code/blob/main/config.json)，核对 7168 隐藏维度、512 的键值低秩维度、首层稠密及分组 INT4 和排除模块。KV Cache 的实际存储和性能取决于推理实现，此处未对公式或具体硬件做实测。
- 查看两页既有教学图：均表达视觉输入、文本和外部工具反馈，K2.7 的图将文字与视觉编码压缩在同一方框，图注说明文字直接进入主干；追加共用语言主干图，分开解释层内注意力与前馈。新图根据已存在的 K2 Thinking 原创教学 SVG 修改，使用同项目内容许可 CC BY 4.0；并非官方图。
- 核对模型卡给出的 K2.7 的 Kimi Code Bench v2、Program Bench 与 MCP Atlas 数值及条件；评测来自官方声明，未独立执行。K2.6 的模型卡给出 SWE-Bench Pro 和 Terminal-Bench 2.0 等结果，并区分代码任务 10 次、视觉任务 3 次平均。
- 尚未重新实读两页所有知乎参考；未运行模型、训练或评测，也未验证实际部署中视频接口。官方未完整公布两代新增训练数据及训练配方，不能凭结构相似推断其细节。
