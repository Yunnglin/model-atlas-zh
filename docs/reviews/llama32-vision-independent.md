# Llama 3.2 Vision 独立核查

范围：官方发布、11B/90B 视觉分支、训练阶段、视觉适配器、语言支持、评测条件及许可。文中的图表案例和评测方案未实际运行。

- [Meta 官方发布](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)：2024-09-25 发布，11B/90B 为视觉模型，1B/3B 为轻量文本模型；视觉适配器通过交叉注意力连接图像编码器与 Llama 3.1。适配器训练时更新图像编码器、冻结语言模型；该陈述不外推为全部训练阶段。
- [视觉模型卡](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)：确认 10.6B/88.8B 参数、128K 上下文、6B 图文对、超过 3M 合成指令样本，图文应用官方支持语言为英语；知识截止 2023-12。权重采用 Llama 3.2 社区许可，不能称无条件开源。
- 模型卡指令版 ChartQA test 采用 0-shot、CoT、relaxed accuracy，11B/90B 为 83.4/85.5；DocVQA test 0-shot、ANLS 为 88.4/90.1。基础版与指令版分开，未将官方数值作为独立复现。
- [官方提示格式](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/vision_prompt_format.md)：图像表示通过视觉编码器与侧向交叉注意力进入，不声称原始像素作为普通文本输入。
- 图为高层教学示意；实际模型包含多个交叉注意力层，不将图的单一方框解释为单层结构。
- 知乎：Chrome 中搜索 `Llama 3.2 Vision`，本次页面未返回可读取的具体文章；未能核实作者、赞同和收藏，也未引用不可核查的社区内容。
