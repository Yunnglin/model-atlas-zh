import { emptyProgress, progressSchema, type Progress } from '../core/schemas/progress';

const key = 'model-atlas-zh:progress:v1';

export function readProgress(): Progress {
  try {
    const text = localStorage.getItem(key);
    return text ? progressSchema.parse(JSON.parse(text)) : emptyProgress();
  } catch {
    return emptyProgress();
  }
}

export function writeProgress(progress: Progress): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(progressSchema.parse(progress)));
    return true;
  } catch {
    return false;
  }
}

export function parseProgress(text: string): Progress {
  return progressSchema.parse(JSON.parse(text));
}

export function downloadProgress(progress: Progress): void {
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = 'model-atlas-progress.json';
  link.click();
  URL.revokeObjectURL(url);
}
