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
var _MagnifierPreviewRenderer = _interopRequireDefault(require("./MagnifierPreviewRenderer"));
var _MagnifierContainer = require("./MagnifierContainer");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function MagnifierPreview(_ref) {
  var _ref$cursorStyle = _ref.cursorStyle,
    cursorStyle = _ref$cursorStyle === void 0 ? 'crosshair' : _ref$cursorStyle,
    _ref$imageSrc = _ref.imageSrc,
    imageSrc = _ref$imageSrc === void 0 ? '' : _ref$imageSrc,
    _ref$imageAlt = _ref.imageAlt,
    imageAlt = _ref$imageAlt === void 0 ? '' : _ref$imageAlt,
    largeImageSrc = _ref.largeImageSrc,
    className = _ref.className,
    style = _ref.style,
    _ref$onImageLoad = _ref.onImageLoad,
    onImageLoad = _ref$onImageLoad === void 0 ? _utils["default"].noop : _ref$onImageLoad,
    _ref$onLargeImageLoad = _ref.onLargeImageLoad,
    onLargeImageLoad = _ref$onLargeImageLoad === void 0 ? _utils["default"].noop : _ref$onLargeImageLoad,
    renderOverlay = _ref.renderOverlay,
    _ref$overlayOpacity = _ref.overlayOpacity,
    overlayOpacity = _ref$overlayOpacity === void 0 ? 0.5 : _ref$overlayOpacity,
    _ref$overlayBoxOpacit = _ref.overlayBoxOpacity,
    overlayBoxOpacity = _ref$overlayBoxOpacit === void 0 ? 0.8 : _ref$overlayBoxOpacit,
    _ref$overlayBackgroun = _ref.overlayBackgroundColor,
    overlayBackgroundColor = _ref$overlayBackgroun === void 0 ? '#000' : _ref$overlayBackgroun,
    _ref$overlayBoxColor = _ref.overlayBoxColor,
    overlayBoxColor = _ref$overlayBoxColor === void 0 ? '#fff' : _ref$overlayBoxColor,
    _ref$overlayBoxImage = _ref.overlayBoxImage,
    overlayBoxImage = _ref$overlayBoxImage === void 0 ? '' : _ref$overlayBoxImage,
    _ref$overlayBoxImageS = _ref.overlayBoxImageSize,
    overlayBoxImageSize = _ref$overlayBoxImageS === void 0 ? '' : _ref$overlayBoxImageS,
    _ref$transitionSpeed = _ref.transitionSpeed,
    transitionSpeed = _ref$transitionSpeed === void 0 ? 0.4 : _ref$transitionSpeed,
    onZoomStart = _ref.onZoomStart,
    onZoomEnd = _ref.onZoomEnd,
    _ref$mouseActivation = _ref.mouseActivation,
    mouseActivation = _ref$mouseActivation === void 0 ? _reactInputPosition.MOUSE_ACTIVATION.HOVER : _ref$mouseActivation,
    _ref$touchActivation = _ref.touchActivation,
    touchActivation = _ref$touchActivation === void 0 ? _reactInputPosition.TOUCH_ACTIVATION.TOUCH : _ref$touchActivation;
  var _React$useContext = _react["default"].useContext(_MagnifierContainer.MagnifierContext),
    stateOverride = _React$useContext.stateOverride,
    onUpdate = _React$useContext.onUpdate,
    zoomImageDimensions = _React$useContext.zoomImageDimensions,
    previewSize = _React$useContext.previewSize,
    smallImageSize = _React$useContext.smallImageSize,
    position = _React$useContext.position,
    inPlace = _React$useContext.inPlace;
  return /*#__PURE__*/_react["default"].createElement(_reactInputPosition["default"], {
    touchActivationMethod: touchActivation,
    mouseActivationMethod: mouseActivation,
    onActivate: onZoomStart,
    onDeactivate: onZoomEnd,
    className: className,
    style: style,
    cursorStyle: cursorStyle,
    trackItemPosition: true,
    linkItemToActive: true,
    stateOverride: stateOverride,
    onUpdate: onUpdate
  }, /*#__PURE__*/_react["default"].createElement(_MagnifierPreviewRenderer["default"], {
    image: imageSrc,
    largeImage: largeImageSrc,
    alt: imageAlt,
    zoomImageDimensions: zoomImageDimensions,
    previewSize: previewSize,
    smallImageSize: smallImageSize,
    onImageLoad: onImageLoad,
    onLargeImageLoad: onLargeImageLoad,
    renderOverlay: renderOverlay,
    overlayOpacity: overlayOpacity,
    overlayBoxOpacity: overlayBoxOpacity,
    overlayBackgroundColor: overlayBackgroundColor,
    overlayBoxColor: overlayBoxColor,
    overlayBoxImage: overlayBoxImage,
    overlayBoxImageSize: overlayBoxImageSize,
    transitionSpeed: transitionSpeed,
    inPlace: inPlace,
    position: position
  }));
}
MagnifierPreview.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  cursorStyle: _propTypes["default"].string,
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  onImageLoad: _propTypes["default"].func,
  onLargeImageLoad: _propTypes["default"].func,
  renderOverlay: _propTypes["default"].func,
  overlayBoxOpacity: _propTypes["default"].number,
  overlayOpacity: _propTypes["default"].number,
  overlayBackgroundColor: _propTypes["default"].string,
  overlayBoxColor: _propTypes["default"].string,
  overlayBoxImage: _propTypes["default"].string,
  overlayBoxImageSize: _propTypes["default"].string,
  transitionSpeed: _propTypes["default"].number,
  mouseActivation: _propTypes["default"].string,
  touchActivation: _propTypes["default"].string
};
var _default = exports["default"] = MagnifierPreview;