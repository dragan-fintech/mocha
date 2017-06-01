// to run all tests that have tag <tag>: 
// $ ./node_modules/mocha/bin/mocha --grep <tag> 02_tagging/test.js
// where tag = @dev or @qa
//
// to run tests that do NOT have tag <tag>: 
// $ ./node_modules/mocha/bin/mocha --grep <tag> --invert 02_tagging/test.js
// where tag = @dev or @qa


var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('@dev should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });

    it('@qa should return index when the value is present', function() {
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
});
