# Qwen-Image-2.1 知乎部署资料补查

- 2026-10-28 用已登录 Chrome 阅读 [nihui 的《用 ncnn 跑 Qwen-Image-2.1：完整 BF16、2GB 显存和全平台 Vulkan》](https://zhuanlan.zhihu.com/p/2088230771794371280)，页面显示 2026-09-29 编辑，观察到 163 赞同、237 收藏，数字随时间变化。作者直接介绍其 ncnn/Vulkan 实现，包括分阶段加载、主机权重、KV 缓存、VAE 分块和部署权衡；2GB 显存不代表完整模型只需 2GB 总内存。
- [Qwen 官方模型卡](https://huggingface.co/Qwen/Qwen-Image-2.1)确认该版本的视觉生成组件为 7B、32 层 Single-Stream DiT，支持生成与编辑并标注 Qwen Research License；[作者的项目仓库](https://github.com/nihui/qwenimage-ncnn-vulkan)明确针对 Qwen-Image-2.1。仓库代码许可与模型权重许可应分别核查。
- 该文是第三方实现的作者说明，不是 Qwen 官方运行时和独立复现实测；其低显存与速度数值不能作为所有设备的保证。模型页仅把它作为部署扩展阅读，未采纳其数值作为本库测试结果。
