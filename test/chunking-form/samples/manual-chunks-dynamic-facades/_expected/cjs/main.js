'use strict';

var dynamic = require('./generated-dynamic.js');

Promise.all([new Promise(function (resolve) { resolve(require('./generated-dynamic.js')); }), new Promise(function (resolve) { resolve(require('./generated-dynamic2.js')); }), new Promise(function (resolve) { resolve(require('./generated-dynamic3.js')); })]).then(
	results => console.log(results, dynamic.DEP)
);
