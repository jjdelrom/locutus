XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var parse_str = require('/Users/kvz/code/phpjs/src/php/strings/parse_str.js')

describe.skip('php.strings.parse_str.js', function () {
  it('should pass example 1', function (done) {
    var arr = {}
    parse_str('first=foo&second=bar', arr)
    $result = arr
    var expected = { first: 'foo', second: 'bar' }
var arr = {}
parse_str('first=foo&second=bar', arr)
    var result = $result = arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var arr = {}
    parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', arr)
    $result = arr
    var expected = { str_a: "Jack and Jill didn't see the well." }
var arr = {}
parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', arr)
    var result = $result = arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var abc = {3:'a'}
    parse_str('abc[a][b]["c"]=def&abc[q]=t+5')
    var expected = {"3":"a","a":{"b":{"c":"def"}},"q":"t 5"}
var abc = {3:'a'}
    var result = parse_str('abc[a][b]["c"]=def&abc[q]=t+5')
    expect(result).to.deep.equal(expected)
    done()
  })
})