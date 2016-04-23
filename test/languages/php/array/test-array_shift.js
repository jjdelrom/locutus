XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_shift = require('/Users/kvz/code/phpjs/src/php/array/array_shift.js')

describe('php.array.array_shift.js', function () {
  it('should pass example 1', function (done) {
    array_shift(['Kevin', 'van', 'Zonneveld'])
    var expected = 'Kevin'
    var result = array_shift(['Kevin', 'van', 'Zonneveld'])
    expect(result).to.deep.equal(expected)
    done()
  })
})