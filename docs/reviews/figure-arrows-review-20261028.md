# 教学图箭头渲染检查

核查日期：2026-10-28。部分 SVG 的一个路径包含多段独立连线，但共用一个 `marker-end`；Chromium 只在最后一段末尾显示箭头。已将这些连线拆为独立路径，保留每段的起点、终点与样式。检查范围为 `public/figures/` 中使用 `marker-end` 的多子路径；本轮不核验图中模型结构或论文事实。

以 Qwen3-LiveTranslate 在 Chromium 截图复现缺少箭头，修复后对下列 16 张图进行浏览器缩略渲染检查。以下记录修复后的 SHA-256；其中 MiniMax-M2.5 的已有资产登记也已同步。

| 本地图                                             | SHA-256                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| `public/figures/glm52/overview.svg`                | `7c76e17bdbac0925b76012a8ecdf8bad9cdcae04faaf2e43b7607897e22bd24f` |
| `public/figures/glm53-flash/overview.svg`          | `6338254df28e6780240adb6f0b82738b0abe6d12a91daaa3831599d2e7f09773` |
| `public/figures/swin/overview.svg`                 | `0a49b41a9c7659b3c13eb9c0dc19bb6215303febc5e9cac9c1d1ba8f7714b8be` |
| `public/figures/glm-v/overview.svg`                | `7c746fa65186021b9718d047257adccae12401725ebf8eb390daf15853b844af` |
| `public/figures/minimax-m25/overview.svg`          | `fca5a768eb0b1be8047336f9bae7f1bea139598a8f610c79ebefe7b0947342ce` |
| `public/figures/qwen3-livetranslate/overview.svg`  | `51dccb7f83a20dcd9e639d954ebae0a18b563bd67e4440731b29bfb0083e6728` |
| `public/figures/vit/overview.svg`                  | `5a08900a10c59bbd4bcdb5a37417a666847cdfe97e08022f58467a610c0e80a8` |
| `public/figures/qwen3-vl-reranker/overview.svg`    | `803deaeb877f4a09e371b2e6c4d696dee4709e43668f3aba8d20c6906c528065` |
| `public/figures/conformer/overview.svg`            | `18e25f45eb6491cdef44e8eb343a0f712ed17a411a23a75f39a4827b01d40548` |
| `public/figures/minimax-m27/overview.svg`          | `5d3ae3a2910ee18da0fd70b9805f2b7470679528adf1fed2603e2604458fa2b4` |
| `public/figures/gemini15/overview.svg`             | `51a3deed73f84adb33e6ff1c2c23f07bd8dd8b2de11340bbcea01c8d91c41f9f` |
| `public/figures/qwen3-reranker/overview.svg`       | `1cdb06e24a0b80ed2438e7a13868238b6eb0bb7fcfa66055fdff934f6c679a19` |
| `public/figures/llava/overview.svg`                | `7f683c50e14f4b05d552b9848f0b47fb22206a5e131963607569613049815009` |
| `public/figures/kimi-k2/overview.svg`              | `c9e49f961e553c26d181ba254a72a1ac873b5d66e92b2fa18e7a869e5ffb01d0` |
| `public/figures/qwen3guard/overview.svg`           | `b739f570e76aa8455430734363ae367ff4e8d5f5c7c3825e402f9586bdbf135a` |
| `public/figures/qwen35-livetranslate/overview.svg` | `78f1c6fcfbc3694fc0232b15104d0b9dc0a0767586759a239a5f1d196fbfab40` |

新增单元检查覆盖已登记的 SVG 教学图，防止一个带终点标记的路径再次包含多段独立连线。
