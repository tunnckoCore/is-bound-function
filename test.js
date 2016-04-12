/*!
 * is-bound-function <https://github.com/tunnckoCore/is-bound-function>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isBoundFunction = require('./index')

test('is-bound-function:', function (done) {
  /* istanbul ignore next */
  function fixture () {}
  var boundFn = fixture.bind({foo: 'bar'})

  test.strictEqual(isBoundFunction(boundFn), true)
  test.strictEqual(isBoundFunction(fixture), false)
  done()
})
