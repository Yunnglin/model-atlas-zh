# GPT-5 深度审校记录

审校日期：2026-10-29。对象为 2025 年 8 月发布的 GPT-5 模型系列和 ChatGPT 系统；未调用模型或复现评测。

- **结构与产品系统：已核对。** [发布说明](https://openai.com/index/introducing-gpt-5/)及[系统卡](https://openai.com/index/gpt-5-system-card/)区分快速模型、thinking 模型和实时路由器；模型内部层数、专家结构与视觉融合方式未由这些资料完整披露。正文区分 ChatGPT 路由和 API 直接选模型。
- **训练：已核对并补充。** 系统卡明确说 thinking、thinking-mini、thinking-nano 使用强化学习训练推理能力；还介绍 safe-completions、降低讨好和面对无法完成任务时的训练。正文增加直观解释与例子，没有指定官方未披露的 RL 算法或完整奖励函数。
- **评测：已核对。** [开发者发布说明](https://openai.com/index/introducing-gpt-5-for-developers/)中的 AIME 2025、SWE-bench Verified 和 MMMU 数值及条件与正文一致；SWE-bench 的 477 个任务子集和提示条件已注明。事实错误相对下降 45% 有搜索和提示样本条件，不是绝对错误率。
- **配图：已检查。** 原创 SVG 是产品路径示意，并非官方内部架构图；审阅源文件及本地浏览器渲染，路由、两条路径和可选工具循环可辨认，标注其边界。
- **社区证据：沿用已登录实读记录。** [toyama nao 评测](https://www.zhihu.com/question/1936601885311239615/answer/1937114915686036189)的阅读记录见 [GPT-5 页面审校记录](./gpt5-independent.md)：2026-10-28 查阅时 294 赞同、63 收藏，作者记录长文本统计遗漏。互动数会变化；本次未重新读取知乎文章或确认当前数量。社区结果不是官方基准。
- **验证：** 运行内容单元测试 7 项通过，Prettier 检查通过，`git diff --check` 无错误；未验证实际模型运行、评测复现或当前产品可用性。
