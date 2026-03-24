export const maxDuration = 3;

export async function GET() {
  const end = Date.now() + 60_000;
  while (Date.now() < end) Math.sqrt(Math.random());
  return Response.json({ ok: true });
}
