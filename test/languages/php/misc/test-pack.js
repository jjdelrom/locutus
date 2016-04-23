XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var pack = require('/Users/kvz/code/phpjs/src/php/misc/pack.js')

describe('php.misc.pack.js', function () {
  it.skip('should pass example 1', function (done) {
    pack('nvc*', 0x1234, 0x5678, 65, 66)
    var expected = '4xVAB'
    var result = pack('nvc*', 0x1234, 0x5678, 65, 66)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    pack('H4', '2345')
    var expected = '#E'
    var result = pack('H4', '2345')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    pack('H*', 'D5')
    var expected = 'Õ'
    var result = pack('H*', 'D5')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    pack('d', -100.876)
    var expected = "\u0000\u0000\u0000\u0000\u00008YÀ"
    var result = pack('d', -100.876)
    expect(result).to.deep.equal(expected)
    done()
  })
})