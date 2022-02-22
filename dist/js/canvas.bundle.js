/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/coin.png":
/*!**************************!*\
  !*** ./src/img/coin.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a810f86b2b53859f09e984ad73cfc779.png");

/***/ }),

/***/ "./src/img/enem.png":
/*!**************************!*\
  !*** ./src/img/enem.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "db5f30d5be71b25ce265049ad22eca42.png");

/***/ }),

/***/ "./src/img/finish.png":
/*!****************************!*\
  !*** ./src/img/finish.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6ddfa9ad5d09125133887a06307ce029.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/plat1.png":
/*!***************************!*\
  !*** ./src/img/plat1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4cd91268af1b5bd17ccc008d1d71e1bd.png");

/***/ }),

/***/ "./src/img/plat2.png":
/*!***************************!*\
  !*** ./src/img/plat2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "30cd8dda4862fae0a5e4f1f44fa5ed95.png");

/***/ }),

/***/ "./src/img/plat3.png":
/*!***************************!*\
  !*** ./src/img/plat3.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e211280d14fe01ebd89b2f8b2eea1077.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/reload.png":
/*!****************************!*\
  !*** ./src/img/reload.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "042a8c18ae72c391f38dcbbc95c54ef8.png");

/***/ }),

/***/ "./src/img/spri.png":
/*!**************************!*\
  !*** ./src/img/spri.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2c92a7eb7d92eb2b0d66ddaf28918083.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/img/win.png":
/*!*************************!*\
  !*** ./src/img/win.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bbae0639a1f99e08f6700fd257952128.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_coin_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/coin.png */ "./src/img/coin.png");
/* harmony import */ var _img_spri_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/spri.png */ "./src/img/spri.png");
/* harmony import */ var _img_enem_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/enem.png */ "./src/img/enem.png");
/* harmony import */ var _img_win_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/win.png */ "./src/img/win.png");
/* harmony import */ var _img_finish_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/finish.png */ "./src/img/finish.png");
/* harmony import */ var _img_reload_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/reload.png */ "./src/img/reload.png");
/* harmony import */ var _img_plat2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/plat2.png */ "./src/img/plat2.png");
/* harmony import */ var _img_plat1_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/plat1.png */ "./src/img/plat1.png");
/* harmony import */ var _img_plat3_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/plat3.png */ "./src/img/plat3.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var statistics = {};
var playerName = '';
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.6;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.spead = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}(); //  ------------------------------------------------------------------ Создание Платформы


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var Win = /*#__PURE__*/function () {
  function Win(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, Win);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Win, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Win;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} //  ------------------------------------------------------------------  Создание Монет


var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        image = _ref4.image;

    _classCallCheck(this, Sprite);

    this.image = image;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 5.5;
    this.numberOfFrames = 9.1;
    this.width = 400;
    this.height = 100;
    this.count = 0;
    this.start();
    this.position = {
      x: x,
      y: y
    };
  }

  _createClass(Sprite, [{
    key: "update",
    value: function update() {
      this.tickCount++;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex++;
        } else {
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frameIndex * this.width / this.numberOfFrames, 0, this.width / this.numberOfFrames, this.height, this.position.x, this.position.y, this.width / this.numberOfFrames, this.height);
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var loop = function loop() {
        _this.update();

        _this.draw();

        window.requestAnimationFrame(loop);
      };

      window.requestAnimationFrame(loop);
    }
  }]);

  return Sprite;
}(); // ---------------------------------------------------------- создание Врага


