# DeepSeek-V2 审阅

审阅日期：2026-10-29。时间线 ID `deepseek-v2`，通读 `src/content/docs/nlp/deepseek-v2-model.md`，核对论文 v5、官方配置与模型卡、图示与已有社区阅读线索；未运行模型或复现评测。

## 结构与模型卡

- [技术报告第 2、3 节和附录 B](https://arxiv.org/html/2405.04434v5)：V2 为 236B 总参数、21B 激活、128K 上下文；Lite 为约 15.7B 总参数、2.4B 激活、32K 上下文。模型卡说明代码 MIT、模型独立 DeepSeek 许可并支持商业用途。
- [官方配置](https://huggingface.co/deepseek-ai/DeepSeek-V2/blob/main/config.json) 60 层、KV 潜变量 512 维、位置键 64 维；在单序列 8192 token、BF16 和压缩缓存的假设下，`60×576×8192×2` 字节为 540 MiB，不含权重或工作区。论文的 93.3% 是与 DeepSeek 67B 在指定配置下的 KV 缓存比较，不是总显存比例。
- 各 MoE 层（第一层除外）有 2 个共享与 160 个路由专家，每个 token 选 6 个路由专家；训练中专家分布在 8 台设备，每 token 最多发往 3 台。补充矩阵吸收利用结合律的例子，区分 RoPE 分支且不称任意矩阵可交换。2026-10-29 对照第 2.2.2–2.2.4 节补充先选择设备再选择专家的例子，区分三类负载均衡损失与评测不丢 token；三台设备的效果接近仅为论文实验结论。

## 训练

- 报告第 3、4 节：预训练 8.1T token、4K 长度；YaRN 长上下文扩展使用 32K 序列训练，报告评估至 128K。
- SFT 约 150 万条对话，120 万帮助性、30 万安全；GRPO 先做推理对齐，再结合有帮助性、安全与规则奖励做人类偏好对齐。编译与标准答案用于构造奖励模型偏好数据，不将其误写为每次更新直接使用规则验证。

## 评测与应用

- 表 2：V2 Base MMLU 5-shot 78.5，对照 DeepSeek 67B 71.3；二者训练与结构多项不同，不能单独归因于 MLA 或 MoE。20 条案例中 16／20=80%、12／20=60% 为教学构造。
- 论文 5.76 倍为特定 8×H800、权重 FP8、缓存量化及实际请求分布下的最大生成吞吐对比，不等同任意配置的单请求加速。维修证据定位、错例、分组回归为建议方案。

## 配图

- `src/content/data/figures.yaml` 登记 `deepseek-v2/overview.svg` 为原创 CC BY 4.0 教学图，注明论文依据；图标明省略第一层稠密前馈、残差、归一化等内部细节。
- Chromium 打开本机 `/nlp/deepseek-v2-model/`，图像解码为 1060×260，替代文本存在；截图检查文字、箭头和布局。正文修改不影响图片。

## 社区

- 2026-10-29 主审通过已登录 Chrome 阅读[矩阵吸收分析](https://zhuanlan.zhihu.com/p/700214123)：发布账号 ZHANG Mingxing，署名陈劭源与 ZHANG Mingxing，当时 747 赞、1069 收藏；数量为阅读时快照。
- 文章对比展开键值缓存与矩阵吸收后使用压缩缓存，解释 Q/K 非 RoPE 部分、V 的矩阵吸收和单独的位置编码分支。对照[技术报告第 2.1 节](https://arxiv.org/html/2405.04434v5#S2.SS1)，该解释可用于理解实现选择；文章的算子测试依赖具体设备、序列长度与内核，不能当成整个服务的通用加速倍率。
- 另外核对[固定版本技术说明](https://github.com/madsys-dev/deepseekv2-profile/blob/924174cb5dc11fad24bdaad3fd820ebf87506368/workspace/blog/optimizing-mla.md)和[模型代码优化提交](https://huggingface.co/deepseek-ai/DeepSeek-V2-Chat/commit/b6ce8bd086a79c3ea6070bb09f581d7b653dcce2)，进一步区分压缩缓存实现与展开缓存实现。没有运行模型或复现社区算子实验。

## 评测数字逐项核对

- [V2 技术报告 v5 第 3.2 节与表 2](https://arxiv.org/html/2405.04434v5#S3.SS2)：MMLU 使用基于困惑度的评测，5-shot；V2 Base 78.5、DeepSeek 67B Base 71.3，均为同表中的准确率。
- [V3 技术报告第 4.1 节基础模型表](https://arxiv.org/html/2412.19437#S4.SS1)：重新评估的 V2 Base MMLU 为 78.4，5-shot，表头指标为 EM，同样采用基于困惑度的方法。两个报告的结果分别引用；无法只从分数确定差异成因。
