XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var tan = require('/Users/kvz/code/phpjs/src/php/math/tan.js')

describe('php.math.tan.js', function () {
  it('should pass example 1', function (done) {
    Math.ceil(tan(8723321.4) * 10000000)
    var expected = 54251849
    var result = Math.ceil(tan(8723321.4) * 10000000)
    expect(result).to.deep.equal(expected)
    done()
  })
})