XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var setrawcookie = require('/Users/kvz/code/phpjs/src/php/network/setrawcookie.js')

describe('php.network.setrawcookie.js', function () {
  it('should pass example 1', function (done) {
    setrawcookie('author_name', 'Kevin van Zonneveld')
    var expected = true
    var result = setrawcookie('author_name', 'Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
})