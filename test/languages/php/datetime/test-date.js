XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var date = require('/Users/kvz/code/phpjs/src/php/datetime/date.js')

describe('php.datetime.date.js', function () {
  it.skip('should pass example 1', function (done) {
    date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400)
    var expected = '09:09:40 m is month'
    var result = date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400)
    expect(result).to.deep.equal(expected)
    done()
  })
  it.skip('should pass example 2', function (done) {
    date('F j, Y, g:i a', 1062462400)
    var expected = 'September 2, 2003, 2:26 am'
    var result = date('F j, Y, g:i a', 1062462400)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    date('Y W o', 1062462400)
    var expected = '2003 36 2003'
    var result = date('Y W o', 1062462400)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var x = date('Y m d', (new Date()).getTime() / 1000)
    x = x + ''
    $result = x.length // 2009 01 09
    var expected = 10
var x = date('Y m d', (new Date()).getTime() / 1000)
x = x + ''
    var result = $result = x.length // 2009 01 09
    expect(result).to.deep.equal(expected)
    done()
  })
  it.skip('should pass example 5', function (done) {
    date('W', 1104534000)
    var expected = '53'
    var result = date('W', 1104534000)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    date('B t', 1104534000)
    var expected = '999 31'
    var result = date('B t', 1104534000)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    date('W U', 1293750000.82); // 2010-12-31
    var expected = '52 1293750000'
    var result = date('W U', 1293750000.82); // 2010-12-31
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    date('W', 1293836400); // 2011-01-01
    var expected = '52'
    var result = date('W', 1293836400); // 2011-01-01
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 9', function (done) {
    date('W Y-m-d', 1293974054); // 2011-01-02
    var expected = '52 2011-01-02'
    var result = date('W Y-m-d', 1293974054); // 2011-01-02
    expect(result).to.deep.equal(expected)
    done()
  })
})