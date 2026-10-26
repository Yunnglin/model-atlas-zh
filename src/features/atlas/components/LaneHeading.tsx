import type { NodeProps } from '@xyflow/react';
import type { LaneNode } from '../layouts/layout';
import styles from '../Atlas.module.css';

export function LaneHeading({ data }: NodeProps<LaneNode>) {
  return (
    <div className={styles.laneHeading}>
      {data.label}
      <small>参考资料时间 ↓</small>
    </div>
  );
}
