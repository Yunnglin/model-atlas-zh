# GLM 与 DeepSeek 评测数字复核（第六批）

日期：2026-10-29。范围为下列 7 篇正文中的公开评测数字及直接涉及的评测条件，不等于整篇技术内容已深度审校，也不代表独立复现。教学算例按正文假设核对算术，不能视为实测。

- **DeepSeek-V4-Flash**：官方模型卡基础模型表的 MMLU（EM、5-shot）列出 V3.2-Base 87.8、V4-Flash-Base 88.7，与正文一致。[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
- **DeepSeek-V4-Pro**：同一基础模型表中 MMLU（EM、5-shot）Pro-Base 90.1、Flash-Base 88.7，与正文一致。正文还引述 1M token 时的计算量和缓存占比；本次主要复核评测分数，未独立重新计算该效率图。[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)、[技术报告](https://arxiv.org/abs/2606.19348)
- **DeepSeek-V4.1-Flash**：官方基础模型表 MMLU-Pro（EM、5-shot）V4-Flash-Base 68.3、V4.1-Flash-Base 74.1；指令模型对照表 Terminal-Bench 2.1（Pass@1）V4-Flash 82.7、V4.1-Flash 90.6。该卡说明代码智能体评测使用 DeepSeek Harness Minimal、1M 上下文；采样温度 1.0、top-p 0.95。具体其他模型的原始评测设置不应仅凭表格推断完全一致。[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
- **GLM-5.2**：模型卡中 SWE-bench Pro 62.1、5.1 对照 58.4；Terminal-Bench 2.1 的 Terminus-2 81.0、Claude Code 82.7；NL2Repo 48.9；HLE 40.5、HLE-with-tools 54.7。模型卡对未标星的 HLE 默认使用纯文本子集；正文已补充。两种 Terminal-Bench 脚手架的时间与输出预算不同，正文有对应说明。[官方模型卡及评测脚注](https://huggingface.co/zai-org/GLM-5.2)
- **GLM-5.3**：模型卡表中 Terminal Bench 3.0 的 28.3 / 4.6、DeepSWE v1.1 的 66.9 / 46.2、CyberGym 的 84.5 / 77.2 分别对应 5.3 / 5.2。5.3 的 Terminal Bench 3.0 脚注为 Claude Code、avg@3、每次 10 小时；DeepSWE 使用 mini-swe-agent、6 小时；CyberGym 为 1507 题单次运行、无总时限，仅允许有限域名。正文所述不能自由访问互联网与白名单限制一致。[官方模型卡及评测脚注](https://huggingface.co/zai-org/GLM-5.3)
- **GLM-5.3-Flash**：官方发布表的 Terminal Bench 2.1 为 Flash 84.3、5.2 81.0；Flash 模型卡描述 Claude Code 与 6 小时限制，而 5.2 的 81.0 在其模型卡属于 Terminus-2 和 4 小时限制。已在正文明确两者协议不同。补充核实：2026-10-29 在 Chrome 直接打开 [Z.ai 官方发布文章](https://z.ai/blog/glm-5.3-flash)，读取基座模型比较表：GLM-5.3-Flash-Base 的 MMLU 为 88.1、LiveCodeBench-Base 为 37.6，均与正文一致。此前网页提取工具未返回正文并只能查看搜索索引，本次浏览器直接读取了官方原表。表格也注明 DeepSeek 对照由 Z.ai 内部评测框架评估。[AutoClaw 官方发布表](https://autoclaw.z.ai/blog/model/glm-5.3-flash)、[Flash 模型卡](https://huggingface.co/zai-org/GLM-5.3-Flash)、[5.2 模型卡](https://huggingface.co/zai-org/GLM-5.2)
- **GLM-OCR**：技术报告表 4 中 OmniDocBench v1.5 的 GLM-OCR 综合分 94.62、Text Edit 0.040、Table TEDS 93.96；PaddleOCR-VL-1.5 的 Text Edit 0.035、Table TEDS 92.76，均与正文一致。分数为文档解析基准结果，不是通用 OCR 准确率。[官方技术报告表 4](https://arxiv.org/html/2603.10910)

本次对照的是官方公开报告和模型卡，并未运行基准。页面以外的评测数字、榜单更新、结构与训练细节不在本记录覆盖范围内。
