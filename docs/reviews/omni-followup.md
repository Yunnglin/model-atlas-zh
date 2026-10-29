# GLM-V、OmniJev 与 Qwen3Guard 审校记录

核对日期：2026-10-27。审校范围是以下所列结构、算例和评测口径；并非逐句核验，也未运行模型。

- GLM-4V-9B：对照 [CogVLM2 论文](https://arxiv.org/html/2408.16500)、[配置](https://huggingface.co/zai-org/glm-4v-9b/blob/main/config.json)与[视觉实现](https://huggingface.co/zai-org/glm-4v-9b/blob/main/visual.py)。确认 13B 整体口径、图像数据和两阶段 SFT；新增 1120／14、2×2 下采样和图片起止标记的长度算例。配图是简化示意，省略了编码器与连接器内部。
- OmniJev：对照 [v1.1 项目仓库](https://github.com/tinnel123666888/OmniJev) 的版本、模型、校准表及评测限制；新增 2B choice 校准切片，说明 ECE 并非校准后必然改善。图中外部执行是教学流程，不是项目已经证明可实现可靠在线闭环。
- Qwen3Guard：对照 [技术报告](https://arxiv.org/abs/2510.14276)和[评测说明](https://github.com/QwenLM/Qwen3Guard/blob/main/eval/README.md)，确认 Gen／Stream 及风险起点检测口径；补充 569 条 `thinking_loc` 和 813 条 `response_loc` 的范围说明。简图省略了具体分类头和缓存机制。
- 知乎：已补读[像风一样的多模态结构笔记](https://zhuanlan.zhihu.com/p/702587252)，查看时 3 赞同、6 收藏。文中列出 GLM-4V 的图像尺寸、图块和下采样步骤，可作为查找实现的线索；文章还覆盖其他模型，具体版本和参数仍以官方配置与代码为准。Qwen3Guard 和 OmniJev 暂未找到可确认的对应知乎技术详解，仍需继续检索。
