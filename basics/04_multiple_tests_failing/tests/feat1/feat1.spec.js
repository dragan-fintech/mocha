var assert = require('assert');

describe('Feat2', function() {
  describe('Group1', function() {
    it('f2 g1 pass1', function() {
      assert.equal(1, 1, "should pass!");
    });

    it('bug-x2 f2 g1 fail1', function() {
      assert.equal(0, 1, "should fail!");
    });

    it('f2 g1 fail2', function() {
      assert.equal(0, 2, "should fail!");
    });
  });

  describe('Group2', function() {
    it('f2 g2 pass1', function() {
      assert.equal(1, 1, "should pass!");
    });

    it('bug-x2 f2 g2 fail1', function() {
      assert.equal(0, 1, "should fail!");
    });

    it('bug-x2 f2 g2 fail2', function() {
      assert.equal(0, 2, "should fail!");
    });
  });
});
