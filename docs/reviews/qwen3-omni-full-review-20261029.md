# Qwen3-Omni 全维度审阅

审阅日期：2026-10-29。完整通读 `src/content/docs/omni/qwen3-omni.md`，对照技术报告 v1、官方模型卡和已有社区实读记录；没有运行模型或复现评测。

## 结构与模型卡

- [技术报告第 2 节及表 1](https://arxiv.org/html/2509.17765v1)：Thinker 30B-A3B 与 Talker 3B-A0.3B 均为 MoE，音频编码器约 650M、视觉编码器约 540M，MTP 80M、Code2Wav 200M；模型卡没有把 Thinker 参数误写为全系统总量。
- 论文 2.1 和 2.4：Talker 使用文字 token／嵌入与来自 Thinker 的音视频特征，不再直接消费高层文字隐藏表示；主骨干预测第一个码本，MTP 自回归生成剩余码本，因果 ConvNet 输出波形。本次补充文字与多模态条件的区别和外部修改台词的教学例子。
- AuT 训练系统包含编码器和解码器，Omni 使用编码器；动态注意力窗口 1–8 秒，音频表示约 80 毫秒一步，视频以实际时间戳对齐，并不要求固定 12.5 fps。
- [Instruct](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct) 和 [Thinking](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking) 模型卡标注 Apache 2.0；Thinking 检查点只含 Thinker，不直接输出语音。厨房案例及外部处理例子为教学构造。

## 训练

- 报告第 2.2、3、4 节：AuT 数据分布 80% 中英文伪标签 ASR、10% 其他语言 ASR、10% 音频理解；这不是整个 Omni 的混合比例。预训练先固定 LLM、分别训练适配器再训练编码器，然后解冻进行多模态训练并延长上下文。
- Thinker 后训练包括 SFT、强到弱蒸馏和 GSPO；规则奖励与模型评审对应不同任务。Talker 的多阶段训练包括多语言偏好 DPO 和说话人微调。删除一处重复的训练阶段说明。

## 评测与应用

- 报告表 11：WorldSense 音视频输入／文字输出中，30B-A3B-Instruct 54.0，Qwen2.5-Omni 45.4；正文写明测试类型和版本。
- 表 2：并发 1 的音频／视频理论首包 234／547 ms，并发 4 为 728／1517 ms；音频 234 ms 由 72、88、57、14、3 ms 相加。正文区分论文理论值和用户端网络、播放等待，不将它称为实测用户体验。
- 文本正确而语音漏否定词、音画错位及数据切分均为构造案例或应用建议；定位步骤和指标用途已通读。

## 配图

- `src/content/data/figures.yaml` 登记报告 Figure 2 与 Figure 3，标明来源、版本、CC BY 4.0、署名和替代文本；图 2 的码本与 MoE 编号、图 3 训练解码器与推理编码器的区别与论文一致。
- Chromium 打开本机 `/omni/qwen3-omni/`，两张图分别成功解码为 5408×5715、4001×3689，替代文本存在；截图检查了文字、箭头和显示。

## 社区

- [曾天真：Qwen3-Omni 技术解读](https://zhuanlan.zhihu.com/p/1958278297671689194) 在 2026-10-28 已登录实读时为 21 赞同、31 收藏，记录见 [Qwen 音频与 Omni 社区资料核对](qwen-audio-community.md)。文章覆盖 Thinker、Talker、AuT 和训练；多码本串并行描述前后不一致，正文以论文为准，也未复制文章图文。

### 2026-10-29 评测数字逐项复核

- 对照 [Qwen3-Omni Technical Report v1 表 11](https://arxiv.org/html/2509.17765v1#S5.T11)：WorldSense 音视频输入到文字输出，30B-A3B-Instruct 为 54.0，表中 Qwen2.5-Omni 为 45.4；型号及输入输出模式与正文一致。
- 表 11 属于非推理基线，不应混同表 12 的 Thinking 结果；未重新运行评测。
