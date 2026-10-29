# BERT 结构与模型卡审阅

审阅日期：2026-10-29。审阅对象为 `src/content/docs/nlp/bert.md` 的原始 BERT Base／Large 模型卡、结构与数据流、任务头说明，以及全文中对结构的相关表述。

- [原论文第 3 节](https://arxiv.org/html/1810.04805#S3)：双向 Transformer 编码器；Base 为 12 层、768 隐藏宽度、12 头、110M 参数，Large 为 24 层、1024 宽度、16 头、340M；前馈中间宽度分别为 3072、4096。正文补充区分中间宽度与隐藏宽度。
- 同节输入表示和图 2：WordPiece、`[CLS]`、`[SEP]`、词元／句段／位置嵌入相加；句段可以是连续文本片段，不限于一个自然句。正文中的句子是教学例子。
- [论文 GLUE、SQuAD 与 NER 章节](https://arxiv.org/html/1810.04805#S4)：句级分类使用 `[CLS]` 表示，抽取问答预测起止，NER 使用词位置表示；具体任务还需要对应任务头与标注方案。正文没有把这些任务头说成原始模型自动完成的功能。
- [官方仓库](https://github.com/google-research/bert)和配置文件：[Base](https://huggingface.co/google-bert/bert-base-uncased/blob/main/config.json)、[Large](https://huggingface.co/google-bert/bert-large-uncased/blob/main/config.json)：核对规格、512 位置、代码及权重开放；英文模型与中文、多语言权重分别使用各自词表。
- 结构部分的中文例句属于演示，不声称是实际推理输出。与 GPT-2 的对比仅限注意力可见范围、常用目标和典型用途。

结论：结构维度按台账标准完成；训练、评测、配图和社区维度另行审阅。本次没有运行模型。
