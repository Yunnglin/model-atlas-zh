import { z } from 'zod';

export const progressSchema = z.object({
  version: z.literal(1),
  nodes: z.record(z.string(), z.enum(['reading', 'understood', 'review'])),
  answers: z.record(z.string(), z.enum(['review', 'understood'])),
});
export type Progress = z.infer<typeof progressSchema>;
export function emptyProgress(): Progress {
  return { version: 1, nodes: {}, answers: {} };
}
