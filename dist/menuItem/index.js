"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = MenuItem;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function MenuItem(_ref) {
  var children = _ref.children,
    active = _ref.active,
    disabled = _ref.disabled,
    handleClick = _ref.handleClick,
    sx = _ref.sx;
  return /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    sx: sx,
    onClick: handleClick,
    className: "menu-item-menu-component ".concat(active ? "active" : ""),
    disabled: disabled
  }, children);
}