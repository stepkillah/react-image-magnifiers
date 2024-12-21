"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GlassMagnifier", {
  enumerable: true,
  get: function get() {
    return _GlassMagnifier["default"];
  }
});
exports.MOUSE_ACTIVATION = void 0;
Object.defineProperty(exports, "Magnifier", {
  enumerable: true,
  get: function get() {
    return _Magnifier["default"];
  }
});
Object.defineProperty(exports, "MagnifierContainer", {
  enumerable: true,
  get: function get() {
    return _MagnifierContainer["default"];
  }
});
Object.defineProperty(exports, "MagnifierPreview", {
  enumerable: true,
  get: function get() {
    return _MagnifierPreview["default"];
  }
});
Object.defineProperty(exports, "MagnifierZoom", {
  enumerable: true,
  get: function get() {
    return _MagnifierZoom["default"];
  }
});
Object.defineProperty(exports, "PictureInPictureMagnifier", {
  enumerable: true,
  get: function get() {
    return _PictureInPictureMagnifier["default"];
  }
});
Object.defineProperty(exports, "SideBySideMagnifier", {
  enumerable: true,
  get: function get() {
    return _SideBySideMagnifier["default"];
  }
});
exports.TOUCH_ACTIVATION = void 0;
var _reactInputPosition = require("@stepkillah/react-input-position");
var _SideBySideMagnifier = _interopRequireDefault(require("./SideBySideMagnifier"));
var _Magnifier = _interopRequireDefault(require("./Magnifier"));
var _GlassMagnifier = _interopRequireDefault(require("./GlassMagnifier"));
var _PictureInPictureMagnifier = _interopRequireDefault(require("./PictureInPictureMagnifier"));
var _MagnifierContainer = _interopRequireDefault(require("./MagnifierContainer"));
var _MagnifierPreview = _interopRequireDefault(require("./MagnifierPreview"));
var _MagnifierZoom = _interopRequireDefault(require("./MagnifierZoom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MOUSE_ACTIVATION = exports.MOUSE_ACTIVATION = {
  CLICK: _reactInputPosition.MOUSE_ACTIVATION.CLICK,
  DOUBLE_CLICK: _reactInputPosition.MOUSE_ACTIVATION.DOUBLE_CLICK
};
var TOUCH_ACTIVATION = exports.TOUCH_ACTIVATION = {
  TAP: _reactInputPosition.TOUCH_ACTIVATION.TAP,
  DOUBLE_TAP: _reactInputPosition.TOUCH_ACTIVATION.DOUBLE_TAP,
  LONG_TOUCH: _reactInputPosition.TOUCH_ACTIVATION.LONG_TOUCH
};