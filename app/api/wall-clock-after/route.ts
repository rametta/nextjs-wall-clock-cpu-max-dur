import { after } from "next/server";

export const maxDuration = 3;

export async function GET() {
  after(async () => {
    await new Promise<void>((r) => setTimeout(r, 60_000));
  });

  return Response.json({ ok: true });
}
