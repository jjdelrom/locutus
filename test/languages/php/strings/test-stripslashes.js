XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var stripslashes = require('/Users/kvz/code/phpjs/src/php/strings/stripslashes.js')

describe('php.strings.stripslashes.js', function () {
  it('should pass example 1', function (done) {
    stripslashes('Kevin\'s code')
    var expected = "Kevin's code"
    var result = stripslashes('Kevin\'s code')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    stripslashes('Kevin\\\'s code')
    var expected = "Kevin\'s code"
    var result = stripslashes('Kevin\\\'s code')
    expect(result).to.deep.equal(expected)
    done()
  })
})