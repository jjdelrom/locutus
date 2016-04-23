XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var current = require('/Users/kvz/code/phpjs/src/php/array/current.js')

describe('php.array.current.js', function () {
  it('should pass example 1', function (done) {
    transport = ['foot', 'bike', 'car', 'plane']
    current(transport)
    var expected = 'foot'
transport = ['foot', 'bike', 'car', 'plane']
    var result = current(transport)
    expect(result).to.deep.equal(expected)
    done()
  })
})