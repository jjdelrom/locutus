XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var str_repeat = require('/Users/kvz/code/phpjs/src/php/strings/str_repeat.js')

describe('php.strings.str_repeat.js', function () {
  it('should pass example 1', function (done) {
    str_repeat('-=', 10)
    var expected = '-=-=-=-=-=-=-=-=-=-='
    var result = str_repeat('-=', 10)
    expect(result).to.deep.equal(expected)
    done()
  })
})