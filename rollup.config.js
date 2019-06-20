import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

export default {
   input: 'src/index.js',
   output: [
      {
         file: 'dist/index.cjs.js',
         format: 'cjs',
         sourcemap: 'inline'
      },
      {
         file: 'dist/index.es.js',
         format: 'esm',
         sourcemap: 'inline'
      },
      {
         name: 'lib',
         file: 'dist/index.umd.js',
         format: 'umd',
         sourcemap: 'inline'
      }
   ],
   plugins: [
      babel({ exclude: 'node_modules/**'}),
      terser()
   ]
};