var Enemy = /*#__PURE__*/function () {
  function Enemy(_ref5) {
    var x = _ref5.x,
        y = _ref5.y,
        image = _ref5.image;

    _classCallCheck(this, Enemy);

    this.image = image;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 14.5;
    this.numberOfFrames = 2.56;
    this.width = 400;
    this.height = 150;
    this.count = 0;
    this.start();
    this.position = {
      x: x,
      y: y
    };
  }

  _createClass(Enemy, [{
    key: "update",
    value: function update() {
      this.tickCount++;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex++;
        } else {
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frameIndex * 200 / this.numberOfFrames, 0, 200 / this.numberOfFrames, this.height, this.position.x, 355, 250 / this.numberOfFrames, this.height);
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var loop = function loop() {
        _this2.update();

        _this2.draw();

        window.requestAnimationFrame(loop);
      };

      window.requestAnimationFrame(loop);
    }
  }]);

  return Enemy;
}();

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var platformlevelImg = createImage(_img_plat2_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
var platformlevelImg2 = createImage(_img_plat1_png__WEBPACK_IMPORTED_MODULE_15__["default"]);
var platformlevelImg3 = createImage(_img_plat3_png__WEBPACK_IMPORTED_MODULE_16__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var sprite = [];
var enemy = [];
var winss = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;
platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);

function init() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  platformlevelImg = createImage(_img_plat2_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
  player = new Player(); //  ------------------------------------------------------------------  Платформы

  platforms = [new Platform({
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 7 + 130 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 380,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 7 + 400 + 10 + platformImage.width - platformSmallTallImage.width,
    y: 290,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 7 + 400 + 10 + platformImage.width - platformSmallTallImage.width,
    y: 380,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 7 + 720 - 25 + platformImage.width - platformSmallTallImage.width,
    y: 200,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 7 + 720 - 25 + platformImage.width - platformSmallTallImage.width,
    y: 290,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 7 + 720 - 25 + platformImage.width - platformSmallTallImage.width,
    y: 380,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 11 - platformSmallTallImage.width,
    y: 0,
    image: createImage(_img_win_png__WEBPACK_IMPORTED_MODULE_11__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 700 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 700 - 4,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 700 - 6,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 + 1100 - 6,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 + 1100 - 8,
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
  sprite = [new Sprite({
    x: 600,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 700,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 800,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 2950,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 3050,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 3150,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 4000,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 4100,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 4200,
    y: 400,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  })];
  enemy = [new Enemy({
    x: 1600,
    y: 0,
    image: createImage(_img_enem_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Enemy({
    x: 2400,
    y: 0,
    image: createImage(_img_enem_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Enemy({
    x: 3800,
    y: 0,
    image: createImage(_img_enem_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  })];
} // initLevel


function initLevel() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  platformlevelImg = createImage(_img_plat2_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
  player = new Player(); //  ------------------------------------------------------------------  Платформы

  platforms = [new Platform({
    x: platformlevelImg.width * 4 + 300 - 2 + platformlevelImg.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_plat2_png__WEBPACK_IMPORTED_MODULE_14__["default"])
  }), new Platform({
    x: platformlevelImg * 7 + 130 - 2 + platformlevelImg.width,
    y: 380,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformlevelImg
  }), new Platform({
    x: platformImage.width - 3,
    y: 300,
    image: platformlevelImg2
  }), new Platform({
    x: platformImage.width * 1.7,
    y: 470,
    image: platformlevelImg3
  }), new Platform({
    x: platformImage.width * 2.5,
    y: 470,
    image: platformlevelImg
  }), new Platform({
    x: platformImage.width * 5,
    y: 470,
    image: platformlevelImg2
  }), new Platform({
    x: platformImage.width * 5 + 500,
    y: 350,
    image: platformlevelImg3
  }), new Platform({
    x: platformImage.width * 6 + 200,
    y: 470,
    image: platformlevelImg
  }), new Platform({
    x: platformImage.width * 7 + 300,
    y: 470,
    image: platformlevelImg3
  }), new Platform({
    x: platformImage.width * 7 + 700,
    y: 470,
    image: platformlevelImg3
  }), new Platform({
    x: platformImage.width * 7 + 1000,
    y: 350,
    image: platformlevelImg3
  }), new Platform({
    x: platformImage.width * 7 + 1250,
    y: 250,
    image: platformlevelImg3
  }), new Platform({
    x: platformImage.width * 7 + 1600,
    y: 510,
    image: platformlevelImg
  }), new Platform({
    x: platformImage.width * 7 + 2000,
    y: 510,
    image: platformlevelImg
  })];
  winss = [new Win({
    x: platformImage.width * 11 - 300 - platformSmallTallImage.width,
    y: 430,
    image: createImage(_img_finish_png__WEBPACK_IMPORTED_MODULE_12__["default"])
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })]; //  ------------------------------------------------------------------  Монеты

  scrollOffset = 0;
  sprite = [new Sprite({
    x: 1050,
    y: 420,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 1700,
    y: 420,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 3050,
    y: 420,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 2950,
    y: 420,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 3900,
    y: 420,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 3900,
    y: 420,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 4420,
    y: 420,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  }), new Sprite({
    x: 4820,
    y: 420,
    image: createImage(_img_spri_png__WEBPACK_IMPORTED_MODULE_9__["default"])
  })];
  enemy = [new Enemy({
    x: 1600,
    y: 0,
    image: createImage(_img_enem_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new Enemy({
    x: 3800,
    y: 0,
    image: createImage(_img_enem_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  })];
}

var tr = true;

function trueFalse(ar) {
  if (tr === true) {
    console.log('win');
    youWin();
  } else if (tr === false) {
    tr = ar;
  }

  console.log(tr);
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  winss.forEach(function (win) {
    win.draw();
  });
  sprite.forEach(function (coinImage) {
    coinImage.draw();
  });
  enemy.forEach(function (enemyy) {
    enemyy.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.spead;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.spead;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= player.spead;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.spead * 0.66;
      });
      sprite.forEach(function (coinImage) {
        coinImage.position.x -= player.spead;
      });
      enemy.forEach(function (enemyy) {
        enemyy.position.x -= player.spead;
      });
      winss.forEach(function (wins) {
        wins.position.x -= player.spead;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.spead;
      platforms.forEach(function (platform) {
        platform.position.x += player.spead;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.spead * 0.66;
      });
      sprite.forEach(function (coinImage) {
        coinImage.position.x += player.spead;
      });
      enemy.forEach(function (enemyy) {
        enemyy.position.x += player.spead;
      });
      winss.forEach(function (wins) {
        wins.position.x += player.spead;
      });
    }
  } // ----------------------------------------------------       обнаружение столкновения с платформой


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // ---------------------------------------------------------------------- обнаружение чкловека с монетой

  sprite.forEach(function (coinImage) {
    if (player.position.y + player.height >= coinImage.position.x && player.position.x + player.width >= coinImage.position.x && player.position.x <= coinImage.position.x) {
      coinImage.position.x = -1000;
      var n = localStorage.getItem('on_load_counter');

      if (n === null) {
        n = 0;
      }

      n++;
      localStorage.setItem("on_load_counter", n);
      document.getElementById('count').innerHTML = n;
    }
  });
  enemy.forEach(function (enemyy) {
    if (player.position.y + player.height >= enemyy.position.x && player.position.y + player.height + player.velocity.y >= enemyy.position.x && player.position.x + player.width >= enemyy.position.x && player.position.x <= enemyy.position.x) {
      sprite.forEach(function (coinImage) {
        coinImage.position.x = -1000;
      });
      init();
      enemyy.position.x = -1000;
      clearLocal();
      winss.forEach(function (wins) {
        wins.position.x = -6000;
      });
    }
  }); // ----------------------------------------------------------- Победа второй уровень

  winss.forEach(function (wins) {
    if (player.position.y + player.height >= wins.position.x && player.position.y + player.height + player.velocity.y >= wins.position.x && player.position.x + player.width >= wins.position.x && player.position.x <= wins.position.x) {
      trueFalse();
      tr = false;
      wins.position.y = -2000;
    }
  }); //--------------------------------------------------------       переключение человечка право,лево

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } // win condition 


  if (scrollOffset > 2800) {
    initLevel();
  } //lose condition


  if (player.position.y > canvas.height) {
    // запуск игры сначала
    sprite.forEach(function (coinImage) {
      coinImage.position.x = -1000;
    });
    enemy.forEach(function (enemyy) {
      enemyy.position.x = -1000;
    });
    winss.forEach(function (wins) {
      wins.position.x = -6000;
    });
    init();
    clearLocal();
  } // console.log(scrollOffset)

} // -------------------------------------------------------------------очистка Локал


function clearLocal() {
  localStorage.removeItem('on_load_counter');
  document.getElementById('count').innerHTML = '0';
}

function saveStat() {
  statistics[playerName] = document.getElementById('count').innerHTML;
  localStorage.setItem('stat', JSON.stringify(statistics));
}

function getStat() {
  if (localStorage.getItem('stat')) {
    statistics = JSON.parse(localStorage.getItem('stat'));
    console.log(statistics);
  }
} // ----------------------------------------------------------------- запуск меню


creatMenu();
getStat(); // ---------------------------------------------------------------- кнопки управления

addEventListener('keydown', function (_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    case (65, 37):
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case (83, 40):
      break;

    case (68, 39):
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case (87, 38):
      if (player.velocity.y < -1) {
        break;
      } else player.velocity.y -= 25;

      break;
  }
});
addEventListener('keyup', function (_ref7) {
  var keyCode = _ref7.keyCode;

  switch (keyCode) {
    case (65, 37):
      keys.left.pressed = false;
      break;

    case (83, 40):
      break;

    case (68, 39):
      keys.right.pressed = false;
      break;

    case (87, 38):
      break;
  }
});
addEventListener('keydown', function (_ref8) {
  var keyCode = _ref8.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 83:
      break;

    case 68:
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      if (player.velocity.y < -1) {
        break;
      } else player.velocity.y -= 25;

      break;
  }
});
addEventListener('keyup', function (_ref9) {
  var keyCode = _ref9.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;

    case 83:
      break;

    case 68:
      keys.right.pressed = false;
      break;

    case 87:
      break;
  }
}); // ----------------------------------------- Победа во втором уровне 

function youWin() {
  var d = document.createElement('div');
  d.style.width = '300px';
  d.style.background = 'gray';
  d.style.position = 'absolute';
  d.style.textAlign = 'center';
  d.style.borderRadius = '5px';
  document.body.appendChild(d);
  createStatistics();
  saveStat();
  createStat();

  function createStatistics() {
    var button = document.createElement("button");
    button.id = 'statistics';
    button.innerHTML = "Restart";
    button.style.width = '180px';
    button.style.height = '40px';
    button.style.textAlign = 'center';
    button.style.margin = '25px 25px 25px 25px';
    button.style.fontSize = '25px';
    button.style.borderRadius = '10px';
    button.style.backgroundColor = '#58bab3';
    button.style.color = '#808080';
    button.style.fontFamily = 'Orbitron';
    button.style.borderStyle = 'none';
    button.style.boxShadow = '5px 5px 5px black';
    d.appendChild(button);
    button.addEventListener("click", function () {
      d.style.display = "none";
      location.reload(); // -----------------------------------------------------изменения

      init();
      trueFalse(true);
      winss.forEach(function (wins) {
        wins.position.x = -6000;
      });
    });
  }

  function createStat() {
    if (localStorage.getItem('stat')) {
      var stat = JSON.parse(localStorage.getItem('stat'));
      var tbl = document.createElement('table');
      var trTop = tbl.insertRow();
      trTop.innerHTML = 'Best score:';
      trTop.style.textAlign = 'end';
      trTop.style.fontSize = '24px';
      trTop.style.margin = '0 0 25px 0';
      trTop.style.padding = '0 0 0 50px';
      trTop.style.color = 'white';

      for (var prop in stat) {
        var _tr = tbl.insertRow();

        _tr.style.height = '30px';

        var td1 = _tr.insertCell();

        td1.appendChild(document.createTextNode("".concat(prop)));

        var td2 = _tr.insertCell();

        td2.appendChild(document.createTextNode("".concat(stat[prop])));
      }

      tbl.style.width = '220px';
      tbl.style.margin = '0 0 25px 0';
      d.appendChild(tbl);
    } else {
      var empty = document.createElement('div');
      empty.innerHTML = 'Statistic is empty!';
      empty.style.margin = '0 0 25px 0';
      d.appendChild(empty);
    }
  }
} // создание меню блока


function creatCent() {
  var d = document.createElement('div');
  d.id = 'count';
  d.style.width = '60px';
  d.style.height = '37px';
  d.style.background = 'gray';
  d.style.position = 'absolute';
  d.style.textAlign = 'center';
  d.style.fontSize = '28px';
  d.style.marginTop = '-500px';
  d.style.marginLeft = '650px';
  d.style.borderRadius = '20px';
  d.style.padding = '3px 0px 0px 27px';
  d.innerHTML = '0';
  document.body.appendChild(d);
}

function creatCoin() {
  var img = document.createElement("img");
  img.src = _img_coin_png__WEBPACK_IMPORTED_MODULE_8__["default"];
  img.style.width = '40px';
  img.style.height = '40px';
  img.style.position = 'absolute';
  img.style.marginTop = '-250px';
  img.style.marginLeft = '302px';
  document.body.appendChild(img);
}

function creatReset() {
  var img = document.createElement("img");
  img.src = "https://cdn-icons-png.flaticon.com/512/16/16427.png";
  img.style.width = '40px';
  img.style.height = '40px';
  img.style.position = 'absolute';
  img.style.marginTop = '-250px';
  img.style.marginLeft = '400px';
  document.body.appendChild(img);
  img.addEventListener("click", function () {
    menuPause();
    player.spead = 0;
    player.sprites.run.cropWidth = 0;
    player.sprites.run.width = 0;
  });
}

function menuPause() {
  var d = document.createElement('div');
  d.style.width = '260px';
  d.style.height = '160px';
  d.style.background = 'gray';
  d.style.position = 'absolute';
  d.style.textAlign = 'center';
  d.style.borderRadius = '4px';
  d.style.fontFamily = 'Orbitron';
  document.body.appendChild(d);

  function createCounti() {
    var button = document.createElement("button");
    button.id = 'Continue';
    button.innerHTML = "Continue";
    button.style.width = '180px';
    button.style.height = '35px';
    button.style.textAlign = 'center';
    button.style.margin = '30px 25px 25px 25px';
    button.style.fontSize = '25px';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#58bab3';
    button.style.color = '#808080';
    button.style.fontFamily = 'Orbitron';
    button.style.borderStyle = 'none';
    button.style.boxShadow = '5px 5px 5px black';
    d.appendChild(button);
    button.addEventListener("click", function () {
      d.style.display = 'none';
      player.spead = 10;
      player.sprites.run.cropWidth = 341;
      player.sprites.run.width = 127.875;
    });
  }

  function createHomeMenu() {
    var button = document.createElement("button");
    button.id = 'Menu';
    button.innerHTML = "Menu";
    button.style.width = '180px';
    button.style.height = '35px';
    button.style.textAlign = 'center';
    button.style.margin = '0px 25px 25px 25px';
    button.style.fontSize = '25px';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#58bab3';
    button.style.color = '#808080';
    button.style.fontFamily = 'Orbitron';
    button.style.borderStyle = 'none';
    button.style.boxShadow = '5px 5px 5px black';
    d.appendChild(button);
    button.addEventListener("click", function () {
      document.getElementById("plName").remove();
      creatMenu();
      d.style.display = 'none';
      location.reload();
    });
  }

  createCounti();
  createHomeMenu();
}

function creatPause() {
  var img = document.createElement("img");
  img.src = _img_reload_png__WEBPACK_IMPORTED_MODULE_13__["default"];
  img.style.width = '45px';
  img.style.height = '45px';
  img.style.position = 'absolute';
  img.style.marginTop = '-250px';
  img.style.marginLeft = '450px';
  document.body.appendChild(img);
  img.addEventListener("click", function () {
    enemy.forEach(function (enemyy) {
      enemyy.position.x = -1000;
    });
    sprite.forEach(function (coinImage) {
      coinImage.position.x = -1000;
    });
    winss.forEach(function (wins) {
      wins.position.x = -6000;
    });
    init();
    clearLocal();
  });
}

function creatMenu() {
  var d = document.createElement('div');
  d.style.width = '260px';
  d.style.height = '220px';
  d.style.background = 'gray';
  d.style.position = 'absolute';
  d.style.textAlign = 'center';
  d.style.borderRadius = '4px';
  d.style.fontFamily = 'Orbitron';
  document.body.appendChild(d);

  function createInput() {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute('placeholder', 'Player name');
    d.appendChild(input);
    input.style.margin = '30px 0px 0px 0px';
    input.style.width = '180px';
    input.style.height = '35px';
    input.style.textAlign = 'Center';
    input.style.borderRadius = '4px';
    input.style.fontSize = '20px';
    input.style.backgroundColor = '#58bab3';
    input.style.color = 'white';
    input.id = "myName";
    input.style.fontFamily = 'Orbitron';
    input.style.borderStyle = 'none';
    input.style.outline = '0px';
  }

  createInput();

  function createStatistics() {
    var button = document.createElement("button");
    button.id = 'statistics';
    button.innerHTML = "Statistics";
    button.style.width = '180px';
    button.style.height = '35px';
    button.style.textAlign = 'center';
    button.style.margin = '0px 25px 25px 25px';
    button.style.fontSize = '25px';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#58bab3';
    button.style.color = '#808080';
    button.style.fontFamily = 'Orbitron';
    button.style.borderStyle = 'none';
    button.style.boxShadow = '5px 5px 5px black';
    d.appendChild(button);
    button.addEventListener("click", function () {
      mainStatistics();
      d.style.display = "none";
    });
  }

  function createButton() {
    var button = document.createElement("button");
    button.innerHTML = "Start";
    button.style.width = '180px';
    button.style.height = '35px';
    button.style.textAlign = 'center';
    button.style.margin = '25px';
    button.style.fontSize = '25px';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#58bab3';
    button.style.color = '#808080';
    button.style.fontFamily = 'Orbitron';
    button.style.borderStyle = 'none';
    button.style.boxShadow = '5px 5px 5px black'; // assuming the Div ID is bar

    d.appendChild(button); //the following function will alert a window when the button is clicked

    button.addEventListener("click", function () {
      init();
      animate();
      var div = document.createElement('div');
      div.id = 'plName';
      div.style.position = 'absolute';
      div.style.marginTop = '-500px';
      div.style.fontSize = '30px';
      div.style.color = 'white';
      div.style.marginLeft = '-850px';
      div.style.color = '#C0C0C0';
      document.body.appendChild(div);
      creatReset();
      creatPause();
      creatCent();
      creatCoin();
      localStorage.removeItem('on_load_counter');
      d.style.display = "none";

      if (document.getElementById("myName").value.length > 0) {
        document.getElementById("plName").innerHTML = document.getElementById("myName").value.slice(0, 8);
      } else {
        document.getElementById("plName").innerHTML = 'Unname';
      }

      playerName = document.getElementById("plName").innerHTML;
    });
  }

  createButton();
  createStatistics();
} // -----------------------------------------------------------статистика по игрокам


function mainStatistics() {
  var d = document.createElement('div');
  d.style.width = '260px';
  d.style.background = 'grey';
  d.style.position = 'absolute';
  d.style.textAlign = 'center';
  d.style.borderRadius = '5px';
  document.body.appendChild(d);

  function createStat() {
    if (localStorage.getItem('stat')) {
      var stat = JSON.parse(localStorage.getItem('stat'));
      var tbl = document.createElement('table');
      var trTop = tbl.insertRow();
      trTop.innerHTML = 'Best score:';
      trTop.style.textAlign = 'end';
      trTop.style.fontSize = '24px';
      trTop.style.margin = '0 0 25px 0';
      trTop.style.padding = '0 0 0 50px';
      trTop.style.color = 'white';

      for (var prop in stat) {
        var _tr2 = tbl.insertRow();

        _tr2.style.height = '30px';

        var td1 = _tr2.insertCell();

        td1.appendChild(document.createTextNode("".concat(prop)));

        var td2 = _tr2.insertCell();

        td2.appendChild(document.createTextNode("".concat(stat[prop])));
      }

      tbl.style.width = '220px';
      tbl.style.margin = '0 0 25px 0';
      d.appendChild(tbl);
    } else {
      var empty = document.createElement('div');
      empty.innerHTML = 'Statistic is empty!';
      empty.style.margin = '0 0 25px 0';
      d.appendChild(empty);
    }
  }

  function createExet() {
    var button = document.createElement("button");
    button.id = 'exet';
    button.innerHTML = "Menu";
    button.style.width = '180px';
    button.style.height = '40px';
    button.style.textAlign = 'center';
    button.style.margin = '25px 25px 25px 25px';
    button.style.fontSize = '25px';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#58bab3';
    button.style.color = '#808080';
    button.style.fontFamily = 'Orbitron';
    button.style.borderStyle = 'none';
    button.style.boxShadow = '5px 5px 5px black';
    d.appendChild(button);
    button.addEventListener("click", function () {
      d.style.display = "none";
      creatMenu();
    });
  }

  createExet();
  createStat();
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map