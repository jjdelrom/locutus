XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strcoll = require('/Users/kvz/code/phpjs/src/php/strings/strcoll.js')

describe('php.strings.strcoll.js', function () {
  it('should pass example 1', function (done) {
    strcoll('a', 'b')
    var expected = -1
    var result = strcoll('a', 'b')
    expect(result).to.deep.equal(expected)
    done()
  })
})