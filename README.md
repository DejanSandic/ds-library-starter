# ds-library-starter

Boilerplate for creating JavaScript libraries with TypeScript

### Contents:

-  [package.json](#package)
-  [.gitignore](#gitignore)
-  [.npmignore](#npmignore)
-  [.eslintrc.json](#eslintrc)
-  [rollup.config.json](#rollup)
-  [jest.config.js](#jest)
-  [tsconfig.json](#tsconfig)




<br><br>
<a id="package"></a>

# packgage.json

```json
{
   "name": "ds-library-starter",
   "version": "1.0.0",
   "description": "",
   "main": "dist/index.cjs.js",
   "umd:main": "dist/index.umd.js",
   "module": "dist/index.es.js",
   "scripts": {
      "test": "jest",
      "prebuild": "rimraf dist",
      "build": "rollup --config",
      "dev": "rollup --config --watch",
      "lint:fix": "prettier-eslint \"src/*\" \"test/*\" --write"
   },
   "pre-commit": [
      "test",
      "lint:fix"
   ],
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
      "@types/jest": "^24.0.15",
      "eslint": "^5.16.0",
      "eslint-config-standard": "^12.0.0",
      "eslint-plugin-import": "^2.17.3",
      "eslint-plugin-node": "^9.1.0",
      "eslint-plugin-promise": "^4.1.1",
      "eslint-plugin-standard": "^4.0.0",
      "jest": "^24.8.0",
      "pre-commit": "^1.2.2",
      "prettier-eslint": "^9.0.0",
      "prettier-eslint-cli": "^5.0.0",
      "rimraf": "^2.6.3",
      "rollup": "^1.15.6",
      "rollup-plugin-babel": "^4.3.2",
      "rollup-plugin-terser": "^5.0.0",
      "rollup-plugin-typescript2": "^0.22.0",
      "ts-jest": "^24.0.2",
      "typescript": "^3.5.3"
   }
}

```

Set entry points for the commonjs library.
```json
"main": "dist/index.cjs.js"
```

Set entry points for the ESM library which supports tree shaking.
```json
"module": "dist/index.es.js"
```

Set entry points for the UMD library which can be used in the browser.
```json
"umd:main": "dist/index.umd.js"
```

Set entry points for the UMD library which can be used in the browser with the \<script\> tag.
```json
"module": "dist/index.es.js"
```

Set the test script to use jest package with the default config file.
```json
"test": "jest"
```

Using rimraf package, delete the /dist folder before the build process starts.
```json
"prebuild": "rimraf dist"
```

Run rollup package with the provided config file ( rollup.config.js is the default ).
```json
"build": "rollup --config"
```

Run rollup package after each change ( for development purposes ).
```json
"dev": "rollup --config --watch"
```

Run eslint and prettier on each file in /src and /test folders.
```json
"lint:fix": "prettier-eslint \"src/*\" \"test/*\" --write"
```

Run tests and "lint:fix" script before each commit.
```json
"pre-commit": [
   "test",
   "lint:fix"
]
```





<br><br>
<a id="gitignore"></a>

# .gitignore

Add node_modules and dist folders to the .gitignore file.

```md
node_modules
dist
```






<br><br>
<a id="npmignore"></a>

# .npmignore

Add the files you want to exclude from NPM module to the .npmignore file.

```md
src/
test/
rollup.config.js
.eslintrc.json
jest.config.json
.babelrc
README.md
tsconfig.json
```







<br><br>
<a id="eslintrc"></a>

# .eslintrc.json

Add the files you want to exclude from NPM module to the .npmignore file.

```json
{
   "extends": "standard",
   "rules": {
      "indent": ["error", 3],
      "semi": ["error", "always"]
   }
}
```

Extend the standard eslint configuration.
```js
"extends": "standard"
```

Set indentation to 3 spaces.
```js
"indent": ["error", 3]
```

Always use semicolons.
```js
"semi": ["error", "always"]
```





<br><br>
<a id="rollup"></a>

# rollup.config.js

```js
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
      typescript({ clean: true }),
      terser()
   ]
};

```

Set index.js in the /src folder as input.
```js
input: 'src/index.js';
```

Specify output files for CJS, ESM and UMD formats.
```js
file: 'dist/index.cjs.js' | 'dist/index.es.js' | 'dist/index.umd.js';
```

Specify format for each output.
```js
format: 'cjs' | 'esm' | 'umd';
```

Create all outputs with inline source maps.
```js
sourcemap: 'inline';
```

Create the UMD output with lib as the library name ( window.lib ).
```js
name: 'lib';
```

Configure typescript plugin to work without caching.
```js
typescript({ clean: true })
```

Minify compiled code.
```js
terser()
```




<br><br>
<a id="jest"></a>

# jest.config.json

Configure unit tests to work with typescript.

```js
module.exports = {
   roots: [ '<rootDir>/test' ],
   transform: {
      '^.+\\.tsx?$': 'ts-jest'
   }
};
```