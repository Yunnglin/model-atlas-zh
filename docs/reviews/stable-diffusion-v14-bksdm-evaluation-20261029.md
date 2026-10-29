# Stable Diffusion v1-4 的第三方评测对照（2026-10-29）

直接阅读 [BK-SDM 研究者的评测说明与结果表](https://github.com/AI-Machine-Vision-Lab/BK-SDM-Block-removed-Knowledge-distilled-Stable-Diffusion-Model#evaluation-on-ms-coco-benchmark)：比较指定 Stable Diffusion v1.4 和经结构压缩及蒸馏的 BK-SDM-Small。在 MS-COCO 2014 验证集 30,000 条提示上用 25 步 PNDM 生成 512×512 图片，缩至 256×256 计算指标；FID 真实图统计用整个验证集约 41,000 张图片。表格给出 v1.4 的 FID 13.05、CLIP Score 0.2958，BK-SDM-Small 分别为 16.98、0.2677，CLIP 特征使用 ViT-g/14。

这是 BK-SDM 团队报告的独立对照，不是 [v1-4 官方模型卡](https://huggingface.co/CompVis/stable-diffusion-v1-4)中 10,000 条 COCO 2017 提示、50 步 PLMS 的结果；两套口径不可混合。正文新增模型、数据、采样与尺寸条件及指标含义；未运行模型、复现评测或核查此研究的所有图表。
