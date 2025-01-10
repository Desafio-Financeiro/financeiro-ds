"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logos = Logos;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _illustration = require("../illustration");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Logos() {
  var _useTheme = (0, _material.useTheme)(),
    breakpoints = _useTheme.breakpoints;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: _defineProperty({
      display: "block"
    }, breakpoints.only("md"), {
      display: "none"
    })
  }, /*#__PURE__*/_react["default"].createElement(_illustration.Illustration, {
    name: "logo"
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: _defineProperty({
      display: "none"
    }, breakpoints.only("md"), {
      display: "block"
    })
  }, /*#__PURE__*/_react["default"].createElement(_illustration.Illustration, {
    name: "logoSmall"
  })));
}