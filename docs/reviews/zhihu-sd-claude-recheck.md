# Stable Diffusion 与初代 Claude：知乎站内补查

核查日期：2026-10-28。使用已有登录状态的 Chrome 独立标签检索并阅读页面；本次可以访问知乎，先前通过其他访问方式遇到的 403 不代表本次结果。互动数是查看时快照，不能证明文章的技术结论正确。

- 搜索 `Stable Diffusion 1.4 原理` 后阅读[珍妮的选择：Stable Diffusion 原理介绍与源码分析（一）](https://zhuanlan.zhihu.com/p/613337342)，显示 964 赞同、1563 收藏。文章对潜空间、文本编码、U-Net、训练与采样分开解释，适合理解早期 SD 共同数据流；评论中记录作者修正了早先关于加噪的笔误。但正文未明确所分析的具体检查点是 v1-4，不能用它核实 v1-4 专有的继续训练步数或条件丢弃比例；版本细节仍以 [v1-4 官方模型卡](https://huggingface.co/CompVis/stable-diffusion-v1-4)为准。暂不将其记为 v1-4 精确版本交叉验证。
- 搜索 `Claude Constitutional AI 2023` 后阅读[万理的探求者：Claude 技术思想史](https://zhuanlan.zhihu.com/p/2092983962981478819)，页面显示 1 赞同、收藏数量未显示。文章讨论初代 Claude 的发布时间和公开边界，并解释 Constitutional AI 的监督和 AI 偏好阶段；它是跨代技术史，不是初代模型架构或完整训练配方的公开报告。对于人类／AI 反馈组合，以 [Constitutional AI 论文](https://arxiv.org/abs/2212.08073)为准；首代发布与功能以 [官方介绍](https://www.anthropic.com/news/introducing-claude)为准。由于收藏数不可见，不把这篇记为互动信息完整的精确型号参考。

第一次补查将 Stable Diffusion 文章作为共同流程的延伸阅读加入正文，明确提示其检查点未确认；Claude 候选未加入正文。之后找到针对 v1-4 的入门文章，范围如下。

## v1-4 检查点补充

2026-10-28 使用已登录知乎检索 `stable diffusion v1-4 原理`，阅读[卓不凡：2024不可不会的 StableDiffusion（一）](https://zhuanlan.zhihu.com/p/680080582)：页面显示 **4 赞同、23 收藏**。文章明确下载 `CompVis/stable-diffusion-v1-4`，以 Diffusers 加载权重并对文字提示生成图像；这与 [v1-4 官方模型卡](https://huggingface.co/CompVis/stable-diffusion-v1-4)列出的检查点一致。它是一篇简短的低互动运行入门，不包含足以核验模型内部结构、训练或评测的细节；文中安装和本地环境操作也需要结合当前官方文档调整。已作为该版本使用示例加入正文，不能据此声称完成完整技术交叉验证。
