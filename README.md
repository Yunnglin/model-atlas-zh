# 模型知识地图

从 Transformer 出发，用大白话理解模型结构、数据、训练、评测与应用。

这是一个可在本地运行的中文学习知识库。当前为第一阶段设计小样：30 个知识节点、三种地图视图、两条学习路线、8 道面试自测与一个六阶段语音助手案例。

## 本地运行

准备 `.node-version` 指定的 Node 24，并使用项目固定的 pnpm：

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

打开终端输出的地址。其他项目占用默认端口时，Astro 会选择可用端口。

## 可以怎么学

1. 从 Transformer 或搜索结果选择一个模型。
2. 在“结构、数据与训练、评测与诊断、应用与闭环”之间切换。
3. 补一项前置知识，再返回原来的视角与位置。
4. 阅读正文中的例子和可展开公式。
5. 按岗位路线学习，或先尝试面试问题，再展开答案要点。
6. 用语音助手案例检查数据、训练、评测、应用、错例和数据改进是否相互衔接。

地图中的“采用”“先理解”“对比”等关系分别有解释和资料依据。“先理解”是学习顺序，并不表示模型继承。年份对应参考资料的公开时间。

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
- 学习状态保存在浏览器；支持导出与导入，作答草稿不保存。
- 第一阶段先比较展示方式，再扩充内容和公开发布。部署流程通过手动工作流启用。

架构和依赖方向见 [架构说明](docs/architecture.md)，写作规范见 [内容指南](docs/content-guide.md)。欢迎通过 Issue 反馈不清楚的解释，贡献方式见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可

代码使用 [MIT](LICENSE)。原创知识正文、题目和整理数据使用 [CC BY 4.0](LICENSE-CONTENT.md)。链接指向的论文、代码和其他外部资料保留原作者的许可；没有将它们整体复制到本项目。
