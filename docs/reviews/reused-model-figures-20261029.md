# DeepSeek 与 ChatGLM 复用图专项核对（2026-10-29）

本次范围是 DeepSeek-V3 原版、V3-0324 与 R1-0528 共用的 MLA/MoE 教学图，以及 ChatGLM2-6B 与 ChatGLM3-6B 共用的主干图；另外对照了 GLM-4.5 的独立主干图。这里检查的是图中明确画出的信息和复用关系，不代表对这些模型的全部图片或全文重新审校，也没有运行模型。

- [DeepSeek-V3 论文第 3.1 节](https://arxiv.org/html/2412.19437v2)列出 61 层、前 3 层使用稠密前馈、其余层每层 1 个共享专家及 256 个路由专家、每 token 选 8 个路由专家。[V3-0324 配置](https://huggingface.co/deepseek-ai/DeepSeek-V3-0324/blob/main/config.json)和 [R1-0528 配置](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/blob/main/config.json)均列出对应结构字段，因此这三页可复用概括这些共性结构的图；图注明确这是教学简图，省略前三层稠密前馈等细节，不代表模型权重、训练方法或评测结果相同。
- [ChatGLM2-6B 配置](https://huggingface.co/zai-org/chatglm2-6b/blob/main/config.json)与 [ChatGLM3-6B 配置](https://huggingface.co/zai-org/chatglm3-6b/blob/main/config.json)均为 28 层、32 个注意力头、2 个多查询组。共享图标明工具流程针对三代，不能将这一流程当成二代的原生工具格式；具体上下文长度等差异由各自正文说明。
- 发现 ChatGLM 共用图中工具结果返回箭头停在输入模板框下方 9 个 SVG 单位，现已将终点接到框边，避免误读返回路径。模型是否真实调用工具仍取决于外部应用执行。
- [GLM-4.5 技术报告](https://arxiv.org/html/2508.06471v1)及[官方配置](https://huggingface.co/zai-org/GLM-4.5/blob/main/config.json)对应独立图的 3 个稠密层、89 个 MoE 层和每 token 选择 8 个路由专家；该图没有被误用到 ChatGLM。

本次检查了 SVG 源代码中的文字、盒子和箭头端点，并用 Chromium 渲染 ChatGLM 共用图，目视确认返回箭头连接模板框；图片箭头和内容检查共 11 项通过。图是简化的数据流示意，不能用来证明源码所有细节。
