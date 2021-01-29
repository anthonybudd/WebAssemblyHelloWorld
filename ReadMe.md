<p align="center">
    <img src="https://github.com/WebAssembly/web-assembly-logo/raw/master/dist/logo/web-assembly-logo-256px.png" alt="webassembly" />
</p>

# WebAssembly Hello World

This is a very simple project for getting started with the [WebAssembly NPM Module](https://www.npmjs.com/package/webassembly). This repo is just some personal notes from my experiments with WebAssembly. This is not an open-source project.


```sh
$ git clone git@github.com:anthonybudd/WebAssemblyHelloWorld.git

$ ./node_modules/.bin/wa compile -o HelloWorld.wasm HelloWorld.c

$ node serve.js

$ open http://localhost:8888
```