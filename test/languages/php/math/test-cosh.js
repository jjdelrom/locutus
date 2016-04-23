XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var cosh = require('/Users/kvz/code/phpjs/src/php/math/cosh.js')

describe('php.math.cosh.js', function () {
  it('should pass example 1', function (done) {
    cosh(-0.18127180117607017)
    var expected = 1.0164747716114113
    var result = cosh(-0.18127180117607017)
    expect(result).to.deep.equal(expected)
    done()
  })
})