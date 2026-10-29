# Qwen-Image-Edit-2511 专项审校

审校日期：2026-10-29。完整通读 [2511 正文](../../src/content/docs/cv/qwen-image-edit-2511-model.md)，区分初代、2509 与 2511；未运行模型、训练或复现图像评测。合照和商品例子为教学构造。

- **结构**：对照[模型卡](https://huggingface.co/Qwen/Qwen-Image-Edit-2511)、[初代编辑介绍](https://qwenlm.github.io/blog/qwen-image-edit/)和 [Diffusers 固定版本](https://github.com/huggingface/diffusers/blob/c60830ee365d520ab52b110dda562dd26f7b4d7f/src/diffusers/pipelines/qwenimage/pipeline_qwenimage_edit_plus.py)，核对图文编码、VAE、图像 Transformer、潜变量拼接与解码的推理路径；初代原理与 2511 未公开的完整训练结构分开。官方示例的两张参考图、种子 0、40 步、true CFG 4.0 与空格负向提示已核实；本次补充同一代码版本的正负分支都保留参考图、缺负向提示不启用 CFG 的细节。
- **训练**：模型卡核对基于 2509、改善人物一致性、融合部分社区 LoRA 等公开描述；[2509 模型卡](https://huggingface.co/Qwen/Qwen-Image-Edit-2509)的图像拼接训练与初代 Qwen-Image 论文是家族背景，不推断 2511 完整数据、LoRA 合并方法或优化配方。
- **评测**：[GenArena 项目](https://genarena.github.io/) 2026 年 1 月快照核对 2509/2511 的基础编辑 Elo 1020/1065、推理编辑 962/1005、多参考 705/793；裁判是 Qwen3-VL-32B Instruct FP8，Elo 为成对比较聚合，不是人工投票或准确率。官方卡的示范不是可复现基准表；多次采样与身份验证建议是教学方案。
- **配图**：检查[图示登记](../../src/content/data/figures.yaml)、[原创示意图](../../public/figures/qwen-image-edit-2511/overview.svg)和[固定版本推理流程图](../../public/figures/qwen-image-edit-plus/inference.svg)，分别标明任务流程与代码所示双路径，均为 CC BY 4.0 教学图；Chromium 打开本地正文、滚动解码两图，宽 1200，替代文本存在；截图检查文字和箭头。
- **社区**：沿用[2026-10-28 实读记录](qwen-image-edit-community-20261028.md)，千问大模型的 [2511 发布介绍](https://zhuanlan.zhihu.com/p/1987558876170716602)当时 22 赞、35 收藏，说明人物一致性、漂移及部分社区 LoRA，已对照官方模型卡；其为发布方，展示不是独立评测。三层楼的小肥猴的 [工作流记录](https://zhuanlan.zhihu.com/p/2050944621929293493)当时 5 赞、16 收藏，涉及多图漏接 VAE 与加载外部 LoRA 的排错；因同时改动多个条件，不当作单个因素的效果证明。本次未重读文章或更新互动数。
