# Qwen2 全维度审阅

审阅日期：2026-10-29。时间线 ID `qwen-2`，完整通读 `src/content/docs/nlp/qwen2-model.md`，对照技术报告、模型卡、配置、配图与既有知乎实读；未运行模型或复现评测。

## 结构与模型卡

- [技术报告第 2 节及表 1](https://arxiv.org/html/2407.10671)：首发包含 0.5B、1.5B、7B、72B 稠密模型及 57B-A14B MoE；MoE 在前馈层设 64 路由专家、每 token 选 8，另有相当于 8 个专家宽度的共享专家。通过稠密权重复制、重排和分割，并对每个细粒度专家 50% 参数随机重新初始化，继续训练。
- [7B Instruct 配置](https://huggingface.co/Qwen/Qwen2-7B-Instruct/blob/main/config.json)：28 层、28 查询头、4 KV 头、隐藏维度 3584；每头 128 维。BF16、单序列 32768 token 的 KV 缓存约 1.75 GiB，同条件 28 个 KV 头约 12.25 GiB，均不含权重和工作区。
- [发布说明](https://qwenlm.github.io/blog/qwen2/)列出 72B 使用 Qianwen 许可、其他首发型号 Apache 2.0；默认窗口和 YaRN 配置以具体模型卡为准，128K 不等于默认配置和长文能力保证。

## 训练

- 报告第 3 节：较高质量数据约 7T token；0.5B 使用 12T 数据集、MoE 通过 upcycling 继续训练 4.5T token；较大训练集未在文中所述对照带来显著改善。
- 预训练后期从 4096 扩展至 32768 token，RoPE 基础频率从 10000 改为 1000000，本次补充这一实际配置与其不能单独保证长文理解的说明。后训练先离线 DPO、再由当前模型和奖励模型构造偏好对进行在线 DPO；超过 50 万条 SFT 样本、训练两轮。

## 评测与应用

- 报告表 8，Qwen1.5-7B-Chat／Qwen2-7B-Instruct：MMLU 59.5／70.5，GPQA 27.8／34.3；7B 模型卡 GPQA 25.3 与报告不同，正文明确官方发布文要求出现差异时优先技术报告。
- 20 条样本的 18／15／14 条分别为 90%／75%／70%；订单状态、数据抽样与错误定位均为教学案例，不能作为实际模型测试结果。

## 配图

- `src/content/data/figures.yaml` 登记 `qwen2-model-teaching`，依据 Qwen2 技术报告，原创 CC BY 4.0，明确稠密和 MoE 为不同型号，图省略位置编码、归一化与残差。
- Chromium 打开本机 `/nlp/qwen2-model/`，SVG 加载并解码为 1060×250，替代文本存在；截图检查文字、因果生成与前馈箭头。

## 社区

- [xyiz：Qwen2 源码解读（下）](https://zhuanlan.zhihu.com/p/704851580)于 2026-10-27 已登录实读时 26 赞、40 收藏，见 [Qwen 文本模型社区资料](qwen-community.md)。文章使用 0.5B Instruct 及特定旧版代码，滑窗类存在不等于检查点默认启用；核对 [0.5B 官方配置](https://huggingface.co/Qwen/Qwen2-0.5B-Instruct/blob/main/config.json)，不把其配置泛化到所有型号。未复制社区图文。

## 评测数字逐项复核（2026-10-29）

[技术报告表 8](https://arxiv.org/html/2407.10671)：表头省略 Chat／Instruct 后缀；对应列分别是 Qwen1.5-7B-Chat 和 Qwen2-7B-Instruct。MMLU 为 59.5／70.5，GPQA 为 27.8／34.3，正文与表格一致。基础模型表 4 是另一组结果，不应混用。模型卡的 GPQA 25.3 差异及官方取用顺序已在正文标明。本次没有复现评测。
