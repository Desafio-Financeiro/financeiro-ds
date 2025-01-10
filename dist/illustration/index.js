"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Illustration = Illustration;
var _react = _interopRequireDefault(require("react"));
var _illustrationMapped = require("./illustrationMapped");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Illustration(_ref) {
  var name = _ref.name,
    width = _ref.width,
    height = _ref.height;
  var IllustrationRoot = _illustrationMapped.illustrationsMapped[name];
  return /*#__PURE__*/_react["default"].createElement(IllustrationRoot, {
    width: width,
    height: height
  });
}