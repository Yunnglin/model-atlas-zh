# Whisper 全维度审阅

审阅日期：2026-10-29。逐段通读 `src/content/docs/audio/whisper.md`，范围以 2022 原始 Whisper 家族为主，核对官方论文、模型卡与现行实现；未运行推理、训练或复现评测。`whisper` 为时间线模型 ID。

## 结构与模型卡

- [模型卡](https://github.com/openai/whisper/blob/main/model-card.md)和[官方仓库](https://github.com/openai/whisper)列出 tiny、base、small、medium、large 的约 39M、74M、244M、769M、1550M 参数；代码和权重为 MIT。正文说明原始多语言型号的语音翻译目标为英语，`.en` 是英语模型，官方仓库注明 turbo 没针对翻译任务训练。
- [论文第 2 节](https://arxiv.org/html/2212.04356)：16 kHz、80 通道 log-Mel、10 ms 帧移、30 秒片段、两层卷积第二层步长 2；30 秒约 480000 采样点、3000 频谱帧、1500 编码器位置。任务标记和当前窗口 20 ms 时间戳用于控制转写、翻译和时间格式，不是逐字强制对齐。
- 文中“打开客厅灯”和 1.2 至 2.0 秒为教学例子。长音频由窗口与拼接机制处理，不能因此称原生实时流式。

## 训练

- 论文约 680000 小时弱监督音频配对，其中约 117000 小时为 96 种非英语语言，还描述 125000 小时语音到英文翻译；正文没有将这些可能重叠的统计简单相加。
- 教师强制学习预测任务输出；论文第 2.3 节说明上一段作为背景的文字不计损失，其他标记和当前转写计入预测。本次补充该上下文训练细节，并将错误前文对后续窗口的影响写成可理解的例子。
- [官方转写实现](https://github.com/openai/whisper/blob/main/whisper/transcribe.py)支持 `condition_on_previous_text`、温度回退和静音条件；高温或关闭前文时会重置提示，正文未声称所有窗口均持续传递全部历史。

## 评测与应用

- 论文附录表 9 使用 beam search 和温度回退：Whisper large-v2 的 LibriSpeech test-clean WER 2.5%、CHiME-6 WER 24.9%；两个不同测试集不是单变量噪声对照。正文提醒型号、规范化、分段与解码差异。
- WER 教学例子 `(1+1+1)/10=30%`；中文 CER 及分词、标点、数字规范的建议已通读。句尾漏字、验证和数据闭环为构造案例，不冒称实验结果。

## 配图

- `src/content/data/figures.yaml` 登记官方 `approach.png` 的来源、MIT 许可及署名；[历史核查](whisper-source-check-20261028.md)记录其与官方原图 SHA-256 一致。图示频谱、编码器、解码器、交叉注意力和特殊 token，与论文一致。
- Chromium 打开本机 `/audio/whisper/`，图片成功解码为 2973×2253，替代文本存在；截图检查结构、箭头和显示。图所附 HF Viewer 为外部交互入口，不声称已验证所有层级或内嵌。

## 社区

- [Infinite42：Whisper 论文解读](https://zhuanlan.zhihu.com/p/680412927) 于 2026-10-27 已登录实读时 59 赞同、175 收藏，见[语音补充审校](speech-followup.md)。文章的数据清洗与任务标记组织可供理解，多语言和速度概括需依具体模型、输入及测试条件；正文事实以论文和官方实现核对，未复制社区图文。

## 2026-10-29 评测数字补充复核

- 范围：正文的 large-v2 英语转写示例；核对[论文附录表 9](https://arxiv.org/html/2212.04356)。
- 表 9 的 beam search 与温度回退结果中，LibriSpeech test-clean WER 为 2.5%，CHiME6 为 24.9%，与正文一致；这是不同数据集的比较，不能视作单独改变噪声的受控实验。
- 结论：所核数字和解码条件无误，无需修改正文；本次不代表其他版本和全部指标均已逐项核对。
