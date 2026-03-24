import { waitUntil } from "@vercel/functions";

export const maxDuration = 3;

export async function GET() {
  waitUntil(
    (async () => {
      console.log("[wall-clock-waituntil] background started");
      await new Promise<void>((r) => setTimeout(r, 60_000));
      console.log(
        "[wall-clock-waituntil] background finished after 60s — if maxDuration applies, you should NOT see this line",
      );
    })(),
  );
  return Response.json({ ok: true });
}
