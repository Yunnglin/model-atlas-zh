# Model Atlas Zh

- Use Node 24 and the pinned pnpm version. Keep the lockfile committed.
- Read docs/architecture.md before changing module boundaries.
- Knowledge explanations must start with plain Chinese and a concrete example. Introduce formulas progressively.
- Keep content in Markdown and YAML; use stable IDs rather than duplicated records.
- Core modules may depend on core modules and Zod only, with no browser or framework imports.
- Map layouts share one graph renderer and store. Never place React Flow types in core.
- Add sources for factual claims and relationships. Distinguish direct inheritance from comparison.
- Run pnpm check, pnpm test and pnpm build before committing. Run affected browser scenarios for UI changes.
- Stage one is a working design sample. Expand and publish after the user compares its views.
