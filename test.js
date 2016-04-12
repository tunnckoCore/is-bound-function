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
var bindContext = require('bind-context')

test('should return `true` when function is bound with native `.bind` function', function (done) {
  /* istanbul ignore next */
  function fixture () {}
  var boundFn = fixture.bind({foo: 'bar'})

  test.strictEqual(isBoundFunction(boundFn), true)
  test.strictEqual(isBoundFunction(fixture), false)
  done()
})

test('should return `false` when function is bound with `bind-context` lib', function (done) {
  /* istanbul ignore next */
  function fixture () {}
  var boundFn = bindContext({foo: 'bar'}, fixture)

  test.strictEqual(isBoundFunction(boundFn), false)
  test.strictEqual(isBoundFunction(fixture), false)
  done()
})
