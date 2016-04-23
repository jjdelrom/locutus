module.exports = function strtok (str, tokens) {
  //  discuss at: http://locutusjs.io/php/strtok/
  // original by: Brett Zamir (http://brett-zamir.me)
  //        note: Use tab and newline as tokenizing characters as well
  //   example 1: $string = "\t\t\t\nThis is\tan example\nstring\n"
  //   example 1: $tok = strtok($string, " \n\t")
  //   example 1: $b = ''
  //   example 1: while ($tok !== false) {$b += "Word="+$tok+"\n"; $tok = strtok(" \n\t");}
  //   example 1: $b
  //   returns 1: "Word=This\nWord=is\nWord=an\nWord=example\nWord=string\n"

  this.locutus = this.locutus || {}
  // END REDUNDANT
  if (tokens === undefined) {
    tokens = str
    str = this.locutus.strtokleftOver
  }
  if (str.length === 0) {
    return false
  }
  if (tokens.indexOf(str.charAt(0)) !== -1) {
    return strtok(str.substr(1), tokens)
  }
  for (var i = 0; i < str.length; i++) {
    if (tokens.indexOf(str.charAt(i)) !== -1) {
      break
    }
  }
  this.locutus.strtokleftOver = str.substr(i + 1)
  return str.substring(0, i)
}
