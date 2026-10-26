import { useState } from 'react';
import { ArrowUpRightIcon, DownloadSimpleIcon, UploadSimpleIcon } from '@phosphor-icons/react';
import type { KnowledgeBase } from '../../core/schemas/knowledge';
import type { Progress } from '../../core/schemas/progress';
import { downloadProgress, parseProgress } from '../../platform/progress';
import styles from './Practice.module.css';

interface Props {
  data: KnowledgeBase;
  progress: Progress;
  focused?: string;
  onSelect: (id: string) => void;
  onProgress: (progress: Progress) => void;
}

export function Practice({ data, progress, focused, onSelect, onProgress }: Props) {
  const [message, setMessage] = useState('');
  const questions = [...data.questions].sort(
    (a, b) => Number(b.id === focused) - Number(a.id === focused),
  );
  return (
    <div className={styles.practice}>
      <header>
        <div>
          <span>先试着解释，再看答案</span>
          <h1>把“看过”变成“能讲清楚”</h1>
          <p>参考答案是检查要点，不是唯一话术。用一个例子说明，再解释它的局限。</p>
        </div>
        <div className={styles.tools}>
          <button onClick={() => downloadProgress(progress)}>
            <DownloadSimpleIcon size={17} />
            导出进度
          </button>
          <label>
            <UploadSimpleIcon size={17} />
            导入进度
            <input
              type="file"
              accept="application/json,.json"
              aria-label="导入学习进度"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                void file
                  .text()
                  .then((text) => {
                    const imported = parseProgress(text);
                    onProgress(imported);
                    setMessage('已导入学习进度。');
                  })
                  .catch(() => setMessage('文件格式或版本不正确，现有进度未改变。'));
                event.currentTarget.value = '';
              }}
            />
          </label>
        </div>
      </header>
      <p role="status">{message}</p>
      <div className={styles.questions}>
        {questions.map((question, index) => (
          <article key={question.id} id={question.id}>
            <div className={styles.number}>
              问题 {String(index + 1).padStart(2, '0')} ·{' '}
              {progress.answers[question.id] === 'understood'
                ? '已掌握'
                : progress.answers[question.id] === 'review'
                  ? '待复习'
                  : '未自测'}
            </div>
            <h2>{question.title}</h2>
            <textarea
              aria-label={`${question.title} 你的思路`}
              placeholder="先在心里或这里讲一遍：问题是什么、机制是什么、有什么取舍…（草稿不保存）"
              rows={2}
            />
            <details>
              <summary>展开答案要点与追问</summary>
              <ul>
                {question.answer.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className={styles.followup}>
                <strong>继续追问：</strong>
                {question.followup}
              </p>
              <div className={styles.sources}>
                {question.sources.map((id) => {
                  const source = data.sources.find((s) => s.id === id)!;
                  return (
                    <a href={source.url} target="_blank" rel="noreferrer" key={id}>
                      {source.title}
                      <ArrowUpRightIcon size={13} />
                    </a>
                  );
                })}
              </div>
            </details>
            <footer>
              <div>
                {question.nodes.map((id) => (
                  <button className={styles.topic} key={id} onClick={() => onSelect(id)}>
                    {data.nodes.find((n) => n.id === id)?.title}
                    <ArrowUpRightIcon size={14} />
                  </button>
                ))}
              </div>
              <div className={styles.actions}>
                <button
                  aria-pressed={progress.answers[question.id] === 'review'}
                  onClick={() =>
                    onProgress({
                      ...progress,
                      answers: { ...progress.answers, [question.id]: 'review' },
                    })
                  }
                >
                  还需复习
                </button>
                <button
                  aria-pressed={progress.answers[question.id] === 'understood'}
                  onClick={() =>
                    onProgress({
                      ...progress,
                      answers: { ...progress.answers, [question.id]: 'understood' },
                    })
                  }
                >
                  我能讲清了
                </button>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
