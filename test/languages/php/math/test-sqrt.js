XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var sqrt = require('/Users/kvz/code/phpjs/src/php/math/sqrt.js')

describe('php.math.sqrt.js', function () {
  it('should pass example 1', function (done) {
    sqrt(8723321.4)
    var expected = 2953.5269424875746
    var result = sqrt(8723321.4)
    expect(result).to.deep.equal(expected)
    done()
  })
})