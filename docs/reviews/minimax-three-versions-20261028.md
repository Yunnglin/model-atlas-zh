# MiniMax M2、M2.5 与 M3 版本复核（2026-10-28）

## 范围与参与情况

核对三个页面及其原创教学图的模型结构、训练披露、许可证标记与引用的评测数字。仓库已有 MiniMax 相关审校记录；本轮无法确认本人是否参与三篇初稿或此前专项审校，因此不将本轮标作全新独立审校。

## 版本和证据

- **M2 初版。**[M2 系列报告 v1](https://arxiv.org/html/2605.26494v1) §2 给出 62 层、229.9B 总参数、9.8B 激活、256 选 8 专家、48 Q / 8 KV、29.2T 预训练 token 和 192K 最大训练上下文；报告是后发的系列资料，正文明确没有把后续每一项后训练措施都套给 M2 初版。[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2)标记 modified-MIT，正文另有 MIT 链接，现有文案提醒核对具体许可文件。卡的 SWE-bench Verified 69.4、Terminal-Bench 46.3 及前者 128K、100 步条件与页面一致。教学图示意外部执行器，不声称展开所有模型层。
- **M2.5。**[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)报告 SWE-bench Verified 80.2、Multi-SWE-Bench 51.3、带上下文管理的 BrowseComp 76.3；补充前两项所属 SWE 基准使用 Claude Code、覆盖默认系统提示及四次运行平均的脚注口径。Droid 79.7、OpenCode 76.1 是另列脚手架的结果。官方记录 M2.1 到 M2.5 的平均 31.3→22.8 分钟，页面区分耗时下降和速度比。卡标记 modified-MIT，详见权重具体许可；Forge 约 40 倍为官方训练系统声明，不是终端推理速度保证。图示训练以外的模型与工具调用，独立验证属于推荐工作流，不是自动内置能力。
- **M3。**[模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M3)列约 428B 总参数／23B 激活、文本图像视频及 1M 上下文，许可标记 MiniMax Community；[配置](https://huggingface.co/MiniMaxAI/MiniMax-M3/raw/main/config.json)列 60 层、128 路由专家选 4、1 共享专家、64 Q / 4 KV，前 3 层与其余层的前馈和稀疏注意力标志分开。对应[MSA 论文 v1](https://arxiv.org/html/2606.13392v1) §3，索引分组选择、当前局部块保留、选中块内因果注意力和索引 KL 梯度隔离的说明与图一致。M3 教学图标注省略视觉编码且前三层全注意力。[官方发布](https://www.minimax.io/blog/minimax-m3)报告 SWE-bench Pro 59.0、Terminal-Bench 2.1 66.0，并在 1M 比较上一代时报预填充超过 9 倍、解码超过 15 倍；论文的 109B 模型 H800 算子测试是另一实验，不应混成同一模型系统结果。完整后训练与基准的全部操作细节未由上述材料完整公开。

## 验证与局限

检查三张 SVG 的 XML 格式与本轮修改空白；未调用权重、执行训练或独立复现评测，也未就许可证提供法律判断。模型卡与服务配置可能更新。
