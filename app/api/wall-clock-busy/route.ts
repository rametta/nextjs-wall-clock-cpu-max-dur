export const maxDuration = 3;

export async function GET() {
  console.log("[wall-clock-busy] work started");
  const end = Date.now() + 60_000;
  while (Date.now() < end) Math.sqrt(Math.random());
  console.log(
    "[wall-clock-busy] finished after ~60s CPU work — if maxDuration applies, you should NOT see this line",
  );
  return Response.json({ ok: true });
}
