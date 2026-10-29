# DeepSeek-V4-Flash 全文审校

审校日期：2026-10-29。对象是 [Flash 初版正文](../../src/content/docs/nlp/deepseek-v4-flash-model.md)，不混用 Pro 或 V4.1；未运行模型、训练或复现评测。

- **结构与模型卡**：对照[技术报告第 2、4.2 节](https://arxiv.org/html/2606.19348)及[模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)：43 层、首两层滑窗、随后 CSA/HCA 交替；Flash 的 CSA 压缩率 4 和 top-k 512，HCA 压缩率 128，局部窗口 128。每层一个共享专家、256 路由专家选 6；284B 总量、13B 激活和 MIT 权重许可。模型卡信息与 Pro 的 61 层、top-k 1024 分开。
- **训练**：报告第 4、5 节核对 32T token、4K 到 1M 长度训练、专家 SFT 与 GRPO 再通过多教师在线策略蒸馏，以及后训练对专家权重和 CSA 索引器做 FP4 量化感知训练。正文新增样本级注意力掩码、Muon 与 AdamW 的职责和批量调度例子；打包并不替代评测去重，后训练阶段的教师模型不等于 MoE 层内专家。
- **评测**：对照报告表 1：内部统一框架中 Flash-Base 的 MMLU 5-shot 为 88.7、V3.2-Base 为 87.8；两者规模及数据不同，不能归因于单一模块。文中日志成功率为教学算例；效率比较需限定硬件、输入长度与运行实现。
- **配图**：检查 [图登记](../../src/content/data/figures.yaml)和[原创示意](../../public/figures/deepseek-v4-flash/overview.svg)。2026-10-29 在 Chromium 打开本地正文并滚动解码图片，1060 像素宽、替代文本存在，截图目视检查箭头和文字；图仅显示层级组织，非官方逐层架构图。
- **知乎**：2026-10-29 主审通过已登录 Chrome 阅读 JustBeClaw 的 [V4 混合注意力解读](https://zhuanlan.zhihu.com/p/2031146581542580917)，当时 401 赞、546 收藏；文章讨论 CSA 的四倍压缩和筛选、HCA 的 128 倍压缩、Flash 前两层滑窗和后续交错。与论文第 4.2 节对照时注意部分章节采用 Pro 的 top-k 1024，Flash 为 512；前两层设计动机为作者推测，不作为官方因果结论。赞藏是阅读时快照。
