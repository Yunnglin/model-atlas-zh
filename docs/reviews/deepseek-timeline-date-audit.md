# DeepSeek 时间轴日期核对

核对日期：2026-10-28。逐项检查当前时间轴上 15 个 DeepSeek 节点所登记的日期来源。年份和月份与所用资料一致；论文首次提交、官方产品发布、权重上传是不同事件。

| 节点                               | 时间轴年月及口径        | 对应来源日期                                                     |
| ---------------------------------- | ----------------------- | ---------------------------------------------------------------- |
| DeepSeek LLM                       | 2024-01，论文           | [2024-01-05](https://arxiv.org/abs/2401.02954)                   |
| DeepSeek-Coder                     | 2024-01，论文           | [2024-01-25](https://arxiv.org/abs/2401.14196)                   |
| DeepSeekMath                       | 2024-02，论文           | [2024-02-05](https://arxiv.org/abs/2402.03300)                   |
| DeepSeek-V2                        | 2024-05，官方发布       | [2024-05-06](https://github.com/deepseek-ai/DeepSeek-V2)         |
| DeepSeek-Coder-V2                  | 2024-06，论文           | [2024-06-17](https://arxiv.org/abs/2406.11931)                   |
| DeepSeek-VL2                       | 2024-12，论文           | [2024-12-13](https://arxiv.org/abs/2412.10302)                   |
| DeepSeek-V3                        | 2024-12，官方发布       | [2024-12-26](https://deepseek.com/en/news/deepseek-v3/)          |
| DeepSeek-R1                        | 2025-01，官方发布       | [2025-01-20](https://deepseek.com/news/deepseek-r1/)             |
| Janus-Pro                          | 2025-01，官方发布       | [2025-01-27](https://github.com/deepseek-ai/Janus)               |
| DeepSeek-V3.1                      | 2025-08，官方发布       | [2025-08-21](https://www.deepseek.com/en/news/deepseek-v3-1/)    |
| DeepSeekMath-V2                    | 2025-11，论文           | [2025-11-27](https://arxiv.org/abs/2511.22570)                   |
| DeepSeek-V3.2                      | 2025-12，官方发布       | [2025-12-01](https://deepseek.com/en/news/deepseek-v3-2/)        |
| DeepSeek-V4-Flash、DeepSeek-V4-Pro | 2026-04，官方预览版发布 | [2026-04-24](https://www.deepseek.com/news/v4-preview/)          |
| DeepSeek-V4.1-Flash                | 2026-09，官方发布       | [2026-09-10](https://www.deepseek.com/news/deepseek-v4-1-flash/) |

本次将 V3 和 R1 从论文日期改为已有官方发布公告：论文分别于 2024-12-27 与 2025-01-22 首次提交，均晚于公告；由于地图只按月份排列，位置不变。

两条较早的权重上传线索不能单独证明当时仓库公开可见：DeepSeek-Coder 1.3B 的[官方模型仓库上传提交](https://huggingface.co/deepseek-ai/deepseek-coder-1.3b-base/commit/e5babb80b8539a4e85dd2418c0ee611522276987)日期为 2023-10-28，DeepSeek LLM 7B 的[上传提交](https://huggingface.co/deepseek-ai/deepseek-llm-7b-base/commit/260dcda0d4c5c173cb0ab820111fe729877321f6)为 2023-11-29。它们早于论文，但无法仅凭上传时间证明公开发布的准确月份，也不能推定其他规格的日期；这两条时间轴暂保留可核对的论文日期，模型卡明确注明区别。
