(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("brain.js"));
	else if(typeof define === 'function' && define.amd)
		define("RandoML", ["brain.js"], factory);
	else if(typeof exports === 'object')
		exports["RandoML"] = factory(require("brain.js"));
	else
		root["RandoML"] = factory(root["brain.js"]);
})(typeof window !== "object" ? global.window = global : window, function(__WEBPACK_EXTERNAL_MODULE_brain_js__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defaults.ts":
/*!*************************!*\
  !*** ./src/defaults.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSettings = {
    min: 1,
    max: 15,
    exclude: [],
    hold: []
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var randoml_1 = __importDefault(__webpack_require__(/*! ./randoml */ "./src/randoml.ts"));
exports.default = randoml_1.default;
exports['default'] = randoml_1.default;
module.exports = exports['default'];


/***/ }),

/***/ "./src/randoml.ts":
/*!************************!*\
  !*** ./src/randoml.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var defaults_1 = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
var RandoML = /** @class */ (function () {
    function RandoML(data) {
        var _this = this;
        this.minMax = function () { return _this.max - _this.min + 1; };
        this.settings = this.extendSettings(data.settings || {});
        this.callbacks = data.callbacks || {};
        if (typeof this.callbacks.onInit === 'function') {
            this.callbacks.onInit();
        }
        this.min = Math.ceil(this.settings.min);
        this.max = Math.floor(this.settings.max);
        if (this.min > this.max) {
            throw 'Minimal value is bigger than maximal value';
        }
        else if (this.min === this.max) {
            throw 'Minimal and maximal values must be different';
        }
        var filtered = this.settings.hold.filter(function (item) { return item < _this.min || item > _this.max; });
        if (filtered.length > 0) {
            throw filtered.join(', ') + " are out of range " + this.min + ", " + this.max;
        }
    }
    RandoML.prototype.choose = function () {
        if (this.minMax() - this.settings.exclude.length > 0) {
            var unique = false;
            if (typeof this.callbacks.onChoice === 'function') {
                this.callbacks.onChoice();
            }
            do {
                this.number = Math.floor(Math.random() * this.minMax()) + this.min;
                if (!this.isExcluded(true) && this.checkLength()) {
                    var array = this.settings.hold;
                    this.number = array[Math.floor(array.length * Math.random())];
                }
                unique = this.isExcluded(false);
            } while (!unique);
            if (typeof this.callbacks.onResult === 'function') {
                this.callbacks.onResult();
            }
            return this.number;
        }
        else {
            if (typeof this.callbacks.onRangeEnd === 'function') {
                this.callbacks.onRangeEnd();
            }
        }
    };
    RandoML.prototype.checkLength = function () {
        return this.settings.hold && this.settings.hold.length > 0;
    };
    RandoML.prototype.magicCount = function () {
        var date = new Date().getTime();
        var exclude = this.settings.exclude.length;
        var hold = this.settings.hold.length;
        return (this.minMax() - exclude + date) % hold === 0;
    };
    RandoML.prototype.isExcluded = function (first) {
        var _this = this;
        var duplicated = this.settings.exclude.filter(function (item) { return item === _this.number; });
        var condition = duplicated.length === 0;
        var check = first && this.checkLength() && this.magicCount();
        if (check)
            condition = !check;
        return condition;
    };
    RandoML.prototype.predict = function (trainings, numbers) {
        Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! brain.js */ "brain.js")); }).then(function (brain) {
            var net = new brain.NeuralNetwork({
                hiddenLayers: [3]
            });
            net.train(trainings);
            return net.run(numbers);
        });
    };
    RandoML.prototype.extendSettings = function (settings) {
        var newSettings = {};
        var property;
        for (property in defaults_1.defaultSettings) {
            if (property in settings) {
                newSettings[property] = settings[property];
            }
            else {
                newSettings[property] = defaults_1.defaultSettings[property];
            }
        }
        return newSettings;
    };
    return RandoML;
}());
exports.default = RandoML;


/***/ }),

/***/ "brain.js":
/*!***************************!*\
  !*** external "brain.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_brain_js__;

/***/ })

/******/ });
});
//# sourceMappingURL=randoml.js.map