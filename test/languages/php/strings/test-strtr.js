XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strtr = require('/Users/kvz/code/phpjs/src/php/strings/strtr.js')

describe('php.strings.strtr.js', function () {
  it('should pass example 1', function (done) {
    $trans = {'hello' : 'hi', 'hi' : 'hello'}
    strtr('hi all, I said hello', $trans)
    var expected = 'hello all, I said hi'
$trans = {'hello' : 'hi', 'hi' : 'hello'}
    var result = strtr('hi all, I said hello', $trans)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    strtr('äaabaåccasdeöoo', 'äåö','aao')
    var expected = 'aaabaaccasdeooo'
    var result = strtr('äaabaåccasdeöoo', 'äåö','aao')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    strtr('ääääääää', 'ä', 'a')
    var expected = 'aaaaaaaa'
    var result = strtr('ääääääää', 'ä', 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    strtr('http', 'pthxyz','xyzpth')
    var expected = 'zyyx'
    var result = strtr('http', 'pthxyz','xyzpth')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    strtr('zyyx', 'pthxyz','xyzpth')
    var expected = 'http'
    var result = strtr('zyyx', 'pthxyz','xyzpth')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    strtr('aa', {'a':1,'aa':2})
    var expected = '2'
    var result = strtr('aa', {'a':1,'aa':2})
    expect(result).to.deep.equal(expected)
    done()
  })
})