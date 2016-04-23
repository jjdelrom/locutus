XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var ucwords = require('/Users/kvz/code/phpjs/src/php/strings/ucwords.js')

describe('php.strings.ucwords.js', function () {
  it('should pass example 1', function (done) {
    ucwords('kevin van  zonneveld')
    var expected = 'Kevin Van  Zonneveld'
    var result = ucwords('kevin van  zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ucwords('HELLO WORLD')
    var expected = 'HELLO WORLD'
    var result = ucwords('HELLO WORLD')
    expect(result).to.deep.equal(expected)
    done()
  })
})