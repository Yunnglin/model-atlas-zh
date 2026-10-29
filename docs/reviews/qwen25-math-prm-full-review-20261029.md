# Qwen2.5-Math-PRM 全维度审阅

审阅日期：2026-10-29。时间线 ID `qwen25-math-prm`，通读 `src/content/docs/nlp/qwen25-math-prm-model.md`，核对官方报告 v1、模型卡、评分代码、配图与已有社区实读记录；未实际运行模型或复现评测。

## 结构与模型卡

- [论文 v1 第 4.1 节](https://arxiv.org/html/2501.07301v1)及 [7B 模型卡](https://huggingface.co/Qwen/Qwen2.5-Math-PRM-7B)：7B／72B 由各自的 Qwen2.5-Math-Instruct 初始化，按步骤分隔位置输出正负类别评分；两个模型卡标注 Qwen 许可。评分模型不独立负责生成答案。
- [官方评分实现](https://huggingface.co/Qwen/Qwen2.5-Math-PRM-7B/blob/main/modeling_qwen2_rm.py)与模型卡示例分别展示两层线性变换、ReLU、二分类头和 `<extra_0>` 边界取分。商品打折、分数相乘及本次补充的不同切分粒度比较为教学例子。

## 训练

- 报告 4.1 节：Monte Carlo 续写 8 次，均错标负、有正确续写标正；使用 Qwen2.5-72B-Instruct 逐步判断并过滤标签不一致的实例，在步骤结束 token 上训练二分类交叉熵。后续成功机会不等于当前步骤逻辑正确，正文通过示例区分。

## 评测与应用

- 报告表 6：Qwen2.5-Math-7B-Instruct 生成 8 个候选、步骤分数乘积排序；七项平均 maj@8 66.2、7B PRM 67.6、pass@8 上界 74.7。pass@8 使用正确答案判断是否存在正确候选，不能当成可直接达到的选择结果。
- 表 7 的 ProcessBench GSM8K：7B PRM 错误／正确／F1 为 72.0／96.4／82.4，72B Math-RM 为 41.1／46.1／43.5；后者逐步截取前缀评分。独立题、人工复核与数据改进均为教学流程。
- 本次增加 0.9²=0.81 与 0.9⁵≈0.59 的例子，说明步数与切分方式如何影响分数乘积，并不将乘积当校准概率。

## 配图

- `src/content/data/figures.yaml` 登记原创教学图 `qwen25-math-prm/overview.svg`，依据论文、使用 CC BY 4.0；正文另有 `training/math-reward-heads.svg` 对比 PRM 和 RM 取分位置，教学图许可见 `docs/assets.md`。
- Chromium 打开本机 `/nlp/qwen25-math-prm-model/`，两张图均解码成功、替代文本存在；截图检查流程、取分位置及箭头。

## 社区

- [tomsheep：Qwen2.5-Math-PRM 论文解读](https://zhuanlan.zhihu.com/p/18389486329) 于 2026-10-28 已登录实读时 165 赞、317 收藏，见 [数学奖励模型社区核查](qwen-math-rm-community-logged-in.md)。文章覆盖 MC 标注与 ProcessBench；伪代码仅供学习，续写成功与步骤逻辑正确按论文区分。未复制社区图文。
