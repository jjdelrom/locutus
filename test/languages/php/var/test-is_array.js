XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var is_array = require('/Users/kvz/code/phpjs/src/php/var/is_array.js')

describe('php.var.is_array.js', function () {
  it('should pass example 1', function (done) {
    is_array(['Kevin', 'van', 'Zonneveld'])
    var expected = true
    var result = is_array(['Kevin', 'van', 'Zonneveld'])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    is_array('Kevin van Zonneveld')
    var expected = false
    var result = is_array('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'})
    var expected = true
    var result = is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'})
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    is_array(function tmp_a(){this.name = 'Kevin'})
    var expected = false
    var result = is_array(function tmp_a(){this.name = 'Kevin'})
    expect(result).to.deep.equal(expected)
    done()
  })
})