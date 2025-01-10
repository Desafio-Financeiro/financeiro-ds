"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Button(_ref) {
  var label = _ref.label,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "contained" : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "primary" : _ref$color,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onClick = _ref.onClick,
    sx = _ref.sx,
    isLoading = _ref.isLoading;
  return /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: variant,
    color: color,
    disabled: disabled !== null && disabled !== void 0 ? disabled : isLoading,
    onClick: onClick,
    sx: sx
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1"
  }, isLoading ? "Carregando..." : label));
}