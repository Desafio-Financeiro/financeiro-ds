"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _loggedContent = require("./logged-content");
var _publicContent = require("./public-content");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Header(_ref) {
  var isLogged = _ref.isLogged,
    userName = _ref.userName,
    children = _ref.children;
  var _useTheme = (0, _material.useTheme)(),
    palette = _useTheme.palette;
  return /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    component: "header",
    width: "100%",
    direction: "row",
    height: "94px",
    alignItems: "center",
    bgcolor: isLogged ? palette.action.active : palette.common.black
  }, isLogged ? /*#__PURE__*/_react["default"].createElement(_loggedContent.LoggedContent, {
    userName: userName
  }, children) : /*#__PURE__*/_react["default"].createElement(_publicContent.PublicContent, null));
}