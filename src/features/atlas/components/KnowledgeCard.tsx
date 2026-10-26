import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { CpuIcon, WaveformIcon, ImageIcon, TextTIcon, CubeIcon } from '@phosphor-icons/react';
import type { CardNode } from '../layouts/layout';
import styles from '../Atlas.module.css';

const icons = {
  shared: CpuIcon,
  nlp: TextTIcon,
  cv: ImageIcon,
  audio: WaveformIcon,
  omni: CubeIcon,
};

export const KnowledgeCard = memo(function KnowledgeCard({ data, selected }: NodeProps<CardNode>) {
  const node = data.knowledge;
  const Icon = icons[node.modality];
  return (
    <div
      className={`${styles.card} ${selected ? styles.cardSelected : ''}`}
      data-modality={node.modality}
    >
      <Handle id="in-left" type="target" position={Position.Left} />
      <Handle id="in-right" type="target" position={Position.Right} />
      <div className={styles.cardHeading}>
        <Icon size={20} weight="duotone" />
        <strong>{node.title}</strong>
      </div>
      <div className={styles.cardQuestion}>{node.question}</div>
      <span className={styles.cardDate}>
        {node.kind === 'model'
          ? '模型'
          : node.kind === 'method'
            ? '方法'
            : node.kind === 'metric'
              ? '评测'
              : node.kind === 'case'
                ? '案例'
                : '结构'}
        {node.year ? ` · ${node.year}` : ''}
      </span>
      <Handle id="out-left" type="source" position={Position.Left} />
      <Handle id="out-right" type="source" position={Position.Right} />
    </div>
  );
});
