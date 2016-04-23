XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var substr = require('/Users/kvz/code/phpjs/src/php/strings/substr.js')

describe('php.strings.substr.js', function () {
  it('should pass example 1', function (done) {
    substr('abcdef', 0, -1)
    var expected = 'abcde'
    var result = substr('abcdef', 0, -1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    substr(2, 0, -6)
    var expected = false
    var result = substr(2, 0, -6)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    ini_set('unicode.semantics',  'on')
    substr('a\uD801\uDC00', 0, -1)
    var expected = 'a'
ini_set('unicode.semantics',  'on')
    var result = substr('a\uD801\uDC00', 0, -1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    ini_set('unicode.semantics',  'on')
    substr('a\uD801\uDC00', 0, 2)
    var expected = 'a\uD801\uDC00'
ini_set('unicode.semantics',  'on')
    var result = substr('a\uD801\uDC00', 0, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    ini_set('unicode.semantics',  'on')
    substr('a\uD801\uDC00', -1, 1)
    var expected = '\uD801\uDC00'
ini_set('unicode.semantics',  'on')
    var result = substr('a\uD801\uDC00', -1, 1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    ini_set('unicode.semantics',  'on')
    substr('a\uD801\uDC00z\uD801\uDC00', -3, 2)
    var expected = '\uD801\uDC00z'
ini_set('unicode.semantics',  'on')
    var result = substr('a\uD801\uDC00z\uD801\uDC00', -3, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    ini_set('unicode.semantics',  'on')
    substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
    var expected = '\uD801\uDC00z'
ini_set('unicode.semantics',  'on')
    var result = substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
    expect(result).to.deep.equal(expected)
    done()
  })
})