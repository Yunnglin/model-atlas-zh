import { createStore } from 'zustand/vanilla';
import type { KnowledgeBase } from '../../core/schemas/knowledge';
import { initialExpansion, toggleBranch } from '../../core/projections/navigation';

export interface AtlasSelection {
  trail: readonly string[];
  readerOpen: boolean;
  expanded: readonly string[];
}
export interface AtlasState {
  selection: AtlasSelection;
  setSelection: (selection: AtlasSelection) => void;
  visit: (id: string) => void;
  returnTo: (index: number) => void;
  closeReader: () => void;
  reset: () => void;
  toggle: (id: string, data: KnowledgeBase) => void;
}

export function visitSelection(state: AtlasSelection, id: string): AtlasSelection {
  const index = state.trail.indexOf(id);
  return {
    ...state,
    trail: index < 0 ? [...state.trail, id] : state.trail.slice(0, index + 1),
    readerOpen: true,
  };
}

export function createAtlasStore(initial: AtlasSelection, data: KnowledgeBase) {
  return createStore<AtlasState>((set, get) => ({
    selection: initial,
    setSelection: (selection) =>
      set((state) =>
        state.selection.readerOpen === selection.readerOpen &&
        state.selection.trail.join('|') === selection.trail.join('|') &&
        state.selection.expanded.join('|') === selection.expanded.join('|')
          ? state
          : { selection },
      ),
    visit: (id) => get().setSelection(visitSelection(get().selection, id)),
    returnTo: (index) =>
      get().setSelection({
        ...get().selection,
        trail: get().selection.trail.slice(0, index + 1),
        readerOpen: true,
      }),
    closeReader: () => get().setSelection({ ...get().selection, readerOpen: false }),
    toggle: (id, knowledge) =>
      get().setSelection({
        ...get().selection,
        expanded: toggleBranch(knowledge, get().selection.expanded, id),
      }),
    reset: () =>
      get().setSelection({ trail: [], readerOpen: false, expanded: initialExpansion(data) }),
  }));
}
