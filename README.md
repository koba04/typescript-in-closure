# TypeScript with Google Closure Tools

This is a repository to combine with TypeScript and Google Closure Tools.

## Try it

```
npm install
npm start
# or
npm build:start # with production build
```

I intentionally add compiled js files from TypeScript into the repository because I'd like to confirm the compiled results.

## Features

- :white_check_mark: Compiling TypeScript to JavaScript compatible Closure Compiler Advanced mode
- :white_check_mark: Use TypeScript modules from Closure scripts
- :white_check_mark: Use Closure modules from TypeScript as any
- :white_check_mark: Use globally installed React
- :running: Extract type information from Closure modules for TypeScript, which could be available with [Clutz](https://github.com/angular/clutz)
- :question: Gennerate `.d.ts` for Closure Library
