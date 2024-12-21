"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function getLargeImageStyle(positionX, positionY, active) {
  return {
    position: "absolute",
    boxSizing: "border-box",
    display: "block",
    top: 0,
    left: 0,
    transform: "translate(".concat(positionX, "px, ").concat(positionY, "px)"),
    zIndex: "1",
    visibility: !active ? "hidden" : "visible",
    width: "auto"
  };
}
function getZoomContainerStyle(width, height, inPlace, switchSides) {
  var style = {
    position: "absolute",
    boxSizing: "border-box",
    pointerEvents: "none",
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    top: "0",
    overflow: "hidden"
  };
  if (inPlace) {
    style.left = "0px";
  } else if (switchSides) {
    style.right = "".concat(width, "px");
  } else {
    style.left = "".concat(width, "px");
  }
  return style;
}
function getOverlayCenterStyle(width, height, left, top, opacity, transitionSpeed, color, backgroundImage, backgroundImageSize) {
  var backgroundStyle = {};
  if (backgroundImage) {
    backgroundStyle.backgroundImage = "url(\"".concat(backgroundImage, "\")");
  }
  if (backgroundImageSize) {
    backgroundStyle.backgroundSize = backgroundImageSize;
  }
  return _objectSpread({
    position: "absolute",
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    left: 0,
    top: 0,
    boxSizing: "border-box",
    transform: "translate(".concat(left, "px, ").concat(top, "px)"),
    border: "1px solid ".concat(color),
    opacity: opacity,
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    zIndex: "15",
    pointerEvents: "none"
  }, backgroundStyle);
}
function getOverlayTopStyle(width, height, opacity, transitionSpeed, backgroundColor) {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0,
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    zIndex: "10",
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}
function getOverlayLeftStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    width: "".concat(width, "px"),
    top: "".concat(top, "px"),
    left: 0,
    height: "".concat(height, "px"),
    zIndex: "10",
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}
function getOverlayRightStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: "".concat(top, "px"),
    right: 0,
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    zIndex: "10",
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}
function getOverlayBottomStyle(width, height, top, opacity, transitionSpeed, backgroundColor) {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: "".concat(top, "px"),
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    zIndex: "10",
    transition: "opacity ".concat(transitionSpeed, "s ease"),
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}
function getMagnifierZoomStyle(active, transitionSpeed) {
  return {
    position: "relative",
    opacity: active ? 1 : 0,
    transition: "opacity ".concat(transitionSpeed, "s ease")
  };
}
var _default = exports["default"] = {
  getLargeImageStyle: getLargeImageStyle,
  getZoomContainerStyle: getZoomContainerStyle,
  getOverlayCenterStyle: getOverlayCenterStyle,
  getOverlayTopStyle: getOverlayTopStyle,
  getOverlayLeftStyle: getOverlayLeftStyle,
  getOverlayRightStyle: getOverlayRightStyle,
  getOverlayBottomStyle: getOverlayBottomStyle,
  getMagnifierZoomStyle: getMagnifierZoomStyle
};