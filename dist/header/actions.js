"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = Actions;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _button = require("../button");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Actions() {
  var _useTheme = (0, _material.useTheme)(),
    breakpoints = _useTheme.breakpoints,
    spacing = _useTheme.spacing;
  return /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    width: "fit-content",
    direction: "row",
    gap: spacing("large"),
    sx: _defineProperty({
      display: "flex"
    }, breakpoints.down("sm"), {
      display: "none"
    })
  }, /*#__PURE__*/_react["default"].createElement(_button.Button, {
    variant: "contained",
    color: "primary",
    label: "Abrir minha conta",
    onClick: function onClick() {
      return console.log("Abrir minha conta");
    },
    sx: {
      display: {
        xs: "none",
        lg: "block"
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    variant: "contained",
    color: "primary",
    label: "Abrir conta",
    onClick: function onClick() {
      return console.log("Abrir minha conta");
    },
    sx: {
      display: {
        xs: "block",
        lg: "none"
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    variant: "outlined",
    color: "primary",
    label: "J\xE1 tenho conta",
    onClick: function onClick() {
      return console.log("Acessar minha conta");
    }
  }));
}