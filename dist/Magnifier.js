"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = _interopRequireDefault(require("./utils"));
var _reactInputPosition = _interopRequireWildcard(require("@stepkillah/react-input-position"));
var _MagnifierRenderer = _interopRequireDefault(require("./MagnifierRenderer"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Magnifier = function Magnifier(props) {
  var imageSrc = props.imageSrc,
    largeImageSrc = props.largeImageSrc,
    imageAlt = props.imageAlt,
    cursorStyle = props.cursorStyle,
    cursorStyleActive = props.cursorStyleActive,
    renderOverlay = props.renderOverlay,
    dragToMove = props.dragToMove,
    className = props.className,
    style = props.style,
    mouseActivation = props.mouseActivation,
    touchActivation = props.touchActivation,
    interactionSettings = props.interactionSettings,
    onImageLoad = props.onImageLoad,
    onLargeImageLoad = props.onLargeImageLoad,
    onImageError = props.onImageError,
    onLargeImageError = props.onLargeImageError,
    onZoomStart = props.onZoomStart,
    onZoomEnd = props.onZoomEnd;
  var finalActiveCursorStyle = cursorStyleActive || dragToMove ? 'move' : 'zoom-out';
  return /*#__PURE__*/_react["default"].createElement(_reactInputPosition["default"], _extends({
    style: style,
    className: className,
    touchActivationMethod: touchActivation,
    mouseActivationMethod: mouseActivation,
    trackItemPosition: true,
    centerItemOnActivatePos: dragToMove,
    alignItemOnActivePos: !dragToMove,
    onActivate: onZoomStart,
    onDeactivate: onZoomEnd,
    itemPositionLimitBySize: true
  }, interactionSettings), /*#__PURE__*/_react["default"].createElement(_MagnifierRenderer["default"], {
    imageSrc: imageSrc,
    largeImageSrc: largeImageSrc,
    imageAlt: imageAlt,
    renderOverlay: renderOverlay,
    cursorStyle: cursorStyle,
    cursorStyleActive: finalActiveCursorStyle,
    onImageLoad: onImageLoad,
    onLargeImageLoad: onLargeImageLoad,
    onImageError: onImageError,
    onLargeImageError: onLargeImageError
  }));
};
Magnifier.propTypes = {
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  cursorStyle: _propTypes["default"].string,
  cursorStyleActive: _propTypes["default"].string,
  renderOverlay: _propTypes["default"].func,
  dragToMove: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  mouseActivation: _propTypes["default"].string,
  touchActivation: _propTypes["default"].string,
  interactionSettings: _propTypes["default"].shape({
    tapDurationInMs: _propTypes["default"].number,
    doubleTapDurationInMs: _propTypes["default"].number,
    longTouchDurationInMs: _propTypes["default"].number,
    longTouchMoveLimit: _propTypes["default"].number,
    clickMoveLimit: _propTypes["default"].number
  }),
  onImageLoad: _propTypes["default"].func,
  onLargeImageLoad: _propTypes["default"].func
};
Magnifier.defaultProps = {
  imageSrc: '',
  largeImageSrc: '',
  imageAlt: '',
  cursorStyle: 'zoom-in',
  cursorStyleActive: '',
  dragToMove: true,
  mouseActivation: _reactInputPosition.MOUSE_ACTIVATION.CLICK,
  touchActivation: _reactInputPosition.TOUCH_ACTIVATION.TAP,
  interactionSettings: {},
  onImageLoad: _utils["default"].noop,
  onLargeImageLoad: _utils["default"].noop
};
var _default = exports["default"] = Magnifier;