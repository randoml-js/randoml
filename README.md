# [RandoML](https://github.com/randoml-js/randoml)

[![NPM version](https://img.shields.io/npm/v/randoml?style=flat-square)](https://www.npmjs.com/package/randoml)
[![NPM downloads](https://img.shields.io/npm/dm/randoml?style=flat-square)](https://www.npmjs.com/package/randoml)
[![NPM license](https://img.shields.io/npm/l/randoml?style=flat-square)](https://www.npmjs.com/package/randoml)
[![Codecov](https://img.shields.io/codecov/c/github/randoml-js/randoml?style=flat-square)](https://codecov.io/gh/randoml-js/randoml)
[![Travis](https://img.shields.io/travis/com/randoml-js/randoml/main?style=flat-square)](https://app.travis-ci.com/github/randoml-js/randoml)
[![Bundle size](https://img.shields.io/bundlephobia/min/randoml?style=flat-square)](https://bundlephobia.com/result?p=randoml)

## About

RandoML is a random number library with option to disable or increase number priority.

### React Implementation

If you use React, you can install **[dedicated module with the implementation of the RandoML library](https://github.com/randoml-js/react-randoml/)**!

## How to Install

First, install the library in your project by npm:

```sh
$ npm install randoml
```

Or Yarn:

```sh
$ yarn add randoml
```

**You can also connect script via one of CDNs:**

- [bundle.run](https://bundle.run/randoml)
- [jsDelivr](https://cdn.jsdelivr.net/npm/randoml/)
- [unpkg](https://unpkg.com/randoml/)

## Getting Started

**Connect the library with the project using ES6 import:**

```html
<script src="/path/to/randoml.js"></script>
```

**ES6 import:**

```js
import RandoML from 'randoml';
```

**Or CommonJS:**

```js
const RandoML = require('randoml');
```

Next use library:

```js
const random = new RandoML({
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  },
});
```

## Methods

<!-- TODO? bull to unicode -->

**&bull; Choose:**

```js
random.choose();
```

<!-- TODO? bull to unicode -->

**&bull; Predict (Available Soon):**

```js
random.predict(/* trainings */, /* numbers */);
```

## Options

### Settings

| Name        | Type     | Default | Description                                       | Available options                               |
| ----------- | -------- | ------- | ------------------------------------------------- | ----------------------------------------------- |
| **min**     | number   | `1`     | minimum random value                              | number (smaller than `max`)                     |
| **max**     | number   | `15`    | maximum random value                              | number (bigger than `min`)                      |
| **exclude** | number[] | `null`  | numbers excluded from choice                      | array of numbers (in range between min and max) |
| **hold**    | number[] | `null`  | numbers with higher priority (bigger possibility) | array of numbers (in range between min and max) |

### Callbacks

<!-- TODO add cols -->

| Name           | Description                     | Available options      |
| -------------- | ------------------------------- | ---------------------- |
| **onInit**     | callback on library init        | `() => { /* code */ }` |
| **onChoice**   | callback on number choice       | `() => { /* code */ }` |
| **onResult**   | callback on choice result       | `() => { /* code */ }` |
| **onRangeEnd** | callback when range length is 0 | `() => { /* code */ }` |

## License

This project is licensed under the MIT License © 2019-present Jakub Biesiada
