XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var function_exists = require('/Users/kvz/code/phpjs/src/php/funchand/function_exists.js')

describe('php.funchand.function_exists.js', function () {
  it.skip('should pass example 1', function (done) {
    function_exists('isFinite')
    var expected = true
    var result = function_exists('isFinite')
    expect(result).to.deep.equal(expected)
    done()
  })
})