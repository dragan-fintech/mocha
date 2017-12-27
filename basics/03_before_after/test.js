// demo how 'before' and 'after' work
// to run: 
// $ npm test 03_before_after/test.js


var assert = require('assert');
describe('level1', function() {
  before(() => {
    console.log('before level 1')
  })
  after(() => {
    console.log('after level 1')
  })
  beforeEach(() => {
    console.log('beforeEach level 1')
  })
  afterEach(() => {
    console.log('afterEach level 1')
  })

  it('it level 1.1', function() {
    console.log('level 1.1 test')
  })

  it('it level 1.2', function() {
    console.log('level 1.2 test')
  })
  
  describe('level1.1', function() {
    before(() => {
      console.log('before level 1.1')
    })
    after(() => {
      console.log('after level 1.1')
    })
    beforeEach(() => {
      console.log('beforeEach level 1.1')
    })
    afterEach(() => {
      console.log('afterEach level 1.1')
    })

    it('it level 1.1.1', function() {
      console.log('level 1.1.1 test')
    })

    it('it level 1.1.2', function() {
      console.log('level 1.1.2 test')
    })

    describe('level1.1.1', function() {
      before(() => {
        console.log('before level 1.1.1')
      })
      after(() => {
        console.log('after level 1.1.1')
      })
      beforeEach(() => {
        console.log('beforeEach level 1.1.1')
      })
      afterEach(() => {
        console.log('afterEach level 1.1.1')
      })

      it('it level 1.1.1.1', function() {
        console.log('level 1.1.1.1 test')
      })

      it('it level 1.1.1.2', function() {
        console.log('level 1.1.1.2 test')
      })
    })
  })
  
  describe('level1.2', function() {
    before(() => {
      console.log('before level 1.2')
    })
    after(() => {
      console.log('after level 1.2')
    })
    beforeEach(() => {
      console.log('beforeEach level 1.2')
    })
    afterEach(() => {
      console.log('afterEach level 1.2')
    })

    it('it level 1.2.1', function() {
      console.log('level 1.2.1 test')
    })

    it('it level 1.2.2', function() {
      console.log('level 1.2.2 test')
    })
  })
})
