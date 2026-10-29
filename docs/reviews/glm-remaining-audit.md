# GLM 原始模型、ASR 与 OCR 重点审校

核对日期：2026-10-27。本轮阅读三篇正文的模型卡、结构、训练、评测和案例，核对以下具体事实并检查三张教学 SVG 的标题、说明、节点及连接；这不是对每句话或全部图形细节的逐项核验。例子是教学构造，未执行训练、模型推理或评测。

- **原始 GLM**：对照[论文第 2–3 节及附录](https://arxiv.org/html/2103.10360)，核对 Part A／B 注意力、空白乱序、二维位置和 512 上下文。论文称 Base 和 Large 分别为 110M、340M，已将 Large 的 335M 改为约 340M；补充短片段及文档级的遮盖比例。SuperGLUE 对照结果 66.1／70.7 属于论文报告的不同下游适配方案，已注明不能只把差距归因于掩码。图是单空填充简图，并非完整训练结构图。
- **GLM-ASR-Nano-2512**：对照[官方仓库](https://github.com/zai-org/GLM-ASR)、[模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512)、处理器配置和 [Transformers 实现](https://github.com/huggingface/transformers/blob/main/src/transformers/models/glmasr/modeling_glmasr.py)，核对 Whisper 编码器、投影器、Llama 解码器、16 kHz 与 30 秒特征块。17 种语言的表述来自官方仓库，非当前模型卡正文，已更正来源。原图将音频和转写提示放在同一输入框，箭头可能误示文本也经过 Log-Mel；已重画文本提示直达解码器的独立路径，更新替代文本与资产哈希，并检查截图。
- **GLM-OCR**：对照[技术报告](https://arxiv.org/html/2603.10910)第 2–3 节、[官方模型卡](https://huggingface.co/zai-org/GLM-OCR)和[仓库](https://github.com/zai-org/GLM-OCR)，核对 0.4B CogViT、0.5B 语言解码器、四阶段及版面裁剪与整页字段提取的两条路径。补充论文中的 MTP 训练目标、每步平均输出及吞吐结论的条件限制；在 OmniDocBench 综合分之外列出文字编辑距离和表格 TEDS，避免将综合分当字符准确率。图只解释系统路径，不暗示所有调用都需版面裁剪。

此前 GLM 与 ASR 的知乎正文及动态互动数见 [知乎筛选记录](zhihu-reading.md)，OCR 文章链接在正文；本轮未重读全部社区文章，也未逐项复核社区观点。论文、模型卡和实现用于技术事实核对，访问时间与版本变化可能影响后续使用。
