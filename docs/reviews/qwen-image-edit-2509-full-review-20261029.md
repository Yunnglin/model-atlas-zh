# Qwen-Image-Edit-2509 专项审校

审校日期：2026-10-29。完整通读 [2509 正文](../../src/content/docs/cv/qwen-image-edit-2509-model.md)，范围为公开 2509 权重；未运行模型或复现评测，人物和水杯案例为教学构造。

- **结构**：对照[官方模型卡](https://huggingface.co/Qwen/Qwen-Image-Edit-2509)、[发布说明](https://github.com/QwenLM/Qwen-Image/blob/main/Qwen-Image-Edit-2509.md)及 [Diffusers 固定版本管线](https://github.com/huggingface/diffusers/blob/c60830ee365d520ab52b110dda562dd26f7b4d7f/src/diffusers/pipelines/qwenimage/pipeline_qwenimage_edit_plus.py)，核对单图、多图、图文条件与各参考图 VAE 潜变量在序列维拼接。将推理实现与发布说明中没有详细展开的训练拼接区分；1–3 图为官方经验范围，不称为硬上限。
- **训练**：官方说明核对初代架构上继续以图像拼接训练、主体一致性和 ControlNet 条件；未推测未公开的样本规模、配比和训练超参数。新图、指令与目标数据准备属于教学建议。
- **评测与应用**：对照[MultiBanana 表 3](https://arxiv.org/html/2511.22989)核对 2509 单参考 7.499、双参考 3.699，Gemini 2.5 与 GPT-5 评分平均，任务不同不可将分差归因于参考图数量。沿用 [GenArena 2026 年 1 月快照核查](qwen-image-edit-bench-review-20261028.md)，将 Elo 与准确率、不同任务和裁判分开。本次补充官方模型卡的两图、seed 0、40 步、true CFG 4.0 与 guidance 1.0 示例；未实跑，配置非通用最优。
- **配图**：核对[图片登记](../../src/content/data/figures.yaml)、[多图输出教学图](../../public/figures/qwen-image-edit-2509/overview.svg)及[管线推理教学图](../../public/figures/qwen-image-edit-plus/inference.svg)，后者按固定版本源码区分图文条件、VAE 编码和图像 Transformer，未将其等同训练结构；补充[素材登记](../assets.md)中的作者、来源与 CC BY 4.0。Chromium 本地页面滚动后两图成功解码，替代文本存在；截图核查中文和箭头。
- **社区**：沿用[2026-10-28 实读记录](qwen-image-edit-2509-community-20261028.md)，小小将的[2509 解读和体验](https://www.zhihu.com/question/1953778960635766000/answer/1953806844695929705)当时 49 赞、75 收藏，讨论多图拼接、单图一致性与条件控制；对应官方模型卡核对，少量线上展示不代表全面评测。本次未重读或更新互动量。
