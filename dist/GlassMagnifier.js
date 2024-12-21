"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = _interopRequireDefault(require("./utils"));
var _reactInputPosition = _interopRequireWildcard(require("@stepkillah/react-input-position"));
var _GlassRenderer = _interopRequireDefault(require("./GlassRenderer"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GlassMagnifier = function GlassMagnifier(_ref) {
  var _ref$imageSrc = _ref.imageSrc,
    imageSrc = _ref$imageSrc === void 0 ? '' : _ref$imageSrc,
    _ref$largeImageSrc = _ref.largeImageSrc,
    largeImageSrc = _ref$largeImageSrc === void 0 ? '' : _ref$largeImageSrc,
    _ref$imageAlt = _ref.imageAlt,
    imageAlt = _ref$imageAlt === void 0 ? '' : _ref$imageAlt,
    _ref$allowOverflow = _ref.allowOverflow,
    allowOverflow = _ref$allowOverflow === void 0 ? false : _ref$allowOverflow,
    _ref$magnifierBorderS = _ref.magnifierBorderSize,
    magnifierBorderSize = _ref$magnifierBorderS === void 0 ? 3 : _ref$magnifierBorderS,
    _ref$magnifierBorderC = _ref.magnifierBorderColor,
    magnifierBorderColor = _ref$magnifierBorderC === void 0 ? 'rgba(255,255,255,.5)' : _ref$magnifierBorderC,
    _ref$magnifierBackgro = _ref.magnifierBackgroundColor,
    magnifierBackgroundColor = _ref$magnifierBackgro === void 0 ? 'rgba(225,225,225,.5)' : _ref$magnifierBackgro,
    _ref$magnifierSize = _ref.magnifierSize,
    magnifierSize = _ref$magnifierSize === void 0 ? '25%' : _ref$magnifierSize,
    _ref$magnifierOffsetX = _ref.magnifierOffsetX,
    magnifierOffsetX = _ref$magnifierOffsetX === void 0 ? 0 : _ref$magnifierOffsetX,
    _ref$magnifierOffsetY = _ref.magnifierOffsetY,
    magnifierOffsetY = _ref$magnifierOffsetY === void 0 ? 0 : _ref$magnifierOffsetY,
    _ref$square = _ref.square,
    square = _ref$square === void 0 ? false : _ref$square,
    _ref$cursorStyle = _ref.cursorStyle,
    cursorStyle = _ref$cursorStyle === void 0 ? 'none' : _ref$cursorStyle,
    _ref$onImageLoad = _ref.onImageLoad,
    onImageLoad = _ref$onImageLoad === void 0 ? _utils["default"].noop : _ref$onImageLoad,
    _ref$onLargeImageLoad = _ref.onLargeImageLoad,
    onLargeImageLoad = _ref$onLargeImageLoad === void 0 ? _utils["default"].noop : _ref$onLargeImageLoad,
    renderOverlay = _ref.renderOverlay,
    style = _ref.style,
    className = _ref.className,
    onZoomStart = _ref.onZoomStart,
    onZoomEnd = _ref.onZoomEnd;
  return /*#__PURE__*/_react["default"].createElement(_reactInputPosition["default"], {
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: 'relative',
      overflow: allowOverflow ? 'visible' : 'hidden'
    }),
    className: className,
    touchActivationMethod: _reactInputPosition.TOUCH_ACTIVATION.TOUCH,
    mouseActivationMethod: _reactInputPosition.MOUSE_ACTIVATION.HOVER,
    onActivate: onZoomStart,
    onDeactivate: onZoomEnd,
    trackItemPosition: true,
    alignItemOnActivePos: true,
    itemPositionLimitBySize: true
  }, /*#__PURE__*/_react["default"].createElement(_GlassRenderer["default"], {
    magnifierBorderSize: magnifierBorderSize,
    magnifierBorderColor: magnifierBorderColor,
    magnifierBackgroundColor: magnifierBackgroundColor,
    magnifierSize: magnifierSize,
    imageSrc: imageSrc,
    largeImageSrc: largeImageSrc,
    imageAlt: imageAlt,
    square: square,
    magnifierOffsetX: magnifierOffsetX,
    magnifierOffsetY: magnifierOffsetY,
    renderOverlay: renderOverlay,
    cursorStyle: cursorStyle,
    onImageLoad: onImageLoad,
    onLargeImageLoad: onLargeImageLoad
  }));
};
GlassMagnifier.propTypes = {
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  allowOverflow: _propTypes["default"].bool,
  magnifierBorderSize: _propTypes["default"].number,
  magnifierBorderColor: _propTypes["default"].string,
  magnifierBackgroundColor: _propTypes["default"].string,
  magnifierSize: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  magnifierOffsetX: _propTypes["default"].number,
  magnifierOffsetY: _propTypes["default"].number,
  square: _propTypes["default"].bool,
  cursorStyle: _propTypes["default"].string,
  renderOverlay: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onImageLoad: _propTypes["default"].func,
  onLargeImageLoad: _propTypes["default"].func
};
GlassMagnifier.defaultProps = {
  imageSrc: '',
  largeImageSrc: '',
  imageAlt: '',
  allowOverflow: false,
  magnifierBorderSize: 3,
  magnifierBorderColor: 'rgba(255,255,255,.5)',
  magnifierBackgroundColor: 'rgba(225,225,225,.5)',
  magnifierSize: '25%',
  magnifierOffsetX: 0,
  magnifierOffsetY: 0,
  square: false,
  cursorStyle: 'none',
  onImageLoad: _utils["default"].noop,
  onLargeImageLoad: _utils["default"].noop
};
var _default = exports["default"] = GlassMagnifier;