# 模型知识地图

从 Transformer 出发，用大白话理解模型结构、数据、训练、评测与应用。

这是一个可在本地运行的中文学习知识库。当前为树形导航的本地 demo：保留 30 个知识节点，先深入 Whisper 的结构、训练、评测、应用分支。

## 本地运行

准备 `.node-version` 指定的 Node 24，并使用项目固定的 pnpm：

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

打开终端输出的地址。其他项目占用默认端口时，Astro 会选择可用端口。

## 可以怎么学

1. 从 Transformer 下的三种结构路线选择入口。
2. 展开“编码器＋解码器 → Whisper”，再选结构、训练、评测或应用。
3. 同级只深入一个分支，点击知识点名称阅读原理与例子。
4. 在详情的“关联知识”查看采用、对比、前置关系及来源，地图不增加交叉线。
5. 补充概念后返回原来的文章位置；“收起全部”回到主干。

详情中的“采用”“先理解”“对比”等关系分别有解释和资料依据，树枝只表示学习导航。“先理解”是学习顺序，并不表示模型继承。年份对应参考资料的公开时间。

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
- URL 保存展开与阅读状态；浏览器会话保存阅读位置和公式展开。首页不提供学习进度或自测。
- 当前只交付本地 demo，后续再扩充内容和公开发布。部署流程通过手动工作流启用。

架构和依赖方向见 [架构说明](docs/architecture.md)，写作规范见 [内容指南](docs/content-guide.md)。欢迎通过 Issue 反馈不清楚的解释，贡献方式见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可

代码使用 [MIT](LICENSE)。原创知识正文、题目和整理数据使用 [CC BY 4.0](LICENSE-CONTENT.md)。链接指向的论文、代码和其他外部资料保留原作者的许可；没有将它们整体复制到本项目。
