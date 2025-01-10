"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = Toast;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Toast(_ref) {
  var handleClose = _ref.handleClose,
    isOpen = _ref.isOpen,
    type = _ref.type,
    content = _ref.content,
    anchorOrigin = _ref.anchorOrigin;
  return /*#__PURE__*/_react["default"].createElement(_material.Snackbar, {
    open: isOpen,
    autoHideDuration: 6000,
    onClose: handleClose,
    anchorOrigin: anchorOrigin !== null && anchorOrigin !== void 0 ? anchorOrigin : {
      vertical: "top",
      horizontal: "right"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Alert, {
    onClose: handleClose,
    severity: type,
    variant: "filled",
    sx: {
      width: "100%"
    }
  }, content));
}