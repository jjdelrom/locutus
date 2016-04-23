XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var atanh = require('/Users/kvz/code/phpjs/src/php/math/atanh.js')

describe('php.math.atanh.js', function () {
  it('should pass example 1', function (done) {
    atanh(0.3)
    var expected = 0.3095196042031118
    var result = atanh(0.3)
    expect(result).to.deep.equal(expected)
    done()
  })
})