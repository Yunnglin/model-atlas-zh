# Qwen Coder 三版本复核

参与情况：本审阅者此前审阅过训练方法与 Qwen2.5-Coder 的 DPO 链接，但没有找到此前由本审阅者撰写这三篇正文的记录；此次涉及该关联内容不应视为完全独立审校。没有加载模型或复现评测，也未修改共享 YAML。

- [Qwen2.5-Coder 报告 v3](https://arxiv.org/html/2409.12186v3)确认文件级 5.2T、仓库级约 300B、8K→32K 和 YaRN 扩展、70/20/10 混合试验，以及 7B Base 的 HumanEval 61.6、HumanEval+ 53.0。HumanEval-FIM 使用三种语言的单行补全，按生成第一行精确匹配；已补此评测条件，避免把其分数当成功能测试结果。FIM 教学图只示前后缀进入因果模型与外部测试。
- [Qwen3-Coder-480B 模型卡](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)确认 480B 总/35B 激活、62 层、160 选 8、96 Q/8 KV、原生 262144 上下文；发布说明讨论 7.5T、70% 代码及最多 20000 并行环境。已补该检查点 Apache 2.0 与仅非思考输出模式，不推及其他型号。教学图说明外部工具执行，不把模型请求当已执行。
- [Coder-Next 模型卡](https://huggingface.co/Qwen/Qwen3-Coder-Next)确认 80B/3B、48 层和 12 组 3 个 Gated DeltaNet + 1 个 Gated Attention、每层 512 路由选 10 加共享专家、262144 与非思考模式；已补该检查点 Apache 2.0。[技术报告 v1](https://arxiv.org/html/2603.00729v1)的表 3 是 SWE-Agent/MiniSWE-Agent/OpenHands 的 70.6/71.1/71.3、最多 300 轮。教学图复用 Next 底座图，注明不是工具执行器。
- 三幅原创 SVG 均可解析；未进行浏览器视觉验收。代码任务与评测算例不代表本项目实际运行。
