# SFT 训练技术审阅

审阅日期：2026-10-29。范围为 `src/content/docs/training/sft.md` 的原理、训练数据、损失例子、评测、配图和社区资料；没有运行训练或业务评测。

## 原理与资料

- [InstructGPT 论文第 3.2 节](https://arxiv.org/html/2203.02155#S3.SS2)将约 1.3 万条 SFT 训练提示与奖励模型、PPO 数据分开。正文没有把后续偏好优化成绩归于 SFT 本身。
- [TRL SFT Trainer 文档](https://huggingface.co/docs/trl/sft_trainer)说明 `assistant_only_loss` 适用于对话数据，依赖模板标记生成区域；`completion_only_loss` 基于 prompt-completion 边界。正文补充两者的区别和可组合条件；注意模板及版本会影响具体行为。
- 阅读正文全部损失和掩码描述：示范前缀参与条件输入，损失位置与注意力可见性是不同概念；标签右移责任由实现决定，工具与停止标记的处理不能一概而论。

## 例子与评测

- 对概率 0.8、0.5 的负自然对数取平均约为 0.458；四个 token 损失的逐 token 平均为 0.325，逐样本平均为 0.55。两个算例的计算均正确，且正文没有将某种归约方式当成所有训练器的默认设置。
- 会议摘要、可能性被改写成确定事实、分组切分、独立测试以及格式与事实分别评估是教学方案；数据与线上模板一致性的检查属于可复现建议，并未表述为已运行结果。

## 配图

- 共享图 `public/figures/training/lora-sft.svg` 的来源与 CC BY 4.0 原创许可见 `docs/assets.md`。图的 SFT 示范和 LoRA 更新作用分开，明确只画选中一层和特定冻结设置；正文紧接图说明全量 SFT 也可用。
- Chromium 打开本地 `/training/sft/`，图片滚动加载后为 1120×440，替代文本存在；截图目视确认文字、两条分支与损失更新箭头。

## 社区

- [LLMCat：单轮与多轮 SFT 的损失掩码](https://zhuanlan.zhihu.com/p/1954712810387903769) 于 2026-10-27 实读，显示 74 赞、165 收藏，详见 [训练社区核查](training-community.md)。对话示例可用来发现掩码和错位问题，但文中有关右填充的推断及符号应结合模板与实现检查；正文未宣称所有 SFT 都只训练助手消息。

后续补充核查：[lora-sft-numerical-followup-20261029](lora-sft-numerical-followup-20261029.md)、[training-coverage-followup-20261029](training-coverage-followup-20261029.md)。

后续补充核查：[拒绝采样微调与知乎交叉验证](sft-rft-coverage-20261029.md)。

后续补充：[公式与算例定向复核](sft-lora-grpo-math-check-20261029.md)。
