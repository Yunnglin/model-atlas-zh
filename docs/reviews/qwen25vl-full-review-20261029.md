# Qwen2.5-VL 全维度审阅

审阅日期：2026-10-29。范围为 `src/content/docs/omni/qwen-vl.md`，限原报告的 3B、7B、72B 规格；未执行模型或复现基准。

## 结构与模型卡

- [技术报告 v1 第 2 节与表 1](https://arxiv.org/html/2502.13923v1)：32 层 ViT、14×14 patch、112 像素窗口，0 基全注意力层 7、15、23、31；2×2 合并后接两层 MLP，与 Qwen2.5 语言模型连接。840×560 静态图按正文算式得到 2400 patch 和 600 个合并后的视觉 token。视频两帧分组及时间位置编码是独立路径。
- 模型卡补充各 Instruct 规格的许可：[3B Research License](https://huggingface.co/Qwen/Qwen2.5-VL-3B-Instruct/blob/main/LICENSE)仅授予非商业使用，商业使用需另行申请；[7B 模型卡](https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct)标注 Apache 2.0；[72B License](https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct/blob/main/LICENSE)是 Qwen License。不能把它们统一写成 Apache 2.0。

## 训练

- 报告表 2 与 2.2.2 节：视觉侧初始化及三个预训练阶段的数据类型、1.5T / 2T / 0.6T token、序列长度和训练模块与正文一致；SFT 和 DPO 冻结 ViT，DPO 使用图文和纯文本。正文的发票数据和偏好对是教学设计，不是报告的具体样本。
- 视频抽帧例子用于解释时间间隔，正文已指出没有被采样的事件无法直接观察。

## 评测

- 报告表 5：3B、7B、72B 的 DocVQA 测试集分别为 93.9、95.7、96.4，OCRBench 分别为 797、864、885；表 8 的 7B Video-MME 无／有字幕为 65.1／71.6，视频评测每段上限 768 帧、24576 视频 token。正文区分不同任务、字幕与业务验收。
- 业务定位例子区分像素缩放和裁剪偏移、文字读取与字段选择，未声称实测结果。

## 配图

- `qwen-vl` 的图登记在 `src/content/data/figures.yaml`：CC BY 4.0 原创教学图，标明只讲静态图并引用报告；`public/figures/qwen-vl/teaching-flow.svg` 的箭头、数值、文字和省略说明与正文一致。
- Chromium 访问本机 `/omni/qwen-vl/`：滚动加载后图片尺寸 1200×540，替代文本存在；截图目视检查文字及连接。

## 社区

- [猛猿：万字长文图解 Qwen2.5-VL 实现细节](https://zhuanlan.zhihu.com/p/1921289925552210138) 于 2026-10-27 实读时 1125 赞同、1818 收藏，记录见 [知乎阅读](zhihu-reading.md)。文章有帮助理解输入处理和视觉编码的代码解读；位置编码中作者注明的推测未当成官方事实，正文保留原报告与实现入口，未转载其图片。

### 2026-10-29 评测数字逐项复核

- 对照 [Qwen2.5-VL Technical Report v1 表 5](https://arxiv.org/html/2502.13923v1#S3.T5)：3B／7B／72B 的 DocVQA 测试集为 93.9／95.7／96.4，OCRBench 为 797／864／885。已补明 DocVQA 是测试集。
- 对照[表 8 和视频评测说明](https://arxiv.org/html/2502.13923v1#S3.T8)：7B Video-MME 无／有字幕为 65.1／71.6；最多 768 帧和 24,576 个视频 token 的评测上限与正文一致。
- 未重新运行评测；结果以报告表格和该报告的设置为准。
