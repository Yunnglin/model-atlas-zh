# 量化训练技术审阅

审阅日期：2026-10-29。通读 `src/content/docs/training/quantization.md`，对照原论文、PyTorch 文档、算例、配图及已有知乎实读记录；未转换模型或运行推理评测。

## 原理与资料

- [GPTQ](https://arxiv.org/abs/2210.17323) 是利用近似二阶信息的训练后权重量化；[AWQ](https://arxiv.org/html/2306.00978) 利用激活信息及通道缩放，论文保留少量显著权重作敏感性实验，不等于所有部署必须将 1% 权重保留为 FP16。
- [QLoRA 第 3 节](https://arxiv.org/html/2305.14314)冻结 4 位基础权重并训练低秩适配器，通常反量化为 BF16 计算；NF4、双重量化和分页优化器各有不同用途。对照 [PyTorch QAT](https://pytorch.org/blog/quantization-aware-training/) 确认假量化、STE 和训练后转换；QLoRA 不等同于 QAT。
- [SmoothQuant](https://arxiv.org/abs/2211.10438)用等价尺度变换迁移激活量化难度，关注 W8A8；[LLM.int8()](https://arxiv.org/html/2208.07339)对异常特征维度采用 16 位路径，其余主要矩阵乘法走 8 位；[GGUF](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md)为文件格式而非单一算法。

## 例子与评测

- 固定尺度 0.1、范围 -8 至 7，0.31→3→0.30，0.76→8→裁剪 7→0.70；这是教学例子。每组 128 个 4 位权重加 16 位尺度平均 4.125 bit；本次补充 32 个一组平均 4.5 bit，不计零点及填充等其他开销。
- [AWQ 表 5、8](https://arxiv.org/html/2306.00978)：Mixtral-8x7B-Instruct WikiText-2 FP16、INT4-g128、INT3-g128 困惑度分别 5.94、6.05、6.52；CodeLlama-7B-Instruct 的 MBPP pass@1 分别为 FP16 38.53、AWQ 40.64、GPTQ 31.97。正文保留模型、任务和设置，不将单次结果外推成通用精度优势。
- 校准领域对照、困惑度和应用测试、权重与 KV 缓存、首 token 延迟和吞吐的区别已检查。合同金额错误与医院场景是构造案例，不表示模型实测。

## 配图

- `public/figures/training/quantization-grid.svg` 为原创 CC BY 4.0 教学图，许可与来源见 `docs/assets.md`；图展示固定尺度舍入与裁剪，数字与正文一致。
- Chromium 打开本机 `/training/quantization/`，图成功解码、替代文本存在；截图核对数字、箭头和显示。

## 社区

- [吃果冻不吐果冻皮：量化技术总结](https://zhuanlan.zhihu.com/p/11886909512) 于 2026-10-27 已登录实读时 252 赞同、611 收藏，见 [训练社区资料](training-community.md)；性能和硬件结论需结合具体环境，QLoRA 与 QAT 不应混同。
- [绝密伏击：GGUF、GPTQ 与 AWQ](https://zhuanlan.zhihu.com/p/1899107168172630461) 于 2026-10-28 阅读时 439 赞、1254 收藏，见 [社区补充记录](community-extra-20261028.md)；通道缩放及反量化等细节以论文和工具实现为准。正文未复制社区图文。

后续补充核查：[training-coverage-followup-20261029](training-coverage-followup-20261029.md)。

补充核对见 [quantization-distillation-example-review-20261029.md](quantization-distillation-example-review-20261029.md)；该记录仅覆盖新增例子，不替代本次完整审校。

后续补充：[AWQ 通道缩放算例核查](awq-channel-scaling-example-20261029.md)。
