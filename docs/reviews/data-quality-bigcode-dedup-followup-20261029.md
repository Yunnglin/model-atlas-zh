# 数据质量：BigCode 去重流程补充核查（2026-10-29）

核对 [Chenghao Mou 的 BigCode 去重实践](https://huggingface.co/blog/zh/dedup)：该文由项目参与者介绍 MinHash、LSH 候选生成、计算实际 n-gram Jaccard 和连通分组，并指出相似关系不满足传递性。正文新增候选对、漏检与误检，以及 A—B—C 连接成组的教学例子；0.6 和 0.33 是示例，不是项目报告的测试结果。具体流程与阈值按各自数据设置。

对照 [Deduplicating Training Data Makes Language Models Better](https://arxiv.org/html/2107.06499) 第 4 节：其 ExactSubstr 找连续重复片段，NearDup 用 MinHash 识别文档近重复；两者的去重粒度不同。BigCode 作者文章是独立工程经验，不能推断为本项目执行过该流程。

本次用知乎检索发现 [冯龙宇的论文翻译](https://www.zhihu.com/en/article/494424051)；网页检索可见其译文和“无赞”提示，但导航到原始知乎页面时浏览器操作超时，收藏数不可见。检索摘录疑似将原论文的 1.5B 参数转写为 15B，不能据此采信数字。它仅是候选线索，未计为本次已登录原页实读或作为新增正文参考；未获取确切赞藏数据。

本次未运行去重或复现论文实验；原知乎 RETRO 参考与其历史实读记录保持不变。
