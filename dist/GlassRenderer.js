"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = _interopRequireDefault(require("./utils"));
var _Image = _interopRequireDefault(require("./Image"));
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GlassRenderer = function GlassRenderer(props) {
  var itemRef = props.itemRef,
    itemPosition = props.itemPosition,
    activePosition = props.activePosition,
    elementDimensions = props.elementDimensions,
    itemDimensions = props.itemDimensions,
    active = props.active,
    imageSrc = props.imageSrc,
    largeImageSrc = props.largeImageSrc,
    imageAlt = props.imageAlt,
    magnifierBorderSize = props.magnifierBorderSize,
    magnifierBorderColor = props.magnifierBorderColor,
    magnifierBackgroundColor = props.magnifierBackgroundColor,
    square = props.square,
    magnifierSize = props.magnifierSize,
    magnifierOffsetX = props.magnifierOffsetX,
    magnifierOffsetY = props.magnifierOffsetY,
    renderOverlay = props.renderOverlay,
    cursorStyle = props.cursorStyle,
    onImageLoad = props.onImageLoad,
    onLargeImageLoad = props.onLargeImageLoad,
    onLoadRefresh = props.onLoadRefresh;
  var legalSize = itemDimensions.width > elementDimensions.width;
  var isActive = legalSize && active;
  var magnifierSizeNum = _utils["default"].convertWidthToPx(magnifierSize, elementDimensions.width);
  var positionOffset = magnifierSizeNum / 2;
  var position = {
    x: itemPosition.x - activePosition.x + positionOffset - magnifierBorderSize,
    y: itemPosition.y - activePosition.y + positionOffset - magnifierBorderSize
  };
  var divPosition = {
    x: activePosition.x - positionOffset + magnifierOffsetX,
    y: activePosition.y - positionOffset + magnifierOffsetY
  };
  var borderRadius = square ? "0" : "50%";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: {
      width: "100%",
      display: "block",
      boxSizing: "border-box",
      cursor: legalSize ? cursorStyle : "default"
    },
    src: imageSrc,
    alt: imageAlt,
    onImageLoad: onImageLoad,
    onLoadRefresh: onLoadRefresh
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, _styles["default"].getZoomContainerStyle(magnifierSizeNum, magnifierSizeNum, true)), {}, {
      visibility: !isActive ? "hidden" : "visible",
      borderRadius: borderRadius,
      zIndex: "1",
      border: "".concat(magnifierBorderSize, "px solid ").concat(magnifierBorderColor),
      transform: "translate(".concat(divPosition.x, "px, ").concat(divPosition.y, "px)"),
      backgroundColor: magnifierBackgroundColor,
      backgroundClip: "padding-box"
    })
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    style: _styles["default"].getLargeImageStyle(position.x, position.y, isActive),
    ref: itemRef,
    src: largeImageSrc || imageSrc,
    alt: imageAlt,
    onImageLoad: onLargeImageLoad,
    onLoadRefresh: onLoadRefresh
  })), renderOverlay ? renderOverlay(active) : null);
};
var _default = exports["default"] = GlassRenderer;