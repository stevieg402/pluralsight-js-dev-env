// This file isnt transpiled , so must use CommonJS and ES5

// Register Bable to transpile before our tests run
require('babel-register')();

// Disable Webpack features which Mocha doesnt understand
require.extensions['.css'] = function(){};
