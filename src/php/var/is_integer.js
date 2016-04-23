module.exports = function is_integer (mixed_var) {
  //  discuss at: http://locutusjs.io/php/is_integer/
  // original by: Paulo Freitas
  //        note: 1.0 is simplified to 1 before it can be accessed by the function, this makes
  //        note: it different from the PHP implementation. We can't fix this unfortunately.
  //   example 1: is_integer(186.31)
  //   returns 1: false
  //   example 2: is_integer(12)
  //   returns 2: true

  var is_int = require('../var/is_int')
  return is_int(mixed_var)
}
