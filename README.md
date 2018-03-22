# Pixi.js Project #

A generic frontend **Pixi.js** project boiler plate in **TypeScript** with **source map** support demonstrating testing via example class.
This is based on a project by **yahiko** but I replaced Tape with Mocha and Chai and a bit different code structure.
Unfortunately I was not able to get this boilerplate to directly debug von Visual Studio Code (v1.21.1). If somebody knows how to change this so this works, please let me know how. In case I set the packages.json.paths.debug to "src/" breakpoint hits and this Edit-And-Continue WILL work in Visual Studio Code, but then you cannot use the **gulp watchRefresh" task anymore...

Main features:

* Source Map support
* Incremental Build
* Unit tests
* Browser auto-refresh


Main dependencies:

* **Application Server**: [Node](https://nodejs.org/en/)
* **Compiler**: [TypeScript](https://github.com/Microsoft/TypeScript)
* **Linter**: [TSLint](https://github.com/palantir/tslint)
* **Task Runner**: [Gulp](https://github.com/gulpjs/gulp)
* **JavaScript File Bundler**: [Browserify](https://github.com/substack/node-browserify)
* **Code Minifier**: [Uglify](https://github.com/mishoo/UglifyJS2)
* **HTTP Server**: [BrowserSync](https://github.com/Browsersync/browsersync.github.io)
* **Unit Testing Framework**: [Mocha](https://mochajs.org/)
* **Unit Test Assertion Library**: [Chai](http://www.chaijs.com/)
* **Pixi.js**: [Pixi.js](http://www.pixijs.com/)
* **Test Server** [Ts-Node](https://github.com/TypeStrong/ts-node)



## Installation ##

Node, TypeScript and TSLint should be installed globally, probably also ts-node.

	$> git clone https://github.com/schmendrick/PixiProject.git <new folder>
	$> cd <new folder>
	$> git init
	$> yarn install


## Build ##

Project settings are defined in `package.json`, `settings` section. Inside this section, set `debug` to `true` to debug the project with source maps, or set `debug` to `false` to build the project in the release mode.

Tasks are defined in the `gulpfile.js` script.

Commands should be run under a **bash** shell.

The following command builds the project, runs unit tests, and opens the browser. If any change happens, it builds the project again and refreshes the browser.

	$> npm run watchRefresh

To run the unit tests, make sure ts-node is installed

	$> npm run test

For more predefined commands, see `package.json`, item `scripts`.

Unit tests are in the `test/` folder (in original they were in `tests/`)

## Contributors ##

yahiko
schmendrick

## Licence ##

MIT

## possible TODOs ##
* Get Visual Studio Code Debugging to work
* move CSS folder out of "src"
