XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strcspn = require('/Users/kvz/code/phpjs/src/php/strings/strcspn.js')

describe('php.strings.strcspn.js', function () {
  it('should pass example 1', function (done) {
    strcspn('abcdefg123', '1234567890')
    var expected = 7
    var result = strcspn('abcdefg123', '1234567890')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    strcspn('123abc', '1234567890')
    var expected = 3
    var result = strcspn('123abc', '1234567890')
    expect(result).to.deep.equal(expected)
    done()
  })
})