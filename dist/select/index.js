"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = Select;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Select(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    options = _ref.options,
    placeholder = _ref.placeholder,
    label = _ref.label;
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.Stack, null, label && /*#__PURE__*/_react["default"].createElement(_material.FormLabel, {
    sx: {
      color: theme.palette.primary.dark
    }
  }, label), /*#__PURE__*/_react["default"].createElement(_material.Select, {
    value: value !== null && value !== void 0 ? value : "none",
    defaultValue: "none",
    onChange: function onChange(e) {
      return _onChange(e);
    },
    sx: {
      maxWidth: "355px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: "none",
    sx: {
      display: "none"
    }
  }, /*#__PURE__*/_react["default"].createElement("em", null, placeholder)), options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
      key: option.value,
      value: option.value,
      sx: {
        "&:hover": {
          backgroundColor: theme.palette.primary.light
        }
      }
    }, option.label);
  })));
}