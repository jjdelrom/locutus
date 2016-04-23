XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_map = require('/Users/kvz/code/phpjs/src/php/array/array_map.js')

describe('php.array.array_map.js', function () {
  it('should pass example 1', function (done) {
    array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] )
    var expected = [ 1, 8, 27, 64, 125 ]
    var result = array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] )
    expect(result).to.deep.equal(expected)
    done()
  })
})