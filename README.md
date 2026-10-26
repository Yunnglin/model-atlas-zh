# 模型知识地图

从 Transformer 出发，用大白话理解模型结构、数据、训练、评测与应用。

这是一个可在本地运行的中文学习知识库。当前本地版收录 83 篇知识正文、48 个模型／家族条目、5 类实践案例和 118 条一手资料。首页精选模型与家族，具体版本在连续正文里展开。重点介绍开放权重模型，闭源模型保留简短对照。

## 本地运行

准备 `.node-version` 指定的 Node 24，并使用项目固定的 pnpm：

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

打开终端输出的地址。其他项目占用默认端口时，Astro 会选择可用端口。

## 可以怎么学

1. 首页先看模型之间的结构关联与对比，点击一个模型开始阅读。
2. 模型页按章节连贯讲解结构、数据与训练、评测和应用；目录可以直接跳到关心的位置。
3. 遇到不熟悉的概念，点击正文链接临时查阅；可以继续查其他概念，关闭后仍停在模型原位置。
4. 架构图优先复用官方图，支持放大与缩放，保留来源和许可；第三方交互图提供独立入口。
5. 返回地图保留当前平移与缩放；搜索用于快速找模型、方法和别名。

实线是有依据的结构关联，虚线是比较，不能把它们都看成历史继承。按需展开“连线依据”可查看原始关系解释与资料。Qwen 覆盖一代至 3.8，以及 Audio／ASR、VL、Omni、TTS、Coder、Image、数学与检索等分支；Kimi 与 GLM 各有代际表和重点详解。各分支独立编号，不按主线版本号补造型号。

模型页分别说明已确认的开放权重、只公开报告与闭源服务。未公开的训练数据和结构不作推测。精选范围见 [内容清单](docs/content-scope.md)。

## 检查与构建

```sh
pnpm check
pnpm test
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

验证 GitHub Pages 子路径：

```sh
ATLAS_BASE=/model-atlas-zh/ pnpm build
ATLAS_BASE=/model-atlas-zh/ pnpm test:e2e
```

正文使用 Starlight 和 Pagefind。全文搜索需要构建后的索引，请在 `pnpm build` 后运行 `pnpm preview` 检查。地图节点搜索也支持中文别名。

## 项目边界

- 网站提供知识与可复现案例说明，不执行训练、评测或收费模型调用。
- 案例明确区分说明性方案与真实运行记录，当前没有宣称任何实测改进。
- URL 保存当前模型与概念查阅路径；浏览器会话保存阅读位置和公式展开。首页不提供学习进度或自测。
- 当前只交付本地 demo，后续公开发布需另行确认。部署流程通过手动工作流启用。

架构和依赖方向见 [架构说明](docs/architecture.md)，写作规范见 [内容指南](docs/content-guide.md)。欢迎通过 Issue 反馈不清楚的解释，贡献方式见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可

代码使用 [MIT](LICENSE)。原创知识正文、题目和整理数据使用 [CC BY 4.0](LICENSE-CONTENT.md)。链接指向的论文、代码和其他外部资料保留原作者的许可；本项目复用的 Whisper 与 SAM 官方图及许可分别保存在 `public/figures/whisper/`（MIT）和 `public/figures/sam/`（Apache-2.0）；来源见 [资产记录](docs/assets.md)。
