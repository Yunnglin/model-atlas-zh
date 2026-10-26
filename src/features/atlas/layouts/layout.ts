import type { ELK } from 'elkjs/lib/elk-api';
import workerUrl from 'elkjs/lib/elk-worker.min.js?url';
import type { SimulationNodeDatum, SimulationLinkDatum } from 'd3-force';
import { MarkerType, type Node, type Edge } from '@xyflow/react';
import { groupRelations } from '../../../core/queries/knowledge';
import {
  relationLabels,
  modalityLabels,
  type KnowledgeBase,
  type KnowledgeNode,
  type MapView,
  type Modality,
} from '../../../core/schemas/knowledge';

export type CardNode = Node<{ knowledge: KnowledgeNode }, 'knowledge'>;
export type LaneNode = Node<{ label: string }, 'lane'>;
export interface CanvasLayout {
  nodes: (CardNode | LaneNode)[];
  edges: Edge[];
}
const width = 220;
const height = 132;
let elkPromise: Promise<ELK> | undefined;
function getElk(): Promise<ELK> {
  elkPromise ??= import('elkjs/lib/elk-api.js').then(
    ({ default: Engine }) => new Engine({ workerUrl, algorithms: ['layered'] }),
  );
  return elkPromise;
}

export async function layoutGraph(data: KnowledgeBase, view: MapView): Promise<CanvasLayout> {
  const headings: LaneNode[] = [];
  const cards: CardNode[] = data.nodes.map((knowledge) => ({
    id: knowledge.id,
    type: 'knowledge',
    position: { x: 0, y: 0 },
    width,
    height,
    data: { knowledge },
    ariaLabel: `${knowledge.title}，${modalityLabels[knowledge.modality]}`,
  }));
  if (view === 'network') {
    const { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } =
      await import('d3-force');
    const points: (SimulationNodeDatum & { id: string })[] = cards.map((node) => ({ id: node.id }));
    const links: SimulationLinkDatum<(typeof points)[number]>[] = data.relations.map((r) => ({
      source: r.from,
      target: r.to,
    }));
    const simulation = forceSimulation(points)
      .force(
        'link',
        forceLink<(typeof points)[number], SimulationLinkDatum<(typeof points)[number]>>(links)
          .id((node) => node.id)
          .distance(260),
      )
      .force('charge', forceManyBody().strength(-900))
      .force('center', forceCenter(450, 330))
      .force('collision', forceCollide(130))
      .stop();
    simulation.tick(200);
    const positions = new Map(points.map((p) => [p.id, p]));
    for (const card of cards) {
      const point = positions.get(card.id)!;
      card.position = { x: point.x ?? 0, y: point.y ?? 0 };
    }
  } else if (view === 'timeline') {
    const elk = await getElk();
    const modalities: Modality[] = ['shared', 'nlp', 'cv', 'audio', 'omni'];
    const groups = await Promise.all(
      modalities.map(async (modality) => {
        const members = cards
          .filter((card) => card.data.knowledge.modality === modality)
          .sort(
            (a, b) =>
              (a.data.knowledge.year ?? 2100) - (b.data.knowledge.year ?? 2100) ||
              a.id.localeCompare(b.id),
          );
        return elk.layout({
          id: modality,
          layoutOptions: {
            'elk.algorithm': 'layered',
            'elk.direction': 'DOWN',
            'elk.layered.spacing.nodeNodeBetweenLayers': '45',
          },
          children: members.map((card) => ({ id: card.id, width, height })),
          edges: members.slice(1).map((card, index) => ({
            id: `order-${card.id}`,
            sources: [members[index]!.id],
            targets: [card.id],
          })),
        });
      }),
    );
    for (const [index, group] of groups.entries()) {
      if (group.children?.length)
        headings.push({
          id: `lane-${group.id}`,
          type: 'lane',
          data: { label: modalityLabels[group.id as Modality] },
          position: { x: index * 275, y: -48 },
          width,
          height: 34,
          selectable: false,
          focusable: false,
        });
      for (const child of group.children ?? []) {
        const card = cards.find((node) => node.id === child.id)!;
        card.position = { x: index * 275 + (child.x ?? 0), y: child.y ?? 0 };
      }
    }
  } else {
    const elk = await getElk();
    const layout = await elk.layout({
      id: 'knowledge',
      layoutOptions: {
        'elk.algorithm': 'layered',
        'elk.direction': 'RIGHT',
        'elk.spacing.nodeNode': '35',
        'elk.layered.spacing.nodeNodeBetweenLayers': '110',
      },
      children: cards.map((node) => ({ id: node.id, width, height })),
      edges: data.relations
        .filter((r) => r.kind === 'uses' || r.kind === 'prerequisite' || r.kind === 'extends')
        .map((r) => ({ id: r.id, sources: [r.to], targets: [r.from] })),
    });
    for (const child of layout.children ?? []) {
      const card = cards.find((node) => node.id === child.id)!;
      card.position = { x: child.x ?? 0, y: child.y ?? 0 };
    }
  }
  return {
    nodes: [...headings, ...cards],
    edges: groupRelations(data.relations).map((group) => {
      const relation = group[0]!;
      const source = cards.find((card) => card.id === relation.from)!;
      const target = cards.find((card) => card.id === relation.to)!;
      const rightward = source.position.x < target.position.x;
      return {
        id: relation.id,
        source: relation.from,
        target: relation.to,
        sourceHandle: rightward ? 'out-right' : 'out-left',
        targetHandle: rightward ? 'in-left' : 'in-right',
        label: [...new Set(group.map((r) => relationLabels[r.kind]))].join(' · '),
        type: 'smoothstep',
        markerEnd: { type: MarkerType.ArrowClosed, width: 12, height: 12 },
        style: {
          stroke: '#98a7b7',
          strokeWidth: 1.15,
          strokeDasharray: relation.kind === 'compared-with' ? '5 5' : undefined,
        },
        data: {
          explanation: group.map((r) => `${relationLabels[r.kind]}：${r.explanation}`).join('；'),
        },
      };
    }),
  };
}
