XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var date_parse = require('/Users/kvz/code/phpjs/src/php/datetime/date_parse.js')

describe('php.datetime.date_parse.js', function () {
  it.skip('should pass example 1', function (done) {
    date_parse('2006-12-12 10:00:00.5')
    var expected = {year : 2006, month: 12, day: 12, hour: 10, minute: 0, second: 0, fraction: 0.5, warning_count: 0, warnings: [], error_count: 0, errors: [], is_localtime: false}
    var result = date_parse('2006-12-12 10:00:00.5')
    expect(result).to.deep.equal(expected)
    done()
  })
})