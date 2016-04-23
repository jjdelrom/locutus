XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var asort = require('/Users/kvz/code/phpjs/src/php/array/asort.js')

describe('php.array.asort.js', function () {
  it.skip('should pass example 1', function (done) {
    data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    data = asort(data)
    $result = data
    var expected = {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
data = asort(data)
    var result = $result = data
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('locutus.strictForIn', true)
    data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    asort(data)
    $result = data
    var expected = {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
ini_set('locutus.strictForIn', true)
data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
asort(data)
    var result = $result = data
    expect(result).to.deep.equal(expected)
    done()
  })
})