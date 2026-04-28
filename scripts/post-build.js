import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const pkg = JSON.parse(readFileSync(resolve('package.json'), 'utf-8'));

const baseName = 'vue3-timeline-bar';

// dist/index.d.ts 已由 vite-plugin-dts (insertTypesEntry) 自动生成，不再覆盖

const distPkg = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description || '',
  main: `./${baseName}.umd.js`,
  module: `./${baseName}.es.js`,
  types: `./index.d.ts`,
  exports: {
    '.': {
      types: `./index.d.ts`,
      import: `./${baseName}.es.js`,
      require: `./${baseName}.umd.js`,
    },
    './style.css': './style.css',
  },
  sideEffects: false,
  peerDependencies: {
    vue: '^3.2.0',
    'element-plus': '^2.9.0',
    dayjs: '^1.11.0',
  },
};

writeFileSync(resolve('dist/package.json'), JSON.stringify(distPkg, null, 2) + '\n');
console.log('dist/package.json generated successfully.');
