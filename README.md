# ProcureAI

"Cursor for procurement teams" — an AI agent that turns plain-English requirements
into structured specs, cited supplier shortlists, and ready-to-send RFQ emails.
The analyst stays in control of every consequential step.

> 🚧 Built in public. Follow the commits — the eval harness, ADRs, and
> architecture notes are all here as they're written.

## Run it yourself (5 minutes)

```bash
git clone https://github.com/haroon97/ProcureAI.git
cd ProcureAI
cp .env.example .env    # add your keys
docker compose up       # boots Postgres, Redis, and the app
```

## License

AGPL-3.0 — see [LICENSE](LICENSE).

The source is open, but I retain copyright. If you'd like to use ProcureAI
commercially under different terms, a commercial license is available —
reach out.
