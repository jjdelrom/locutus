XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var str_rot13 = require('/Users/kvz/code/phpjs/src/php/strings/str_rot13.js')

describe('php.strings.str_rot13.js', function () {
  it('should pass example 1', function (done) {
    str_rot13('Kevin van Zonneveld')
    var expected = 'Xriva ina Mbaariryq'
    var result = str_rot13('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    str_rot13('Xriva ina Mbaariryq')
    var expected = 'Kevin van Zonneveld'
    var result = str_rot13('Xriva ina Mbaariryq')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    str_rot13(33)
    var expected = '33'
    var result = str_rot13(33)
    expect(result).to.deep.equal(expected)
    done()
  })
})