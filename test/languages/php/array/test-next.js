XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var next = require('/Users/kvz/code/phpjs/src/php/array/next.js')

describe('php.array.next.js', function () {
  it('should pass example 1', function (done) {
    transport = ['foot', 'bike', 'car', 'plane']
    next(transport)
    next(transport)
    var expected = 'car'
transport = ['foot', 'bike', 'car', 'plane']
next(transport)
    var result = next(transport)
    expect(result).to.deep.equal(expected)
    done()
  })
})