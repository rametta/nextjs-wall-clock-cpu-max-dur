export const maxDuration = 3;

export async function GET() {
  console.log("[wall-clock-idle] work started");
  await new Promise<void>((r) => setTimeout(r, 60_000));
  console.log(
    "[wall-clock-idle] finished after 60s idle wait — if maxDuration applies, you should NOT see this line",
  );
  return Response.json({ ok: true });
}
