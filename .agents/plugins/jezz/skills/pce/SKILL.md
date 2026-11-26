---
name: pce
description: >-
  Executes the 5-phase Permit-and-Contract Engineering (PCE) workflow and enforces Jezz Software
  Building Code (JBC Edition 1.3) occupancy gates across Python, TypeScript, Rust, and Go.
  Activate when eliciting project charters, planning features, writing or renovating code under
  JBC governance, or auditing PCE engineering dossiers.
---

# Permit-and-Contract Engineering (`PCE`) Runbook

Execute engineering tasks through the five statutory `PCE` phases rather than unverified prose
specifications.

## Mode 1: Interactive Co-Engineering via `jezz` MCP Tools

1. **Phase 0/I — Charter & Mandate (`BHV-05` / `BHV-01 FRAME` / `BHV-02 ELICIT`):**
   - For greenfield or multi-slice project visions, run `pce_start_intake` to capture workspace,
     CLI, and package reality (`RealityProbeEvidence`), interview the user across all three
     mandatory axes (`domain_ontology`, `hazard_mutation_policy`, `scope_and_exclusions`), and
     seal a topologically ordered permit queue via `pce_seal_charter` before mutating code.
   - Establish falsifiable invariants (`INV-001`, ...) mapped to concrete AST/CST verification
     symbols and pairwise-disjoint `ModuleWriteScope`s; evaluate package/compartment placement
     with `jbc_assess_lot_line` when introducing new capabilities.
2. **Phase II — Permit (`BHV-03 BIND_CODES` / `BHV-04 INSPECT_CODE`):**
   - Inspect baseline compliance and architectural schematic with `jbc_inspect_workspace`,
     `jbc_inspect_differential`, `jbc_extract_blueprint`, or `jbc_query_ast_graph`.
   - Verify any multi-step behavior topology with `jbc_verify_behavior_graph`.
3. **Phase III — Contract & Instrumentation (`BHV-14 SPECIFY` / `BHV-15 INSTRUMENT`):**
   - **Defect Repair (`build_abductive_bugfix_graph` — Mandatory `RED -> GREEN`):** Author a
     deterministic reproduction test and execute it against unmodified `HEAD` (`BHV-19`) to
     confirm failure prior to mutating implementation (`BHV-16`), proving non-vacuity.
   - **Greenfield & Renovation (`build_greenfield_contract_first_graph` — Property-First):**
     Author closed schemas (`extra="forbid"` / `.strict()` / `deny_unknown_fields`), runtime
     signature guards (`@jezz_callable` / `@icontract` / `.Validate()`), and universally
     quantified property/falsification suites upfront—never baby-step Red-Green stub cycles.
   - Validate candidate `.py`, `.ts`, `.tsx`, `.rs`, and `.go` buffers in memory with
     `jbc_preview_source` and verify Z3 contract non-vacuity via `jbc_prove_contracts` prior to
     writing to disk.
4. **Phase IV — Scoped Construction (`BHV-16 SYNTHESIZE` / `BHV-17 REFACTOR`):**
   - Implement or refactor strictly within authorized `ModuleWriteScope`s; preview each module
     via `jbc_preview_source`.
5. **Phase V — Occupancy Verification (`BHV-18` / `BHV-19` / `BHV-21`):**
   - Confirm zero unwaived `JBC` violations via `jbc_inspect_differential`, deductive Z3 contract
     proofs via `jbc_prove_contracts`, and coarse-grained schematic equivalence via
     `jbc_verify_blueprint_lvs` when a target `BlueprintGraph` applies.
   - Execute dynamic gates (`uv run pytest`, `uv run mypy .`, `uv run ruff check .` for Python, or
     the target ecosystem's typecheck/test suite).
   - When an `EngineeringDossier` JSON is produced, verify seal integrity via `jbc_audit_dossier`.

## Mode 2: Autonomous `jezz` CLI Delegation

- **Workspace Bootstrap & Polyglot Starter Scaffolds:**
  `uv run jezz init <repo> [--scaffold python|typescript|rust|go] [--pre-commit]`

- **Polyglot Z3 Symbolic Contract Discharge:**
  `uv run jezz prove <repo> [--target-dir <subpath>] [--symbol <name>] [--require-deductive]`

- **Blueprint CAD Viewer & Coarse-Grained LVS Gate:**
  `uv run jezz blueprint <repo> [--write-html blueprint.html] [--write-json blueprint.json]`
  `[--redlines redlines.json] [--verify-target target_blueprint.json]`

- **Project Charter Intake & Phased Permit Sealing:**
  `uv run jezz charter <repo> --title "..." --vision "..." [--interactive]`
  `[--package-slug <pkg>] [--write-charter charter.json] [--write-mandates-dir permits/]`
- **Plan & Mandate Preview (No Workspace Mutation):**
  `uv run jezz run <repo> [--model antigravity:<slug>] [--profile standard|strict_internal]`
  `--prompt "..." --plan-only`
- **Greenfield Synthesis from Prompt or Mandate:**
  `uv run jezz run <repo> [--model antigravity:<slug>] [--secret-uri <scheme>://...]`
  `[--gate-timeout 120] --mandate mandate.json`
- **Brownfield JBC Renovation (Full or Scoped `--ratchet`):**
  `uv run jezz renovate <repo> [--ratchet] [--profile standard|strict_internal]`
  `[--permit permit.json] [--gate-timeout 120] --prompt "..."`
- **Polyglot Differential Occupancy Ratchet:**
  `uv run jezz inspect <repo> [--profile standard|strict_internal] --changed-since HEAD`
  (or `--staged`)
- **Polyglot Controlled SDD-vs-PCE Benchmark:**
  `uv run jezz benchmark <work_dir> [--language python|typescript|rust|go|all]`
  `[--model <provider:model>]`
