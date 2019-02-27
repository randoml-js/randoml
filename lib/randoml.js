(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("RandoML", [], factory);
	else if(typeof exports === 'object')
		exports["RandoML"] = factory();
	else
		root["RandoML"] = factory();
})(typeof window !== "object" ? global.window = global : window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/randoml.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defaults.ts":
/*!*************************!*\
  !*** ./src/defaults.ts ***!
  \*************************/
/*! exports provided: defaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
var defaultSettings = {
  min: 1,
  max: 15,
  exclude: [],
  hold: []
};

/***/ }),

/***/ "./src/randoml.ts":
/*!************************!*\
  !*** ./src/randoml.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandoML; });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RandoML = function RandoML() {
  var _this = this;

  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, RandoML);

  _defineProperty(this, "settings", void 0);

  _defineProperty(this, "callbacks", void 0);

  _defineProperty(this, "number", void 0);

  _defineProperty(this, "min", void 0);

  _defineProperty(this, "max", void 0);

  _defineProperty(this, "randomize", function () {
    if (_this.minMax() - _this.settings.exclude.length > 0) {
      var unique = false;

      if (typeof _this.callbacks.onRandomize === 'function') {
        _this.callbacks.onRandomize();
      }

      do {
        _this.number = Math.floor(Math.random() * _this.minMax()) + _this.min;

        if (!_this.isExcluded(true) && _this.checkLength()) {
          var array = _this.settings.hold;
          _this.number = array[Math.floor(array.length * Math.random())];
        }

        unique = _this.isExcluded(false);
      } while (!unique);

      if (typeof _this.callbacks.onResult === 'function') {
        _this.callbacks.onResult();
      }

      return _this.number;
    } else {
      if (typeof _this.callbacks.onRangeEnd === 'function') {
        _this.callbacks.onRangeEnd();
      }
    }
  });

  _defineProperty(this, "minMax", function () {
    return _this.max - _this.min + 1;
  });

  _defineProperty(this, "checkLength", function () {
    return _this.settings.hold && _this.settings.hold.length > 0;
  });

  _defineProperty(this, "magicCount", function () {
    var date = new Date().getTime();
    var exclude = _this.settings.exclude.length;
    var hold = _this.settings.hold.length;
    return (_this.minMax() - exclude + date) % hold === 0;
  });

  _defineProperty(this, "isExcluded", function (first) {
    var duplicated = _this.settings.exclude.filter(function (item) {
      return item === _this.number;
    });

    var condition = duplicated.length === 0;

    var check = first && _this.checkLength() && _this.magicCount();

    if (check) condition = !check;
    return condition;
  });

  _defineProperty(this, "extendSettings", function (settings) {
    var newSettings = {};

    for (var property in _defaults__WEBPACK_IMPORTED_MODULE_0__["defaultSettings"]) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else {
        newSettings[property] = _defaults__WEBPACK_IMPORTED_MODULE_0__["defaultSettings"][property];
      }
    }

    return newSettings;
  });

  this.settings = this.extendSettings(data.settings || {});
  this.callbacks = data.callbacks || {};

  if (typeof this.callbacks.onInit === 'function') {
    this.callbacks.onInit();
  }

  this.min = Math.ceil(this.settings.min);
  this.max = Math.floor(this.settings.max);

  if (this.min > this.max) {
    throw 'Minimal value is bigger than maximal value';
  } else if (this.min === this.max) {
    throw 'Minimal and maximal values must be different';
  }

  var filtered = this.settings.hold.filter(function (item) {
    return item < _this.min || item > _this.max;
  });

  if (filtered.length > 0) {
    throw "".concat(filtered.join(', '), " are out of range ").concat(this.min, ", ").concat(this.max);
  }
};



/***/ })

/******/ });
});
//# sourceMappingURL=randoml.js.map