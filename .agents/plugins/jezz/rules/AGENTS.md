# Jezz Statutory Engineering Rules (JBC v1.3 & PCE)

## Methodology & Framing
- Govern engineering work via **Permit-and-Contract Engineering (`PCE`)**.
- Never frame deliverables around Agile ceremonies, persona user stories (`As a ..., I want ...`),
  or Markdown task checklists (`- [ ]`). Express requirements as falsifiable `DomainInvariant`s
  and disjoint `ModuleWriteScope`s.
- For greenfield or multi-slice project visions, execute Phase 0/I intake via `pce_start_intake`
  (empirical reality probe + 3-axis elicitation across `domain_ontology`,
  `hazard_mutation_policy`, and `scope_and_exclusions`) and seal a phased `ProjectCharter` via
  `pce_seal_charter` prior to mutating governed source files.
- Never hardcode filesystem paths (`JBC-SEC-006`). Calculate every path dynamically from known
  file, package, or injected root anchors (`Path(__file__).resolve()`, `importlib.resources`,
  `tmp_path` / `tempfile`, or `ContainedPath.from_parts(anchor, rel)`).

## Statutory Verification Workflow
- Before writing or editing non-trivial source modules (`.py`, `.ts`, `.tsx`, `.rs`, `.go`),
  dry-run candidate source buffers in memory via MCP tool `jbc_preview_source` (`0` unwaived
  `RED_TAG` violations, including whole-workspace `JBC-COG-003` / `JBC-COG-006` topology,
  encapsulation, and inter-procedural call-flow checks) and verify contract non-vacuity and
  deductive postconditions via `jbc_prove_contracts`.
- Use `jbc_get_code`, `jbc_list_codes`, `jbc_assess_lot_line`, `jbc_extract_blueprint`,
  `jbc_verify_blueprint_lvs`, `jbc_prove_contracts`, or `jbc_query_ast_graph` to inspect normative
  **Jezz Software Building Code (`JBC` Edition 1.3)** requirements, lot-line shear, blueprint
  `LVS` equivalence, Z3 symbolic contract proofs, and AST/CST symbol maps.
- Before ending any turn that modifies governed source files, verify clean occupancy via
  `jbc_inspect_differential` and run workspace dynamic gates (e.g., `uv run pytest`,
  `uv run mypy .`, `uv run ruff check .` for Python; `tsc`/`vitest`, `cargo test`, or `go test`
  for polyglot modules).
