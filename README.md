# Rollup.js + Typescript Template

[![Build status](https://ci.appveyor.com/api/projects/status/lggcm64oeycjut75?svg=true)](https://ci.appveyor.com/project/psastras/typescript-rollup-skeleton)

Template project for developing and bundling a Typescript library with Rollup.js.

Supports inlining css and images, and a development mode with hot reloading.

This project uses Yarn for dependency management, however it is also NPM compatible, just replace
all commands with `yarn` to `npm` if you would rather not use Yarn.

## Development

The template includes a development mode which watches and serves the library via the `index.html`
page.  Changes to the library and tests are automatically transpiled, run and hot-reloaded into the
 browser. To enable development mode, run the following command:

```shell
yarn run watch
```

Then navigate a browser to `http://localhost:8080`.  Source maps are included inline for debugging.

## Bundling for Production

The default configuration in `rollup.config.prod.js` bundles three versions of the library, es6
modules, umd modules, and commonjs modules.  The code is *not* minified, since projects importing
the built library should be using their own minifiers.  To bundle the library for distribution,
run:

```shell
yarn run build
```

Output is written to the `dist/` folder.