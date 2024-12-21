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
function MagnifierPreview(props) {
  var imageSrc = props.imageSrc,
    imageAlt = props.imageAlt,
    largeImageSrc = props.largeImageSrc,
    className = props.className,
    style = props.style,
    cursorStyle = props.cursorStyle,
    onImageLoad = props.onImageLoad,
    onLargeImageLoad = props.onLargeImageLoad,
    renderOverlay = props.renderOverlay,
    overlayOpacity = props.overlayOpacity,
    overlayBoxOpacity = props.overlayBoxOpacity,
    overlayBackgroundColor = props.overlayBackgroundColor,
    overlayBoxColor = props.overlayBoxColor,
    overlayBoxImage = props.overlayBoxImage,
    overlayBoxImageSize = props.overlayBoxImageSize,
    transitionSpeed = props.transitionSpeed,
    onZoomStart = props.onZoomStart,
    onZoomEnd = props.onZoomEnd,
    mouseActivation = props.mouseActivation,
    touchActivation = props.touchActivation;
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
MagnifierPreview.defaultProps = {
  cursorStyle: 'crosshair',
  imageSrc: '',
  imageAlt: '',
  overlayOpacity: 0.5,
  overlayBoxOpacity: 0.8,
  overlayBackgroundColor: '#000',
  overlayBoxColor: '#fff',
  overlayBoxImage: '',
  overlayBoxImageSize: '',
  transitionSpeed: 0.4,
  onImageLoad: _utils["default"].noop,
  onLargeImageLoad: _utils["default"].noop,
  mouseActivation: _reactInputPosition.MOUSE_ACTIVATION.HOVER,
  touchActivation: _reactInputPosition.TOUCH_ACTIVATION.TOUCH
};
var _default = exports["default"] = MagnifierPreview;