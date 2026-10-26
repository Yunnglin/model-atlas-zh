import { createStore } from 'zustand/vanilla';
import type { MapSelection } from '../../core/projections/project';

export interface AtlasState {
  selection: MapSelection;
  setSelection: (patch: Partial<MapSelection>) => void;
}

export function createAtlasStore(selection: MapSelection) {
  return createStore<AtlasState>((set) => ({
    selection,
    setSelection: (patch) =>
      set((state) => {
        const selection = { ...state.selection, ...patch };
        return Object.keys(patch).every(
          (key) =>
            selection[key as keyof MapSelection] === state.selection[key as keyof MapSelection],
        )
          ? state
          : { selection };
      }),
  }));
}
