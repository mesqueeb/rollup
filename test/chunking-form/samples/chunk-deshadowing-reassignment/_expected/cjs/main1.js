'use strict';

require('./generated-dep1.js');
var shared2 = require('./generated-shared2.js');
require('./generated-dep2.js');

console.log(shared2.x + shared2.y);
