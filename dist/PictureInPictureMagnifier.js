"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = _interopRequireDefault(require("./utils"));
var _reactInputPosition = _interopRequireWildcard(require("@stepkillah/react-input-position"));
var _PictureInPictureRenderer = _interopRequireDefault(require("./PictureInPictureRenderer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PictureInPictureMagnifier = /*#__PURE__*/function (_Component) {
  function PictureInPictureMagnifier() {
    var _this;
    _classCallCheck(this, PictureInPictureMagnifier);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, PictureInPictureMagnifier, [].concat(args));
    _defineProperty(_this, "containerRef", /*#__PURE__*/_react["default"].createRef());
    return _this;
  }
  _inherits(PictureInPictureMagnifier, _Component);
  return _createClass(PictureInPictureMagnifier, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        imageSrc = _this$props.imageSrc,
        largeImageSrc = _this$props.largeImageSrc,
        imageAlt = _this$props.imageAlt,
        previewSizePercentage = _this$props.previewSizePercentage,
        previewHorizontalPos = _this$props.previewHorizontalPos,
        previewVerticalPos = _this$props.previewVerticalPos,
        previewOpacity = _this$props.previewOpacity,
        previewOverlayOpacity = _this$props.previewOverlayOpacity,
        previewOverlayBoxOpacity = _this$props.previewOverlayBoxOpacity,
        previewOverlayBackgroundColor = _this$props.previewOverlayBackgroundColor,
        previewOverlayBoxColor = _this$props.previewOverlayBoxColor,
        previewOverlayBoxImage = _this$props.previewOverlayBoxImage,
        previewOverlayBoxImageSize = _this$props.previewOverlayBoxImageSize,
        cursorStyle = _this$props.cursorStyle,
        cursorStyleActive = _this$props.cursorStyleActive,
        shadow = _this$props.shadow,
        shadowColor = _this$props.shadowColor,
        renderOverlay = _this$props.renderOverlay,
        className = _this$props.className,
        style = _this$props.style,
        onImageLoad = _this$props.onImageLoad,
        onLargeImageLoad = _this$props.onLargeImageLoad,
        onZoomStart = _this$props.onZoomStart,
        onZoomEnd = _this$props.onZoomEnd;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.containerRef,
        style: _objectSpread(_objectSpread({}, style), {}, {
          textAlign: previewHorizontalPos,
          overflow: 'hidden',
          fontSize: '0'
        }),
        className: className
      }, /*#__PURE__*/_react["default"].createElement(_reactInputPosition["default"], {
        style: {
          width: "".concat(previewSizePercentage, "%"),
          display: 'inline-block',
          boxShadow: shadow ? "1px -1px 1px ".concat(shadowColor) : 'none'
        },
        touchActivationMethod: _reactInputPosition.TOUCH_ACTIVATION.TOUCH,
        mouseActivationMethod: _reactInputPosition.MOUSE_ACTIVATION.MOUSE_DOWN,
        onActivate: onZoomStart,
        onDeactivate: onZoomEnd,
        trackItemPosition: true,
        itemPositionMinX: 0,
        itemPositionMinY: 0,
        itemPositionMaxX: -0.1,
        itemPositionMaxY: -0.1,
        linkItemToActive: true,
        centerItemOnLoad: true
      }, /*#__PURE__*/_react["default"].createElement(_PictureInPictureRenderer["default"], {
        containerRef: this.containerRef,
        previewSizePercentage: previewSizePercentage,
        previewVerticalPos: previewVerticalPos,
        previewOpacity: previewOpacity,
        previewOverlayOpacity: previewOverlayOpacity,
        previewOverlayBoxOpacity: previewOverlayBoxOpacity,
        previewOverlayBackgroundColor: previewOverlayBackgroundColor,
        previewOverlayBoxColor: previewOverlayBoxColor,
        previewOverlayBoxImage: previewOverlayBoxImage,
        previewOverlayBoxImageSize: previewOverlayBoxImageSize,
        imageSrc: imageSrc,
        largeImageSrc: largeImageSrc,
        imageAlt: imageAlt,
        renderOverlay: renderOverlay,
        cursorStyle: cursorStyle,
        cursorStyleActive: cursorStyleActive || cursorStyle,
        onImageLoad: onImageLoad,
        onLargeImageLoad: onLargeImageLoad
      })));
    }
  }]);
}(_react.Component);
_defineProperty(PictureInPictureMagnifier, "propTypes", {
  imageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  largeImageSrc: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  imageAlt: _propTypes["default"].string,
  previewSizePercentage: _propTypes["default"].number,
  previewHorizontalPos: _propTypes["default"].oneOf(['left', 'right']),
  previewVerticalPos: _propTypes["default"].oneOf(['top', 'bottom']),
  previewOpacity: _propTypes["default"].number,
  previewOverlayOpacity: _propTypes["default"].number,
  previewOverlayBoxOpacity: _propTypes["default"].number,
  previewOverlayBackgroundColor: _propTypes["default"].string,
  previewOverlayBoxColor: _propTypes["default"].string,
  previewOverlayBoxImage: _propTypes["default"].string,
  previewOverlayBoxImageSize: _propTypes["default"].string,
  cursorStyle: _propTypes["default"].string,
  cursorStyleActive: _propTypes["default"].string,
  shadow: _propTypes["default"].bool,
  shadowColor: _propTypes["default"].string,
  renderOverlay: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onImageLoad: _propTypes["default"].func,
  onLargeImageLoad: _propTypes["default"].func,
  onZoomStart: _propTypes["default"].func,
  onZoomEnd: _propTypes["default"].func
});
_defineProperty(PictureInPictureMagnifier, "defaultProps", {
  imageSrc: '',
  largeImageSrc: '',
  imageAlt: '',
  previewSizePercentage: 35,
  previewHorizontalPos: 'left',
  previewVerticalPos: 'bottom',
  previewOpacity: 0.8,
  previewOverlayOpacity: 0.4,
  previewOverlayBoxOpacity: 0.8,
  previewOverlayBackgroundColor: '#000',
  previewOverlayBoxColor: '#fff',
  previewOverlayBoxImage: '',
  previewOverlayBoxImageSize: '',
  cursorStyle: 'crosshair',
  cursorStyleActive: '',
  shadowColor: 'rgba(0,0,0,.4)',
  onImageLoad: _utils["default"].noop,
  onLargeImageLoad: _utils["default"].noop
});
var _default = exports["default"] = PictureInPictureMagnifier;