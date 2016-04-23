XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var max = require('/Users/kvz/code/phpjs/src/php/math/max.js')

describe('php.math.max.js', function () {
  it('should pass example 1', function (done) {
    max(1, 3, 5, 6, 7)
    var expected = 7
    var result = max(1, 3, 5, 6, 7)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    max([2, 4, 5])
    var expected = 5
    var result = max([2, 4, 5])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    max(0, 'hello')
    var expected = 0
    var result = max(0, 'hello')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    max('hello', 0)
    var expected = 'hello'
    var result = max('hello', 0)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    max(-1, 'hello')
    var expected = 'hello'
    var result = max(-1, 'hello')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    max([2, 4, 8], [2, 5, 7])
    var expected = [2, 5, 7]
    var result = max([2, 4, 8], [2, 5, 7])
    expect(result).to.deep.equal(expected)
    done()
  })
})