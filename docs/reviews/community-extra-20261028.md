# 社区资料补充核对

阅读日期：2026-10-28。点赞和收藏数是当时的快照。

- [大模型量化技术：GGUF、GPTQ、AWQ](https://zhuanlan.zhihu.com/p/1899107168172630461)，作者绝密伏击，439 赞、1254 收藏。可参考校准数据与通道缩放的说明；[AWQ 论文](https://arxiv.org/abs/2306.00978)中的 TinyChat 按需反量化权重，不能推广成 GPU 推理无需反量化。[GGUF 文档](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md)将 GGUF 定义为文件格式。
- [AI Infra 源码入门：大模型是如何高效推理的](https://zhuanlan.zhihu.com/p/2042276135682192774)，腾讯技术工程发布，署名 binnnliu，224 赞、711 收藏。文章从 Llama 3 的张量形状讲解推理，分页缓存的核心动机对照 [PagedAttention 论文](https://arxiv.org/abs/2309.06180)；吞吐表现与具体调度实现依赖环境和版本。

用户推荐的 Jev 文章同由腾讯技术工程发布，署名 leon jia，与第二篇不是同一作者。该文关于未公开结构的推测不能作为已披露事实。
