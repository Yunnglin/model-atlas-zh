# 数据质量与切分审阅

审阅日期：2026-10-29。通读 `src/content/docs/training/data-quality.md`，对照分组切分文档、去重研究、DeepSeek LLM 报告和教学图；未实际训练或运行数据切分。

## 原理与资料

- [GroupShuffleSplit 官方文档](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupShuffleSplit.html)按组划分，每次切分的组间不交叉；多次独立切分产生的测试折可能互相重叠，比例指组数而非样本数。本次补充先留测试组、再从剩余组切验证组及保存名单的例子。
- [去重论文](https://arxiv.org/abs/2107.06499)讨论近重复、训练验证集重叠与记忆；去重不保证所有来源或语义泄漏都被检测。按说话人、会话或时间切分要与目标人群对应。

## 例子与评测

- 100 人中的 80／10／10 是人数比例，不等于录音条数比例；同一个电话的多个片段跨集合可能高估面向新会话的效果。业务与错例流程是教学构造。
- [DeepSeek LLM 报告表 13](https://arxiv.org/html/2401.02954)：7B Chat 增加 2000 万中文选择题，C-Eval 47.0→71.3、CMMLU 49.7→73.8、TriviaQA 57.9→57.9、内部 ChineseQA 75.0→74.4；论文称针对 C-Eval 验证集和 CMMLU 测试集去重。多项改变与不同任务格式不能推为因果普遍结论。

## 配图

- `public/figures/training/data-quality.svg` 为 CC BY 4.0 原创教学图；示意按说话人分组、开发数据改进和独立测试，许可见 `public/figures/LICENSE-TEACHING.txt`。
- Chromium 打开本机 `/training/data-quality/`，图成功解码、替代文本存在；截图检查箭头、分组和最终评估文字。

## 社区

- 2026-10-29 主审通过已登录 Chrome 阅读 zihui 的 [RETRO 论文解读](https://zhuanlan.zhihu.com/p/720738464)，当时 1 赞同、2 收藏；互动量较少，仅作为辅助资料。文章介绍用 MinHash 比较训练文档与验证、测试文档，去掉高度相似的训练文档；还提到从维基训练语料中删除 WikiText-103 验证和测试文章，以及避免检索同文档近邻造成的信息泄漏。
- 对照 [RETRO 原论文第 2.2 节](https://proceedings.mlr.press/v162/borgeaud22a/borgeaud22a.pdf)：相似度依据 13-gram 的 Jaccard 相似度，阈值为 0.8；训练文档的移除规则以及 WikiText-103 处理与文章描述相符。这个阈值是该实验条件，不证明其他数据的最佳阈值，也不能证明完全无污染。
- 正文补充了 RETRO 近重复过滤的具体案例与局限；未运行去重工具。赞藏为阅读时快照。

后续补充：[去重案例补充核查](data-quality-bigcode-dedup-followup-20261029.md)。
