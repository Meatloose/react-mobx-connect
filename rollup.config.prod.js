import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import image from 'rollup-plugin-image';
import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';

export default {
  input: './src/index.ts',
  treeshake: true,
  external: ['react', 'react-dom', 'mobx', 'mobx-react'],

  plugins: [
    typescript({
      typescript: require('typescript')
    }),
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
      browser: true,
    }),
    localResolve(),
    // for using non-ES6 third party modules
    commonjs({}),
  ],
  output: [{
    file: 'lib/index.cjs.js',
    format: 'cjs',
    sourceMap: 'inline',
    globals: {
      'react': 'React',
      'mobx-react': 'mobxReact',
    },
  }, {
    file: 'lib/index.js',
    format: 'umd',
    name: 'connect',
    sourceMap: 'inline',
    globals: {
      'react': 'React',
      'mobx-react': 'mobxReact',
    },
  }, {
    file: 'lib/index.es.js',
    format: 'es',
    sourceMap: 'inline',
    globals: {
      'react': 'React',
      'mobx-react': 'mobxReact',
    },
  }],
}