"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PixelsTopLight = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PixelsTopLight = exports.PixelsTopLight = function PixelsTopLight(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 180 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 178 : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 ".concat(width, " ").concat(height),
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    opacity: "0.3"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "45",
    height: "45",
    transform: "matrix(-1 0 0 1 180 45)",
    fill: "#D9D9D9"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "45",
    height: "45",
    transform: "matrix(-1 0 0 1 135 45)",
    fill: "#D9D9D9",
    fillOpacity: "0.5"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "45",
    height: "45",
    transform: "matrix(-1 0 0 1 135 90)",
    fill: "#D9D9D9",
    fillOpacity: "0.9"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "45",
    height: "45",
    transform: "matrix(-1 0 0 1 89.9998 45)",
    fill: "#D9D9D9",
    fillOpacity: "0.9"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "45",
    height: "45",
    transform: "matrix(-1 0 0 1 45 45)",
    fill: "#D9D9D9",
    fillOpacity: "0.5"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "45",
    height: "45",
    transform: "matrix(-1 0 0 1 45 0)",
    fill: "#D9D9D9",
    fillOpacity: "0.9"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "45",
    height: "45",
    transform: "matrix(-1 0 0 1 180 132.465)",
    fill: "#D9D9D9",
    fillOpacity: "0.9"
  })));
};