XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var sort = require('/Users/kvz/code/phpjs/src/php/array/sort.js')

describe('php.array.sort.js', function () {
  it.skip('should pass example 1', function (done) {
    var arr = ['Kevin', 'van', 'Zonneveld']
    sort(arr)
    $result = arr
    var expected = ['Kevin', 'Zonneveld', 'van']
var arr = ['Kevin', 'van', 'Zonneveld']
sort(arr)
    var result = $result = arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('locutus.strictForIn', true)
    fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    sort(fruits)
    $result = fruits
    var expected = {0: 'apple', 1: 'banana', 2: 'lemon', 3: 'orange'}
ini_set('locutus.strictForIn', true)
fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
sort(fruits)
    var result = $result = fruits
    expect(result).to.deep.equal(expected)
    done()
  })
})