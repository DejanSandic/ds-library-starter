# ds-library-starter
Boilerplate for creating JavaScript libraries with TypeScript


### Contents:
- [.gitignore](#gitignore)
- [.npmignore](#npmignore)
- [package.json](#package)
- [rollup.config.json](#rollup)


<a id="gitignore"></a>
# .gitignore
Add node_modules and dist folders to the .gitignore file.
```md
node_modules
dist
```



<a id="npmignore"></a>
# .npmignore
Add README.md, rollup.config.js and src folder to the .npmignore file.
```md
src/
rollup.config.js
README.md
```




<a id="package"></a>
# packgage.json
```json
{
   "name": "ds-library-starter",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
      "prebuild": "rimraf dist",
      "build": "rollup --config"
   },
   "repository": {
      "type": "git",
      "url": ""
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "bugs": {
      "url": ""
   },
   "homepage": "",
   "devDependencies": {
      "rimraf": "^2.6.3",
      "rollup": "^1.15.6"
   }
}
```

## main, umd:main, module
Set entry points for the CJS, ESM and UMD libraries. 
```json
{
   "main": "dist/index.cjs.js",
   "umd:main": "dist/index.umd.js",
   "module": "dist/index.es.js"
}
```

## prebuild:
Delete /dist folder before the build process starts.
```json
"scripts": {
   "prebuild": "rimraf dist",
}
```

## build:
Run rollup with the provided config file, rollup.config.js is the default.
```json
"scripts": {
   "build": "rollup --config"
}
```




<a id="rollup"></a>
# rollup.config.js
```js
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
```

## input
Set index.js in the /src folder as input. 
```js
module.exports = {
   input: 'src/index.js',
};
```

## output
Create the COMMONJS and ESM outputs with inline sourcemaps.
```js
module.exports = {
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
      }
   ]
};
```

Create the UMD output with lib as the library name  ( window.lib ).
```js
module.exports = {
   output: [
      {
         name: 'lib',
         file: 'dist/index.umd.js',
         format: 'umd',
         sourcemap: 'inline'
      }
   ]
};
```