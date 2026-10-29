# ChatGLM3 缓存与许可复核（2026-10-28）

- [官方配置](https://huggingface.co/zai-org/chatglm3-6b/blob/main/config.json)为 28 层、32 个查询头、2 组键值头、每头 128 维。单请求 8192 token、BF16 时，键值缓存估算 28 × 2 × 2 × 128 × 8192 × 2 = 234,881,024 字节，即 224 MiB；32 组的假想对照为 3584 MiB。不是设备实测。
- [模型卡](https://huggingface.co/zai-org/chatglm3-6b)区分 Apache-2.0 代码许可和模型权重协议，[官方项目说明](https://github.com/zai-org/ChatGLM3)列明商业使用登记条件。正文现将代码和权重许可分开表述。
- 复核官方仓库的 MMLU、C-Eval 与 LongBench 数值及模型版本，正文与其所列一致；未复现评测或重新核查知乎互动数。
