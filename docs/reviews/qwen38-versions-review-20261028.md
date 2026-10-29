# Qwen3.8 三篇版本复核（2026-10-28）

## 范围与参与情况

核对 Qwen3.8、Qwen3.8-Omni-Flash 和 Qwen3.8-Flash-Next 三篇的模型卡、输入输出、结构、训练披露、许可、已引用的评测数字及所关联教学图。Flash-Next 审校者本人此前已参与并记录 `qwen38-flash-live-final-audit.md`，本次属于持续复查，不应称为全新独立审校；另两篇此前已有审校记录，本次不据此推定本人是否参与了初稿。

## 逐项核对

- [Qwen3.8-27B 模型卡](https://huggingface.co/Qwen/Qwen3.8-27B)标记 Apache-2.0，支持图文视频，64 层语言骨干为 16 组 3 个 Gated DeltaNet 加 1 个 Gated Attention，FFN 稠密，原生 262,144 上下文。表中 SWE-bench Pro 61.7 的脚注列 Claude Code、256K、temperature 1.0、top-p 0.95 及修正后的题集，与正文一致。[2.4T-A95B 模型卡](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)标记 qwen3.8-max，文本权重为 2.4T 总参数／95B 激活、92 层、512 专家选 10 加共享专家；模型卡的榜单列是具有额外功能的 Max 服务。教学图原文字可能让人以为文本也经过视觉编码，现改为文字直入、图片与视频走视觉编码后汇合。
- [Qwen3.8-Omni 报告 v1](https://arxiv.org/html/2609.25611v1)第 2–4、6–7 节：未给出该 Omni 型号总／激活参数；普通和空间音频路径、索引器先选块再读原 token、四阶段预训练与蒸馏／RL 表述符合报告。报告的 2.5T 与分项相加约 2.6T 不一致，正文已注明；表 5 WorldSense 68.5／63.9、表 9 六秒纯音频 TTFC 978.36ms 及十次有效回复与测量排除项一致。报告与服务公开不等于开放权重；现有资料未确认该型号官方可下载权重及其权重许可。原创图区分 Flash 与 Realtime；关联官方 Figure 2、3 的范围在既有 `omni35-38-final-audit.md` 已核对，此次未再次做原图逐字节比较。
- [Qwen3.8-Flash-Next 模型卡](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)列 125B 主体／6B 激活，另有 51B N-gram、4B MTP；48 层、12 组 3 Gated DeltaNet 加 1 QSA、每层 MoE 和四路残差，许可为 qwen-community-1.0。相应教学图标明参数口径、结构简化和工具外部执行；[技术报告 v1](https://arxiv.org/html/2608.30320v1)可查训练与加速实验。模型卡 SWE-bench Pro 为 62.5，已补入对应 Claude Code、256K、采样参数与修订题集条件，避免拿数字脱离评测协议比较。

## 验证与限制

本次按上述一手资料核对页面与教学图语义，SVG 做 XML 解析并检查改动空白；无训练、模型调用、性能或评测复现。报告、服务页面与模型卡可能更新，本记录仅代表核对时的公开资料；未逐个验证所有外链、全部派生模型或许可证法律适用条件。
