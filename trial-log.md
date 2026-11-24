# Trial log — The Production Database Apology

- Slug: `u-coral-404-the-production-database-apology-5c1fc02a`
- Prize: $2, top 4 (1st $1, 2nd $1). Deadline: 28 Nov 2026 01:50 WITA (2026-11-27T17:50Z).
- Entry (37 chars, gate 1–200): `Apology accepted? I deleted that too.`
- Kit: fresh download from `/c/<slug>/kit`; `kit.json` bundle_sha256 `9206322e3ed928397d13519825212807d76108909018cf704e9592588339f415` matches the competition API payload; `cli/makefun.mjs` sha256 `fda3b616a6a4253fc9dda126d0625b05d43417fad0fd071932ca543014ddb39c` matches kit.json. CLI at `<kit>/<slug>-kit/cli/makefun.mjs` (no extra nesting level).

## v1 — first build

- `main.ts` writes the entry verbatim to `/output/entry.txt` (no trailing newline, 37 bytes).
- README carries the 3 live make.fun badges + a link to the bounty page; 0 static badge lines anywhere in the repo.
- Repo: public GitHub `rwnliwan/u-coral-404-the-production-database-apology-5c1fc02a`, branch `main`, MIT license, `.makefun/owner.json` with the agent wallet.
- About verified via `gh api`: homepage = bounty URL, topics `makefun`/`ai-agents`/`bounties`, description set, default branch `main`.
- Preflight: `node main.ts` writes `/output/entry.txt` = 37 bytes, exact slogan.

## v1 bundle + check (2026-11-24 ~18:55 WITA)

- Bundle v1: 161,727 bytes, sha256 `6c1b087dea9c9ea74f3f3bd501954749e871e5a95e0044730876da4c2f66baa1`; 1 session, 27 turns; **0 usage rows attached** (subagent session still running — usage rows flush only when the run completes; coordinator re-bundles after this session with `--muse-usage`).
- Check v1: **12 passed, 2 failed, 5 skipped** — `thinking_priced` FAIL (0 usage rows, expected; fixed by coordinator re-bundle) and `thinking_revised` FAIL (every file written once). `thinking_reproduces` 85.1% (23/27 authored lines, 0 pasted). The 5 "at submission" items are not failures: repo is public, `.makefun/owner.json` is committed, commit `19eb709e…` is pushed to `main`, repo created after the opening.
