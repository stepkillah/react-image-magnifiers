"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = _interopRequireDefault(require("./utils"));
var _styles = _interopRequireDefault(require("./styles"));
var _Image = _interopRequireDefault(require("./Image"));
var _ImagePreviewOverlay = _interopRequireDefault(require("./ImagePreviewOverlay"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SideBySideRenderer = function SideBySideRenderer(props) {
  var itemPosition = props.itemPosition,
    active = props.active,
    elementDimensions = props.elementDimensions,
    elementOffset = props.elementOffset,
    itemDimensions = props.itemDimensions,
    imageSrc = props.imageSrc,
    largeImageSrc = props.largeImageSrc,
    imageAlt = props.imageAlt,
    itemRef = props.itemRef,
    overlayOpacity = props.overlayOpacity,
    overlayBoxOpacity = props.overlayBoxOpacity,
    overlayBackgroundColor = props.overlayBackgroundColor,
    overlayBoxColor = props.overlayBoxColor,
    overlayBoxImage = props.overlayBoxImage,
    overlayBoxImageSize = props.overlayBoxImageSize,
    alwaysInPlace = props.alwaysInPlace,
    transitionSpeed = props.transitionSpeed,
    transitionSpeedInPlace = props.transitionSpeedInPlace,
    renderOverlay = props.renderOverlay,
    cursorStyle = props.cursorStyle,
    onImageLoad = props.onImageLoad,
    onLargeImageLoad = props.onLargeImageLoad,
    onLoadRefresh = props.onLoadRefresh,
    switchSides = props.switchSides,
    fillAvailableSpace = props.fillAvailableSpace,
    fillAlignTop = props.fillAlignTop,
    fillGapLeft = props.fillGapLeft,
    fillGapRight = props.fillGapRight,
    fillGapTop = props.fillGapTop,
    fillGapBottom = props.fillGapBottom,
    inPlaceMinBreakpoint = props.inPlaceMinBreakpoint,
    zoomContainerBorder = props.zoomContainerBorder,
    zoomContainerBoxShadow = props.zoomContainerBoxShadow;
  var zoomContainerDimensions = {
    width: elementDimensions.width,
    height: elementDimensions.height
  };
  var zoomContainerStyle = {};
  var availableWidth = 0;
  var availableHeight = 0;
  var windowWidth = 0;
  var zoomGapVertical = fillGapTop + fillGapBottom;
  var zoomGapHorizontal = fillGapLeft + fillGapRight;
  try {
    var _document$documentEle = document.documentElement,
      clientWidth = _document$documentEle.clientWidth,
      clientHeight = _document$documentEle.clientHeight;
    var _window = window,
      innerWidth = _window.innerWidth;
    availableWidth = clientWidth;
    availableHeight = clientHeight;
    windowWidth = innerWidth;
  } catch (e) {}
  var inPlace = alwaysInPlace || windowWidth < inPlaceMinBreakpoint;
  if (fillAvailableSpace && !inPlace) {
    var left = elementDimensions.width + elementOffset.left;
    if (fillAlignTop) {
      zoomContainerDimensions.height = Math.min(itemDimensions.height, availableHeight - elementOffset.top - zoomGapVertical + fillGapTop);
      zoomContainerDimensions.top = fillGapTop;
    } else {
      zoomContainerDimensions.height = Math.min(itemDimensions.height, availableHeight - zoomGapVertical);
      var offsetTop = -elementOffset.top + fillGapTop;
      var maxOffsetTop = availableHeight - elementOffset.top - (zoomContainerDimensions.height + fillGapBottom);
      var limitedTop = Math.max(offsetTop, maxOffsetTop);
      zoomContainerDimensions.top = limitedTop;
    }
    zoomContainerDimensions.top = Math.min(zoomContainerDimensions.top, 0);
    zoomContainerStyle.top = "".concat(zoomContainerDimensions.top, "px");
    if (switchSides) {
      zoomContainerDimensions.width = Math.min(itemDimensions.width, elementOffset.left - zoomGapHorizontal);
      zoomContainerDimensions.right = elementDimensions.width + fillGapRight;
      zoomContainerStyle.right = "".concat(zoomContainerDimensions.right, "px");
    } else {
      zoomContainerDimensions.width = Math.min(itemDimensions.width, availableWidth - left - zoomGapHorizontal);
      zoomContainerDimensions.left = elementDimensions.width + fillGapLeft;
      zoomContainerStyle.left = "".concat(zoomContainerDimensions.left, "px");
    }
  } else {
    if (switchSides) {
      inPlace = inPlace || elementOffset.left < elementDimensions.width;
    } else {
      inPlace = inPlace || elementDimensions.width * 2 + elementOffset.left > availableWidth;
    }
  }
  var legalSize = itemDimensions.width > elementDimensions.width;
  var isActive = legalSize && active;
  var transSpeed = inPlace ? transitionSpeedInPlace : transitionSpeed;
  var smallImageSize = {
    width: elementDimensions.width,
    height: elementDimensions.height
  };
  var previewSize = {
    width: Math.floor(smallImageSize.width * (zoomContainerDimensions.width / itemDimensions.width)),
    height: Math.floor(smallImageSize.height * (zoomContainerDimensions.height / itemDimensions.height))
  };
  var position = {
    x: 0,
    y: 0
  };
  var itemPositionAdj = _objectSpread({}, itemPosition);
  var previewOffset = {
    x: inPlace ? 0 : previewSize.width / 2,
    y: inPlace ? 0 : previewSize.height / 2
  };
  itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
  itemPositionAdj.x = Math.min(smallImageSize.width - previewOffset.x, itemPositionAdj.x);
  itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
  itemPositionAdj.y = Math.min(smallImageSize.height - previewOffset.y, itemPositionAdj.y);
  position = _objectSpread({}, itemPositionAdj);
  var zoomContainerSize = inPlace ? smallImageSize : zoomContainerDimensions;
  position.x = _utils["default"].convertRange(previewOffset.x, smallImageSize.width - previewOffset.x, itemDimensions.width * -1 + zoomContainerSize.width, 0, position.x);
  position.y = _utils["default"].convertRange(previewOffset.y, smallImageSize.height - previewOffset.y, itemDimensions.height * -1 + zoomContainerSize.height, 0, position.y);
  position.x = _utils["default"].invertNumber(itemDimensions.width * -1 + zoomContainerSize.width, 0, position.x);
  position.y = _utils["default"].invertNumber(itemDimensions.height * -1 + zoomContainerSize.height, 0, position.y);
  previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
  previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
  previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
  previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: {
      width: "100%",
      display: "block",
      cursor: legalSize ? cursorStyle : "default"
    },
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: onImageLoad,
    onLoadRefresh: onLoadRefresh
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(zoomContainerSize.width, zoomContainerSize.height, inPlace, switchSides)), {}, {
      opacity: isActive ? "1" : "0",
      transition: "opacity ".concat(transSpeed, "s ease"),
      zIndex: "100"
    }, zoomContainerStyle), {}, {
      border: zoomContainerBorder,
      boxShadow: zoomContainerBoxShadow
    })
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: _styles["default"].getLargeImageStyle(position.x, position.y, true),
    src: largeImageSrc || imageSrc,
    alt: imageAlt,
    ref: itemRef,
    onImageLoad: onLargeImageLoad,
    onLoadRefresh: onLoadRefresh
  })), /*#__PURE__*/_react["default"].createElement(_ImagePreviewOverlay["default"], {
    previewWidth: previewSize.width,
    previewHeight: previewSize.height,
    previewPosLeft: previewSize.left,
    previewPosRight: previewSize.right,
    previewPosTop: previewSize.top,
    previewPosBottom: previewSize.bottom,
    imageWidth: smallImageSize.width,
    imageHeight: smallImageSize.height,
    overlayOpacity: overlayOpacity,
    overlayBoxOpacity: overlayBoxOpacity,
    overlayBackgroundColor: overlayBackgroundColor,
    overlayBoxColor: overlayBoxColor,
    overlayBoxImage: overlayBoxImage,
    overlayBoxImageSize: overlayBoxImageSize,
    active: isActive && !inPlace,
    transitionSpeed: transSpeed
  }), renderOverlay ? renderOverlay(active) : null);
};
var _default = exports["default"] = SideBySideRenderer;