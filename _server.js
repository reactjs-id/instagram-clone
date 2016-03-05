require('node-jsx').install({
    extension: '.jsx',
    harmony: true
})
require("babel-core/register")

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;

require("./server");