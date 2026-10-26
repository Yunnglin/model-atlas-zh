import { z } from 'zod';

const viewportSchema = z.object({
  x: z.number(),
  y: z.number(),
  zoom: z.number().min(0.2).max(1.6),
});
type SavedViewport = z.infer<typeof viewportSchema>;

export function readViewport(key: string): SavedViewport | undefined {
  try {
    const text = sessionStorage.getItem(`atlas:viewport:${key}`);
    return text ? viewportSchema.parse(JSON.parse(text)) : undefined;
  } catch {
    return undefined;
  }
}

export function writeViewport(key: string, value: SavedViewport): void {
  try {
    sessionStorage.setItem(`atlas:viewport:${key}`, JSON.stringify(value));
  } catch {
    /* The selected node remains recoverable through its URL. */
  }
}
