import { z } from 'zod';
import { emptyTimelineFilters, type TimelineFilters } from '../core/projections/timeline';
import { timelineModelSchema } from '../core/schemas/knowledge';

const schema = z.object({
  architecture: timelineModelSchema.shape.architecture.or(z.literal('all')),
  modalities: timelineModelSchema.shape.modalities,
  family: z.string(),
});

export function readTimelineFilters(): TimelineFilters {
  try {
    return schema.parse(JSON.parse(sessionStorage.getItem('atlas:filters') ?? 'null'));
  } catch {
    return emptyTimelineFilters;
  }
}

export function writeTimelineFilters(filters: TimelineFilters): void {
  try {
    sessionStorage.setItem('atlas:filters', JSON.stringify(filters));
  } catch {
    // Filtering remains usable when browser storage is unavailable.
  }
}
