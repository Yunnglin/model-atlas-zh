# DeepSeek-V4-Flash 与 V4-Pro 二次定向审校

核对日期：2026-10-28。范围为两篇模型卡、核心结构、预训练和后训练、正文所引用评测数字与教学示意图；未运行模型、训练或复现官方评测。

- [DeepSeek 预览版发布](https://www.deepseek.com/news/v4-preview/)日期为 2026 年 4 月 24 日；两篇模型卡补足预览版日期，区别后续技术报告。
- [V4 报告 v1 §4.2](https://arxiv.org/html/2606.19348v1#S4.SS2)：Flash 43 层、前两层纯滑动窗口，Pro 61 层、前两层 HCA；两者后续层交替 CSA/HCA，窗口 128、CSA 压缩 4、HCA 压缩 128，CSA top-k 分别为 512/1024。专家分别为 256/384 路由加 1 共享，每个 token 激活 6 个，前 3 层使用哈希路由。教学图依此绘制，省略层内细节；图示中 MoE 代表各块内计算，不是全部层完成后才执行一次。
- 报告 §4.2 核对 Flash 32T 与 Pro 33T 预训练 token。§5.1 核对领域教师经过 SFT 与 GRPO，然后统一学生使用自身轨迹、反向 KL 与全词表 logits 蒸馏，不能据此说全部训练都没有 RL。
- 报告 §5.2.1 描述对路由专家权重及 CSA 索引器 QK 路径使用 MXFP4 量化感知训练；两篇已补充，并说明不能推断全模型全部运算均为 4 位。
- [Flash 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)和 [Pro 模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)均标示 MIT 权重许可；Base MMLU 5-shot 分别为 88.7 与 90.1，V3.2-Base 为 87.8。它们不是指令模型的业务准确率。

两张图是原创简化示意，不是官方原图；XML 有效。报告和模型卡可能更新；本轮未重新核验知乎文章及互动数据。
