# MiniMax-M1 内容核对

2026-10-28 核对 [MiniMax-M1 论文](https://arxiv.org/html/2506.13585) 1、2、3、6 节与表 1、2，以及 [80K 模型卡](https://huggingface.co/MiniMaxAI/MiniMax-M1-80k)和 [config.json](https://huggingface.co/MiniMaxAI/MiniMax-M1-80k/blob/main/config.json)。总参数 456B、每 token 激活 45.9B、七层 Lightning 加一层 Softmax 来自论文；80 层、32 专家与每 token 选 2 个来自配置。论文的 100K token、25% 是 FLOPs 估算，不当成实测速度。

社区参考：[平凡对 MiniMax-M1 的知乎回答](https://www.zhihu.com/question/1918348812491141733/answer/1918359373564056118)，实际阅读日期 2026-10-28，页面 222 赞、356 收藏。文中用七层加一层及 CISPO 说明模型路线，可供理解；其中对线性注意力直接用矩阵乘法交换顺序的讲法，不能等同于普通 softmax 注意力的精确变换。回答中的速度与训练成本泛化较强，本文只采用论文给出的具体比较条件。

未实际运行模型、重现评测或核对所有长期服务变更。教学图由项目绘制，不是论文原图；版权为 CC BY 4.0。知乎材料的赞藏为查看时快照。
