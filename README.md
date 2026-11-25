# `jezz-template-typescript` — JBC Edition 1.3 Starter

Turnkey **TypeScript (`strict: true`)** starter repository governed by the **Jezz Software Building Code (`JBC` Edition 1.3)** and **Permit-and-Contract Engineering (`PCE`)**, configured via [`jezz.toml`](jezz.toml) with zero Python files required in the workspace.

## Architectural Layout (`domain` + `gateway`)

- **`src/domain/`** — Closed Zod `.strict()` wire schemas (`SettlementRequestSchema`, `SettlementQuoteSchema`) and Z3-discharged `netAfterDiscount` postcondition (`@requires` / `@ensures`).
- **`src/gateway/`** — Bounded wire JSON parser preserving causal error chains (`{ cause: err }`) and routing strictly through `src/domain/index.ts` perimeter exports.
- **`blueprint.json`** — Sealed `BlueprintGraph` netlist enforced via Layout-vs-Schematic (`LVS`).
- **`tests/settlement.test.ts`** — Deterministic seeded conservation property sweep and `.strict()` unknown-key rejection suite (`vitest`).

## Quickstart

```bash
uvx --from git+https://github.com/futileandstupid/jezz@v0.6.0 jezz init my-ts-app --scaffold typescript
cd my-ts-app
npm install
npm run typecheck && npm test
```

## Statutory Gates

```bash
uvx --from git+https://github.com/futileandstupid/jezz@v0.6.0 jezz inspect .
uvx --from git+https://github.com/futileandstupid/jezz@v0.6.0 jezz prove . --require-deductive
uvx --from git+https://github.com/futileandstupid/jezz@v0.6.0 jezz blueprint . --verify-target blueprint.json --write-html blueprint.html
```
