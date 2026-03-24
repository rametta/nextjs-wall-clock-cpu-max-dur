import { waitUntil } from "@vercel/functions";

export const maxDuration = 3;

export async function GET() {
  waitUntil(new Promise<void>((r) => setTimeout(r, 60_000)));
  return Response.json({ ok: true });
}
