# [is-bound-function][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Check if given function is bound or not.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i is-bound-function --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const isBoundFunction = require('is-bound-function')
```

### [isBoundFunction](index.js#L29)
> Check `fn` is bound function, `false` otherwise.

**Params**

* `fn` **{Function}**    
* `returns` **{Boolean}**  

**Example**

```js
var isBoundFunction = require('is-bound-function')

function fixture () { return this.foo || 'abc' }

console.log(isBoundFunction(fixture)) // => false
console.log(isBoundFunction(fixture.bind({foo: 'bar'}))) // => true
```

## Related
You might also be interested in these packages:

* [function-arguments](https://www.npmjs.com/package/function-arguments): Get arguments of a function, useful for and used in dependency injectors.… [more](https://www.npmjs.com/package/function-arguments) | [homepage](https://github.com/tunnckocore/function-arguments)
* [is-async-function](https://www.npmjs.com/package/is-async-function): Is function really asynchronous function? Trying to guess that based on check… [more](https://www.npmjs.com/package/is-async-function) | [homepage](https://github.com/tunnckocore/is-async-function)
* [is-callback-function](https://www.npmjs.com/package/is-callback-function): Returns true if function is a callback. Checks its name is one… [more](https://www.npmjs.com/package/is-callback-function) | [homepage](https://github.com/tunnckocore/is-callback-function)
* [parse-arguments](https://www.npmjs.com/package/parse-arguments): Parse function to object with same key names as arguments names and… [more](https://www.npmjs.com/package/parse-arguments) | [homepage](https://github.com/tunnckocore/parse-arguments)
* [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name, args,… [more](https://www.npmjs.com/package/parse-function) | [homepage](https://github.com/tunnckocore/parse-function)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-bound-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[npmjs-url]: https://www.npmjs.com/package/is-bound-function
[npmjs-img]: https://img.shields.io/npm/v/is-bound-function.svg?label=is-bound-function

[license-url]: https://github.com/tunnckoCore/is-bound-function/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-bound-function
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-bound-function.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-bound-function
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-bound-function/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-bound-function
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-bound-function.svg

[david-url]: https://david-dm.org/tunnckoCore/is-bound-function
[david-img]: https://img.shields.io/david/tunnckoCore/is-bound-function.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

