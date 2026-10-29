# Qwen 代码模型定向审校

核对日期：2026-10-27。阅读 CodeQwen1.5、Qwen2.5-Coder、Qwen3-Coder 和 Qwen3-Coder-Next 的模型卡、结构、训练、评测及案例，并检查四张教学 SVG 的文字与结构，重点核对下列版本事实；未逐句核验每个结论、逐像素审阅全部图，也未实际运行模型、训练或评测。

- **CodeQwen1.5**：核对[发布文章](https://qwenlm.github.io/blog/codeqwen1.5/)的约 3 万亿代码相关 token、64K、Base／Chat 的 HumanEval 与 HumanEval+ 数字；补充对照和测试范围。核对 [7B-Chat 模型卡](https://huggingface.co/Qwen/CodeQwen1.5-7B-Chat)的 GQA 和 Tongyi Qianwen 许可，避免默认套用其他代的许可。教学图只展示因果解码与外部工具。
- **Qwen2.5-Coder**：核对[技术报告 v3](https://arxiv.org/html/2409.12186v3)的 5.2T 文件级、约 300B 仓库级数据、8K／32K 训练与 YaRN 外推，补充代码／文本／数学 70／20／10 的特定实验配置及 SFT 后离线 DPO 反馈来源；不同阶段统计不假定为去重后的独立样本。补充 Base 7B 的 HumanEval 与 HumanEval+ 示例，限定其评测对象。对照 [32B 配置](https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct/raw/main/config.json)核对 40／8 头；教学图将 FIM 表达为输入组织，执行在外部。
- **Qwen3-Coder**：核对[首发说明](https://qwenlm.github.io/blog/qwen3-coder/)的 7.5T／70% 代码、原生 256K、1M 外推和训练系统可并行 20,000 个环境，补充系统能力与实际任务的区分。对照 [480B 模型配置](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct/raw/main/config.json)核对 62 层、160 选 8 专家与 96／8 注意力头。工具流程示意不声称工具位于模型内部。
- **Qwen3-Coder-Next**：对照[技术报告 v1](https://arxiv.org/html/2603.00729v1)核对多专家模型蒸馏、未完成轨迹／工具格式惩罚、Git 历史泄漏和阻断方案，以及 SWE-Bench Verified 结果、三种框架和 300 轮上限；补充训练环境保护的适用范围。按[模型卡](https://huggingface.co/Qwen/Qwen3-Coder-Next)明确该检查点仅非思考模式，按[配置](https://huggingface.co/Qwen/Qwen3-Coder-Next/raw/main/config.json)核对 48 层 3+1 混合结构及 512 选 10、共享专家；复用的 Next 示意图只表达层布局，已注明两模型参数配置不完全相同。

既有社区材料的筛选记录见 [知乎阅读](zhihu-reading.md)；四个版本的知乎正文和互动数已补查，详见 [代码社区资料核查](qwen-code-community.md)。上述评测数字来自官方材料及其协议，并非本项目实测。
