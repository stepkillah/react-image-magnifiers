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
var PictureInPictureRenderer = function PictureInPictureRenderer(props) {
  var active = props.active,
    itemPosition = props.itemPosition,
    elementDimensions = props.elementDimensions,
    itemDimensions = props.itemDimensions,
    imageSrc = props.imageSrc,
    largeImageSrc = props.largeImageSrc,
    imageAlt = props.imageAlt,
    itemRef = props.itemRef,
    previewSizePercentage = props.previewSizePercentage,
    containerRef = props.containerRef,
    previewVerticalPos = props.previewVerticalPos,
    previewOpacity = props.previewOpacity,
    previewOverlayOpacity = props.previewOverlayOpacity,
    previewOverlayBoxOpacity = props.previewOverlayBoxOpacity,
    previewOverlayBackgroundColor = props.previewOverlayBackgroundColor,
    previewOverlayBoxColor = props.previewOverlayBoxColor,
    previewOverlayBoxImage = props.previewOverlayBoxImage,
    previewOverlayBoxImageSize = props.previewOverlayBoxImageSize,
    renderOverlay = props.renderOverlay,
    cursorStyle = props.cursorStyle,
    cursorStyleActive = props.cursorStyleActive,
    onLoadRefresh = props.onLoadRefresh,
    _onImageLoad = props.onImageLoad,
    onLargeImageLoad = props.onLargeImageLoad;
  var sizeMult = 100 / previewSizePercentage;
  var containerTop = 0;
  var containerLeft = 0;
  var containerWidth = 0;
  if (containerRef.current) {
    containerWidth = containerRef.current.getBoundingClientRect().width;
    if (previewVerticalPos === "bottom") {
      containerTop = elementDimensions.height * (sizeMult - 1);
      containerRef.current.style.paddingTop = "".concat(containerTop, "px");
    } else {
      containerRef.current.style.paddingBottom = "".concat(elementDimensions.height * (sizeMult - 1), "px");
    }
    if (containerRef.current.style.textAlign === "right") {
      containerLeft = elementDimensions.width * (sizeMult - 1);
    }
  }
  var smallImageSize = {
    width: elementDimensions.width,
    height: elementDimensions.height
  };
  var previewSize = {
    width: Math.floor(smallImageSize.width * (smallImageSize.width / itemDimensions.width) * sizeMult),
    height: Math.floor(smallImageSize.height * (smallImageSize.height / itemDimensions.height) * sizeMult)
  };
  if (isNaN(previewSize.width)) {
    previewSize.width = 0;
    previewSize.height = 0;
  }
  var position = {
    x: 0,
    y: 0
  };
  var itemPositionAdj = _objectSpread({}, itemPosition);
  var previewOffset = {
    x: previewSize.width / 2,
    y: previewSize.height / 2
  };
  itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
  itemPositionAdj.x = Math.min(smallImageSize.width - previewOffset.x, itemPositionAdj.x);
  itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
  itemPositionAdj.y = Math.min(smallImageSize.height - previewOffset.y, itemPositionAdj.y);
  position = _objectSpread({}, itemPositionAdj);
  position.x = _utils["default"].convertRange(previewOffset.x, smallImageSize.width - previewOffset.x, itemDimensions.width * -1 + containerWidth, 0, position.x);
  position.y = _utils["default"].convertRange(previewOffset.y, smallImageSize.height - previewOffset.y, itemDimensions.height * -1 + smallImageSize.height * sizeMult, 0, position.y);
  position.x = _utils["default"].invertNumber(itemDimensions.width * -1 + containerWidth, 0, position.x);
  position.y = _utils["default"].invertNumber(itemDimensions.height * -1 + smallImageSize.height * sizeMult, 0, position.y);
  previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
  previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
  previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
  previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;
  var legalSize = previewSize.width < smallImageSize.width;
  var finalCursorStyle = active ? cursorStyleActive : cursorStyle;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative",
      cursor: legalSize ? finalCursorStyle : "default"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: {
      width: "100%",
      display: "block",
      opacity: previewOpacity,
      visibility: legalSize ? "visible" : "hidden"
    },
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: function onImageLoad(e) {
      onLoadRefresh();
      _onImageLoad(e);
    },
    onLoadRefresh: onLoadRefresh
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(smallImageSize.width, smallImageSize.height, true)), {}, {
      width: containerWidth + "px",
      height: elementDimensions.height * sizeMult + "px",
      position: "absolute",
      left: -containerLeft,
      top: -containerTop,
      fontSize: "1rem"
    })
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: _objectSpread(_objectSpread({}, _styles["default"].getLargeImageStyle(position.x, position.y, true)), {}, {
      visibility: legalSize ? "visible" : "hidden",
      zIndex: "-1"
    }),
    src: largeImageSrc || imageSrc,
    alt: imageAlt,
    ref: itemRef,
    onImageLoad: onLargeImageLoad,
    onLoadRefresh: onLoadRefresh
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: imageSrc,
    alt: imageAlt,
    style: {
      display: legalSize ? "none" : "block",
      width: "100%"
    }
  }), renderOverlay ? renderOverlay(active) : null), /*#__PURE__*/_react["default"].createElement(_ImagePreviewOverlay["default"], {
    previewWidth: previewSize.width,
    previewHeight: previewSize.height,
    previewPosLeft: previewSize.left,
    previewPosRight: previewSize.right,
    previewPosTop: previewSize.top,
    previewPosBottom: previewSize.bottom,
    imageWidth: smallImageSize.width,
    imageHeight: smallImageSize.height,
    overlayOpacity: previewOverlayOpacity,
    overlayBoxOpacity: previewOverlayBoxOpacity,
    overlayBackgroundColor: previewOverlayBackgroundColor,
    overlayBoxColor: previewOverlayBoxColor,
    overlayBoxImage: previewOverlayBoxImage,
    overlayBoxImageSize: previewOverlayBoxImageSize,
    active: legalSize
  }));
};
var _default = exports["default"] = PictureInPictureRenderer;