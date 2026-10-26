# Model Atlas Zh

- Use Node 24 and the pinned pnpm version. Keep the lockfile committed.
- Read docs/architecture.md before changing module boundaries.
- Knowledge explanations must start with plain Chinese and a concrete example. Introduce formulas progressively.
- Keep content in Markdown and YAML; use stable IDs rather than duplicated records.
- Core modules may depend on core modules and Zod only, with no browser or framework imports.
- Use one G6 model renderer and one selection store. Keep renderer types, DOM nodes and coordinates outside core.
- Add sources for factual claims and relationships. Distinguish direct inheritance from comparison.
- Run pnpm check, pnpm test and pnpm build before committing. Run affected browser scenarios for UI changes.
- The current demo is a model relationship map, continuous model learning pages and temporary shared-concept reading. Whisper is the first in-depth example. Keep methods and metrics in the article and concept reader, not as standalone map nodes. Architecture figures use sourced metadata and shared components. Do not reintroduce modality navigation, mode tabs, learning tools, progress or a lifecycle footer.
- Expand content and publish only within the user's requested scope; the current request is a local demo.
