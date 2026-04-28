import { readFileSync, writeFileSync, renameSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

const pkg = JSON.parse(readFileSync(resolve('package.json'), 'utf-8'));

const baseName = 'vue3-timeline-bar';

// 1. 移动 dist/src/types.d.ts 到 dist/types.d.ts
const srcTypesPath = resolve('dist/src/types.d.ts');
const destTypesPath = resolve('dist/types.d.ts');
const srcTypesMapPath = resolve('dist/src/types.d.ts.map');
const destTypesMapPath = resolve('dist/types.d.ts.map');

try {
  renameSync(srcTypesPath, destTypesPath);
  console.log('Moved dist/src/types.d.ts → dist/types.d.ts');
} catch (e) {
  console.warn('Failed to move types.d.ts:', e.message);
}

try {
  renameSync(srcTypesMapPath, destTypesMapPath);
  console.log('Moved dist/src/types.d.ts.map → dist/types.d.ts.map');
} catch (e) {
  // source map 可能不存在，忽略
}

// 2. 更新 dist/index.d.ts 的引用路径
const indexDtsPath = resolve('dist/index.d.ts');
try {
  let indexDts = readFileSync(indexDtsPath, 'utf-8');
  indexDts = indexDts.replace(/from ['"]\.\/src\/types['"]/g, "from './types'");
  writeFileSync(indexDtsPath, indexDts);
  console.log('Updated dist/index.d.ts types reference');
} catch (e) {
  console.warn('Failed to update index.d.ts:', e.message);
}

// 3. 递归更新 dist/src 下所有 .d.ts 中引用 ../../types 的路径
function updateDtsRefs(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      updateDtsRefs(fullPath);
    } else if (entry.endsWith('.d.ts')) {
      let content = readFileSync(fullPath, 'utf-8');
      const updated = content
        .replace(/from ['"]\.\.\/\.\.\/types['"]/g, "from '../../../types'")
        .replace(/import\(['"]\.\.\/\.\.\/types['"]\)/g, "import('../../../types')");
      if (updated !== content) {
        writeFileSync(fullPath, updated);
        console.log(`Updated types reference in ${fullPath.replace(resolve('dist') + '\\', '').replace(resolve('dist') + '/', '')}`);
      }
    }
  }
}

try {
  updateDtsRefs(resolve('dist/src'));
} catch (e) {
  console.warn('Failed to update .d.ts references:', e.message);
}

// 4. 生成 dist/package.json
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
