import { loadKnowledge } from '../../build/load-knowledge';

export const prerender = true;

export async function GET(): Promise<Response> {
  return Response.json(await loadKnowledge());
}
