# Project Instructions — JBC Edition 1.3 TypeScript Workspace

## Methodology & Architecture
- Govern engineering work via **Permit-and-Contract Engineering (`PCE`)** and **Jezz Software Building Code (`JBC` Edition 1.3)** configured in [`jezz.toml`](jezz.toml). Never frame deliverables around Agile user stories (`As a ..., I want ...`), "SDD", or Markdown task checklists (`- [ ]`).
- Maintain strict compartment isolation enforced by [`blueprint.json`](blueprint.json) Layout-vs-Schematic (`LVS`):
  - **`src/domain/`** — Closed Zod `.strict()` schemas, bounded numeric refinements, and Z3-provable `@requires` / `@ensures` JSDoc contract annotations backed by runtime range guards.
  - **`src/gateway/`** — Bounded wire ingress adapters preserving causal error chains (`new Error(..., { cause: err })`) and importing strictly through `src/domain/index.ts` perimeter exports.
- Never hardcode host filesystem paths (`JBC-SEC-006`) or introduce `any` (`JBC-DBC-002`).

## Statutory Verification Commands
- **TypeScript Strict Compiler & Vitest Property Suite:**
  `npm run typecheck && npm test`
- **JBC Edition 1.3 Static Inspection:**
  `uvx --from git+https://github.com/futileandstupid/jezz@v0.6.0 jezz inspect .`
- **Z3 Deductive Contract Proof Discharge:**
  `uvx --from git+https://github.com/futileandstupid/jezz@v0.6.0 jezz prove . --require-deductive`
- **Blueprint CAD & LVS Equivalence Gate (Refresh `blueprint.json` When Modifying Boundaries):**
  `uvx --from git+https://github.com/futileandstupid/jezz@v0.6.0 jezz blueprint . --verify-target blueprint.json`
