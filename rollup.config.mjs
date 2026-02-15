import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default [
  {
    input: 'UI/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        modules: true,
        extract: false, // Inject CSS into the JS bundle
        inject: true, // Ensure styles are injected
        use: [],
      }),
    ],
    external: ['react', 'react-dom', 'react-icons/fa', 'react-icons/fa6'],
  },
  {
    input: 'UI/index.ts', // Use the main TypeScript entry file
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts({
      // This is important to ensure all types are bundled correctly
      // and external modules are resolved.
      respectExternal: true,
    })],
    external: ['react', 'react-dom', /^react-icons/, /\.css$/], // Exclude React, ReactDOM, react-icons and CSS files from the DTS bundle
  },
];
