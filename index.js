/*!
 * is-bound-function <https://github.com/tunnckoCore/is-bound-function>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * > Check `fn` is bound function, `false` otherwise.
 *
 * **Example**
 *
 * ```js
 * var isBoundFunction = require('is-bound-function')
 *
 * function fixture () { return this.foo || 'abc' }
 *
 * console.log(isBoundFunction(fixture)) // => false
 * console.log(isBoundFunction(fixture.bind({foo: 'bar'}))) // => true
 * ```
 *
 * @param  {Function} `fn`
 * @return {Boolean}
 * @api public
 */

module.exports = function isBoundFunction (fn) {
  return typeof fn === 'function'
    ? fn.toString() === 'function () { [native code] }'
    : false
}
