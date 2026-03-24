import { after } from "next/server";

export const maxDuration = 3;

export async function GET() {
  after(async () => {
    console.log("[wall-clock-after] background started");
    await new Promise<void>((r) => setTimeout(r, 60_000));
    console.log(
      "[wall-clock-after] background finished after 60s — if maxDuration applies, you should NOT see this line",
    );
  });

  return Response.json({ ok: true });
}
