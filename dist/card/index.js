"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = Card;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Card(_ref) {
  var sx = _ref.sx,
    title = _ref.title,
    children = _ref.children,
    type = _ref.type;
  var theme = (0, _material.useTheme)();
  var colorsByType = {
    "default": {
      backgroundColor: theme.palette.common.white
    },
    primary: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white
    },
    secondary: {
      backgroundColor: theme.palette.grey[400],
      color: theme.palette.primary.dark
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: _objectSpread(_objectSpread({
      padding: theme.spacing("large"),
      boxShadow: "none",
      borderRadius: theme.spacing("small")
    }, colorsByType[type]), sx)
  }, title && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h1",
    sx: {
      zIndex: 1
    }
  }, title), children);
}