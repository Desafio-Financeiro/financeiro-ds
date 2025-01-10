"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _icons = require("../icons");
var _button = require("../button");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Modal(_ref) {
  var title = _ref.title,
    handleClose = _ref.handleClose,
    handleConfirm = _ref.handleConfirm,
    content = _ref.content,
    open = _ref.open,
    confirmButtonText = _ref.confirmButtonText,
    cancelButtonText = _ref.cancelButtonText;
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    fullWidth: true,
    open: open,
    onClose: handleClose,
    PaperProps: {
      sx: {
        backgroundColor: theme.palette.background["default"]
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogTitle, null, title), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    "aria-label": "close",
    "data-testid": "close-button",
    onClick: handleClose,
    sx: function sx() {
      return {
        position: "absolute",
        right: 8,
        top: 8
      };
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.Icons, {
    color: theme.palette.primary.dark,
    name: "mdiClose"
  })), /*#__PURE__*/_react["default"].createElement(_material.DialogContent, null, content), /*#__PURE__*/_react["default"].createElement(_material.DialogActions, null, cancelButtonText && /*#__PURE__*/_react["default"].createElement(_button.Button, {
    color: "primary",
    variant: "outlined",
    onClick: handleClose,
    label: cancelButtonText
  }), confirmButtonText && /*#__PURE__*/_react["default"].createElement(_button.Button, {
    color: "primary",
    variant: "contained",
    onClick: handleConfirm,
    label: confirmButtonText
  })));
}