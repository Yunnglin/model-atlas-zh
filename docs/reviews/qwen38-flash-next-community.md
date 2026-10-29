# Qwen3.8-Flash-Next 参考资料与核对记录

核对日期：2026-10-28。讨论模型结构、训练和评测时以论文和官方模型卡为依据；知乎材料用于补充解释角度，不把宣传或社区评价当作独立评测结论。

- [官方模型卡](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)：模型结构、推理示例、输入模态与许可；卡片提供视频输入示例，处理过程会抽帧。
- [官方代码库](https://github.com/QwenLM/Qwen3.8-Flash-Next)：公开权重与发布时间，README 标注 2026-08-26。
- [技术报告](https://arxiv.org/abs/2608.30320)：架构、训练、模型和内核评测；QSA 内核加速结果依赖报告中的特定配置，不能直接等同端到端加速。
- [千问大模型：Qwen3.8 Flash 系列介绍](https://zhuanlan.zhihu.com/p/2076052218705461635)：阅读时显示 91 赞、68 收藏；介绍 QSA、门控残差、N-gram 和 Muon。文章同时讨论 Flash 服务和 Flash-Next 开放权重，二者不应混为同一检查点。其作者属于官方团队，因此不视作独立评价；点赞和收藏数会变化。
- [小小将：Qwen3.8 Flash 系列讨论](https://www.zhihu.com/question/2076062310221747473/answer/2076067954240795706)：阅读时显示 70 赞；页面未显示收藏数，不对收藏数量作推断。用于理解读者关注的问题，具体事实仍以官方资料核实。

## 官方架构图的复用范围

论文 [Figure 1：Qwen3.8-Flash-Next 架构图](https://arxiv.org/html/2608.30320v1#S1.F1) 可在线查看。2026-10-28 核对时，[论文 arXiv 页面](https://arxiv.org/abs/2608.30320)的许可链接指向 [arXiv 非独占分发许可](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)，并未声明 CC BY 4.0；不能以此推定第三方获得该图的再分发许可。[模型卡](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)列出的 Qwen Community License 适用于模型权重，不能直接当作论文图片的许可。因此不将原图另存进仓库，当前展示原创教学简图并链接论文原图。
