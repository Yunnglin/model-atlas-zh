module.exports = {
  forbidden: [
    {
      name: 'core-is-framework-independent',
      severity: 'error',
      from: { path: '^src/core/' },
      to: { path: '^src/(?!core/)' },
    },
    {
      name: 'core-only-depends-on-zod',
      severity: 'error',
      from: { path: '^src/core/' },
      to: {
        path: 'node_modules/(?!zod(?:/|$)|[.]pnpm/zod@)',
        dependencyTypes: ['npm', 'npm-dev', 'npm-optional'],
      },
    },
    {
      name: 'browser-features-never-load-content-files',
      severity: 'error',
      from: { path: '^src/(features|app|components|platform)/' },
      to: { path: '^src/(build|content)/' },
    },
    {
      name: 'shared-components-do-not-import-features',
      severity: 'error',
      from: { path: '^src/components/' },
      to: { path: '^src/(features|app)/' },
    },
    {
      name: 'platform-does-not-import-ui',
      severity: 'error',
      from: { path: '^src/platform/' },
      to: { path: '^src/(features|app|components|build)/' },
    },
    {
      name: 'features-communicate-through-composition',
      severity: 'error',
      from: { path: '^src/features/([^/]+)/' },
      to: { path: '^src/features/', pathNot: '^src/features/$1/' },
    },
    { name: 'no-circular-imports', severity: 'error', from: {}, to: { circular: true } },
  ],
  options: {
    doNotFollow: { path: 'node_modules' },
    tsConfig: { fileName: 'tsconfig.json' },
    enhancedResolveOptions: { extensions: ['.ts', '.tsx', '.js', '.mjs', '.json'] },
  },
};
