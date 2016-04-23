XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var usort = require('/Users/kvz/code/phpjs/src/php/array/usort.js')

describe('php.array.usort.js', function () {
  it('should pass example 1', function (done) {
    $stuff = {d: '3', a: '1', b: '11', c: '4'}
    usort($stuff, function (a, b) {return(a-b);})
    $result = $stuff
    var expected = {0: '1', 1: '3', 2: '4', 3: '11'}
$stuff = {d: '3', a: '1', b: '11', c: '4'}
usort($stuff, function (a, b) {return(a-b);})
    var result = $result = $stuff
    expect(result).to.deep.equal(expected)
    done()
  })
})