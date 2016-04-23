XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var intval = require('/Users/kvz/code/phpjs/src/php/var/intval.js')

describe('php.var.intval.js', function () {
  it('should pass example 1', function (done) {
    intval('Kevin van Zonneveld')
    var expected = 0
    var result = intval('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    intval(4.2)
    var expected = 4
    var result = intval(4.2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    intval(42, 8)
    var expected = 42
    var result = intval(42, 8)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    intval('09')
    var expected = 9
    var result = intval('09')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    intval('1e', 16)
    var expected = 30
    var result = intval('1e', 16)
    expect(result).to.deep.equal(expected)
    done()
  })
})