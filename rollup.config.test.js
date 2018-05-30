import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import image from 'rollup-plugin-image';
import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import localResolve from 'rollup-plugin-local-resolve';
import json from 'rollup-plugin-json';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';

export default {
  input: 'test/index.test.tsx',
  treeshake: true,
  external: ['react', 'react-dom', 'mobx', 'mobx-react', 'enzyme', 'enzyme-adapter-react-16', 'sinon'],

  plugins: [
    globals(),
    builtins(),
    typescript({
      typescript: require('typescript')
    }),
    multiEntry(),
    postcss({
      extensions: ['.css'],
      plugins: [
        simplevars(),
        nested(),
        cssnext({
          warnForDuplicates: false,
        }),
      ],
    }),
    image(),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),

    // Locate modules using the Node resolution algorithm, for using third party modules 
    // in node_modules
    nodeResolve({
      // use "jsnext:main" if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true,

      // some package.json files have a `browser` field which
      // specifies alternative files to load for people bundling
      // for the browser. If that's you, use this option, otherwise
      // pkg.browser will be ignored
      browser: false,
    }),
    localResolve(),
    // for using non-ES6 third party modules
    commonjs(),
  ],
  output: [
    // for development browser build for script tag includes
    {
      file: '__test__/index.js',
      useStrict: false,
      format: 'cjs',
      name: 'trs',
      sourceMap: 'inline',
      globals: {
        'react': 'React',
        'mobx-react': 'mobxReact',
      },
    }
  ],
}