XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var i18n_loc_set_default = require('/Users/kvz/code/phpjs/src/php/i18n/i18n_loc_set_default.js')

describe('php.i18n.i18n_loc_set_default.js', function () {
  it('should pass example 1', function (done) {
    i18n_loc_set_default('pt_PT')
    var expected = true
    var result = i18n_loc_set_default('pt_PT')
    expect(result).to.deep.equal(expected)
    done()
  })
})