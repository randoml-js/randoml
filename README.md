# [RandoML](https://github.com/jb1905/randoml)

[![NPM version](http://img.shields.io/npm/v/randoml.svg?style=flat-square)](https://www.npmjs.com/package/randoml)
[![NPM downloads](http://img.shields.io/npm/dm/randoml.svg?style=flat-square)](https://www.npmjs.com/package/randoml)

## About
RandoML is a library of random numbers with the option of excluding or increasing the priority of a number.

## How to Install
First, install the library in your project by npm:
```sh
$ npm install randoml
```

Or Yarn:
```sh
$ yarn add randoml
```

**You can also connect script via one of CDNs:**<br>
bundle.run: `https://bundle.run/randoml`<br>
jsDelivr: `https://cdn.jsdelivr.net/npm/randoml/`<br>
unpkg: `https://unpkg.com/randoml/`

## Getting Started
**Connect libary to project using script tag in HTML:**
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
  }
});
```

## Methods
&bull; Choice
```js
random.choice();
```

## Options
### Settings
Name | Type | Default | Description | Available options
-|-|-|-|-
min | number | `1` | minimum random value | number (smaller than `max`)
max | number | `15` | maxmum random value | number (bigger than `min`)
exclude | number[] | `null` | numbers excluded from choice | array of numbers (in range between min and max)
hold | number[] | `null` | numbers with higher priority (bigger possibility) | array of numbers (in range between min and max)

### Callbacks
Name | Description | Available options
-|-|-
onInit | callback on library init | `() => { /* code */ }`
onChoice | callback on number choice | `() => { /* code */ }`
onResult | callback on choice result | `() => { /* code */ }`
onRangeEnd | callback when range length is 0 | `() => { /* code */ }`

## License
This project is licensed under the MIT License © 2019-present Jakub Biesiada
