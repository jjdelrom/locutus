module.exports = function sizeof (mixed_var, mode) {
  //  discuss at: http://locutusjs.io/php/sizeof/
  // original by: Philip Peterson
  //   example 1: sizeof([[0,0],[0,-4]], 'COUNT_RECURSIVE')
  //   returns 1: 6
  //   example 2: sizeof({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE')
  //   returns 2: 6

  var count = require('../array/count')

  return count(mixed_var, mode)
}
