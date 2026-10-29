# 模型图示与许可抽查

核对日期：2026-10-27。此次只抽查下列图示的版本适配、来源和许可，不能据此认定全部图示都已逐项核验，也没有对图像含字逐像素核验。

- 结构复用：`qwen-next/overview.svg` 同时用于 Qwen3-Next 与 Qwen3-Coder-Next。两者[官方 Next 配置](https://huggingface.co/Qwen/Qwen3-Next-80B-A3B-Instruct/blob/main/config.json)和 [Coder-Next 配置](https://huggingface.co/Qwen/Qwen3-Coder-Next/blob/main/config.json)均为 48 层、全注意力间隔为 4；图示只解释 3+1 层布局。两者 RoPE 参数不同，不能将层布局相同理解为配置或权重完全相同。已更新图的无障碍标题、图注与资产记录中的哈希。
- 官方文件：Whisper、SAM 本地图片分别与 [Whisper 官方原图](https://raw.githubusercontent.com/openai/whisper/main/approach.png)、[SAM 官方原图](https://raw.githubusercontent.com/facebookresearch/segment-anything/main/assets/model_diagram.png)字节一致；项目许可分别是 [MIT](https://github.com/openai/whisper/blob/main/LICENSE) 与 [Apache-2.0](https://github.com/facebookresearch/segment-anything/blob/main/LICENSE)。SAM 图片含文字提示概念，不证明公开接口实现完整自然语言分割。
- Qwen 原图：对 Qwen-Audio、Qwen2-Audio、Qwen3-TTS tokenizer、Qwen2.5-Omni、Qwen3-Omni 五张本地 PNG，与各报告 HTML 相应图像逐字节比较一致。相关六份报告（另含 Qwen3-ASR）arXiv 页面均列出 CC BY 4.0；已将四组报告的图注和随图许可从笼统的团队名称补充为报告署名作者。
- DeepSeek-V4.1-Flash：对照[官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)检查因果编码器与解码器各 20 层和图文输入；图为教学概括，省略缓存压缩和层内细节。
- 许可查验：多张原创教学图的目录未单独带许可文件，图形注册表有逐项许可和署名。新增集中说明 `public/figures/LICENSE-TEACHING.txt`，只适用于注册为原创教学图的素材，明确排除第三方官方图；未变更第三方授权。

图像匹配不等于论文中的每个技术细节均已核验；本次未运行模型或检验交互式第三方服务。
