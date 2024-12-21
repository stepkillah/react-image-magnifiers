"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MagnifierContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactInputPosition = require("@stepkillah/react-input-position");
var _utils = _interopRequireDefault(require("./utils"));
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
var MagnifierContext = exports.MagnifierContext = /*#__PURE__*/_react["default"].createContext();
var MagnifierContainer = /*#__PURE__*/function (_Component) {
  function MagnifierContainer() {
    var _this;
    _classCallCheck(this, MagnifierContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MagnifierContainer, [].concat(args));
    _defineProperty(_this, "state", {
      inputPositionState: _reactInputPosition.defaultState
    });
    _defineProperty(_this, "zoomContainerRef", /*#__PURE__*/_react["default"].createRef());
    _defineProperty(_this, "zoomImageRef", /*#__PURE__*/_react["default"].createRef());
    _defineProperty(_this, "zoomImageDimensions", {
      width: 0,
      height: 0
    });
    _defineProperty(_this, "getZoomContainerDimensions", function () {
      if (!_this.zoomContainerRef.current) {
        return {
          width: 0,
          height: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        };
      }
      var _this$zoomContainerRe = _this.zoomContainerRef.current.getBoundingClientRect(),
        width = _this$zoomContainerRe.width,
        height = _this$zoomContainerRe.height,
        left = _this$zoomContainerRe.left,
        right = _this$zoomContainerRe.right,
        top = _this$zoomContainerRe.top,
        bottom = _this$zoomContainerRe.bottom;
      return {
        width: width,
        height: height,
        left: left,
        right: right,
        top: top,
        bottom: bottom
      };
    });
    _defineProperty(_this, "onUpdate", function (changes) {
      _this.setState({
        inputPositionState: changes
      });
    });
    _defineProperty(_this, "onZoomImageLoad", function (e) {
      var rect = e.target.getBoundingClientRect();
      _this.zoomImageDimensions = {
        width: rect.width,
        height: rect.height
      };
    });
    return _this;
  }
  _inherits(MagnifierContainer, _Component);
  return _createClass(MagnifierContainer, [{
    key: "getZoomImageDimensions",
    value: function getZoomImageDimensions() {
      if (!this.zoomImageDimensions.width && this.zoomImageRef.current) {
        var rect = this.zoomImageRef.current.getBoundingClientRect();
        this.zoomImageDimensions = {
          width: rect.width,
          height: rect.height
        };
      }
      return this.zoomImageDimensions;
    }
  }, {
    key: "getContextValue",
    value: function getContextValue() {
      return _objectSpread({
        stateOverride: this.state.inputPositionState,
        isActive: this.state.inputPositionState.active,
        onUpdate: this.onUpdate,
        zoomImageDimensions: this.zoomImageDimensions,
        zoomRef: this.zoomContainerRef,
        zoomImageRef: this.zoomImageRef,
        onZoomImageLoad: this.onZoomImageLoad
      }, this.calculatePositions());
    }
  }, {
    key: "calculatePositions",
    value: function calculatePositions() {
      var _this$state$inputPosi = this.state.inputPositionState,
        elementDimensions = _this$state$inputPosi.elementDimensions,
        itemPosition = _this$state$inputPosi.itemPosition;
      var zoomContainerDimensions = this.getZoomContainerDimensions();
      var zoomImageDimensions = this.getZoomImageDimensions();
      var inPlace = false;
      var _this$props = this.props,
        autoInPlace = _this$props.autoInPlace,
        inPlaceMinBreakpoint = _this$props.inPlaceMinBreakpoint;
      if (autoInPlace || inPlaceMinBreakpoint) {
        try {
          var left = zoomContainerDimensions.left,
            right = zoomContainerDimensions.right;
          var windowWidth = window.innerWidth;
          if (windowWidth < inPlaceMinBreakpoint || left < 0 || right > windowWidth) {
            inPlace = true;
          }
        } catch (e) {}
      }
      var smallImageSize = {
        width: elementDimensions.width,
        height: elementDimensions.height
      };
      var previewSize = {
        width: Math.floor(smallImageSize.width * (zoomContainerDimensions.width / zoomImageDimensions.width)),
        height: Math.floor(smallImageSize.height * (zoomContainerDimensions.height / zoomImageDimensions.height))
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
      position.x = _utils["default"].convertRange(previewOffset.x, smallImageSize.width - previewOffset.x, zoomImageDimensions.width * -1 + zoomContainerSize.width, 0, position.x);
      position.y = _utils["default"].convertRange(previewOffset.y, smallImageSize.height - previewOffset.y, zoomImageDimensions.height * -1 + zoomContainerSize.height, 0, position.y);
      position.x = _utils["default"].invertNumber(zoomImageDimensions.width * -1 + zoomContainerSize.width, 0, position.x);
      position.y = _utils["default"].invertNumber(zoomImageDimensions.height * -1 + zoomContainerSize.height, 0, position.y);
      previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
      previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
      previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
      previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;
      return {
        position: position,
        smallImageSize: smallImageSize,
        previewSize: previewSize,
        zoomContainerDimensions: zoomContainerDimensions,
        inPlace: inPlace
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        style = _this$props2.style,
        className = _this$props2.className;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        className: className
      }, /*#__PURE__*/_react["default"].createElement(MagnifierContext.Provider, {
        value: this.getContextValue()
      }, this.props.children));
    }
  }]);
}(_react.Component);
_defineProperty(MagnifierContainer, "propTypes", {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  autoInPlace: _propTypes["default"].bool,
  inPlaceMinBreakpoint: _propTypes["default"].number
});
_defineProperty(MagnifierContainer, "defaultProps", {
  inPlaceMinBreakpoint: 0
});
var _default = exports["default"] = MagnifierContainer;