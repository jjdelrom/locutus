XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var getlastmod = require('/Users/kvz/code/phpjs/src/php/info/getlastmod.js')

describe.skip('php.info.getlastmod.js', function () {
  it('should pass example 1', function (done) {
    getlastmod()
    var expected = 1237610043
    var result = getlastmod()
    expect(result).to.deep.equal(expected)
    done()
  })
})