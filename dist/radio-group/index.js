"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function RadioButton(_ref) {
  var value = _ref.value,
    label = _ref.label;
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    sx: {
      color: theme.palette.common.black
    },
    value: value,
    control: /*#__PURE__*/_react["default"].createElement(_material.Radio, null),
    label: label
  });
}
function RadioGroup(_ref2) {
  var label = _ref2.label,
    inputName = _ref2.inputName,
    value = _ref2.value,
    children = _ref2.children,
    handleChange = _ref2.handleChange,
    sx = _ref2.sx,
    radioGroupSx = _ref2.radioGroupSx;
  return /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    sx: sx
  }, /*#__PURE__*/_react["default"].createElement(_material.FormLabel, {
    id: "radio-group-".concat(inputName)
  }, label), /*#__PURE__*/_react["default"].createElement(_material.RadioGroup, {
    row: true,
    "aria-labelledby": "radio-group-".concat(inputName),
    name: inputName,
    value: value,
    onChange: handleChange,
    sx: _objectSpread({
      backgroundColor: "white",
      padding: "8px 12px",
      borderRadius: "8px",
      border: "1px solid rgba(0, 0, 0, 0.23)"
    }, radioGroupSx)
  }, children));
}
RadioGroup.RadioButton = RadioButton;
var _default = exports["default"] = RadioGroup;