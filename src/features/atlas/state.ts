import { createStore } from 'zustand/vanilla';
import type { KnowledgeBase } from '../../core/schemas/knowledge';
import { isModel } from '../../core/projections/model-map';

export interface AtlasSelection {
  model?: string;
  concepts: readonly string[];
}
export function visitSelection(state: AtlasSelection, id: string): AtlasSelection {
  const index = state.concepts.indexOf(id);
  return {
    ...state,
    concepts: index < 0 ? [...state.concepts, id] : state.concepts.slice(0, index + 1),
  };
}
export function createAtlasStore(initial: AtlasSelection, data: KnowledgeBase) {
  return createStore<{
    selection: AtlasSelection;
    setSelection: (selection: AtlasSelection) => void;
    visit: (id: string) => void;
    returnTo: (index: number) => void;
    closeReader: () => void;
    reset: () => void;
  }>((set, get) => ({
    selection: initial,
    setSelection: (selection) =>
      set((state) =>
        state.selection.model === selection.model &&
        state.selection.concepts.join('|') === selection.concepts.join('|')
          ? state
          : { selection },
      ),
    visit: (id) => {
      const node = data.nodes.find((item) => item.id === id);
      if (!node) return;
      get().setSelection(
        isModel(node) ? { model: id, concepts: [] } : visitSelection(get().selection, id),
      );
    },
    returnTo: (index) =>
      get().setSelection({
        ...get().selection,
        concepts: get().selection.concepts.slice(0, index + 1),
      }),
    closeReader: () => get().setSelection({ ...get().selection, concepts: [] }),
    reset: () => get().setSelection({ concepts: [] }),
  }));
}
