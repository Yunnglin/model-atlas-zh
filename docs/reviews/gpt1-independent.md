# 初代 GPT 内容复核

核验日期：2026-10-28。页面讲解 2018 年论文中的预训练及监督任务微调，未实际执行模型或复现论文成绩。

- [OpenAI 论文](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) §3：自回归预训练；有监督任务使用文本转换及额外线性输出层；论文另外讨论微调时增加辅助语言模型目标，不等同于必需步骤。
- 论文 §4.1：12 层、768 隐藏维、12 头、3,072 前馈内部维度；预训练连续序列为 512 token，100 epoch。约 117M 参数为 [OpenAI GPT 模型卡](https://huggingface.co/openai-community/openai-gpt)与广泛使用的实现口径，具体参数总数依任务头而变。
- [OpenAI 2018-06-11 发布说明](https://openai.com/index/language-unsupervised/)及论文表 2、3：MultiNLI matched 82.1 对 80.6、RACE 59.0 对 53.3；RTE 56.0 低于 61.7，MRPC 82.3 低于 86.0。指标为论文对应数据集设置下的数值。
- [官方代码与模型仓库](https://github.com/openai/finetune-transformer-lm)公开并标示 MIT，实际数据和依赖许可需另行查看；正文不声称训练数据可以无条件再分发。
- 已登录知乎阅读[中森《GPT 系列论文阅读笔记》](https://zhuanlan.zhihu.com/p/412351920)，页面显示编辑于 2022-02-08、247 赞同、385 收藏（查阅时）。文章按预训练、微调和任务输入解释，适合辅助理解；它对历史影响的部分论断属于作者观点，本文以论文事实为准。
- 配图为原创两阶段教学示意，省略辅助目标、输入转换细节；案例均为构造，没有实测。

未修改共享时间线、来源或配图注册；未验证当前训练框架的原始代码兼容性、数据获取权限或复现精度。
