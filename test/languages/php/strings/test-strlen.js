XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strlen = require('/Users/kvz/code/phpjs/src/php/strings/strlen.js')

describe('php.strings.strlen.js', function () {
  it('should pass example 1', function (done) {
    strlen('Kevin van Zonneveld')
    var expected = 19
    var result = strlen('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('unicode.semantics', 'on')
    strlen('A\ud87e\udc04Z')
    var expected = 3
ini_set('unicode.semantics', 'on')
    var result = strlen('A\ud87e\udc04Z')
    expect(result).to.deep.equal(expected)
    done()
  })
})