import type { TimelineModel } from '../../../core/schemas/knowledge';
import { timelineOrganizations } from '../../../core/projections/timeline';

export const NODE_WIDTH = 140,
  NODE_HEIGHT = 30,
  COLUMN_STEP = 170,
  ROW_STEP = 36,
  AXIS_WIDTH = 82,
  TRACK_OFFSET = 8,
  NODE_OFFSET = 20;
/** All organizations share the same month row; rows expand only for same-vendor collisions. */
export function timelineLayout(models: TimelineModel[]) {
  const organizations = timelineOrganizations(models);
  const key = (model: TimelineModel) => `${model.year ?? '未知'}-${model.month ?? '未知'}`;
  let top = 12;
  const periods = [...new Set(models.map(key))].map((period) => {
    const items = models.filter((model) => key(model) === period);
    const first = items[0]!;
    const label = first.year
      ? `${first.year}.${first.month ? String(first.month).padStart(2, '0') : '??'}`
      : '年份待核对';
    const current = { period, label, top, items };
    top +=
      Math.max(
        ...organizations.map(
          (organization) => items.filter((model) => model.organization === organization).length,
        ),
      ) *
        ROW_STEP +
      4;
    return current;
  });
  const tracks = organizations.map((organization, column) => {
    const positions = periods.flatMap((period) =>
      period.items
        .filter((model) => model.organization === organization)
        .map((_, index) => period.top + NODE_HEIGHT / 2 + index * ROW_STEP),
    );
    return {
      organization,
      left: AXIS_WIDTH + column * COLUMN_STEP + TRACK_OFFSET,
      top: positions[0]!,
      height: positions[positions.length - 1]! - positions[0]!,
      positions,
    };
  });
  return {
    organizations,
    tracks,
    periods,
    height: Math.max(200, top),
    width: AXIS_WIDTH + organizations.length * COLUMN_STEP + 12,
  };
}
