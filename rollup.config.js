import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/index.ts',
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
	plugins: [ typescript({ clean: true }), terser() ]
};
