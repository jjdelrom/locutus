XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var tanh = require('/Users/kvz/code/phpjs/src/php/math/tanh.js')

describe('php.math.tanh.js', function () {
  it('should pass example 1', function (done) {
    tanh(5.4251848798444815)
    var expected = 0.9999612058841574
    var result = tanh(5.4251848798444815)
    expect(result).to.deep.equal(expected)
    done()
  })
})