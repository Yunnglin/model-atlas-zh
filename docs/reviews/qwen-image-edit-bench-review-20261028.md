# Qwen-Image-Edit-2509 / 2511 定向评测复核（2026-10-28）

复核两篇模型介绍中训练披露、推理示意说明和评测证据；没有运行模型，也没有逐句独立审校全文。

- [2509 发布说明](https://github.com/QwenLM/Qwen-Image/blob/main/Qwen-Image-Edit-2509.md)明确写明在初代架构基础上通过图像拼接继续训练，1–3 张参考图效果较好；未公布完整训练配方。两页的推理图有固定版本 Diffusers 源码引用，属于管线流程图，不以它断定训练内部操作。
- [2511 模型卡](https://huggingface.co/Qwen/Qwen-Image-Edit-2511)说明在 2509 基础上增强多人一致性等能力并整合部分社区 LoRA 能力；未列出完整训练配方或量化基准表。
- [MultiBanana 论文](https://arxiv.org/abs/2511.22989)，CVPR 2026 主论文表 3：2509 单参考 7.499、双参考 3.699（10 分制）；结果为 Gemini 2.5 和 GPT-5 评分平均，任务类型不同，不将差值称作单纯增加一张图造成的下降。论文未给出 2511 的同表成绩。
- [GenArena 项目页](https://genarena.github.io/)的 2026 年 1 月快照：2509 的 Basic/Reasoning/MultiRef 为 1020/962/705，2511 为 1065/1005/793；由 Qwen3-VL-32B Instruct FP8 成对判别并汇总 Elo。补充两篇正文并解释相对分数和测试边界，未将其称为人工投票或准确率。
- 社区参考：阅读 [ComfyUI 社区 2511 工作流帖](https://www.reddit.com/r/comfyui/comments/1tqm4pb/cracked_the_case_on_high_res_quality_qwen_edit/)，作者描述参考图处理、工作流与个人效果；属于经验分享，其质量和速度判断没有被视为普遍结论。搜索结果显示该帖约 179 赞，是抓取时可见的票数快照。原有知乎引用和先前失败检索记录保留；本轮未重读知乎或核对知乎点赞收藏。
