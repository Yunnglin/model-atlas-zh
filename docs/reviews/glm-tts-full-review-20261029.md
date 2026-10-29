# GLM-TTS 专项审校

审校日期：2026-10-29。通读 [GLM-TTS 正文](../../src/content/docs/audio/glm-tts-model.md)；未运行模型或复现评测。航班播报与分组奖励案例为教学构造。

- **结构**：对照[技术报告第 2.2–2.3、2.7 节](https://arxiv.org/html/2512.14291)及[模型卡](https://huggingface.co/zai-org/GLM-TTS)，核对 Llama 语音语言模型、25 Hz/32k 的 Whisper-VQ tokenizer、流匹配频谱和 Vocos2D 声码器；模型卡说明 3–10 秒参考。补充 tokenizer 的非因果编码与系统分块流式输出的区别，不把任一环节的流式能力当成整条链路延迟。
- **训练**：报告第 2.1、2.4、2.5 节核对约 10 万小时数据处理、发音/说话人/情绪/笑声多奖励 GRPO，及针对单说话人的约 1 小时、核心骨干约 15%、约 100 epoch LoRA 设置。补充借鉴 DAPO 的零优势批次最多重采样三次及上下裁剪 0.3/0.2；例子不假设相同奖励表示声音质量相同。
- **评测**：报告表 3 和表 7 核对 Seed-TTS-eval 中文基础/RL 的 CER 1.03%/0.89%、SIM 76.1/76.4，以及内部难例集 Phoneme-in 的 PER 13.23%/5.14%。实验范围、自动评分与人工试听分开；未将多音字难例结果推广到所有文本。
- **配图**：核对[图示登记](../../src/content/data/figures.yaml)及[原创示意图](../../public/figures/glm-tts/overview.svg)，文本和参考条件、语音 token、流匹配频谱、声码器及波形的箭头与模型卡简化流程一致；图标明非官方、出处和 CC BY 4.0。Chromium 本地页面滚动后成功解码图片、替代文本存在，截图检查中文与箭头。
- **社区**：沿用[2026-10-28 实读记录](glm-tts-community-final.md)，怎么去火星的 [TTS 开源模型综述](https://zhuanlan.zhihu.com/p/1980596094028239486)当时 29 赞、102 收藏，第 13 节讨论 LLM + Flow 与四类奖励；“token 到波形”是简写，需补上频谱及声码器，与报告和模型卡交叉核对。Ryuk 的[横评](https://zhuanlan.zhihu.com/p/2095241197354854353)当时 1 赞、3 收藏，31 条 no-prompt 题目及特定设备仅供错例设计参考，不推广为通用排名。本次未重读或更新互动量。
