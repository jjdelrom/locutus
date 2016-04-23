XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var version_compare = require('/Users/kvz/code/phpjs/src/php/info/version_compare.js')

describe('php.info.version_compare.js', function () {
  it('should pass example 1', function (done) {
    version_compare('8.2.5rc', '8.2.5a')
    var expected = 1
    var result = version_compare('8.2.5rc', '8.2.5a')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    version_compare('8.2.50', '8.2.52', '<')
    var expected = true
    var result = version_compare('8.2.50', '8.2.52', '<')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    version_compare('5.3.0-dev', '5.3.0')
    var expected = -1
    var result = version_compare('5.3.0-dev', '5.3.0')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    version_compare('4.1.0.52','4.01.0.51')
    var expected = 1
    var result = version_compare('4.1.0.52','4.01.0.51')
    expect(result).to.deep.equal(expected)
    done()
  })
})