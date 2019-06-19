module.exports = {
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
	]
};
