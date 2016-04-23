XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array = require('/Users/kvz/code/phpjs/src/php/array/array.js')

describe.skip('php.array.array.js', function () {
  it('should pass example 1', function (done) {
    array('Kevin', 'van', 'Zonneveld')
    var expected = ['Kevin', 'van', 'Zonneveld']
    var result = array('Kevin', 'van', 'Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('locutus.return_locutus_arrays', 'on')
    array({0:2}, {a:41}, {2:3}).change_key_case('CASE_UPPER').keys()
    var expected = [0,'A',2]
ini_set('locutus.return_locutus_arrays', 'on')
    var result = array({0:2}, {a:41}, {2:3}).change_key_case('CASE_UPPER').keys()
    expect(result).to.deep.equal(expected)
    done()
  })
})