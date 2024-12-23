"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = _interopRequireDefault(require("./utils"));
var _styles = _interopRequireDefault(require("./styles"));
var _MagnifierContainer = require("./MagnifierContainer");
var _Image = _interopRequireDefault(require("./Image"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function MagnifierZoom(_ref) {
  var className = _ref.className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$imageSrc = _ref.imageSrc,
    imageSrc = _ref$imageSrc === void 0 ? '' : _ref$imageSrc,
    _ref$imageAlt = _ref.imageAlt,
    imageAlt = _ref$imageAlt === void 0 ? '' : _ref$imageAlt,
    _ref$onImageLoad = _ref.onImageLoad,
    _onImageLoad = _ref$onImageLoad === void 0 ? _utils["default"].noop : _ref$onImageLoad,
    _ref$transitionSpeed = _ref.transitionSpeed,
    transitionSpeed = _ref$transitionSpeed === void 0 ? 0.4 : _ref$transitionSpeed;
  var _React$useContext = _react["default"].useContext(_MagnifierContainer.MagnifierContext),
    zoomImageDimensions = _React$useContext.zoomImageDimensions,
    zoomContainerDimensions = _React$useContext.zoomContainerDimensions,
    position = _React$useContext.position,
    onZoomImageLoad = _React$useContext.onZoomImageLoad,
    zoomRef = _React$useContext.zoomRef,
    zoomImageRef = _React$useContext.zoomImageRef,
    isActive = _React$useContext.isActive,
    inPlace = _React$useContext.inPlace;
  var invalidVertical = zoomImageDimensions.height <= zoomContainerDimensions.height;
  var invalidHorizontal = zoomImageDimensions.width <= zoomContainerDimensions.width;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread(_objectSpread(_objectSpread({}, _styles["default"].getMagnifierZoomStyle(isActive && !inPlace, transitionSpeed)), style), {}, {
      overflow: 'hidden',
      pointerEvents: 'none'
    }),
    ref: zoomRef
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    ref: zoomImageRef,
    style: _objectSpread({}, _styles["default"].getLargeImageStyle(invalidHorizontal ? 0 : position.x, invalidVertical ? 0 : position.y, true)),
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: function onImageLoad(e) {
      onZoomImageLoad(e);
      _onImageLoad(e);
    }
  }));
}
MagnifierZoom.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  onImageLoad: _propTypes["default"].func,
  transitionSpeed: _propTypes["default"].number
};
var _default = exports["default"] = MagnifierZoom;