XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strrpos = require('/Users/kvz/code/phpjs/src/php/strings/strrpos.js')

describe('php.strings.strrpos.js', function () {
  it('should pass example 1', function (done) {
    strrpos('Kevin van Zonneveld', 'e')
    var expected = 16
    var result = strrpos('Kevin van Zonneveld', 'e')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    strrpos('somepage.com', '.', false)
    var expected = 8
    var result = strrpos('somepage.com', '.', false)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    strrpos('baa', 'a', 3)
    var expected = false
    var result = strrpos('baa', 'a', 3)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    strrpos('baa', 'a', 2)
    var expected = 2
    var result = strrpos('baa', 'a', 2)
    expect(result).to.deep.equal(expected)
    done()
  })
})