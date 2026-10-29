# Qwen2.5-Math-PRM：评测数字复核

- 正文：`src/content/docs/nlp/qwen25-math-prm-model.md`
- 核对范围：正文中官方 Best-of-8、ProcessBench 及教学计算；仅是数字与协议复核，不代表独立复现实验。
- [论文表 6、7 和 13](https://arxiv.org/html/2501.07301)：Qwen2.5-Math-7B-Instruct 生成八条，7B PRM 的步骤分数乘积排序；七项任务平均多数投票 66.2、PRM 67.6、pass@8 74.7。ProcessBench GSM8K 的 7B PRM 为 72.0／96.4／82.4，72B RM 为 41.1／46.1／43.5，分别是错误解答定位、正确解答识别和 F1。
- 教学示例 0.9×0.8=0.72、0.4×0.8=0.32 正确并已标明是假设。未发现需修改的数字。
