# Qwen1.5 稠密 110B 部署观察补充

2026-10-29 阅读[程序锅锅的部署实测](https://www.53ai.com/news/OpenSourceLLM/2268.html)可见部分：文章在云资源上部署 Qwen1.5-110B-Chat，以未量化、Transformers `load_in_8bit` 和 bitsandbytes NF4 双重量化分别报告 215 GB、113 GB、62 GB 显存，并展示加载代码；未完整给出输入长度、并发、设备及版本等条件，不能视为硬件普适保证。页面末尾有登录阅读提示，本次未访问受限部分。

[官方 110B 模型卡](https://huggingface.co/Qwen/Qwen1.5-110B-Chat)确认检查点身份，不能独立证明该作者的测量数字；[Qwen2 官方说明](https://qwenlm.github.io/blog/qwen2/)确认 Qwen1.5 稠密 32B 和 110B 使用 GQA。本次补充的是第三方部署实例，而非结构、训练或标准评测的独立验证。

此前知乎候选页 [程序锅](https://zhuanlan.zhihu.com/p/1946592744748311590) 本次通过已登录 Chrome 打开时导航超时，未读取该页作者、赞同或收藏；不能将此站外文章视为知乎原文实读，也不能推断两篇内容完全一致。未运行模型或复现资源测量。
