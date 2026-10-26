import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useReactFlow,
  getNodesBounds,
  getViewportForBounds,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { KnowledgeBase, MapView } from '../../../core/schemas/knowledge';
import type { MapSelection } from '../../../core/projections/project';
import { layoutGraph, type CanvasLayout } from '../layouts/layout';
import { KnowledgeCard } from './KnowledgeCard';
import { LaneHeading } from './LaneHeading';
import { readViewport, writeViewport } from '../../../platform/viewport';
import styles from '../Atlas.module.css';

const nodeTypes = { knowledge: KnowledgeCard, lane: LaneHeading };
function viewportKey(container: HTMLElement): string {
  return `${location.pathname}${location.search}|${container.clientWidth}x${container.clientHeight}`;
}

interface Props {
  data: KnowledgeBase;
  selection: MapSelection;
  onSelect: (id: string) => void;
  onRelation: (message: string) => void;
}

function Canvas({ data, selection, onSelect, onRelation }: Props) {
  const [layout, setLayout] = useState<CanvasLayout & { input?: KnowledgeBase; view?: MapView }>({
    nodes: [],
    edges: [],
  });
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState('');
  const generation = useRef(0);
  const container = useRef<HTMLDivElement>(null);
  const flow = useReactFlow();
  useEffect(() => {
    const request = ++generation.current;
    let disposed = false;
    setBusy(true);
    setError('');
    void layoutGraph(data, selection.view)
      .then((result) => {
        if (disposed || request !== generation.current) return;
        setLayout({ ...result, input: data, view: selection.view });
        setBusy(false);
      })
      .catch(() => {
        if (disposed) return;
        setError('地图布局暂时未完成，请切换视图重试。右侧正文仍可阅读。');
        setBusy(false);
      });
    return () => {
      disposed = true;
    };
  }, [data, selection.view]);
  useEffect(() => {
    if (layout.input !== data || layout.view !== selection.view) return;
    if (layout.nodes.length) {
      const frame = requestAnimationFrame(() => {
        const visible = container.current;
        if (!visible) return;
        const saved = readViewport(viewportKey(visible));
        if (saved) {
          void flow.setViewport(saved);
          return;
        }
        const neighborhood = new Set([selection.node]);
        for (const edge of layout.edges) {
          if (edge.source === selection.node || edge.target === selection.node) {
            neighborhood.add(edge.source);
            neighborhood.add(edge.target);
          }
        }
        const targets = layout.nodes.filter(
          (node) => selection.view !== 'tree' || neighborhood.has(node.id),
        );
        void flow.setViewport(
          getViewportForBounds(
            getNodesBounds(targets),
            visible.clientWidth,
            visible.clientHeight,
            0.35,
            0.9,
            0.15,
          ),
        );
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [data, layout, flow, selection.node, selection.view]);
  const nodes = useMemo(
    () => layout.nodes.map((node) => ({ ...node, selected: node.id === selection.node })),
    [layout.nodes, selection.node],
  );
  const edges = useMemo(
    () =>
      layout.edges.map((edge): Edge => ({
        ...edge,
        style: {
          ...edge.style,
          stroke:
            edge.source === selection.node || edge.target === selection.node
              ? '#13858a'
              : '#aebac6',
          opacity: edge.source === selection.node || edge.target === selection.node ? 1 : 0.45,
        },
      })),
    [layout.edges, selection.node],
  );
  return (
    <div
      ref={container}
      className={styles.canvas}
      data-testid="map-canvas"
      aria-label="交互式知识地图"
      aria-busy={busy}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={(_, node) => onSelect(node.id)}
        onNodesChange={(changes) => {
          for (const change of changes) {
            if (change.type === 'select' && change.selected && change.id !== selection.node)
              onSelect(change.id);
          }
        }}
        onEdgeClick={(_, edge) => onRelation(String(edge.data?.explanation ?? ''))}
        onMoveEnd={(_, viewport) => {
          if (container.current) writeViewport(viewportKey(container.current), viewport);
        }}
        nodesDraggable={false}
        nodesConnectable={false}
        deleteKeyCode={null}
        minZoom={0.2}
        maxZoom={1.6}
        ariaLabelConfig={{
          'controls.zoomIn.ariaLabel': '放大地图',
          'controls.zoomOut.ariaLabel': '缩小地图',
          'controls.fitView.ariaLabel': '显示完整地图',
          'node.a11yDescription.default': '按 Enter 选择节点。使用 Tab 切换节点。',
        }}
      >
        <Background color="#dce4ea" gap={24} size={1} />
        <Controls showInteractive={false} />
        <MiniMap pannable zoomable nodeColor="#b9d8dc" />
      </ReactFlow>
      {busy && (
        <p className={styles.mapNotice} role="status">
          正在整理节点位置…
        </p>
      )}
      {error && (
        <p className={styles.mapNotice} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function MapCanvas(props: Props) {
  return (
    <ReactFlowProvider>
      <Canvas {...props} />
    </ReactFlowProvider>
  );
}
