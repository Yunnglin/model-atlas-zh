# GLM-Image 中文资料交叉核查

2026-10-28 在已登录知乎实读 [Rocky Ding：深入浅出完整解析 FLUX.2、Seedream、Z-image、Qwen-Image、GLM-Image](https://zhuanlan.zhihu.com/p/1975174691049189562) 的第 5 节。页面显示 95 赞同、265 收藏，互动数字为查看时快照。文章已有入口，未重复添加。

- 作者将 GLM-Image 拆为 9B 自回归生成器和 7B 扩散解码器，并介绍参考图编辑时提供语义 token 与 VAE 特征两种条件；与[官方技术介绍](https://www.zhipuai.cn/en/glmImage)和[官方模型卡](https://huggingface.co/zai-org/GLM-Image)的结构相符。论文式解释适合帮助读者理解两部分分工。
- 作者称扩散模块无需直接接收 prompt；同时[官方模型卡](https://huggingface.co/zai-org/GLM-Image)明确该解码器带 Glyph Encoder。应区分一般文本提示与用于图中文字的字形条件，不将其概括成“扩散模块没有文字相关输入”。
- 文章还出现对 GRPO 在所有图像模型中最优、固定减少内存与提速比例等宽泛说法，未见同等实验设置或一手证据支持，因此未采用；它的相关公式不用于替代论文原文。
- 已在正文把扩散解码器的字形条件与自回归语义表示分开说明。本轮没有运行模型或独立复现作者图片。
