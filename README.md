# `maxDuration` wall-clock demo

Minimal Next.js routes to show that Vercel’s **`maxDuration` is wall-clock elapsed time** for the invocation (including idle waits), not a separate “CPU-only” timeout—unlike **Fluid / active CPU billing**, which is about cost, not the timeout cap. See [Vercel: maximum duration](https://vercel.com/docs/functions/configuring-functions/duration).

Each route uses `maxDuration = 3` and either idles, burns CPU, or returns immediately while scheduling long work via `after()` or `waitUntil`. **`/`** links to all of them.

```bash
npm install && npm run dev
```

Deploy to Vercel to see limits enforced; local `next dev` may differ.
