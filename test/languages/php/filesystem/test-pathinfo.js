XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var pathinfo = require('/Users/kvz/code/phpjs/src/php/filesystem/pathinfo.js')

describe('php.filesystem.pathinfo.js', function () {
  it('should pass example 1', function (done) {
    pathinfo('/www/htdocs/index.html', 1)
    var expected = '/www/htdocs'
    var result = pathinfo('/www/htdocs/index.html', 1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME')
    var expected = 'index.html'
    var result = pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    pathinfo('/www/htdocs/index.html', 'PATHINFO_EXTENSION')
    var expected = 'html'
    var result = pathinfo('/www/htdocs/index.html', 'PATHINFO_EXTENSION')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    pathinfo('/www/htdocs/index.html', 'PATHINFO_FILENAME')
    var expected = 'index'
    var result = pathinfo('/www/htdocs/index.html', 'PATHINFO_FILENAME')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    pathinfo('/www/htdocs/index.html', 2 | 4)
    var expected = {basename: 'index.html', extension: 'html'}
    var result = pathinfo('/www/htdocs/index.html', 2 | 4)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    pathinfo('/www/htdocs/index.html', 'PATHINFO_ALL')
    var expected = {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
    var result = pathinfo('/www/htdocs/index.html', 'PATHINFO_ALL')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    pathinfo('/www/htdocs/index.html')
    var expected = {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
    var result = pathinfo('/www/htdocs/index.html')
    expect(result).to.deep.equal(expected)
    done()
  })
})