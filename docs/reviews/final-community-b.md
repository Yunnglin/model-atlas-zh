# 社区资料复核：四个模型

核对日期：2026-10-28。点赞和收藏是查看时的页面显示，可能变化，也不能代替事实核验。

- **Stable Diffusion v1-4**：[文生图模型之 Stable Diffusion](https://zhuanlan.zhihu.com/p/617134893)，小小将，1928 赞、3087 收藏。图解潜空间、文本编码器、U-Net、训练和采样，适合辅助理解共同结构；文章明确以 v1.5 为主，不能把其训练细节直接套到 v1-4。与 [v1-4 模型卡](https://huggingface.co/CompVis/stable-diffusion-v1-4)和[潜扩散论文](https://arxiv.org/abs/2112.10752)对照后，已将其作为标明版本范围的延伸阅读加入正文。注意文章的示例训练循环显示了计算损失和更新，但没有看到反向传播调用，不宜直接复制当成可运行训练脚本。
- **Claude 初代**：检索 Constitutional AI 和 Claude 早期技术材料，未找到既对准初代、又有可靠互动数据和足够技术细节的知乎文章；没有为凑数加入后代 Claude 文章。[首代发布](https://www.anthropic.com/news/introducing-claude)、[2023 年原则说明](https://www.anthropic.com/news/claudes-constitution)和[研究论文](https://arxiv.org/abs/2212.08073)保留为正文依据。论文研究方法和 Claude 生产训练细节不应画等号。
- **DeepSeek-V3.2 正式版**：[Deepseek 是如何将稀疏注意力 DSA 落地到生产模型的](https://zhuanlan.zhihu.com/p/2078529294188409613)，marsggbo，3 赞、6 收藏；互动量低，但全文直接依据正式版技术报告，以小例子解释索引和两阶段训练，且指出索引开销和性能不能完全归因于 DSA。与[正式版技术报告](https://arxiv.org/abs/2512.02556)和[官方发布](https://api-docs.deepseek.com/news/news251201/)对照后，作为限于 DSA 的中文延伸阅读加入正文，不能用它取代正式版报告。已有 V3.2-Exp 文章的适用版本不同。
- **MiniMax M2.7**：[302.AI 测评](https://zhuanlan.zhihu.com/p/2018038826556204239)页面显示 0 赞、2 收藏，列出 29 道题和单次生成方法，也给出部分案例及失败；作者是模型服务商，样本少，评分含主观判断，文中把超过 100 轮脚手架优化泛化为模型处理复杂任务的能力，不宜作为架构或训练事实。官方[发布介绍](https://www.minimax.io/news/minimax-m27-en)将这一结果限定在内部脚手架与内部评测集。正文保留已有跨模型综述的范围提醒和官方来源，不新增此文。
