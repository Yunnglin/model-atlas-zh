---
title: 视觉评测：分类、分割与生成
atlas:
  id: vision-metrics
  kind: metric
  modality: cv
  purpose: 区分识别准确、边界准确与生成质量
  summary: 用任务区分准确率、AP、IoU、FID、检索与条件满足。
  question: 图片相关的模型，为什么不能共用一个分数？
  sources:
    - coco-paper
    - sam-paper
    - fid-paper
    - clip-paper
  aliases:
    - IoU
    - AP
    - FID
    - Recall@K
    - 图像评测
  facets:
    - evaluation
    - application
---

## 用大白话理解

分类问“这是什么”，检测还要问“在哪里”，分割要给出像素范围，生成要检查“画得怎样、是否符合要求”。分数先对准问题，再谈比较。

## 常见指标怎样看

| 任务     | 常见信号                | 容易漏掉的问题                 |
| -------- | ----------------------- | ------------------------------ |
| 分类     | 准确率、每类 F1         | 少数类别和业务代价             |
| 检测     | AP，含不同 IoU 阈值     | 小目标、重复框、误报           |
| 分割     | IoU、边界质量           | 细小结构和提示难度             |
| 图文检索 | Recall@K                | 候选集、同义描述、属性组合     |
| 图像生成 | FID、条件匹配、人工检查 | 数量、空间关系、文字与单张失败 |

<details>
<summary>想深入：IoU 的直观例子</summary>

$$
\mathrm{IoU}=\frac{|A\cap B|}{|A\cup B|}
$$

$A$ 是预测区域，$B$ 是人工区域。重合面积为 40、并集面积为 50，IoU 就是 0.8。这是算式例子，不是模型实测。

</details>

## 生成与检索的限制

FID 比较生成集合与参考集合的特征统计，通常在相同协议下越低越好；参考集、特征提取器和样本量都要一致。CLIP 相似度也不能证明对象数量和每个局部属性都满足要求。

## 排错与面试

[SAM](/cv/sam/)要看提示与边界，[CLIP](/cv/clip/)要看配对和候选，[Stable Diffusion](/cv/stable-diffusion/)要固定采样并统计失败。用逐样本结果定位错误，再构造独立回归集。

**为什么漂亮样图不能代替测试？** 展示者可以挑成功结果，无法说明整体失败率和条件覆盖。

## 参考资料

- [Microsoft COCO: Common Objects in Context](https://arxiv.org/abs/1405.0312)
- [Segment Anything](https://arxiv.org/abs/2304.02643)
- [GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium](https://arxiv.org/abs/1706.08500)
- [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020)

资料核对：2026-10-26。文中的业务情境为教学例子；排错和对照实验是建议方案，不代表本站已经运行得到的结果。
