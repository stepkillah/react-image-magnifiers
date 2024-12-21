"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ImagePreviewOverlay = function ImagePreviewOverlay(_ref) {
  var previewWidth = _ref.previewWidth,
    previewHeight = _ref.previewHeight,
    previewPosLeft = _ref.previewPosLeft,
    previewPosRight = _ref.previewPosRight,
    previewPosTop = _ref.previewPosTop,
    previewPosBottom = _ref.previewPosBottom,
    imageWidth = _ref.imageWidth,
    imageHeight = _ref.imageHeight,
    _ref$overlayOpacity = _ref.overlayOpacity,
    overlayOpacity = _ref$overlayOpacity === void 0 ? 0.5 : _ref$overlayOpacity,
    _ref$overlayBoxOpacit = _ref.overlayBoxOpacity,
    overlayBoxOpacity = _ref$overlayBoxOpacit === void 0 ? 0.8 : _ref$overlayBoxOpacit,
    active = _ref.active,
    _ref$transitionSpeed = _ref.transitionSpeed,
    transitionSpeed = _ref$transitionSpeed === void 0 ? 0.4 : _ref$transitionSpeed,
    _ref$overlayBackgroun = _ref.overlayBackgroundColor,
    overlayBackgroundColor = _ref$overlayBackgroun === void 0 ? '#000' : _ref$overlayBackgroun,
    _ref$overlayBoxColor = _ref.overlayBoxColor,
    overlayBoxColor = _ref$overlayBoxColor === void 0 ? '#fff' : _ref$overlayBoxColor,
    _ref$overlayBoxImage = _ref.overlayBoxImage,
    overlayBoxImage = _ref$overlayBoxImage === void 0 ? '' : _ref$overlayBoxImage,
    _ref$overlayBoxImageS = _ref.overlayBoxImageSize,
    overlayBoxImageSize = _ref$overlayBoxImageS === void 0 ? '' : _ref$overlayBoxImageS;
  var opacity = active ? overlayOpacity : 0;
  var boxOpacity = active ? overlayBoxOpacity : 0;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayCenterStyle(previewWidth, previewHeight, previewPosLeft, previewPosTop, boxOpacity, transitionSpeed, overlayBoxColor, overlayBoxImage, overlayBoxImageSize)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayTopStyle(imageWidth, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayLeftStyle(previewPosLeft, previewHeight, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayRightStyle(imageWidth - previewPosRight, previewHeight, previewPosTop, opacity, transitionSpeed, overlayBackgroundColor)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _styles["default"].getOverlayBottomStyle(imageWidth, imageHeight - previewPosBottom, previewPosBottom, opacity, transitionSpeed, overlayBackgroundColor)
  }));
};
var _default = exports["default"] = ImagePreviewOverlay;