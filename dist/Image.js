"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = _interopRequireDefault(require("./utils"));
var _excluded = ["onImageLoad", "onLoadRefresh", "src", "alt"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Image = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$onImageLoad = _ref.onImageLoad,
    onImageLoad = _ref$onImageLoad === void 0 ? _utils["default"].noop : _ref$onImageLoad,
    _ref$onLoadRefresh = _ref.onLoadRefresh,
    onLoadRefresh = _ref$onLoadRefresh === void 0 ? _utils["default"].noop : _ref$onLoadRefresh,
    src = _ref.src,
    alt = _ref.alt,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var _React$useState = _react["default"].useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    imageIdx = _React$useState2[0],
    setImageIdx = _React$useState2[1];
  var imageErrorRef = _react["default"].useRef(false);
  var imageArr = src.constructor === Array ? src : [src];
  return /*#__PURE__*/_react["default"].createElement("img", _extends({
    ref: ref,
    src: imageArr[imageIdx],
    alt: alt,
    onLoad: function onLoad(e) {
      onImageLoad(e);
      if (imageErrorRef.current) {
        onLoadRefresh();
      }
    },
    onError: function onError(e) {
      if (imageIdx < imageArr.length) {
        imageErrorRef.current = true;
        setImageIdx(function (idx) {
          return idx + 1;
        });
      }
    }
  }, otherProps));
});
var _default = exports["default"] = Image;