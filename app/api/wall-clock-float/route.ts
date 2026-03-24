export const maxDuration = 3;

export async function GET() {
  void (async () => {
    console.log("[wall-clock-float] floating work started");
    await new Promise<void>((r) => setTimeout(r, 60_000));
    console.log(
      "[wall-clock-float] floating work finished — if maxDuration applies, you should NOT see this line",
    );
  })();

  return Response.json({ ok: true });
}
