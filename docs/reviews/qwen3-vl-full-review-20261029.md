# Qwen3-VL 全维度审阅

审阅日期：2026-10-29。范围为 `src/content/docs/omni/qwen3-vl.md` 的 Qwen3-VL 系列，按报告 v1 的结构、训练与评测口径核对；没有执行模型或复现评测。

## 结构与模型卡

- [技术报告 v1 第 2 节](https://arxiv.org/html/2511.21631v1)：2B、4B、8B、32B 为稠密，30B-A3B 和 235B-A22B 为 MoE；视觉编码器采用 SigLIP-2 架构并继续训练，通常为 SO-400M，2B／4B 使用 Large 300M。两层 MLP 合并 2×2 特征。
- DeepStack 的三个视觉层分别经专用 merger 加入语言模型前三层；Interleaved-MRoPE 与文本时间戳是不同机制。正文的保存失败弹窗和时刻表为教学构造。
- [8B-Instruct](https://huggingface.co/Qwen/Qwen3-VL-8B-Instruct) 与 [235B-A22B-Instruct](https://huggingface.co/Qwen/Qwen3-VL-235B-A22B-Instruct) 模型卡标注 Apache 2.0，正文补充对应型号许可和模型卡入口。

## 训练

- 报告表 1：S0 仅训练 merger，67B token、8K；S1／S2 分别约 1T、8K／32K；S3 100B、256K。SFT 约 120 万条，其中三分之一纯文本，训练长度分阶段增加。强到弱蒸馏只用纯文本训练语言骨干，与视觉预训练区分。
- 报告第 4.4 节：推理 RL 使用约 3 万道文本和多模态题目、规则等反馈与 SAPO；另有通用 RL。正文例子没有伪称官方具体样本。

## 评测与应用

- 表 9 的内部 15B-A2B 消融，200B 预训练 token、无后训练：DeepStack 平均 74.7→76.0，TVQA 80.6→80.5。第 5.9 节视频评测的帧／token 上限、VideoMMMU 和 MMVU 的每帧预算、Charades-STA 4fps 与其他 2fps 及部分对手预算不同，均与正文一致。
- 找针实验在 235B-A22B-Instruct 上 1fps 采样并动态调整分辨率，不代表对短暂事件保证检出。2048 帧按 2fps 为 1024 秒；屏幕等比例缩放与错例拆解为教学建议。

## 配图

- `qwen3-vl` 原创 CC BY 4.0 教学图登记在 `src/content/data/figures.yaml`，说明多层特征注入与省略的融合器；正文另链接论文官方架构图。图片、时间戳与语言模型的关系按报告核对。
- Chromium 打开本机 `/omni/qwen3-vl/`，图滚动加载为 1060×300，替代文本存在；截图核对箭头、文字与省略说明。

## 社区

- [Ryann：Qwen3-VL 技术报告解析](https://zhuanlan.zhihu.com/p/1981497299956946050) 于 2026-10-28 实读时 531 赞、795 收藏，记录见 [视觉社区资料](qwen-vision-community.md)。其类比有助于说明 DeepStack 和数据，训练并行缩写与评测结论应回到报告；正文未复制图片或将作者推测当成官方结论。

## 本轮评测数字复核

- 对照[报告 v1 表 9 与第 5.9 节](https://arxiv.org/html/2511.21631v1)：15B-A2B 消融为 2000 亿预训练 token、无后训练的验证集结果，平均 74.7→76.0、TVQA 80.6→80.5；视频设置的 2048 帧、224K token、768/640 token 每帧及 4/2 fps 均与正文一致。正文的 17 分 4 秒为 2048÷2 的计算示例，不是对所有视频保证的覆盖时长。本轮未运行评测。
