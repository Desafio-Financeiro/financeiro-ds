"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicContent = PublicContent;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _actions = require("./actions");
var _logos = require("./logos");
var _menu = _interopRequireDefault(require("../menu"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function PublicContent(props) {
  var _useTheme = (0, _material.useTheme)(),
    breakpoints = _useTheme.breakpoints;
  return /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    width: "100%",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 24px"
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    alignItems: "center",
    useFlexGap: true,
    spacing: {
      md: "72px",
      xs: "10px"
    },
    sx: _defineProperty({
      width: "fit-content",
      padding: "0 24px"
    }, breakpoints.only("xs"), {
      width: "100%",
      flexDirection: "row-reverse",
      justifyContent: "space-between"
    })
  }, /*#__PURE__*/_react["default"].createElement(_logos.Logos, null), /*#__PURE__*/_react["default"].createElement(_menu["default"], {
    variant: "full"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_menu["default"].MenuItem, {
    handleClick: function handleClick() {
      return console.log("clicou no item");
    },
    active: true
  }, "Sobre"), /*#__PURE__*/_react["default"].createElement(_menu["default"].MenuItem, {
    handleClick: function handleClick() {
      return console.log("clicou no item");
    }
  }, "Servi\xE7os"))), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    sx: _defineProperty({
      display: "none"
    }, breakpoints.up("sm"), {
      display: "flex"
    }),
    component: "nav",
    direction: "row",
    gap: "40px"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    sx: {
      color: "primary.main"
    }
  }, "Sobre"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    sx: {
      color: "primary.main"
    }
  }, "Servi\xE7os"))), /*#__PURE__*/_react["default"].createElement(_actions.Actions, props));
}