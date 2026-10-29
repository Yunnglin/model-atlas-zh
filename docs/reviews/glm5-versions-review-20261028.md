# GLM-5、5.1、5.2 版本复核

参与说明：审阅者此前受派复核过 GLM-5 系列重要版本，因此这是再次对照官方资料的复查，不能称为完全独立于此前该系列审校。未执行权重或复现实验，未修改共享 YAML。

- [GLM-5 报告 v1 附录 A](https://arxiv.org/html/2602.15763v1#A1.T10) 的 744B 总/40B 激活口径包含 MTP、不含词嵌入和输出层；配置和模型卡的页面权重统计不是相同口径。报告列 256 路由选 8、1 共享专家、DSA 和 MLA，模型卡标 MIT；正文 28.5T 与 SWE-bench Verified 77.8 保留各自的训练和 OpenHands 评测条件。图是模型与外部工具的教学示意。
- [GLM-5.1 模型卡](https://huggingface.co/zai-org/GLM-5.1) 和[配置](https://huggingface.co/zai-org/GLM-5.1/blob/main/config.json)核对 202752 位置数、256 选 8、index_topk 2048、MIT 与模型卡指标（SWE-Bench Pro 58.4、Terminus-2 63.5、NL2Repo 42.7）；5.1 的新训练数据和完整配方不能从 GLM-5 报告推断。
- [GLM-5.2 模型卡](https://huggingface.co/zai-org/GLM-5.2) 和[配置](https://huggingface.co/zai-org/GLM-5.2/blob/main/config.json)核对 1048576 位置配置、MIT、IndexShare 四层复用、1M 情况下 2.9 倍 per-token FLOPs 与最多 20% MTP 接受长度，以及 SWE-bench Pro 62.1、Terminus-2 81.0 和不同脚手架 82.7；它们不是通用端到端加速或任意项目成功率。教学图标明复用索引而非复制层输出。
- 发现来源口径差异：[5.1 模型卡](https://huggingface.co/zai-org/GLM-5.1) 把 63.5 列为 Terminal-Bench **2.0**，而 [5.2 模型卡](https://huggingface.co/zai-org/GLM-5.2) 在 **2.1** 对照行列出相同 63.5。无法仅凭数值判断两份实验是否完全一致，已在 5.2 正文提示差异，保留各卡原标签。
- 三张原创 SVG 均可解析并审阅文字语义；未完成浏览器截图和实际模型运行。
