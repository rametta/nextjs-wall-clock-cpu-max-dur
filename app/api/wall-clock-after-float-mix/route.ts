import { after } from "next/server";

export const maxDuration = 3;

export async function GET() {
  after(async () => {
    console.log("[wall-clock-after-float-mix] after started");

    void (async () => {
      console.log(
        "[wall-clock-after-float-mix] floating (not in Promise.all) started",
      );
      await new Promise<void>((r) => setTimeout(r, 30_000));
      console.log(
        "[wall-clock-after-float-mix] floating finished — if maxDuration applies, you should NOT see this line",
      );
    })();

    await Promise.all([
      new Promise<void>((r) => setTimeout(r, 2_000)).then(() => {
        console.log(
          "[wall-clock-after-float-mix] awaited Promise.all branch finished (2s)",
        );
      }),
    ]);

    console.log(
      "[wall-clock-after-float-mix] after() body returned after Promise.all",
    );
  });

  return Response.json({ ok: true });
}
