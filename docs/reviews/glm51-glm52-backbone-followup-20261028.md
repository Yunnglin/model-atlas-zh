# GLM-5.1 / GLM-5.2 模型配置与图示复核

核对日期：2026-10-28。本次核查模型卡、配置和两个页面中的重点结构、评测与许可；没有实际加载权重、运行训练或评测，也没有逐句核对所有应用案例。

- [GLM-5.1 官方配置](https://huggingface.co/zai-org/GLM-5.1/raw/main/config.json)和 [GLM-5.2 官方配置](https://huggingface.co/zai-org/GLM-5.2/raw/main/config.json)均列出 `num_hidden_layers=78`、`first_k_dense_replace=3`、`hidden_size=6144`、64 个注意力头、256 个路由专家、每 token 选 8 个及 1 个共享专家。新绘制的两页共用图用于说明这些共同配置，省略归一化、残差和 MTP；两代权重各自独立。
- GLM-5.2 配置的 `indexer_types` 前七项依次为 `full、full、full、shared、shared、shared、full`。依据 [IndexCache 论文第 3 节](https://arxiv.org/html/2603.12201)对 full/shared 的定义，文中用从一开始编号的层 3–6、层 7 举例说明复用。论文的方法解释不代表独立验证了 5.2 的私有训练流程。
- 对照 [5.1 模型卡](https://huggingface.co/zai-org/GLM-5.1)与 [5.2 模型卡](https://huggingface.co/zai-org/GLM-5.2)：两者均标记 MIT；5.1 的 SWE-bench Pro 为 58.4，5.2 模型卡的对照表给出 62.1 和 58.4。5.1 模型卡将 Terminus-2 的 63.5 写在 Terminal-Bench 2.0，而 5.2 模型卡将相同数值放在 2.1 表格，原文已记录口径不一致，无法仅凭数值判断是否为相同实验。
- 两个页面原有各一张已登记教学图；新增共用主干图通过 Markdown 直接引用，不覆盖原有图。SVG 已用 Chromium 渲染检查，文字与箭头可见。
- 知乎资料：两篇正文已有厂方知乎发布链接；本次未重新登录或阅读知乎文章，也未核验互动数量。
