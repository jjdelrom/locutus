XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var decoct = require('/Users/kvz/code/phpjs/src/php/math/decoct.js')

describe('php.math.decoct.js', function () {
  it('should pass example 1', function (done) {
    decoct(15)
    var expected = '17'
    var result = decoct(15)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    decoct(264)
    var expected = '410'
    var result = decoct(264)
    expect(result).to.deep.equal(expected)
    done()
  })
})