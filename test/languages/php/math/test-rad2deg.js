XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var rad2deg = require('/Users/kvz/code/phpjs/src/php/math/rad2deg.js')

describe('php.math.rad2deg.js', function () {
  it('should pass example 1', function (done) {
    rad2deg(3.141592653589793)
    var expected = 180
    var result = rad2deg(3.141592653589793)
    expect(result).to.deep.equal(expected)
    done()
  })
})