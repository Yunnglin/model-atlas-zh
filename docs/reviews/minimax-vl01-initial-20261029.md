# MiniMax-VL-01 新增内容和初始审校（2026-10-29）

对象是 2025 年 1 月的 MiniMax-VL-01，正文 [minimax-vl01-model.md](../../src/content/docs/omni/minimax-vl01-model.md)，教学图 [overview.svg](../../public/figures/minimax-vl01/overview.svg)。未执行模型、训练或复现评测。

- **结构**：对照[官方模型卡](https://huggingface.co/MiniMaxAI/MiniMax-VL-01)和[技术报告 v1 第 6.2 节](https://arxiv.org/html/2501.08313v1)，核对 303M ViT、两层投影、Text-01 骨干及 336–2016 动态网格与缩略图。正文的 672×672 拆块与 24×24 patch 为解释算例，区分两级图块；图为原创示意，省略内部层次。
- **训练**：对照报告第 6.2.2 与 6.3 节，核对视觉编码器对比/交叉熵训练，四阶段的 80B、420B、44.8B token 和 40k 图文偏好对，以及 DPO 提前停止。处理过的训练对数不等于独立数据集样本数；账单场景为教学构造。
- **评测**：对照报告表 13，核对 MMMU val+dev 68.5、DocVQA 96.4、OCRBench 865、MathVista testmini 68.6、MMLongBench-Doc 32.5 和单页/跨页 47.3/28.4。星号任务为 zero-shot CoT；OCRBench 非百分率，文中 100/85/72 为虚构示例。
- **知乎**：2026-10-29 在登录浏览器实读[文森特·凡喵的 MiniMax-01 系列解读](https://www.zhihu.com/question/9844937887/answer/81450948522)，页面显示 166 赞、149 收藏。作者区分 Text-01 与 VL-01，描述每八层含七层 Lightning 与一层 softmax；与报告第 2.2.3 节及 6.2 节交叉核对。文章关于 4M 长度与榜单为当时系列概述，不能当作 VL-01 图像任务的独立实测；具体训练和评测依原报告。
- **配图**：检查 SVG 元素与箭头方向、XML 合法；为模型图集提供原创 CC BY 4.0 教学图，尚需共享登记、网页渲染与移动端检查。正文和图的格式、`git diff --check` 已通过。

资料引用采用论文和官方卡；本文保留可追溯的定向核查，未声称全模型训练/推理复现或完成每个版本的评测。

2026-10-29 桌面浏览器直接渲染本地 SVG，图中文字与箭头显示正常；尚未单独完成手机屏幕与正文页的视觉检查。
