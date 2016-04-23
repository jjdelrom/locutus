XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var setlocale = require('/Users/kvz/code/phpjs/src/php/strings/setlocale.js')

describe('php.strings.setlocale.js', function () {
  it('should pass example 1', function (done) {
    setlocale('LC_ALL', 'en_US')
    var expected = 'en_US'
    var result = setlocale('LC_ALL', 'en_US')
    expect(result).to.deep.equal(expected)
    done()
  })
})