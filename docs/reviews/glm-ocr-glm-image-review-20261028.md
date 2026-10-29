# GLM-OCR 与 GLM-Image 重点核查

日期：2026-10-28。核查公开资料、正文和两张教学图，并没有运行模型，也没有重读既有知乎文章。

- GLM-OCR：对照[技术报告第 2 节与表 4](https://arxiv.org/html/2603.10910)和[官方配置](https://huggingface.co/zai-org/GLM-OCR/blob/main/config.json)，补充编码器／解码器层数、维度和查询／键值头，核对 MTP、版面解析与字段抽取的两条路径。增加同表 PaddleOCR-VL-1.5 与 GLM-OCR 的文字编辑距离和表格 TEDS 对照。配置中的最大位置数不是所有平台可用输入长度的实测。
- GLM-Image：对照[官方模型卡](https://huggingface.co/zai-org/GLM-Image)中的架构说明和[官方结构图](https://raw.githubusercontent.com/zai-org/GLM-Image/main/resources/architecture_1.jpeg)。原教学图省略参考图直接进入扩散侧的视觉条件，容易让人以为图像编辑只通过自回归阶段使用参考图；本轮补充该分支并渲染检查。文字和图保留简化，未展示所有编码与投影细节。
- 评测与使用：核对 GLM-Image 模型卡的 CVTG-2K 及 DPG-Bench 分数，补充官方示例分辨率、采样步数、种子和采样配置；它们是公开示例，不是本项目实测结果。
- 尚未验证：两篇文章全部外部引用的持续可访问性、实际硬件推理和完整模型源码中的所有细节；本轮未重新实读两篇所引用的知乎材料。
