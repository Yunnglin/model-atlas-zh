# Qwen-Image-2.1 专项复核

核对日期：2026-10-28。核对以下模型卡、官方仓库和许可原文中的架构、功能及已公开事实；未运行模型或复现官方评测，未对未公开训练数据作推测。

- **型号与任务**：[官方模型卡](https://huggingface.co/Qwen/Qwen-Image-2.1)将约 7B、32 层明确限定为图像生成组件，列出文生图、编辑、RGBA 透明图与最多 10 张参考图。对照[官方仓库架构说明](https://github.com/QwenLM/Qwen-Image-2.1#architecture)，条件编码器为 Qwen3-VL-8B，VAE 为 64 通道与 16 倍空间压缩；正文未把 7B 写成整个系统参数量。
- **注意力与实现**：官方仓库描述文本按 token 因果、图像块内部双向及前缀 KV 复用；正文增加一个可见范围的简化解释。官方仓库介绍配置及使用入口，而实际参考图 VAE 编码等实现可查其推荐的 [Diffusers 管线](https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/qwenimage21/pipeline_qwenimage21.py)；为避免暗示官方仓库包含全部推理实现，正文分别列出两者。该管线会更新，部署应核对使用版本。
- **训练与评测**：模型卡与仓库未公开完整训练数据和逐阶段配方；正文的训练和业务评测是教学方案，不是模型训练复现。发布说明的评测展示不能与不同数据和配置的榜单直接混排；本轮未独立复现指标。
- **许可**：[Qwen Research License](https://huggingface.co/Qwen/Qwen-Image-2.1/blob/main/LICENSE)定义非商业用途为研究或评估，并要求商业用途另行获得许可；正文已提示开放权重不等于默认可商用，实际使用应阅读完整条款与其他依赖许可。
- **配图**：[原创教学图](../../public/figures/qwen-image21/overview.svg)展示文字与参考图条件、参考图 VAE 编码、DiT 和 VAE 解码；图明确注明是简化流程，其 CC BY 4.0 是图本身的许可，不能替代模型权重许可。SVG XML 解析通过；本轮未做设备视觉测试。

## 社区参考范围

[既有知乎核验](qwen-image21-community.md)记录官方账号介绍当时 145 赞、收藏数未显示；另一篇为 0 赞、收藏数未显示。本轮没有重新核验原页面或互动数据。两篇只作阅读线索，模型架构与许可依官方模型卡、仓库及许可原文。
